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
    selector: 'imes-contrato-piu-contratoportalcli',
    templateUrl: './piu_contratoportalcli.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContratoPIUuContratoPortalCliComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsnumcontrato = 'Nº  contrato';
    private readonly dsfecha = 'Fecha';
    private readonly dsinstalaciondnombre = 'Instalación';
    private readonly dstipossistema = 'Sistema';
    private readonly dspresupuestodcodigo = 'Presupuesto';
    private readonly dslistaobjetos = 'Objeto';
    private readonly dsduracion = 'Duración meses';

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
        this.idXML = 'Clas_1699352150016715UIPobCl_6';
        this.className = ModelConstants.Contrato.name;
        this.iuName = ModelConstants.Contrato.piuucontratoportalcli;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Contrato_piu_PIU_ContratoPortalCli',
            'Contratos');
        this.queryURL = '/api/ContratoApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016715CjtoVis_4ICtjoVis_1';
        dsItem.name = 'numcontrato';
        dsItem.field = 'numcontrato';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 10;
        dsItem.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSP_ContratoCliente_item_Clas_1699352150016715CjtoVis_4ICtjoVis_1',
            this.dsnumcontrato);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.linkIndex = 0;
        dsItem.linkIsAction = false;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016715CjtoVis_4ICtjoVis_2';
        dsItem.name = 'fecha';
        dsItem.field = 'fecha';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSP_ContratoCliente_item_Clas_1699352150016715CjtoVis_4ICtjoVis_2',
            this.dsfecha);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016715CjtoVis_4ICtjoVis_3';
        dsItem.name = 'instalacion.nombre';
        dsItem.field = 'instalacion-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSP_ContratoCliente_item_Clas_1699352150016715CjtoVis_4ICtjoVis_3',
            this.dsinstalaciondnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016715CjtoVis_4ICtjoVis_4';
        dsItem.name = 'tipossistema';
        dsItem.field = 'tipossistema';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSP_ContratoCliente_item_Clas_1699352150016715CjtoVis_4ICtjoVis_4',
            this.dstipossistema);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016715CjtoVis_4ICtjoVis_5';
        dsItem.name = 'presupuesto.codigo';
        dsItem.field = 'presupuesto-codigo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 10;
        dsItem.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSP_ContratoCliente_item_Clas_1699352150016715CjtoVis_4ICtjoVis_5',
            this.dspresupuestodcodigo);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016715CjtoVis_4ICtjoVis_6';
        dsItem.name = 'listaobjetos';
        dsItem.field = 'listaobjetos';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 175;
        dsItem.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSP_ContratoCliente_item_Clas_1699352150016715CjtoVis_4ICtjoVis_6',
            this.dslistaobjetos);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016715CjtoVis_4ICtjoVis_7';
        dsItem.name = 'duracion';
        dsItem.field = 'duracion';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSP_ContratoCliente_item_Clas_1699352150016715CjtoVis_4ICtjoVis_7',
            this.dsduracion);
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
        navItem.idXML = 'Clas_1699352150016715NavOfer_2ElemNav_2';
        navItem.alias = this.langMng.translateText(
            'cls_Contrato_nav_N_ContratoMDPortalCli_item_Clas_1699352150016715NavOfer_2ElemNav_2',
            'Contrato');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Contrato.name;
        navItem.targetUI = ModelConstants.Contrato.mdiuucontratoportalcli;
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
