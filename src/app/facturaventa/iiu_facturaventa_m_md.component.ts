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

export class FacturaVentaIIUuFacturaVentauMuMDComponent extends AbstractIIU {

    /** Display Set elements */
    public dseSerieFacturaNombreSerieFactura: Field;
    public dseNumFactura: Field;
    public dseFechaCreacion: Field;
    public dseClienteNombreComercial: Field;
    public dseClienteNombreRazonSocial: Field;
    public dseTiposSistema: Field;
    public dseNumFacturaCompleto: Field;
    public dseFechaEmision: Field;
    public dseEstado: FieldDefinedSelection;
    public dseEsRectificativa: FieldDefinedSelection;
    public dseFacturaRectificada: Field;
    public dseConceptoUnico: FieldDefinedSelection;
    public dseConceptoAMostrar: Field;
    public dseBaseImponible: Field;
    public dseIVA: Field;
    public dseRecargoEquivalencia: Field;
    public dseImporteTotal: Field;
    public dseFormaPagoDescripcion: Field;
    public dseContabilizada: FieldDefinedSelection;
    public dseCobrada: FieldDefinedSelection;
    public dseImporteCobradoDrv: Field;
    public dsePorcenRetencion: Field;
    public dseImporteRetencion: Field;
    public dseMetalicoDrv: Field;
    public dseSubtipoFactA3: FieldDefinedSelection;
    public dseImpresoA3: FieldDefinedSelection;
    public dseAfectaModelo415: FieldDefinedSelection;

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
        this.idXML = 'Clas_1699352150016050UIInst_1';
        this.className = ModelConstants.Facturaventa.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_FacturaVenta_iiu_IIU_FacturaVenta_M_MD',
            'Factura');
        this.queryURL = '/api/FacturaVentaApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseSerieFacturaNombreSerieFactura = new Field(this.langMng);
        this.dseSerieFacturaNombreSerieFactura.nameInRequest = 'seriefactura.nombreseriefactura';
        this.dseSerieFacturaNombreSerieFactura.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_1',
            'Serie');
        this.dseSerieFacturaNombreSerieFactura.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_1', ['Cliente']);
        this.dseSerieFacturaNombreSerieFactura.enabled = false;
        this.dseSerieFacturaNombreSerieFactura.mandatory = false;
        this.dseSerieFacturaNombreSerieFactura.dataType = Field.dtString;
        this.dseSerieFacturaNombreSerieFactura.maxLength = 100;
        this.dseSerieFacturaNombreSerieFactura.assignCSS();
        this.fields.push(this.dseSerieFacturaNombreSerieFactura);

        this.dseNumFactura = new Field(this.langMng);
        this.dseNumFactura.nameInRequest = 'numfactura';
        this.dseNumFactura.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_2',
            'Nº Factura');
        this.dseNumFactura.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_2', ['Cliente']);
        this.dseNumFactura.enabled = false;
        this.dseNumFactura.mandatory = false;
        this.dseNumFactura.dataType = Field.dtInt;
        this.dseNumFactura.assignCSS();
        this.fields.push(this.dseNumFactura);

        this.dseFechaCreacion = new Field(this.langMng);
        this.dseFechaCreacion.nameInRequest = 'fechacreacion';
        this.dseFechaCreacion.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_3',
            'Fecha Creación');
        this.dseFechaCreacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_3', ['Cliente']);
        this.dseFechaCreacion.enabled = false;
        this.dseFechaCreacion.mandatory = false;
        this.dseFechaCreacion.dataType = Field.dtDate;
        this.dseFechaCreacion.assignCSS();
        this.fields.push(this.dseFechaCreacion);

        this.dseClienteNombreComercial = new Field(this.langMng);
        this.dseClienteNombreComercial.nameInRequest = 'cliente.nombrecomercial';
        this.dseClienteNombreComercial.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_4',
            'Nombre comercial');
        this.dseClienteNombreComercial.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_4', ['Cliente']);
        this.dseClienteNombreComercial.enabled = false;
        this.dseClienteNombreComercial.mandatory = false;
        this.dseClienteNombreComercial.dataType = Field.dtString;
        this.dseClienteNombreComercial.maxLength = 300;
        this.dseClienteNombreComercial.fieldSize = 20;
        this.dseClienteNombreComercial.assignCSS();
        this.fields.push(this.dseClienteNombreComercial);

        this.dseClienteNombreRazonSocial = new Field(this.langMng);
        this.dseClienteNombreRazonSocial.nameInRequest = 'cliente.nombrerazonsocial';
        this.dseClienteNombreRazonSocial.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_5',
            'Nombre/razón social');
        this.dseClienteNombreRazonSocial.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_5', ['Cliente']);
        this.dseClienteNombreRazonSocial.enabled = false;
        this.dseClienteNombreRazonSocial.mandatory = false;
        this.dseClienteNombreRazonSocial.dataType = Field.dtString;
        this.dseClienteNombreRazonSocial.maxLength = 300;
        this.dseClienteNombreRazonSocial.fieldSize = 20;
        this.dseClienteNombreRazonSocial.assignCSS();
        this.fields.push(this.dseClienteNombreRazonSocial);

        this.dseTiposSistema = new Field(this.langMng);
        this.dseTiposSistema.nameInRequest = 'tipossistema';
        this.dseTiposSistema.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_6',
            'Tipos de sistema');
        this.dseTiposSistema.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_6', ['Cliente']);
        this.dseTiposSistema.enabled = false;
        this.dseTiposSistema.mandatory = false;
        this.dseTiposSistema.dataType = Field.dtString;
        this.dseTiposSistema.maxLength = 300;
        this.dseTiposSistema.fieldSize = 50;
        this.dseTiposSistema.assignCSS();
        this.fields.push(this.dseTiposSistema);

        this.dseNumFacturaCompleto = new Field(this.langMng);
        this.dseNumFacturaCompleto.nameInRequest = 'numfacturacompleto';
        this.dseNumFacturaCompleto.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_7',
            'Nº Factura');
        this.dseNumFacturaCompleto.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_7', ['Cliente']);
        this.dseNumFacturaCompleto.enabled = false;
        this.dseNumFacturaCompleto.mandatory = false;
        this.dseNumFacturaCompleto.dataType = Field.dtString;
        this.dseNumFacturaCompleto.maxLength = 20;
        this.dseNumFacturaCompleto.assignCSS();
        this.fields.push(this.dseNumFacturaCompleto);

        this.dseFechaEmision = new Field(this.langMng);
        this.dseFechaEmision.nameInRequest = 'fechaemision';
        this.dseFechaEmision.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_8',
            'Fecha emisión');
        this.dseFechaEmision.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_8', ['Cliente']);
        this.dseFechaEmision.enabled = false;
        this.dseFechaEmision.mandatory = false;
        this.dseFechaEmision.dataType = Field.dtDate;
        this.dseFechaEmision.assignCSS();
        this.fields.push(this.dseFechaEmision);

        this.dseEstado = new FieldDefinedSelection(this.langMng);
        this.dseEstado.nameInRequest = 'estado';
        this.dseEstado.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_9',
            'Estado');
        this.dseEstado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_9', ['Cliente']);
        this.dseEstado.enabled = false;
        this.dseEstado.mandatory = false;
        this.dseEstado.dataType = Field.dtString;
        this.dseEstado.maxLength = 1;
        this.dseEstado.options = DefinedSelections.DS_ESTADOFACTURAVENTA;
        this.dseEstado.assignCSS();
        this.fields.push(this.dseEstado);

        this.dseEsRectificativa = new FieldDefinedSelection(this.langMng);
        this.dseEsRectificativa.nameInRequest = 'esrectificativa';
        this.dseEsRectificativa.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_10',
            'Es rectificativa');
        this.dseEsRectificativa.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_10', ['Cliente']);
        this.dseEsRectificativa.enabled = false;
        this.dseEsRectificativa.mandatory = false;
        this.dseEsRectificativa.dataType = Field.dtBool;
        this.dseEsRectificativa.options = DefinedSelections.DS_SI_NO;
        this.dseEsRectificativa.assignCSS();
        this.fields.push(this.dseEsRectificativa);

        this.dseFacturaRectificada = new Field(this.langMng);
        this.dseFacturaRectificada.nameInRequest = 'facturarectificada';
        this.dseFacturaRectificada.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_11',
            'Factura que rectifica');
        this.dseFacturaRectificada.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_11', ['Cliente']);
        this.dseFacturaRectificada.enabled = false;
        this.dseFacturaRectificada.mandatory = false;
        this.dseFacturaRectificada.dataType = Field.dtString;
        this.dseFacturaRectificada.maxLength = 20;
        this.dseFacturaRectificada.assignCSS();
        this.fields.push(this.dseFacturaRectificada);

        this.dseConceptoUnico = new FieldDefinedSelection(this.langMng);
        this.dseConceptoUnico.nameInRequest = 'conceptounico';
        this.dseConceptoUnico.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_12',
            'Concepto único');
        this.dseConceptoUnico.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_12', ['Cliente']);
        this.dseConceptoUnico.enabled = false;
        this.dseConceptoUnico.mandatory = false;
        this.dseConceptoUnico.dataType = Field.dtBool;
        this.dseConceptoUnico.options = DefinedSelections.DS_SI_NO;
        this.dseConceptoUnico.assignCSS();
        this.fields.push(this.dseConceptoUnico);

        this.dseConceptoAMostrar = new Field(this.langMng);
        this.dseConceptoAMostrar.nameInRequest = 'conceptoamostrar';
        this.dseConceptoAMostrar.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_13',
            'Concepto a mostrar');
        this.dseConceptoAMostrar.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_13', ['Cliente']);
        this.dseConceptoAMostrar.enabled = false;
        this.dseConceptoAMostrar.mandatory = false;
        this.dseConceptoAMostrar.dataType = Field.dtString;
        this.dseConceptoAMostrar.maxLength = 300;
        this.dseConceptoAMostrar.fieldSize = 50;
        this.dseConceptoAMostrar.assignCSS();
        this.fields.push(this.dseConceptoAMostrar);

        this.dseBaseImponible = new Field(this.langMng);
        this.dseBaseImponible.nameInRequest = 'baseimponible';
        this.dseBaseImponible.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_14',
            'Base imponible');
        this.dseBaseImponible.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_14', ['Cliente']);
        this.dseBaseImponible.enabled = false;
        this.dseBaseImponible.mandatory = false;
        this.dseBaseImponible.dataType = Field.dtReal;
        this.dseBaseImponible.assignCSS();
        this.fields.push(this.dseBaseImponible);

        this.dseIVA = new Field(this.langMng);
        this.dseIVA.nameInRequest = 'iva';
        this.dseIVA.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_15',
            'IVA');
        this.dseIVA.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_15', ['Cliente']);
        this.dseIVA.enabled = false;
        this.dseIVA.mandatory = false;
        this.dseIVA.dataType = Field.dtReal;
        this.dseIVA.assignCSS();
        this.fields.push(this.dseIVA);

        this.dseRecargoEquivalencia = new Field(this.langMng);
        this.dseRecargoEquivalencia.nameInRequest = 'recargoequivalencia';
        this.dseRecargoEquivalencia.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_16',
            'Recargo de equivalencia');
        this.dseRecargoEquivalencia.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_16', ['Cliente']);
        this.dseRecargoEquivalencia.enabled = false;
        this.dseRecargoEquivalencia.mandatory = false;
        this.dseRecargoEquivalencia.dataType = Field.dtReal;
        this.dseRecargoEquivalencia.assignCSS();
        this.fields.push(this.dseRecargoEquivalencia);

        this.dseImporteTotal = new Field(this.langMng);
        this.dseImporteTotal.nameInRequest = 'importetotal';
        this.dseImporteTotal.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_17',
            'Importe total');
        this.dseImporteTotal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_17', ['Cliente']);
        this.dseImporteTotal.enabled = false;
        this.dseImporteTotal.mandatory = false;
        this.dseImporteTotal.dataType = Field.dtReal;
        this.dseImporteTotal.assignCSS();
        this.fields.push(this.dseImporteTotal);

        this.dseFormaPagoDescripcion = new Field(this.langMng);
        this.dseFormaPagoDescripcion.nameInRequest = 'formapago.descripcion';
        this.dseFormaPagoDescripcion.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_18',
            'Forma de pago');
        this.dseFormaPagoDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_18', ['Cliente']);
        this.dseFormaPagoDescripcion.enabled = false;
        this.dseFormaPagoDescripcion.mandatory = false;
        this.dseFormaPagoDescripcion.dataType = Field.dtString;
        this.dseFormaPagoDescripcion.maxLength = 100;
        this.dseFormaPagoDescripcion.assignCSS();
        this.fields.push(this.dseFormaPagoDescripcion);

        this.dseContabilizada = new FieldDefinedSelection(this.langMng);
        this.dseContabilizada.nameInRequest = 'contabilizada';
        this.dseContabilizada.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_19',
            'Contabilizada');
        this.dseContabilizada.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_19', ['Cliente']);
        this.dseContabilizada.enabled = false;
        this.dseContabilizada.mandatory = false;
        this.dseContabilizada.dataType = Field.dtBool;
        this.dseContabilizada.options = DefinedSelections.DS_SI_NO;
        this.dseContabilizada.assignCSS();
        this.fields.push(this.dseContabilizada);

        this.dseCobrada = new FieldDefinedSelection(this.langMng);
        this.dseCobrada.nameInRequest = 'cobrada';
        this.dseCobrada.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_20',
            'Cobrada');
        this.dseCobrada.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_20', ['Cliente']);
        this.dseCobrada.enabled = false;
        this.dseCobrada.mandatory = false;
        this.dseCobrada.dataType = Field.dtBool;
        this.dseCobrada.options = DefinedSelections.DS_SI_NO;
        this.dseCobrada.assignCSS();
        this.fields.push(this.dseCobrada);

        this.dseImporteCobradoDrv = new Field(this.langMng);
        this.dseImporteCobradoDrv.nameInRequest = 'importecobradodrv';
        this.dseImporteCobradoDrv.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_21',
            'Importe cobrado');
        this.dseImporteCobradoDrv.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_21', ['Cliente']);
        this.dseImporteCobradoDrv.enabled = false;
        this.dseImporteCobradoDrv.mandatory = false;
        this.dseImporteCobradoDrv.dataType = Field.dtReal;
        this.dseImporteCobradoDrv.assignCSS();
        this.fields.push(this.dseImporteCobradoDrv);

        this.dsePorcenRetencion = new Field(this.langMng);
        this.dsePorcenRetencion.nameInRequest = 'porcenretencion';
        this.dsePorcenRetencion.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_29',
            '% de retención');
        this.dsePorcenRetencion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_29', ['Cliente']);
        this.dsePorcenRetencion.enabled = false;
        this.dsePorcenRetencion.mandatory = false;
        this.dsePorcenRetencion.dataType = Field.dtReal;
        this.dsePorcenRetencion.assignCSS();
        this.fields.push(this.dsePorcenRetencion);

        this.dseImporteRetencion = new Field(this.langMng);
        this.dseImporteRetencion.nameInRequest = 'importeretencion';
        this.dseImporteRetencion.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_24',
            'Importe retención');
        this.dseImporteRetencion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_24', ['Cliente']);
        this.dseImporteRetencion.enabled = false;
        this.dseImporteRetencion.mandatory = false;
        this.dseImporteRetencion.dataType = Field.dtReal;
        this.dseImporteRetencion.assignCSS();
        this.fields.push(this.dseImporteRetencion);

        this.dseMetalicoDrv = new Field(this.langMng);
        this.dseMetalicoDrv.nameInRequest = 'metalicodrv';
        this.dseMetalicoDrv.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_28',
            'Metálico');
        this.dseMetalicoDrv.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_28', ['Cliente']);
        this.dseMetalicoDrv.enabled = false;
        this.dseMetalicoDrv.mandatory = false;
        this.dseMetalicoDrv.dataType = Field.dtReal;
        this.dseMetalicoDrv.assignCSS();
        this.fields.push(this.dseMetalicoDrv);

        this.dseSubtipoFactA3 = new FieldDefinedSelection(this.langMng);
        this.dseSubtipoFactA3.nameInRequest = 'subtipofacta3';
        this.dseSubtipoFactA3.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_25',
            'Subtipo factura A3');
        this.dseSubtipoFactA3.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_25', ['Cliente']);
        this.dseSubtipoFactA3.enabled = false;
        this.dseSubtipoFactA3.mandatory = false;
        this.dseSubtipoFactA3.dataType = Field.dtString;
        this.dseSubtipoFactA3.maxLength = 2;
        this.dseSubtipoFactA3.options = DefinedSelections.DS_CLIENTE_SUBTIPOFACTA3;
        this.dseSubtipoFactA3.assignCSS();
        this.fields.push(this.dseSubtipoFactA3);

        this.dseImpresoA3 = new FieldDefinedSelection(this.langMng);
        this.dseImpresoA3.nameInRequest = 'impresoa3';
        this.dseImpresoA3.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_26',
            'Impreso A3');
        this.dseImpresoA3.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_26', ['Cliente']);
        this.dseImpresoA3.enabled = false;
        this.dseImpresoA3.mandatory = false;
        this.dseImpresoA3.dataType = Field.dtString;
        this.dseImpresoA3.maxLength = 2;
        this.dseImpresoA3.options = DefinedSelections.DS_IMPRESOA3;
        this.dseImpresoA3.assignCSS();
        this.fields.push(this.dseImpresoA3);

        this.dseAfectaModelo415 = new FieldDefinedSelection(this.langMng);
        this.dseAfectaModelo415.nameInRequest = 'afectamodelo415';
        this.dseAfectaModelo415.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_M_MD_item_Clas_1699352150016050CjtoVis_3ICtjoVis_27',
            'Afecta Modelo 415?');
        this.dseAfectaModelo415.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_3ICtjoVis_27', ['Cliente']);
        this.dseAfectaModelo415.enabled = false;
        this.dseAfectaModelo415.mandatory = false;
        this.dseAfectaModelo415.dataType = Field.dtBool;
        this.dseAfectaModelo415.options = DefinedSelections.DS_SI_NO;
        this.dseAfectaModelo415.assignCSS();
        this.fields.push(this.dseAfectaModelo415);

    }
}
