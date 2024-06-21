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
    selector: 'imes-partetrabajo-piu-partetrabajoportalcli',
    templateUrl: './piu_partetrabajoportalcli.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParteTrabajoPIUuParteTrabajoPortalCliComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsordentrabajodinstalaciondnombre = 'Instalación';
    private readonly dsidupartetrabajo = 'Nº parte';
    private readonly dsestado = 'Estado';
    private readonly dsfechainicioreal = 'Fecha inicio';
    private readonly dshorainicioreal = 'Hora inicio';
    private readonly dsfechafinreal = 'Fecha fin';
    private readonly dshorafinreal = 'Hora fin';
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
        this.idXML = 'Clas_1699352150016581UIPobCl_9';
        this.className = ModelConstants.Partetrabajo.name;
        this.iuName = ModelConstants.Partetrabajo.piuupartetrabajoportalcli;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_ParteTrabajo_piu_PIU_ParteTrabajoPortalCli',
            'Partes de trabajo');
        this.queryURL = '/api/ParteTrabajoApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016581CjtoVis_14ICtjoVis_2';
        dsItem.name = 'ordentrabajo.instalacion.nombre';
        dsItem.field = 'ordentrabajo-instalacion-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSP_ParteTrabajoPortalCli_item_Clas_1699352150016581CjtoVis_14ICtjoVis_2',
            this.dsordentrabajodinstalaciondnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016581CjtoVis_14ICtjoVis_3';
        dsItem.name = 'id_partetrabajo';
        dsItem.field = 'id_partetrabajo';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSP_ParteTrabajoPortalCli_item_Clas_1699352150016581CjtoVis_14ICtjoVis_3',
            this.dsidupartetrabajo);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.linkIndex = 0;
        dsItem.linkIsAction = false;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016581CjtoVis_14ICtjoVis_4';
        dsItem.name = 'estado';
        dsItem.field = 'estado';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 1;
        dsItem.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSP_ParteTrabajoPortalCli_item_Clas_1699352150016581CjtoVis_14ICtjoVis_4',
            this.dsestado);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_PARTETRABAJO_ESTADO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016581CjtoVis_14ICtjoVis_10';
        dsItem.name = 'fechainicioreal';
        dsItem.field = 'fechainicioreal';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSP_ParteTrabajoPortalCli_item_Clas_1699352150016581CjtoVis_14ICtjoVis_10',
            this.dsfechainicioreal);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016581CjtoVis_14ICtjoVis_11';
        dsItem.name = 'horainicioreal';
        dsItem.field = 'horainicioreal';
        dsItem.type = Field.dtTime;
        dsItem.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSP_ParteTrabajoPortalCli_item_Clas_1699352150016581CjtoVis_14ICtjoVis_11',
            this.dshorainicioreal);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016581CjtoVis_14ICtjoVis_12';
        dsItem.name = 'fechafinreal';
        dsItem.field = 'fechafinreal';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSP_ParteTrabajoPortalCli_item_Clas_1699352150016581CjtoVis_14ICtjoVis_12',
            this.dsfechafinreal);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016581CjtoVis_14ICtjoVis_13';
        dsItem.name = 'horafinreal';
        dsItem.field = 'horafinreal';
        dsItem.type = Field.dtTime;
        dsItem.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSP_ParteTrabajoPortalCli_item_Clas_1699352150016581CjtoVis_14ICtjoVis_13',
            this.dshorafinreal);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016581CjtoVis_14ICtjoVis_9';
        dsItem.name = 'tecnicosconcat';
        dsItem.field = 'tecnicosconcat';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSP_ParteTrabajoPortalCli_item_Clas_1699352150016581CjtoVis_14ICtjoVis_9',
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
        navItem.idXML = 'Clas_1699352150016581NavOfer_4ElemNav_2';
        navItem.alias = this.langMng.translateText(
            'cls_ParteTrabajo_nav_N_ParteTrabajoPortalCli_item_Clas_1699352150016581NavOfer_4ElemNav_2',
            'Detalles');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Partetrabajo.name;
        navItem.targetUI = ModelConstants.Partetrabajo.mdiuupartetrabajoportalcli;
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
