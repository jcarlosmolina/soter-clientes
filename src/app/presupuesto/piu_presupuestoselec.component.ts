import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
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

@Component({
    selector: 'imes-presupuesto-piu-presupuestoselec',
    templateUrl: './piu_presupuestoselec.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresupuestoPIUuPresupuestoSelecComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dscodigo = 'Código';
    private readonly dsclientednombrerazonsocial = 'Cliente';
    private readonly dsfecha = 'Fecha';
    private readonly dsestado = 'Estado';
    private readonly dstipossistema = 'Tipos sistema';
    private readonly dsfechaaceptacion = 'Aceptación';
    private readonly dsfecharechazo = 'Rechazo';
    private readonly dsfechaanulacion = 'Anulación';
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
        this.idXML = 'Clas_1699352150016913UIPobCl_5';
        this.className = ModelConstants.Presupuesto.name;
        this.iuName = ModelConstants.Presupuesto.piuupresupuestoselec;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Presupuesto_piu_PIU_PresupuestoSelec',
            'Presupuestos');
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
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_5ICtjoVis_1';
        dsItem.name = 'codigo';
        dsItem.field = 'codigo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 10;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSP_PresupuestoObs_item_Clas_1699352150016913CjtoVis_5ICtjoVis_1',
            this.dscodigo);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.linkIndex = 0;
        dsItem.linkIsAction = false;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_5ICtjoVis_2';
        dsItem.name = 'cliente.nombrerazonsocial';
        dsItem.field = 'cliente-nombrerazonsocial';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSP_PresupuestoObs_item_Clas_1699352150016913CjtoVis_5ICtjoVis_2',
            this.dsclientednombrerazonsocial);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_5ICtjoVis_3';
        dsItem.name = 'fecha';
        dsItem.field = 'fecha';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSP_PresupuestoObs_item_Clas_1699352150016913CjtoVis_5ICtjoVis_3',
            this.dsfecha);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_5ICtjoVis_4';
        dsItem.name = 'estado';
        dsItem.field = 'estado';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 10;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSP_PresupuestoObs_item_Clas_1699352150016913CjtoVis_5ICtjoVis_4',
            this.dsestado);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_PRESUPUESTO_ESTADO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_5ICtjoVis_5';
        dsItem.name = 'tipossistema';
        dsItem.field = 'tipossistema';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSP_PresupuestoObs_item_Clas_1699352150016913CjtoVis_5ICtjoVis_5',
            this.dstipossistema);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_5ICtjoVis_6';
        dsItem.name = 'fechaaceptacion';
        dsItem.field = 'fechaaceptacion';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSP_PresupuestoObs_item_Clas_1699352150016913CjtoVis_5ICtjoVis_6',
            this.dsfechaaceptacion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_5ICtjoVis_7';
        dsItem.name = 'fecharechazo';
        dsItem.field = 'fecharechazo';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSP_PresupuestoObs_item_Clas_1699352150016913CjtoVis_5ICtjoVis_7',
            this.dsfecharechazo);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_5ICtjoVis_8';
        dsItem.name = 'fechaanulacion';
        dsItem.field = 'fechaanulacion';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSP_PresupuestoObs_item_Clas_1699352150016913CjtoVis_5ICtjoVis_8',
            this.dsfechaanulacion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016913CjtoVis_5ICtjoVis_9';
        dsItem.name = 'usuariocreacion.nombrecompleto';
        dsItem.field = 'usuariocreacion-nombrecompleto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 200;
        dsItem.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DSP_PresupuestoObs_item_Clas_1699352150016913CjtoVis_5ICtjoVis_9',
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
        navItem.idXML = 'Clas_1699352150016913NavOfer_1ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_Presupuesto_nav_N_PresupuestoMD_item_Clas_1699352150016913NavOfer_1ElemNav_1',
            'Detalles');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Presupuesto.name;
        navItem.targetUI = ModelConstants.Presupuesto.mdiuupresupuesto;
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
