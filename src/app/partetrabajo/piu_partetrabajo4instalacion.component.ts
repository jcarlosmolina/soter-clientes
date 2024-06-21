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

export class ParteTrabajoPIUuParteTrabajo4InstalacionComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsordentrabajodinstalaciondclientednombrerazonsocial = 'Cliente';
    private readonly dsordentrabajodinstalaciondnombre = 'Instalación';
    private readonly dsidupartetrabajo = 'Nº parte';
    private readonly dsestado = 'Estado';
    private readonly dsfechainicio = 'Fecha inicio';
    private readonly dshorainicio = 'Hora inicio';
    private readonly dsfechafin = 'Fecha fin';
    private readonly dshorafin = 'Hora fin';
    private readonly dstecnicosconcat = 'Técnicos';

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
        this.idXML = 'Clas_1699352150016581UIPobCl_3';
        this.className = ModelConstants.Partetrabajo.name;
        this.iuName = 'PIU_ParteTrabajo4Instalacion';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_ParteTrabajo_piu_PIU_ParteTrabajo4Instalacion',
            'Partes de Trabajo');
        this.queryURL = '/api/ParteTrabajoApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016581CjtoVis_2ICtjoVis_1';
        dsItem.name = 'ordentrabajo.instalacion.cliente.nombrerazonsocial';
        dsItem.field = 'ordentrabajo-instalacion-cliente-nombrerazonsocial';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSP_ParteTrabajo_item_Clas_1699352150016581CjtoVis_2ICtjoVis_1',
            this.dsordentrabajodinstalaciondclientednombrerazonsocial);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016581CjtoVis_2ICtjoVis_2';
        dsItem.name = 'ordentrabajo.instalacion.nombre';
        dsItem.field = 'ordentrabajo-instalacion-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSP_ParteTrabajo_item_Clas_1699352150016581CjtoVis_2ICtjoVis_2',
            this.dsordentrabajodinstalaciondnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016581CjtoVis_2ICtjoVis_3';
        dsItem.name = 'id_partetrabajo';
        dsItem.field = 'id_partetrabajo';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSP_ParteTrabajo_item_Clas_1699352150016581CjtoVis_2ICtjoVis_3',
            this.dsidupartetrabajo);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.linkIndex = 0;
        dsItem.linkIsAction = false;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016581CjtoVis_2ICtjoVis_4';
        dsItem.name = 'estado';
        dsItem.field = 'estado';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 1;
        dsItem.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSP_ParteTrabajo_item_Clas_1699352150016581CjtoVis_2ICtjoVis_4',
            this.dsestado);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_PARTETRABAJO_ESTADO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016581CjtoVis_2ICtjoVis_5';
        dsItem.name = 'fechainicio';
        dsItem.field = 'fechainicio';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSP_ParteTrabajo_item_Clas_1699352150016581CjtoVis_2ICtjoVis_5',
            this.dsfechainicio);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016581CjtoVis_2ICtjoVis_6';
        dsItem.name = 'horainicio';
        dsItem.field = 'horainicio';
        dsItem.type = Field.dtTime;
        dsItem.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSP_ParteTrabajo_item_Clas_1699352150016581CjtoVis_2ICtjoVis_6',
            this.dshorainicio);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016581CjtoVis_2ICtjoVis_7';
        dsItem.name = 'fechafin';
        dsItem.field = 'fechafin';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSP_ParteTrabajo_item_Clas_1699352150016581CjtoVis_2ICtjoVis_7',
            this.dsfechafin);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016581CjtoVis_2ICtjoVis_8';
        dsItem.name = 'horafin';
        dsItem.field = 'horafin';
        dsItem.type = Field.dtTime;
        dsItem.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSP_ParteTrabajo_item_Clas_1699352150016581CjtoVis_2ICtjoVis_8',
            this.dshorafin);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016581CjtoVis_2ICtjoVis_9';
        dsItem.name = 'tecnicosconcat';
        dsItem.field = 'tecnicosconcat';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSP_ParteTrabajo_item_Clas_1699352150016581CjtoVis_2ICtjoVis_9',
            this.dstecnicosconcat);
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
        navItem.idXML = 'Clas_1699352150016581NavOfer_1ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_ParteTrabajo_nav_N_ParteTrabajoMD_item_Clas_1699352150016581NavOfer_1ElemNav_1',
            'Detalles');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Partetrabajo.name;
        navItem.targetUI = ModelConstants.Partetrabajo.mdiuupartetrabajo;
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
