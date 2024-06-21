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
    selector: 'imes-perfil-p-perfiles',
    templateUrl: './p_perfiles.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerfilPuPerfilesComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsiduperfil = 'Id';
    private readonly dsnombre = 'Nombre';

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
        this.idXML = 'Clas_1699352150016641UIPobCl_2';
        this.className = ModelConstants.Perfil.name;
        this.iuName = ModelConstants.Perfil.puperfiles;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, []));
        this.title = this.langMng.translateText('cls_Perfil_piu_P_Perfiles',
            'Perfiles');
        this.queryURL = '/api/PerfilApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016641CjtoVis_2ICtjoVis_1';
        dsItem.name = 'id_perfil';
        dsItem.field = 'id_perfil';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_Perfil_ds_DSP_Perfil_item_Clas_1699352150016641CjtoVis_2ICtjoVis_1',
            this.dsiduperfil);
        dsItem.agents = [];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016641CjtoVis_2ICtjoVis_2';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Perfil_ds_DSP_Perfil_item_Clas_1699352150016641CjtoVis_2ICtjoVis_2',
            this.dsnombre);
        dsItem.agents = [];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_Perfil', value: 'OC_Perfil'});
        this.orderCriteria = 'OC_Perfil';
    }
}
