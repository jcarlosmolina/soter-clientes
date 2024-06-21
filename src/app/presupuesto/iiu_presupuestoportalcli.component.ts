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

export class PresupuestoIIUuPresupuestoPortalCliComponent extends AbstractIIU {

    /** Display Set elements */
    public dseCodigo: Field;
    public dseInstalacionNombre: Field;
    public dseFecha: Field;
    public dseAceptado: FieldDefinedSelection;
    public dseFechaAceptacion: Field;
    public dseFechaPrevista: Field;
    public dseFechaValidez: Field;
    public dseRechazado: FieldDefinedSelection;
    public dseFechaRechazo: Field;
    public dseAnulado: FieldDefinedSelection;
    public dseFechaAnulacion: Field;
    public dseMotivoAnulacion: Field;
    public dseBaseImponible: Field;
    public dseIVATotal: Field;
    public dseRecargoEquivalencia: Field;
    public dsePorcentajeDescuento: Field;
    public dseDescuento: Field;
    public dseImporte: Field;
    public dsePorcentajeRetencion: Field;
    public dseTiposSistema: Field;

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
        this.idXML = 'Clas_1699352150016913UIInst_7';
        this.className = ModelConstants.Presupuesto.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Presupuesto_iiu_IIU_PresupuestoPortalCli',
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
            'cls_Presupuesto_ds_DSI_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_15ICtjoVis_1',
            'Código');
        this.dseCodigo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_15ICtjoVis_1', ['Cliente']);
        this.dseCodigo.enabled = false;
        this.dseCodigo.mandatory = false;
        this.dseCodigo.dataType = Field.dtString;
        this.dseCodigo.maxLength = 10;
        this.dseCodigo.assignCSS();
        this.fields.push(this.dseCodigo);

        this.dseInstalacionNombre = new Field(this.langMng);
        this.dseInstalacionNombre.nameInRequest = 'instalacion.nombre';
        this.dseInstalacionNombre.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_15ICtjoVis_28',
            'Instalación');
        this.dseInstalacionNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_15ICtjoVis_28', ['Cliente']);
        this.dseInstalacionNombre.enabled = false;
        this.dseInstalacionNombre.mandatory = false;
        this.dseInstalacionNombre.dataType = Field.dtString;
        this.dseInstalacionNombre.maxLength = 100;
        this.dseInstalacionNombre.assignCSS();
        this.fields.push(this.dseInstalacionNombre);

        this.dseFecha = new Field(this.langMng);
        this.dseFecha.nameInRequest = 'fecha';
        this.dseFecha.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_15ICtjoVis_3',
            'Fecha');
        this.dseFecha.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_15ICtjoVis_3', ['Cliente']);
        this.dseFecha.enabled = false;
        this.dseFecha.mandatory = false;
        this.dseFecha.dataType = Field.dtDate;
        this.dseFecha.assignCSS();
        this.fields.push(this.dseFecha);

        this.dseAceptado = new FieldDefinedSelection(this.langMng);
        this.dseAceptado.nameInRequest = 'aceptado';
        this.dseAceptado.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_15ICtjoVis_7',
            'Aceptado');
        this.dseAceptado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_15ICtjoVis_7', ['Cliente']);
        this.dseAceptado.enabled = false;
        this.dseAceptado.mandatory = false;
        this.dseAceptado.dataType = Field.dtBool;
        this.dseAceptado.options = DefinedSelections.DS_SI_NO;
        this.dseAceptado.assignCSS();
        this.fields.push(this.dseAceptado);

        this.dseFechaAceptacion = new Field(this.langMng);
        this.dseFechaAceptacion.nameInRequest = 'fechaaceptacion';
        this.dseFechaAceptacion.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_15ICtjoVis_8',
            'Fecha aceptación');
        this.dseFechaAceptacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_15ICtjoVis_8', ['Cliente']);
        this.dseFechaAceptacion.enabled = false;
        this.dseFechaAceptacion.mandatory = false;
        this.dseFechaAceptacion.dataType = Field.dtDate;
        this.dseFechaAceptacion.assignCSS();
        this.fields.push(this.dseFechaAceptacion);

        this.dseFechaPrevista = new Field(this.langMng);
        this.dseFechaPrevista.nameInRequest = 'fechaprevista';
        this.dseFechaPrevista.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_15ICtjoVis_9',
            'Fecha prevista');
        this.dseFechaPrevista.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_15ICtjoVis_9', ['Cliente']);
        this.dseFechaPrevista.enabled = false;
        this.dseFechaPrevista.mandatory = false;
        this.dseFechaPrevista.dataType = Field.dtDate;
        this.dseFechaPrevista.assignCSS();
        this.fields.push(this.dseFechaPrevista);

        this.dseFechaValidez = new Field(this.langMng);
        this.dseFechaValidez.nameInRequest = 'fechavalidez';
        this.dseFechaValidez.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_15ICtjoVis_10',
            'Fecha validez');
        this.dseFechaValidez.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_15ICtjoVis_10', ['Cliente']);
        this.dseFechaValidez.enabled = false;
        this.dseFechaValidez.mandatory = false;
        this.dseFechaValidez.dataType = Field.dtDate;
        this.dseFechaValidez.assignCSS();
        this.fields.push(this.dseFechaValidez);

        this.dseRechazado = new FieldDefinedSelection(this.langMng);
        this.dseRechazado.nameInRequest = 'rechazado';
        this.dseRechazado.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_15ICtjoVis_11',
            'Rechazado');
        this.dseRechazado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_15ICtjoVis_11', ['Cliente']);
        this.dseRechazado.enabled = false;
        this.dseRechazado.mandatory = false;
        this.dseRechazado.dataType = Field.dtBool;
        this.dseRechazado.options = DefinedSelections.DS_SI_NO;
        this.dseRechazado.assignCSS();
        this.fields.push(this.dseRechazado);

        this.dseFechaRechazo = new Field(this.langMng);
        this.dseFechaRechazo.nameInRequest = 'fecharechazo';
        this.dseFechaRechazo.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_15ICtjoVis_12',
            'Fecha rechazo');
        this.dseFechaRechazo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_15ICtjoVis_12', ['Cliente']);
        this.dseFechaRechazo.enabled = false;
        this.dseFechaRechazo.mandatory = false;
        this.dseFechaRechazo.dataType = Field.dtDate;
        this.dseFechaRechazo.assignCSS();
        this.fields.push(this.dseFechaRechazo);

        this.dseAnulado = new FieldDefinedSelection(this.langMng);
        this.dseAnulado.nameInRequest = 'anulado';
        this.dseAnulado.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_15ICtjoVis_14',
            'Anulado');
        this.dseAnulado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_15ICtjoVis_14', ['Cliente']);
        this.dseAnulado.enabled = false;
        this.dseAnulado.mandatory = false;
        this.dseAnulado.dataType = Field.dtBool;
        this.dseAnulado.options = DefinedSelections.DS_SI_NO;
        this.dseAnulado.assignCSS();
        this.fields.push(this.dseAnulado);

        this.dseFechaAnulacion = new Field(this.langMng);
        this.dseFechaAnulacion.nameInRequest = 'fechaanulacion';
        this.dseFechaAnulacion.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_15ICtjoVis_15',
            'Fecha anulación');
        this.dseFechaAnulacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_15ICtjoVis_15', ['Cliente']);
        this.dseFechaAnulacion.enabled = false;
        this.dseFechaAnulacion.mandatory = false;
        this.dseFechaAnulacion.dataType = Field.dtDate;
        this.dseFechaAnulacion.assignCSS();
        this.fields.push(this.dseFechaAnulacion);

        this.dseMotivoAnulacion = new Field(this.langMng);
        this.dseMotivoAnulacion.nameInRequest = 'motivoanulacion';
        this.dseMotivoAnulacion.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_15ICtjoVis_16',
            'Motivo anulación');
        this.dseMotivoAnulacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_15ICtjoVis_16', ['Cliente']);
        this.dseMotivoAnulacion.enabled = false;
        this.dseMotivoAnulacion.mandatory = false;
        this.dseMotivoAnulacion.dataType = Field.dtString;
        this.dseMotivoAnulacion.maxLength = 300;
        this.dseMotivoAnulacion.assignCSS();
        this.fields.push(this.dseMotivoAnulacion);

        this.dseBaseImponible = new Field(this.langMng);
        this.dseBaseImponible.nameInRequest = 'baseimponible';
        this.dseBaseImponible.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_15ICtjoVis_17',
            'Base imponible');
        this.dseBaseImponible.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_15ICtjoVis_17', ['Cliente']);
        this.dseBaseImponible.enabled = false;
        this.dseBaseImponible.mandatory = false;
        this.dseBaseImponible.dataType = Field.dtReal;
        this.dseBaseImponible.assignCSS();
        this.fields.push(this.dseBaseImponible);

        this.dseIVATotal = new Field(this.langMng);
        this.dseIVATotal.nameInRequest = 'ivatotal';
        this.dseIVATotal.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_15ICtjoVis_18',
            'IVA');
        this.dseIVATotal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_15ICtjoVis_18', ['Cliente']);
        this.dseIVATotal.enabled = false;
        this.dseIVATotal.mandatory = false;
        this.dseIVATotal.dataType = Field.dtReal;
        this.dseIVATotal.assignCSS();
        this.fields.push(this.dseIVATotal);

        this.dseRecargoEquivalencia = new Field(this.langMng);
        this.dseRecargoEquivalencia.nameInRequest = 'recargoequivalencia';
        this.dseRecargoEquivalencia.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_15ICtjoVis_19',
            'Recargo de equivalencia');
        this.dseRecargoEquivalencia.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_15ICtjoVis_19', ['Cliente']);
        this.dseRecargoEquivalencia.enabled = false;
        this.dseRecargoEquivalencia.mandatory = false;
        this.dseRecargoEquivalencia.dataType = Field.dtReal;
        this.dseRecargoEquivalencia.assignCSS();
        this.fields.push(this.dseRecargoEquivalencia);

        this.dsePorcentajeDescuento = new Field(this.langMng);
        this.dsePorcentajeDescuento.nameInRequest = 'porcentajedescuento';
        this.dsePorcentajeDescuento.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_15ICtjoVis_20',
            '% descuento');
        this.dsePorcentajeDescuento.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_15ICtjoVis_20', ['Cliente']);
        this.dsePorcentajeDescuento.enabled = false;
        this.dsePorcentajeDescuento.mandatory = false;
        this.dsePorcentajeDescuento.dataType = Field.dtReal;
        this.dsePorcentajeDescuento.assignCSS();
        this.fields.push(this.dsePorcentajeDescuento);

        this.dseDescuento = new Field(this.langMng);
        this.dseDescuento.nameInRequest = 'descuento';
        this.dseDescuento.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_15ICtjoVis_21',
            'Descuento');
        this.dseDescuento.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_15ICtjoVis_21', ['Cliente']);
        this.dseDescuento.enabled = false;
        this.dseDescuento.mandatory = false;
        this.dseDescuento.dataType = Field.dtReal;
        this.dseDescuento.assignCSS();
        this.fields.push(this.dseDescuento);

        this.dseImporte = new Field(this.langMng);
        this.dseImporte.nameInRequest = 'importe';
        this.dseImporte.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_15ICtjoVis_22',
            'Importe');
        this.dseImporte.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_15ICtjoVis_22', ['Cliente']);
        this.dseImporte.enabled = false;
        this.dseImporte.mandatory = false;
        this.dseImporte.dataType = Field.dtReal;
        this.dseImporte.assignCSS();
        this.fields.push(this.dseImporte);

        this.dsePorcentajeRetencion = new Field(this.langMng);
        this.dsePorcentajeRetencion.nameInRequest = 'porcentajeretencion';
        this.dsePorcentajeRetencion.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_15ICtjoVis_25',
            '% retención');
        this.dsePorcentajeRetencion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_15ICtjoVis_25', ['Cliente']);
        this.dsePorcentajeRetencion.enabled = false;
        this.dsePorcentajeRetencion.mandatory = false;
        this.dsePorcentajeRetencion.dataType = Field.dtReal;
        this.dsePorcentajeRetencion.assignCSS();
        this.fields.push(this.dsePorcentajeRetencion);

        this.dseTiposSistema = new Field(this.langMng);
        this.dseTiposSistema.nameInRequest = 'tipossistema';
        this.dseTiposSistema.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSI_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_15ICtjoVis_26',
            'Tipos sistema');
        this.dseTiposSistema.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_15ICtjoVis_26', ['Cliente']);
        this.dseTiposSistema.enabled = false;
        this.dseTiposSistema.mandatory = false;
        this.dseTiposSistema.dataType = Field.dtString;
        this.dseTiposSistema.maxLength = 300;
        this.dseTiposSistema.assignCSS();
        this.fields.push(this.dseTiposSistema);

    }
}
