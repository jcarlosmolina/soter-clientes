﻿import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from './app.exchangeinfo';
import { Util } from './app.utils';
import { Field } from './baseIUElements';
import { ConditionalNavigationMng } from './conditionalNavigationMng';
import { AbstractQueryIU } from './queryIUElements';

/**
 * Base class for an instance interaction scenario
 */
export abstract class AbstractIIU extends AbstractQueryIU {

    /** Scenario context */
    public context: {
        exchangeInfo: ExchangeInfo, selectedOID: any, breadCrumbTitle: string
    } = { exchangeInfo: null, selectedOID: undefined, breadCrumbTitle: '' };

    /** Selected instance Oid */
    public selectedOid: any = undefined;
    /** Selected instance data */
    public instanceData: any = undefined;
    /** List of Fields */
    public fields: Field[] = [];

    /**
     * Constructor
     * @param appGlobalInfo Global information
     * @param util Util
     * @param changeDetectorRef Change detector
     */
    constructor(protected appGlobalInfo: AppGlobalInfo,
                protected util: Util,
                protected changeDetectorRef: ChangeDetectorRef,
                protected condNavMng: ConditionalNavigationMng) {
        super(appGlobalInfo, util, changeDetectorRef, condNavMng);
        this.scenarioType = 'IIU';
    }

    /**
     * Initialize the scenario components
     */
    public initializeComponents(): void {
        super.initializeComponents();
        // Configure the grid component using the display set information
        this.configureFields();
    }

    /**
     * Configure the scenario fields based on the display set elements
     */
    public configureFields(): void {
        // All fields are already configured
        this.configureActionsNavigations();
    }

    /**
     * Returns the required attributes for query
     */
    public getDisplaySetElements(): string {

        const dsItems: string[] = [];
        for (const field of this.fields) {
            dsItems.push(field.nameInRequest);
        }

        // Add to the displayset the required attributes to advance preconditions
        for (const accItem of this.actions) {
            for (const ele of accItem.preconditionAttributes) {
                this.addAttributesForAction(dsItems, ele);
            }
        }
        return dsItems.toString();
    }

    /**
     * Initialize the scenario
     */
    public initialize(): void {
        super.initialize();
        this.initializeFromContext();
    }

    /**
     * Initialize the scenario using the context information
     */
    public initializeFromContext(): void {
        let initialized = false;
        if (this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            if (this.context.exchangeInfo.rolePath === '' && this.context.exchangeInfo.selectedOidsClassName === this.className) {
                this.selectedOid = this.context.exchangeInfo.selectedOids[0];
                initialized = true;
            } else if (this.context.exchangeInfo.exchangeType === 'Navigation' && this.context.exchangeInfo.selectedOids.length === 1) {
                this.loadSelectedOidFromRelatedExchangeInfo();
                initialized = false;
            }
        }
        if (!initialized) {
            this.selectedOid = undefined;
            this.setData(null);
            this.util.hideWaitDialog();
            this.changeDetectorRef.markForCheck();
        } else {
            this.refresh();
        }
    }

    /**
     * Search the instance Oid using the context information
     */
    public loadSelectedOidFromRelatedExchangeInfo(): void {

        const url: string = this.appGlobalInfo.APPCONSTANTS.BASE_URL + this.queryURL;
        const queryRequest: { displaySetItems: string, filters: any[] } = {
            displaySetItems: '',
            filters: []
        };

        // Related filtering
        const filterRelated: { name: string, variables: any[] } = {
            name: '_Related',
            variables: []
        };
        filterRelated.variables.push({ name: 'relatedInstancePath', value: this.context.exchangeInfo.rolePath });
        filterRelated.variables.push({ name: 'relatedInstanceOid', value: JSON.stringify(this.context.exchangeInfo.selectedOids[0]) });
        queryRequest.filters.push(filterRelated);

        // Navigational filters
        if (this.navigationalFilter) {
            queryRequest.filters.push(this.navigationalFilter);
        }
        if (this.hatNavigationalFilter) {
            queryRequest.filters.push(this.hatNavigationalFilter);
        }
        if (this.mdNavigationalFilter) {
            queryRequest.filters.push(this.mdNavigationalFilter);
        }

        this.util.showWaitDialog();
        this.util.populationQuery(url, queryRequest).then((okResponse: any) => {
            const res = okResponse;
            if (res.resultCode === '000') {
                if (res.results.length > 0) {
                    this.selectedOid = JSON.parse(res.results[0].oid);
                    this.refresh(1);
                } else {
                    this.selectedOid = undefined;
                }
            } else {
                this.util.addErrorMessage(`ERROR (${res.resultCode}): ${res.resultDescription}`);
            }
            this.util.hideWaitDialog();
            this.changeDetectorRef.markForCheck();
        }, (errorResponse: any) => {
            this.util.addErrorMessage(errorResponse.message);
            this.util.hideWaitDialog();
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();

    }

    /**
     * Flag instance interaction unit
     */
    public isInstanceIU(): boolean {
        return true;
    }

    /**
     * Initialize the scenario using the context information
     */
    public loadFromContext(): void {
        this.selectedOid = this.context.selectedOID;
    }

    /**
     * Save the scenario context information. Oposite to loadFromContext
     */
    public saveContextInfo(): void {
        this.context.breadCrumbTitle = this.title;
        this.context.selectedOID = this.selectedOid;
    }

    /**
     * Return the number of selected instances
     */
    public getNumSelectedInstances(): number {
        if (this.selectedOid && this.instanceData) {
            return 1;
        } else {
            return 0;
        }
    }

    /**
     * Returns the context scenario
     */
    public getContext(): any {
        return this.context;
    }

    /**
     * Sets the context scenario
     * @param newContext New context
     * @param fromContextType Context type that sets the new context
     */
    public setContext(newContext: any, fromContextType: string): void {
        this.context = newContext;
    }

    /**
     * Returns an array containing the Oids of the selected rows
     */
    public getSelectedOids(): any[] {
        if (this.selectedOid) {
            return [this.selectedOid];
        }
        return null;
    }

    /**
     * Returns an array containing the selected rows
     */
    public getSelectedInstances(): any[] {
        const selected: any[] = [];
        if (this.instanceData) {
            selected.push(this.instanceData);
        }
        return selected;
    }

    /**
     * Update the data in the screen. Launch the proper query and retieve the data
     * @param nextInstance Next instance to be retrieve from the server
     */
    public refresh(pageNumber = 1): void {

        // Related filtering. Related instance is required
        if (!this.selectedOid) {
            // If no selected Oid and it is a navigation context, launch a related search
            if (this.context.exchangeInfo.exchangeType === 'Navigation' && this.context.exchangeInfo.rolePath !== '' &&
                this.context.exchangeInfo.selectedOids.length === 1) {
                this.loadSelectedOidFromRelatedExchangeInfo();
            }
            this.setData(null);
            return;
        }

        const url: string = this.appGlobalInfo.APPCONSTANTS.BASE_URL + this.queryURL;
        const queryRequest: {piuName: string, displaySetItems: string, filters: any[] } = {
            piuName: this.iuName,
            displaySetItems: this.getDisplaySetElements(),
            filters: []
        };

        const filterByOid: { name: string, variables: any[] } = {
            name: '_OID',
            variables: []
        };
        filterByOid.variables.push({ name: 'oid', value: JSON.stringify(this.selectedOid) });
        queryRequest.filters.push(filterByOid);

        this.util.showWaitDialog();
        this.util.populationQuery(url, queryRequest).then((okResponse: any) => {
            const res = okResponse;
            if (res.resultCode === '000') {
                this.setData(res.results);
            } else {
                this.util.addErrorMessage(`ERROR (${res.resultCode}): {res.resultDescription}`);
            }
            this.util.hideWaitDialog();
            this.changeDetectorRef.markForCheck();
            this.selectionChanged.next();

        }, (errorResponse: any) => {
            this.util.addErrorMessage(errorResponse.message);
            this.util.hideWaitDialog();
            this.changeDetectorRef.markForCheck();
            this.selectionChanged.next();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Assign values to the fields
     * @param data Data origin
     */
    public setData(data: any): void {
        for (const field of this.fields) {
            field.value = '';
        }
        if (data) {
            this.instanceData = data[0];
        }
        if (!this.instanceData) {
            return;
        }
        for (const field of this.fields) {
            if (field.dataType.toLowerCase() === 'date' || field.dataType.toLowerCase() === 'datetime' ||
                field.dataType.toLowerCase() === 'time') {
                field.value = this.util.getDate(this.instanceData[field.nameInRequest.replace(new RegExp('[.]', 'g'), '-')]);
            } else if (field.dataType.toLowerCase() === 'blob') {
                field.value = this.instanceData[field.nameInRequest.replace(new RegExp('[.]', 'g'), '-')];
            } else {
                field.value = this.instanceData[field.nameInRequest.replace(new RegExp('[.]', 'g'), '-')];
            }
        }

        // Associated service
        if (this.associatedService && this.associatedService.userIsAgent) {
            this.initializeAssociatedService();
        }
    }

    /**
     * Initialize the associated service
     */
    public initializeAssociatedService(): void {
        const exchInfo = new ExchangeInfo();
        exchInfo.exchangeType = 'Action';
        exchInfo.previous = this.getContext();
        exchInfo.selectedOids = this.getSelectedOids();
        exchInfo.selectedOidsClassName = this.className;
        this.associatedService.initializeFromExchangeInfo(exchInfo);
    }

    /**
     * Sets the selected instance in the master
     * @param selectedOidMaster Array containing the selected Oids in the master
     */
    public setSelectedInstanceFromMaster(selectedOidMaster: any): void {
        // Build the navigation context, if it exists
        if (this.context.exchangeInfo.navigationalFilterIdentity.length > 0 &&
            selectedOidMaster && selectedOidMaster.length === 1) {
            this.context.exchangeInfo.navigationalFilterVariables = [{ name: 'SelectedObject', value: selectedOidMaster[0] }];
        }
        this.context.exchangeInfo.selectedOids = selectedOidMaster;
        if (!this.context.exchangeInfo.selectedOids || this.context.exchangeInfo.selectedOids.length === 0) {
            this.selectedOid = undefined;
            this.setData(null);
        } else {
            // If no role path and just one Oid of the same class, then initializes the selected one Oid
            if (this.context.exchangeInfo.rolePath === '' && this.context.exchangeInfo.selectedOidsClassName === this.className
                && this.context.exchangeInfo.selectedOids.length === 1) {
                this.selectedOid = this.context.exchangeInfo.selectedOids[0];
            } else {
                this.selectedOid = undefined;
            }
        }

        this.selectionChanged.next();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Manages the successful execution of the associated service
     */
    public processAssociatedServiceExecutionSuccess(): void {
        this.refresh();
    }

}
