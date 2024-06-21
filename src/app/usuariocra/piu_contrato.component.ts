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

export class UsuarioCRAPIUuContratoComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsnombre = 'Nombre';
    private readonly dsclave = 'Clave';
    private readonly dsclavecoaccion = 'Clave coacción';
    private readonly dsparticion = 'Partición';

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
        this.idXML = 'Clas_1699352150016373UIPobCl_2';
        this.className = ModelConstants.Usuariocra.name;
        this.iuName = 'PIU_Contrato';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_UsuarioCRA_piu_PIU_Contrato',
            'Usuarios CRA');
        this.queryURL = '/api/UsuarioCRAApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016373CjtoVis_2ICtjoVis_1';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioCRA_ds_DSP_UsuarioCRA_item_Clas_1699352150016373CjtoVis_2ICtjoVis_1',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016373CjtoVis_2ICtjoVis_2';
        dsItem.name = 'clave';
        dsItem.field = 'clave';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioCRA_ds_DSP_UsuarioCRA_item_Clas_1699352150016373CjtoVis_2ICtjoVis_2',
            this.dsclave);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016373CjtoVis_2ICtjoVis_3';
        dsItem.name = 'clavecoaccion';
        dsItem.field = 'clavecoaccion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioCRA_ds_DSP_UsuarioCRA_item_Clas_1699352150016373CjtoVis_2ICtjoVis_3',
            this.dsclavecoaccion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016373CjtoVis_2ICtjoVis_4';
        dsItem.name = 'particion';
        dsItem.field = 'particion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioCRA_ds_DSP_UsuarioCRA_item_Clas_1699352150016373CjtoVis_2ICtjoVis_4',
            this.dsparticion);
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
