import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { SucursalBancariaFilterFuSucursalBancaria} from './filters/sucursalbancariafilterfusucursalbancaria';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-sucursalbancaria-p-sucursalbancaria',
    templateUrl: './p_sucursalbancaria.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SucursalBancariaPuSucursalBancariaComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsentidadbancariadnombre = 'Entidad';
    private readonly dsidusucursalbancaria = 'Cód. Sucursal';
    private readonly dsnombre = 'Nombre';
    private readonly dsdireccion = 'Dirección';
    private readonly dsmunicipiodnombre = 'Municipio';
    private readonly dscodigopostaldcp = 'Código Postal';
    private readonly dspaisdnombre = 'País';
    private readonly dstelefono = 'Teléfono';

    /** Filters */
    public f0: SucursalBancariaFilterFuSucursalBancaria;

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
        this.idXML = 'Clas_1699352150016390UIPobCl_1';
        this.className = ModelConstants.Sucursalbancaria.name;
        this.iuName = ModelConstants.Sucursalbancaria.pusucursalbancaria;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_SucursalBancaria_piu_P_SucursalBancaria',
            'Sucursales bancarias');
        this.f0 = new SucursalBancariaFilterFuSucursalBancaria(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun, usrFunc);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/SucursalBancariaApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016390CjtoVis_1ICtjoVis_1';
        dsItem.name = 'entidadbancaria.nombre';
        dsItem.field = 'entidadbancaria-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_SucursalBancaria_ds_DSP_SucursalBancaria_item_Clas_1699352150016390CjtoVis_1ICtjoVis_1',
            this.dsentidadbancariadnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016390CjtoVis_1ICtjoVis_2';
        dsItem.name = 'id_sucursalbancaria';
        dsItem.field = 'id_sucursalbancaria';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 5;
        dsItem.alias = this.langMng.translateText(
            'cls_SucursalBancaria_ds_DSP_SucursalBancaria_item_Clas_1699352150016390CjtoVis_1ICtjoVis_2',
            this.dsidusucursalbancaria);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016390CjtoVis_1ICtjoVis_3';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_SucursalBancaria_ds_DSP_SucursalBancaria_item_Clas_1699352150016390CjtoVis_1ICtjoVis_3',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016390CjtoVis_1ICtjoVis_4';
        dsItem.name = 'direccion';
        dsItem.field = 'direccion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_SucursalBancaria_ds_DSP_SucursalBancaria_item_Clas_1699352150016390CjtoVis_1ICtjoVis_4',
            this.dsdireccion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016390CjtoVis_1ICtjoVis_5';
        dsItem.name = 'municipio.nombre';
        dsItem.field = 'municipio-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_SucursalBancaria_ds_DSP_SucursalBancaria_item_Clas_1699352150016390CjtoVis_1ICtjoVis_5',
            this.dsmunicipiodnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016390CjtoVis_1ICtjoVis_6';
        dsItem.name = 'codigopostal.cp';
        dsItem.field = 'codigopostal-cp';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 10;
        dsItem.alias = this.langMng.translateText(
            'cls_SucursalBancaria_ds_DSP_SucursalBancaria_item_Clas_1699352150016390CjtoVis_1ICtjoVis_6',
            this.dscodigopostaldcp);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016390CjtoVis_1ICtjoVis_7';
        dsItem.name = 'pais.nombre';
        dsItem.field = 'pais-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_SucursalBancaria_ds_DSP_SucursalBancaria_item_Clas_1699352150016390CjtoVis_1ICtjoVis_7',
            this.dspaisdnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016390CjtoVis_1ICtjoVis_8';
        dsItem.name = 'telefono';
        dsItem.field = 'telefono';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_SucursalBancaria_ds_DSP_SucursalBancaria_item_Clas_1699352150016390CjtoVis_1ICtjoVis_8',
            this.dstelefono);
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
