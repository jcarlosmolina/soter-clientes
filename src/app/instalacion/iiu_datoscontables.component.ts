import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field, FieldDefinedSelection } from '../common/baseIUElements';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

export class InstalacionIIUuDatosContablesComponent extends AbstractIIU {

    /** Display Set elements */
    public dseCuentaContable: Field;
    public dseAplicaRecargoEquivalencia: FieldDefinedSelection;
    public dseEntidadBancariaNombre: Field;
    public dseSucursalBancariaNombre: Field;
    public dseDCCuentaBancaria: Field;
    public dseCuentaBancaria: Field;
    public dseIBANCuentaBancaria: Field;
    public dseSwift: Field;
    public dseFormaPagoDescripcion: Field;
    public dsePeriodicidadPagoNombre: Field;

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
        this.idXML = 'Clas_1699352150016405UIInst_2';
        this.className = ModelConstants.Instalacion.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Instalacion_iiu_IIU_DatosContables',
            'Datos Contables');
        this.queryURL = '/api/InstalacionApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseCuentaContable = new Field(this.langMng);
        this.dseCuentaContable.nameInRequest = 'cuentacontable';
        this.dseCuentaContable.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DS_DatosContables_item_Clas_1699352150016405CjtoVis_5ICtjoVis_1',
            'Cuenta contable');
        this.dseCuentaContable.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_5ICtjoVis_1', ['Cliente']);
        this.dseCuentaContable.enabled = false;
        this.dseCuentaContable.mandatory = false;
        this.dseCuentaContable.dataType = Field.dtString;
        this.dseCuentaContable.maxLength = 50;
        this.dseCuentaContable.assignCSS();
        this.fields.push(this.dseCuentaContable);

        this.dseAplicaRecargoEquivalencia = new FieldDefinedSelection(this.langMng);
        this.dseAplicaRecargoEquivalencia.nameInRequest = 'aplicarecargoequivalencia';
        this.dseAplicaRecargoEquivalencia.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DS_DatosContables_item_Clas_1699352150016405CjtoVis_5ICtjoVis_2',
            'Aplica recargo de equivalencia');
        this.dseAplicaRecargoEquivalencia.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_5ICtjoVis_2', ['Cliente']);
        this.dseAplicaRecargoEquivalencia.enabled = false;
        this.dseAplicaRecargoEquivalencia.mandatory = false;
        this.dseAplicaRecargoEquivalencia.dataType = Field.dtBool;
        this.dseAplicaRecargoEquivalencia.options = DefinedSelections.DS_SI_NO;
        this.dseAplicaRecargoEquivalencia.assignCSS();
        this.fields.push(this.dseAplicaRecargoEquivalencia);

        this.dseEntidadBancariaNombre = new Field(this.langMng);
        this.dseEntidadBancariaNombre.nameInRequest = 'entidadbancaria.nombre';
        this.dseEntidadBancariaNombre.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DS_DatosContables_item_Clas_1699352150016405CjtoVis_5ICtjoVis_3',
            'Entidad');
        this.dseEntidadBancariaNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_5ICtjoVis_3', ['Cliente']);
        this.dseEntidadBancariaNombre.enabled = false;
        this.dseEntidadBancariaNombre.mandatory = false;
        this.dseEntidadBancariaNombre.dataType = Field.dtString;
        this.dseEntidadBancariaNombre.maxLength = 100;
        this.dseEntidadBancariaNombre.assignCSS();
        this.fields.push(this.dseEntidadBancariaNombre);

        this.dseSucursalBancariaNombre = new Field(this.langMng);
        this.dseSucursalBancariaNombre.nameInRequest = 'sucursalbancaria.nombre';
        this.dseSucursalBancariaNombre.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DS_DatosContables_item_Clas_1699352150016405CjtoVis_5ICtjoVis_4',
            'Sucursal');
        this.dseSucursalBancariaNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_5ICtjoVis_4', ['Cliente']);
        this.dseSucursalBancariaNombre.enabled = false;
        this.dseSucursalBancariaNombre.mandatory = false;
        this.dseSucursalBancariaNombre.dataType = Field.dtString;
        this.dseSucursalBancariaNombre.maxLength = 100;
        this.dseSucursalBancariaNombre.assignCSS();
        this.fields.push(this.dseSucursalBancariaNombre);

        this.dseDCCuentaBancaria = new Field(this.langMng);
        this.dseDCCuentaBancaria.nameInRequest = 'dccuentabancaria';
        this.dseDCCuentaBancaria.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DS_DatosContables_item_Clas_1699352150016405CjtoVis_5ICtjoVis_5',
            'DC');
        this.dseDCCuentaBancaria.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_5ICtjoVis_5', ['Cliente']);
        this.dseDCCuentaBancaria.enabled = false;
        this.dseDCCuentaBancaria.mandatory = false;
        this.dseDCCuentaBancaria.dataType = Field.dtString;
        this.dseDCCuentaBancaria.maxLength = 2;
        this.dseDCCuentaBancaria.assignCSS();
        this.fields.push(this.dseDCCuentaBancaria);

        this.dseCuentaBancaria = new Field(this.langMng);
        this.dseCuentaBancaria.nameInRequest = 'cuentabancaria';
        this.dseCuentaBancaria.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DS_DatosContables_item_Clas_1699352150016405CjtoVis_5ICtjoVis_6',
            'Cuenta');
        this.dseCuentaBancaria.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_5ICtjoVis_6', ['Cliente']);
        this.dseCuentaBancaria.enabled = false;
        this.dseCuentaBancaria.mandatory = false;
        this.dseCuentaBancaria.dataType = Field.dtString;
        this.dseCuentaBancaria.maxLength = 10;
        this.dseCuentaBancaria.assignCSS();
        this.fields.push(this.dseCuentaBancaria);

        this.dseIBANCuentaBancaria = new Field(this.langMng);
        this.dseIBANCuentaBancaria.nameInRequest = 'ibancuentabancaria';
        this.dseIBANCuentaBancaria.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DS_DatosContables_item_Clas_1699352150016405CjtoVis_5ICtjoVis_7',
            'IBAN');
        this.dseIBANCuentaBancaria.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_5ICtjoVis_7', ['Cliente']);
        this.dseIBANCuentaBancaria.enabled = false;
        this.dseIBANCuentaBancaria.mandatory = false;
        this.dseIBANCuentaBancaria.dataType = Field.dtString;
        this.dseIBANCuentaBancaria.maxLength = 34;
        this.dseIBANCuentaBancaria.assignCSS();
        this.fields.push(this.dseIBANCuentaBancaria);

        this.dseSwift = new Field(this.langMng);
        this.dseSwift.nameInRequest = 'swift';
        this.dseSwift.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DS_DatosContables_item_Clas_1699352150016405CjtoVis_5ICtjoVis_8',
            'Swift');
        this.dseSwift.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_5ICtjoVis_8', ['Cliente']);
        this.dseSwift.enabled = false;
        this.dseSwift.mandatory = false;
        this.dseSwift.dataType = Field.dtString;
        this.dseSwift.maxLength = 50;
        this.dseSwift.assignCSS();
        this.fields.push(this.dseSwift);

        this.dseFormaPagoDescripcion = new Field(this.langMng);
        this.dseFormaPagoDescripcion.nameInRequest = 'formapago.descripcion';
        this.dseFormaPagoDescripcion.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DS_DatosContables_item_Clas_1699352150016405CjtoVis_5ICtjoVis_9',
            'Forma Pago');
        this.dseFormaPagoDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_5ICtjoVis_9', ['Cliente']);
        this.dseFormaPagoDescripcion.enabled = false;
        this.dseFormaPagoDescripcion.mandatory = false;
        this.dseFormaPagoDescripcion.dataType = Field.dtString;
        this.dseFormaPagoDescripcion.maxLength = 100;
        this.dseFormaPagoDescripcion.assignCSS();
        this.fields.push(this.dseFormaPagoDescripcion);

        this.dsePeriodicidadPagoNombre = new Field(this.langMng);
        this.dsePeriodicidadPagoNombre.nameInRequest = 'periodicidadpago.nombre';
        this.dsePeriodicidadPagoNombre.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DS_DatosContables_item_Clas_1699352150016405CjtoVis_5ICtjoVis_10',
            'Periodicidad');
        this.dsePeriodicidadPagoNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_5ICtjoVis_10', ['Cliente']);
        this.dsePeriodicidadPagoNombre.enabled = false;
        this.dsePeriodicidadPagoNombre.mandatory = false;
        this.dsePeriodicidadPagoNombre.dataType = Field.dtString;
        this.dsePeriodicidadPagoNombre.maxLength = 100;
        this.dsePeriodicidadPagoNombre.assignCSS();
        this.fields.push(this.dsePeriodicidadPagoNombre);

    }
}
