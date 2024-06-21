import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { CodigoPostalFilterFuCodigoPostal} from './filters/codigopostalfilterfucodigopostal';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-codigopostal-p-codigospostales',
    templateUrl: './p_codigospostales.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodigoPostalPuCodigosPostalesComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dscp = 'Código Postal';

    /** Filters */
    public f0: CodigoPostalFilterFuCodigoPostal;

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
        this.idXML = 'Clas_1699352150016896UIPobCl_1';
        this.className = ModelConstants.Codigopostal.name;
        this.iuName = ModelConstants.Codigopostal.pucodigospostales;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_CodigoPostal_piu_P_CodigosPostales',
            'Códigos postales');
        this.f0 = new CodigoPostalFilterFuCodigoPostal(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun, usrFunc);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/CodigoPostalApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016896CjtoVis_1ICtjoVis_1';
        dsItem.name = 'cp';
        dsItem.field = 'cp';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 10;
        dsItem.alias = this.langMng.translateText(
            'cls_CodigoPostal_ds_DSP_CodigosPostales_item_Clas_1699352150016896CjtoVis_1ICtjoVis_1',
            this.dscp);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_CodigoPostal', value: 'Ordenar por'});
        this.orderCriteria = 'OC_CodigoPostal';
    }
}
