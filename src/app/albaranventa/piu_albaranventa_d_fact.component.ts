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

export class AlbaranVentaPIUuAlbaranVentauDuFactComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsseriealbarandcodseriealbaran = 'Serie';
    private readonly dscodalbaran = 'Código';
    private readonly dsfechacreacion = 'Fecha';
    private readonly dsfechaentrega = 'F. Entrega';
    private readonly dsdireccion = 'Dirección';
    private readonly dsclientednombrecomercial = 'Cliente';
    private readonly dsclientedcodigo = 'Cod. cliente';
    private readonly dsclientedcifnif = 'CIF/NIF';
    private readonly dspagadordnombrecomercial = 'Pagador';
    private readonly dsbaseimponible = 'Base imp';
    private readonly dsiva = 'IVA';
    private readonly dsrecargoequivalencia = 'Rec equiv';
    private readonly dsimportetotal = 'Total';
    private readonly dsestado = 'Estado';
    private readonly dsfacturado = 'Facturado';

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
        this.idXML = 'Clas_1699352150016564UIPobCl_2';
        this.className = ModelConstants.Albaranventa.name;
        this.iuName = 'PIU_AlbaranVenta_D_Fact';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_AlbaranVenta_piu_PIU_AlbaranVenta_D_Fact',
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
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_1ICtjoVis_1';
        dsItem.name = 'seriealbaran.codseriealbaran';
        dsItem.field = 'seriealbaran-codseriealbaran';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 5;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_1',
            this.dsseriealbarandcodseriealbaran);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_1ICtjoVis_2';
        dsItem.name = 'codalbaran';
        dsItem.field = 'codalbaran';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_2',
            this.dscodalbaran);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.linkIndex = 0;
        dsItem.linkIsAction = false;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_1ICtjoVis_3';
        dsItem.name = 'fechacreacion';
        dsItem.field = 'fechacreacion';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_3',
            this.dsfechacreacion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_1ICtjoVis_4';
        dsItem.name = 'fechaentrega';
        dsItem.field = 'fechaentrega';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_4',
            this.dsfechaentrega);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_1ICtjoVis_5';
        dsItem.name = 'direccion';
        dsItem.field = 'direccion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.fieldSize = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_5',
            this.dsdireccion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_1ICtjoVis_6';
        dsItem.name = 'cliente.nombrecomercial';
        dsItem.field = 'cliente-nombrecomercial';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.fieldSize = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_6',
            this.dsclientednombrecomercial);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_1ICtjoVis_7';
        dsItem.name = 'cliente.codigo';
        dsItem.field = 'cliente-codigo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 6;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_7',
            this.dsclientedcodigo);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_1ICtjoVis_8';
        dsItem.name = 'cliente.cifnif';
        dsItem.field = 'cliente-cifnif';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 30;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_8',
            this.dsclientedcifnif);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_1ICtjoVis_9';
        dsItem.name = 'pagador.nombrecomercial';
        dsItem.field = 'pagador-nombrecomercial';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.fieldSize = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_9',
            this.dspagadordnombrecomercial);
        dsItem.agents = [];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_1ICtjoVis_10';
        dsItem.name = 'baseimponible';
        dsItem.field = 'baseimponible';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_10',
            this.dsbaseimponible);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_1ICtjoVis_11';
        dsItem.name = 'iva';
        dsItem.field = 'iva';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_11',
            this.dsiva);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_1ICtjoVis_12';
        dsItem.name = 'recargoequivalencia';
        dsItem.field = 'recargoequivalencia';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_12',
            this.dsrecargoequivalencia);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_1ICtjoVis_13';
        dsItem.name = 'importetotal';
        dsItem.field = 'importetotal';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_13',
            this.dsimportetotal);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_1ICtjoVis_14';
        dsItem.name = 'estado';
        dsItem.field = 'estado';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 1;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_14',
            this.dsestado);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_ALBARAN_ESTADO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016564CjtoVis_1ICtjoVis_15';
        dsItem.name = 'facturado';
        dsItem.field = 'facturado';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_15',
            this.dsfacturado);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_SI_NO;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the navigation items
     */
    public initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1699352150016564NavOfer_1ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_AlbaranVenta_nav_N_AlbaranVenta_item_Clas_1699352150016564NavOfer_1ElemNav_1',
            'Detalles');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Albaranventa.name;
        navItem.targetUI = ModelConstants.Albaranventa.mdiuualbaranventa;
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
