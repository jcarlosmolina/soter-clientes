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
    selector: 'imes-cliente-siu-tmodificarcli',
    templateUrl: './siu_tmodificarcli.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClienteSIUuTMODIFICARCLIComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisCliente: FieldOVLenseSearch;
    public pNombreComercial: Field;
    public pCIFNIF: Field;
    public pPaginaWeb: Field;
    public pEmail: Field;
    public pTelefono: Field;
    public pFax: Field;
    public pSector: FieldOVLenseSearch;
    public pExtension: Field;

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
        this.idXML = 'Clas_1699352150016661Ser_74UIServ_1';
        this.className = ModelConstants.Cliente.name;
        this.iuName = ModelConstants.Cliente.siuutmodificarcli;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.serviceName = 'TMODIFICARCLI';
        this.title = this.langMng.translateText('cls_Cliente_svc_TMODIFICARCLI',
            'Modificar');
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public initializeComponents(): void {

        this.puthisCliente = new FieldOVLenseSearch(this.langMng);
        this.puthisCliente.nameInRequest = 'p_thiscliente';
        this.puthisCliente.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARCLI_inArg_p_thisCliente',
            'Cliente');
        this.puthisCliente.visible = this.util.isNull(this.queryContainer) ||
            this.queryContainer.className !== this.className;
        this.puthisCliente.mandatory = true;
        this.puthisCliente.dataType = ModelConstants.Cliente.name;
        this.puthisCliente.maxLength = 300;
        this.puthisCliente.assignCSS();
        this.fields.push(this.puthisCliente);

        this.pNombreComercial = new Field(this.langMng);
        this.pNombreComercial.nameInRequest = 'pnombrecomercial';
        this.pNombreComercial.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARCLI_inArg_pNombreComercial',
            'Nombre comercial');
        this.pNombreComercial.mandatory = false;
        this.pNombreComercial.dataType = Field.dtString;
        this.pNombreComercial.maxLength = 300;
        this.pNombreComercial.fieldSize = 50;
        this.pNombreComercial.assignCSS();
        this.fields.push(this.pNombreComercial);

        this.pCIFNIF = new Field(this.langMng);
        this.pCIFNIF.nameInRequest = 'pcifnif';
        this.pCIFNIF.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARCLI_inArg_pCIFNIF',
            'CIF/NIF');
        this.pCIFNIF.mandatory = false;
        this.pCIFNIF.dataType = Field.dtString;
        this.pCIFNIF.maxLength = 30;
        this.pCIFNIF.fieldSize = 10;
        this.pCIFNIF.assignCSS();
        this.fields.push(this.pCIFNIF);

        this.pPaginaWeb = new Field(this.langMng);
        this.pPaginaWeb.nameInRequest = 'ppaginaweb';
        this.pPaginaWeb.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARCLI_inArg_pPaginaWeb',
            'Página web');
        this.pPaginaWeb.mandatory = false;
        this.pPaginaWeb.dataType = Field.dtString;
        this.pPaginaWeb.maxLength = 300;
        this.pPaginaWeb.fieldSize = 50;
        this.pPaginaWeb.assignCSS();
        this.fields.push(this.pPaginaWeb);

        this.pEmail = new Field(this.langMng);
        this.pEmail.nameInRequest = 'pemail';
        this.pEmail.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARCLI_inArg_pEmail',
            'Email');
        this.pEmail.mandatory = false;
        this.pEmail.dataType = Field.dtString;
        this.pEmail.maxLength = 100;
        this.pEmail.fieldSize = 30;
        this.pEmail.assignCSS();
        this.fields.push(this.pEmail);

        this.pTelefono = new Field(this.langMng);
        this.pTelefono.nameInRequest = 'ptelefono';
        this.pTelefono.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARCLI_inArg_pTelefono',
            'Teléfono');
        this.pTelefono.mandatory = false;
        this.pTelefono.dataType = Field.dtString;
        this.pTelefono.maxLength = 20;
        this.pTelefono.fieldSize = 15;
        this.pTelefono.assignCSS();
        this.fields.push(this.pTelefono);

        this.pFax = new Field(this.langMng);
        this.pFax.nameInRequest = 'pfax';
        this.pFax.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARCLI_inArg_pFax',
            'Fax');
        this.pFax.mandatory = false;
        this.pFax.dataType = Field.dtString;
        this.pFax.maxLength = 20;
        this.pFax.fieldSize = 12;
        this.pFax.assignCSS();
        this.fields.push(this.pFax);

        this.pSector = new FieldOVLenseSearch(this.langMng);
        this.pSector.nameInRequest = 'psector';
        this.pSector.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARCLI_inArg_pSector',
            'Sector');
        this.pSector.mandatory = false;
        this.pSector.dataType = ModelConstants.Sector.name;
        this.pSector.maxLength = 100;
        this.pSector.fieldSize = 50;
        this.pSector.assignCSS();
        this.fields.push(this.pSector);

        this.pExtension = new Field(this.langMng);
        this.pExtension.nameInRequest = 'pextension';
        this.pExtension.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARCLI_inArg_pExtension',
            'Extensión');
        this.pExtension.mandatory = false;
        this.pExtension.dataType = Field.dtString;
        this.pExtension.maxLength = 4;
        this.pExtension.assignCSS();
        this.fields.push(this.pExtension);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo.selectedOidsClassName === 'Cliente' &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisCliente.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhiscliente('SetValue', true);
            this.puthisCliente.enabled = false;
            this.executeDependecyRulesputhiscliente('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisCliente'.toLowerCase()) {
            this.puthisCliente.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhiscliente('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'pSector'.toLowerCase()) {
            this.pSector.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespsector('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisCliente argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhiscliente(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhiscliente();
        }
        if ('SetValue' === event && this.puthisCliente.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisCliente();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisCliente argument
     */
    private setSuppInfoputhiscliente(): void {

        const displaySetIC = 'NombreRazonSocial';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisCliente.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Cliente.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisCliente.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisCliente.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Cliente.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisCliente.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisCliente argument
     */
    private executeDependecyRules1puthisCliente(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisCliente,
                'nombrecomercial,cifnif,paginaweb,email,telefono,fax,sector.id_Sector,extension');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisClienteActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisCliente argument
     */
    private executeDependecyRules1puthisClienteActions(): void {
        const varputhiscliente = this.getFirstInstanceFromCache(this.puthisCliente);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (!this.util.isNull(varputhiscliente)) {
            // pNombreComercial.SetValue( v.nombrecomercial )
            this.pNombreComercial.setValue(varputhiscliente.get('nombrecomercial'));
            // pCIFNIF.SetValue( v.cifnif )
            this.pCIFNIF.setValue(varputhiscliente.get('cifnif'));
            // pPaginaWeb.SetValue( v.paginaweb )
            this.pPaginaWeb.setValue(varputhiscliente.get('paginaweb'));
            // pEmail.SetValue( v.email )
            this.pEmail.setValue(varputhiscliente.get('email'));
            // pTelefono.SetValue( v.telefono )
            this.pTelefono.setValue(varputhiscliente.get('telefono'));
            // pFax.SetValue( v.fax )
            this.pFax.setValue(varputhiscliente.get('fax'));
            // pSector.SetValue( v.sector )
            this.pSector.setValue(this.util.oidBuilder.buildOidSector(
                this.util.getInt(varputhiscliente.get('sector.id_Sector'))));
            this.executeDependecyRulespsector('SetValue', true);
            // pExtension.SetValue( v.Extension )
            this.pExtension.setValue(varputhiscliente.get('extension'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisCliente lense search argument
     */
    public onputhisclienteChange(): void {

        const searchText = this.puthisCliente.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisCliente.lastText) {
                this.puthisCliente.removeCSSClass('noResultsLenseSearch');
                this.puthisCliente.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Cliente.name, 'DSS_Cliente', searchText, [], null).then(
                        (response: any) => {
                            this.puthisCliente.removeCSSClass('noResultsLenseSearch');
                            this.puthisCliente.searchResults = response.results;
                            if (this.puthisCliente.searchResults &&
                                this.puthisCliente.searchResults.length === 0) {
                                this.puthisCliente.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisCliente.searchResults &&
                                this.puthisCliente.searchResults.length === 1) {
                                this.processputhisclienteSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisCliente.removeCSSClass('noResultsLenseSearch');
                            this.puthisCliente.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisCliente.removeCSSClass('noResultsLenseSearch');
            this.puthisCliente.searchResults = [];
            this.cleanputhiscliente();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisCliente lense search argument
     */
    public processputhisclienteSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisCliente.searchResults.length > index) {
            selectedInstance = this.puthisCliente.searchResults[index];
        }
        // Clean the result list
        this.puthisCliente.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisCliente.allowMultiSelect) {
                this.puthisCliente.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisCliente.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhiscliente('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisCliente lense search argument
     */
    public cleanputhiscliente(): void {
        this.clearValidationMessages();
        this.puthisCliente.clean();
        this.executeDependecyRulesputhiscliente('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pSector argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespsector(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopsector();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pSector argument
     */
    private setSuppInfopsector(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.pSector.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Sector.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.pSector.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.pSector.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Sector.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.pSector.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the pSector lense search argument
     */
    public onpsectorChange(): void {

        const searchText = this.pSector.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.pSector.lastText) {
                this.pSector.removeCSSClass('noResultsLenseSearch');
                this.pSector.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Sector.name, 'DSS_Sector', searchText, [], null).then(
                        (response: any) => {
                            this.pSector.removeCSSClass('noResultsLenseSearch');
                            this.pSector.searchResults = response.results;
                            if (this.pSector.searchResults &&
                                this.pSector.searchResults.length === 0) {
                                this.pSector.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.pSector.searchResults &&
                                this.pSector.searchResults.length === 1) {
                                this.processpsectorSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.pSector.removeCSSClass('noResultsLenseSearch');
                            this.pSector.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.pSector.removeCSSClass('noResultsLenseSearch');
            this.pSector.searchResults = [];
            this.cleanpsector();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pSector lense search argument
     */
    public processpsectorSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.pSector.searchResults.length > index) {
            selectedInstance = this.pSector.searchResults[index];
        }
        // Clean the result list
        this.pSector.searchResults = [];
        if (selectedInstance) {
            if (!this.pSector.allowMultiSelect) {
                this.pSector.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.pSector.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespsector('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pSector lense search argument
     */
    public cleanpsector(): void {
        this.clearValidationMessages();
        this.pSector.clean();
        this.executeDependecyRulespsector('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisCliente'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisCliente.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'P_Clientes';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('pSector'.toLowerCase() === argumentName.toLowerCase()) {
            this.pSector.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'P_Sector';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
