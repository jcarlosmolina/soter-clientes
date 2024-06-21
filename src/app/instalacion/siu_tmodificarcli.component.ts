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
    selector: 'imes-instalacion-siu-tmodificarcli',
    templateUrl: './siu_tmodificarcli.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstalacionSIUuTMODIFICARCLIComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisInstalacion: FieldOVLenseSearch;
    public pNombre: Field;
    public pDireccion: Field;
    public pMunicipio: FieldOVLenseSearch;
    public pCodigoPostal: FieldOVLenseSearch;
    public pPais: FieldOVLenseSearch;
    public pTelefono: Field;
    public pFax: Field;
    public pHorarioAproximado: Field;

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
        this.idXML = 'Clas_1699352150016405Ser_39UIServ_1';
        this.className = ModelConstants.Instalacion.name;
        this.iuName = ModelConstants.Instalacion.siuutmodificarcli;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.serviceName = 'TMODIFICARCLI';
        this.title = this.langMng.translateText('cls_Instalacion_svc_TMODIFICARCLI',
            'Modificar');
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public initializeComponents(): void {

        this.puthisInstalacion = new FieldOVLenseSearch(this.langMng);
        this.puthisInstalacion.nameInRequest = 'p_thisinstalacion';
        this.puthisInstalacion.alias = this.langMng.translateText(
            'cls_Instalacion_svc_TMODIFICARCLI_inArg_p_thisInstalacion',
            'Instalación');
        this.puthisInstalacion.visible = this.util.isNull(this.queryContainer) ||
            this.queryContainer.className !== this.className;
        this.puthisInstalacion.mandatory = true;
        this.puthisInstalacion.dataType = ModelConstants.Instalacion.name;
        this.puthisInstalacion.maxLength = 100;
        this.puthisInstalacion.assignCSS();
        this.fields.push(this.puthisInstalacion);

        this.pNombre = new Field(this.langMng);
        this.pNombre.nameInRequest = 'pnombre';
        this.pNombre.alias = this.langMng.translateText(
            'cls_Instalacion_svc_TMODIFICARCLI_inArg_pNombre',
            'Nombre');
        this.pNombre.mandatory = true;
        this.pNombre.dataType = Field.dtString;
        this.pNombre.maxLength = 100;
        this.pNombre.assignCSS();
        this.fields.push(this.pNombre);

        this.pDireccion = new Field(this.langMng);
        this.pDireccion.nameInRequest = 'pdireccion';
        this.pDireccion.alias = this.langMng.translateText(
            'cls_Instalacion_svc_TMODIFICARCLI_inArg_pDireccion',
            'Dirección');
        this.pDireccion.mandatory = true;
        this.pDireccion.dataType = Field.dtString;
        this.pDireccion.maxLength = 300;
        this.pDireccion.assignCSS();
        this.fields.push(this.pDireccion);

        this.pMunicipio = new FieldOVLenseSearch(this.langMng);
        this.pMunicipio.nameInRequest = 'pmunicipio';
        this.pMunicipio.alias = this.langMng.translateText(
            'cls_Instalacion_svc_TMODIFICARCLI_inArg_pMunicipio',
            'Municipio');
        this.pMunicipio.mandatory = false;
        this.pMunicipio.dataType = ModelConstants.Municipio.name;
        this.pMunicipio.maxLength = 300;
        this.pMunicipio.assignCSS();
        this.fields.push(this.pMunicipio);

        this.pCodigoPostal = new FieldOVLenseSearch(this.langMng);
        this.pCodigoPostal.nameInRequest = 'pcodigopostal';
        this.pCodigoPostal.alias = this.langMng.translateText(
            'cls_Instalacion_svc_TMODIFICARCLI_inArg_pCodigoPostal',
            'Codigo Postal');
        this.pCodigoPostal.mandatory = false;
        this.pCodigoPostal.dataType = ModelConstants.Codigopostal.name;
        this.pCodigoPostal.maxLength = 10;
        this.pCodigoPostal.assignCSS();
        this.fields.push(this.pCodigoPostal);

        this.pPais = new FieldOVLenseSearch(this.langMng);
        this.pPais.nameInRequest = 'ppais';
        this.pPais.alias = this.langMng.translateText(
            'cls_Instalacion_svc_TMODIFICARCLI_inArg_pPais',
            'País');
        this.pPais.mandatory = false;
        this.pPais.dataType = ModelConstants.Pais.name;
        this.pPais.maxLength = 100;
        this.pPais.assignCSS();
        this.fields.push(this.pPais);

        this.pTelefono = new Field(this.langMng);
        this.pTelefono.nameInRequest = 'ptelefono';
        this.pTelefono.alias = this.langMng.translateText(
            'cls_Instalacion_svc_TMODIFICARCLI_inArg_pTelefono',
            'Teléfono');
        this.pTelefono.mandatory = false;
        this.pTelefono.dataType = Field.dtString;
        this.pTelefono.maxLength = 20;
        this.pTelefono.assignCSS();
        this.fields.push(this.pTelefono);

        this.pFax = new Field(this.langMng);
        this.pFax.nameInRequest = 'pfax';
        this.pFax.alias = this.langMng.translateText(
            'cls_Instalacion_svc_TMODIFICARCLI_inArg_pFax',
            'Fax');
        this.pFax.mandatory = false;
        this.pFax.dataType = Field.dtString;
        this.pFax.maxLength = 20;
        this.pFax.assignCSS();
        this.fields.push(this.pFax);

        this.pHorarioAproximado = new Field(this.langMng);
        this.pHorarioAproximado.nameInRequest = 'phorarioaproximado';
        this.pHorarioAproximado.alias = this.langMng.translateText(
            'cls_Instalacion_svc_TMODIFICARCLI_inArg_pHorarioAproximado',
            'Horario aproximado');
        this.pHorarioAproximado.mandatory = false;
        this.pHorarioAproximado.dataType = Field.dtString;
        this.pHorarioAproximado.maxLength = 300;
        this.pHorarioAproximado.assignCSS();
        this.fields.push(this.pHorarioAproximado);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo.selectedOidsClassName === 'Instalacion' &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisInstalacion.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisinstalacion('SetValue', true);
            this.puthisInstalacion.enabled = false;
            this.executeDependecyRulesputhisinstalacion('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisInstalacion'.toLowerCase()) {
            this.puthisInstalacion.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisinstalacion('SetValue', false);
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
     * Evaluate dependendy rules for p_thisInstalacion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisinstalacion(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisinstalacion();
        }
        if ('SetValue' === event && this.puthisInstalacion.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisInstalacion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisInstalacion argument
     */
    private setSuppInfoputhisinstalacion(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisInstalacion.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Instalacion.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisInstalacion.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisInstalacion.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Instalacion.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisInstalacion.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisInstalacion argument
     */
    private executeDependecyRules1puthisInstalacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisInstalacion,
                'nombre,direccion,telefono,fax,horarioaproximado,codigopostal.CP,municipio.id_Municipio,pais.id_Pais');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisInstalacionActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisInstalacion argument
     */
    private executeDependecyRules1puthisInstalacionActions(): void {
        const varputhisinstalacion = this.getFirstInstanceFromCache(this.puthisInstalacion);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (!this.util.isNull(varputhisinstalacion)) {
            // pNombre.SetValue( v.nombre )
            this.pNombre.setValue(varputhisinstalacion.get('nombre'));
            // pDireccion.SetValue( v.direccion )
            this.pDireccion.setValue(varputhisinstalacion.get('direccion'));
            // pTelefono.SetValue( v.telefono )
            this.pTelefono.setValue(varputhisinstalacion.get('telefono'));
            // pFax.SetValue( v.fax )
            this.pFax.setValue(varputhisinstalacion.get('fax'));
            // pHorarioAproximado.SetValue( v.horarioaproximado )
            this.pHorarioAproximado.setValue(varputhisinstalacion.get('horarioaproximado'));
            // pCodigoPostal.SetValue( v.codigopostal )
            this.pCodigoPostal.setValue(this.util.oidBuilder.buildOidCodigoPostal(
                varputhisinstalacion.get('codigopostal.CP')));
            this.executeDependecyRulespcodigopostal('SetValue', true);
            // pMunicipio.SetValue( v.municipio )
            this.pMunicipio.setValue(this.util.oidBuilder.buildOidMunicipio(
                this.util.getInt(varputhisinstalacion.get('municipio.id_Municipio'))));
            this.executeDependecyRulespmunicipio('SetValue', true);
            // pPais.SetValue( v.pais )
            this.pPais.setValue(this.util.oidBuilder.buildOidPais(
                varputhisinstalacion.get('pais.id_Pais')));
            this.executeDependecyRulesppais('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisInstalacion lense search argument
     */
    public onputhisinstalacionChange(): void {

        const searchText = this.puthisInstalacion.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisInstalacion.lastText) {
                this.puthisInstalacion.removeCSSClass('noResultsLenseSearch');
                this.puthisInstalacion.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Instalacion.name, 'DSS_Instalacion', searchText, [], null).then(
                        (response: any) => {
                            this.puthisInstalacion.removeCSSClass('noResultsLenseSearch');
                            this.puthisInstalacion.searchResults = response.results;
                            if (this.puthisInstalacion.searchResults &&
                                this.puthisInstalacion.searchResults.length === 0) {
                                this.puthisInstalacion.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisInstalacion.searchResults &&
                                this.puthisInstalacion.searchResults.length === 1) {
                                this.processputhisinstalacionSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisInstalacion.removeCSSClass('noResultsLenseSearch');
                            this.puthisInstalacion.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisInstalacion.removeCSSClass('noResultsLenseSearch');
            this.puthisInstalacion.searchResults = [];
            this.cleanputhisinstalacion();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisInstalacion lense search argument
     */
    public processputhisinstalacionSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisInstalacion.searchResults.length > index) {
            selectedInstance = this.puthisInstalacion.searchResults[index];
        }
        // Clean the result list
        this.puthisInstalacion.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisInstalacion.allowMultiSelect) {
                this.puthisInstalacion.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisInstalacion.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisinstalacion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisInstalacion lense search argument
     */
    public cleanputhisinstalacion(): void {
        this.clearValidationMessages();
        this.puthisInstalacion.clean();
        this.executeDependecyRulesputhisinstalacion('SetValue', false);
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
     * Process the change in the pMunicipio lense search argument
     */
    public onpmunicipioChange(): void {

        const searchText = this.pMunicipio.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.pMunicipio.lastText) {
                this.pMunicipio.removeCSSClass('noResultsLenseSearch');
                this.pMunicipio.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Municipio.name, 'DSS_Municipio', searchText, [], null).then(
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
     * Process the change in the pCodigoPostal lense search argument
     */
    public onpcodigopostalChange(): void {

        const searchText = this.pCodigoPostal.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.pCodigoPostal.lastText) {
                this.pCodigoPostal.removeCSSClass('noResultsLenseSearch');
                this.pCodigoPostal.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Codigopostal.name, 'DSS_CodigoPostal', searchText, [], null).then(
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
        if ('puthisInstalacion'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisInstalacion.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_InstalacionDef';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('pMunicipio'.toLowerCase() === argumentName.toLowerCase()) {
            this.pMunicipio.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'P_Municipios';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('pCodigoPostal'.toLowerCase() === argumentName.toLowerCase()) {
            this.pCodigoPostal.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'P_CodigosPostales';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('pPais'.toLowerCase() === argumentName.toLowerCase()) {
            this.pPais.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'P_Paises';
            this.util.navigateSelectionForward(exchInfo);
        }
    }

    /**
     * Returns true if all elements contained in the group are visible
     * @param groupId Group id.
     */
    public isGroupVisible(groupId: string): boolean {
        let isVisible = true;

        if (groupId === '2') {
            isVisible = this.pDireccion.visible ||
                this.pMunicipio.visible ||
                this.pCodigoPostal.visible ||
                this.pPais.visible ||
                this.pTelefono.visible ||
                this.pFax.visible ||
                this.pHorarioAproximado.visible;
        }
        return isVisible;
    }

    /**
     * Returns the alias group
     * @param groupId Group id
     */
    public getGroupAlias(groupId: string): string {
        let alias = '';

        if (groupId === '2') {
            alias = this.langMng.translateText('2',
                'Dirección y contacto');
        }
        return alias;
    }
}
