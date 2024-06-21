import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { OrdenTrabajoFilterFuOrdenTrabajo4Instalacion} from './filters/ordentrabajofilterfuordentrabajo4instalacion';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

export class OrdenTrabajoPIUuOrdenTrabajo4InstalacionComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsiduordentrabajo = 'Nº orden';
    private readonly dsinstalaciondclientednombrerazonsocial = 'Cliente';
    private readonly dsinstalaciondnombre = 'Instalación';
    private readonly dsestado = 'Estado';
    private readonly dsfechaprevista = 'Fecha prevista';
    private readonly dstipoorden = 'Tipo orden';

    /** Filters */
    public f0: OrdenTrabajoFilterFuOrdenTrabajo4Instalacion;

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
        this.idXML = 'Clas_1699352150016871UIPobCl_1';
        this.className = ModelConstants.Ordentrabajo.name;
        this.iuName = 'PIU_OrdenTrabajo4Instalacion';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_OrdenTrabajo_piu_PIU_OrdenTrabajo4Instalacion',
            'Órdenes de trabajo');
        this.f0 = new OrdenTrabajoFilterFuOrdenTrabajo4Instalacion(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun, usrFunc);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/OrdenTrabajoApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016871CjtoVis_2ICtjoVis_1';
        dsItem.name = 'id_ordentrabajo';
        dsItem.field = 'id_ordentrabajo';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSP_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_2ICtjoVis_1',
            this.dsiduordentrabajo);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.linkIndex = 0;
        dsItem.linkIsAction = false;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016871CjtoVis_2ICtjoVis_2';
        dsItem.name = 'instalacion.cliente.nombrerazonsocial';
        dsItem.field = 'instalacion-cliente-nombrerazonsocial';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSP_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_2ICtjoVis_2',
            this.dsinstalaciondclientednombrerazonsocial);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016871CjtoVis_2ICtjoVis_3';
        dsItem.name = 'instalacion.nombre';
        dsItem.field = 'instalacion-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSP_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_2ICtjoVis_3',
            this.dsinstalaciondnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016871CjtoVis_2ICtjoVis_4';
        dsItem.name = 'estado';
        dsItem.field = 'estado';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 1;
        dsItem.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSP_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_2ICtjoVis_4',
            this.dsestado);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_ORDENTRABAJO_ESTADO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016871CjtoVis_2ICtjoVis_5';
        dsItem.name = 'fechaprevista';
        dsItem.field = 'fechaprevista';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSP_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_2ICtjoVis_5',
            this.dsfechaprevista);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016871CjtoVis_2ICtjoVis_6';
        dsItem.name = 'tipoorden';
        dsItem.field = 'tipoorden';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 1;
        dsItem.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSP_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_2ICtjoVis_6',
            this.dstipoorden);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_TIPOORDENTRABAJO;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the navigation items
     */
    public initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1699352150016871NavOfer_1ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_nav_N_OrdenTrabajoMD_item_Clas_1699352150016871NavOfer_1ElemNav_1',
            'Detalles');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Ordentrabajo.name;
        navItem.targetUI = ModelConstants.Ordentrabajo.mdiuuordentrabajo;
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
