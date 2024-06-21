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

export class ContratoPIUuContratoSistemaComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsnumcontrato = 'Nº  contrato';
    private readonly dsclientednombrerazonsocial = 'Cliente';
    private readonly dsfecha = 'Fecha';
    private readonly dsfirmado = 'Firmado';
    private readonly dsinstalaciondnombre = 'Instalación';
    private readonly dspresupuestodcodigo = 'Presupuesto';
    private readonly dslistaobjetos = 'Objeto';
    private readonly dsduracion = 'Duración meses';
    private readonly dsvigencia = 'Vigencia';

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
        this.idXML = 'Clas_1699352150016715UIPobCl_2';
        this.className = ModelConstants.Contrato.name;
        this.iuName = 'PIU_ContratoSistema';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Contrato_piu_PIU_ContratoSistema',
            'Contratos');
        this.queryURL = '/api/ContratoApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1699352150016715CjtoVis_2ICtjoVis_1';
        dsItem.name = 'numcontrato';
        dsItem.field = 'numcontrato';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 10;
        dsItem.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSP_Contrato_item_Clas_1699352150016715CjtoVis_2ICtjoVis_1',
            this.dsnumcontrato);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.linkIndex = 0;
        dsItem.linkIsAction = false;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016715CjtoVis_2ICtjoVis_2';
        dsItem.name = 'cliente.nombrerazonsocial';
        dsItem.field = 'cliente-nombrerazonsocial';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSP_Contrato_item_Clas_1699352150016715CjtoVis_2ICtjoVis_2',
            this.dsclientednombrerazonsocial);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016715CjtoVis_2ICtjoVis_3';
        dsItem.name = 'fecha';
        dsItem.field = 'fecha';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSP_Contrato_item_Clas_1699352150016715CjtoVis_2ICtjoVis_3',
            this.dsfecha);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016715CjtoVis_2ICtjoVis_4';
        dsItem.name = 'firmado';
        dsItem.field = 'firmado';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSP_Contrato_item_Clas_1699352150016715CjtoVis_2ICtjoVis_4',
            this.dsfirmado);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_SI_NO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016715CjtoVis_2ICtjoVis_5';
        dsItem.name = 'instalacion.nombre';
        dsItem.field = 'instalacion-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSP_Contrato_item_Clas_1699352150016715CjtoVis_2ICtjoVis_5',
            this.dsinstalaciondnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016715CjtoVis_2ICtjoVis_6';
        dsItem.name = 'presupuesto.codigo';
        dsItem.field = 'presupuesto-codigo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 10;
        dsItem.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSP_Contrato_item_Clas_1699352150016715CjtoVis_2ICtjoVis_6',
            this.dspresupuestodcodigo);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016715CjtoVis_2ICtjoVis_7';
        dsItem.name = 'listaobjetos';
        dsItem.field = 'listaobjetos';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 175;
        dsItem.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSP_Contrato_item_Clas_1699352150016715CjtoVis_2ICtjoVis_7',
            this.dslistaobjetos);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016715CjtoVis_2ICtjoVis_8';
        dsItem.name = 'duracion';
        dsItem.field = 'duracion';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSP_Contrato_item_Clas_1699352150016715CjtoVis_2ICtjoVis_8',
            this.dsduracion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016715CjtoVis_2ICtjoVis_9';
        dsItem.name = 'vigencia';
        dsItem.field = 'vigencia';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 2;
        dsItem.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSP_Contrato_item_Clas_1699352150016715CjtoVis_2ICtjoVis_9',
            this.dsvigencia);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_VIGENCIACONTRATO;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the navigation items
     */
    public initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1699352150016715NavOfer_1ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_Contrato_nav_N_ContratoMD_item_Clas_1699352150016715NavOfer_1ElemNav_1',
            'Detalles');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Contrato.name;
        navItem.targetUI = ModelConstants.Contrato.mdiuucontrato;
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
