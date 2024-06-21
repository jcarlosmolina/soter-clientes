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

export class ParteTrabajoIIUuParteTrabajouTotalesComponent extends AbstractIIU {

    /** Display Set elements */
    public dseDescuentoTotal: Field;
    public dseBaseTotal: Field;
    public dseIVATotal: Field;
    public dseRecargoEquivalenciaTotal: Field;
    public dseImporteTotal: Field;

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
        this.idXML = 'Clas_1699352150016581UIInst_3';
        this.className = ModelConstants.Partetrabajo.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_ParteTrabajo_iiu_IIU_ParteTrabajo_Totales',
            'Totales');
        this.queryURL = '/api/ParteTrabajoApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseDescuentoTotal = new Field(this.langMng);
        this.dseDescuentoTotal.nameInRequest = 'descuentototal';
        this.dseDescuentoTotal.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_IIUTotales_item_Clas_1699352150016581CjtoVis_6ICtjoVis_1',
            'Descuento');
        this.dseDescuentoTotal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_6ICtjoVis_1', ['Cliente']);
        this.dseDescuentoTotal.enabled = false;
        this.dseDescuentoTotal.mandatory = false;
        this.dseDescuentoTotal.dataType = Field.dtReal;
        this.dseDescuentoTotal.assignCSS();
        this.fields.push(this.dseDescuentoTotal);

        this.dseBaseTotal = new Field(this.langMng);
        this.dseBaseTotal.nameInRequest = 'basetotal';
        this.dseBaseTotal.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_IIUTotales_item_Clas_1699352150016581CjtoVis_6ICtjoVis_2',
            'Base');
        this.dseBaseTotal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_6ICtjoVis_2', ['Cliente']);
        this.dseBaseTotal.enabled = false;
        this.dseBaseTotal.mandatory = false;
        this.dseBaseTotal.dataType = Field.dtReal;
        this.dseBaseTotal.assignCSS();
        this.fields.push(this.dseBaseTotal);

        this.dseIVATotal = new Field(this.langMng);
        this.dseIVATotal.nameInRequest = 'ivatotal';
        this.dseIVATotal.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_IIUTotales_item_Clas_1699352150016581CjtoVis_6ICtjoVis_3',
            'IVA');
        this.dseIVATotal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_6ICtjoVis_3', ['Cliente']);
        this.dseIVATotal.enabled = false;
        this.dseIVATotal.mandatory = false;
        this.dseIVATotal.dataType = Field.dtReal;
        this.dseIVATotal.assignCSS();
        this.fields.push(this.dseIVATotal);

        this.dseRecargoEquivalenciaTotal = new Field(this.langMng);
        this.dseRecargoEquivalenciaTotal.nameInRequest = 'recargoequivalenciatotal';
        this.dseRecargoEquivalenciaTotal.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_IIUTotales_item_Clas_1699352150016581CjtoVis_6ICtjoVis_4',
            'Recargo');
        this.dseRecargoEquivalenciaTotal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_6ICtjoVis_4', ['Cliente']);
        this.dseRecargoEquivalenciaTotal.enabled = false;
        this.dseRecargoEquivalenciaTotal.mandatory = false;
        this.dseRecargoEquivalenciaTotal.dataType = Field.dtReal;
        this.dseRecargoEquivalenciaTotal.assignCSS();
        this.fields.push(this.dseRecargoEquivalenciaTotal);

        this.dseImporteTotal = new Field(this.langMng);
        this.dseImporteTotal.nameInRequest = 'importetotal';
        this.dseImporteTotal.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_IIUTotales_item_Clas_1699352150016581CjtoVis_6ICtjoVis_5',
            'Importe');
        this.dseImporteTotal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_6ICtjoVis_5', ['Cliente']);
        this.dseImporteTotal.enabled = false;
        this.dseImporteTotal.mandatory = false;
        this.dseImporteTotal.dataType = Field.dtReal;
        this.dseImporteTotal.assignCSS();
        this.fields.push(this.dseImporteTotal);

    }
}
