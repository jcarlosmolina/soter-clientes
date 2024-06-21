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

export class CuotaPIUuCuotaEnAlbaranComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsorden = 'Orden';
    private readonly dsfechavencimiento = 'Fecha vto';
    private readonly dsbaseimponible = 'Base imp';
    private readonly dsporceniva = '% IVA';
    private readonly dsiva = 'IVA';
    private readonly dsporcenrecargoequiv = '% Rec equiv';
    private readonly dsrecargoequivalencia = 'Rec equiv';
    private readonly dsimporte = 'Importe';
    private readonly dsdescripcion = 'Descripción';
    private readonly dsobjetocontratodiduobjetocontrato = 'Objeto contrato';
    private readonly dsinstalaciondnombre = 'Instalación';
    private readonly dsinstalaciondzonadnombre = 'Zona';

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
        this.idXML = 'Clas_1699352150016398UIPobCl_2';
        this.className = ModelConstants.Cuota.name;
        this.iuName = 'PIU_CuotaEnAlbaran';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Cuota_piu_PIU_CuotaEnAlbaran',
            'Cuotas');
        this.queryURL = '/api/CuotaApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016398CjtoVis_3ICtjoVis_1';
        dsItem.name = 'orden';
        dsItem.field = 'orden';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_Cuota_ds_DS_CuotaEnAlbaran_item_Clas_1699352150016398CjtoVis_3ICtjoVis_1',
            this.dsorden);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016398CjtoVis_3ICtjoVis_2';
        dsItem.name = 'fechavencimiento';
        dsItem.field = 'fechavencimiento';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_Cuota_ds_DS_CuotaEnAlbaran_item_Clas_1699352150016398CjtoVis_3ICtjoVis_2',
            this.dsfechavencimiento);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016398CjtoVis_3ICtjoVis_3';
        dsItem.name = 'baseimponible';
        dsItem.field = 'baseimponible';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_Cuota_ds_DS_CuotaEnAlbaran_item_Clas_1699352150016398CjtoVis_3ICtjoVis_3',
            this.dsbaseimponible);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016398CjtoVis_3ICtjoVis_4';
        dsItem.name = 'porceniva';
        dsItem.field = 'porceniva';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_Cuota_ds_DS_CuotaEnAlbaran_item_Clas_1699352150016398CjtoVis_3ICtjoVis_4',
            this.dsporceniva);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016398CjtoVis_3ICtjoVis_5';
        dsItem.name = 'iva';
        dsItem.field = 'iva';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_Cuota_ds_DS_CuotaEnAlbaran_item_Clas_1699352150016398CjtoVis_3ICtjoVis_5',
            this.dsiva);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016398CjtoVis_3ICtjoVis_6';
        dsItem.name = 'porcenrecargoequiv';
        dsItem.field = 'porcenrecargoequiv';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_Cuota_ds_DS_CuotaEnAlbaran_item_Clas_1699352150016398CjtoVis_3ICtjoVis_6',
            this.dsporcenrecargoequiv);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016398CjtoVis_3ICtjoVis_7';
        dsItem.name = 'recargoequivalencia';
        dsItem.field = 'recargoequivalencia';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_Cuota_ds_DS_CuotaEnAlbaran_item_Clas_1699352150016398CjtoVis_3ICtjoVis_7',
            this.dsrecargoequivalencia);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016398CjtoVis_3ICtjoVis_8';
        dsItem.name = 'importe';
        dsItem.field = 'importe';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_Cuota_ds_DS_CuotaEnAlbaran_item_Clas_1699352150016398CjtoVis_3ICtjoVis_8',
            this.dsimporte);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016398CjtoVis_3ICtjoVis_9';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Cuota_ds_DS_CuotaEnAlbaran_item_Clas_1699352150016398CjtoVis_3ICtjoVis_9',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016398CjtoVis_3ICtjoVis_10';
        dsItem.name = 'objetocontrato.id_objetocontrato';
        dsItem.field = 'objetocontrato-id_objetocontrato';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 4;
        dsItem.alias = this.langMng.translateText(
            'cls_Cuota_ds_DS_CuotaEnAlbaran_item_Clas_1699352150016398CjtoVis_3ICtjoVis_10',
            this.dsobjetocontratodiduobjetocontrato);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016398CjtoVis_3ICtjoVis_11';
        dsItem.name = 'instalacion.nombre';
        dsItem.field = 'instalacion-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Cuota_ds_DS_CuotaEnAlbaran_item_Clas_1699352150016398CjtoVis_3ICtjoVis_11',
            this.dsinstalaciondnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016398CjtoVis_3ICtjoVis_12';
        dsItem.name = 'instalacion.zona.nombre';
        dsItem.field = 'instalacion-zona-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Cuota_ds_DS_CuotaEnAlbaran_item_Clas_1699352150016398CjtoVis_3ICtjoVis_12',
            this.dsinstalaciondzonadnombre);
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
