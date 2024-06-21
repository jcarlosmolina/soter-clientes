import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

export class ComprobacionOTPIUuComprobacionOTuMuPortalCliComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsgrupocompotdnombre = '';
    private readonly dstexto = '';
    private readonly dsresultado = 'Resultado';
    private readonly dsobservaciones = 'Observaciones';
    private readonly dscompletada = 'Completada';

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
        this.idXML = 'Clas_1699352150016031UIPobCl_6';
        this.className = ModelConstants.Comprobacionot.name;
        this.iuName = 'PIU_ComprobacionOT_M_PortalCli';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_ComprobacionOT_piu_PIU_ComprobacionOT_M_PortalCli',
            'Comprobaciones');
        this.queryURL = '/api/ComprobacionOTApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016031CjtoVis_1ICtjoVis_1';
        dsItem.name = 'grupocompot.nombre';
        dsItem.field = 'grupocompot-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_ComprobacionOT_ds_DSP_ComprobacionOT_Parte_item_Clas_1699352150016031CjtoVis_1ICtjoVis_1',
            this.dsgrupocompotdnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016031CjtoVis_1ICtjoVis_2';
        dsItem.name = 'texto';
        dsItem.field = 'texto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_ComprobacionOT_ds_DSP_ComprobacionOT_Parte_item_Clas_1699352150016031CjtoVis_1ICtjoVis_2',
            this.dstexto);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016031CjtoVis_1ICtjoVis_3';
        dsItem.name = 'resultado';
        dsItem.field = 'resultado';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_ComprobacionOT_ds_DSP_ComprobacionOT_Parte_item_Clas_1699352150016031CjtoVis_1ICtjoVis_3',
            this.dsresultado);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016031CjtoVis_1ICtjoVis_4';
        dsItem.name = 'observaciones';
        dsItem.field = 'observaciones';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_ComprobacionOT_ds_DSP_ComprobacionOT_Parte_item_Clas_1699352150016031CjtoVis_1ICtjoVis_4',
            this.dsobservaciones);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.styleClass = 'beginNewLine';
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016031CjtoVis_1ICtjoVis_5';
        dsItem.name = 'completada';
        dsItem.field = 'completada';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_ComprobacionOT_ds_DSP_ComprobacionOT_Parte_item_Clas_1699352150016031CjtoVis_1ICtjoVis_5',
            this.dscompletada);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_SI_NO;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
