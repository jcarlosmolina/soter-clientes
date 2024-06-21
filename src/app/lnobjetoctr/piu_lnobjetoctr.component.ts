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
    selector: 'imes-lnobjetoctr-piu-lnobjetoctr',
    templateUrl: './piu_lnobjetoctr.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LnObjetoCtrPIUuLnObjetoCtrComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsobjetocontratodiduobjetocontrato = 'Cod';
    private readonly dsbaseimponible = 'Base imp';
    private readonly dsporcendescuento = '% Dto';
    private readonly dsdescuento = 'Dto';
    private readonly dsiva = 'IVA';
    private readonly dsrecargoequivalencia = 'Rec equiv';
    private readonly dsimporte = 'Importe';
    private readonly dsnombreobjeto = 'Nombre';

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
        this.idXML = 'Clas_1699352150016018UIPobCl_1';
        this.className = ModelConstants.Lnobjetoctr.name;
        this.iuName = ModelConstants.Lnobjetoctr.piuulnobjetoctr;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_LnObjetoCtr_piu_PIU_LnObjetoCtr',
            'Objetos');
        this.queryURL = '/api/LnObjetoCtrApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016018CjtoVis_2ICtjoVis_1';
        dsItem.name = 'objetocontrato.id_objetocontrato';
        dsItem.field = 'objetocontrato-id_objetocontrato';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 4;
        dsItem.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DSP_LnObjetoCtr_item_Clas_1699352150016018CjtoVis_2ICtjoVis_1',
            this.dsobjetocontratodiduobjetocontrato);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016018CjtoVis_2ICtjoVis_2';
        dsItem.name = 'baseimponible';
        dsItem.field = 'baseimponible';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DSP_LnObjetoCtr_item_Clas_1699352150016018CjtoVis_2ICtjoVis_2',
            this.dsbaseimponible);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016018CjtoVis_2ICtjoVis_3';
        dsItem.name = 'porcendescuento';
        dsItem.field = 'porcendescuento';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DSP_LnObjetoCtr_item_Clas_1699352150016018CjtoVis_2ICtjoVis_3',
            this.dsporcendescuento);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016018CjtoVis_2ICtjoVis_4';
        dsItem.name = 'descuento';
        dsItem.field = 'descuento';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DSP_LnObjetoCtr_item_Clas_1699352150016018CjtoVis_2ICtjoVis_4',
            this.dsdescuento);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016018CjtoVis_2ICtjoVis_5';
        dsItem.name = 'iva';
        dsItem.field = 'iva';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DSP_LnObjetoCtr_item_Clas_1699352150016018CjtoVis_2ICtjoVis_5',
            this.dsiva);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016018CjtoVis_2ICtjoVis_6';
        dsItem.name = 'recargoequivalencia';
        dsItem.field = 'recargoequivalencia';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DSP_LnObjetoCtr_item_Clas_1699352150016018CjtoVis_2ICtjoVis_6',
            this.dsrecargoequivalencia);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016018CjtoVis_2ICtjoVis_7';
        dsItem.name = 'importe';
        dsItem.field = 'importe';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DSP_LnObjetoCtr_item_Clas_1699352150016018CjtoVis_2ICtjoVis_7',
            this.dsimporte);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016018CjtoVis_2ICtjoVis_8';
        dsItem.name = 'nombreobjeto';
        dsItem.field = 'nombreobjeto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 25;
        dsItem.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DSP_LnObjetoCtr_item_Clas_1699352150016018CjtoVis_2ICtjoVis_8',
            this.dsnombreobjeto);
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
