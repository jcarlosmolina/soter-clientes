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

export class LnOrdenTrabajoPIUuLnOrdenTrabajoParteElemsReComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsnombre = 'Nombre';
    private readonly dsnumserie = 'Nº serie';
    private readonly dstipoaccion = 'Tipo acción';
    private readonly dsrealizada = 'Realizada';
    private readonly dselementosistemadiduelementosistema = 'Id. elemento';
    private readonly dsdescaccion = 'Detalles acción';

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
        this.idXML = 'Clas_1699352150016291UIPobCl_4';
        this.className = ModelConstants.Lnordentrabajo.name;
        this.iuName = 'PIU_LnOrdenTrabajoParteElemsRe';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_LnOrdenTrabajo_piu_PIU_LnOrdenTrabajoParteElemsRe',
            'Elementos revisados');
        this.queryURL = '/api/LnOrdenTrabajoApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_4ICtjoVis_1';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParteElemRev_item_Clas_1699352150016291CjtoVis_4ICtjoVis_1',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_4ICtjoVis_2';
        dsItem.name = 'numserie';
        dsItem.field = 'numserie';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParteElemRev_item_Clas_1699352150016291CjtoVis_4ICtjoVis_2',
            this.dsnumserie);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_4ICtjoVis_3';
        dsItem.name = 'tipoaccion';
        dsItem.field = 'tipoaccion';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParteElemRev_item_Clas_1699352150016291CjtoVis_4ICtjoVis_3',
            this.dstipoaccion);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_TIPOACCIONLNORDEN;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_4ICtjoVis_4';
        dsItem.name = 'realizada';
        dsItem.field = 'realizada';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParteElemRev_item_Clas_1699352150016291CjtoVis_4ICtjoVis_4',
            this.dsrealizada);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_SI_NO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_4ICtjoVis_5';
        dsItem.name = 'elementosistema.id_elementosistema';
        dsItem.field = 'elementosistema-id_elementosistema';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParteElemRev_item_Clas_1699352150016291CjtoVis_4ICtjoVis_5',
            this.dselementosistemadiduelementosistema);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_4ICtjoVis_6';
        dsItem.name = 'descaccion';
        dsItem.field = 'descaccion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParteElemRev_item_Clas_1699352150016291CjtoVis_4ICtjoVis_6',
            this.dsdescaccion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the navigation items
     */
    public initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1699352150016291NavOfer_1ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_nav_N_LnOrdenTrabajoElemRev_item_Clas_1699352150016291NavOfer_1ElemNav_1',
            'Checklist');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Checklistot.name;
        navItem.targetUI = ModelConstants.Checklistot.mdiuuchecklistotutreeuparte;
        navItem.rolePath = 'LnOrdenTrabajo';
        this.navigations.push(navItem);

        navItem = new AccNavItem();
        navItem.id = 1;
        navItem.idXML = 'Clas_1699352150016291NavOfer_1ElemNav_2';
        navItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_nav_N_LnOrdenTrabajoElemRev_item_Clas_1699352150016291NavOfer_1ElemNav_2',
            'Elemento');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Elementosistema.name;
        navItem.targetUI = ModelConstants.Elementosistema.mdiuuelementosistema;
        navItem.rolePath = 'LnOrdenTrabajo';
        navItem.showInDefault = false;
        navItem.styleClass = 'accMDIUGrid';
        this.navigations.push(navItem);

    }

    /**
     * Initialize the order criterias
     */
    public initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
