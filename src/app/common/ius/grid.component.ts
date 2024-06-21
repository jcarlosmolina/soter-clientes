﻿import { ChangeDetectionStrategy, Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { LanguageMng } from '../languageMng';
import { Util } from '../app.utils';
import { AbstractPIU } from '../abstractPIU';
import { Table } from 'primeng/table';
import { AccNavItem } from '../queryIUElements';
import { Subscription } from 'rxjs';

import * as XLSX from 'xlsx';

@Component({
    selector: 'imes-grid',
    templateUrl: './grid.component.html',
    changeDetection: ChangeDetectionStrategy.Default
})
export class GridComponent implements AfterViewInit {

    /** Page size for export all to excel query */
    protected readonly pageSizeForExport = 500;
    /** Flag of export process */
    protected exporting = false;
    /** Progress bar subscription to manage the cancel */
    protected progressBarSubscription: Subscription;
    /** Abstract population interaction unit */
    protected intPIU: AbstractPIU;
    /** Action and navigation buttons at right */
    public buttonsAtRight = false;

    @Input()
    set piu(piu: AbstractPIU) {
        this.intPIU = piu;
        if (this.intPIU) {
            this.intPIU.columnsChanged.subscribe(() => this.processColumnsChanged());
            this.intPIU.gridDataChanged.subscribe(() => this.processDataChanged());
            if (this.intPIU.masterDetailContainer && this.intPIU.masterDetailContainer.expandDetails &&
                this.intPIU.masterDetailContainer.masterAbstract === this.intPIU) {
                this.expandDetails = true;
            }
        }
    }
    get piu(): AbstractPIU { return this.intPIU; }

    @ViewChild('dt', { static: false }) grid: Table;

    /** Flag to allow the expand details feature */
    public expandDetails = false;

    constructor(
        public readonly langMng: LanguageMng,
        public readonly util: Util) {
    }

    public getCssClasses(cssClass: string, data: any): any {

        if (cssClass && cssClass.includes('cssClassByValue')) {
            return `${cssClass} cssClass${data}`;
        } else {
            return cssClass;
        }
    }


    public ngAfterViewInit(): void {
        this.processColumnsChanged();
    }

    /**
     * Process the change in the grid columns
     */
    private processColumnsChanged(): void {
        if (this.grid && this.grid.containerViewChild && this.grid.containerViewChild.nativeElement
            && this.grid.containerViewChild.nativeElement.clientWidth) {
            this.piu.adjustLastColumnWidth(this.grid.containerViewChild.nativeElement.clientWidth);
        }
    }

    /**
     * Manages the column resize
     * @param event event.element: Resized column header, event.delta: Change of width in number of pixels
     */
    public onColumnResize(event: any): void {
        // Get the index of the grid column
        const gridWidth = this.getGridTotalWidth();
        if (event && event.element) {
            let colIndex = -1;
            let found = false;
            let colWidth = 0;
            for (const col of event.element.parentNode.children) {
                if (col.className.includes('gridHeader')) {
                    colIndex++;
                    colWidth = col.clientWidth;
                    if (col === event.element) {
                        found = true;
                        break;
                    }
                }
            }
            if (found) {
                this.piu.adjustColumnWidth(colIndex, colWidth, gridWidth);
            }
        }
    }

    /**
     * Returns the grid total width in pixels
     */
    private getGridTotalWidth(): number {
        let totalWidth = 0;
        if (this.grid && this.grid.containerViewChild && this.grid.containerViewChild.nativeElement
            && this.grid.containerViewChild.nativeElement.clientWidth) {
            totalWidth = this.grid.containerViewChild.nativeElement.clientWidth;
        }
        return totalWidth;
    }

    /**
     * Process the change in data grid
     */
    private processDataChanged(): void {
        this.processColumnsChanged();
        // Apply table filters and order
        this.filterData();
        if (this.piu.gridSortInformation) {
            if (!this.piu.paginationInClient) {
                this.grid.sortField = this.piu.gridSortInformation[0].field;
                this.grid.sortOrder = this.piu.gridSortInformation[0].order;
            } else {
                this.grid.multiSortMeta = this.piu.gridSortInformation;
            }
        }
        // Set the grid in the proper page
        if (this.grid && (this.grid.first !== this.piu.gridFirstInstanceDisplayed || this.grid.rows !== this.piu.gridPaginationPageSize)) {
            const paging = {
                first: this.piu.gridFirstInstanceDisplayed,
                rows: this.piu.gridPaginationPageSize
            };
            this.grid.onPageChange(paging);
        }
    }

    /**
     * Manages the expand row event
     * @param rowData Row data
     */
    public onExpandDetail(rowData: any): void {
        this.piu.processExpandDetail(rowData);
    }

    /**
     * Returns the number of columns to span de contained detail
     */
    public getColSpanDetails(): number {
        let numCols = this.piu.gridColumns.length + 1;
        this.piu.actions.forEach( (action: AccNavItem)  => {
            if (action.visible && action.showInGrid) {
                numCols++;
            }
        });
        this.piu.navigations.forEach( (nav: AccNavItem)  => {
            if (nav.visible && nav.showInGrid) {
                numCols++;
            }
        });
        return numCols;
    }

    /**
     * Filter the original data using all filter values
     */
    public filterData(): any {

        // No data
        if (!this.piu.gridOriginalData || this.piu.gridOriginalData.length === 0) {
            return;
        }

        let anyFilter = false;
        let colOrder = 0;
        let filteredData = this.piu.gridOriginalData;
        for (const filterValue of this.piu.gridBuiltInFilterFields) {
            if (filterValue) {
                anyFilter = true;
                // Filter data using value in the column
                filteredData = this.filterDataByColumn(filteredData, colOrder, filterValue);
            }
            colOrder++;
        }

        // If no filters, restore original data
        if (!anyFilter) {
            this.piu.gridData = this.piu.gridOriginalData;
        } else {
            this.piu.gridData = filteredData;
        }
        // Update the total instances
        if (this.piu.paginationInClient) {
            this.piu.gridTotalInstances = this.piu.gridData.length;
        }
    }

    /**
     * Filter using the column in the order
     * @param data Array of data to filter
     * @param colOrder Order of the column
     * @param value Value to compare
     */
    private filterDataByColumn(data: any, colOrder: number, value: any): any {
        let newData = data;
        const valueToCompare = value.toString().toLowerCase();

        // Find the grid column
        let col;
        let i = 0;
        for (const column of this.piu.gridColumns) {
            if (column.filter) {
                if (i === colOrder) {
                    col = column;
                }
                i++;
            }
        }

        if (col) {
            newData = data.filter((item: any) => {
                let dataValue = item[col.field];
                // If data has some value ...
                if (dataValue != null && dataValue !== undefined && dataValue !== '') {
                    // For defined selections, use the label to compare
                    if (col.options) {
                        dataValue = this.piu.getValueFromDefinedSelection(col, item[col.field]);
                    } else if (col.dataType === 'datetime') {
                        dataValue = this.util.getDate(dataValue).toLocaleDateString(this.langMng.getLanguageId()) + ' ' +
                            this.util.getDate(dataValue).toLocaleTimeString(this.langMng.getLanguageId());
                    } else if (col.dataType === 'date') {
                        dataValue = this.util.getDate(dataValue).toLocaleDateString(this.langMng.getLanguageId());
                    } else if (col.dataType === 'time') {
                        dataValue = this.util.getDate(dataValue).toLocaleTimeString(this.langMng.getLanguageId());
                    }

                    dataValue = dataValue.toString().toLowerCase();
                    // Contains comparator
                    if (dataValue.indexOf(valueToCompare) >= 0) {
                        return true;
                    }
                }
                return false;
            });
        }

        return newData;
    }

    public exportExcelAll(): void {

        if (this.piu.paginationInClient ||
            (this.piu.gridData && this.piu.gridData.length > 0 && this.piu.gridPaginationPageSize > this.piu.gridData.length)) {
            this.exportDataToExcel(this.piu.gridData);
            return;
        }

        // Retrieve all data using the PIU query request
        const queryRequest = this.piu.getQueryRequest();
        // Set page size and number
        queryRequest.pageNumber = 1;
        queryRequest.pageSize = this.pageSizeForExport;
        this.exporting = true;
        this.progressBarSubscription = this.util.progessBarCancelResponse.subscribe(() => this.processProgressBarCancel());
        this.queryData(queryRequest, 1, []);
    }

    /**
     * Query data and get next page
     * @param queryRequest Query
     * @param pageNumber Page to query
     * @param totalResult Total data array
     */
    private queryData( queryRequest: { piuName: string, displaySetItems: string, pageSize: number,
                       orderCriteriaName: string, filters: any[], pageNumber: number },
                       pageNumber: number, totalResult: any[]) {

        let percen = 0;
        if (this.piu.gridTotalInstances) {
            percen = ((totalResult.length + queryRequest.pageSize) / this.piu.gridTotalInstances) * 100;
        }
        this.util.showProgressBar(this.langMng.translateText('app_PIU_EXPEXCELPRGMSG', ''),
            percen >= 100 ? 99 : Math.round(percen),
            0);
        queryRequest.pageNumber = pageNumber;
        this.util.callHttpPost(this.piu.queryURL, queryRequest).then( (okResponse) => {
            if (this.exporting) {
                if (okResponse.resultCode === '000') {
                    // Add partial result to total
                    totalResult = totalResult.concat(okResponse.results);
                    if (queryRequest.pageSize > okResponse.results.length) {
                        this.processProgressBarCancel();
                        this.exportDataToExcel(totalResult);
                    } else {
                        this.queryData(queryRequest, pageNumber + 1, totalResult);
                    }
                } else {
                    this.processProgressBarCancel();
                    this.util.addErrorMessage(`ERROR (${okResponse.resultCode}): ${okResponse.resultDescription}`);
                }
            }
        }).catch((error) => {
            this.processProgressBarCancel();
            this.util.addErrorMessage(error.message);
        });
    }

    /**
     * Export to Excel
     */
    public exportExcel(): void {
        this.exportDataToExcel(this.piu.gridData);
    }

    /**
     * Manages the cancel button in the progress bar
     */
    private processProgressBarCancel(): void {
        this.util.hideProgressBar();
        this.progressBarSubscription.unsubscribe();
        this.exporting = false;
    }

    /**
     * Export to Excel the received data
     */
    private exportDataToExcel(data: any[]): void {
        // Prepare the headers
        const excelHeaders: any = {};
        for (const col of this.piu.gridColumns) {
            if (!col.hidden) {
                excelHeaders[col.field] = col.header;
            }
        }
        // Filter de data, only the visible columns
        const filtered = data.map((rowData: any) => {
            const row = {};
            for (const col of this.piu.gridColumns) {
                if (!col.hidden) {
                    if (col.type === 2) {
                        row[col.field] = this.piu.getValueFromDefinedSelection(col, rowData[col.field]);
                    } else {
                        row[col.field] = rowData[col.field];
                    }
                }
            }
            return row;
        });

        // Add the headers row
        filtered.unshift(excelHeaders);
        const worksheet = XLSX.utils.json_to_sheet(filtered, { skipHeader: true });
        const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileName = 'download.xlsx';
        const blob: Blob = new Blob([excelBuffer], {
            type: EXCEL_TYPE
        });
        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, fileName);
        } else {
            // Creates a temporal anchor to download the file
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }

}
