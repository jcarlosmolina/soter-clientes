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
    selector: 'imes-documento-siu-descargar',
    templateUrl: './siu_descargar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentoSIUudescargarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisDocuAdjunto: FieldOVLenseSearch;

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
        this.idXML = 'Clas_1699352150016172Ser_4UIServ_1';
        this.className = ModelConstants.Documento.name;
        this.iuName = ModelConstants.Documento.siuudescargar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.serviceName = 'descargar';
        this.title = this.langMng.translateText('cls_Documento_svc_descargar',
            'Descargar');
        this.noShow = true;
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public initializeComponents(): void {

        this.puthisDocuAdjunto = new FieldOVLenseSearch(this.langMng);
        this.puthisDocuAdjunto.nameInRequest = 'p_thisdocuadjunto';
        this.puthisDocuAdjunto.alias = this.langMng.translateText(
            'cls_Documento_svc_descargar_inArg_p_thisDocuAdjunto',
            'Documento');
        this.puthisDocuAdjunto.visible = this.util.isNull(this.queryContainer) ||
            this.queryContainer.className !== this.className;
        this.puthisDocuAdjunto.mandatory = true;
        this.puthisDocuAdjunto.dataType = ModelConstants.Documento.name;
        this.puthisDocuAdjunto.allowMultiSelect = true;
        this.puthisDocuAdjunto.maxLength = 100;
        this.puthisDocuAdjunto.assignCSS();
        this.fields.push(this.puthisDocuAdjunto);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo.selectedOidsClassName === 'Documento' &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisDocuAdjunto.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisdocuadjunto('SetValue', true);
            this.puthisDocuAdjunto.enabled = false;
            this.executeDependecyRulesputhisdocuadjunto('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisDocuAdjunto'.toLowerCase()) {
            this.puthisDocuAdjunto.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisdocuadjunto('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisDocuAdjunto argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisdocuadjunto(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisdocuadjunto();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisDocuAdjunto argument
     */
    private setSuppInfoputhisdocuadjunto(): void {

        const displaySetIC = 'NombreDocumento';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisDocuAdjunto.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Documento.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisDocuAdjunto.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisDocuAdjunto.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Documento.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisDocuAdjunto.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the p_thisDocuAdjunto lense search argument
     */
    public onputhisdocuadjuntoChange(): void {

        const searchText = this.puthisDocuAdjunto.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisDocuAdjunto.lastText) {
                this.puthisDocuAdjunto.removeCSSClass('noResultsLenseSearch');
                this.puthisDocuAdjunto.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Documento.name, 'DSS_Documento', searchText, [], null).then(
                        (response: any) => {
                            this.puthisDocuAdjunto.removeCSSClass('noResultsLenseSearch');
                            this.puthisDocuAdjunto.searchResults = response.results;
                            if (this.puthisDocuAdjunto.searchResults &&
                                this.puthisDocuAdjunto.searchResults.length === 0) {
                                this.puthisDocuAdjunto.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisDocuAdjunto.searchResults &&
                                this.puthisDocuAdjunto.searchResults.length === 1) {
                                this.processputhisdocuadjuntoSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisDocuAdjunto.removeCSSClass('noResultsLenseSearch');
                            this.puthisDocuAdjunto.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisDocuAdjunto.removeCSSClass('noResultsLenseSearch');
            this.puthisDocuAdjunto.searchResults = [];
            this.cleanputhisdocuadjunto();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisDocuAdjunto lense search argument
     */
    public processputhisdocuadjuntoSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisDocuAdjunto.searchResults.length > index) {
            selectedInstance = this.puthisDocuAdjunto.searchResults[index];
        }
        // Clean the result list
        this.puthisDocuAdjunto.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisDocuAdjunto.allowMultiSelect) {
                this.puthisDocuAdjunto.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisDocuAdjunto.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisdocuadjunto('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisDocuAdjunto lense search argument
     */
    public cleanputhisdocuadjunto(): void {
        this.clearValidationMessages();
        this.puthisDocuAdjunto.clean();
        this.executeDependecyRulesputhisdocuadjunto('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisDocuAdjunto'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisDocuAdjunto.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_DocumentosHAT';
            this.util.navigateSelectionForward(exchInfo);
        }
    }

    /**
     * Process the service answer to show the outbound argument scenario
     */
    public processOutboundArguments(request: any, response: any): boolean {
        this.util.navigateOutboundArgumentsScenario(this.className, 'siu_descargar_out',
            this.context.exchangeInfo.previous, this.context.exchangeInfo.comeBackContext, request, response);
        return true;
    }
}
