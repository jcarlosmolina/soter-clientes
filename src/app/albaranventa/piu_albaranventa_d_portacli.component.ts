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

export class AlbaranVentaPIUuAlbaranVentauDuPortaCliComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsseriealbarandcodseriealbaran = 'Serie';
    private readonly dscodalbaran = 'Código';
    private readonly dsfechaentrega = 'F. Entrega';
    private readonly dsdireccion = 'Dirección';
    private readonly dsbaseimponible = 'Base imp';
    private readonly dsiva = 'IVA';
    private readonly dsrecargoequivalencia = 'Rec equiv';
    private readonly dsimportetotal = 'Total';
    private readonly dsestado = 'Estado';

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
        this.idXML = 'Clas_1699352150016564UIPobCl_7';
        this.className = ModelConstants.Albaranventa.name;
        this.iuName = 'PIU_AlbaranVenta_D_PortaCli';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_AlbaranVenta_piu_PIU_AlbaranVenta_D_PortaCli',
            'Albaranes');
        this.queryURL = '/api/AlbaranVentaApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_6ICtjoVis_1';
        dsItem.name = 'seriealbaran.codseriealbaran';
        dsItem.field = 'seriealbaran-codseriealbaran';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 5;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVentaPortalCli_item_Clas_1699352150016564CjtoVis_6ICtjoVis_1',
            this.dsseriealbarandcodseriealbaran);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_6ICtjoVis_2';
        dsItem.name = 'codalbaran';
        dsItem.field = 'codalbaran';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVentaPortalCli_item_Clas_1699352150016564CjtoVis_6ICtjoVis_2',
            this.dscodalbaran);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.linkIndex = 0;
        dsItem.linkIsAction = false;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_6ICtjoVis_4';
        dsItem.name = 'fechaentrega';
        dsItem.field = 'fechaentrega';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVentaPortalCli_item_Clas_1699352150016564CjtoVis_6ICtjoVis_4',
            this.dsfechaentrega);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_6ICtjoVis_5';
        dsItem.name = 'direccion';
        dsItem.field = 'direccion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.fieldSize = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVentaPortalCli_item_Clas_1699352150016564CjtoVis_6ICtjoVis_5',
            this.dsdireccion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_6ICtjoVis_10';
        dsItem.name = 'baseimponible';
        dsItem.field = 'baseimponible';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVentaPortalCli_item_Clas_1699352150016564CjtoVis_6ICtjoVis_10',
            this.dsbaseimponible);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_6ICtjoVis_11';
        dsItem.name = 'iva';
        dsItem.field = 'iva';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVentaPortalCli_item_Clas_1699352150016564CjtoVis_6ICtjoVis_11',
            this.dsiva);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_6ICtjoVis_12';
        dsItem.name = 'recargoequivalencia';
        dsItem.field = 'recargoequivalencia';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVentaPortalCli_item_Clas_1699352150016564CjtoVis_6ICtjoVis_12',
            this.dsrecargoequivalencia);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_6ICtjoVis_13';
        dsItem.name = 'importetotal';
        dsItem.field = 'importetotal';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVentaPortalCli_item_Clas_1699352150016564CjtoVis_6ICtjoVis_13',
            this.dsimportetotal);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_6ICtjoVis_14';
        dsItem.name = 'estado';
        dsItem.field = 'estado';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 1;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVentaPortalCli_item_Clas_1699352150016564CjtoVis_6ICtjoVis_14',
            this.dsestado);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_ALBARAN_ESTADO;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the navigation items
     */
    public initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1699352150016564NavOfer_3ElemNav_2';
        navItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_nav_N_AlbaranVentaPortalCli_item_Clas_1699352150016564NavOfer_3ElemNav_2',
            'Albarán');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Albaranventa.name;
        navItem.targetUI = ModelConstants.Albaranventa.mdiuualbaranventaportalcli;
        navItem.rolePath = '';
        navItem.showInDefault = false;
        navItem.styleClass = 'accMDIUGrid';
        this.navigations.push(navItem);

    }

    /**
     * Initialize the order criterias
     */
    public initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
