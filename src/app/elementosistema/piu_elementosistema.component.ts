import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { ElementoSistemaFilterFuElementoSistema} from './filters/elementosistemafilterfuelementosistema';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-elementosistema-piu-elementosistema',
    templateUrl: './piu_elementosistema.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementoSistemaPIUuElementoSistemaComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsiduelementosistema = 'Código';
    private readonly dstipoelementoddescripcion = 'Tipo de elemento';
    private readonly dsnombre = 'Nombre';
    private readonly dsdescripcion = 'Descripción';
    private readonly dsnumserieplaca = 'Número de serie/placa';
    private readonly dsreferencia = 'Referencia';
    private readonly dsmodelosistemaddescripcion = 'Modelo';
    private readonly dsactivo = 'Activo';

    /** Filters */
    public f0: ElementoSistemaFilterFuElementoSistema;

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
        this.idXML = 'Clas_1699352150016898UIPobCl_1';
        this.className = ModelConstants.Elementosistema.name;
        this.iuName = ModelConstants.Elementosistema.piuuelementosistema;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_ElementoSistema_piu_PIU_ElementoSistema',
            'Elementos');
        this.f0 = new ElementoSistemaFilterFuElementoSistema(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun, usrFunc);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/ElementoSistemaApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016898CjtoVis_2ICtjoVis_1';
        dsItem.name = 'id_elementosistema';
        dsItem.field = 'id_elementosistema';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSP_ElementoSistema_item_Clas_1699352150016898CjtoVis_2ICtjoVis_1',
            this.dsiduelementosistema);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016898CjtoVis_2ICtjoVis_2';
        dsItem.name = 'tipoelemento.descripcion';
        dsItem.field = 'tipoelemento-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSP_ElementoSistema_item_Clas_1699352150016898CjtoVis_2ICtjoVis_2',
            this.dstipoelementoddescripcion);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.linkIndex = 0;
        dsItem.linkIsAction = false;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016898CjtoVis_2ICtjoVis_3';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSP_ElementoSistema_item_Clas_1699352150016898CjtoVis_2ICtjoVis_3',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016898CjtoVis_2ICtjoVis_4';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSP_ElementoSistema_item_Clas_1699352150016898CjtoVis_2ICtjoVis_4',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016898CjtoVis_2ICtjoVis_5';
        dsItem.name = 'numserieplaca';
        dsItem.field = 'numserieplaca';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSP_ElementoSistema_item_Clas_1699352150016898CjtoVis_2ICtjoVis_5',
            this.dsnumserieplaca);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016898CjtoVis_2ICtjoVis_6';
        dsItem.name = 'referencia';
        dsItem.field = 'referencia';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSP_ElementoSistema_item_Clas_1699352150016898CjtoVis_2ICtjoVis_6',
            this.dsreferencia);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016898CjtoVis_2ICtjoVis_7';
        dsItem.name = 'modelosistema.descripcion';
        dsItem.field = 'modelosistema-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSP_ElementoSistema_item_Clas_1699352150016898CjtoVis_2ICtjoVis_7',
            this.dsmodelosistemaddescripcion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016898CjtoVis_2ICtjoVis_8';
        dsItem.name = 'activo';
        dsItem.field = 'activo';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSP_ElementoSistema_item_Clas_1699352150016898CjtoVis_2ICtjoVis_8',
            this.dsactivo);
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
        navItem.idXML = 'Clas_1699352150016898NavOfer_1ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_ElementoSistema_nav_N_ElementoSistemaMD_item_Clas_1699352150016898NavOfer_1ElemNav_1',
            'Detalles');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Elementosistema.name;
        navItem.targetUI = ModelConstants.Elementosistema.mdiuuelementosistema;
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
