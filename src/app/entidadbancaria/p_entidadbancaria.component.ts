import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { EntidadBancariaFilterFuEntidadBancaria} from './filters/entidadbancariafilterfuentidadbancaria';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-entidadbancaria-p-entidadbancaria',
    templateUrl: './p_entidadbancaria.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntidadBancariaPuEntidadBancariaComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsiduentidadbancaria = 'Cód. Banco';
    private readonly dsnombre = 'Nombre';
    private readonly dscodacreedor = 'Código acreedor';

    /** Filters */
    public f0: EntidadBancariaFilterFuEntidadBancaria;

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
        this.idXML = 'Clas_1699352150016280UIPobCl_1';
        this.className = ModelConstants.Entidadbancaria.name;
        this.iuName = ModelConstants.Entidadbancaria.puentidadbancaria;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_EntidadBancaria_piu_P_EntidadBancaria',
            'Entidades bancarias');
        this.f0 = new EntidadBancariaFilterFuEntidadBancaria(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun, usrFunc);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/EntidadBancariaApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016280CjtoVis_1ICtjoVis_1';
        dsItem.name = 'id_entidadbancaria';
        dsItem.field = 'id_entidadbancaria';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 5;
        dsItem.alias = this.langMng.translateText(
            'cls_EntidadBancaria_ds_DSP_EntidadBancaria_item_Clas_1699352150016280CjtoVis_1ICtjoVis_1',
            this.dsiduentidadbancaria);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016280CjtoVis_1ICtjoVis_2';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_EntidadBancaria_ds_DSP_EntidadBancaria_item_Clas_1699352150016280CjtoVis_1ICtjoVis_2',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016280CjtoVis_1ICtjoVis_3';
        dsItem.name = 'codacreedor';
        dsItem.field = 'codacreedor';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 3;
        dsItem.alias = this.langMng.translateText(
            'cls_EntidadBancaria_ds_DSP_EntidadBancaria_item_Clas_1699352150016280CjtoVis_1ICtjoVis_3',
            this.dscodacreedor);
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
