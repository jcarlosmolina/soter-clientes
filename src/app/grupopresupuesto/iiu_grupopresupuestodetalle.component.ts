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

export class GrupoPresupuestoIIUuGrupoPresupuestoDetalleComponent extends AbstractIIU {

    /** Display Set elements */
    public dseNombre: Field;
    public dseIBANCuentaBancaria: Field;
    public dseSwift: Field;
    public dseAplicaRecargoEquivalencia: FieldDefinedSelection;
    public dseBaseImponible: Field;
    public dsePorcentajeDescuento: Field;
    public dseDescuento: Field;
    public dseIVA: Field;
    public dseRecargoEquivalencia: Field;
    public dseImporte: Field;
    public dseMargen: Field;
    public dseMotivoDescuento: Field;
    public dseAnticipo: Field;
    public dseObservacions: Field;
    public dseObservacionesInternas: Field;
    public dseVerKit1Linea: FieldDefinedSelection;
    public dseFormaPagoDescripcion: Field;
    public dsePeriodicidadPagoNombre: Field;
    public dseGeneraOrden: FieldDefinedSelection;
    public dseGeneraContratoDrv: FieldDefinedSelection;
    public dseGeneraAlbaranDrv: FieldDefinedSelection;

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
        this.idXML = 'Clas_1699352150016730UIInst_1';
        this.className = ModelConstants.Grupopresupuesto.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_GrupoPresupuesto_iiu_IIU_GrupoPresupuestoDetalle',
            'Detalles');
        this.queryURL = '/api/GrupoPresupuestoApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseNombre = new Field(this.langMng);
        this.dseNombre.nameInRequest = 'nombre';
        this.dseNombre.alias = this.langMng.translateText(
            'cls_GrupoPresupuesto_ds_DSI_GrupoPresupuesto_item_Clas_1699352150016730CjtoVis_1ICtjoVis_1',
            'Nombre');
        this.dseNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016730CjtoVis_1ICtjoVis_1', ['Cliente']);
        this.dseNombre.enabled = false;
        this.dseNombre.mandatory = false;
        this.dseNombre.dataType = Field.dtString;
        this.dseNombre.maxLength = 100;
        this.dseNombre.assignCSS();
        this.fields.push(this.dseNombre);

        this.dseIBANCuentaBancaria = new Field(this.langMng);
        this.dseIBANCuentaBancaria.nameInRequest = 'ibancuentabancaria';
        this.dseIBANCuentaBancaria.alias = this.langMng.translateText(
            'cls_GrupoPresupuesto_ds_DSI_GrupoPresupuesto_item_Clas_1699352150016730CjtoVis_1ICtjoVis_2',
            'IBAN');
        this.dseIBANCuentaBancaria.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016730CjtoVis_1ICtjoVis_2', ['Cliente']);
        this.dseIBANCuentaBancaria.enabled = false;
        this.dseIBANCuentaBancaria.mandatory = false;
        this.dseIBANCuentaBancaria.dataType = Field.dtString;
        this.dseIBANCuentaBancaria.maxLength = 34;
        this.dseIBANCuentaBancaria.assignCSS();
        this.fields.push(this.dseIBANCuentaBancaria);

        this.dseSwift = new Field(this.langMng);
        this.dseSwift.nameInRequest = 'swift';
        this.dseSwift.alias = this.langMng.translateText(
            'cls_GrupoPresupuesto_ds_DSI_GrupoPresupuesto_item_Clas_1699352150016730CjtoVis_1ICtjoVis_3',
            'Swift');
        this.dseSwift.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016730CjtoVis_1ICtjoVis_3', ['Cliente']);
        this.dseSwift.enabled = false;
        this.dseSwift.mandatory = false;
        this.dseSwift.dataType = Field.dtString;
        this.dseSwift.maxLength = 50;
        this.dseSwift.assignCSS();
        this.fields.push(this.dseSwift);

        this.dseAplicaRecargoEquivalencia = new FieldDefinedSelection(this.langMng);
        this.dseAplicaRecargoEquivalencia.nameInRequest = 'aplicarecargoequivalencia';
        this.dseAplicaRecargoEquivalencia.alias = this.langMng.translateText(
            'cls_GrupoPresupuesto_ds_DSI_GrupoPresupuesto_item_Clas_1699352150016730CjtoVis_1ICtjoVis_4',
            'Aplica rec.equiv');
        this.dseAplicaRecargoEquivalencia.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016730CjtoVis_1ICtjoVis_4', ['Cliente']);
        this.dseAplicaRecargoEquivalencia.enabled = false;
        this.dseAplicaRecargoEquivalencia.mandatory = false;
        this.dseAplicaRecargoEquivalencia.dataType = Field.dtBool;
        this.dseAplicaRecargoEquivalencia.options = DefinedSelections.DS_SI_NO;
        this.dseAplicaRecargoEquivalencia.assignCSS();
        this.fields.push(this.dseAplicaRecargoEquivalencia);

        this.dseBaseImponible = new Field(this.langMng);
        this.dseBaseImponible.nameInRequest = 'baseimponible';
        this.dseBaseImponible.alias = this.langMng.translateText(
            'cls_GrupoPresupuesto_ds_DSI_GrupoPresupuesto_item_Clas_1699352150016730CjtoVis_1ICtjoVis_5',
            'Base imp');
        this.dseBaseImponible.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016730CjtoVis_1ICtjoVis_5', ['Cliente']);
        this.dseBaseImponible.enabled = false;
        this.dseBaseImponible.mandatory = false;
        this.dseBaseImponible.dataType = Field.dtReal;
        this.dseBaseImponible.assignCSS();
        this.fields.push(this.dseBaseImponible);

        this.dsePorcentajeDescuento = new Field(this.langMng);
        this.dsePorcentajeDescuento.nameInRequest = 'porcentajedescuento';
        this.dsePorcentajeDescuento.alias = this.langMng.translateText(
            'cls_GrupoPresupuesto_ds_DSI_GrupoPresupuesto_item_Clas_1699352150016730CjtoVis_1ICtjoVis_6',
            '% Dto Grupo');
        this.dsePorcentajeDescuento.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016730CjtoVis_1ICtjoVis_6', ['Cliente']);
        this.dsePorcentajeDescuento.enabled = false;
        this.dsePorcentajeDescuento.mandatory = false;
        this.dsePorcentajeDescuento.dataType = Field.dtReal;
        this.dsePorcentajeDescuento.assignCSS();
        this.fields.push(this.dsePorcentajeDescuento);

        this.dseDescuento = new Field(this.langMng);
        this.dseDescuento.nameInRequest = 'descuento';
        this.dseDescuento.alias = this.langMng.translateText(
            'cls_GrupoPresupuesto_ds_DSI_GrupoPresupuesto_item_Clas_1699352150016730CjtoVis_1ICtjoVis_7',
            'Descuento');
        this.dseDescuento.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016730CjtoVis_1ICtjoVis_7', ['Cliente']);
        this.dseDescuento.enabled = false;
        this.dseDescuento.mandatory = false;
        this.dseDescuento.dataType = Field.dtReal;
        this.dseDescuento.assignCSS();
        this.fields.push(this.dseDescuento);

        this.dseIVA = new Field(this.langMng);
        this.dseIVA.nameInRequest = 'iva';
        this.dseIVA.alias = this.langMng.translateText(
            'cls_GrupoPresupuesto_ds_DSI_GrupoPresupuesto_item_Clas_1699352150016730CjtoVis_1ICtjoVis_8',
            'IVA');
        this.dseIVA.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016730CjtoVis_1ICtjoVis_8', ['Cliente']);
        this.dseIVA.enabled = false;
        this.dseIVA.mandatory = false;
        this.dseIVA.dataType = Field.dtReal;
        this.dseIVA.assignCSS();
        this.fields.push(this.dseIVA);

        this.dseRecargoEquivalencia = new Field(this.langMng);
        this.dseRecargoEquivalencia.nameInRequest = 'recargoequivalencia';
        this.dseRecargoEquivalencia.alias = this.langMng.translateText(
            'cls_GrupoPresupuesto_ds_DSI_GrupoPresupuesto_item_Clas_1699352150016730CjtoVis_1ICtjoVis_9',
            'Rec.equiv');
        this.dseRecargoEquivalencia.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016730CjtoVis_1ICtjoVis_9', ['Cliente']);
        this.dseRecargoEquivalencia.enabled = false;
        this.dseRecargoEquivalencia.mandatory = false;
        this.dseRecargoEquivalencia.dataType = Field.dtReal;
        this.dseRecargoEquivalencia.assignCSS();
        this.fields.push(this.dseRecargoEquivalencia);

        this.dseImporte = new Field(this.langMng);
        this.dseImporte.nameInRequest = 'importe';
        this.dseImporte.alias = this.langMng.translateText(
            'cls_GrupoPresupuesto_ds_DSI_GrupoPresupuesto_item_Clas_1699352150016730CjtoVis_1ICtjoVis_10',
            'Importe');
        this.dseImporte.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016730CjtoVis_1ICtjoVis_10', ['Cliente']);
        this.dseImporte.enabled = false;
        this.dseImporte.mandatory = false;
        this.dseImporte.dataType = Field.dtReal;
        this.dseImporte.assignCSS();
        this.fields.push(this.dseImporte);

        this.dseMargen = new Field(this.langMng);
        this.dseMargen.nameInRequest = 'margen';
        this.dseMargen.alias = this.langMng.translateText(
            'cls_GrupoPresupuesto_ds_DSI_GrupoPresupuesto_item_Clas_1699352150016730CjtoVis_1ICtjoVis_11',
            'Margen');
        this.dseMargen.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016730CjtoVis_1ICtjoVis_11', ['Cliente']);
        this.dseMargen.enabled = false;
        this.dseMargen.mandatory = false;
        this.dseMargen.dataType = Field.dtReal;
        this.dseMargen.assignCSS();
        this.fields.push(this.dseMargen);

        this.dseMotivoDescuento = new Field(this.langMng);
        this.dseMotivoDescuento.nameInRequest = 'motivodescuento';
        this.dseMotivoDescuento.alias = this.langMng.translateText(
            'cls_GrupoPresupuesto_ds_DSI_GrupoPresupuesto_item_Clas_1699352150016730CjtoVis_1ICtjoVis_12',
            'Motivo dto');
        this.dseMotivoDescuento.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016730CjtoVis_1ICtjoVis_12', ['Cliente']);
        this.dseMotivoDescuento.enabled = false;
        this.dseMotivoDescuento.mandatory = false;
        this.dseMotivoDescuento.dataType = Field.dtString;
        this.dseMotivoDescuento.maxLength = 300;
        this.dseMotivoDescuento.assignCSS();
        this.fields.push(this.dseMotivoDescuento);

        this.dseAnticipo = new Field(this.langMng);
        this.dseAnticipo.nameInRequest = 'anticipo';
        this.dseAnticipo.alias = this.langMng.translateText(
            'cls_GrupoPresupuesto_ds_DSI_GrupoPresupuesto_item_Clas_1699352150016730CjtoVis_1ICtjoVis_13',
            'Anticipo');
        this.dseAnticipo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016730CjtoVis_1ICtjoVis_13', ['Cliente']);
        this.dseAnticipo.enabled = false;
        this.dseAnticipo.mandatory = false;
        this.dseAnticipo.dataType = Field.dtReal;
        this.dseAnticipo.assignCSS();
        this.fields.push(this.dseAnticipo);

        this.dseObservacions = new Field(this.langMng);
        this.dseObservacions.nameInRequest = 'observacions';
        this.dseObservacions.alias = this.langMng.translateText(
            'cls_GrupoPresupuesto_ds_DSI_GrupoPresupuesto_item_Clas_1699352150016730CjtoVis_1ICtjoVis_14',
            'Observaciones');
        this.dseObservacions.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016730CjtoVis_1ICtjoVis_14', ['Cliente']);
        this.dseObservacions.enabled = false;
        this.dseObservacions.mandatory = false;
        this.dseObservacions.dataType = Field.dtString;
        this.dseObservacions.maxLength = 300;
        this.dseObservacions.assignCSS();
        this.fields.push(this.dseObservacions);

        this.dseObservacionesInternas = new Field(this.langMng);
        this.dseObservacionesInternas.nameInRequest = 'observacionesinternas';
        this.dseObservacionesInternas.alias = this.langMng.translateText(
            'cls_GrupoPresupuesto_ds_DSI_GrupoPresupuesto_item_Clas_1699352150016730CjtoVis_1ICtjoVis_15',
            'Observaciones internas');
        this.dseObservacionesInternas.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016730CjtoVis_1ICtjoVis_15', ['Cliente']);
        this.dseObservacionesInternas.enabled = false;
        this.dseObservacionesInternas.mandatory = false;
        this.dseObservacionesInternas.dataType = Field.dtString;
        this.dseObservacionesInternas.maxLength = 300;
        this.dseObservacionesInternas.assignCSS();
        this.fields.push(this.dseObservacionesInternas);

        this.dseVerKit1Linea = new FieldDefinedSelection(this.langMng);
        this.dseVerKit1Linea.nameInRequest = 'verkit1linea';
        this.dseVerKit1Linea.alias = this.langMng.translateText(
            'cls_GrupoPresupuesto_ds_DSI_GrupoPresupuesto_item_Clas_1699352150016730CjtoVis_1ICtjoVis_16',
            'Kit en 1 línea');
        this.dseVerKit1Linea.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016730CjtoVis_1ICtjoVis_16', ['Cliente']);
        this.dseVerKit1Linea.enabled = false;
        this.dseVerKit1Linea.mandatory = false;
        this.dseVerKit1Linea.dataType = Field.dtBool;
        this.dseVerKit1Linea.options = DefinedSelections.DS_SI_NO;
        this.dseVerKit1Linea.assignCSS();
        this.fields.push(this.dseVerKit1Linea);

        this.dseFormaPagoDescripcion = new Field(this.langMng);
        this.dseFormaPagoDescripcion.nameInRequest = 'formapago.descripcion';
        this.dseFormaPagoDescripcion.alias = this.langMng.translateText(
            'cls_GrupoPresupuesto_ds_DSI_GrupoPresupuesto_item_Clas_1699352150016730CjtoVis_1ICtjoVis_17',
            'Forma pago');
        this.dseFormaPagoDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016730CjtoVis_1ICtjoVis_17', ['Cliente']);
        this.dseFormaPagoDescripcion.enabled = false;
        this.dseFormaPagoDescripcion.mandatory = false;
        this.dseFormaPagoDescripcion.dataType = Field.dtString;
        this.dseFormaPagoDescripcion.maxLength = 100;
        this.dseFormaPagoDescripcion.assignCSS();
        this.fields.push(this.dseFormaPagoDescripcion);

        this.dsePeriodicidadPagoNombre = new Field(this.langMng);
        this.dsePeriodicidadPagoNombre.nameInRequest = 'periodicidadpago.nombre';
        this.dsePeriodicidadPagoNombre.alias = this.langMng.translateText(
            'cls_GrupoPresupuesto_ds_DSI_GrupoPresupuesto_item_Clas_1699352150016730CjtoVis_1ICtjoVis_18',
            'Periodicidad');
        this.dsePeriodicidadPagoNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016730CjtoVis_1ICtjoVis_18', ['Cliente']);
        this.dsePeriodicidadPagoNombre.enabled = false;
        this.dsePeriodicidadPagoNombre.mandatory = false;
        this.dsePeriodicidadPagoNombre.dataType = Field.dtString;
        this.dsePeriodicidadPagoNombre.maxLength = 100;
        this.dsePeriodicidadPagoNombre.assignCSS();
        this.fields.push(this.dsePeriodicidadPagoNombre);

        this.dseGeneraOrden = new FieldDefinedSelection(this.langMng);
        this.dseGeneraOrden.nameInRequest = 'generaorden';
        this.dseGeneraOrden.alias = this.langMng.translateText(
            'cls_GrupoPresupuesto_ds_DSI_GrupoPresupuesto_item_Clas_1699352150016730CjtoVis_1ICtjoVis_19',
            'Genera OT');
        this.dseGeneraOrden.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016730CjtoVis_1ICtjoVis_19', ['Cliente']);
        this.dseGeneraOrden.enabled = false;
        this.dseGeneraOrden.mandatory = false;
        this.dseGeneraOrden.dataType = Field.dtBool;
        this.dseGeneraOrden.options = DefinedSelections.DS_SI_NO;
        this.dseGeneraOrden.assignCSS();
        this.fields.push(this.dseGeneraOrden);

        this.dseGeneraContratoDrv = new FieldDefinedSelection(this.langMng);
        this.dseGeneraContratoDrv.nameInRequest = 'generacontratodrv';
        this.dseGeneraContratoDrv.alias = this.langMng.translateText(
            'cls_GrupoPresupuesto_ds_DSI_GrupoPresupuesto_item_Clas_1699352150016730CjtoVis_1ICtjoVis_20',
            'Genera contrato');
        this.dseGeneraContratoDrv.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016730CjtoVis_1ICtjoVis_20', ['Cliente']);
        this.dseGeneraContratoDrv.enabled = false;
        this.dseGeneraContratoDrv.mandatory = false;
        this.dseGeneraContratoDrv.dataType = Field.dtBool;
        this.dseGeneraContratoDrv.options = DefinedSelections.DS_SI_NO;
        this.dseGeneraContratoDrv.assignCSS();
        this.fields.push(this.dseGeneraContratoDrv);

        this.dseGeneraAlbaranDrv = new FieldDefinedSelection(this.langMng);
        this.dseGeneraAlbaranDrv.nameInRequest = 'generaalbarandrv';
        this.dseGeneraAlbaranDrv.alias = this.langMng.translateText(
            'cls_GrupoPresupuesto_ds_DSI_GrupoPresupuesto_item_Clas_1699352150016730CjtoVis_1ICtjoVis_21',
            'Genera albarán');
        this.dseGeneraAlbaranDrv.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016730CjtoVis_1ICtjoVis_21', ['Cliente']);
        this.dseGeneraAlbaranDrv.enabled = false;
        this.dseGeneraAlbaranDrv.mandatory = false;
        this.dseGeneraAlbaranDrv.dataType = Field.dtBool;
        this.dseGeneraAlbaranDrv.options = DefinedSelections.DS_SI_NO;
        this.dseGeneraAlbaranDrv.assignCSS();
        this.fields.push(this.dseGeneraAlbaranDrv);

    }
}
