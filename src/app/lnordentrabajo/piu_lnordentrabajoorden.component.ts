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

export class LnOrdenTrabajoPIUuLnOrdenTrabajoOrdenComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsorden = 'Orden';
    private readonly dsnombre = 'Artículo/Servicio';
    private readonly dstipoaccion = 'Tipo acción';
    private readonly dsunidades = 'Unidades';
    private readonly dspreciounitario = 'Precio';
    private readonly dsporcendescuento = '% Dto';
    private readonly dstotaldescuento = 'Dto';
    private readonly dsbaseimponible = 'Base imp';
    private readonly dsporceniva = '% IVA';
    private readonly dsiva = 'IVA';
    private readonly dsporcenrecargoequivalencia = '% Rec equiv';
    private readonly dsrecargoequivalencia = 'Rec equiv';
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
        this.idXML = 'Clas_1699352150016291UIPobCl_3';
        this.className = ModelConstants.Lnordentrabajo.name;
        this.iuName = 'PIU_LnOrdenTrabajoOrden';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_LnOrdenTrabajo_piu_PIU_LnOrdenTrabajoOrden',
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
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_1ICtjoVis_1';
        dsItem.name = 'orden';
        dsItem.field = 'orden';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajo_item_Clas_1699352150016291CjtoVis_1ICtjoVis_1',
            this.dsorden);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_1ICtjoVis_2';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajo_item_Clas_1699352150016291CjtoVis_1ICtjoVis_2',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_1ICtjoVis_3';
        dsItem.name = 'tipoaccion';
        dsItem.field = 'tipoaccion';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajo_item_Clas_1699352150016291CjtoVis_1ICtjoVis_3',
            this.dstipoaccion);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_TIPOACCIONLNORDEN;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_1ICtjoVis_4';
        dsItem.name = 'unidades';
        dsItem.field = 'unidades';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajo_item_Clas_1699352150016291CjtoVis_1ICtjoVis_4',
            this.dsunidades);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_1ICtjoVis_5';
        dsItem.name = 'preciounitario';
        dsItem.field = 'preciounitario';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajo_item_Clas_1699352150016291CjtoVis_1ICtjoVis_5',
            this.dspreciounitario);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_1ICtjoVis_6';
        dsItem.name = 'porcendescuento';
        dsItem.field = 'porcendescuento';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajo_item_Clas_1699352150016291CjtoVis_1ICtjoVis_6',
            this.dsporcendescuento);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_1ICtjoVis_7';
        dsItem.name = 'totaldescuento';
        dsItem.field = 'totaldescuento';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajo_item_Clas_1699352150016291CjtoVis_1ICtjoVis_7',
            this.dstotaldescuento);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_1ICtjoVis_8';
        dsItem.name = 'baseimponible';
        dsItem.field = 'baseimponible';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajo_item_Clas_1699352150016291CjtoVis_1ICtjoVis_8',
            this.dsbaseimponible);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_1ICtjoVis_9';
        dsItem.name = 'porceniva';
        dsItem.field = 'porceniva';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajo_item_Clas_1699352150016291CjtoVis_1ICtjoVis_9',
            this.dsporceniva);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_1ICtjoVis_10';
        dsItem.name = 'iva';
        dsItem.field = 'iva';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajo_item_Clas_1699352150016291CjtoVis_1ICtjoVis_10',
            this.dsiva);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_1ICtjoVis_11';
        dsItem.name = 'porcenrecargoequivalencia';
        dsItem.field = 'porcenrecargoequivalencia';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajo_item_Clas_1699352150016291CjtoVis_1ICtjoVis_11',
            this.dsporcenrecargoequivalencia);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_1ICtjoVis_12';
        dsItem.name = 'recargoequivalencia';
        dsItem.field = 'recargoequivalencia';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajo_item_Clas_1699352150016291CjtoVis_1ICtjoVis_12',
            this.dsrecargoequivalencia);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_1ICtjoVis_13';
        dsItem.name = 'importe';
        dsItem.field = 'importe';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajo_item_Clas_1699352150016291CjtoVis_1ICtjoVis_13',
            this.dsimporte);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016291CjtoVis_1ICtjoVis_14';
        dsItem.name = 'descaccion';
        dsItem.field = 'descaccion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_LnOrdenTrabajo_ds_DS_LnOrdenTrabajo_item_Clas_1699352150016291CjtoVis_1ICtjoVis_14',
            this.dsdescaccion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_LnOrdenTrabajo', value: 'Por Orden'});
        this.orderCriteria = 'OC_LnOrdenTrabajo';
    }
}
