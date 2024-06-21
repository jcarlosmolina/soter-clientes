import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

export class VencimientoPIUuVencimientouDuFactPortalClComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsfecha = 'Fecha';
    private readonly dsfacturadimportetotal = 'Importe factura';
    private readonly dsporcentaje = 'Porcentaje';
    private readonly dsimporte = 'Importe';
    private readonly dsmetalico = 'Metálico';
    private readonly dspagado = 'Pagado';

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
        super(appGlobalInfo, util, changeDetectorRef, langMng, condNavMng);
        this.idXML = 'Clas_1699352150016137UIPobCl_2';
        this.className = ModelConstants.Vencimiento.name;
        this.iuName = 'PIU_Vencimiento_D_FactPortalCl';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Vencimiento_piu_PIU_Vencimiento_D_FactPortalCl',
            'Vencimientos');
        this.queryURL = '/api/VencimientoApi/GetPopulationDynamic';
        this.paginationInClient = false;
        // Hide filter variables area depending on screen resolution
        this.hideFilters = this.appGlobalInfo.hideFilters;
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016137CjtoVis_1ICtjoVis_1';
        dsItem.name = 'fecha';
        dsItem.field = 'fecha';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_Vencimiento_ds_DS_Vencimiento_D_Fact_item_Clas_1699352150016137CjtoVis_1ICtjoVis_1',
            this.dsfecha);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016137CjtoVis_1ICtjoVis_4';
        dsItem.name = 'factura.importetotal';
        dsItem.field = 'factura-importetotal';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_Vencimiento_ds_DS_Vencimiento_D_Fact_item_Clas_1699352150016137CjtoVis_1ICtjoVis_4',
            this.dsfacturadimportetotal);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016137CjtoVis_1ICtjoVis_3';
        dsItem.name = 'porcentaje';
        dsItem.field = 'porcentaje';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_Vencimiento_ds_DS_Vencimiento_D_Fact_item_Clas_1699352150016137CjtoVis_1ICtjoVis_3',
            this.dsporcentaje);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016137CjtoVis_1ICtjoVis_2';
        dsItem.name = 'importe';
        dsItem.field = 'importe';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_Vencimiento_ds_DS_Vencimiento_D_Fact_item_Clas_1699352150016137CjtoVis_1ICtjoVis_2',
            this.dsimporte);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016137CjtoVis_1ICtjoVis_6';
        dsItem.name = 'metalico';
        dsItem.field = 'metalico';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_Vencimiento_ds_DS_Vencimiento_D_Fact_item_Clas_1699352150016137CjtoVis_1ICtjoVis_6',
            this.dsmetalico);
        dsItem.agents = [];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016137CjtoVis_1ICtjoVis_5';
        dsItem.name = 'pagado';
        dsItem.field = 'pagado';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Vencimiento_ds_DS_Vencimiento_D_Fact_item_Clas_1699352150016137CjtoVis_1ICtjoVis_5',
            this.dspagado);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_SI_NO;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_Vencimiento', value: 'OC_Vencimiento'});
        this.orderCriteria = 'OC_Vencimiento';
    }
}
