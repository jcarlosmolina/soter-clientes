﻿import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
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

export class SubtotalPresupuestoPIUuSubtotalComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsbasesindtos = 'Base sin dtos.';
    private readonly dsdescuentodrv = 'Descuento';
    private readonly dsbaseimponible = 'Base imponible';
    private readonly dsporceniva = '% IVA';
    private readonly dsiva = 'IVA';
    private readonly dsporcenreqeq = '% recargo equivalencia';
    private readonly dsrecargoeq = 'Recargo equivalencia';
    private readonly dstotal = 'Total';

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
        this.idXML = 'Clas_1699352150016180UIPobCl_1';
        this.className = ModelConstants.Subtotalpresupuesto.name;
        this.iuName = 'PIU_Subtotal';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_SubtotalPresupuesto_piu_PIU_Subtotal',
            'Totales');
        this.queryURL = '/api/SubtotalPresupuestoApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016180CjtoVis_2ICtjoVis_1';
        dsItem.name = 'basesindtos';
        dsItem.field = 'basesindtos';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_SubtotalPresupuesto_ds_DS_Subtotal_item_Clas_1699352150016180CjtoVis_2ICtjoVis_1',
            this.dsbasesindtos);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016180CjtoVis_2ICtjoVis_2';
        dsItem.name = 'descuentodrv';
        dsItem.field = 'descuentodrv';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_SubtotalPresupuesto_ds_DS_Subtotal_item_Clas_1699352150016180CjtoVis_2ICtjoVis_2',
            this.dsdescuentodrv);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016180CjtoVis_2ICtjoVis_3';
        dsItem.name = 'baseimponible';
        dsItem.field = 'baseimponible';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_SubtotalPresupuesto_ds_DS_Subtotal_item_Clas_1699352150016180CjtoVis_2ICtjoVis_3',
            this.dsbaseimponible);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016180CjtoVis_2ICtjoVis_4';
        dsItem.name = 'porceniva';
        dsItem.field = 'porceniva';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_SubtotalPresupuesto_ds_DS_Subtotal_item_Clas_1699352150016180CjtoVis_2ICtjoVis_4',
            this.dsporceniva);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016180CjtoVis_2ICtjoVis_5';
        dsItem.name = 'iva';
        dsItem.field = 'iva';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_SubtotalPresupuesto_ds_DS_Subtotal_item_Clas_1699352150016180CjtoVis_2ICtjoVis_5',
            this.dsiva);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016180CjtoVis_2ICtjoVis_6';
        dsItem.name = 'porcenreqeq';
        dsItem.field = 'porcenreqeq';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_SubtotalPresupuesto_ds_DS_Subtotal_item_Clas_1699352150016180CjtoVis_2ICtjoVis_6',
            this.dsporcenreqeq);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016180CjtoVis_2ICtjoVis_7';
        dsItem.name = 'recargoeq';
        dsItem.field = 'recargoeq';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_SubtotalPresupuesto_ds_DS_Subtotal_item_Clas_1699352150016180CjtoVis_2ICtjoVis_7',
            this.dsrecargoeq);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016180CjtoVis_2ICtjoVis_8';
        dsItem.name = 'total';
        dsItem.field = 'total';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_SubtotalPresupuesto_ds_DS_Subtotal_item_Clas_1699352150016180CjtoVis_2ICtjoVis_8',
            this.dstotal);
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
