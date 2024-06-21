import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { CacheDependencyRules, InstanceCache } from '../common/app.cachedependencyrules';
import { Field, FieldDefinedSelection, FieldOVLenseSearch, Instance } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';
@Component({
    selector: 'imes-cliente-siu-tmodificardirfiscal',
    templateUrl: './siu_tmodificardirfiscal.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClienteSIUuTMODIFICARDIRFISCALComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisCliente: FieldOVLenseSearch;
    public pDireccionFiscal: Field;
    public pMunicipio: FieldOVLenseSearch;
    public pCodigoPostal: FieldOVLenseSearch;
    public pPais: FieldOVLenseSearch;
    public pTelefonoFiscal: Field;
    public pFaxFiscal: Field;
    public pTipoViaFiscal: FieldDefinedSelection;
    public pNumeroFiscal: Field;
    public pEscaleraFiscal: Field;
    public pPisoFiscal: Field;
    public pPuertaFiscal: Field;
    public pExtensionFiscal: Field;

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
        this.idXML = 'Clas_1699352150016661Ser_58UIServ_1';
        this.className = ModelConstants.Cliente.name;
        this.iuName = ModelConstants.Cliente.siuutmodificardirfiscal;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.serviceName = 'TMODIFICARDIRFISCAL';
        this.title = this.langMng.translateText('cls_Cliente_svc_TMODIFICARDIRFISCAL',
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
            'cls_Cliente_svc_TMODIFICARDIRFISCAL_inArg_p_thisCliente',
            'Cliente');
        this.puthisCliente.visible = this.util.isNull(this.queryContainer) ||
            this.queryContainer.className !== this.className;
        this.puthisCliente.mandatory = true;
        this.puthisCliente.dataType = ModelConstants.Cliente.name;
        this.puthisCliente.maxLength = 300;
        this.puthisCliente.assignCSS();
        this.fields.push(this.puthisCliente);

        this.pDireccionFiscal = new Field(this.langMng);
        this.pDireccionFiscal.nameInRequest = 'pdireccionfiscal';
        this.pDireccionFiscal.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARDIRFISCAL_inArg_pDireccionFiscal',
            'Dirección');
        this.pDireccionFiscal.mandatory = false;
        this.pDireccionFiscal.dataType = Field.dtString;
        this.pDireccionFiscal.maxLength = 300;
        this.pDireccionFiscal.fieldSize = 50;
        this.pDireccionFiscal.assignCSS();
        this.fields.push(this.pDireccionFiscal);

        this.pMunicipio = new FieldOVLenseSearch(this.langMng);
        this.pMunicipio.nameInRequest = 'pmunicipio';
        this.pMunicipio.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARDIRFISCAL_inArg_pMunicipio',
            'Municipio');
        this.pMunicipio.mandatory = false;
        this.pMunicipio.dataType = ModelConstants.Municipio.name;
        this.pMunicipio.maxLength = 300;
        this.pMunicipio.fieldSize = 25;
        this.pMunicipio.assignCSS();
        this.fields.push(this.pMunicipio);

        this.pCodigoPostal = new FieldOVLenseSearch(this.langMng);
        this.pCodigoPostal.nameInRequest = 'pcodigopostal';
        this.pCodigoPostal.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARDIRFISCAL_inArg_pCodigoPostal',
            'Código postal');
        this.pCodigoPostal.mandatory = false;
        this.pCodigoPostal.dataType = ModelConstants.Codigopostal.name;
        this.pCodigoPostal.maxLength = 10;
        this.pCodigoPostal.fieldSize = 10;
        this.pCodigoPostal.assignCSS();
        this.fields.push(this.pCodigoPostal);

        this.pPais = new FieldOVLenseSearch(this.langMng);
        this.pPais.nameInRequest = 'ppais';
        this.pPais.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARDIRFISCAL_inArg_pPais',
            'País');
        this.pPais.mandatory = false;
        this.pPais.dataType = ModelConstants.Pais.name;
        this.pPais.maxLength = 100;
        this.pPais.fieldSize = 20;
        this.pPais.assignCSS();
        this.fields.push(this.pPais);

        this.pTelefonoFiscal = new Field(this.langMng);
        this.pTelefonoFiscal.nameInRequest = 'ptelefonofiscal';
        this.pTelefonoFiscal.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARDIRFISCAL_inArg_pTelefonoFiscal',
            'Teléfono');
        this.pTelefonoFiscal.mandatory = false;
        this.pTelefonoFiscal.dataType = Field.dtString;
        this.pTelefonoFiscal.maxLength = 20;
        this.pTelefonoFiscal.fieldSize = 15;
        this.pTelefonoFiscal.assignCSS();
        this.fields.push(this.pTelefonoFiscal);

        this.pFaxFiscal = new Field(this.langMng);
        this.pFaxFiscal.nameInRequest = 'pfaxfiscal';
        this.pFaxFiscal.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARDIRFISCAL_inArg_pFaxFiscal',
            'Fax');
        this.pFaxFiscal.mandatory = false;
        this.pFaxFiscal.dataType = Field.dtString;
        this.pFaxFiscal.maxLength = 20;
        this.pFaxFiscal.fieldSize = 12;
        this.pFaxFiscal.assignCSS();
        this.fields.push(this.pFaxFiscal);

        this.pTipoViaFiscal = new FieldDefinedSelection(this.langMng);
        this.pTipoViaFiscal.nameInRequest = 'ptipoviafiscal';
        this.pTipoViaFiscal.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARDIRFISCAL_inArg_pTipoViaFiscal',
            'Tipo vía');
        this.pTipoViaFiscal.mandatory = false;
        this.pTipoViaFiscal.dataType = Field.dtString;
        this.pTipoViaFiscal.options = DefinedSelections.DS_TIPOVIA;
        this.pTipoViaFiscal.maxLength = 2;
        this.pTipoViaFiscal.assignCSS();
        this.fields.push(this.pTipoViaFiscal);

        this.pNumeroFiscal = new Field(this.langMng);
        this.pNumeroFiscal.nameInRequest = 'pnumerofiscal';
        this.pNumeroFiscal.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARDIRFISCAL_inArg_pNumeroFiscal',
            'Nº');
        this.pNumeroFiscal.mandatory = false;
        this.pNumeroFiscal.dataType = Field.dtString;
        this.pNumeroFiscal.maxLength = 5;
        this.pNumeroFiscal.assignCSS();
        this.fields.push(this.pNumeroFiscal);

        this.pEscaleraFiscal = new Field(this.langMng);
        this.pEscaleraFiscal.nameInRequest = 'pescalerafiscal';
        this.pEscaleraFiscal.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARDIRFISCAL_inArg_pEscaleraFiscal',
            'Escalera');
        this.pEscaleraFiscal.mandatory = false;
        this.pEscaleraFiscal.dataType = Field.dtString;
        this.pEscaleraFiscal.maxLength = 2;
        this.pEscaleraFiscal.assignCSS();
        this.fields.push(this.pEscaleraFiscal);

        this.pPisoFiscal = new Field(this.langMng);
        this.pPisoFiscal.nameInRequest = 'ppisofiscal';
        this.pPisoFiscal.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARDIRFISCAL_inArg_pPisoFiscal',
            'Piso');
        this.pPisoFiscal.mandatory = false;
        this.pPisoFiscal.dataType = Field.dtString;
        this.pPisoFiscal.maxLength = 2;
        this.pPisoFiscal.assignCSS();
        this.fields.push(this.pPisoFiscal);

        this.pPuertaFiscal = new Field(this.langMng);
        this.pPuertaFiscal.nameInRequest = 'ppuertafiscal';
        this.pPuertaFiscal.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARDIRFISCAL_inArg_pPuertaFiscal',
            'Puerta');
        this.pPuertaFiscal.mandatory = false;
        this.pPuertaFiscal.dataType = Field.dtString;
        this.pPuertaFiscal.maxLength = 2;
        this.pPuertaFiscal.assignCSS();
        this.fields.push(this.pPuertaFiscal);

        this.pExtensionFiscal = new Field(this.langMng);
        this.pExtensionFiscal.nameInRequest = 'pextensionfiscal';
        this.pExtensionFiscal.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARDIRFISCAL_inArg_pExtensionFiscal',
            'Extensión');
        this.pExtensionFiscal.mandatory = false;
        this.pExtensionFiscal.dataType = Field.dtString;
        this.pExtensionFiscal.maxLength = 4;
        this.pExtensionFiscal.assignCSS();
        this.fields.push(this.pExtensionFiscal);
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
     * Initialize arguments from context that identify a Role
     */
    public initializeFromCtxRelated(): void {
        const lastRole = this.context.exchangeInfo.getLastNavigationRole();
        const lastRoleOid = this.context.exchangeInfo.getLastNavigationRoleOid();

        if (lastRole && lastRoleOid !== {}) {
            if (lastRole === 'MunicipioFiscal') {
                this.pMunicipio.setValue(lastRoleOid);
                this.executeDependecyRulespmunicipio('SetValue', true);
                this.pMunicipio.enabled = false;
                this.executeDependecyRulespmunicipio('SetEnabled', true);
            }
            if (lastRole === 'CodigoPostalFiscal') {
                this.pCodigoPostal.setValue(lastRoleOid);
                this.executeDependecyRulespcodigopostal('SetValue', true);
                this.pCodigoPostal.enabled = false;
                this.executeDependecyRulespcodigopostal('SetEnabled', true);
            }
            if (lastRole === 'PaisFiscal') {
                this.pPais.setValue(lastRoleOid);
                this.executeDependecyRulesppais('SetValue', true);
                this.pPais.enabled = false;
                this.executeDependecyRulesppais('SetEnabled', true);
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
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisCliente'.toLowerCase()) {
            this.puthisCliente.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhiscliente('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'pMunicipio'.toLowerCase()) {
            this.pMunicipio.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespmunicipio('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'pCodigoPostal'.toLowerCase()) {
            this.pCodigoPostal.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespcodigopostal('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'pPais'.toLowerCase()) {
            this.pPais.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesppais('SetValue', false);
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
                'direccionfiscal,telefonofiscal,faxfiscal,codigopostalfiscal.CP,municipiofiscal.id_Municipio,paisfiscal.id_Pais' +
                ',escalerafiscal,extensionfiscal,numerofiscal,pisofiscal,puertafiscal,tipoviafiscal');
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
            // pDireccionFiscal.SetValue( v.direccionfiscal )
            this.pDireccionFiscal.setValue(varputhiscliente.get('direccionfiscal'));
            // pTelefonoFiscal.SetValue( v.telefonofiscal )
            this.pTelefonoFiscal.setValue(varputhiscliente.get('telefonofiscal'));
            // pFaxFiscal.SetValue( v.faxfiscal )
            this.pFaxFiscal.setValue(varputhiscliente.get('faxfiscal'));
            // pCodigoPostal.SetValue( v.codigopostalfiscal )
            this.pCodigoPostal.setValue(this.util.oidBuilder.buildOidCodigoPostal(
                varputhiscliente.get('codigopostalfiscal.CP')));
            this.executeDependecyRulespcodigopostal('SetValue', true);
            // pMunicipio.SetValue( v.municipiofiscal )
            this.pMunicipio.setValue(this.util.oidBuilder.buildOidMunicipio(
                this.util.getInt(varputhiscliente.get('municipiofiscal.id_Municipio'))));
            this.executeDependecyRulespmunicipio('SetValue', true);
            // pPais.SetValue( v.paisfiscal )
            this.pPais.setValue(this.util.oidBuilder.buildOidPais(
                varputhiscliente.get('paisfiscal.id_Pais')));
            this.executeDependecyRulesppais('SetValue', true);
            // pEscaleraFiscal.SetValue( v.escalerafiscal )
            this.pEscaleraFiscal.setValue(varputhiscliente.get('escalerafiscal'));
            // pExtensionFiscal.SetValue( v.extensionfiscal )
            this.pExtensionFiscal.setValue(varputhiscliente.get('extensionfiscal'));
            // pNumeroFiscal.SetValue( v.numerofiscal )
            this.pNumeroFiscal.setValue(varputhiscliente.get('numerofiscal'));
            // pPisoFiscal.SetValue( v.pisofiscal )
            this.pPisoFiscal.setValue(varputhiscliente.get('pisofiscal'));
            // pPuertaFiscal.SetValue( v.puertafiscal )
            this.pPuertaFiscal.setValue(varputhiscliente.get('puertafiscal'));
            // pTipoViaFiscal.SetValue( v.tipoviafiscal )
            this.pTipoViaFiscal.setValue(varputhiscliente.get('tipoviafiscal'));
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
     * Evaluate dependendy rules for pMunicipio argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespmunicipio(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopmunicipio();
        }
        if ('SetValue' === event && this.pMunicipio.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1pMunicipio();
        }
        // Rule 2
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules2pMunicipio();
        }
        // Rule 3
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules3pMunicipio();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pMunicipio argument
     */
    private setSuppInfopmunicipio(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.pMunicipio.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Municipio.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.pMunicipio.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.pMunicipio.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Municipio.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.pMunicipio.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for pMunicipio argument
     */
    private executeDependecyRules1pMunicipio(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.pMunicipio,
                'pais.id_Pais');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1pMunicipioActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pMunicipio argument
     */
    private executeDependecyRules1pMunicipioActions(): void {
        const varpmunicipio = this.getFirstInstanceFromCache(this.pMunicipio);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (!this.util.isNull(varpmunicipio)) {
            // pPais.SetValue( v.pais )
            this.pPais.setValue(this.util.oidBuilder.buildOidPais(
                varpmunicipio.get('pais.id_Pais')));
            this.executeDependecyRulesppais('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pMunicipio argument
     */
    private executeDependecyRules2pMunicipio(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisCliente,
                'municipiofiscal.id_Municipio,id_Cliente');
        this.addQueryInstanceFromField(this.pMunicipio,
                'id_Municipio');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules2pMunicipioActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pMunicipio argument
     */
    private executeDependecyRules2pMunicipioActions(): void {
        const varputhiscliente = this.getFirstInstanceFromCache(this.puthisCliente);
        const varpmunicipio = this.getFirstInstanceFromCache(this.pMunicipio);
        this.notifyAnswerFromToTheBackEnd();
        // (v = NULL) OR (v <> NULL AND p_thiscliente.municipiofiscal <> v)
        if ((this.util.isNull(varpmunicipio)) || (!this.util.isNull(varpmunicipio) &&
            !this.util.oidEquals(this.util.oidBuilder.buildOidMunicipio(
            this.util.getInt(varputhiscliente.get('municipiofiscal.id_Municipio'))), varpmunicipio.oid))) {
            // pCodigoPostal.SetValue( NULL )
            this.pCodigoPostal.setValue(null);
            this.executeDependecyRulespcodigopostal('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 3 for pMunicipio argument
     */
    private executeDependecyRules3pMunicipio(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.pMunicipio,
                'codigopostalunico');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules3pMunicipioActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 3 for pMunicipio argument
     */
    private executeDependecyRules3pMunicipioActions(): void {
        const varpmunicipio = this.getFirstInstanceFromCache(this.pMunicipio);
        let rtnFunction0;
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL AND v.CodigoPostalUnico <> ""
        if (!this.util.isNull(varpmunicipio) && !this.util.valueEquals(varpmunicipio.get('codigopostalunico'), '')) {
            this.usrFunc.getCodigoPostal(varpmunicipio.get('codigopostalunico')).then((res0) => {
                rtnFunction0 = res0;
                // pCodigoPostal.SetValue( getCodigoPostal(v.CodigoPostalUnico) )
                this.pCodigoPostal.setValue(rtnFunction0);
                this.executeDependecyRulespcodigopostal('SetValue', true);

                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });

        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pMunicipio lense search argument
     */
    public onpmunicipioChange(): void {

        const searchText = this.pMunicipio.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.pMunicipio.lastText) {
                const navFilters: string[] = [];
                navFilters.push('Cliente_TMODIFICARDIRFISCAL_pMunicipio_NavFilter0');
                this.pMunicipio.removeCSSClass('noResultsLenseSearch');
                this.pMunicipio.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Municipio.name, 'DSS_Municipio', searchText, navFilters,
                    this.getNavigationFilterVariables()).then(
                        (response: any) => {
                            this.pMunicipio.removeCSSClass('noResultsLenseSearch');
                            this.pMunicipio.searchResults = response.results;
                            if (this.pMunicipio.searchResults &&
                                this.pMunicipio.searchResults.length === 0) {
                                this.pMunicipio.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.pMunicipio.searchResults &&
                                this.pMunicipio.searchResults.length === 1) {
                                this.processpmunicipioSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.pMunicipio.removeCSSClass('noResultsLenseSearch');
                            this.pMunicipio.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.pMunicipio.removeCSSClass('noResultsLenseSearch');
            this.pMunicipio.searchResults = [];
            this.cleanpmunicipio();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pMunicipio lense search argument
     */
    public processpmunicipioSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.pMunicipio.searchResults.length > index) {
            selectedInstance = this.pMunicipio.searchResults[index];
        }
        // Clean the result list
        this.pMunicipio.searchResults = [];
        if (selectedInstance) {
            if (!this.pMunicipio.allowMultiSelect) {
                this.pMunicipio.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.pMunicipio.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespmunicipio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pMunicipio lense search argument
     */
    public cleanpmunicipio(): void {
        this.clearValidationMessages();
        this.pMunicipio.clean();
        this.executeDependecyRulespmunicipio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pCodigoPostal argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespcodigopostal(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopcodigopostal();
        }
        if ('SetValue' === event && this.pCodigoPostal.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1pCodigoPostal();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pCodigoPostal argument
     */
    private setSuppInfopcodigopostal(): void {

        const displaySetIC = 'CP';
        let numberMissingSupInfo = 0;
        for (const value of this.pCodigoPostal.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Codigopostal.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.pCodigoPostal.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.pCodigoPostal.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Codigopostal.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.pCodigoPostal.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for pCodigoPostal argument
     */
    private executeDependecyRules1pCodigoPostal(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.pCodigoPostal,
                'municipiounico');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1pCodigoPostalActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pCodigoPostal argument
     */
    private executeDependecyRules1pCodigoPostalActions(): void {
        const varpcodigopostal = this.getFirstInstanceFromCache(this.pCodigoPostal);
        let rtnFunction0;
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL AND v.MunicipioUnico <> -1
        if (!this.util.isNull(varpcodigopostal) && !this.util.valueEquals(this.util.getInt(varpcodigopostal.get('municipiounico')),
            -1)) {
            this.usrFunc.getMunicipio(this.util.getInt(varpcodigopostal.get('municipiounico'))).then((res0) => {
                rtnFunction0 = res0;
                // pMunicipio.SetValue( getMunicipio(v.MunicipioUnico) )
                this.pMunicipio.setValue(rtnFunction0);
                this.executeDependecyRulespmunicipio('SetValue', true);

                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });

        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pCodigoPostal lense search argument
     */
    public onpcodigopostalChange(): void {

        const searchText = this.pCodigoPostal.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.pCodigoPostal.lastText) {
                const navFilters: string[] = [];
                navFilters.push('Cliente_TMODIFICARDIRFISCAL_pCodigoPostal_NavFilter0');
                this.pCodigoPostal.removeCSSClass('noResultsLenseSearch');
                this.pCodigoPostal.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Codigopostal.name, 'DSS_CodigoPostal', searchText, navFilters,
                    this.getNavigationFilterVariables()).then(
                        (response: any) => {
                            this.pCodigoPostal.removeCSSClass('noResultsLenseSearch');
                            this.pCodigoPostal.searchResults = response.results;
                            if (this.pCodigoPostal.searchResults &&
                                this.pCodigoPostal.searchResults.length === 0) {
                                this.pCodigoPostal.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.pCodigoPostal.searchResults &&
                                this.pCodigoPostal.searchResults.length === 1) {
                                this.processpcodigopostalSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.pCodigoPostal.removeCSSClass('noResultsLenseSearch');
                            this.pCodigoPostal.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.pCodigoPostal.removeCSSClass('noResultsLenseSearch');
            this.pCodigoPostal.searchResults = [];
            this.cleanpcodigopostal();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pCodigoPostal lense search argument
     */
    public processpcodigopostalSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.pCodigoPostal.searchResults.length > index) {
            selectedInstance = this.pCodigoPostal.searchResults[index];
        }
        // Clean the result list
        this.pCodigoPostal.searchResults = [];
        if (selectedInstance) {
            if (!this.pCodigoPostal.allowMultiSelect) {
                this.pCodigoPostal.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.pCodigoPostal.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespcodigopostal('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pCodigoPostal lense search argument
     */
    public cleanpcodigopostal(): void {
        this.clearValidationMessages();
        this.pCodigoPostal.clean();
        this.executeDependecyRulespcodigopostal('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pPais argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesppais(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoppais();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pPais argument
     */
    private setSuppInfoppais(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.pPais.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Pais.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.pPais.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.pPais.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Pais.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.pPais.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the pPais lense search argument
     */
    public onppaisChange(): void {

        const searchText = this.pPais.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.pPais.lastText) {
                this.pPais.removeCSSClass('noResultsLenseSearch');
                this.pPais.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Pais.name, 'DSS_Pais', searchText, [], null).then(
                        (response: any) => {
                            this.pPais.removeCSSClass('noResultsLenseSearch');
                            this.pPais.searchResults = response.results;
                            if (this.pPais.searchResults &&
                                this.pPais.searchResults.length === 0) {
                                this.pPais.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.pPais.searchResults &&
                                this.pPais.searchResults.length === 1) {
                                this.processppaisSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.pPais.removeCSSClass('noResultsLenseSearch');
                            this.pPais.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.pPais.removeCSSClass('noResultsLenseSearch');
            this.pPais.searchResults = [];
            this.cleanppais();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pPais lense search argument
     */
    public processppaisSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.pPais.searchResults.length > index) {
            selectedInstance = this.pPais.searchResults[index];
        }
        // Clean the result list
        this.pPais.searchResults = [];
        if (selectedInstance) {
            if (!this.pPais.allowMultiSelect) {
                this.pPais.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.pPais.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesppais('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pPais lense search argument
     */
    public cleanppais(): void {
        this.clearValidationMessages();
        this.pPais.clean();
        this.executeDependecyRulesppais('SetValue', false);
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
        if ('pMunicipio'.toLowerCase() === argumentName.toLowerCase()) {
            this.pMunicipio.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'P_Municipios';
            exchInfo.navigationalFilterIdentity = [];
            exchInfo.navigationalFilterIdentity.push('Cliente_TMODIFICARDIRFISCAL_pMunicipio_NavFilter0');
            exchInfo.navigationalFilterVariables = this.getNavigationFilterVariables();
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('pCodigoPostal'.toLowerCase() === argumentName.toLowerCase()) {
            this.pCodigoPostal.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'P_CodigosPostales';
            exchInfo.navigationalFilterIdentity = [];
            exchInfo.navigationalFilterIdentity.push('Cliente_TMODIFICARDIRFISCAL_pCodigoPostal_NavFilter0');
            exchInfo.navigationalFilterVariables = this.getNavigationFilterVariables();
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('pPais'.toLowerCase() === argumentName.toLowerCase()) {
            this.pPais.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'P_Paises';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
