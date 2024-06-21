import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { PresupuestoFilterFuPresupuestoPortalCli} from './filters/presupuestofilterfupresupuestoportalcli';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-presupuesto-piu-presupuestoportalcli',
    templateUrl: './piu_presupuestoportalcli.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresupuestoPIUuPresupuestoPortalCliComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dscodigo = 'Código';
    private readonly dsinstalaciondnombre = 'Instalación';
    private readonly dsfecha = 'Fecha';
    private readonly dsestado = 'Estado';
    private readonly dstipossistema = 'Tipos sistema';
    private readonly dsfechaaceptacion = 'Aceptación';
    private readonly dsfecharechazo = 'Rechazo';
    private readonly dsfechaanulacion = 'Anulación';

    /** Filters */
    public f0: PresupuestoFilterFuPresupuestoPortalCli;

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
        this.idXML = 'Clas_1699352150016913UIPobCl_11';
        this.className = ModelConstants.Presupuesto.name;
        this.iuName = ModelConstants.Presupuesto.piuupresupuestoportalcli;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Presupuesto_piu_PIU_PresupuestoPortalCli',
            'Presupuestos');
        this.f0 = new PresupuestoFilterFuPresupuestoPortalCli(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun, usrFunc);
        this.f0.populationContainer = this;
        this.f0.assignedOrderCriteria = 'OC_Presupuesto';
        this.filters.push(this.f0);
        this.queryURL = '/api/PresupuestoApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_14ICtjoVis_1';
        dsItem.name = 'codigo';
        dsItem.field = 'codigo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 10;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DS_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_14ICtjoVis_1',
            this.dscodigo);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.linkIndex = 0;
        dsItem.linkIsAction = false;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_14ICtjoVis_10';
        dsItem.name = 'instalacion.nombre';
        dsItem.field = 'instalacion-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DS_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_14ICtjoVis_10',
            this.dsinstalaciondnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_14ICtjoVis_3';
        dsItem.name = 'fecha';
        dsItem.field = 'fecha';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DS_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_14ICtjoVis_3',
            this.dsfecha);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_14ICtjoVis_4';
        dsItem.name = 'estado';
        dsItem.field = 'estado';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 10;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DS_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_14ICtjoVis_4',
            this.dsestado);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_PRESUPUESTO_ESTADO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_14ICtjoVis_5';
        dsItem.name = 'tipossistema';
        dsItem.field = 'tipossistema';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DS_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_14ICtjoVis_5',
            this.dstipossistema);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_14ICtjoVis_6';
        dsItem.name = 'fechaaceptacion';
        dsItem.field = 'fechaaceptacion';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DS_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_14ICtjoVis_6',
            this.dsfechaaceptacion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_14ICtjoVis_7';
        dsItem.name = 'fecharechazo';
        dsItem.field = 'fecharechazo';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DS_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_14ICtjoVis_7',
            this.dsfecharechazo);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_14ICtjoVis_8';
        dsItem.name = 'fechaanulacion';
        dsItem.field = 'fechaanulacion';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DS_PresupuestoPortalCli_item_Clas_1699352150016913CjtoVis_14ICtjoVis_8',
            this.dsfechaanulacion);
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
        navItem.idXML = 'Clas_1699352150016913NavOfer_4ElemNav_2';
        navItem.alias = this.langMng.translateText(
            'cls_Presupuesto_nav_N_PresupuestoPortalCli_item_Clas_1699352150016913NavOfer_4ElemNav_2',
            'Presupuesto');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Presupuesto.name;
        navItem.targetUI = ModelConstants.Presupuesto.mdiuupresupuestoportalcli;
        navItem.rolePath = '';
        navItem.showInDefault = false;
        navItem.styleClass = 'accMDIUGrid';
        this.navigations.push(navItem);

    }

    /**
     * Initialize the order criterias
     */
    public initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_Presupuesto', value: 'Fecha'});
        this.orderCriteria = 'OC_Presupuesto';
    }
}
