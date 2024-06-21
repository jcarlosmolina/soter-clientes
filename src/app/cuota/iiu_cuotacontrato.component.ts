import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field } from '../common/baseIUElements';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

export class CuotaIIUuCuotaContratoComponent extends AbstractIIU {

    /** Display Set elements */
    public dseLnObjetoCtrContratoNumContrato: Field;
    public dseLnObjetoCtrContratoClienteNombreRazonSocial: Field;
    public dseLnObjetoCtrContratoImporteTotal: Field;
    public dseOrden: Field;
    public dseDescripcion: Field;
    public dseFechaVencimiento: Field;
    public dseBaseImponible: Field;
    public dsePorcenIVA: Field;
    public dseIVA: Field;
    public dsePorcenRecargoEquiv: Field;
    public dseImporte: Field;
    public dseObservacions: Field;

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
        this.idXML = 'Clas_1699352150016398UIInst_1';
        this.className = ModelConstants.Cuota.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Cuota_iiu_IIU_CuotaContrato',
            'Cuota');
        this.queryURL = '/api/CuotaApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseLnObjetoCtrContratoNumContrato = new Field(this.langMng);
        this.dseLnObjetoCtrContratoNumContrato.nameInRequest = 'lnobjetoctr.contrato.numcontrato';
        this.dseLnObjetoCtrContratoNumContrato.alias = this.langMng.translateText(
            'cls_Cuota_ds_DSI_CuotaContrato_item_Clas_1699352150016398CjtoVis_4ICtjoVis_1',
            'Nº  contrato');
        this.dseLnObjetoCtrContratoNumContrato.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016398CjtoVis_4ICtjoVis_1', ['Cliente']);
        this.dseLnObjetoCtrContratoNumContrato.enabled = false;
        this.dseLnObjetoCtrContratoNumContrato.mandatory = false;
        this.dseLnObjetoCtrContratoNumContrato.dataType = Field.dtString;
        this.dseLnObjetoCtrContratoNumContrato.maxLength = 10;
        this.dseLnObjetoCtrContratoNumContrato.assignCSS();
        this.fields.push(this.dseLnObjetoCtrContratoNumContrato);

        this.dseLnObjetoCtrContratoClienteNombreRazonSocial = new Field(this.langMng);
        this.dseLnObjetoCtrContratoClienteNombreRazonSocial.nameInRequest = 'lnobjetoctr.contrato.cliente.nombrerazonsocial';
        this.dseLnObjetoCtrContratoClienteNombreRazonSocial.alias = this.langMng.translateText(
            'cls_Cuota_ds_DSI_CuotaContrato_item_Clas_1699352150016398CjtoVis_4ICtjoVis_2',
            'Cliente');
        this.dseLnObjetoCtrContratoClienteNombreRazonSocial.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016398CjtoVis_4ICtjoVis_2', ['Cliente']);
        this.dseLnObjetoCtrContratoClienteNombreRazonSocial.enabled = false;
        this.dseLnObjetoCtrContratoClienteNombreRazonSocial.mandatory = false;
        this.dseLnObjetoCtrContratoClienteNombreRazonSocial.dataType = Field.dtString;
        this.dseLnObjetoCtrContratoClienteNombreRazonSocial.maxLength = 300;
        this.dseLnObjetoCtrContratoClienteNombreRazonSocial.assignCSS();
        this.fields.push(this.dseLnObjetoCtrContratoClienteNombreRazonSocial);

        this.dseLnObjetoCtrContratoImporteTotal = new Field(this.langMng);
        this.dseLnObjetoCtrContratoImporteTotal.nameInRequest = 'lnobjetoctr.contrato.importetotal';
        this.dseLnObjetoCtrContratoImporteTotal.alias = this.langMng.translateText(
            'cls_Cuota_ds_DSI_CuotaContrato_item_Clas_1699352150016398CjtoVis_4ICtjoVis_3',
            'Importe contrato');
        this.dseLnObjetoCtrContratoImporteTotal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016398CjtoVis_4ICtjoVis_3', ['Cliente']);
        this.dseLnObjetoCtrContratoImporteTotal.enabled = false;
        this.dseLnObjetoCtrContratoImporteTotal.mandatory = false;
        this.dseLnObjetoCtrContratoImporteTotal.dataType = Field.dtReal;
        this.dseLnObjetoCtrContratoImporteTotal.assignCSS();
        this.fields.push(this.dseLnObjetoCtrContratoImporteTotal);

        this.dseOrden = new Field(this.langMng);
        this.dseOrden.nameInRequest = 'orden';
        this.dseOrden.alias = this.langMng.translateText(
            'cls_Cuota_ds_DSI_CuotaContrato_item_Clas_1699352150016398CjtoVis_4ICtjoVis_4',
            'Nº cuota');
        this.dseOrden.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016398CjtoVis_4ICtjoVis_4', ['Cliente']);
        this.dseOrden.enabled = false;
        this.dseOrden.mandatory = false;
        this.dseOrden.dataType = Field.dtInt;
        this.dseOrden.assignCSS();
        this.fields.push(this.dseOrden);

        this.dseDescripcion = new Field(this.langMng);
        this.dseDescripcion.nameInRequest = 'descripcion';
        this.dseDescripcion.alias = this.langMng.translateText(
            'cls_Cuota_ds_DSI_CuotaContrato_item_Clas_1699352150016398CjtoVis_4ICtjoVis_5',
            'Descripción');
        this.dseDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016398CjtoVis_4ICtjoVis_5', ['Cliente']);
        this.dseDescripcion.enabled = false;
        this.dseDescripcion.mandatory = false;
        this.dseDescripcion.dataType = Field.dtString;
        this.dseDescripcion.maxLength = 100;
        this.dseDescripcion.assignCSS();
        this.fields.push(this.dseDescripcion);

        this.dseFechaVencimiento = new Field(this.langMng);
        this.dseFechaVencimiento.nameInRequest = 'fechavencimiento';
        this.dseFechaVencimiento.alias = this.langMng.translateText(
            'cls_Cuota_ds_DSI_CuotaContrato_item_Clas_1699352150016398CjtoVis_4ICtjoVis_6',
            'Vencimiento');
        this.dseFechaVencimiento.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016398CjtoVis_4ICtjoVis_6', ['Cliente']);
        this.dseFechaVencimiento.enabled = false;
        this.dseFechaVencimiento.mandatory = false;
        this.dseFechaVencimiento.dataType = Field.dtDate;
        this.dseFechaVencimiento.assignCSS();
        this.fields.push(this.dseFechaVencimiento);

        this.dseBaseImponible = new Field(this.langMng);
        this.dseBaseImponible.nameInRequest = 'baseimponible';
        this.dseBaseImponible.alias = this.langMng.translateText(
            'cls_Cuota_ds_DSI_CuotaContrato_item_Clas_1699352150016398CjtoVis_4ICtjoVis_7',
            'Base imp');
        this.dseBaseImponible.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016398CjtoVis_4ICtjoVis_7', ['Cliente']);
        this.dseBaseImponible.enabled = false;
        this.dseBaseImponible.mandatory = false;
        this.dseBaseImponible.dataType = Field.dtReal;
        this.dseBaseImponible.assignCSS();
        this.fields.push(this.dseBaseImponible);

        this.dsePorcenIVA = new Field(this.langMng);
        this.dsePorcenIVA.nameInRequest = 'porceniva';
        this.dsePorcenIVA.alias = this.langMng.translateText(
            'cls_Cuota_ds_DSI_CuotaContrato_item_Clas_1699352150016398CjtoVis_4ICtjoVis_8',
            '% IVA');
        this.dsePorcenIVA.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016398CjtoVis_4ICtjoVis_8', ['Cliente']);
        this.dsePorcenIVA.enabled = false;
        this.dsePorcenIVA.mandatory = false;
        this.dsePorcenIVA.dataType = Field.dtReal;
        this.dsePorcenIVA.assignCSS();
        this.fields.push(this.dsePorcenIVA);

        this.dseIVA = new Field(this.langMng);
        this.dseIVA.nameInRequest = 'iva';
        this.dseIVA.alias = this.langMng.translateText(
            'cls_Cuota_ds_DSI_CuotaContrato_item_Clas_1699352150016398CjtoVis_4ICtjoVis_9',
            'IVA');
        this.dseIVA.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016398CjtoVis_4ICtjoVis_9', ['Cliente']);
        this.dseIVA.enabled = false;
        this.dseIVA.mandatory = false;
        this.dseIVA.dataType = Field.dtReal;
        this.dseIVA.assignCSS();
        this.fields.push(this.dseIVA);

        this.dsePorcenRecargoEquiv = new Field(this.langMng);
        this.dsePorcenRecargoEquiv.nameInRequest = 'porcenrecargoequiv';
        this.dsePorcenRecargoEquiv.alias = this.langMng.translateText(
            'cls_Cuota_ds_DSI_CuotaContrato_item_Clas_1699352150016398CjtoVis_4ICtjoVis_10',
            '% Rec equiv');
        this.dsePorcenRecargoEquiv.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016398CjtoVis_4ICtjoVis_10', ['Cliente']);
        this.dsePorcenRecargoEquiv.enabled = false;
        this.dsePorcenRecargoEquiv.mandatory = false;
        this.dsePorcenRecargoEquiv.dataType = Field.dtReal;
        this.dsePorcenRecargoEquiv.assignCSS();
        this.fields.push(this.dsePorcenRecargoEquiv);

        this.dseImporte = new Field(this.langMng);
        this.dseImporte.nameInRequest = 'importe';
        this.dseImporte.alias = this.langMng.translateText(
            'cls_Cuota_ds_DSI_CuotaContrato_item_Clas_1699352150016398CjtoVis_4ICtjoVis_11',
            'Importe');
        this.dseImporte.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016398CjtoVis_4ICtjoVis_11', ['Cliente']);
        this.dseImporte.enabled = false;
        this.dseImporte.mandatory = false;
        this.dseImporte.dataType = Field.dtReal;
        this.dseImporte.assignCSS();
        this.fields.push(this.dseImporte);

        this.dseObservacions = new Field(this.langMng);
        this.dseObservacions.nameInRequest = 'observacions';
        this.dseObservacions.alias = this.langMng.translateText(
            'cls_Cuota_ds_DSI_CuotaContrato_item_Clas_1699352150016398CjtoVis_4ICtjoVis_12',
            'Observaciones');
        this.dseObservacions.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016398CjtoVis_4ICtjoVis_12', ['Cliente']);
        this.dseObservacions.enabled = false;
        this.dseObservacions.mandatory = false;
        this.dseObservacions.dataType = Field.dtString;
        this.dseObservacions.maxLength = 300;
        this.dseObservacions.assignCSS();
        this.fields.push(this.dseObservacions);

    }

    /**
     * Initialize the action items
     */
    public initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1699352150016398AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Cuota_act_A_CuotaContrato_item_Clas_1699352150016398AccOfer_1ElemAcc_3',
            'Detalles');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Cliente.name];
        accItem.targetClass = ModelConstants.Cuota.name;
        accItem.targetUI = ModelConstants.Cuota.mdiuucuotacontrato;
        this.actions.push(accItem);

    }
}
