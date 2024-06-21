﻿import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from './app.exchangeinfo';
import { Util } from './app.utils';
import { AbstractIU } from './baseIUElements';
import { AbstractFilter } from './abstractFilter';

/**
 * Abstract class for Filter components
 */
export abstract class AbstractFilterIU extends AbstractIU {

    /** Context information */
    public context: { exchangeInfo: ExchangeInfo, filterContext: any } = { exchangeInfo: null, filterContext: null };

    /** Filter */
    public filter: AbstractFilter;


    constructor(protected appGlobalInfo: AppGlobalInfo,
                protected util: Util,
                protected changeDetectorRef: ChangeDetectorRef) {
        super(appGlobalInfo, util, changeDetectorRef);
    }

    /**
     * Returns the scenario context information
     */
    public getContext(): any {
        return this.context;
    }

    /**
     * Returns the context of the global scenario
     */
    public getGlobalContext(): any {
        return this.getContext();
    }

    /**
     * Save the scenario context information. Oposite to loadFromContext
     */
    public saveContextInfo(): void {
        this.context.filterContext = this.filter.getContextInfo();
    }

    /**
     * Initialize the scenario using the context information. Oposite to saveContextInfo
     */
    public loadFromContext(): void {
        this.filter.setContextInfo(this.context.filterContext);
    }

    /**
     * Initalize the general service scenario
     */
    public initialize(): void {
        // Get the exchange information
        const exchInfo: ExchangeInfo = this.appGlobalInfo.appExchangeInfo.getExchangeInfoForScenario(this.className, this.iuName);

        // Check Selection Backward case
        this.initializeComponents();
        if (exchInfo.exchangeType === 'SelectionBackward') {
            // Set the original context to the controller
            this.context = exchInfo.previous;
            this.loadFromContext();
            this.processSelectionBackward(exchInfo);
        } else {
            this.initializeFromExchangeInfo(exchInfo);
        }
        this.util.hideWaitDialog();
    }

    /**
     * Default initialiation using the exchange information received
     * @param exchInfo Exchange information
     */
    public initializeFromExchangeInfo(exchInfo: ExchangeInfo): void {
        this.context.exchangeInfo = exchInfo;
        this.loadPreload();
        // Load from context
        if (this.context.exchangeInfo) {
            this.initializeFromContext();
        }
    }

    /**
     * Process the selection backard navigation. By default, do nothing.
     */
    public processSelectionBackward(exchInfo: ExchangeInfo): void {
        this.filter.processSelectionBackward(exchInfo);
    }

    /**
     * Create the scenario components. By default, do nothing
     */
    public initializeComponents(): void {
        this.filter.initializeComponents();
    }

    /**
     * Initialize the scenario components using the context information.
     */
    public initializeFromContext(): void {
    }


    /**
     * Load the independent preload fields
     */
    public loadPreload(): void {
        this.filter.loadPreload();
    }

    /**
     * Returns an array with the filter request
     */
    public getFilterRequests(): any[] {
        const filters = [];

        // Specific filter
        filters.push(this.filter.getFilterData());

        // Related filtering. Related instance is required
        if (this.getContext().exchangeInfo.rolePath && this.getContext().exchangeInfo.selectedOids &&
            this.getContext().exchangeInfo.selectedOids.length === 1) {
            const filterRelated: { name: string, variables: any[] } = {
                name: '_Related',
                variables: []
            };
            filterRelated.variables.push({ name: 'relatedInstancePath', value: this.getContext().exchangeInfo.rolePath });
            filterRelated.variables.push({ name: 'relatedInstanceOid',
                                           value: JSON.stringify(this.getContext().exchangeInfo.selectedOids[0]) });
            filters.push(filterRelated);
        }

        // Navigational filter
        if (this.getContext() && this.getContext().exchangeInfo && this.getContext().exchangeInfo.navigationalFilterIdentity.length > 0) {
            for (const filterId of this.getContext().exchangeInfo.navigationalFilterIdentity) {
                const navFilter: {name: string, variables: any[]} = {name: filterId, variables: []};
                navFilter.variables = this.getContext().exchangeInfo.navigationalFilterVariables;
                filters.push(navFilter);
            }
        }

        return filters;
    }

    /**
     * Returns the parameters to be passed to the report
     */
    public getReportParameters(): {} {
        const params = {};
        for (const v of this.filter.variables) {
            const value = v.getValueForFilter();
            if (!this.util.isNull(value)) {
                params[v.nameInRequest] = value;
            } else {
                params[v.nameInRequest] = null;
            }
        }
        return params;
    }

    /**
     * Calls to generate the report
     */
    public print(): void {

        if (!this.filter.validateInputFields()) {
            return;
        }

        this.util.showWaitDialog();

        // Generate the report
        this.util.generatePopulationReport(this.className, this.getContext().exchangeInfo.printUIName,
            this.getFilterRequests(), this.getReportParameters()).then((errorMsg) => {
                if (errorMsg) {
                    this.util.addErrorMessage(errorMsg);
                } else {
                    this.processCancel();
                }
                this.util.hideWaitDialog();
            }).catch((errorMsg) => {
                this.util.addErrorMessage(errorMsg);
                this.util.hideWaitDialog();
            });
    }
}
