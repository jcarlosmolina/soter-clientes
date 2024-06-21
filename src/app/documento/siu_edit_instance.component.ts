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
    selector: 'imes-documento-siu-edit-instance',
    templateUrl: './siu_edit_instance.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentoSIUuedituinstanceComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisDocumento: FieldOVLenseSearch;
    public puNotas: Field;
    public puObservacions: Field;

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
        this.idXML = 'Clas_1699352150016172Ser_7UIServ_1';
        this.className = ModelConstants.Documento.name;
        this.iuName = ModelConstants.Documento.siuuedituinstance;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.serviceName = 'edit_instance';
        this.title = this.langMng.translateText('cls_Documento_svc_edit_instance',
            'Modificar notas');
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public initializeComponents(): void {

        this.puthisDocumento = new FieldOVLenseSearch(this.langMng);
        this.puthisDocumento.nameInRequest = 'p_thisdocumento';
        this.puthisDocumento.alias = this.langMng.translateText(
            'cls_Documento_svc_edit_instance_inArg_p_thisDocumento',
            'Documento');
        this.puthisDocumento.visible = this.util.isNull(this.queryContainer) ||
            this.queryContainer.className !== this.className;
        this.puthisDocumento.mandatory = true;
        this.puthisDocumento.dataType = ModelConstants.Documento.name;
        this.puthisDocumento.maxLength = 100;
        this.puthisDocumento.assignCSS();
        this.fields.push(this.puthisDocumento);

        this.puNotas = new Field(this.langMng);
        this.puNotas.nameInRequest = 'p_notas';
        this.puNotas.alias = this.langMng.translateText(
            'cls_Documento_svc_edit_instance_inArg_p_Notas',
            'Notas');
        this.puNotas.mandatory = false;
        this.puNotas.dataType = Field.dtString;
        this.puNotas.maxLength = 350;
        this.puNotas.assignCSS();
        this.fields.push(this.puNotas);

        this.puObservacions = new Field(this.langMng);
        this.puObservacions.nameInRequest = 'p_observacions';
        this.puObservacions.alias = this.langMng.translateText(
            'cls_Documento_svc_edit_instance_inArg_p_Observacions',
            'Observaciones');
        this.puObservacions.mandatory = false;
        this.puObservacions.dataType = Field.dtString;
        this.puObservacions.maxLength = 300;
        this.puObservacions.assignCSS();
        this.fields.push(this.puObservacions);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo.selectedOidsClassName === 'Documento' &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisDocumento.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisdocumento('SetValue', true);
            this.puthisDocumento.enabled = false;
            this.executeDependecyRulesputhisdocumento('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisDocumento'.toLowerCase()) {
            this.puthisDocumento.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisdocumento('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisDocumento argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisdocumento(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisdocumento();
        }
        if ('SetValue' === event && this.puthisDocumento.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisDocumento();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisDocumento argument
     */
    private setSuppInfoputhisdocumento(): void {

        const displaySetIC = 'NombreDocumento';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisDocumento.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Documento.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisDocumento.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisDocumento.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Documento.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisDocumento.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisDocumento argument
     */
    private executeDependecyRules1puthisDocumento(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisDocumento,
                'notas,observacions');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisDocumentoActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisDocumento argument
     */
    private executeDependecyRules1puthisDocumentoActions(): void {
        const varputhisdocumento = this.getFirstInstanceFromCache(this.puthisDocumento);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (!this.util.isNull(varputhisdocumento)) {
            // p_Notas.SetValue( v.notas )
            this.puNotas.setValue(varputhisdocumento.get('notas'));
            // p_Observacions.SetValue( v.observacions )
            this.puObservacions.setValue(varputhisdocumento.get('observacions'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisDocumento lense search argument
     */
    public onputhisdocumentoChange(): void {

        const searchText = this.puthisDocumento.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisDocumento.lastText) {
                this.puthisDocumento.removeCSSClass('noResultsLenseSearch');
                this.puthisDocumento.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Documento.name, 'DSS_Documento', searchText, [], null).then(
                        (response: any) => {
                            this.puthisDocumento.removeCSSClass('noResultsLenseSearch');
                            this.puthisDocumento.searchResults = response.results;
                            if (this.puthisDocumento.searchResults &&
                                this.puthisDocumento.searchResults.length === 0) {
                                this.puthisDocumento.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisDocumento.searchResults &&
                                this.puthisDocumento.searchResults.length === 1) {
                                this.processputhisdocumentoSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisDocumento.removeCSSClass('noResultsLenseSearch');
                            this.puthisDocumento.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisDocumento.removeCSSClass('noResultsLenseSearch');
            this.puthisDocumento.searchResults = [];
            this.cleanputhisdocumento();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisDocumento lense search argument
     */
    public processputhisdocumentoSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisDocumento.searchResults.length > index) {
            selectedInstance = this.puthisDocumento.searchResults[index];
        }
        // Clean the result list
        this.puthisDocumento.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisDocumento.allowMultiSelect) {
                this.puthisDocumento.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisDocumento.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisdocumento('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisDocumento lense search argument
     */
    public cleanputhisdocumento(): void {
        this.clearValidationMessages();
        this.puthisDocumento.clean();
        this.executeDependecyRulesputhisdocumento('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisDocumento'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisDocumento.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_DocumentosHAT';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
