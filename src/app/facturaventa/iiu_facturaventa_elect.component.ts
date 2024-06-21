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

export class FacturaVentaIIUuFacturaVentauElectComponent extends AbstractIIU {

    /** Display Set elements */
    public dseFechaGenElectronica: Field;
    public dseLugarExpedicion: Field;
    public dsePeriodoIni: Field;
    public dsePeriodoFin: Field;
    public dsePaymentMeansType: FieldDefinedSelection;
    public dseDiscountReason: Field;
    public dseFIniTaxPeriod: Field;
    public dseFFinTaxPeriod: Field;
    public dseReasonCode: FieldDefinedSelection;
    public dseReasonDescription: Field;
    public dseCorrectionCode: Field;
    public dseCorrectionDesc: FieldDefinedSelection;

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
        this.idXML = 'Clas_1699352150016050UIInst_2';
        this.className = ModelConstants.Facturaventa.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_FacturaVenta_iiu_IIU_FacturaVenta_Elect',
            'Factura electrónica');
        this.queryURL = '/api/FacturaVentaApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseFechaGenElectronica = new Field(this.langMng);
        this.dseFechaGenElectronica.nameInRequest = 'fechagenelectronica';
        this.dseFechaGenElectronica.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_Electronica_item_Clas_1699352150016050CjtoVis_6ICtjoVis_1',
            'Fecha operación');
        this.dseFechaGenElectronica.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_6ICtjoVis_1', ['Cliente']);
        this.dseFechaGenElectronica.enabled = false;
        this.dseFechaGenElectronica.mandatory = false;
        this.dseFechaGenElectronica.dataType = Field.dtDate;
        this.dseFechaGenElectronica.assignCSS();
        this.fields.push(this.dseFechaGenElectronica);

        this.dseLugarExpedicion = new Field(this.langMng);
        this.dseLugarExpedicion.nameInRequest = 'lugarexpedicion';
        this.dseLugarExpedicion.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_Electronica_item_Clas_1699352150016050CjtoVis_6ICtjoVis_2',
            'Lugar expedición');
        this.dseLugarExpedicion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_6ICtjoVis_2', ['Cliente']);
        this.dseLugarExpedicion.enabled = false;
        this.dseLugarExpedicion.mandatory = false;
        this.dseLugarExpedicion.dataType = Field.dtString;
        this.dseLugarExpedicion.maxLength = 20;
        this.dseLugarExpedicion.assignCSS();
        this.fields.push(this.dseLugarExpedicion);

        this.dsePeriodoIni = new Field(this.langMng);
        this.dsePeriodoIni.nameInRequest = 'periodoini';
        this.dsePeriodoIni.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_Electronica_item_Clas_1699352150016050CjtoVis_6ICtjoVis_4',
            'F. inicio periodo');
        this.dsePeriodoIni.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_6ICtjoVis_4', ['Cliente']);
        this.dsePeriodoIni.enabled = false;
        this.dsePeriodoIni.mandatory = false;
        this.dsePeriodoIni.dataType = Field.dtDate;
        this.dsePeriodoIni.assignCSS();
        this.fields.push(this.dsePeriodoIni);

        this.dsePeriodoFin = new Field(this.langMng);
        this.dsePeriodoFin.nameInRequest = 'periodofin';
        this.dsePeriodoFin.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_Electronica_item_Clas_1699352150016050CjtoVis_6ICtjoVis_5',
            'F. fin periodo');
        this.dsePeriodoFin.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_6ICtjoVis_5', ['Cliente']);
        this.dsePeriodoFin.enabled = false;
        this.dsePeriodoFin.mandatory = false;
        this.dsePeriodoFin.dataType = Field.dtDate;
        this.dsePeriodoFin.assignCSS();
        this.fields.push(this.dsePeriodoFin);

        this.dsePaymentMeansType = new FieldDefinedSelection(this.langMng);
        this.dsePaymentMeansType.nameInRequest = 'paymentmeanstype';
        this.dsePaymentMeansType.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_Electronica_item_Clas_1699352150016050CjtoVis_6ICtjoVis_6',
            'Médio de pago');
        this.dsePaymentMeansType.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_6ICtjoVis_6', ['Cliente']);
        this.dsePaymentMeansType.enabled = false;
        this.dsePaymentMeansType.mandatory = false;
        this.dsePaymentMeansType.dataType = Field.dtString;
        this.dsePaymentMeansType.maxLength = 2;
        this.dsePaymentMeansType.options = DefinedSelections.DS_PAYMENTMEANSTYPE;
        this.dsePaymentMeansType.assignCSS();
        this.fields.push(this.dsePaymentMeansType);

        this.dseDiscountReason = new Field(this.langMng);
        this.dseDiscountReason.nameInRequest = 'discountreason';
        this.dseDiscountReason.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_Electronica_item_Clas_1699352150016050CjtoVis_6ICtjoVis_7',
            'Motivo descuento');
        this.dseDiscountReason.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_6ICtjoVis_7', ['Cliente']);
        this.dseDiscountReason.enabled = false;
        this.dseDiscountReason.mandatory = false;
        this.dseDiscountReason.dataType = Field.dtString;
        this.dseDiscountReason.maxLength = 999;
        this.dseDiscountReason.assignCSS();
        this.fields.push(this.dseDiscountReason);

        this.dseFIniTaxPeriod = new Field(this.langMng);
        this.dseFIniTaxPeriod.nameInRequest = 'finitaxperiod';
        this.dseFIniTaxPeriod.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_Electronica_item_Clas_1699352150016050CjtoVis_6ICtjoVis_8',
            'F. inicio efectos fiscales (fact. a rectificar)');
        this.dseFIniTaxPeriod.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_6ICtjoVis_8', ['Cliente']);
        this.dseFIniTaxPeriod.enabled = false;
        this.dseFIniTaxPeriod.mandatory = false;
        this.dseFIniTaxPeriod.dataType = Field.dtDate;
        this.dseFIniTaxPeriod.assignCSS();
        this.fields.push(this.dseFIniTaxPeriod);

        this.dseFFinTaxPeriod = new Field(this.langMng);
        this.dseFFinTaxPeriod.nameInRequest = 'ffintaxperiod';
        this.dseFFinTaxPeriod.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_Electronica_item_Clas_1699352150016050CjtoVis_6ICtjoVis_9',
            'F. fin efectos fiscales (fact. a rectificar)');
        this.dseFFinTaxPeriod.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_6ICtjoVis_9', ['Cliente']);
        this.dseFFinTaxPeriod.enabled = false;
        this.dseFFinTaxPeriod.mandatory = false;
        this.dseFFinTaxPeriod.dataType = Field.dtDate;
        this.dseFFinTaxPeriod.assignCSS();
        this.fields.push(this.dseFFinTaxPeriod);

        this.dseReasonCode = new FieldDefinedSelection(this.langMng);
        this.dseReasonCode.nameInRequest = 'reasoncode';
        this.dseReasonCode.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_Electronica_item_Clas_1699352150016050CjtoVis_6ICtjoVis_10',
            'Motivo rectificativa');
        this.dseReasonCode.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_6ICtjoVis_10', ['Cliente']);
        this.dseReasonCode.enabled = false;
        this.dseReasonCode.mandatory = false;
        this.dseReasonCode.dataType = Field.dtString;
        this.dseReasonCode.maxLength = 2;
        this.dseReasonCode.options = DefinedSelections.DS_CODIGOSRECTIFICATIVA;
        this.dseReasonCode.assignCSS();
        this.fields.push(this.dseReasonCode);

        this.dseReasonDescription = new Field(this.langMng);
        this.dseReasonDescription.nameInRequest = 'reasondescription';
        this.dseReasonDescription.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_Electronica_item_Clas_1699352150016050CjtoVis_6ICtjoVis_11',
            'Desc. motivo');
        this.dseReasonDescription.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_6ICtjoVis_11', ['Cliente']);
        this.dseReasonDescription.enabled = false;
        this.dseReasonDescription.mandatory = false;
        this.dseReasonDescription.dataType = Field.dtString;
        this.dseReasonDescription.maxLength = 100;
        this.dseReasonDescription.assignCSS();
        this.fields.push(this.dseReasonDescription);

        this.dseCorrectionCode = new Field(this.langMng);
        this.dseCorrectionCode.nameInRequest = 'correctioncode';
        this.dseCorrectionCode.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_Electronica_item_Clas_1699352150016050CjtoVis_6ICtjoVis_12',
            'Método corrección');
        this.dseCorrectionCode.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_6ICtjoVis_12', ['Cliente']);
        this.dseCorrectionCode.enabled = false;
        this.dseCorrectionCode.mandatory = false;
        this.dseCorrectionCode.dataType = Field.dtString;
        this.dseCorrectionCode.maxLength = 2;
        this.dseCorrectionCode.assignCSS();
        this.fields.push(this.dseCorrectionCode);

        this.dseCorrectionDesc = new FieldDefinedSelection(this.langMng);
        this.dseCorrectionDesc.nameInRequest = 'correctiondesc';
        this.dseCorrectionDesc.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DSI_FacturaVenta_Electronica_item_Clas_1699352150016050CjtoVis_6ICtjoVis_13',
            'Desc. método');
        this.dseCorrectionDesc.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016050CjtoVis_6ICtjoVis_13', ['Cliente']);
        this.dseCorrectionDesc.enabled = false;
        this.dseCorrectionDesc.mandatory = false;
        this.dseCorrectionDesc.dataType = Field.dtString;
        this.dseCorrectionDesc.maxLength = 100;
        this.dseCorrectionDesc.options = DefinedSelections.DS_CORRECTIONMETHOD;
        this.dseCorrectionDesc.assignCSS();
        this.fields.push(this.dseCorrectionDesc);

    }
}
