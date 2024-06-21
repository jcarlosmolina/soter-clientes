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
    selector: 'imes-cliente-siu-tmodificaradmonfinca',
    templateUrl: './siu_tmodificaradmonfinca.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClienteSIUuTMODIFICARADMONFINCAComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisCliente: FieldOVLenseSearch;
    public pNombreRazonSocial: Field;
    public pPersonaContacto: Field;
    public pTelefono: Field;
    public pFax: Field;
    public pEmail: Field;
    public pMunicipioAdmonFinca: FieldOVLenseSearch;
    public pCodigoPostalAdmonFinca: FieldOVLenseSearch;
    public pDireccion: Field;
    public pTipoViaAdmonFinca: FieldDefinedSelection;
    public pNumeroAdmonFinca: Field;
    public pEscaleraAdmonFinca: Field;
    public pPisoAdmonFinca: Field;
    public pPuertaAdmonFinca: Field;
    public pExtensionAdmonFinca: Field;

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
        this.idXML = 'Clas_1699352150016661Ser_62UIServ_1';
        this.className = ModelConstants.Cliente.name;
        this.iuName = ModelConstants.Cliente.siuutmodificaradmonfinca;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.serviceName = 'TMODIFICARADMONFINCA';
        this.title = this.langMng.translateText('cls_Cliente_svc_TMODIFICARADMONFINCA',
            'Modificar datos administración finca');
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
            'cls_Cliente_svc_TMODIFICARADMONFINCA_inArg_p_thisCliente',
            'Cliente');
        this.puthisCliente.visible = this.util.isNull(this.queryContainer) ||
            this.queryContainer.className !== this.className;
        this.puthisCliente.mandatory = true;
        this.puthisCliente.dataType = ModelConstants.Cliente.name;
        this.puthisCliente.maxLength = 300;
        this.puthisCliente.assignCSS();
        this.fields.push(this.puthisCliente);

        this.pNombreRazonSocial = new Field(this.langMng);
        this.pNombreRazonSocial.nameInRequest = 'pnombrerazonsocial';
        this.pNombreRazonSocial.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARADMONFINCA_inArg_pNombreRazonSocial',
            'Nombre/razón social');
        this.pNombreRazonSocial.mandatory = false;
        this.pNombreRazonSocial.dataType = Field.dtString;
        this.pNombreRazonSocial.maxLength = 300;
        this.pNombreRazonSocial.assignCSS();
        this.fields.push(this.pNombreRazonSocial);

        this.pPersonaContacto = new Field(this.langMng);
        this.pPersonaContacto.nameInRequest = 'ppersonacontacto';
        this.pPersonaContacto.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARADMONFINCA_inArg_pPersonaContacto',
            'Persona contacto');
        this.pPersonaContacto.mandatory = false;
        this.pPersonaContacto.dataType = Field.dtString;
        this.pPersonaContacto.maxLength = 300;
        this.pPersonaContacto.assignCSS();
        this.fields.push(this.pPersonaContacto);

        this.pTelefono = new Field(this.langMng);
        this.pTelefono.nameInRequest = 'ptelefono';
        this.pTelefono.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARADMONFINCA_inArg_pTelefono',
            'Teléfono');
        this.pTelefono.mandatory = false;
        this.pTelefono.dataType = Field.dtString;
        this.pTelefono.maxLength = 300;
        this.pTelefono.assignCSS();
        this.fields.push(this.pTelefono);

        this.pFax = new Field(this.langMng);
        this.pFax.nameInRequest = 'pfax';
        this.pFax.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARADMONFINCA_inArg_pFax',
            'Fax');
        this.pFax.mandatory = false;
        this.pFax.dataType = Field.dtString;
        this.pFax.maxLength = 300;
        this.pFax.assignCSS();
        this.fields.push(this.pFax);

        this.pEmail = new Field(this.langMng);
        this.pEmail.nameInRequest = 'pemail';
        this.pEmail.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARADMONFINCA_inArg_pEmail',
            'Email');
        this.pEmail.mandatory = false;
        this.pEmail.dataType = Field.dtString;
        this.pEmail.maxLength = 300;
        this.pEmail.assignCSS();
        this.fields.push(this.pEmail);

        this.pMunicipioAdmonFinca = new FieldOVLenseSearch(this.langMng);
        this.pMunicipioAdmonFinca.nameInRequest = 'pmunicipioadmonfinca';
        this.pMunicipioAdmonFinca.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARADMONFINCA_inArg_pMunicipioAdmonFinca',
            'Municipio');
        this.pMunicipioAdmonFinca.mandatory = false;
        this.pMunicipioAdmonFinca.dataType = ModelConstants.Municipio.name;
        this.pMunicipioAdmonFinca.maxLength = 300;
        this.pMunicipioAdmonFinca.assignCSS();
        this.fields.push(this.pMunicipioAdmonFinca);

        this.pCodigoPostalAdmonFinca = new FieldOVLenseSearch(this.langMng);
        this.pCodigoPostalAdmonFinca.nameInRequest = 'pcodigopostaladmonfinca';
        this.pCodigoPostalAdmonFinca.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARADMONFINCA_inArg_pCodigoPostalAdmonFinca',
            'Código postal');
        this.pCodigoPostalAdmonFinca.mandatory = false;
        this.pCodigoPostalAdmonFinca.dataType = ModelConstants.Codigopostal.name;
        this.pCodigoPostalAdmonFinca.maxLength = 10;
        this.pCodigoPostalAdmonFinca.assignCSS();
        this.fields.push(this.pCodigoPostalAdmonFinca);

        this.pDireccion = new Field(this.langMng);
        this.pDireccion.nameInRequest = 'pdireccion';
        this.pDireccion.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARADMONFINCA_inArg_pDireccion',
            'Dirección');
        this.pDireccion.mandatory = false;
        this.pDireccion.dataType = Field.dtString;
        this.pDireccion.maxLength = 300;
        this.pDireccion.assignCSS();
        this.fields.push(this.pDireccion);

        this.pTipoViaAdmonFinca = new FieldDefinedSelection(this.langMng);
        this.pTipoViaAdmonFinca.nameInRequest = 'ptipoviaadmonfinca';
        this.pTipoViaAdmonFinca.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARADMONFINCA_inArg_pTipoViaAdmonFinca',
            'Tipo vía');
        this.pTipoViaAdmonFinca.mandatory = false;
        this.pTipoViaAdmonFinca.dataType = Field.dtString;
        this.pTipoViaAdmonFinca.options = DefinedSelections.DS_TIPOVIA;
        this.pTipoViaAdmonFinca.maxLength = 2;
        this.pTipoViaAdmonFinca.assignCSS();
        this.fields.push(this.pTipoViaAdmonFinca);

        this.pNumeroAdmonFinca = new Field(this.langMng);
        this.pNumeroAdmonFinca.nameInRequest = 'pnumeroadmonfinca';
        this.pNumeroAdmonFinca.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARADMONFINCA_inArg_pNumeroAdmonFinca',
            'Nº');
        this.pNumeroAdmonFinca.mandatory = false;
        this.pNumeroAdmonFinca.dataType = Field.dtString;
        this.pNumeroAdmonFinca.maxLength = 5;
        this.pNumeroAdmonFinca.assignCSS();
        this.fields.push(this.pNumeroAdmonFinca);

        this.pEscaleraAdmonFinca = new Field(this.langMng);
        this.pEscaleraAdmonFinca.nameInRequest = 'pescaleraadmonfinca';
        this.pEscaleraAdmonFinca.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARADMONFINCA_inArg_pEscaleraAdmonFinca',
            'Escalera');
        this.pEscaleraAdmonFinca.mandatory = false;
        this.pEscaleraAdmonFinca.dataType = Field.dtString;
        this.pEscaleraAdmonFinca.maxLength = 2;
        this.pEscaleraAdmonFinca.assignCSS();
        this.fields.push(this.pEscaleraAdmonFinca);

        this.pPisoAdmonFinca = new Field(this.langMng);
        this.pPisoAdmonFinca.nameInRequest = 'ppisoadmonfinca';
        this.pPisoAdmonFinca.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARADMONFINCA_inArg_pPisoAdmonFinca',
            'Piso');
        this.pPisoAdmonFinca.mandatory = false;
        this.pPisoAdmonFinca.dataType = Field.dtString;
        this.pPisoAdmonFinca.maxLength = 2;
        this.pPisoAdmonFinca.assignCSS();
        this.fields.push(this.pPisoAdmonFinca);

        this.pPuertaAdmonFinca = new Field(this.langMng);
        this.pPuertaAdmonFinca.nameInRequest = 'ppuertaadmonfinca';
        this.pPuertaAdmonFinca.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARADMONFINCA_inArg_pPuertaAdmonFinca',
            'Puerta');
        this.pPuertaAdmonFinca.mandatory = false;
        this.pPuertaAdmonFinca.dataType = Field.dtString;
        this.pPuertaAdmonFinca.maxLength = 2;
        this.pPuertaAdmonFinca.assignCSS();
        this.fields.push(this.pPuertaAdmonFinca);

        this.pExtensionAdmonFinca = new Field(this.langMng);
        this.pExtensionAdmonFinca.nameInRequest = 'pextensionadmonfinca';
        this.pExtensionAdmonFinca.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARADMONFINCA_inArg_pExtensionAdmonFinca',
            'Extensión');
        this.pExtensionAdmonFinca.mandatory = false;
        this.pExtensionAdmonFinca.dataType = Field.dtString;
        this.pExtensionAdmonFinca.maxLength = 4;
        this.pExtensionAdmonFinca.assignCSS();
        this.fields.push(this.pExtensionAdmonFinca);
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
            if (lastRole === 'MunicipioAdmonFinca') {
                this.pMunicipioAdmonFinca.setValue(lastRoleOid);
                this.executeDependecyRulespmunicipioadmonfinca('SetValue', true);
                this.pMunicipioAdmonFinca.enabled = false;
                this.executeDependecyRulespmunicipioadmonfinca('SetEnabled', true);
            }
            if (lastRole === 'CodigoPostalAdmonFinca') {
                this.pCodigoPostalAdmonFinca.setValue(lastRoleOid);
                this.executeDependecyRulespcodigopostaladmonfinca('SetValue', true);
                this.pCodigoPostalAdmonFinca.enabled = false;
                this.executeDependecyRulespcodigopostaladmonfinca('SetEnabled', true);
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

        if (exchInfo.originArgumentName.toLowerCase() === 'pMunicipioAdmonFinca'.toLowerCase()) {
            this.pMunicipioAdmonFinca.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespmunicipioadmonfinca('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'pCodigoPostalAdmonFinca'.toLowerCase()) {
            this.pCodigoPostalAdmonFinca.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespcodigopostaladmonfinca('SetValue', false);
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
                'nombrerazonsocialadmonfinca,personacontactoadmonfinca,telefonoadmonfinca,faxadmonfinca,emailadmonfinca' +
                ',codigopostaladmonfinca.CP,municipioadmonfinca.id_Municipio,escaleraadmonfinca,extensionadmonfinca,numeroadmonfinca' +
                ',pisoadmonfinca,puertaadmonfinca,tipoviaadmonfinca');
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
            // pNombreRazonSocial.SetValue( v.nombrerazonsocialadmonfinca )
            this.pNombreRazonSocial.setValue(varputhiscliente.get('nombrerazonsocialadmonfinca'));
            // pPersonaContacto.SetValue( v.personacontactoadmonfinca )
            this.pPersonaContacto.setValue(varputhiscliente.get('personacontactoadmonfinca'));
            // pTelefono.SetValue( v.telefonoadmonfinca )
            this.pTelefono.setValue(varputhiscliente.get('telefonoadmonfinca'));
            // pFax.SetValue( v.faxadmonfinca )
            this.pFax.setValue(varputhiscliente.get('faxadmonfinca'));
            // pEmail.SetValue( v.emailadmonfinca )
            this.pEmail.setValue(varputhiscliente.get('emailadmonfinca'));
            // pCodigoPostalAdmonFinca.SetValue( v.codigopostaladmonfinca )
            this.pCodigoPostalAdmonFinca.setValue(this.util.oidBuilder.buildOidCodigoPostal(
                varputhiscliente.get('codigopostaladmonfinca.CP')));
            this.executeDependecyRulespcodigopostaladmonfinca('SetValue', true);
            // pMunicipioAdmonFinca.SetValue( v.municipioadmonfinca )
            this.pMunicipioAdmonFinca.setValue(this.util.oidBuilder.buildOidMunicipio(
                this.util.getInt(varputhiscliente.get('municipioadmonfinca.id_Municipio'))));
            this.executeDependecyRulespmunicipioadmonfinca('SetValue', true);
            // pEscaleraAdmonFinca.SetValue( v.escaleraadmonfinca )
            this.pEscaleraAdmonFinca.setValue(varputhiscliente.get('escaleraadmonfinca'));
            // pExtensionAdmonFinca.SetValue( v.extensionadmonfinca )
            this.pExtensionAdmonFinca.setValue(varputhiscliente.get('extensionadmonfinca'));
            // pNumeroAdmonFinca.SetValue( v.numeroadmonfinca )
            this.pNumeroAdmonFinca.setValue(varputhiscliente.get('numeroadmonfinca'));
            // pPisoAdmonFinca.SetValue( v.pisoadmonfinca )
            this.pPisoAdmonFinca.setValue(varputhiscliente.get('pisoadmonfinca'));
            // pPuertaAdmonFinca.SetValue( v.puertaadmonfinca )
            this.pPuertaAdmonFinca.setValue(varputhiscliente.get('puertaadmonfinca'));
            // pTipoViaAdmonFinca.SetValue( v.tipoviaadmonfinca )
            this.pTipoViaAdmonFinca.setValue(varputhiscliente.get('tipoviaadmonfinca'));
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
     * Evaluate dependendy rules for pMunicipioAdmonFinca argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespmunicipioadmonfinca(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopmunicipioadmonfinca();
        }
        if ('SetValue' === event && this.pMunicipioAdmonFinca.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1pMunicipioAdmonFinca();
        }
        // Rule 2
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules2pMunicipioAdmonFinca();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pMunicipioAdmonFinca argument
     */
    private setSuppInfopmunicipioadmonfinca(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.pMunicipioAdmonFinca.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Municipio.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.pMunicipioAdmonFinca.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.pMunicipioAdmonFinca.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Municipio.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.pMunicipioAdmonFinca.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for pMunicipioAdmonFinca argument
     */
    private executeDependecyRules1pMunicipioAdmonFinca(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisCliente,
                'municipioadmonfinca.id_Municipio,id_Cliente');
        this.addQueryInstanceFromField(this.pMunicipioAdmonFinca,
                'id_Municipio');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1pMunicipioAdmonFincaActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pMunicipioAdmonFinca argument
     */
    private executeDependecyRules1pMunicipioAdmonFincaActions(): void {
        const varputhiscliente = this.getFirstInstanceFromCache(this.puthisCliente);
        const varpmunicipioadmonfinca = this.getFirstInstanceFromCache(this.pMunicipioAdmonFinca);
        this.notifyAnswerFromToTheBackEnd();
        // (v = NULL) OR (v <> NULL AND v <> p_thiscliente.municipioadmonfinca)
        if ((this.util.isNull(varpmunicipioadmonfinca)) || (!this.util.isNull(varpmunicipioadmonfinca) &&
            !this.util.oidEquals(varpmunicipioadmonfinca.oid, this.util.oidBuilder.buildOidMunicipio(
            this.util.getInt(varputhiscliente.get('municipioadmonfinca.id_Municipio')))))) {
            // pCodigoPostalAdmonFinca.SetValue( NULL )
            this.pCodigoPostalAdmonFinca.setValue(null);
            this.executeDependecyRulespcodigopostaladmonfinca('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pMunicipioAdmonFinca argument
     */
    private executeDependecyRules2pMunicipioAdmonFinca(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.pMunicipioAdmonFinca,
                'codigopostalunico');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules2pMunicipioAdmonFincaActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pMunicipioAdmonFinca argument
     */
    private executeDependecyRules2pMunicipioAdmonFincaActions(): void {
        const varpmunicipioadmonfinca = this.getFirstInstanceFromCache(this.pMunicipioAdmonFinca);
        let rtnFunction0;
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL AND v.CodigoPostalUnico <> ""
        if (!this.util.isNull(varpmunicipioadmonfinca) && !this.util.valueEquals(varpmunicipioadmonfinca.get('codigopostalunico'),
            '')) {
            this.usrFunc.getCodigoPostal(varpmunicipioadmonfinca.get('codigopostalunico')).then((res0) => {
                rtnFunction0 = res0;
                // pCodigoPostalAdmonFinca.SetValue( getCodigoPostal(v.CodigoPostalUnico) )
                this.pCodigoPostalAdmonFinca.setValue(rtnFunction0);
                this.executeDependecyRulespcodigopostaladmonfinca('SetValue', true);

                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });

        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pMunicipioAdmonFinca lense search argument
     */
    public onpmunicipioadmonfincaChange(): void {

        const searchText = this.pMunicipioAdmonFinca.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.pMunicipioAdmonFinca.lastText) {
                const navFilters: string[] = [];
                navFilters.push('Cliente_TMODIFICARADMONFINCA_pMunicipioAdmonFinca_NavFilter0');
                this.pMunicipioAdmonFinca.removeCSSClass('noResultsLenseSearch');
                this.pMunicipioAdmonFinca.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Municipio.name, 'DSS_Municipio', searchText, navFilters,
                    this.getNavigationFilterVariables()).then(
                        (response: any) => {
                            this.pMunicipioAdmonFinca.removeCSSClass('noResultsLenseSearch');
                            this.pMunicipioAdmonFinca.searchResults = response.results;
                            if (this.pMunicipioAdmonFinca.searchResults &&
                                this.pMunicipioAdmonFinca.searchResults.length === 0) {
                                this.pMunicipioAdmonFinca.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.pMunicipioAdmonFinca.searchResults &&
                                this.pMunicipioAdmonFinca.searchResults.length === 1) {
                                this.processpmunicipioadmonfincaSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.pMunicipioAdmonFinca.removeCSSClass('noResultsLenseSearch');
                            this.pMunicipioAdmonFinca.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.pMunicipioAdmonFinca.removeCSSClass('noResultsLenseSearch');
            this.pMunicipioAdmonFinca.searchResults = [];
            this.cleanpmunicipioadmonfinca();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pMunicipioAdmonFinca lense search argument
     */
    public processpmunicipioadmonfincaSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.pMunicipioAdmonFinca.searchResults.length > index) {
            selectedInstance = this.pMunicipioAdmonFinca.searchResults[index];
        }
        // Clean the result list
        this.pMunicipioAdmonFinca.searchResults = [];
        if (selectedInstance) {
            if (!this.pMunicipioAdmonFinca.allowMultiSelect) {
                this.pMunicipioAdmonFinca.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.pMunicipioAdmonFinca.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespmunicipioadmonfinca('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pMunicipioAdmonFinca lense search argument
     */
    public cleanpmunicipioadmonfinca(): void {
        this.clearValidationMessages();
        this.pMunicipioAdmonFinca.clean();
        this.executeDependecyRulespmunicipioadmonfinca('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pCodigoPostalAdmonFinca argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespcodigopostaladmonfinca(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopcodigopostaladmonfinca();
        }
        if ('SetValue' === event && this.pCodigoPostalAdmonFinca.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1pCodigoPostalAdmonFinca();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pCodigoPostalAdmonFinca argument
     */
    private setSuppInfopcodigopostaladmonfinca(): void {

        const displaySetIC = 'CP';
        let numberMissingSupInfo = 0;
        for (const value of this.pCodigoPostalAdmonFinca.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Codigopostal.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.pCodigoPostalAdmonFinca.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.pCodigoPostalAdmonFinca.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Codigopostal.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.pCodigoPostalAdmonFinca.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for pCodigoPostalAdmonFinca argument
     */
    private executeDependecyRules1pCodigoPostalAdmonFinca(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.pCodigoPostalAdmonFinca,
                'municipiounico');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1pCodigoPostalAdmonFincaActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pCodigoPostalAdmonFinca argument
     */
    private executeDependecyRules1pCodigoPostalAdmonFincaActions(): void {
        const varpcodigopostaladmonfinca = this.getFirstInstanceFromCache(this.pCodigoPostalAdmonFinca);
        let rtnFunction0;
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL AND v.MunicipioUnico <> -1
        if (!this.util.isNull(varpcodigopostaladmonfinca) &&
            !this.util.valueEquals(this.util.getInt(varpcodigopostaladmonfinca.get('municipiounico')), -1)) {
            this.usrFunc.getMunicipio(this.util.getInt(varpcodigopostaladmonfinca.get('municipiounico'))).then((res0) => {
                rtnFunction0 = res0;
                // pMunicipioAdmonFinca.SetValue( getMunicipio(v.MunicipioUnico) )
                this.pMunicipioAdmonFinca.setValue(rtnFunction0);
                this.executeDependecyRulespmunicipioadmonfinca('SetValue', true);

                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });

        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pCodigoPostalAdmonFinca lense search argument
     */
    public onpcodigopostaladmonfincaChange(): void {

        const searchText = this.pCodigoPostalAdmonFinca.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.pCodigoPostalAdmonFinca.lastText) {
                const navFilters: string[] = [];
                navFilters.push('Cliente_TMODIFICARADMONFINCA_pCodigoPostalAdmonFinca_NavFilter0');
                this.pCodigoPostalAdmonFinca.removeCSSClass('noResultsLenseSearch');
                this.pCodigoPostalAdmonFinca.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Codigopostal.name, 'DSS_CodigoPostal', searchText, navFilters,
                    this.getNavigationFilterVariables()).then(
                        (response: any) => {
                            this.pCodigoPostalAdmonFinca.removeCSSClass('noResultsLenseSearch');
                            this.pCodigoPostalAdmonFinca.searchResults = response.results;
                            if (this.pCodigoPostalAdmonFinca.searchResults &&
                                this.pCodigoPostalAdmonFinca.searchResults.length === 0) {
                                this.pCodigoPostalAdmonFinca.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.pCodigoPostalAdmonFinca.searchResults &&
                                this.pCodigoPostalAdmonFinca.searchResults.length === 1) {
                                this.processpcodigopostaladmonfincaSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.pCodigoPostalAdmonFinca.removeCSSClass('noResultsLenseSearch');
                            this.pCodigoPostalAdmonFinca.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.pCodigoPostalAdmonFinca.removeCSSClass('noResultsLenseSearch');
            this.pCodigoPostalAdmonFinca.searchResults = [];
            this.cleanpcodigopostaladmonfinca();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pCodigoPostalAdmonFinca lense search argument
     */
    public processpcodigopostaladmonfincaSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.pCodigoPostalAdmonFinca.searchResults.length > index) {
            selectedInstance = this.pCodigoPostalAdmonFinca.searchResults[index];
        }
        // Clean the result list
        this.pCodigoPostalAdmonFinca.searchResults = [];
        if (selectedInstance) {
            if (!this.pCodigoPostalAdmonFinca.allowMultiSelect) {
                this.pCodigoPostalAdmonFinca.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.pCodigoPostalAdmonFinca.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespcodigopostaladmonfinca('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pCodigoPostalAdmonFinca lense search argument
     */
    public cleanpcodigopostaladmonfinca(): void {
        this.clearValidationMessages();
        this.pCodigoPostalAdmonFinca.clean();
        this.executeDependecyRulespcodigopostaladmonfinca('SetValue', false);
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
        if ('pMunicipioAdmonFinca'.toLowerCase() === argumentName.toLowerCase()) {
            this.pMunicipioAdmonFinca.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'P_Municipios';
            exchInfo.navigationalFilterIdentity = [];
            exchInfo.navigationalFilterIdentity.push('Cliente_TMODIFICARADMONFINCA_pMunicipioAdmonFinca_NavFilter0');
            exchInfo.navigationalFilterVariables = this.getNavigationFilterVariables();
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('pCodigoPostalAdmonFinca'.toLowerCase() === argumentName.toLowerCase()) {
            this.pCodigoPostalAdmonFinca.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'P_CodigosPostales';
            exchInfo.navigationalFilterIdentity = [];
            exchInfo.navigationalFilterIdentity.push('Cliente_TMODIFICARADMONFINCA_pCodigoPostalAdmonFinca_NavFilter0');
            exchInfo.navigationalFilterVariables = this.getNavigationFilterVariables();
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
