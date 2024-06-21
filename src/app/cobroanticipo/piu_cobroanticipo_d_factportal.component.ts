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

export class CobroAnticipoPIUuCobroAnticipouDuFactPortalComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsidcobroanticipo = 'Código';
    private readonly dsfecha = 'Fecha';
    private readonly dsimporte = 'Importe';
    private readonly dsreferencia = 'Referencia';
    private readonly dsobservacions = 'Observaciones';
    private readonly dscancelado = 'Cancelado';
    private readonly dsmotivocancelacion = 'Motivo cancelación';
    private readonly dsesanticipo = 'Es anticipo';

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
        this.idXML = 'Clas_1699352150016875UIPobCl_2';
        this.className = ModelConstants.Cobroanticipo.name;
        this.iuName = 'PIU_CobroAnticipo_D_FactPortal';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_CobroAnticipo_piu_PIU_CobroAnticipo_D_FactPortal',
            'Cobros / Anticipos');
        this.queryURL = '/api/CobroAnticipoApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016875CjtoVis_1ICtjoVis_1';
        dsItem.name = 'idcobroanticipo';
        dsItem.field = 'idcobroanticipo';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_CobroAnticipo_ds_DS_CobroAnticipo_D_Fact_item_Clas_1699352150016875CjtoVis_1ICtjoVis_1',
            this.dsidcobroanticipo);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016875CjtoVis_1ICtjoVis_2';
        dsItem.name = 'fecha';
        dsItem.field = 'fecha';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_CobroAnticipo_ds_DS_CobroAnticipo_D_Fact_item_Clas_1699352150016875CjtoVis_1ICtjoVis_2',
            this.dsfecha);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016875CjtoVis_1ICtjoVis_3';
        dsItem.name = 'importe';
        dsItem.field = 'importe';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_CobroAnticipo_ds_DS_CobroAnticipo_D_Fact_item_Clas_1699352150016875CjtoVis_1ICtjoVis_3',
            this.dsimporte);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016875CjtoVis_1ICtjoVis_4';
        dsItem.name = 'referencia';
        dsItem.field = 'referencia';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_CobroAnticipo_ds_DS_CobroAnticipo_D_Fact_item_Clas_1699352150016875CjtoVis_1ICtjoVis_4',
            this.dsreferencia);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016875CjtoVis_1ICtjoVis_5';
        dsItem.name = 'observacions';
        dsItem.field = 'observacions';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_CobroAnticipo_ds_DS_CobroAnticipo_D_Fact_item_Clas_1699352150016875CjtoVis_1ICtjoVis_5',
            this.dsobservacions);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016875CjtoVis_1ICtjoVis_6';
        dsItem.name = 'cancelado';
        dsItem.field = 'cancelado';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_CobroAnticipo_ds_DS_CobroAnticipo_D_Fact_item_Clas_1699352150016875CjtoVis_1ICtjoVis_6',
            this.dscancelado);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_SI_NO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016875CjtoVis_1ICtjoVis_7';
        dsItem.name = 'motivocancelacion';
        dsItem.field = 'motivocancelacion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_CobroAnticipo_ds_DS_CobroAnticipo_D_Fact_item_Clas_1699352150016875CjtoVis_1ICtjoVis_7',
            this.dsmotivocancelacion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016875CjtoVis_1ICtjoVis_8';
        dsItem.name = 'esanticipo';
        dsItem.field = 'esanticipo';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_CobroAnticipo_ds_DS_CobroAnticipo_D_Fact_item_Clas_1699352150016875CjtoVis_1ICtjoVis_8',
            this.dsesanticipo);
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
