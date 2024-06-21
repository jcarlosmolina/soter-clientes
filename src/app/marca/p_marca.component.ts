import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { MarcaFilterFuMarca} from './filters/marcafilterfumarca';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-marca-p-marca',
    templateUrl: './p_marca.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarcaPuMarcaComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsidumarca = 'Código';
    private readonly dsdescripcion = 'Descripción';
    private readonly dspaginaweb = 'Página web';
    private readonly dsobservacions = 'Observaciones';

    /** Filters */
    public f0: MarcaFilterFuMarca;

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
        this.idXML = 'Clas_1699352150016930UIPobCl_1';
        this.className = ModelConstants.Marca.name;
        this.iuName = ModelConstants.Marca.pumarca;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Marca_piu_P_Marca',
            'Marcas de sistema');
        this.f0 = new MarcaFilterFuMarca(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun, usrFunc);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/MarcaApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016930CjtoVis_1ICtjoVis_1';
        dsItem.name = 'id_marca';
        dsItem.field = 'id_marca';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_Marca_ds_DSP_Marca_item_Clas_1699352150016930CjtoVis_1ICtjoVis_1',
            this.dsidumarca);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016930CjtoVis_1ICtjoVis_2';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Marca_ds_DSP_Marca_item_Clas_1699352150016930CjtoVis_1ICtjoVis_2',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016930CjtoVis_1ICtjoVis_3';
        dsItem.name = 'paginaweb';
        dsItem.field = 'paginaweb';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Marca_ds_DSP_Marca_item_Clas_1699352150016930CjtoVis_1ICtjoVis_3',
            this.dspaginaweb);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016930CjtoVis_1ICtjoVis_4';
        dsItem.name = 'observacions';
        dsItem.field = 'observacions';
        dsItem.type = Field.dtText;
        dsItem.alias = this.langMng.translateText(
            'cls_Marca_ds_DSP_Marca_item_Clas_1699352150016930CjtoVis_1ICtjoVis_4',
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
