import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { PaisFilterFuPais} from './filters/paisfilterfupais';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-pais-p-paises',
    templateUrl: './p_paises.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaisPuPaisesComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsidupais = 'Código';
    private readonly dsnombre = 'Nombre';

    /** Filters */
    public f0: PaisFilterFuPais;

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
        this.idXML = 'Clas_1699352150016683UIPobCl_1';
        this.className = ModelConstants.Pais.name;
        this.iuName = ModelConstants.Pais.pupaises;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Pais_piu_P_Paises',
            'Pais');
        this.f0 = new PaisFilterFuPais(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun, usrFunc);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/PaisApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016683CjtoVis_1ICtjoVis_1';
        dsItem.name = 'id_pais';
        dsItem.field = 'id_pais';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 10;
        dsItem.alias = this.langMng.translateText(
            'cls_Pais_ds_DSP_Pais_item_Clas_1699352150016683CjtoVis_1ICtjoVis_1',
            this.dsidupais);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016683CjtoVis_1ICtjoVis_2';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Pais_ds_DSP_Pais_item_Clas_1699352150016683CjtoVis_1ICtjoVis_2',
            this.dsnombre);
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
