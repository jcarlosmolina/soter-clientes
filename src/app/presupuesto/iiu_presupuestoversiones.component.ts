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

export class PresupuestoIIUuPresupuestoVersionesComponent extends AbstractIIU {

    /** Display Set elements */
    public dseCodigo: Field;
    public dseClienteNombreRazonSocial: Field;
    public dseFecha: Field;
    public dseContratoUnico: FieldDefinedSelection;
    public dseGeneraOrden: FieldDefinedSelection;
    public dseImprimirPorGrups: FieldDefinedSelection;
    public dseAceptado: FieldDefinedSelection;
    public dseFechaAceptacion: Field;
    public dseFechaPrevista: Field;
    public dseFechaValidez: Field;
    public dseRechazado: FieldDefinedSelection;
    public dseFechaRechazo: Field;
    public dseMotivoRechazo: Field;
    public dseAnulado: FieldDefinedSelection;
    public dseFechaAnulacion: Field;
    public dseMotivoAnulacion: Field;
    public dseBaseImponible: Field;
    public dseIVATotal: Field;
    public dseRecargoEquivalencia: Field;
    public dsePorcentajeDescuento: Field;
    public dseDescuento: Field;
    public dseImporte: Field;
    public dseMotivoDescuento: Field;
    public dseAlmacenNombre: Field;
    public dsePorcentajeRetencion: Field;
    public dseTiposSistema: Field;
    public dseValidado: FieldDefinedSelection;
    public dseUsuarioCreacionNombreCompleto: Field;

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
        this.idXML = 'Clas_1699352150016913UIInst_2';
        this.className = ModelConstants.Presupuesto.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Presupuesto_iiu_IIU_PresupuestoVersiones',
            'Presupuesto');
        this.queryURL = '/api/PresupuestoApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseCodigo = new Field(this.langMng);
        this.dseCodigo.nameInRequest = 'codigo';
        this.dseCodigo.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_1',
            'Código');
        this.dseCodigo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_1', ['Cliente']);
        this.dseCodigo.enabled = false;
        this.dseCodigo.mandatory = false;
        this.dseCodigo.dataType = Field.dtString;
        this.dseCodigo.maxLength = 10;
        this.dseCodigo.assignCSS();
        this.fields.push(this.dseCodigo);

        this.dseClienteNombreRazonSocial = new Field(this.langMng);
        this.dseClienteNombreRazonSocial.nameInRequest = 'cliente.nombrerazonsocial';
        this.dseClienteNombreRazonSocial.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_2',
            'Cliente');
        this.dseClienteNombreRazonSocial.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_2', ['Cliente']);
        this.dseClienteNombreRazonSocial.enabled = false;
        this.dseClienteNombreRazonSocial.mandatory = false;
        this.dseClienteNombreRazonSocial.dataType = Field.dtString;
        this.dseClienteNombreRazonSocial.maxLength = 300;
        this.dseClienteNombreRazonSocial.assignCSS();
        this.fields.push(this.dseClienteNombreRazonSocial);

        this.dseFecha = new Field(this.langMng);
        this.dseFecha.nameInRequest = 'fecha';
        this.dseFecha.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_3',
            'Fecha');
        this.dseFecha.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_3', ['Cliente']);
        this.dseFecha.enabled = false;
        this.dseFecha.mandatory = false;
        this.dseFecha.dataType = Field.dtDate;
        this.dseFecha.assignCSS();
        this.fields.push(this.dseFecha);

        this.dseContratoUnico = new FieldDefinedSelection(this.langMng);
        this.dseContratoUnico.nameInRequest = 'contratounico';
        this.dseContratoUnico.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_4',
            'Contrato único');
        this.dseContratoUnico.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_4', ['Cliente']);
        this.dseContratoUnico.enabled = false;
        this.dseContratoUnico.mandatory = false;
        this.dseContratoUnico.dataType = Field.dtBool;
        this.dseContratoUnico.options = DefinedSelections.DS_SI_NO;
        this.dseContratoUnico.assignCSS();
        this.fields.push(this.dseContratoUnico);

        this.dseGeneraOrden = new FieldDefinedSelection(this.langMng);
        this.dseGeneraOrden.nameInRequest = 'generaorden';
        this.dseGeneraOrden.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_5',
            'Genera OT');
        this.dseGeneraOrden.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_5', ['Cliente']);
        this.dseGeneraOrden.enabled = false;
        this.dseGeneraOrden.mandatory = false;
        this.dseGeneraOrden.dataType = Field.dtBool;
        this.dseGeneraOrden.options = DefinedSelections.DS_SI_NO;
        this.dseGeneraOrden.assignCSS();
        this.fields.push(this.dseGeneraOrden);

        this.dseImprimirPorGrups = new FieldDefinedSelection(this.langMng);
        this.dseImprimirPorGrups.nameInRequest = 'imprimirporgrups';
        this.dseImprimirPorGrups.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_6',
            'Imprimir x grupos');
        this.dseImprimirPorGrups.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_6', ['Cliente']);
        this.dseImprimirPorGrups.enabled = false;
        this.dseImprimirPorGrups.mandatory = false;
        this.dseImprimirPorGrups.dataType = Field.dtBool;
        this.dseImprimirPorGrups.options = DefinedSelections.DS_SI_NO;
        this.dseImprimirPorGrups.assignCSS();
        this.fields.push(this.dseImprimirPorGrups);

        this.dseAceptado = new FieldDefinedSelection(this.langMng);
        this.dseAceptado.nameInRequest = 'aceptado';
        this.dseAceptado.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_7',
            'Aceptado');
        this.dseAceptado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_7', ['Cliente']);
        this.dseAceptado.enabled = false;
        this.dseAceptado.mandatory = false;
        this.dseAceptado.dataType = Field.dtBool;
        this.dseAceptado.options = DefinedSelections.DS_SI_NO;
        this.dseAceptado.assignCSS();
        this.fields.push(this.dseAceptado);

        this.dseFechaAceptacion = new Field(this.langMng);
        this.dseFechaAceptacion.nameInRequest = 'fechaaceptacion';
        this.dseFechaAceptacion.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_8',
            'Fecha aceptación');
        this.dseFechaAceptacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_8', ['Cliente']);
        this.dseFechaAceptacion.enabled = false;
        this.dseFechaAceptacion.mandatory = false;
        this.dseFechaAceptacion.dataType = Field.dtDate;
        this.dseFechaAceptacion.assignCSS();
        this.fields.push(this.dseFechaAceptacion);

        this.dseFechaPrevista = new Field(this.langMng);
        this.dseFechaPrevista.nameInRequest = 'fechaprevista';
        this.dseFechaPrevista.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_9',
            'Fecha prevista');
        this.dseFechaPrevista.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_9', ['Cliente']);
        this.dseFechaPrevista.enabled = false;
        this.dseFechaPrevista.mandatory = false;
        this.dseFechaPrevista.dataType = Field.dtDate;
        this.dseFechaPrevista.assignCSS();
        this.fields.push(this.dseFechaPrevista);

        this.dseFechaValidez = new Field(this.langMng);
        this.dseFechaValidez.nameInRequest = 'fechavalidez';
        this.dseFechaValidez.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_10',
            'Fecha validez');
        this.dseFechaValidez.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_10', ['Cliente']);
        this.dseFechaValidez.enabled = false;
        this.dseFechaValidez.mandatory = false;
        this.dseFechaValidez.dataType = Field.dtDate;
        this.dseFechaValidez.assignCSS();
        this.fields.push(this.dseFechaValidez);

        this.dseRechazado = new FieldDefinedSelection(this.langMng);
        this.dseRechazado.nameInRequest = 'rechazado';
        this.dseRechazado.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_11',
            'Rechazado');
        this.dseRechazado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_11', ['Cliente']);
        this.dseRechazado.enabled = false;
        this.dseRechazado.mandatory = false;
        this.dseRechazado.dataType = Field.dtBool;
        this.dseRechazado.options = DefinedSelections.DS_SI_NO;
        this.dseRechazado.assignCSS();
        this.fields.push(this.dseRechazado);

        this.dseFechaRechazo = new Field(this.langMng);
        this.dseFechaRechazo.nameInRequest = 'fecharechazo';
        this.dseFechaRechazo.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_12',
            'Fecha rechazo');
        this.dseFechaRechazo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_12', ['Cliente']);
        this.dseFechaRechazo.enabled = false;
        this.dseFechaRechazo.mandatory = false;
        this.dseFechaRechazo.dataType = Field.dtDate;
        this.dseFechaRechazo.assignCSS();
        this.fields.push(this.dseFechaRechazo);

        this.dseMotivoRechazo = new Field(this.langMng);
        this.dseMotivoRechazo.nameInRequest = 'motivorechazo';
        this.dseMotivoRechazo.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_13',
            'Motivo rechazo');
        this.dseMotivoRechazo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_13', ['Cliente']);
        this.dseMotivoRechazo.enabled = false;
        this.dseMotivoRechazo.mandatory = false;
        this.dseMotivoRechazo.dataType = Field.dtString;
        this.dseMotivoRechazo.maxLength = 300;
        this.dseMotivoRechazo.assignCSS();
        this.fields.push(this.dseMotivoRechazo);

        this.dseAnulado = new FieldDefinedSelection(this.langMng);
        this.dseAnulado.nameInRequest = 'anulado';
        this.dseAnulado.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_14',
            'Anulado');
        this.dseAnulado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_14', ['Cliente']);
        this.dseAnulado.enabled = false;
        this.dseAnulado.mandatory = false;
        this.dseAnulado.dataType = Field.dtBool;
        this.dseAnulado.options = DefinedSelections.DS_SI_NO;
        this.dseAnulado.assignCSS();
        this.fields.push(this.dseAnulado);

        this.dseFechaAnulacion = new Field(this.langMng);
        this.dseFechaAnulacion.nameInRequest = 'fechaanulacion';
        this.dseFechaAnulacion.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_15',
            'Fecha anulación');
        this.dseFechaAnulacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_15', ['Cliente']);
        this.dseFechaAnulacion.enabled = false;
        this.dseFechaAnulacion.mandatory = false;
        this.dseFechaAnulacion.dataType = Field.dtDate;
        this.dseFechaAnulacion.assignCSS();
        this.fields.push(this.dseFechaAnulacion);

        this.dseMotivoAnulacion = new Field(this.langMng);
        this.dseMotivoAnulacion.nameInRequest = 'motivoanulacion';
        this.dseMotivoAnulacion.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_16',
            'Motivo anulación');
        this.dseMotivoAnulacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_16', ['Cliente']);
        this.dseMotivoAnulacion.enabled = false;
        this.dseMotivoAnulacion.mandatory = false;
        this.dseMotivoAnulacion.dataType = Field.dtString;
        this.dseMotivoAnulacion.maxLength = 300;
        this.dseMotivoAnulacion.assignCSS();
        this.fields.push(this.dseMotivoAnulacion);

        this.dseBaseImponible = new Field(this.langMng);
        this.dseBaseImponible.nameInRequest = 'baseimponible';
        this.dseBaseImponible.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_17',
            'Base imponible');
        this.dseBaseImponible.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_17', ['Cliente']);
        this.dseBaseImponible.enabled = false;
        this.dseBaseImponible.mandatory = false;
        this.dseBaseImponible.dataType = Field.dtReal;
        this.dseBaseImponible.assignCSS();
        this.fields.push(this.dseBaseImponible);

        this.dseIVATotal = new Field(this.langMng);
        this.dseIVATotal.nameInRequest = 'ivatotal';
        this.dseIVATotal.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_18',
            'IVA');
        this.dseIVATotal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_18', ['Cliente']);
        this.dseIVATotal.enabled = false;
        this.dseIVATotal.mandatory = false;
        this.dseIVATotal.dataType = Field.dtReal;
        this.dseIVATotal.assignCSS();
        this.fields.push(this.dseIVATotal);

        this.dseRecargoEquivalencia = new Field(this.langMng);
        this.dseRecargoEquivalencia.nameInRequest = 'recargoequivalencia';
        this.dseRecargoEquivalencia.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_19',
            'Recargo de equivalencia');
        this.dseRecargoEquivalencia.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_19', ['Cliente']);
        this.dseRecargoEquivalencia.enabled = false;
        this.dseRecargoEquivalencia.mandatory = false;
        this.dseRecargoEquivalencia.dataType = Field.dtReal;
        this.dseRecargoEquivalencia.assignCSS();
        this.fields.push(this.dseRecargoEquivalencia);

        this.dsePorcentajeDescuento = new Field(this.langMng);
        this.dsePorcentajeDescuento.nameInRequest = 'porcentajedescuento';
        this.dsePorcentajeDescuento.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_20',
            '% descuento');
        this.dsePorcentajeDescuento.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_20', ['Cliente']);
        this.dsePorcentajeDescuento.enabled = false;
        this.dsePorcentajeDescuento.mandatory = false;
        this.dsePorcentajeDescuento.dataType = Field.dtReal;
        this.dsePorcentajeDescuento.assignCSS();
        this.fields.push(this.dsePorcentajeDescuento);

        this.dseDescuento = new Field(this.langMng);
        this.dseDescuento.nameInRequest = 'descuento';
        this.dseDescuento.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_21',
            'Descuento');
        this.dseDescuento.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_21', ['Cliente']);
        this.dseDescuento.enabled = false;
        this.dseDescuento.mandatory = false;
        this.dseDescuento.dataType = Field.dtReal;
        this.dseDescuento.assignCSS();
        this.fields.push(this.dseDescuento);

        this.dseImporte = new Field(this.langMng);
        this.dseImporte.nameInRequest = 'importe';
        this.dseImporte.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_22',
            'Importe');
        this.dseImporte.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_22', ['Cliente']);
        this.dseImporte.enabled = false;
        this.dseImporte.mandatory = false;
        this.dseImporte.dataType = Field.dtReal;
        this.dseImporte.assignCSS();
        this.fields.push(this.dseImporte);

        this.dseMotivoDescuento = new Field(this.langMng);
        this.dseMotivoDescuento.nameInRequest = 'motivodescuento';
        this.dseMotivoDescuento.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_23',
            'Motivo descuento');
        this.dseMotivoDescuento.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_23', ['Cliente']);
        this.dseMotivoDescuento.enabled = false;
        this.dseMotivoDescuento.mandatory = false;
        this.dseMotivoDescuento.dataType = Field.dtString;
        this.dseMotivoDescuento.maxLength = 300;
        this.dseMotivoDescuento.assignCSS();
        this.fields.push(this.dseMotivoDescuento);

        this.dseAlmacenNombre = new Field(this.langMng);
        this.dseAlmacenNombre.nameInRequest = 'almacen.nombre';
        this.dseAlmacenNombre.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_24',
            'Almacén x defecto');
        this.dseAlmacenNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_24', []);
        this.dseAlmacenNombre.enabled = false;
        this.dseAlmacenNombre.mandatory = false;
        this.dseAlmacenNombre.dataType = Field.dtString;
        this.dseAlmacenNombre.maxLength = 100;
        this.dseAlmacenNombre.assignCSS();
        this.fields.push(this.dseAlmacenNombre);

        this.dsePorcentajeRetencion = new Field(this.langMng);
        this.dsePorcentajeRetencion.nameInRequest = 'porcentajeretencion';
        this.dsePorcentajeRetencion.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_25',
            '% retención');
        this.dsePorcentajeRetencion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_25', ['Cliente']);
        this.dsePorcentajeRetencion.enabled = false;
        this.dsePorcentajeRetencion.mandatory = false;
        this.dsePorcentajeRetencion.dataType = Field.dtReal;
        this.dsePorcentajeRetencion.assignCSS();
        this.fields.push(this.dsePorcentajeRetencion);

        this.dseTiposSistema = new Field(this.langMng);
        this.dseTiposSistema.nameInRequest = 'tipossistema';
        this.dseTiposSistema.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_26',
            'Tipos sistema');
        this.dseTiposSistema.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_26', ['Cliente']);
        this.dseTiposSistema.enabled = false;
        this.dseTiposSistema.mandatory = false;
        this.dseTiposSistema.dataType = Field.dtString;
        this.dseTiposSistema.maxLength = 300;
        this.dseTiposSistema.assignCSS();
        this.fields.push(this.dseTiposSistema);

        this.dseValidado = new FieldDefinedSelection(this.langMng);
        this.dseValidado.nameInRequest = 'validado';
        this.dseValidado.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_27',
            'Validado');
        this.dseValidado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_27', ['Cliente']);
        this.dseValidado.enabled = false;
        this.dseValidado.mandatory = false;
        this.dseValidado.dataType = Field.dtBool;
        this.dseValidado.options = DefinedSelections.DS_SI_NO;
        this.dseValidado.assignCSS();
        this.fields.push(this.dseValidado);

        this.dseUsuarioCreacionNombreCompleto = new Field(this.langMng);
        this.dseUsuarioCreacionNombreCompleto.nameInRequest = 'usuariocreacion.nombrecompleto';
        this.dseUsuarioCreacionNombreCompleto.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_Presupuesto_item_Clas_1699352150016913CjtoVis_3ICtjoVis_28',
            'Creado por');
        this.dseUsuarioCreacionNombreCompleto.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_3ICtjoVis_28', []);
        this.dseUsuarioCreacionNombreCompleto.enabled = false;
        this.dseUsuarioCreacionNombreCompleto.mandatory = false;
        this.dseUsuarioCreacionNombreCompleto.dataType = Field.dtString;
        this.dseUsuarioCreacionNombreCompleto.maxLength = 200;
        this.dseUsuarioCreacionNombreCompleto.assignCSS();
        this.fields.push(this.dseUsuarioCreacionNombreCompleto);

    }
}
