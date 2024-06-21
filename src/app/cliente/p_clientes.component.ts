import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
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

@Component({
    selector: 'imes-cliente-p-clientes',
    templateUrl: './p_clientes.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientePuClientesComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dscodigo = 'Código';
    private readonly dsgrupoempresadnombre = 'Grupo Empresas';
    private readonly dsnombrerazonsocial = 'Nombre/razón social';
    private readonly dsnombrecomercial = 'Nombre comercial';
    private readonly dscifnif = 'CIF/NIF';
    private readonly dspotencial = 'Potencial';
    private readonly dsmunicipiofiscaldnombre = 'Municipio';
    private readonly dsestado = 'Estado';
    private readonly dstieneaccesoweb = 'Tiene acceso web';

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
        this.idXML = 'Clas_1699352150016661UIPobCl_2';
        this.className = ModelConstants.Cliente.name;
        this.iuName = ModelConstants.Cliente.puclientes;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Cliente_piu_P_Clientes',
            'Clientes');
        this.queryURL = '/api/ClienteApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016661CjtoVis_2ICtjoVis_1';
        dsItem.name = 'codigo';
        dsItem.field = 'codigo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 6;
        dsItem.fieldSize = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSP_Cliente_item_Clas_1699352150016661CjtoVis_2ICtjoVis_1',
            this.dscodigo);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.linkIndex = 0;
        dsItem.linkIsAction = false;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016661CjtoVis_2ICtjoVis_2';
        dsItem.name = 'grupoempresa.nombre';
        dsItem.field = 'grupoempresa-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSP_Cliente_item_Clas_1699352150016661CjtoVis_2ICtjoVis_2',
            this.dsgrupoempresadnombre);
        dsItem.agents = [];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016661CjtoVis_2ICtjoVis_3';
        dsItem.name = 'nombrerazonsocial';
        dsItem.field = 'nombrerazonsocial';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSP_Cliente_item_Clas_1699352150016661CjtoVis_2ICtjoVis_3',
            this.dsnombrerazonsocial);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016661CjtoVis_2ICtjoVis_4';
        dsItem.name = 'nombrecomercial';
        dsItem.field = 'nombrecomercial';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSP_Cliente_item_Clas_1699352150016661CjtoVis_2ICtjoVis_4',
            this.dsnombrecomercial);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016661CjtoVis_2ICtjoVis_5';
        dsItem.name = 'cifnif';
        dsItem.field = 'cifnif';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 30;
        dsItem.fieldSize = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSP_Cliente_item_Clas_1699352150016661CjtoVis_2ICtjoVis_5',
            this.dscifnif);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016661CjtoVis_2ICtjoVis_6';
        dsItem.name = 'potencial';
        dsItem.field = 'potencial';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSP_Cliente_item_Clas_1699352150016661CjtoVis_2ICtjoVis_6',
            this.dspotencial);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_SI_NO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016661CjtoVis_2ICtjoVis_7';
        dsItem.name = 'municipiofiscal.nombre';
        dsItem.field = 'municipiofiscal-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.fieldSize = 25;
        dsItem.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSP_Cliente_item_Clas_1699352150016661CjtoVis_2ICtjoVis_7',
            this.dsmunicipiofiscaldnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016661CjtoVis_2ICtjoVis_8';
        dsItem.name = 'estado';
        dsItem.field = 'estado';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 10;
        dsItem.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSP_Cliente_item_Clas_1699352150016661CjtoVis_2ICtjoVis_8',
            this.dsestado);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_CLIENTE_ESTADO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016661CjtoVis_2ICtjoVis_9';
        dsItem.name = 'tieneaccesoweb';
        dsItem.field = 'tieneaccesoweb';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSP_Cliente_item_Clas_1699352150016661CjtoVis_2ICtjoVis_9',
            this.dstieneaccesoweb);
        dsItem.agents = [];
        dsItem.options = DefinedSelections.DS_SI_NO;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the navigation items
     */
    public initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1699352150016661NavOfer_1ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_Cliente_nav_N_ClienteMD_item_Clas_1699352150016661NavOfer_1ElemNav_1',
            'Detalles');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Cliente.name;
        navItem.targetUI = ModelConstants.Cliente.mdiuucliente;
        navItem.rolePath = '';
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
