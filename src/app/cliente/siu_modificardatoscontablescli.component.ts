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
    selector: 'imes-cliente-siu-modificardatoscontablescli',
    templateUrl: './siu_modificardatoscontablescli.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClienteSIUuMODIFICARDATOSCONTABLESCLIComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisCliente: FieldOVLenseSearch;
    public pEntidadBancaria: FieldOVLenseSearch;
    public pSucursalBancaria: FieldOVLenseSearch;
    public pDCCuentaBancaria: Field;
    public pCuentaBancaria: Field;
    public pIBANCuentaBancaria: Field;
    public pSwift: Field;

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
        this.idXML = 'Clas_1699352150016661Ser_73UIServ_1';
        this.className = ModelConstants.Cliente.name;
        this.iuName = ModelConstants.Cliente.siuumodificardatoscontablescli;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.serviceName = 'MODIFICARDATOSCONTABLESCLI';
        this.title = this.langMng.translateText('cls_Cliente_svc_MODIFICARDATOSCONTABLESCLI',
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
            'cls_Cliente_svc_MODIFICARDATOSCONTABLESCLI_inArg_p_thisCliente',
            'Cliente');
        this.puthisCliente.visible = this.util.isNull(this.queryContainer) ||
            this.queryContainer.className !== this.className;
        this.puthisCliente.mandatory = true;
        this.puthisCliente.dataType = ModelConstants.Cliente.name;
        this.puthisCliente.maxLength = 300;
        this.puthisCliente.assignCSS();
        this.fields.push(this.puthisCliente);

        this.pEntidadBancaria = new FieldOVLenseSearch(this.langMng);
        this.pEntidadBancaria.nameInRequest = 'pentidadbancaria';
        this.pEntidadBancaria.alias = this.langMng.translateText(
            'cls_Cliente_svc_MODIFICARDATOSCONTABLESCLI_inArg_pEntidadBancaria',
            'Entidad');
        this.pEntidadBancaria.mandatory = false;
        this.pEntidadBancaria.dataType = ModelConstants.Entidadbancaria.name;
        this.pEntidadBancaria.maxLength = 105;
        this.pEntidadBancaria.assignCSS();
        this.fields.push(this.pEntidadBancaria);

        this.pSucursalBancaria = new FieldOVLenseSearch(this.langMng);
        this.pSucursalBancaria.nameInRequest = 'psucursalbancaria';
        this.pSucursalBancaria.alias = this.langMng.translateText(
            'cls_Cliente_svc_MODIFICARDATOSCONTABLESCLI_inArg_pSucursalBancaria',
            'Sucursal');
        this.pSucursalBancaria.mandatory = false;
        this.pSucursalBancaria.dataType = ModelConstants.Sucursalbancaria.name;
        this.pSucursalBancaria.maxLength = 105;
        this.pSucursalBancaria.assignCSS();
        this.fields.push(this.pSucursalBancaria);

        this.pDCCuentaBancaria = new Field(this.langMng);
        this.pDCCuentaBancaria.nameInRequest = 'pdccuentabancaria';
        this.pDCCuentaBancaria.alias = this.langMng.translateText(
            'cls_Cliente_svc_MODIFICARDATOSCONTABLESCLI_inArg_pDCCuentaBancaria',
            'DC');
        this.pDCCuentaBancaria.mandatory = false;
        this.pDCCuentaBancaria.dataType = Field.dtString;
        this.pDCCuentaBancaria.maxLength = 2;
        this.pDCCuentaBancaria.assignCSS();
        this.fields.push(this.pDCCuentaBancaria);

        this.pCuentaBancaria = new Field(this.langMng);
        this.pCuentaBancaria.nameInRequest = 'pcuentabancaria';
        this.pCuentaBancaria.alias = this.langMng.translateText(
            'cls_Cliente_svc_MODIFICARDATOSCONTABLESCLI_inArg_pCuentaBancaria',
            'Cuenta');
        this.pCuentaBancaria.mandatory = false;
        this.pCuentaBancaria.dataType = Field.dtString;
        this.pCuentaBancaria.maxLength = 10;
        this.pCuentaBancaria.assignCSS();
        this.fields.push(this.pCuentaBancaria);

        this.pIBANCuentaBancaria = new Field(this.langMng);
        this.pIBANCuentaBancaria.nameInRequest = 'pibancuentabancaria';
        this.pIBANCuentaBancaria.alias = this.langMng.translateText(
            'cls_Cliente_svc_MODIFICARDATOSCONTABLESCLI_inArg_pIBANCuentaBancaria',
            'IBAN');
        this.pIBANCuentaBancaria.mandatory = false;
        this.pIBANCuentaBancaria.dataType = Field.dtString;
        this.pIBANCuentaBancaria.maxLength = 34;
        this.pIBANCuentaBancaria.assignCSS();
        this.fields.push(this.pIBANCuentaBancaria);

        this.pSwift = new Field(this.langMng);
        this.pSwift.nameInRequest = 'pswift';
        this.pSwift.alias = this.langMng.translateText(
            'cls_Cliente_svc_MODIFICARDATOSCONTABLESCLI_inArg_pSwift',
            'Swift');
        this.pSwift.mandatory = false;
        this.pSwift.dataType = Field.dtString;
        this.pSwift.maxLength = 50;
        this.pSwift.assignCSS();
        this.fields.push(this.pSwift);
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

        if (exchInfo.originArgumentName.toLowerCase() === 'pEntidadBancaria'.toLowerCase()) {
            this.pEntidadBancaria.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespentidadbancaria('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'pSucursalBancaria'.toLowerCase()) {
            this.pSucursalBancaria.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespsucursalbancaria('SetValue', false);
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
                'dccuentabancaria,cuentabancaria,ibancuentabancaria,swift,entidadbancaria.id_EntidadBancaria' +
                ',sucursalbancaria.EntidadBancaria.id_EntidadBancaria,sucursalbancaria.id_SucursalBancaria');
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
            // pDCCuentaBancaria.SetValue( v.dccuentabancaria )
            this.pDCCuentaBancaria.setValue(varputhiscliente.get('dccuentabancaria'));
            this.executeDependecyRulespdccuentabancaria('SetValue', true);
            // pCuentaBancaria.SetValue( v.cuentabancaria )
            this.pCuentaBancaria.setValue(varputhiscliente.get('cuentabancaria'));
            this.executeDependecyRulespcuentabancaria('SetValue', true);
            // pIBANCuentaBancaria.SetValue( v.ibancuentabancaria )
            this.pIBANCuentaBancaria.setValue(varputhiscliente.get('ibancuentabancaria'));
            this.executeDependecyRulespibancuentabancaria('SetValue', true);
            // pSwift.SetValue( v.swift )
            this.pSwift.setValue(varputhiscliente.get('swift'));
            // pEntidadBancaria.SetValue( v.entidadbancaria )
            this.pEntidadBancaria.setValue(this.util.oidBuilder.buildOidEntidadBancaria(
                varputhiscliente.get('entidadbancaria.id_EntidadBancaria')));
            this.executeDependecyRulespentidadbancaria('SetValue', true);
            // pSucursalBancaria.SetValue( v.sucursalbancaria )
            this.pSucursalBancaria.setValue(this.util.oidBuilder.buildOidSucursalBancaria(
                varputhiscliente.get('sucursalbancaria.EntidadBancaria.id_EntidadBancaria'),
                varputhiscliente.get('sucursalbancaria.id_SucursalBancaria')));
            this.executeDependecyRulespsucursalbancaria('SetValue', true);
            // pIBANCuentaBancaria.SetMandatory( TRUE )
            this.pIBANCuentaBancaria.mandatory = true;
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
     * Evaluate dependendy rules for pEntidadBancaria argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespentidadbancaria(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopentidadbancaria();
        }
        if ('SetValue' === event && this.pEntidadBancaria.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1pEntidadBancaria();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pEntidadBancaria argument
     */
    private setSuppInfopentidadbancaria(): void {

        const displaySetIC = 'id_EntidadBancaria,Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.pEntidadBancaria.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Entidadbancaria.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.pEntidadBancaria.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.pEntidadBancaria.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Entidadbancaria.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString]);
                    }
                }
                this.pEntidadBancaria.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for pEntidadBancaria argument
     */
    private executeDependecyRules1pEntidadBancaria(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.pSucursalBancaria,
                'pais.id_Pais,id_sucursalbancaria,EntidadBancaria.id_EntidadBancaria');
        this.addQueryInstanceFromField(this.pEntidadBancaria,
                'id_entidadbancaria');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1pEntidadBancariaActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pEntidadBancaria argument
     */
    private executeDependecyRules1pEntidadBancariaActions(): void {
        const varpsucursalbancaria = this.getFirstInstanceFromCache(this.pSucursalBancaria);
        const varpentidadbancaria = this.getFirstInstanceFromCache(this.pEntidadBancaria);
        let rtnFunction0;
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL AND pSucursalBancaria <> NULL AND pDCCuentaBancaria <> NULL AND pCuentaBancaria <> NULL
        if (!this.util.isNull(varpentidadbancaria) && !this.util.isNull(varpsucursalbancaria) &&
            !this.util.isNull(this.pDCCuentaBancaria.value) && !this.util.isNull(this.pCuentaBancaria.value)) {
            this.usrFunc.calcularIBAN(this.util.oidBuilder.buildOidPais(
                varpsucursalbancaria.get('pais.id_Pais')), varpsucursalbancaria.get('id_sucursalbancaria'),
                this.pDCCuentaBancaria.value, this.pCuentaBancaria.value,
                varpentidadbancaria.get('id_entidadbancaria')).then((res0) => {
                rtnFunction0 = res0;
                // pIBANCuentaBancaria.SetValue( calcularIBAN(psucursalbancaria.pais, psucursalbancaria.id_sucursalbancaria, pDCCuentaB
                // ncaria, pCuentaBancaria, v.id_entidadbancaria) )
                this.pIBANCuentaBancaria.setValue(rtnFunction0);
                this.executeDependecyRulespibancuentabancaria('SetValue', true);

                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });

        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pEntidadBancaria lense search argument
     */
    public onpentidadbancariaChange(): void {

        const searchText = this.pEntidadBancaria.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.pEntidadBancaria.lastText) {
                this.pEntidadBancaria.removeCSSClass('noResultsLenseSearch');
                this.pEntidadBancaria.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Entidadbancaria.name, 'DSS_EntidadBancaria', searchText, [], null).then(
                        (response: any) => {
                            this.pEntidadBancaria.removeCSSClass('noResultsLenseSearch');
                            this.pEntidadBancaria.searchResults = response.results;
                            if (this.pEntidadBancaria.searchResults &&
                                this.pEntidadBancaria.searchResults.length === 0) {
                                this.pEntidadBancaria.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.pEntidadBancaria.searchResults &&
                                this.pEntidadBancaria.searchResults.length === 1) {
                                this.processpentidadbancariaSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.pEntidadBancaria.removeCSSClass('noResultsLenseSearch');
                            this.pEntidadBancaria.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.pEntidadBancaria.removeCSSClass('noResultsLenseSearch');
            this.pEntidadBancaria.searchResults = [];
            this.cleanpentidadbancaria();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pEntidadBancaria lense search argument
     */
    public processpentidadbancariaSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.pEntidadBancaria.searchResults.length > index) {
            selectedInstance = this.pEntidadBancaria.searchResults[index];
        }
        // Clean the result list
        this.pEntidadBancaria.searchResults = [];
        if (selectedInstance) {
            if (!this.pEntidadBancaria.allowMultiSelect) {
                this.pEntidadBancaria.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.pEntidadBancaria.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespentidadbancaria('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pEntidadBancaria lense search argument
     */
    public cleanpentidadbancaria(): void {
        this.clearValidationMessages();
        this.pEntidadBancaria.clean();
        this.executeDependecyRulespentidadbancaria('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pSucursalBancaria argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespsucursalbancaria(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopsucursalbancaria();
        }
        if ('SetValue' === event && this.pSucursalBancaria.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1pSucursalBancaria();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pSucursalBancaria argument
     */
    private setSuppInfopsucursalbancaria(): void {

        const displaySetIC = 'id_SucursalBancaria,Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.pSucursalBancaria.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Sucursalbancaria.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.pSucursalBancaria.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.pSucursalBancaria.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Sucursalbancaria.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString]);
                    }
                }
                this.pSucursalBancaria.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for pSucursalBancaria argument
     */
    private executeDependecyRules1pSucursalBancaria(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.pEntidadBancaria,
                'id_entidadbancaria');
        this.addQueryInstanceFromField(this.pSucursalBancaria,
                'pais.id_Pais,id_sucursalbancaria');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1pSucursalBancariaActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pSucursalBancaria argument
     */
    private executeDependecyRules1pSucursalBancariaActions(): void {
        const varpentidadbancaria = this.getFirstInstanceFromCache(this.pEntidadBancaria);
        const varpsucursalbancaria = this.getFirstInstanceFromCache(this.pSucursalBancaria);
        let rtnFunction0;
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL AND pEntidadBancaria <> NULL AND pDCCuentaBancaria <> NULL AND pCuentaBancaria <> NULL
        if (!this.util.isNull(varpsucursalbancaria) && !this.util.isNull(varpentidadbancaria) &&
            !this.util.isNull(this.pDCCuentaBancaria.value) && !this.util.isNull(this.pCuentaBancaria.value)) {
            this.usrFunc.calcularIBAN(this.util.oidBuilder.buildOidPais(
                varpsucursalbancaria.get('pais.id_Pais')), varpsucursalbancaria.get('id_sucursalbancaria'),
                this.pDCCuentaBancaria.value, this.pCuentaBancaria.value,
                varpentidadbancaria.get('id_entidadbancaria')).then((res0) => {
                rtnFunction0 = res0;
                // pIBANCuentaBancaria.SetValue( calcularIBAN(v.pais, v.id_sucursalbancaria, pDCCuentaBancaria, pCuentaBancaria, pentid
                // dbancaria.id_entidadbancaria) )
                this.pIBANCuentaBancaria.setValue(rtnFunction0);
                this.executeDependecyRulespibancuentabancaria('SetValue', true);

                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });

        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pSucursalBancaria lense search argument
     */
    public onpsucursalbancariaChange(): void {

        const searchText = this.pSucursalBancaria.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.pSucursalBancaria.lastText) {
                this.pSucursalBancaria.removeCSSClass('noResultsLenseSearch');
                this.pSucursalBancaria.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Sucursalbancaria.name, 'DSS_SucursalBancaria', searchText, [], null).then(
                        (response: any) => {
                            this.pSucursalBancaria.removeCSSClass('noResultsLenseSearch');
                            this.pSucursalBancaria.searchResults = response.results;
                            if (this.pSucursalBancaria.searchResults &&
                                this.pSucursalBancaria.searchResults.length === 0) {
                                this.pSucursalBancaria.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.pSucursalBancaria.searchResults &&
                                this.pSucursalBancaria.searchResults.length === 1) {
                                this.processpsucursalbancariaSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.pSucursalBancaria.removeCSSClass('noResultsLenseSearch');
                            this.pSucursalBancaria.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.pSucursalBancaria.removeCSSClass('noResultsLenseSearch');
            this.pSucursalBancaria.searchResults = [];
            this.cleanpsucursalbancaria();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pSucursalBancaria lense search argument
     */
    public processpsucursalbancariaSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.pSucursalBancaria.searchResults.length > index) {
            selectedInstance = this.pSucursalBancaria.searchResults[index];
        }
        // Clean the result list
        this.pSucursalBancaria.searchResults = [];
        if (selectedInstance) {
            if (!this.pSucursalBancaria.allowMultiSelect) {
                this.pSucursalBancaria.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.pSucursalBancaria.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespsucursalbancaria('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pSucursalBancaria lense search argument
     */
    public cleanpsucursalbancaria(): void {
        this.clearValidationMessages();
        this.pSucursalBancaria.clean();
        this.executeDependecyRulespsucursalbancaria('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pDCCuentaBancaria argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespdccuentabancaria(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1pDCCuentaBancaria();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pDCCuentaBancaria argument
     */
    private executeDependecyRules1pDCCuentaBancaria(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.pSucursalBancaria,
                'pais.id_Pais,id_sucursalbancaria,EntidadBancaria.id_EntidadBancaria');
        this.addQueryInstanceFromField(this.pEntidadBancaria,
                'id_entidadbancaria');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1pDCCuentaBancariaActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pDCCuentaBancaria argument
     */
    private executeDependecyRules1pDCCuentaBancariaActions(): void {
        const varpsucursalbancaria = this.getFirstInstanceFromCache(this.pSucursalBancaria);
        const varpentidadbancaria = this.getFirstInstanceFromCache(this.pEntidadBancaria);
        let rtnFunction0;
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL AND pEntidadBancaria <> NULL AND pSucursalBancaria <> NULL AND pCuentaBancaria <> NULL
        if (!this.util.isNull(this.pDCCuentaBancaria.value) && !this.util.isNull(varpentidadbancaria) &&
            !this.util.isNull(varpsucursalbancaria) && !this.util.isNull(this.pCuentaBancaria.value)) {
            this.usrFunc.calcularIBAN(this.util.oidBuilder.buildOidPais(
                varpsucursalbancaria.get('pais.id_Pais')), varpsucursalbancaria.get('id_sucursalbancaria'),
                this.pDCCuentaBancaria.value, this.pCuentaBancaria.value,
                varpentidadbancaria.get('id_entidadbancaria')).then((res0) => {
                rtnFunction0 = res0;
                // pIBANCuentaBancaria.SetValue( calcularIBAN(psucursalbancaria.pais, psucursalbancaria.id_sucursalbancaria, v, pCuenta
                // ancaria, pentidadbancaria.id_entidadbancaria) )
                this.pIBANCuentaBancaria.setValue(rtnFunction0);
                this.executeDependecyRulespibancuentabancaria('SetValue', true);

                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });

        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pDCCuentaBancaria argument
     */
    public onpdccuentabancariaChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulespdccuentabancaria('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pCuentaBancaria argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespcuentabancaria(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1pCuentaBancaria();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pCuentaBancaria argument
     */
    private executeDependecyRules1pCuentaBancaria(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.pSucursalBancaria,
                'pais.id_Pais,id_sucursalbancaria,EntidadBancaria.id_EntidadBancaria');
        this.addQueryInstanceFromField(this.pEntidadBancaria,
                'id_entidadbancaria');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1pCuentaBancariaActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pCuentaBancaria argument
     */
    private executeDependecyRules1pCuentaBancariaActions(): void {
        const varpsucursalbancaria = this.getFirstInstanceFromCache(this.pSucursalBancaria);
        const varpentidadbancaria = this.getFirstInstanceFromCache(this.pEntidadBancaria);
        let rtnFunction0;
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL AND pEntidadBancaria <> NULL AND pSucursalBancaria <> NULL AND pDCCuentaBancaria <> NULL
        if (!this.util.isNull(this.pCuentaBancaria.value) && !this.util.isNull(varpentidadbancaria) &&
            !this.util.isNull(varpsucursalbancaria) && !this.util.isNull(this.pDCCuentaBancaria.value)) {
            this.usrFunc.calcularIBAN(this.util.oidBuilder.buildOidPais(
                varpsucursalbancaria.get('pais.id_Pais')), varpsucursalbancaria.get('id_sucursalbancaria'),
                this.pDCCuentaBancaria.value, this.pCuentaBancaria.value,
                varpentidadbancaria.get('id_entidadbancaria')).then((res0) => {
                rtnFunction0 = res0;
                // pIBANCuentaBancaria.SetValue( calcularIBAN(psucursalbancaria.pais, psucursalbancaria.id_sucursalbancaria, pDCCuentaB
                // ncaria, v, pentidadbancaria.id_entidadbancaria) )
                this.pIBANCuentaBancaria.setValue(rtnFunction0);
                this.executeDependecyRulespibancuentabancaria('SetValue', true);

                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });

        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pCuentaBancaria argument
     */
    public onpcuentabancariaChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulespcuentabancaria('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pIBANCuentaBancaria argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespibancuentabancaria(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1pIBANCuentaBancaria();
        }
        // Rule 2
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules2pIBANCuentaBancaria();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pIBANCuentaBancaria argument
     */
    private executeDependecyRules1pIBANCuentaBancaria(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1pIBANCuentaBancariaActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pIBANCuentaBancaria argument
     */
    private executeDependecyRules1pIBANCuentaBancariaActions(): void {
        let rtnFunction0;
        this.usrFunc.validarCuentaBancaria(this.pIBANCuentaBancaria.value).then((res0) => {
            rtnFunction0 = res0;
            // v <> NULL AND validarCuentaBancaria(v) = TRUE
            if (!this.util.isNull(this.pIBANCuentaBancaria.value) && this.util.valueEquals(this.util.getBool(rtnFunction0), true)) {
                // pEntidadBancaria.SetValue( NULL )
                this.pEntidadBancaria.setValue(null);
                this.executeDependecyRulespentidadbancaria('SetValue', true);
                // pSucursalBancaria.SetValue( NULL )
                this.pSucursalBancaria.setValue(null);
                this.executeDependecyRulespsucursalbancaria('SetValue', true);
                // pDCCuentaBancaria.SetValue( NULL )
                this.pDCCuentaBancaria.setValue(null);
                this.executeDependecyRulespdccuentabancaria('SetValue', true);
                // pCuentaBancaria.SetValue( NULL )
                this.pCuentaBancaria.setValue(null);
                this.executeDependecyRulespcuentabancaria('SetValue', true);
                // pIBANCuentaBancaria.SetValue( strReplace( v, " ", "") )
                this.pIBANCuentaBancaria.setValue(this.stdFun.strReplace(this.pIBANCuentaBancaria.value, ' ', ''));
                this.executeDependecyRulespibancuentabancaria('SetValue', true);

                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();

            }
        });

        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pIBANCuentaBancaria argument
     */
    private executeDependecyRules2pIBANCuentaBancaria(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2pIBANCuentaBancariaActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pIBANCuentaBancaria argument
     */
    private executeDependecyRules2pIBANCuentaBancariaActions(): void {
        let rtnFunction0;
        this.usrFunc.validarCuentaBancaria(this.pIBANCuentaBancaria.value).then((res0) => {
            rtnFunction0 = res0;
            // v <> NULL AND validarCuentaBancaria(v) = FALSE
            if (!this.util.isNull(this.pIBANCuentaBancaria.value) && this.util.valueEquals(this.util.getBool(rtnFunction0), false)) {
                // pIBANCuentaBancaria.SetValue( "IBAN INCORRECTO: " + v )
                this.pIBANCuentaBancaria.setValue('IBAN INCORRECTO: ' + this.pIBANCuentaBancaria.value);
                this.executeDependecyRulespibancuentabancaria('SetValue', true);

                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();

            }
        });

        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pIBANCuentaBancaria argument
     */
    public onpibancuentabancariaChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulespibancuentabancaria('SetValue', false);
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
        if ('pEntidadBancaria'.toLowerCase() === argumentName.toLowerCase()) {
            this.pEntidadBancaria.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'P_EntidadBancaria';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('pSucursalBancaria'.toLowerCase() === argumentName.toLowerCase()) {
            this.pSucursalBancaria.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'P_SucursalBancaria';
            this.util.navigateSelectionForward(exchInfo);
        }
    }

    /**
     * Returns true if all elements contained in the group are visible
     * @param groupId Group id.
     */
    public isGroupVisible(groupId: string): boolean {
        let isVisible = true;

        if (groupId === '1') {
            isVisible = this.pEntidadBancaria.visible ||
                this.pSucursalBancaria.visible ||
                this.pDCCuentaBancaria.visible ||
                this.pCuentaBancaria.visible ||
                this.pIBANCuentaBancaria.visible ||
                this.pSwift.visible;
        }
        return isVisible;
    }

    /**
     * Returns the alias group
     * @param groupId Group id
     */
    public getGroupAlias(groupId: string): string {
        let alias = '';

        if (groupId === '1') {
            alias = this.langMng.translateText('1',
                'Cuenta bancaria');
        }
        return alias;
    }
}
