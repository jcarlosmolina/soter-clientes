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

export class ServicioPIUuServiciosPortalCliComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dstiposervicioddescripcion = 'Tipo del servicio';
    private readonly dstipotransmisor = 'Tipo de transmisor';
    private readonly dsnumero = 'Número';

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
        this.idXML = 'Clas_1699352150016551UIPobCl_4';
        this.className = ModelConstants.Servicio.name;
        this.iuName = 'PIU_ServiciosPortalCli';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Servicio_piu_PIU_ServiciosPortalCli',
            'Servicios');
        this.queryURL = '/api/ServicioApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016551CjtoVis_1ICtjoVis_1';
        dsItem.name = 'tiposervicio.descripcion';
        dsItem.field = 'tiposervicio-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Servicio_ds_DSP_Servicio_item_Clas_1699352150016551CjtoVis_1ICtjoVis_1',
            this.dstiposervicioddescripcion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016551CjtoVis_1ICtjoVis_2';
        dsItem.name = 'tipotransmisor';
        dsItem.field = 'tipotransmisor';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Servicio_ds_DSP_Servicio_item_Clas_1699352150016551CjtoVis_1ICtjoVis_2',
            this.dstipotransmisor);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016551CjtoVis_1ICtjoVis_3';
        dsItem.name = 'numero';
        dsItem.field = 'numero';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Servicio_ds_DSP_Servicio_item_Clas_1699352150016551CjtoVis_1ICtjoVis_3',
            this.dsnumero);
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
