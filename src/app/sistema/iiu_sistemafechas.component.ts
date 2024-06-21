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

export class SistemaIIUuSistemaFechasComponent extends AbstractIIU {

    /** Display Set elements */
    public dseFechaUltimaRealizacion: Field;
    public dseFechaProximaRealizacion: Field;
    public dseFechaUltimaFactura: Field;
    public dseFechaProximaFactura: Field;

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
        this.idXML = 'Clas_1699352150016718UIInst_3';
        this.className = ModelConstants.Sistema.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Sistema_iiu_IIU_SistemaFechas',
            'Fechas');
        this.queryURL = '/api/SistemaApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseFechaUltimaRealizacion = new Field(this.langMng);
        this.dseFechaUltimaRealizacion.nameInRequest = 'fechaultimarealizacion';
        this.dseFechaUltimaRealizacion.alias = this.langMng.translateText(
            'cls_Sistema_ds_DS_SistemaFechas_item_Clas_1699352150016718CjtoVis_4ICtjoVis_1',
            'Última realización');
        this.dseFechaUltimaRealizacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_4ICtjoVis_1', ['Cliente']);
        this.dseFechaUltimaRealizacion.enabled = false;
        this.dseFechaUltimaRealizacion.mandatory = false;
        this.dseFechaUltimaRealizacion.dataType = Field.dtDate;
        this.dseFechaUltimaRealizacion.assignCSS();
        this.fields.push(this.dseFechaUltimaRealizacion);

        this.dseFechaProximaRealizacion = new Field(this.langMng);
        this.dseFechaProximaRealizacion.nameInRequest = 'fechaproximarealizacion';
        this.dseFechaProximaRealizacion.alias = this.langMng.translateText(
            'cls_Sistema_ds_DS_SistemaFechas_item_Clas_1699352150016718CjtoVis_4ICtjoVis_2',
            'Próxima realización');
        this.dseFechaProximaRealizacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_4ICtjoVis_2', ['Cliente']);
        this.dseFechaProximaRealizacion.enabled = false;
        this.dseFechaProximaRealizacion.mandatory = false;
        this.dseFechaProximaRealizacion.dataType = Field.dtDate;
        this.dseFechaProximaRealizacion.assignCSS();
        this.fields.push(this.dseFechaProximaRealizacion);

        this.dseFechaUltimaFactura = new Field(this.langMng);
        this.dseFechaUltimaFactura.nameInRequest = 'fechaultimafactura';
        this.dseFechaUltimaFactura.alias = this.langMng.translateText(
            'cls_Sistema_ds_DS_SistemaFechas_item_Clas_1699352150016718CjtoVis_4ICtjoVis_3',
            'Última factura');
        this.dseFechaUltimaFactura.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_4ICtjoVis_3', ['Cliente']);
        this.dseFechaUltimaFactura.enabled = false;
        this.dseFechaUltimaFactura.mandatory = false;
        this.dseFechaUltimaFactura.dataType = Field.dtDate;
        this.dseFechaUltimaFactura.assignCSS();
        this.fields.push(this.dseFechaUltimaFactura);

        this.dseFechaProximaFactura = new Field(this.langMng);
        this.dseFechaProximaFactura.nameInRequest = 'fechaproximafactura';
        this.dseFechaProximaFactura.alias = this.langMng.translateText(
            'cls_Sistema_ds_DS_SistemaFechas_item_Clas_1699352150016718CjtoVis_4ICtjoVis_4',
            'Próxima factura');
        this.dseFechaProximaFactura.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_4ICtjoVis_4', ['Cliente']);
        this.dseFechaProximaFactura.enabled = false;
        this.dseFechaProximaFactura.mandatory = false;
        this.dseFechaProximaFactura.dataType = Field.dtDate;
        this.dseFechaProximaFactura.assignCSS();
        this.fields.push(this.dseFechaProximaFactura);

    }
}
