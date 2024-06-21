import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { CacheDependencyRules, InstanceCache } from '../common/app.cachedependencyrules';
import { Field, FieldBlob, FieldOVLenseSearch, Instance } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';
@Component({
    selector: 'imes-documento-siu-tcrear4cliente',
    templateUrl: './siu_tcrear4cliente.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentoSIUuTCREAR4CLIENTEComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public pCliente: FieldOVLenseSearch;
    public pFichero: FieldBlob;
    public pNombreDocumento: Field;
    public pNotas: Field;
    public pObservaciones: Field;

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
        this.idXML = 'Clas_1699352150016172Ser_32UIServ_1';
        this.className = ModelConstants.Documento.name;
        this.iuName = ModelConstants.Documento.siuutcrear4cliente;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.serviceName = 'TCREAR4CLIENTE';
        this.title = this.langMng.translateText('cls_Documento_svc_TCREAR4CLIENTE',
            'Alta');
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public initializeComponents(): void {

        this.pCliente = new FieldOVLenseSearch(this.langMng);
        this.pCliente.nameInRequest = 'pcliente';
        this.pCliente.alias = this.langMng.translateText(
            'cls_Documento_svc_TCREAR4CLIENTE_inArg_pCliente',
            'Cliente');
        this.pCliente.mandatory = true;
        this.pCliente.dataType = ModelConstants.Cliente.name;
        this.pCliente.maxLength = 300;
        this.pCliente.assignCSS();
        this.fields.push(this.pCliente);

        this.pFichero = new FieldBlob(this.langMng);
        this.pFichero.nameInRequest = 'pfichero';
        this.pFichero.alias = this.langMng.translateText(
            'cls_Documento_svc_TCREAR4CLIENTE_inArg_pFichero',
            'Fichero');
        this.pFichero.mandatory = true;
        this.pFichero.dataType = Field.dtBlob;
        this.pFichero.assignCSS();
        this.fields.push(this.pFichero);

        this.pNombreDocumento = new Field(this.langMng);
        this.pNombreDocumento.nameInRequest = 'pnombredocumento';
        this.pNombreDocumento.alias = this.langMng.translateText(
            'cls_Documento_svc_TCREAR4CLIENTE_inArg_pNombreDocumento',
            'Nombre');
        this.pNombreDocumento.mandatory = true;
        this.pNombreDocumento.dataType = Field.dtString;
        this.pNombreDocumento.maxLength = 100;
        this.pNombreDocumento.assignCSS();
        this.fields.push(this.pNombreDocumento);

        this.pNotas = new Field(this.langMng);
        this.pNotas.nameInRequest = 'pnotas';
        this.pNotas.alias = this.langMng.translateText(
            'cls_Documento_svc_TCREAR4CLIENTE_inArg_pNotas',
            'Notas');
        this.pNotas.mandatory = false;
        this.pNotas.dataType = Field.dtString;
        this.pNotas.maxLength = 350;
        this.pNotas.assignCSS();
        this.fields.push(this.pNotas);

        this.pObservaciones = new Field(this.langMng);
        this.pObservaciones.nameInRequest = 'pobservaciones';
        this.pObservaciones.alias = this.langMng.translateText(
            'cls_Documento_svc_TCREAR4CLIENTE_inArg_pObservaciones',
            'Observaciones');
        this.pObservaciones.mandatory = false;
        this.pObservaciones.dataType = Field.dtString;
        this.pObservaciones.maxLength = 300;
        this.pObservaciones.assignCSS();
        this.fields.push(this.pObservaciones);
    }

    /**
     * Process the change in the pFichero argument
     */
    public onpficheroChange(): void {
        this.pNombreDocumento.value = this.pFichero.fileName;
    }

    /**
     * Initialize arguments from context that identify a Role
     */
    public initializeFromCtxRelated(): void {
        const lastRole = this.context.exchangeInfo.getLastNavigationRole();
        const lastRoleOid = this.context.exchangeInfo.getLastNavigationRoleOid();

        if (lastRole && lastRoleOid !== {}) {
            if (lastRole === 'Cliente') {
                this.pCliente.setValue(lastRoleOid);
                this.executeDependecyRulespcliente('SetValue', true);
                this.pCliente.enabled = false;
                this.executeDependecyRulespcliente('SetEnabled', true);
            }
        }
    }

   /**
    * Process the selection backward navigation
    */
    public processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'pCliente'.toLowerCase()) {
            this.pCliente.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespcliente('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for pCliente argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespcliente(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopcliente();
        }
        if ('SetValue' === event && this.pCliente.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1pCliente();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pCliente argument
     */
    private setSuppInfopcliente(): void {

        const displaySetIC = 'NombreRazonSocial';
        let numberMissingSupInfo = 0;
        for (const value of this.pCliente.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Cliente.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.pCliente.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.pCliente.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Cliente.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.pCliente.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for pCliente argument
     */
    private executeDependecyRules1pCliente(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.pCliente,
                'id_Cliente');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1pClienteActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pCliente argument
     */
    private executeDependecyRules1pClienteActions(): void {
        const varpcliente = this.getFirstInstanceFromCache(this.pCliente);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (!this.util.isNull(varpcliente)) {
            // pNombreDocumento.SetVisible( false )
            this.pNombreDocumento.visible = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pCliente lense search argument
     */
    public onpclienteChange(): void {

        const searchText = this.pCliente.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.pCliente.lastText) {
                this.pCliente.removeCSSClass('noResultsLenseSearch');
                this.pCliente.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Cliente.name, 'DSS_Cliente', searchText, [], null).then(
                        (response: any) => {
                            this.pCliente.removeCSSClass('noResultsLenseSearch');
                            this.pCliente.searchResults = response.results;
                            if (this.pCliente.searchResults &&
                                this.pCliente.searchResults.length === 0) {
                                this.pCliente.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.pCliente.searchResults &&
                                this.pCliente.searchResults.length === 1) {
                                this.processpclienteSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.pCliente.removeCSSClass('noResultsLenseSearch');
                            this.pCliente.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.pCliente.removeCSSClass('noResultsLenseSearch');
            this.pCliente.searchResults = [];
            this.cleanpcliente();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pCliente lense search argument
     */
    public processpclienteSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.pCliente.searchResults.length > index) {
            selectedInstance = this.pCliente.searchResults[index];
        }
        // Clean the result list
        this.pCliente.searchResults = [];
        if (selectedInstance) {
            if (!this.pCliente.allowMultiSelect) {
                this.pCliente.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.pCliente.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespcliente('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pCliente lense search argument
     */
    public cleanpcliente(): void {
        this.clearValidationMessages();
        this.pCliente.clean();
        this.executeDependecyRulespcliente('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('pCliente'.toLowerCase() === argumentName.toLowerCase()) {
            this.pCliente.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'P_Clientes';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
