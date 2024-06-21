import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { AvisoFilterFuAvisoPortalCli} from './filters/avisofilterfuavisoportalcli';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-aviso-piu-avisoportalcli',
    templateUrl: './piu_avisoportalcli.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvisoPIUuAvisoPortalCliComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsinstalaciondnombre = 'Instalación';
    private readonly dsfechahora = 'Fecha';
    private readonly dstitulo = 'Título';
    private readonly dsurgencia = 'Urgencia';
    private readonly dsestado = 'Estado';
    private readonly dsfechahoracierre = 'Fecha cierre';
    private readonly dsdescripcion = 'Descripción';
    private readonly dsrespuesta = 'Respuesta';

    /** Filters */
    public f0: AvisoFilterFuAvisoPortalCli;

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
        this.idXML = 'Clas_1702835912704292UIPobCl_1';
        this.className = ModelConstants.Aviso.name;
        this.iuName = ModelConstants.Aviso.piuuavisoportalcli;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Aviso_piu_PIU_AvisoPortalCli',
            'Avisos');
        this.f0 = new AvisoFilterFuAvisoPortalCli(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun, usrFunc);
        this.f0.populationContainer = this;
        this.f0.assignedOrderCriteria = 'OC_Aviso';
        this.filters.push(this.f0);
        this.queryURL = '/api/AvisoApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1702835912704292CjtoVis_2ICtjoVis_1';
        dsItem.name = 'instalacion.nombre';
        dsItem.field = 'instalacion-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Aviso_ds_DSP_AvisoPortalCli_item_Clas_1702835912704292CjtoVis_2ICtjoVis_1',
            this.dsinstalaciondnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1702835912704292CjtoVis_2ICtjoVis_2';
        dsItem.name = 'fechahora';
        dsItem.field = 'fechahora';
        dsItem.type = Field.dtDatetime;
        dsItem.alias = this.langMng.translateText(
            'cls_Aviso_ds_DSP_AvisoPortalCli_item_Clas_1702835912704292CjtoVis_2ICtjoVis_2',
            this.dsfechahora);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1702835912704292CjtoVis_2ICtjoVis_3';
        dsItem.name = 'titulo';
        dsItem.field = 'titulo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Aviso_ds_DSP_AvisoPortalCli_item_Clas_1702835912704292CjtoVis_2ICtjoVis_3',
            this.dstitulo);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1702835912704292CjtoVis_2ICtjoVis_4';
        dsItem.name = 'urgencia';
        dsItem.field = 'urgencia';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 2;
        dsItem.alias = this.langMng.translateText(
            'cls_Aviso_ds_DSP_AvisoPortalCli_item_Clas_1702835912704292CjtoVis_2ICtjoVis_4',
            this.dsurgencia);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_TAREA_URGENCIA;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1702835912704292CjtoVis_2ICtjoVis_5';
        dsItem.name = 'estado';
        dsItem.field = 'estado';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 1;
        dsItem.alias = this.langMng.translateText(
            'cls_Aviso_ds_DSP_AvisoPortalCli_item_Clas_1702835912704292CjtoVis_2ICtjoVis_5',
            this.dsestado);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_ESTADOAVISO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1702835912704292CjtoVis_2ICtjoVis_6';
        dsItem.name = 'fechahoracierre';
        dsItem.field = 'fechahoracierre';
        dsItem.type = Field.dtDatetime;
        dsItem.alias = this.langMng.translateText(
            'cls_Aviso_ds_DSP_AvisoPortalCli_item_Clas_1702835912704292CjtoVis_2ICtjoVis_6',
            this.dsfechahoracierre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1702835912704292CjtoVis_2ICtjoVis_7';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtText;
        dsItem.alias = this.langMng.translateText(
            'cls_Aviso_ds_DSP_AvisoPortalCli_item_Clas_1702835912704292CjtoVis_2ICtjoVis_7',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1702835912704292CjtoVis_2ICtjoVis_8';
        dsItem.name = 'respuesta';
        dsItem.field = 'respuesta';
        dsItem.type = Field.dtText;
        dsItem.alias = this.langMng.translateText(
            'cls_Aviso_ds_DSP_AvisoPortalCli_item_Clas_1702835912704292CjtoVis_2ICtjoVis_8',
            this.dsrespuesta);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1702835912704292AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Aviso_act_AP_Aviso_PortalCli_item_Clas_1702835912704292AccOfer_1ElemAcc_1',
            'Reportar aviso');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Cliente.name];
        accItem.targetClass = ModelConstants.Aviso.name;
        accItem.targetUI = ModelConstants.Aviso.siuutcrear;

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_Aviso', value: 'OC_Aviso_FechaDesc'});
        this.orderCriteria = 'OC_Aviso';
    }
}
