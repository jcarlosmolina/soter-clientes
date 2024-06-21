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
    selector: 'imes-contacto-siu-edit-instance',
    templateUrl: './siu_edit_instance.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactoSIUuedituinstanceComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisContacto: FieldOVLenseSearch;
    public puNombre: Field;
    public puTelefono1: Field;
    public puTelefono2: Field;
    public puFax: Field;
    public puEmail: Field;
    public puRecibePresupuestos: FieldDefinedSelection;
    public puRecibePartes: FieldDefinedSelection;
    public puRecibeFacturas: FieldDefinedSelection;
    public puPuedeFirmar: FieldDefinedSelection;
    public puDNI: Field;
    public puMovil: Field;
    public puTipoFirma: FieldDefinedSelection;
    public puIdDispositivo: Field;

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
        this.idXML = 'Clas_1699352150016154Ser_3UIServ_1';
        this.className = ModelConstants.Contacto.name;
        this.iuName = ModelConstants.Contacto.siuuedituinstance;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.serviceName = 'edit_instance';
        this.title = this.langMng.translateText('cls_Contacto_svc_edit_instance',
            'Modificar');
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public initializeComponents(): void {

        this.puthisContacto = new FieldOVLenseSearch(this.langMng);
        this.puthisContacto.nameInRequest = 'p_thiscontacto';
        this.puthisContacto.alias = this.langMng.translateText(
            'cls_Contacto_svc_edit_instance_inArg_p_thisContacto',
            'Contacto');
        this.puthisContacto.visible = this.util.isNull(this.queryContainer) ||
            this.queryContainer.className !== this.className;
        this.puthisContacto.mandatory = true;
        this.puthisContacto.dataType = ModelConstants.Contacto.name;
        this.puthisContacto.maxLength = 300;
        this.puthisContacto.assignCSS();
        this.fields.push(this.puthisContacto);

        this.puNombre = new Field(this.langMng);
        this.puNombre.nameInRequest = 'p_nombre';
        this.puNombre.alias = this.langMng.translateText(
            'cls_Contacto_svc_edit_instance_inArg_p_Nombre',
            'Nombre');
        this.puNombre.mandatory = false;
        this.puNombre.dataType = Field.dtString;
        this.puNombre.maxLength = 300;
        this.puNombre.assignCSS();
        this.fields.push(this.puNombre);

        this.puTelefono1 = new Field(this.langMng);
        this.puTelefono1.nameInRequest = 'p_telefono1';
        this.puTelefono1.alias = this.langMng.translateText(
            'cls_Contacto_svc_edit_instance_inArg_p_Telefono1',
            'Teléfono 1');
        this.puTelefono1.mandatory = false;
        this.puTelefono1.dataType = Field.dtString;
        this.puTelefono1.maxLength = 20;
        this.puTelefono1.assignCSS();
        this.fields.push(this.puTelefono1);

        this.puTelefono2 = new Field(this.langMng);
        this.puTelefono2.nameInRequest = 'p_telefono2';
        this.puTelefono2.alias = this.langMng.translateText(
            'cls_Contacto_svc_edit_instance_inArg_p_Telefono2',
            'Teléfono 2');
        this.puTelefono2.mandatory = false;
        this.puTelefono2.dataType = Field.dtString;
        this.puTelefono2.maxLength = 20;
        this.puTelefono2.assignCSS();
        this.fields.push(this.puTelefono2);

        this.puFax = new Field(this.langMng);
        this.puFax.nameInRequest = 'p_fax';
        this.puFax.alias = this.langMng.translateText(
            'cls_Contacto_svc_edit_instance_inArg_p_Fax',
            'Fax');
        this.puFax.mandatory = false;
        this.puFax.dataType = Field.dtString;
        this.puFax.maxLength = 20;
        this.puFax.assignCSS();
        this.fields.push(this.puFax);

        this.puEmail = new Field(this.langMng);
        this.puEmail.nameInRequest = 'p_email';
        this.puEmail.alias = this.langMng.translateText(
            'cls_Contacto_svc_edit_instance_inArg_p_Email',
            'Email');
        this.puEmail.mandatory = false;
        this.puEmail.dataType = Field.dtString;
        this.puEmail.maxLength = 100;
        this.puEmail.assignCSS();
        this.fields.push(this.puEmail);

        this.puRecibePresupuestos = new FieldDefinedSelection(this.langMng);
        this.puRecibePresupuestos.nameInRequest = 'p_recibepresupuestos';
        this.puRecibePresupuestos.alias = this.langMng.translateText(
            'cls_Contacto_svc_edit_instance_inArg_p_RecibePresupuestos',
            'Recibe presupuestos');
        this.puRecibePresupuestos.mandatory = true;
        this.puRecibePresupuestos.dataType = Field.dtBool;
        this.puRecibePresupuestos.options = DefinedSelections.DS_SI_NO;
        this.puRecibePresupuestos.value = false;
        this.puRecibePresupuestos.assignCSS();
        this.fields.push(this.puRecibePresupuestos);

        this.puRecibePartes = new FieldDefinedSelection(this.langMng);
        this.puRecibePartes.nameInRequest = 'p_recibepartes';
        this.puRecibePartes.alias = this.langMng.translateText(
            'cls_Contacto_svc_edit_instance_inArg_p_RecibePartes',
            'Recibe partes');
        this.puRecibePartes.mandatory = true;
        this.puRecibePartes.dataType = Field.dtBool;
        this.puRecibePartes.options = DefinedSelections.DS_SI_NO;
        this.puRecibePartes.value = false;
        this.puRecibePartes.assignCSS();
        this.fields.push(this.puRecibePartes);

        this.puRecibeFacturas = new FieldDefinedSelection(this.langMng);
        this.puRecibeFacturas.nameInRequest = 'p_recibefacturas';
        this.puRecibeFacturas.alias = this.langMng.translateText(
            'cls_Contacto_svc_edit_instance_inArg_p_RecibeFacturas',
            'Recibe facturas');
        this.puRecibeFacturas.mandatory = true;
        this.puRecibeFacturas.dataType = Field.dtBool;
        this.puRecibeFacturas.options = DefinedSelections.DS_SI_NO;
        this.puRecibeFacturas.value = false;
        this.puRecibeFacturas.assignCSS();
        this.fields.push(this.puRecibeFacturas);

        this.puPuedeFirmar = new FieldDefinedSelection(this.langMng);
        this.puPuedeFirmar.nameInRequest = 'p_puedefirmar';
        this.puPuedeFirmar.alias = this.langMng.translateText(
            'cls_Contacto_svc_edit_instance_inArg_p_PuedeFirmar',
            'Puede firmar');
        this.puPuedeFirmar.mandatory = false;
        this.puPuedeFirmar.dataType = Field.dtBool;
        this.puPuedeFirmar.options = DefinedSelections.DS_SI_NO;
        this.puPuedeFirmar.assignCSS();
        this.fields.push(this.puPuedeFirmar);

        this.puDNI = new Field(this.langMng);
        this.puDNI.nameInRequest = 'p_dni';
        this.puDNI.alias = this.langMng.translateText(
            'cls_Contacto_svc_edit_instance_inArg_p_DNI',
            'DNI');
        this.puDNI.mandatory = false;
        this.puDNI.dataType = Field.dtString;
        this.puDNI.maxLength = 15;
        this.puDNI.assignCSS();
        this.fields.push(this.puDNI);

        this.puMovil = new Field(this.langMng);
        this.puMovil.nameInRequest = 'p_movil';
        this.puMovil.alias = this.langMng.translateText(
            'cls_Contacto_svc_edit_instance_inArg_p_Movil',
            'Móvil');
        this.puMovil.mandatory = false;
        this.puMovil.dataType = Field.dtString;
        this.puMovil.maxLength = 15;
        this.puMovil.assignCSS();
        this.fields.push(this.puMovil);

        this.puTipoFirma = new FieldDefinedSelection(this.langMng);
        this.puTipoFirma.nameInRequest = 'p_tipofirma';
        this.puTipoFirma.alias = this.langMng.translateText(
            'cls_Contacto_svc_edit_instance_inArg_p_TipoFirma',
            'Tipo firma');
        this.puTipoFirma.mandatory = false;
        this.puTipoFirma.dataType = Field.dtString;
        this.puTipoFirma.options = DefinedSelections.DS_TIPOFIRMA;
        this.puTipoFirma.maxLength = 1;
        this.puTipoFirma.assignCSS();
        this.fields.push(this.puTipoFirma);

        this.puIdDispositivo = new Field(this.langMng);
        this.puIdDispositivo.nameInRequest = 'p_iddispositivo';
        this.puIdDispositivo.alias = this.langMng.translateText(
            'cls_Contacto_svc_edit_instance_inArg_p_IdDispositivo',
            'Id. dispositivo');
        this.puIdDispositivo.mandatory = false;
        this.puIdDispositivo.dataType = Field.dtString;
        this.puIdDispositivo.maxLength = 100;
        this.puIdDispositivo.assignCSS();
        this.fields.push(this.puIdDispositivo);
    }

    /**
     * Initialize with default values
     */
    public initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // p_PuedeFirmar
            const defValpuPuedeFirmar = new Promise<void>((resolveDefValue) => {
                this.puPuedeFirmar.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuPuedeFirmar);

            Promise.all(promiseArr).then((results: any[]) => {
                this.util.hideWaitDialog();
                this.changeDetectorRef.markForCheck();
                resolve();
            });
        });
    }

    /**
     * Initialize from context the 'This' argument
     */
    public initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo.selectedOidsClassName === 'Contacto' &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisContacto.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhiscontacto('SetValue', true);
            this.puthisContacto.enabled = false;
            this.executeDependecyRulesputhiscontacto('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisContacto'.toLowerCase()) {
            this.puthisContacto.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhiscontacto('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisContacto argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhiscontacto(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhiscontacto();
        }
        if ('SetValue' === event && this.puthisContacto.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisContacto();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisContacto argument
     */
    private setSuppInfoputhiscontacto(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisContacto.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Contacto.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisContacto.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisContacto.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Contacto.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisContacto.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisContacto argument
     */
    private executeDependecyRules1puthisContacto(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisContacto,
                'nombre,telefono1,telefono2,fax,email,recibepresupuestos,recibepartes,recibefacturas,dni,iddispositivo,movil,puedefirmar' +
                ',tipofirma');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisContactoActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisContacto argument
     */
    private executeDependecyRules1puthisContactoActions(): void {
        const varputhiscontacto = this.getFirstInstanceFromCache(this.puthisContacto);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (!this.util.isNull(varputhiscontacto)) {
            // p_Nombre.SetValue( v.nombre )
            this.puNombre.setValue(varputhiscontacto.get('nombre'));
            // p_Telefono1.SetValue( v.telefono1 )
            this.puTelefono1.setValue(varputhiscontacto.get('telefono1'));
            // p_Telefono2.SetValue( v.telefono2 )
            this.puTelefono2.setValue(varputhiscontacto.get('telefono2'));
            // p_Fax.SetValue( v.fax )
            this.puFax.setValue(varputhiscontacto.get('fax'));
            // p_Email.SetValue( v.email )
            this.puEmail.setValue(varputhiscontacto.get('email'));
            // p_RecibePresupuestos.SetValue( v.recibepresupuestos )
            this.puRecibePresupuestos.setValue(this.util.getBool(varputhiscontacto.get('recibepresupuestos')));
            // p_RecibePartes.SetValue( v.recibepartes )
            this.puRecibePartes.setValue(this.util.getBool(varputhiscontacto.get('recibepartes')));
            // p_RecibeFacturas.SetValue( v.recibefacturas )
            this.puRecibeFacturas.setValue(this.util.getBool(varputhiscontacto.get('recibefacturas')));
            // p_DNI.SetValue( v.dni )
            this.puDNI.setValue(varputhiscontacto.get('dni'));
            // p_IdDispositivo.SetValue( v.iddispositivo )
            this.puIdDispositivo.setValue(varputhiscontacto.get('iddispositivo'));
            // p_Movil.SetValue( v.movil )
            this.puMovil.setValue(varputhiscontacto.get('movil'));
            // p_PuedeFirmar.SetValue( v.puedefirmar )
            this.puPuedeFirmar.setValue(this.util.getBool(varputhiscontacto.get('puedefirmar')));
            this.executeDependecyRulespupuedefirmar('SetValue', true);
            // p_TipoFirma.SetValue( v.tipofirma )
            this.puTipoFirma.setValue(varputhiscontacto.get('tipofirma'));
            this.executeDependecyRulesputipofirma('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisContacto lense search argument
     */
    public onputhiscontactoChange(): void {

        const searchText = this.puthisContacto.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisContacto.lastText) {
                this.puthisContacto.removeCSSClass('noResultsLenseSearch');
                this.puthisContacto.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Contacto.name, 'DSS_Contacto', searchText, [], null).then(
                        (response: any) => {
                            this.puthisContacto.removeCSSClass('noResultsLenseSearch');
                            this.puthisContacto.searchResults = response.results;
                            if (this.puthisContacto.searchResults &&
                                this.puthisContacto.searchResults.length === 0) {
                                this.puthisContacto.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisContacto.searchResults &&
                                this.puthisContacto.searchResults.length === 1) {
                                this.processputhiscontactoSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisContacto.removeCSSClass('noResultsLenseSearch');
                            this.puthisContacto.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisContacto.removeCSSClass('noResultsLenseSearch');
            this.puthisContacto.searchResults = [];
            this.cleanputhiscontacto();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisContacto lense search argument
     */
    public processputhiscontactoSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisContacto.searchResults.length > index) {
            selectedInstance = this.puthisContacto.searchResults[index];
        }
        // Clean the result list
        this.puthisContacto.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisContacto.allowMultiSelect) {
                this.puthisContacto.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisContacto.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhiscontacto('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisContacto lense search argument
     */
    public cleanputhiscontacto(): void {
        this.clearValidationMessages();
        this.puthisContacto.clean();
        this.executeDependecyRulesputhiscontacto('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for p_PuedeFirmar argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespupuedefirmar(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puPuedeFirmar();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2puPuedeFirmar();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for p_PuedeFirmar argument
     */
    private executeDependecyRules1puPuedeFirmar(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1puPuedeFirmarActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_PuedeFirmar argument
     */
    private executeDependecyRules1puPuedeFirmarActions(): void {
        // v <> NULL AND v = TRUE
        if (!this.util.isNull(this.util.getBool(this.puPuedeFirmar.value)) &&
            this.util.valueEquals(this.util.getBool(this.puPuedeFirmar.value), true)) {
            // p_DNI.SetMandatory( TRUE )
            this.puDNI.mandatory = true;
            // p_Email.SetMandatory( TRUE )
            this.puEmail.mandatory = true;
            // p_Movil.SetMandatory( TRUE )
            this.puMovil.mandatory = true;
            // p_TipoFirma.SetMandatory( TRUE )
            this.puTipoFirma.mandatory = true;
            // p_DNI.SetVisible( TRUE )
            this.puDNI.visible = true;
            // p_Email.SetVisible( TRUE )
            this.puEmail.visible = true;
            // p_Movil.SetVisible( TRUE )
            this.puMovil.visible = true;
            // p_TipoFirma.SetVisible( TRUE )
            this.puTipoFirma.visible = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for p_PuedeFirmar argument
     */
    private executeDependecyRules2puPuedeFirmar(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2puPuedeFirmarActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for p_PuedeFirmar argument
     */
    private executeDependecyRules2puPuedeFirmarActions(): void {
        // v <> NULL AND v = FALSE
        if (!this.util.isNull(this.util.getBool(this.puPuedeFirmar.value)) &&
            this.util.valueEquals(this.util.getBool(this.puPuedeFirmar.value), false)) {
            // p_DNI.SetMandatory( FALSE )
            this.puDNI.mandatory = false;
            // p_Email.SetMandatory( FALSE )
            this.puEmail.mandatory = false;
            // p_Movil.SetMandatory( FALSE )
            this.puMovil.mandatory = false;
            // p_TipoFirma.SetMandatory( FALSE )
            this.puTipoFirma.mandatory = false;
            // p_TipoFirma.SetValue( NULL )
            this.puTipoFirma.setValue(null);
            this.executeDependecyRulesputipofirma('SetValue', true);
            // p_DNI.SetVisible( FALSE )
            this.puDNI.visible = false;
            // p_Email.SetVisible( FALSE )
            this.puEmail.visible = false;
            // p_Movil.SetVisible( FALSE )
            this.puMovil.visible = false;
            // p_TipoFirma.SetVisible( FALSE )
            this.puTipoFirma.visible = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_PuedeFirmar argument
     */
    public onpupuedefirmarChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulespupuedefirmar('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for p_TipoFirma argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputipofirma(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puTipoFirma();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2puTipoFirma();
        }
        // Rule 3
        if ('SetValue' === event) {
            this.executeDependecyRules3puTipoFirma();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for p_TipoFirma argument
     */
    private executeDependecyRules1puTipoFirma(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1puTipoFirmaActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_TipoFirma argument
     */
    private executeDependecyRules1puTipoFirmaActions(): void {
        // v <> NULL AND v= "B"
        if (!this.util.isNull(this.puTipoFirma.value) && this.util.valueEquals(this.puTipoFirma.value, 'B')) {
            // p_IdDispositivo.SetMandatory( TRUE )
            this.puIdDispositivo.mandatory = true;
            // p_IdDispositivo.SetVisible( TRUE )
            this.puIdDispositivo.visible = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for p_TipoFirma argument
     */
    private executeDependecyRules2puTipoFirma(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2puTipoFirmaActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for p_TipoFirma argument
     */
    private executeDependecyRules2puTipoFirmaActions(): void {
        // v <> NULL AND v<> "B"
        if (!this.util.isNull(this.puTipoFirma.value) && !this.util.valueEquals(this.puTipoFirma.value, 'B')) {
            // p_IdDispositivo.SetMandatory( FALSE )
            this.puIdDispositivo.mandatory = false;
            // p_IdDispositivo.SetVisible( FALSE )
            this.puIdDispositivo.visible = false;
            // p_IdDispositivo.SetValue( NULL )
            this.puIdDispositivo.setValue(null);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 3 for p_TipoFirma argument
     */
    private executeDependecyRules3puTipoFirma(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules3puTipoFirmaActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 3 for p_TipoFirma argument
     */
    private executeDependecyRules3puTipoFirmaActions(): void {
        // v = NULL
        if (this.util.isNull(this.puTipoFirma.value)) {
            // p_IdDispositivo.SetMandatory( FALSE )
            this.puIdDispositivo.mandatory = false;
            // p_IdDispositivo.SetVisible( FALSE )
            this.puIdDispositivo.visible = false;
            // p_IdDispositivo.SetValue( NULL )
            this.puIdDispositivo.setValue(null);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_TipoFirma argument
     */
    public onputipofirmaChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesputipofirma('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisContacto'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisContacto.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Sistema';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
