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

export class PresupuestoPIUuPresupuestoVersionesComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsversionattr = 'Versión';
    private readonly dsfecha = 'Fecha';
    private readonly dsfechaaceptacion = 'Fecha aceptación';
    private readonly dsfecharechazo = 'Fecha rechazo';
    private readonly dsfechaanulacion = 'Fecha anulación';
    private readonly dsusuariocreaciondnombrecompleto = 'Usuario';

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
        this.idXML = 'Clas_1699352150016913UIPobCl_2';
        this.className = ModelConstants.Presupuesto.name;
        this.iuName = 'PIU_PresupuestoVersiones';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Presupuesto_piu_PIU_PresupuestoVersiones',
            'Versiones');
        this.queryURL = '/api/PresupuestoApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_4ICtjoVis_1';
        dsItem.name = 'versionattr';
        dsItem.field = 'versionattr';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSP_PresupuestoVersiones_item_Clas_1699352150016913CjtoVis_4ICtjoVis_1',
            this.dsversionattr);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.linkIndex = 0;
        dsItem.linkIsAction = false;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_4ICtjoVis_2';
        dsItem.name = 'fecha';
        dsItem.field = 'fecha';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSP_PresupuestoVersiones_item_Clas_1699352150016913CjtoVis_4ICtjoVis_2',
            this.dsfecha);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_4ICtjoVis_3';
        dsItem.name = 'fechaaceptacion';
        dsItem.field = 'fechaaceptacion';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSP_PresupuestoVersiones_item_Clas_1699352150016913CjtoVis_4ICtjoVis_3',
            this.dsfechaaceptacion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_4ICtjoVis_4';
        dsItem.name = 'fecharechazo';
        dsItem.field = 'fecharechazo';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSP_PresupuestoVersiones_item_Clas_1699352150016913CjtoVis_4ICtjoVis_4',
            this.dsfecharechazo);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_4ICtjoVis_5';
        dsItem.name = 'fechaanulacion';
        dsItem.field = 'fechaanulacion';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSP_PresupuestoVersiones_item_Clas_1699352150016913CjtoVis_4ICtjoVis_5',
            this.dsfechaanulacion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_4ICtjoVis_6';
        dsItem.name = 'usuariocreacion.nombrecompleto';
        dsItem.field = 'usuariocreacion-nombrecompleto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 200;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSP_PresupuestoVersiones_item_Clas_1699352150016913CjtoVis_4ICtjoVis_6',
            this.dsusuariocreaciondnombrecompleto);
        dsItem.agents = [];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the navigation items
     */
    public initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1699352150016913NavOfer_2ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_Presupuesto_nav_N_PresupuestoVersiones_item_Clas_1699352150016913NavOfer_2ElemNav_1',
            'Detalles');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Presupuesto.name;
        navItem.targetUI = ModelConstants.Presupuesto.mdiuupresupuestoversiones;
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
