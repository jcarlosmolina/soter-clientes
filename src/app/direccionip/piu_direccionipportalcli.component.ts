import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
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

export class DireccionIPPIUuDireccionIPPortalCliComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsdireccionipattr = 'Dirección IP';
    private readonly dspuertos = 'Puertos';
    private readonly dsemplazamiento = 'Emplazamiento o zona que cubre';
    private readonly dsnumcanal = 'Nº de canal';
    private readonly dsreferenciaequipo = 'Referencia del equipo';

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
        this.idXML = 'Clas_1699352150016600UIPobCl_4';
        this.className = ModelConstants.Direccionip.name;
        this.iuName = 'PIU_DireccionIPPortalCli';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_DireccionIP_piu_PIU_DireccionIPPortalCli',
            'Direcciones IP');
        this.queryURL = '/api/DireccionIPApi/GetPopulationDynamic';
        this.paginationInClient = false;
        // Hide filter variables area depending on screen resolution
        this.hideFilters = this.appGlobalInfo.hideFilters;
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016600CjtoVis_2ICtjoVis_1';
        dsItem.name = 'direccionipattr';
        dsItem.field = 'direccionipattr';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_DireccionIP_ds_DSP_DireccionIP_item_Clas_1699352150016600CjtoVis_2ICtjoVis_1',
            this.dsdireccionipattr);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016600CjtoVis_2ICtjoVis_2';
        dsItem.name = 'puertos';
        dsItem.field = 'puertos';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_DireccionIP_ds_DSP_DireccionIP_item_Clas_1699352150016600CjtoVis_2ICtjoVis_2',
            this.dspuertos);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016600CjtoVis_2ICtjoVis_3';
        dsItem.name = 'emplazamiento';
        dsItem.field = 'emplazamiento';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_DireccionIP_ds_DSP_DireccionIP_item_Clas_1699352150016600CjtoVis_2ICtjoVis_3',
            this.dsemplazamiento);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016600CjtoVis_2ICtjoVis_4';
        dsItem.name = 'numcanal';
        dsItem.field = 'numcanal';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_DireccionIP_ds_DSP_DireccionIP_item_Clas_1699352150016600CjtoVis_2ICtjoVis_4',
            this.dsnumcanal);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016600CjtoVis_2ICtjoVis_5';
        dsItem.name = 'referenciaequipo';
        dsItem.field = 'referenciaequipo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_DireccionIP_ds_DSP_DireccionIP_item_Clas_1699352150016600CjtoVis_2ICtjoVis_5',
            this.dsreferenciaequipo);
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
