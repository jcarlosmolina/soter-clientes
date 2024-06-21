import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { CacheDependencyRules, InstanceCache } from '../common/app.cachedependencyrules';
import { Field, FieldOVLenseSearch, Instance } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';
@Component({
    selector: 'imes-sistema-siu-timprimir',
    templateUrl: './siu_timprimir.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SistemaSIUuTIMPRIMIRComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisSistema: FieldOVLenseSearch;

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param stdFun Standard functions
     * @param condNavMng Conditional manager
     * @param usrFunc User functions
     */
    constructor(
        public appGlobalInfo: AppGlobalInfo, public util: Util, public changeDetectorRef: ChangeDetectorRef,
        public langMng: LanguageMng, public stdFun: StandardFunctions,
        public condNavMng: ConditionalNavigationMng, public usrFunc: UserFunctions) {
        super(appGlobalInfo, util, changeDetectorRef, condNavMng);
        this.idXML = 'Clas_1699352150016718Ser_33UIServ_1';
        this.className = ModelConstants.Sistema.name;
        this.iuName = ModelConstants.Sistema.siuutimprimir;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.serviceName = 'TIMPRIMIR';
        this.title = this.langMng.translateText('cls_Sistema_svc_TIMPRIMIR',
            'Imprimir Tal cómo se instaló');
        this.noShow = true;
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public initializeComponents(): void {

        this.puthisSistema = new FieldOVLenseSearch(this.langMng);
        this.puthisSistema.nameInRequest = 'p_thissistema';
        this.puthisSistema.alias = this.langMng.translateText(
            'cls_Sistema_svc_TIMPRIMIR_inArg_p_thisSistema',
            'Sistema');
        this.puthisSistema.visible = this.util.isNull(this.queryContainer) ||
            this.queryContainer.className !== this.className;
        this.puthisSistema.mandatory = true;
        this.puthisSistema.dataType = ModelConstants.Sistema.name;
        this.puthisSistema.allowMultiSelect = true;
        this.puthisSistema.maxLength = 100;
        this.puthisSistema.assignCSS();
        this.fields.push(this.puthisSistema);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo.selectedOidsClassName === 'Sistema' &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisSistema.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhissistema('SetValue', true);
            this.puthisSistema.enabled = false;
            this.executeDependecyRulesputhissistema('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisSistema'.toLowerCase()) {
            this.puthisSistema.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhissistema('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisSistema argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhissistema(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhissistema();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisSistema argument
     */
    private setSuppInfoputhissistema(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisSistema.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Sistema.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisSistema.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisSistema.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Sistema.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisSistema.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the p_thisSistema lense search argument
     */
    public onputhissistemaChange(): void {

        const searchText = this.puthisSistema.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisSistema.lastText) {
                this.puthisSistema.removeCSSClass('noResultsLenseSearch');
                this.puthisSistema.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Sistema.name, 'DSS_Sistema', searchText, [], null).then(
                        (response: any) => {
                            this.puthisSistema.removeCSSClass('noResultsLenseSearch');
                            this.puthisSistema.searchResults = response.results;
                            if (this.puthisSistema.searchResults &&
                                this.puthisSistema.searchResults.length === 0) {
                                this.puthisSistema.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisSistema.searchResults &&
                                this.puthisSistema.searchResults.length === 1) {
                                this.processputhissistemaSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisSistema.removeCSSClass('noResultsLenseSearch');
                            this.puthisSistema.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisSistema.removeCSSClass('noResultsLenseSearch');
            this.puthisSistema.searchResults = [];
            this.cleanputhissistema();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisSistema lense search argument
     */
    public processputhissistemaSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisSistema.searchResults.length > index) {
            selectedInstance = this.puthisSistema.searchResults[index];
        }
        // Clean the result list
        this.puthisSistema.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisSistema.allowMultiSelect) {
                this.puthisSistema.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisSistema.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhissistema('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisSistema lense search argument
     */
    public cleanputhissistema(): void {
        this.clearValidationMessages();
        this.puthisSistema.clean();
        this.executeDependecyRulesputhissistema('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisSistema'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisSistema.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Sistema';
            this.util.navigateSelectionForward(exchInfo);
        }
    }

    /**
     * Process the service answer to show the outbound argument scenario
     */
    public processOutboundArguments(request: any, response: any): boolean {
        this.util.navigateOutboundArgumentsScenario(this.className, 'siu_timprimir_out',
            this.context.exchangeInfo.previous, this.context.exchangeInfo.comeBackContext, request, response);
        return true;
    }
}
