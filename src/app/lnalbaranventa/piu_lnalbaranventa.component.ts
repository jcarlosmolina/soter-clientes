import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

export class LnAlbaranVentaPIUuLnAlbaranVentaComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsnombrearticulo = 'Artículo';
    private readonly dsnombrealmacen = 'Almacén';
    private readonly dsunidades = 'Unidades';
    private readonly dsprecioventa = 'Precio';
    private readonly dsdescuento = 'Dto';
    private readonly dsbaseimponible = 'Base imp';
    private readonly dsporceniva = '% IVA';
    private readonly dsiva = 'IVA';
    private readonly dsporcenrecequiv = '% Rec equiv';
    private readonly dsrecargoequivalencia = 'Rec equiv';
    private readonly dsimportetotal = 'Total';

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
        this.idXML = 'Clas_1699352150016760UIPobCl_1';
        this.className = ModelConstants.Lnalbaranventa.name;
        this.iuName = 'PIU_LnAlbaranVenta';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_LnAlbaranVenta_piu_PIU_LnAlbaranVenta',
            'Líneas');
        this.queryURL = '/api/LnAlbaranVentaApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_2ICtjoVis_1';
        dsItem.name = 'nombrearticulo';
        dsItem.field = 'nombrearticulo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DSP_LnAlbaranVenta_item_Clas_1699352150016760CjtoVis_2ICtjoVis_1',
            this.dsnombrearticulo);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_2ICtjoVis_2';
        dsItem.name = 'nombrealmacen';
        dsItem.field = 'nombrealmacen';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DSP_LnAlbaranVenta_item_Clas_1699352150016760CjtoVis_2ICtjoVis_2',
            this.dsnombrealmacen);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_2ICtjoVis_3';
        dsItem.name = 'unidades';
        dsItem.field = 'unidades';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DSP_LnAlbaranVenta_item_Clas_1699352150016760CjtoVis_2ICtjoVis_3',
            this.dsunidades);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_2ICtjoVis_4';
        dsItem.name = 'precioventa';
        dsItem.field = 'precioventa';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DSP_LnAlbaranVenta_item_Clas_1699352150016760CjtoVis_2ICtjoVis_4',
            this.dsprecioventa);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_2ICtjoVis_5';
        dsItem.name = 'descuento';
        dsItem.field = 'descuento';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DSP_LnAlbaranVenta_item_Clas_1699352150016760CjtoVis_2ICtjoVis_5',
            this.dsdescuento);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_2ICtjoVis_6';
        dsItem.name = 'baseimponible';
        dsItem.field = 'baseimponible';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DSP_LnAlbaranVenta_item_Clas_1699352150016760CjtoVis_2ICtjoVis_6',
            this.dsbaseimponible);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_2ICtjoVis_7';
        dsItem.name = 'porceniva';
        dsItem.field = 'porceniva';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DSP_LnAlbaranVenta_item_Clas_1699352150016760CjtoVis_2ICtjoVis_7',
            this.dsporceniva);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_2ICtjoVis_8';
        dsItem.name = 'iva';
        dsItem.field = 'iva';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DSP_LnAlbaranVenta_item_Clas_1699352150016760CjtoVis_2ICtjoVis_8',
            this.dsiva);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_2ICtjoVis_9';
        dsItem.name = 'porcenrecequiv';
        dsItem.field = 'porcenrecequiv';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DSP_LnAlbaranVenta_item_Clas_1699352150016760CjtoVis_2ICtjoVis_9',
            this.dsporcenrecequiv);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_2ICtjoVis_10';
        dsItem.name = 'recargoequivalencia';
        dsItem.field = 'recargoequivalencia';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DSP_LnAlbaranVenta_item_Clas_1699352150016760CjtoVis_2ICtjoVis_10',
            this.dsrecargoequivalencia);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_2ICtjoVis_11';
        dsItem.name = 'importetotal';
        dsItem.field = 'importetotal';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DSP_LnAlbaranVenta_item_Clas_1699352150016760CjtoVis_2ICtjoVis_11',
            this.dsimportetotal);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
