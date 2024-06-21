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

export class LnPresupuestoPIUuLnPresupuestoPortalCliComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsorden = 'Orden';
    private readonly dsnombre = 'Artículo/Servicio';
    private readonly dsunidades = 'Uds';
    private readonly dspreciounitario = 'Precio uds';
    private readonly dsporcendescuento = '% Dto';
    private readonly dsdescuento = 'Descuento';
    private readonly dsbaseimponible = 'Base imp';
    private readonly dsporceniva = '% IVA';
    private readonly dsiva = 'IVA';
    private readonly dsporcenreqeq = '% Rec.Equiv';
    private readonly dsrecargoequivalencia = 'Rec.Equiv';
    private readonly dsimporte = 'Importe';

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
        this.idXML = 'Clas_1699352150016080UIPobCl_5';
        this.className = ModelConstants.Lnpresupuesto.name;
        this.iuName = 'PIU_LnPresupuestoPortalCli';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_LnPresupuesto_piu_PIU_LnPresupuestoPortalCli',
            'Líneas');
        this.queryURL = '/api/LnPresupuestoApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016080CjtoVis_5ICtjoVis_1';
        dsItem.name = 'orden';
        dsItem.field = 'orden';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_LnPresupuesto_ds_DSP_LnPresupuestoPortalCli_item_Clas_1699352150016080CjtoVis_5ICtjoVis_1',
            this.dsorden);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016080CjtoVis_5ICtjoVis_2';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_LnPresupuesto_ds_DSP_LnPresupuestoPortalCli_item_Clas_1699352150016080CjtoVis_5ICtjoVis_2',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016080CjtoVis_5ICtjoVis_3';
        dsItem.name = 'unidades';
        dsItem.field = 'unidades';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnPresupuesto_ds_DSP_LnPresupuestoPortalCli_item_Clas_1699352150016080CjtoVis_5ICtjoVis_3',
            this.dsunidades);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016080CjtoVis_5ICtjoVis_4';
        dsItem.name = 'preciounitario';
        dsItem.field = 'preciounitario';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnPresupuesto_ds_DSP_LnPresupuestoPortalCli_item_Clas_1699352150016080CjtoVis_5ICtjoVis_4',
            this.dspreciounitario);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016080CjtoVis_5ICtjoVis_5';
        dsItem.name = 'porcendescuento';
        dsItem.field = 'porcendescuento';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnPresupuesto_ds_DSP_LnPresupuestoPortalCli_item_Clas_1699352150016080CjtoVis_5ICtjoVis_5',
            this.dsporcendescuento);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016080CjtoVis_5ICtjoVis_6';
        dsItem.name = 'descuento';
        dsItem.field = 'descuento';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnPresupuesto_ds_DSP_LnPresupuestoPortalCli_item_Clas_1699352150016080CjtoVis_5ICtjoVis_6',
            this.dsdescuento);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016080CjtoVis_5ICtjoVis_7';
        dsItem.name = 'baseimponible';
        dsItem.field = 'baseimponible';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnPresupuesto_ds_DSP_LnPresupuestoPortalCli_item_Clas_1699352150016080CjtoVis_5ICtjoVis_7',
            this.dsbaseimponible);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016080CjtoVis_5ICtjoVis_8';
        dsItem.name = 'porceniva';
        dsItem.field = 'porceniva';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnPresupuesto_ds_DSP_LnPresupuestoPortalCli_item_Clas_1699352150016080CjtoVis_5ICtjoVis_8',
            this.dsporceniva);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016080CjtoVis_5ICtjoVis_9';
        dsItem.name = 'iva';
        dsItem.field = 'iva';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnPresupuesto_ds_DSP_LnPresupuestoPortalCli_item_Clas_1699352150016080CjtoVis_5ICtjoVis_9',
            this.dsiva);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016080CjtoVis_5ICtjoVis_10';
        dsItem.name = 'porcenreqeq';
        dsItem.field = 'porcenreqeq';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnPresupuesto_ds_DSP_LnPresupuestoPortalCli_item_Clas_1699352150016080CjtoVis_5ICtjoVis_10',
            this.dsporcenreqeq);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016080CjtoVis_5ICtjoVis_11';
        dsItem.name = 'recargoequivalencia';
        dsItem.field = 'recargoequivalencia';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnPresupuesto_ds_DSP_LnPresupuestoPortalCli_item_Clas_1699352150016080CjtoVis_5ICtjoVis_11',
            this.dsrecargoequivalencia);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016080CjtoVis_5ICtjoVis_12';
        dsItem.name = 'importe';
        dsItem.field = 'importe';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_LnPresupuesto_ds_DSP_LnPresupuestoPortalCli_item_Clas_1699352150016080CjtoVis_5ICtjoVis_12',
            this.dsimporte);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_LnPresupuesto', value: 'OC_LnPresupuesto'});
        this.orderCriteria = 'OC_LnPresupuesto';
    }
}
