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

export class LnOrdenTrabajoPIUuLnOrdenTrabajoParteComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsorden = 'Orden';
    private readonly dsnombre = 'Artículo/Servicio';
    private readonly dstipoaccion = 'Tipo acción';
    private readonly dsdrvrequierenumserie = 'Requiere Nº serie';
    private readonly dsnumserie = 'Nº serie';
    private readonly dsrealizada = 'Realizada';
    private readonly dsunidades = 'Unidades';
    private readonly dspreciounitario = 'Precio unitario';
    private readonly dsporcendescuento = '% descuento';
    private readonly dstotaldescuento = 'Descuento';
    private readonly dsbaseimponible = 'Base imponible';
    private readonly dsporceniva = '% IVA';
    private readonly dsiva = 'IVA';
    private readonly dsporcenrecargoequivalencia = '% Rec Equivalencia';
    private readonly dsrecargoequivalencia = 'Rec Equivalencia';
    private readonly dsimporte = 'Importe';
    private readonly dsdescaccion = 'Acción';

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
        this.idXML = 'Clas_1699352150016291UIPobCl_2';
        this.className = ModelConstants.Lnordentrabajo.name;
        this.iuName = 'PIU_LnOrdenTrabajoParte';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_LnOrdenTrabajo_piu_PIU_LnOrdenTrabajoParte',
            'Líneas');
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
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_3ICtjoVis_1';
        dsItem.name = 'orden';
        dsItem.field = 'orden';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParte_item_Clas_1699352150016291CjtoVis_3ICtjoVis_1',
            this.dsorden);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_3ICtjoVis_2';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParte_item_Clas_1699352150016291CjtoVis_3ICtjoVis_2',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_3ICtjoVis_3';
        dsItem.name = 'tipoaccion';
        dsItem.field = 'tipoaccion';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParte_item_Clas_1699352150016291CjtoVis_3ICtjoVis_3',
            this.dstipoaccion);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_TIPOACCIONLNORDEN;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_3ICtjoVis_4';
        dsItem.name = 'drvrequierenumserie';
        dsItem.field = 'drvrequierenumserie';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParte_item_Clas_1699352150016291CjtoVis_3ICtjoVis_4',
            this.dsdrvrequierenumserie);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_SI_NO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_3ICtjoVis_5';
        dsItem.name = 'numserie';
        dsItem.field = 'numserie';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParte_item_Clas_1699352150016291CjtoVis_3ICtjoVis_5',
            this.dsnumserie);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_3ICtjoVis_6';
        dsItem.name = 'realizada';
        dsItem.field = 'realizada';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParte_item_Clas_1699352150016291CjtoVis_3ICtjoVis_6',
            this.dsrealizada);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_SI_NO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_3ICtjoVis_7';
        dsItem.name = 'unidades';
        dsItem.field = 'unidades';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParte_item_Clas_1699352150016291CjtoVis_3ICtjoVis_7',
            this.dsunidades);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_3ICtjoVis_8';
        dsItem.name = 'preciounitario';
        dsItem.field = 'preciounitario';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParte_item_Clas_1699352150016291CjtoVis_3ICtjoVis_8',
            this.dspreciounitario);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_3ICtjoVis_9';
        dsItem.name = 'porcendescuento';
        dsItem.field = 'porcendescuento';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParte_item_Clas_1699352150016291CjtoVis_3ICtjoVis_9',
            this.dsporcendescuento);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_3ICtjoVis_10';
        dsItem.name = 'totaldescuento';
        dsItem.field = 'totaldescuento';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParte_item_Clas_1699352150016291CjtoVis_3ICtjoVis_10',
            this.dstotaldescuento);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_3ICtjoVis_11';
        dsItem.name = 'baseimponible';
        dsItem.field = 'baseimponible';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParte_item_Clas_1699352150016291CjtoVis_3ICtjoVis_11',
            this.dsbaseimponible);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_3ICtjoVis_12';
        dsItem.name = 'porceniva';
        dsItem.field = 'porceniva';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParte_item_Clas_1699352150016291CjtoVis_3ICtjoVis_12',
            this.dsporceniva);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_3ICtjoVis_13';
        dsItem.name = 'iva';
        dsItem.field = 'iva';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParte_item_Clas_1699352150016291CjtoVis_3ICtjoVis_13',
            this.dsiva);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_3ICtjoVis_14';
        dsItem.name = 'porcenrecargoequivalencia';
        dsItem.field = 'porcenrecargoequivalencia';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParte_item_Clas_1699352150016291CjtoVis_3ICtjoVis_14',
            this.dsporcenrecargoequivalencia);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_3ICtjoVis_15';
        dsItem.name = 'recargoequivalencia';
        dsItem.field = 'recargoequivalencia';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParte_item_Clas_1699352150016291CjtoVis_3ICtjoVis_15',
            this.dsrecargoequivalencia);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_3ICtjoVis_16';
        dsItem.name = 'importe';
        dsItem.field = 'importe';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParte_item_Clas_1699352150016291CjtoVis_3ICtjoVis_16',
            this.dsimporte);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_3ICtjoVis_17';
        dsItem.name = 'descaccion';
        dsItem.field = 'descaccion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajoParte_item_Clas_1699352150016291CjtoVis_3ICtjoVis_17',
            this.dsdescaccion);
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
