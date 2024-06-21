import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { CacheDependencyRules, InstanceCache } from '../common/app.cachedependencyrules';
import { Field, FieldDefinedSelection, FieldOVLenseSearch, FieldOVPreload, Instance } from '../common/baseIUElements';
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
    selector: 'imes-contacto-siu-tcrear4sistema',
    templateUrl: './siu_tcrear4sistema.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactoSIUuTCREAR4SISTEMAComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public pSistema: FieldOVLenseSearch;
    public pTipoContacto: FieldOVPreload;
    public pNombre: Field;
    public pTelefono1: Field;
    public pTelefono2: Field;
    public pFax: Field;
    public pEmail: Field;
    public pRecibePresupuestos: FieldDefinedSelection;
    public pRecibePartes: FieldDefinedSelection;
    public pRecibeFacturas: FieldDefinedSelection;
    public pPuedeFirmar: FieldDefinedSelection;
    public pDNI: Field;
    public pMovil: Field;
    public pTipoFirma: FieldDefinedSelection;
    public pIdDispositivo: Field;

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
        this.idXML = 'Clas_1699352150016154Ser_6UIServ_1';
        this.className = ModelConstants.Contacto.name;
        this.iuName = ModelConstants.Contacto.siuutcrear4sistema;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.serviceName = 'TCREAR4SISTEMA';
        this.title = this.langMng.translateText('cls_Contacto_svc_TCREAR4SISTEMA',
            'Alta');
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public initializeComponents(): void {

        this.pSistema = new FieldOVLenseSearch(this.langMng);
        this.pSistema.nameInRequest = 'psistema';
        this.pSistema.alias = this.langMng.translateText(
            'cls_Contacto_svc_TCREAR4SISTEMA_inArg_pSistema',
            'Sistema');
        this.pSistema.mandatory = true;
        this.pSistema.dataType = ModelConstants.Sistema.name;
        this.pSistema.maxLength = 100;
        this.pSistema.assignCSS();
        this.fields.push(this.pSistema);

        this.pTipoContacto = new FieldOVPreload(this.langMng);
        this.pTipoContacto.nameInRequest = 'ptipocontacto';
        this.pTipoContacto.alias = this.langMng.translateText(
            'cls_Contacto_svc_TCREAR4SISTEMA_inArg_pTipoContacto',
            'Tipo');
        this.pTipoContacto.mandatory = true;
        this.pTipoContacto.dataType = ModelConstants.Tipocontacto.name;
        this.pTipoContacto.maxLength = 100;
        this.pTipoContacto.assignCSS();
        this.fields.push(this.pTipoContacto);

        this.pNombre = new Field(this.langMng);
        this.pNombre.nameInRequest = 'pnombre';
        this.pNombre.alias = this.langMng.translateText(
            'cls_Contacto_svc_TCREAR4SISTEMA_inArg_pNombre',
            'Nombre');
        this.pNombre.mandatory = false;
        this.pNombre.dataType = Field.dtString;
        this.pNombre.maxLength = 300;
        this.pNombre.assignCSS();
        this.fields.push(this.pNombre);

        this.pTelefono1 = new Field(this.langMng);
        this.pTelefono1.nameInRequest = 'ptelefono1';
        this.pTelefono1.alias = this.langMng.translateText(
            'cls_Contacto_svc_TCREAR4SISTEMA_inArg_pTelefono1',
            'Teléfono 1');
        this.pTelefono1.mandatory = false;
        this.pTelefono1.dataType = Field.dtString;
        this.pTelefono1.maxLength = 20;
        this.pTelefono1.assignCSS();
        this.fields.push(this.pTelefono1);

        this.pTelefono2 = new Field(this.langMng);
        this.pTelefono2.nameInRequest = 'ptelefono2';
        this.pTelefono2.alias = this.langMng.translateText(
            'cls_Contacto_svc_TCREAR4SISTEMA_inArg_pTelefono2',
            'Teléfono 2');
        this.pTelefono2.mandatory = false;
        this.pTelefono2.dataType = Field.dtString;
        this.pTelefono2.maxLength = 20;
        this.pTelefono2.assignCSS();
        this.fields.push(this.pTelefono2);

        this.pFax = new Field(this.langMng);
        this.pFax.nameInRequest = 'pfax';
        this.pFax.alias = this.langMng.translateText(
            'cls_Contacto_svc_TCREAR4SISTEMA_inArg_pFax',
            'Fax');
        this.pFax.mandatory = false;
        this.pFax.dataType = Field.dtString;
        this.pFax.maxLength = 20;
        this.pFax.assignCSS();
        this.fields.push(this.pFax);

        this.pEmail = new Field(this.langMng);
        this.pEmail.nameInRequest = 'pemail';
        this.pEmail.alias = this.langMng.translateText(
            'cls_Contacto_svc_TCREAR4SISTEMA_inArg_pEmail',
            'Email');
        this.pEmail.mandatory = false;
        this.pEmail.dataType = Field.dtString;
        this.pEmail.maxLength = 100;
        this.pEmail.assignCSS();
        this.fields.push(this.pEmail);

        this.pRecibePresupuestos = new FieldDefinedSelection(this.langMng);
        this.pRecibePresupuestos.nameInRequest = 'precibepresupuestos';
        this.pRecibePresupuestos.alias = this.langMng.translateText(
            'cls_Contacto_svc_TCREAR4SISTEMA_inArg_pRecibePresupuestos',
            'Recibe presupuestos');
        this.pRecibePresupuestos.mandatory = true;
        this.pRecibePresupuestos.dataType = Field.dtBool;
        this.pRecibePresupuestos.options = DefinedSelections.DS_SI_NO;
        this.pRecibePresupuestos.assignCSS();
        this.fields.push(this.pRecibePresupuestos);

        this.pRecibePartes = new FieldDefinedSelection(this.langMng);
        this.pRecibePartes.nameInRequest = 'precibepartes';
        this.pRecibePartes.alias = this.langMng.translateText(
            'cls_Contacto_svc_TCREAR4SISTEMA_inArg_pRecibePartes',
            'Recibe partes');
        this.pRecibePartes.mandatory = true;
        this.pRecibePartes.dataType = Field.dtBool;
        this.pRecibePartes.options = DefinedSelections.DS_SI_NO;
        this.pRecibePartes.assignCSS();
        this.fields.push(this.pRecibePartes);

        this.pRecibeFacturas = new FieldDefinedSelection(this.langMng);
        this.pRecibeFacturas.nameInRequest = 'precibefacturas';
        this.pRecibeFacturas.alias = this.langMng.translateText(
            'cls_Contacto_svc_TCREAR4SISTEMA_inArg_pRecibeFacturas',
            'Recibe facturas');
        this.pRecibeFacturas.mandatory = true;
        this.pRecibeFacturas.dataType = Field.dtBool;
        this.pRecibeFacturas.options = DefinedSelections.DS_SI_NO;
        this.pRecibeFacturas.assignCSS();
        this.fields.push(this.pRecibeFacturas);

        this.pPuedeFirmar = new FieldDefinedSelection(this.langMng);
        this.pPuedeFirmar.nameInRequest = 'ppuedefirmar';
        this.pPuedeFirmar.alias = this.langMng.translateText(
            'cls_Contacto_svc_TCREAR4SISTEMA_inArg_pPuedeFirmar',
            'Puede firmar');
        this.pPuedeFirmar.mandatory = false;
        this.pPuedeFirmar.dataType = Field.dtBool;
        this.pPuedeFirmar.options = DefinedSelections.DS_SI_NO;
        this.pPuedeFirmar.assignCSS();
        this.fields.push(this.pPuedeFirmar);

        this.pDNI = new Field(this.langMng);
        this.pDNI.nameInRequest = 'pdni';
        this.pDNI.alias = this.langMng.translateText(
            'cls_Contacto_svc_TCREAR4SISTEMA_inArg_pDNI',
            'DNI');
        this.pDNI.mandatory = false;
        this.pDNI.dataType = Field.dtString;
        this.pDNI.maxLength = 15;
        this.pDNI.assignCSS();
        this.fields.push(this.pDNI);

        this.pMovil = new Field(this.langMng);
        this.pMovil.nameInRequest = 'pmovil';
        this.pMovil.alias = this.langMng.translateText(
            'cls_Contacto_svc_TCREAR4SISTEMA_inArg_pMovil',
            'Móvil');
        this.pMovil.mandatory = false;
        this.pMovil.dataType = Field.dtString;
        this.pMovil.maxLength = 15;
        this.pMovil.assignCSS();
        this.fields.push(this.pMovil);

        this.pTipoFirma = new FieldDefinedSelection(this.langMng);
        this.pTipoFirma.nameInRequest = 'ptipofirma';
        this.pTipoFirma.alias = this.langMng.translateText(
            'cls_Contacto_svc_TCREAR4SISTEMA_inArg_pTipoFirma',
            'Tipo firma');
        this.pTipoFirma.mandatory = false;
        this.pTipoFirma.dataType = Field.dtString;
        this.pTipoFirma.options = DefinedSelections.DS_TIPOFIRMA;
        this.pTipoFirma.maxLength = 1;
        this.pTipoFirma.assignCSS();
        this.fields.push(this.pTipoFirma);

        this.pIdDispositivo = new Field(this.langMng);
        this.pIdDispositivo.nameInRequest = 'piddispositivo';
        this.pIdDispositivo.alias = this.langMng.translateText(
            'cls_Contacto_svc_TCREAR4SISTEMA_inArg_pIdDispositivo',
            'Id. dispositivo');
        this.pIdDispositivo.mandatory = false;
        this.pIdDispositivo.dataType = Field.dtString;
        this.pIdDispositivo.maxLength = 100;
        this.pIdDispositivo.assignCSS();
        this.fields.push(this.pIdDispositivo);
    }

    /**
     * Initialize with default values
     */
    public initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // pRecibePresupuestos
            const defValpRecibePresupuestos = new Promise<void>((resolveDefValue) => {
                this.pRecibePresupuestos.setValue(true);
                resolveDefValue();
            });
            promiseArr.push(defValpRecibePresupuestos);

            // pRecibePartes
            const defValpRecibePartes = new Promise<void>((resolveDefValue) => {
                this.pRecibePartes.setValue(true);
                resolveDefValue();
            });
            promiseArr.push(defValpRecibePartes);

            // pRecibeFacturas
            const defValpRecibeFacturas = new Promise<void>((resolveDefValue) => {
                this.pRecibeFacturas.setValue(true);
                resolveDefValue();
            });
            promiseArr.push(defValpRecibeFacturas);

            // pPuedeFirmar
            const defValpPuedeFirmar = new Promise<void>((resolveDefValue) => {
                this.pPuedeFirmar.setValue(false);
                this.executeDependecyRulesppuedefirmar('SetValue', true);
                resolveDefValue();
            });
            promiseArr.push(defValpPuedeFirmar);

            Promise.all(promiseArr).then((results: any[]) => {
                this.util.hideWaitDialog();
                this.changeDetectorRef.markForCheck();
                resolve();
            });
        });
    }

    /**
     * Initialize arguments from context that identify a Role
     */
    public initializeFromCtxRelated(): void {
        const lastRole = this.context.exchangeInfo.getLastNavigationRole();
        const lastRoleOid = this.context.exchangeInfo.getLastNavigationRoleOid();

        if (lastRole && lastRoleOid !== {}) {
            if (lastRole === 'Sistema') {
                this.pSistema.setValue(lastRoleOid);
                this.executeDependecyRulespsistema('SetValue', true);
                this.pSistema.enabled = false;
                this.executeDependecyRulespsistema('SetEnabled', true);
            }
            if (lastRole === 'TipoContacto') {
                this.pTipoContacto.setValue(lastRoleOid);
                this.pTipoContacto.enabled = false;
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public loadPreload(): void {

        // pTipoContacto
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('TipoContacto', 'DSS_TipoContacto', [], null, 'OC_TipoContacto').then(
            (response: any) => {
                if (response && response.results) {
                    this.pTipoContacto.loadPreload(response.results);
                } else {
                    this.pTipoContacto.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.notifyAnswerFromToTheBackEnd();
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.processErrorInLoadPreload(response.resultDescription);
            }
        );
        this.numberOfPendingPreload++;
    }

   /**
    * Process the selection backward navigation
    */
    public processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'pSistema'.toLowerCase()) {
            this.pSistema.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespsistema('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for pSistema argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespsistema(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopsistema();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pSistema argument
     */
    private setSuppInfopsistema(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.pSistema.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Sistema.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.pSistema.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.pSistema.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Sistema.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.pSistema.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the pSistema lense search argument
     */
    public onpsistemaChange(): void {

        const searchText = this.pSistema.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.pSistema.lastText) {
                this.pSistema.removeCSSClass('noResultsLenseSearch');
                this.pSistema.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Sistema.name, 'DSS_Sistema', searchText, [], null).then(
                        (response: any) => {
                            this.pSistema.removeCSSClass('noResultsLenseSearch');
                            this.pSistema.searchResults = response.results;
                            if (this.pSistema.searchResults &&
                                this.pSistema.searchResults.length === 0) {
                                this.pSistema.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.pSistema.searchResults &&
                                this.pSistema.searchResults.length === 1) {
                                this.processpsistemaSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.pSistema.removeCSSClass('noResultsLenseSearch');
                            this.pSistema.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.pSistema.removeCSSClass('noResultsLenseSearch');
            this.pSistema.searchResults = [];
            this.cleanpsistema();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pSistema lense search argument
     */
    public processpsistemaSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.pSistema.searchResults.length > index) {
            selectedInstance = this.pSistema.searchResults[index];
        }
        // Clean the result list
        this.pSistema.searchResults = [];
        if (selectedInstance) {
            if (!this.pSistema.allowMultiSelect) {
                this.pSistema.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.pSistema.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespsistema('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pSistema lense search argument
     */
    public cleanpsistema(): void {
        this.clearValidationMessages();
        this.pSistema.clean();
        this.executeDependecyRulespsistema('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pPuedeFirmar argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesppuedefirmar(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1pPuedeFirmar();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2pPuedeFirmar();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pPuedeFirmar argument
     */
    private executeDependecyRules1pPuedeFirmar(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1pPuedeFirmarActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pPuedeFirmar argument
     */
    private executeDependecyRules1pPuedeFirmarActions(): void {
        // v <> NULL AND v=TRUE
        if (!this.util.isNull(this.util.getBool(this.pPuedeFirmar.value)) &&
            this.util.valueEquals(this.util.getBool(this.pPuedeFirmar.value), true)) {
            // pDNI.SetMandatory( TRUE )
            this.pDNI.mandatory = true;
            // pDNI.SetVisible( TRUE )
            this.pDNI.visible = true;
            // pEmail.SetMandatory( TRUE )
            this.pEmail.mandatory = true;
            // pEmail.SetVisible( TRUE )
            this.pEmail.visible = true;
            // pMovil.SetMandatory( TRUE )
            this.pMovil.mandatory = true;
            // pMovil.SetVisible( TRUE )
            this.pMovil.visible = true;
            // pTipoFirma.SetMandatory( TRUE )
            this.pTipoFirma.mandatory = true;
            // pTipoFirma.SetVisible( TRUE )
            this.pTipoFirma.visible = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pPuedeFirmar argument
     */
    private executeDependecyRules2pPuedeFirmar(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2pPuedeFirmarActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pPuedeFirmar argument
     */
    private executeDependecyRules2pPuedeFirmarActions(): void {
        // v <> NULL AND v=FALSE
        if (!this.util.isNull(this.util.getBool(this.pPuedeFirmar.value)) &&
            this.util.valueEquals(this.util.getBool(this.pPuedeFirmar.value), false)) {
            // pDNI.SetMandatory( FALSE )
            this.pDNI.mandatory = false;
            // pDNI.SetVisible( FALSE )
            this.pDNI.visible = false;
            // pDNI.SetValue( NULL )
            this.pDNI.setValue(null);
            // pEmail.SetMandatory( FALSE )
            this.pEmail.mandatory = false;
            // pEmail.SetVisible( FALSE )
            this.pEmail.visible = false;
            // pEmail.SetValue( NULL )
            this.pEmail.setValue(null);
            // pMovil.SetMandatory( FALSE )
            this.pMovil.mandatory = false;
            // pMovil.SetVisible( FALSE )
            this.pMovil.visible = false;
            // pMovil.SetValue( NULL )
            this.pMovil.setValue(null);
            // pTipoFirma.SetMandatory( FALSE )
            this.pTipoFirma.mandatory = false;
            // pTipoFirma.SetVisible( FALSE )
            this.pTipoFirma.visible = false;
            // pTipoFirma.SetValue( NULL )
            this.pTipoFirma.setValue(null);
            this.executeDependecyRulesptipofirma('SetValue', true);
            // pIdDispositivo.SetMandatory( FALSE )
            this.pIdDispositivo.mandatory = false;
            // pIdDispositivo.SetVisible( FALSE )
            this.pIdDispositivo.visible = false;
            // pIdDispositivo.SetValue( NULL )
            this.pIdDispositivo.setValue(null);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pPuedeFirmar argument
     */
    public onppuedefirmarChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesppuedefirmar('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pTipoFirma argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptipofirma(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1pTipoFirma();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2pTipoFirma();
        }
        // Rule 3
        if ('SetValue' === event) {
            this.executeDependecyRules3pTipoFirma();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pTipoFirma argument
     */
    private executeDependecyRules1pTipoFirma(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1pTipoFirmaActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pTipoFirma argument
     */
    private executeDependecyRules1pTipoFirmaActions(): void {
        // v <> NULL AND v="B"
        if (!this.util.isNull(this.pTipoFirma.value) && this.util.valueEquals(this.pTipoFirma.value, 'B')) {
            // pIdDispositivo.SetMandatory( TRUE )
            this.pIdDispositivo.mandatory = true;
            // pIdDispositivo.SetVisible( TRUE )
            this.pIdDispositivo.visible = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pTipoFirma argument
     */
    private executeDependecyRules2pTipoFirma(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2pTipoFirmaActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pTipoFirma argument
     */
    private executeDependecyRules2pTipoFirmaActions(): void {
        // v <> NULL AND v<>"B"
        if (!this.util.isNull(this.pTipoFirma.value) && !this.util.valueEquals(this.pTipoFirma.value, 'B')) {
            // pIdDispositivo.SetMandatory( FALSE )
            this.pIdDispositivo.mandatory = false;
            // pIdDispositivo.SetVisible( FALSE )
            this.pIdDispositivo.visible = false;
            // pIdDispositivo.SetValue( NULL )
            this.pIdDispositivo.setValue(null);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 3 for pTipoFirma argument
     */
    private executeDependecyRules3pTipoFirma(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules3pTipoFirmaActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 3 for pTipoFirma argument
     */
    private executeDependecyRules3pTipoFirmaActions(): void {
        // v = NULL
        if (this.util.isNull(this.pTipoFirma.value)) {
            // pIdDispositivo.SetMandatory( FALSE )
            this.pIdDispositivo.mandatory = false;
            // pIdDispositivo.SetVisible( FALSE )
            this.pIdDispositivo.visible = false;
            // pIdDispositivo.SetValue( NULL )
            this.pIdDispositivo.setValue(null);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pTipoFirma argument
     */
    public onptipofirmaChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptipofirma('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('pSistema'.toLowerCase() === argumentName.toLowerCase()) {
            this.pSistema.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Sistema';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
