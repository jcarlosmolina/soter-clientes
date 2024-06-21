import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { FacturaVentaFilterFuFacturaVentaPortalCli} from './filters/facturaventafilterfufacturaventaportalcli';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-facturaventa-piu-facturaventaportalcli',
    templateUrl: './piu_facturaventaportalcli.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacturaVentaPIUuFacturaVentaPortalCliComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsfechacreacion = 'Fecha Creación';
    private readonly dsseriefacturadnombreseriefactura = 'Serie';
    private readonly dsnumfacturacompleto = 'Nº Factura';
    private readonly dsfechaemision = 'Fecha emisión';
    private readonly dstipossistema = 'Tipos de Sistema';
    private readonly dscobrada = 'Cobrada';
    private readonly dsbaseimponible = 'Base imponible';
    private readonly dsiva = 'IVA';
    private readonly dsimportetotal = 'Importe total';

    /** Filters */
    public f0: FacturaVentaFilterFuFacturaVentaPortalCli;

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
        this.idXML = 'Clas_1699352150016050UIPobCl_6';
        this.className = ModelConstants.Facturaventa.name;
        this.iuName = ModelConstants.Facturaventa.piuufacturaventaportalcli;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_FacturaVenta_piu_PIU_FacturaVentaPortalCli',
            'Facturas');
        this.f0 = new FacturaVentaFilterFuFacturaVentaPortalCli(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun, usrFunc);
        this.f0.populationContainer = this;
        this.f0.assignedOrderCriteria = 'OC_FacturaVenta';
        this.filters.push(this.f0);
        this.queryURL = '/api/FacturaVentaApi/GetPopulationDynamic';
        this.paginationInClient = false;
        // Hide filter variables area depending on screen resolution
        this.hideFilters = this.appGlobalInfo.hideFilters;
    }

    /**
     * It is the main component. Process the initial actions
     */
    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016050CjtoVis_4ICtjoVis_1';
        dsItem.name = 'fechacreacion';
        dsItem.field = 'fechacreacion';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DS_FacturaVentaCliente_item_Clas_1699352150016050CjtoVis_4ICtjoVis_1',
            this.dsfechacreacion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016050CjtoVis_4ICtjoVis_2';
        dsItem.name = 'seriefactura.nombreseriefactura';
        dsItem.field = 'seriefactura-nombreseriefactura';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DS_FacturaVentaCliente_item_Clas_1699352150016050CjtoVis_4ICtjoVis_2',
            this.dsseriefacturadnombreseriefactura);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016050CjtoVis_4ICtjoVis_3';
        dsItem.name = 'numfacturacompleto';
        dsItem.field = 'numfacturacompleto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DS_FacturaVentaCliente_item_Clas_1699352150016050CjtoVis_4ICtjoVis_3',
            this.dsnumfacturacompleto);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016050CjtoVis_4ICtjoVis_4';
        dsItem.name = 'fechaemision';
        dsItem.field = 'fechaemision';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DS_FacturaVentaCliente_item_Clas_1699352150016050CjtoVis_4ICtjoVis_4',
            this.dsfechaemision);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.linkIndex = 0;
        dsItem.linkIsAction = false;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016050CjtoVis_4ICtjoVis_5';
        dsItem.name = 'tipossistema';
        dsItem.field = 'tipossistema';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DS_FacturaVentaCliente_item_Clas_1699352150016050CjtoVis_4ICtjoVis_5',
            this.dstipossistema);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016050CjtoVis_4ICtjoVis_6';
        dsItem.name = 'cobrada';
        dsItem.field = 'cobrada';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DS_FacturaVentaCliente_item_Clas_1699352150016050CjtoVis_4ICtjoVis_6',
            this.dscobrada);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_SI_NO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016050CjtoVis_4ICtjoVis_7';
        dsItem.name = 'baseimponible';
        dsItem.field = 'baseimponible';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DS_FacturaVentaCliente_item_Clas_1699352150016050CjtoVis_4ICtjoVis_7',
            this.dsbaseimponible);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016050CjtoVis_4ICtjoVis_8';
        dsItem.name = 'iva';
        dsItem.field = 'iva';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DS_FacturaVentaCliente_item_Clas_1699352150016050CjtoVis_4ICtjoVis_8',
            this.dsiva);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016050CjtoVis_4ICtjoVis_9';
        dsItem.name = 'importetotal';
        dsItem.field = 'importetotal';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_FacturaVenta_ds_DS_FacturaVentaCliente_item_Clas_1699352150016050CjtoVis_4ICtjoVis_9',
            this.dsimportetotal);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the navigation items
     */
    public initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1699352150016050NavOfer_3ElemNav_2';
        navItem.alias = this.langMng.translateText(
            'cls_FacturaVenta_nav_N_FacturaVentaPortalCli_item_Clas_1699352150016050NavOfer_3ElemNav_2',
            'Detalles factura');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Facturaventa.name;
        navItem.targetUI = ModelConstants.Facturaventa.mdiuufacturaventaportalcli;
        navItem.rolePath = '';
        navItem.showInDefault = false;
        navItem.styleClass = 'accMDIUGrid';
        this.navigations.push(navItem);

    }

    /**
     * Initialize the order criterias
     */
    public initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_FacturaVenta', value: 'Fecha emisión'});
        this.orderCriteria = 'OC_FacturaVenta';
    }
}
