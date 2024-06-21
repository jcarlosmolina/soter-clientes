import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { MunicipioFilterFuMunicipio} from './filters/municipiofilterfumunicipio';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-municipio-p-municipios',
    templateUrl: './p_municipios.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MunicipioPuMunicipiosComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsidumunicipio = 'Código';
    private readonly dsnombre = 'Nombre';
    private readonly dsprovinciadnombre = 'Província';
    private readonly dspaisdnombre = 'País';

    /** Filters */
    public f0: MunicipioFilterFuMunicipio;

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
        this.idXML = 'Clas_1699352150016603UIPobCl_1';
        this.className = ModelConstants.Municipio.name;
        this.iuName = ModelConstants.Municipio.pumunicipios;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Municipio_piu_P_Municipios',
            'Municipios');
        this.f0 = new MunicipioFilterFuMunicipio(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun, usrFunc);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/MunicipioApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016603CjtoVis_1ICtjoVis_1';
        dsItem.name = 'id_municipio';
        dsItem.field = 'id_municipio';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_Municipio_ds_DSP_Municipio_item_Clas_1699352150016603CjtoVis_1ICtjoVis_1',
            this.dsidumunicipio);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016603CjtoVis_1ICtjoVis_2';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Municipio_ds_DSP_Municipio_item_Clas_1699352150016603CjtoVis_1ICtjoVis_2',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016603CjtoVis_1ICtjoVis_3';
        dsItem.name = 'provincia.nombre';
        dsItem.field = 'provincia-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Municipio_ds_DSP_Municipio_item_Clas_1699352150016603CjtoVis_1ICtjoVis_3',
            this.dsprovinciadnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016603CjtoVis_1ICtjoVis_4';
        dsItem.name = 'pais.nombre';
        dsItem.field = 'pais-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Municipio_ds_DSP_Municipio_item_Clas_1699352150016603CjtoVis_1ICtjoVis_4',
            this.dspaisdnombre);
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
        accItem.idXML = 'Clas_1699352150016603AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Municipio_act_AP_Municipio_item_Clas_1699352150016603AccOfer_1ElemAcc_3',
            'Códigos Postales');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Cliente.name];
        accItem.targetClass = ModelConstants.Municipio.name;
        accItem.targetUI = ModelConstants.Municipio.mdumunicipios;

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
