import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { LnAlbaranVentaFilterFuLnAlbaranVentauDuFact} from './filters/lnalbaranventafilterfulnalbaranventaudufact';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

export class LnAlbaranVentaPIUuLnAlbaranVentaDFaPortalCliComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsalbarandcodalbaran = 'Albarán';
    private readonly dsidlnalbaranventa = 'Línea';
    private readonly dscodarticulo = 'Código Artículo';
    private readonly dsdescarticulo = 'Descripción Artículo';
    private readonly dsunidades = 'Unidades';
    private readonly dsprecioventa = 'Precio Venta';
    private readonly dsdescuento = 'Descuento';
    private readonly dsbaseimponible = 'Base imp';
    private readonly dsporceniva = '% IVA';
    private readonly dsiva = 'IVA';
    private readonly dsporcenrecequiv = '% Rec equiv';
    private readonly dsrecargoequivalencia = 'Rec equiv';
    private readonly dsimportetotal = 'Importe Total';

    /** Filters */
    public f0: LnAlbaranVentaFilterFuLnAlbaranVentauDuFact;

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
        this.idXML = 'Clas_1699352150016760UIPobCl_3';
        this.className = ModelConstants.Lnalbaranventa.name;
        this.iuName = 'PIU_LnAlbaranVentaDFaPortalCli';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_LnAlbaranVenta_piu_PIU_LnAlbaranVentaDFaPortalCli',
            'Líneas');
        this.f0 = new LnAlbaranVentaFilterFuLnAlbaranVentauDuFact(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun, usrFunc);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
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
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_3ICtjoVis_1';
        dsItem.name = 'albaran.codalbaran';
        dsItem.field = 'albaran-codalbaran';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DS_LnAlbaranVentaDFactPortalCl_item_Clas_1699352150016760CjtoVis_3ICtjoVis_1',
            this.dsalbarandcodalbaran);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_3ICtjoVis_2';
        dsItem.name = 'idlnalbaranventa';
        dsItem.field = 'idlnalbaranventa';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DS_LnAlbaranVentaDFactPortalCl_item_Clas_1699352150016760CjtoVis_3ICtjoVis_2',
            this.dsidlnalbaranventa);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_3ICtjoVis_3';
        dsItem.name = 'codarticulo';
        dsItem.field = 'codarticulo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DS_LnAlbaranVentaDFactPortalCl_item_Clas_1699352150016760CjtoVis_3ICtjoVis_3',
            this.dscodarticulo);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_3ICtjoVis_4';
        dsItem.name = 'descarticulo';
        dsItem.field = 'descarticulo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DS_LnAlbaranVentaDFactPortalCl_item_Clas_1699352150016760CjtoVis_3ICtjoVis_4',
            this.dsdescarticulo);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_3ICtjoVis_5';
        dsItem.name = 'unidades';
        dsItem.field = 'unidades';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DS_LnAlbaranVentaDFactPortalCl_item_Clas_1699352150016760CjtoVis_3ICtjoVis_5',
            this.dsunidades);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_3ICtjoVis_6';
        dsItem.name = 'precioventa';
        dsItem.field = 'precioventa';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DS_LnAlbaranVentaDFactPortalCl_item_Clas_1699352150016760CjtoVis_3ICtjoVis_6',
            this.dsprecioventa);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_3ICtjoVis_7';
        dsItem.name = 'descuento';
        dsItem.field = 'descuento';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DS_LnAlbaranVentaDFactPortalCl_item_Clas_1699352150016760CjtoVis_3ICtjoVis_7',
            this.dsdescuento);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_3ICtjoVis_8';
        dsItem.name = 'baseimponible';
        dsItem.field = 'baseimponible';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DS_LnAlbaranVentaDFactPortalCl_item_Clas_1699352150016760CjtoVis_3ICtjoVis_8',
            this.dsbaseimponible);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_3ICtjoVis_9';
        dsItem.name = 'porceniva';
        dsItem.field = 'porceniva';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DS_LnAlbaranVentaDFactPortalCl_item_Clas_1699352150016760CjtoVis_3ICtjoVis_9',
            this.dsporceniva);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_3ICtjoVis_10';
        dsItem.name = 'iva';
        dsItem.field = 'iva';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DS_LnAlbaranVentaDFactPortalCl_item_Clas_1699352150016760CjtoVis_3ICtjoVis_10',
            this.dsiva);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_3ICtjoVis_11';
        dsItem.name = 'porcenrecequiv';
        dsItem.field = 'porcenrecequiv';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DS_LnAlbaranVentaDFactPortalCl_item_Clas_1699352150016760CjtoVis_3ICtjoVis_11',
            this.dsporcenrecequiv);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_3ICtjoVis_12';
        dsItem.name = 'recargoequivalencia';
        dsItem.field = 'recargoequivalencia';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DS_LnAlbaranVentaDFactPortalCl_item_Clas_1699352150016760CjtoVis_3ICtjoVis_12',
            this.dsrecargoequivalencia);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016760CjtoVis_3ICtjoVis_13';
        dsItem.name = 'importetotal';
        dsItem.field = 'importetotal';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_ds_DS_LnAlbaranVentaDFactPortalCl_item_Clas_1699352150016760CjtoVis_3ICtjoVis_13',
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
