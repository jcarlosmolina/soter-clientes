import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { InstalacionFilterFuInstalacion} from './filters/instalacionfilterfuinstalacion';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-instalacion-piu-instalaciondef',
    templateUrl: './piu_instalaciondef.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstalacionPIUuInstalacionDefComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsiduinstalacion = 'Código';
    private readonly dsnombre = 'Nombre';
    private readonly dsdireccion = 'Dirección';
    private readonly dsmunicipiodnombre = 'Municipio';
    private readonly dszonadnombre = 'Zona';
    private readonly dstelefono = 'Teléfono';

    /** Filters */
    public f0: InstalacionFilterFuInstalacion;

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
        this.idXML = 'Clas_1699352150016405UIPobCl_3';
        this.className = ModelConstants.Instalacion.name;
        this.iuName = ModelConstants.Instalacion.piuuinstalaciondef;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Instalacion_piu_PIU_InstalacionDef',
            'Instalaciones');
        this.f0 = new InstalacionFilterFuInstalacion(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun, usrFunc);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/InstalacionApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016405CjtoVis_2ICtjoVis_1';
        dsItem.name = 'id_instalacion';
        dsItem.field = 'id_instalacion';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSP_Instalacion_item_Clas_1699352150016405CjtoVis_2ICtjoVis_1',
            this.dsiduinstalacion);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.linkIndex = 0;
        dsItem.linkIsAction = false;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016405CjtoVis_2ICtjoVis_2';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSP_Instalacion_item_Clas_1699352150016405CjtoVis_2ICtjoVis_2',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016405CjtoVis_2ICtjoVis_3';
        dsItem.name = 'direccion';
        dsItem.field = 'direccion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSP_Instalacion_item_Clas_1699352150016405CjtoVis_2ICtjoVis_3',
            this.dsdireccion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016405CjtoVis_2ICtjoVis_4';
        dsItem.name = 'municipio.nombre';
        dsItem.field = 'municipio-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSP_Instalacion_item_Clas_1699352150016405CjtoVis_2ICtjoVis_4',
            this.dsmunicipiodnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016405CjtoVis_2ICtjoVis_5';
        dsItem.name = 'zona.nombre';
        dsItem.field = 'zona-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSP_Instalacion_item_Clas_1699352150016405CjtoVis_2ICtjoVis_5',
            this.dszonadnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016405CjtoVis_2ICtjoVis_6';
        dsItem.name = 'telefono';
        dsItem.field = 'telefono';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSP_Instalacion_item_Clas_1699352150016405CjtoVis_2ICtjoVis_6',
            this.dstelefono);
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
        navItem.idXML = 'Clas_1699352150016405NavOfer_1ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_Instalacion_nav_N_InstalacionMD_item_Clas_1699352150016405NavOfer_1ElemNav_1',
            'Detalles');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Instalacion.name;
        navItem.targetUI = ModelConstants.Instalacion.mdiuuinstalacion;
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
