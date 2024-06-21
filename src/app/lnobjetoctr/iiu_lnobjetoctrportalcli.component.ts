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

export class LnObjetoCtrIIUuLnObjetoCtrPortalCliComponent extends AbstractIIU {

    /** Display Set elements */
    public dseProrrogableAutomaticamente: FieldDefinedSelection;
    public dsePorcenDescuento: Field;
    public dseMotivoDescuento: Field;
    public dseFormaPagoDescripcion: Field;
    public dsePeriodicidadPagoNombre: Field;
    public dsePagoPorUso: FieldDefinedSelection;
    public dseActualizarIPC: FieldDefinedSelection;

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
        this.idXML = 'Clas_1699352150016018UIInst_3';
        this.className = ModelConstants.Lnobjetoctr.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_LnObjetoCtr_iiu_IIU_LnObjetoCtrPortalCli',
            'Detalles');
        this.queryURL = '/api/LnObjetoCtrApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseProrrogableAutomaticamente = new FieldDefinedSelection(this.langMng);
        this.dseProrrogableAutomaticamente.nameInRequest = 'prorrogableautomaticamente';
        this.dseProrrogableAutomaticamente.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DSI_LnObjetoCtr_item_Clas_1699352150016018CjtoVis_3ICtjoVis_1',
            'Prorrogable auto');
        this.dseProrrogableAutomaticamente.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016018CjtoVis_3ICtjoVis_1', ['Cliente']);
        this.dseProrrogableAutomaticamente.enabled = false;
        this.dseProrrogableAutomaticamente.mandatory = false;
        this.dseProrrogableAutomaticamente.dataType = Field.dtBool;
        this.dseProrrogableAutomaticamente.options = DefinedSelections.DS_SI_NO;
        this.dseProrrogableAutomaticamente.assignCSS();
        this.fields.push(this.dseProrrogableAutomaticamente);

        this.dsePorcenDescuento = new Field(this.langMng);
        this.dsePorcenDescuento.nameInRequest = 'porcendescuento';
        this.dsePorcenDescuento.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DSI_LnObjetoCtr_item_Clas_1699352150016018CjtoVis_3ICtjoVis_2',
            '% Dto');
        this.dsePorcenDescuento.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016018CjtoVis_3ICtjoVis_2', ['Cliente']);
        this.dsePorcenDescuento.enabled = false;
        this.dsePorcenDescuento.mandatory = false;
        this.dsePorcenDescuento.dataType = Field.dtReal;
        this.dsePorcenDescuento.assignCSS();
        this.fields.push(this.dsePorcenDescuento);

        this.dseMotivoDescuento = new Field(this.langMng);
        this.dseMotivoDescuento.nameInRequest = 'motivodescuento';
        this.dseMotivoDescuento.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DSI_LnObjetoCtr_item_Clas_1699352150016018CjtoVis_3ICtjoVis_3',
            'Motivo dto');
        this.dseMotivoDescuento.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016018CjtoVis_3ICtjoVis_3', ['Cliente']);
        this.dseMotivoDescuento.enabled = false;
        this.dseMotivoDescuento.mandatory = false;
        this.dseMotivoDescuento.dataType = Field.dtString;
        this.dseMotivoDescuento.maxLength = 300;
        this.dseMotivoDescuento.assignCSS();
        this.fields.push(this.dseMotivoDescuento);

        this.dseFormaPagoDescripcion = new Field(this.langMng);
        this.dseFormaPagoDescripcion.nameInRequest = 'formapago.descripcion';
        this.dseFormaPagoDescripcion.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DSI_LnObjetoCtr_item_Clas_1699352150016018CjtoVis_3ICtjoVis_4',
            'Forma pago');
        this.dseFormaPagoDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016018CjtoVis_3ICtjoVis_4', ['Cliente']);
        this.dseFormaPagoDescripcion.enabled = false;
        this.dseFormaPagoDescripcion.mandatory = false;
        this.dseFormaPagoDescripcion.dataType = Field.dtString;
        this.dseFormaPagoDescripcion.maxLength = 100;
        this.dseFormaPagoDescripcion.assignCSS();
        this.fields.push(this.dseFormaPagoDescripcion);

        this.dsePeriodicidadPagoNombre = new Field(this.langMng);
        this.dsePeriodicidadPagoNombre.nameInRequest = 'periodicidadpago.nombre';
        this.dsePeriodicidadPagoNombre.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DSI_LnObjetoCtr_item_Clas_1699352150016018CjtoVis_3ICtjoVis_5',
            'Periodicidad pago');
        this.dsePeriodicidadPagoNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016018CjtoVis_3ICtjoVis_5', ['Cliente']);
        this.dsePeriodicidadPagoNombre.enabled = false;
        this.dsePeriodicidadPagoNombre.mandatory = false;
        this.dsePeriodicidadPagoNombre.dataType = Field.dtString;
        this.dsePeriodicidadPagoNombre.maxLength = 100;
        this.dsePeriodicidadPagoNombre.assignCSS();
        this.fields.push(this.dsePeriodicidadPagoNombre);

        this.dsePagoPorUso = new FieldDefinedSelection(this.langMng);
        this.dsePagoPorUso.nameInRequest = 'pagoporuso';
        this.dsePagoPorUso.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DSI_LnObjetoCtr_item_Clas_1699352150016018CjtoVis_3ICtjoVis_6',
            'Pago por uso');
        this.dsePagoPorUso.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016018CjtoVis_3ICtjoVis_6', ['Cliente']);
        this.dsePagoPorUso.enabled = false;
        this.dsePagoPorUso.mandatory = false;
        this.dsePagoPorUso.dataType = Field.dtBool;
        this.dsePagoPorUso.options = DefinedSelections.DS_SI_NO;
        this.dsePagoPorUso.assignCSS();
        this.fields.push(this.dsePagoPorUso);

        this.dseActualizarIPC = new FieldDefinedSelection(this.langMng);
        this.dseActualizarIPC.nameInRequest = 'actualizaripc';
        this.dseActualizarIPC.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DSI_LnObjetoCtr_item_Clas_1699352150016018CjtoVis_3ICtjoVis_7',
            'Actualizar según IPC');
        this.dseActualizarIPC.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016018CjtoVis_3ICtjoVis_7', ['Cliente']);
        this.dseActualizarIPC.enabled = false;
        this.dseActualizarIPC.mandatory = false;
        this.dseActualizarIPC.dataType = Field.dtBool;
        this.dseActualizarIPC.options = DefinedSelections.DS_SI_NO;
        this.dseActualizarIPC.assignCSS();
        this.fields.push(this.dseActualizarIPC);

    }
}
