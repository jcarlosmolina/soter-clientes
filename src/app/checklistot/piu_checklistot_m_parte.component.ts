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

export class CheckListOTPIUuCheckListOTuMuParteComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsfinalizado = 'Finalizado';
    private readonly dsfechafinalizacion = 'Fecha finalización';
    private readonly dslnordentrabajodorden = 'Orden';
    private readonly dslnordentrabajodnumserie = 'Nº serie';
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
        this.idXML = 'Clas_1699352150016855UIPobCl_1';
        this.className = ModelConstants.Checklistot.name;
        this.iuName = 'PIU_CheckListOT_M_Parte';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_CheckListOT_piu_PIU_CheckListOT_M_Parte',
            'Check list');
        this.queryURL = '/api/CheckListOTApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016855CjtoVis_5ICtjoVis_1';
        dsItem.name = 'finalizado';
        dsItem.field = 'finalizado';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_CheckListOT_ds_DSP_CheckListOT_M_Parte_item_Clas_1699352150016855CjtoVis_5ICtjoVis_1',
            this.dsfinalizado);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_SI_NO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016855CjtoVis_5ICtjoVis_2';
        dsItem.name = 'fechafinalizacion';
        dsItem.field = 'fechafinalizacion';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_CheckListOT_ds_DSP_CheckListOT_M_Parte_item_Clas_1699352150016855CjtoVis_5ICtjoVis_2',
            this.dsfechafinalizacion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016855CjtoVis_5ICtjoVis_3';
        dsItem.name = 'lnordentrabajo.orden';
        dsItem.field = 'lnordentrabajo-orden';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_CheckListOT_ds_DSP_CheckListOT_M_Parte_item_Clas_1699352150016855CjtoVis_5ICtjoVis_3',
            this.dslnordentrabajodorden);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016855CjtoVis_5ICtjoVis_4';
        dsItem.name = 'lnordentrabajo.numserie';
        dsItem.field = 'lnordentrabajo-numserie';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_CheckListOT_ds_DSP_CheckListOT_M_Parte_item_Clas_1699352150016855CjtoVis_5ICtjoVis_4',
            this.dslnordentrabajodnumserie);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016855CjtoVis_5ICtjoVis_5';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_CheckListOT_ds_DSP_CheckListOT_M_Parte_item_Clas_1699352150016855CjtoVis_5ICtjoVis_5',
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
