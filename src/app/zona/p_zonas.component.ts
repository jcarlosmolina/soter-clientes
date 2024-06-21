import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { ZonaFilterFuZona} from './filters/zonafilterfuzona';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-zona-p-zonas',
    templateUrl: './p_zonas.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZonaPuZonasComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsiduzona = 'Código';
    private readonly dsmunicipiodnombre = 'Municipio';
    private readonly dsnombre = 'Nombre';
    private readonly dsdescripcion = 'Descripción';
    private readonly dsobservacions = 'Observaciones';

    /** Filters */
    public f0: ZonaFilterFuZona;

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
        this.idXML = 'Clas_1699352150016358UIPobCl_1';
        this.className = ModelConstants.Zona.name;
        this.iuName = ModelConstants.Zona.puzonas;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Zona_piu_P_Zonas',
            'Zonas');
        this.f0 = new ZonaFilterFuZona(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun, usrFunc);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/ZonaApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016358CjtoVis_1ICtjoVis_1';
        dsItem.name = 'id_zona';
        dsItem.field = 'id_zona';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_Zona_ds_DSP_Zona_item_Clas_1699352150016358CjtoVis_1ICtjoVis_1',
            this.dsiduzona);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016358CjtoVis_1ICtjoVis_2';
        dsItem.name = 'municipio.nombre';
        dsItem.field = 'municipio-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Zona_ds_DSP_Zona_item_Clas_1699352150016358CjtoVis_1ICtjoVis_2',
            this.dsmunicipiodnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016358CjtoVis_1ICtjoVis_3';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Zona_ds_DSP_Zona_item_Clas_1699352150016358CjtoVis_1ICtjoVis_3',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016358CjtoVis_1ICtjoVis_4';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 999;
        dsItem.alias = this.langMng.translateText(
            'cls_Zona_ds_DSP_Zona_item_Clas_1699352150016358CjtoVis_1ICtjoVis_4',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016358CjtoVis_1ICtjoVis_5';
        dsItem.name = 'observacions';
        dsItem.field = 'observacions';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 999;
        dsItem.alias = this.langMng.translateText(
            'cls_Zona_ds_DSP_Zona_item_Clas_1699352150016358CjtoVis_1ICtjoVis_5',
            this.dsobservacions);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
