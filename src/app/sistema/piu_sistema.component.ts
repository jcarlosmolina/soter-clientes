import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
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

@Component({
    selector: 'imes-sistema-piu-sistema',
    templateUrl: './piu_sistema.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SistemaPIUuSistemaComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsinstalaciondclientednombrerazonsocial = 'Cliente';
    private readonly dsinstalaciondnombre = 'Instalación';
    private readonly dsidusistema = 'Código';
    private readonly dsnombre = 'Nombre';
    private readonly dsdescripcion = 'Descripción';
    private readonly dsmarcaddescripcion = 'Marca';
    private readonly dstiporiesgoddescripcion = 'Tipo de riesgo';
    private readonly dscradnombre = 'CRA';
    private readonly dsfechainstalacion = 'F. Instalación';

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
        this.idXML = 'Clas_1699352150016718UIPobCl_1';
        this.className = ModelConstants.Sistema.name;
        this.iuName = ModelConstants.Sistema.piuusistema;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Sistema_piu_PIU_Sistema',
            'Sistemas');
        this.queryURL = '/api/SistemaApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016718CjtoVis_1ICtjoVis_1';
        dsItem.name = 'instalacion.cliente.nombrerazonsocial';
        dsItem.field = 'instalacion-cliente-nombrerazonsocial';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSP_Sistema_item_Clas_1699352150016718CjtoVis_1ICtjoVis_1',
            this.dsinstalaciondclientednombrerazonsocial);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016718CjtoVis_1ICtjoVis_2';
        dsItem.name = 'instalacion.nombre';
        dsItem.field = 'instalacion-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSP_Sistema_item_Clas_1699352150016718CjtoVis_1ICtjoVis_2',
            this.dsinstalaciondnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016718CjtoVis_1ICtjoVis_3';
        dsItem.name = 'id_sistema';
        dsItem.field = 'id_sistema';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSP_Sistema_item_Clas_1699352150016718CjtoVis_1ICtjoVis_3',
            this.dsidusistema);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016718CjtoVis_1ICtjoVis_4';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSP_Sistema_item_Clas_1699352150016718CjtoVis_1ICtjoVis_4',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.linkIndex = 0;
        dsItem.linkIsAction = false;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016718CjtoVis_1ICtjoVis_5';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSP_Sistema_item_Clas_1699352150016718CjtoVis_1ICtjoVis_5',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016718CjtoVis_1ICtjoVis_6';
        dsItem.name = 'marca.descripcion';
        dsItem.field = 'marca-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSP_Sistema_item_Clas_1699352150016718CjtoVis_1ICtjoVis_6',
            this.dsmarcaddescripcion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016718CjtoVis_1ICtjoVis_7';
        dsItem.name = 'tiporiesgo.descripcion';
        dsItem.field = 'tiporiesgo-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSP_Sistema_item_Clas_1699352150016718CjtoVis_1ICtjoVis_7',
            this.dstiporiesgoddescripcion);
        dsItem.agents = [];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016718CjtoVis_1ICtjoVis_8';
        dsItem.name = 'cra.nombre';
        dsItem.field = 'cra-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSP_Sistema_item_Clas_1699352150016718CjtoVis_1ICtjoVis_8',
            this.dscradnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016718CjtoVis_1ICtjoVis_9';
        dsItem.name = 'fechainstalacion';
        dsItem.field = 'fechainstalacion';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSP_Sistema_item_Clas_1699352150016718CjtoVis_1ICtjoVis_9',
            this.dsfechainstalacion);
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
        accItem.idXML = 'Clas_1699352150016718AccOfer_1ElemAcc_6';
        accItem.alias = this.langMng.translateText(
            'cls_Sistema_act_APIU_Sistema_item_Clas_1699352150016718AccOfer_1ElemAcc_6',
            'Tal como se instaló');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Cliente.name];
        accItem.targetClass = ModelConstants.Sistema.name;
        accItem.targetUI = ModelConstants.Sistema.siuutimprimir;
        accItem.setDirectDownloadProperties('TIMPRIMIR', 'p_thissistema_oid', 'poutfichero', 'poutnombrefichero');

        this.actions.push(accItem);

    }

    /**
     * Initialize the navigation items
     */
    public initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1699352150016718NavOfer_1ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_Sistema_nav_N_SistemaMD_item_Clas_1699352150016718NavOfer_1ElemNav_1',
            'Detalles');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Sistema.name;
        navItem.targetUI = ModelConstants.Sistema.mdiuusistema;
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
