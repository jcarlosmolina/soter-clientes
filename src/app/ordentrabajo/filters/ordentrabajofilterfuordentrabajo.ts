import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { InstanceCache } from '../../common/app.cachedependencyrules';
import { ModelConstants } from '../../common/model.constants';
import { Field, FieldDefinedSelection, FieldOVLenseSearch, Instance } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { ExchangeInfo } from '../../common/app.exchangeinfo';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';
import { DefinedSelections } from '../../common/definedSelection';
import { UserFunctions } from '../../common/userFunctions';

/**
 * Manages the filter F_OrdenTrabajo of class OrdenTrabajo
 */
export class OrdenTrabajoFilterFuOrdenTrabajo extends AbstractFilter {

    /** Filter variables */
    public vfCliente: FieldOVLenseSearch;
    public vfInstalacion: FieldOVLenseSearch;
    public vfEstado: FieldDefinedSelection;
    public vfTipoOrden: FieldDefinedSelection;
    public vfDesde: Field;
    public vfHasta: Field;

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param stdFun Standard functions
     * @param usrFunc User functions
     */
    constructor(public appGlobalInfo: AppGlobalInfo,
                public util: Util,
                public changeDetectorRef: ChangeDetectorRef,
                public langMng: LanguageMng,
                public stdFun: StandardFunctions, public usrFunc: UserFunctions) {
        super(appGlobalInfo, util, changeDetectorRef);
        this.title = this.langMng.translateText('cls_OrdenTrabajo_filter_F_OrdenTrabajo',
            'Buscar');
        this.filterName = 'F_OrdenTrabajo';
    }

    /**
     * Initialize the filter
     */
    public initializeComponents(): void {

        this.vfCliente = new FieldOVLenseSearch(this.langMng);
        this.vfCliente.nameInRequest = 'vfcliente';
        this.vfCliente.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_filter_F_OrdenTrabajo_fvar_vfCliente',
            'Cliente');
        this.vfCliente.visible = true;
        this.vfCliente.enabled = true;
        this.vfCliente.mandatory = false;
        this.vfCliente.dataType = ModelConstants.Cliente.name;
        this.vfCliente.text = '';
        this.vfCliente.searchResults = [];
        this.vfCliente.allowMultiSelect = false;
        this.vfCliente.maxLength = 300;
        this.vfCliente.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfCliente);

        this.vfInstalacion = new FieldOVLenseSearch(this.langMng);
        this.vfInstalacion.nameInRequest = 'vfinstalacion';
        this.vfInstalacion.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_filter_F_OrdenTrabajo_fvar_vfInstalacion',
            'Instalación');
        this.vfInstalacion.visible = true;
        this.vfInstalacion.enabled = true;
        this.vfInstalacion.mandatory = false;
        this.vfInstalacion.dataType = ModelConstants.Instalacion.name;
        this.vfInstalacion.text = '';
        this.vfInstalacion.searchResults = [];
        this.vfInstalacion.allowMultiSelect = false;
        this.vfInstalacion.maxLength = 100;
        this.vfInstalacion.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfInstalacion);

        this.vfEstado = new FieldDefinedSelection(this.langMng);
        this.vfEstado.nameInRequest = 'vfestado';
        this.vfEstado.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_filter_F_OrdenTrabajo_fvar_vfEstado',
            'Estado');
        this.vfEstado.visible = true;
        this.vfEstado.enabled = true;
        this.vfEstado.mandatory = false;
        this.vfEstado.dataType = Field.dtString;
        this.vfEstado.options = DefinedSelections.DS_ORDENTRABAJO_ESTADO;
        this.vfEstado.maxLength = 1;
        this.vfEstado.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfEstado);

        this.vfTipoOrden = new FieldDefinedSelection(this.langMng);
        this.vfTipoOrden.nameInRequest = 'vftipoorden';
        this.vfTipoOrden.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_filter_F_OrdenTrabajo_fvar_vfTipoOrden',
            'Tipo orden');
        this.vfTipoOrden.visible = true;
        this.vfTipoOrden.enabled = true;
        this.vfTipoOrden.mandatory = false;
        this.vfTipoOrden.dataType = Field.dtString;
        this.vfTipoOrden.options = DefinedSelections.DS_TIPOORDENTRABAJO;
        this.vfTipoOrden.maxLength = 1;
        this.vfTipoOrden.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfTipoOrden);

        this.vfDesde = new Field(this.langMng);
        this.vfDesde.nameInRequest = 'vfdesde';
        this.vfDesde.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_filter_F_OrdenTrabajo_fvar_vfDesde',
            'Desde');
        this.vfDesde.visible = true;
        this.vfDesde.enabled = true;
        this.vfDesde.mandatory = false;
        this.vfDesde.dataType = Field.dtDate;
        this.vfDesde.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfDesde);

        this.vfHasta = new Field(this.langMng);
        this.vfHasta.nameInRequest = 'vfhasta';
        this.vfHasta.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_filter_F_OrdenTrabajo_fvar_vfHasta',
            'Hasta');
        this.vfHasta.visible = true;
        this.vfHasta.enabled = true;
        this.vfHasta.mandatory = false;
        this.vfHasta.dataType = Field.dtDate;
        this.vfHasta.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfHasta);
    }

   /**
    * Process the selection backward navigation
    */
    public processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (exchInfo.originArgumentName === 'vfCliente' && exchInfo.selectedOids && exchInfo.selectedOids.length > 0) {
            this.vfCliente.setValue(exchInfo.selectedOids);
            this.executeDependecyRulesvfcliente('SetValue', true);
        }

        if (exchInfo.originArgumentName === 'vfInstalacion' && exchInfo.selectedOids && exchInfo.selectedOids.length > 0) {
            this.vfInstalacion.setValue(exchInfo.selectedOids);
            this.executeDependecyRulesvfinstalacion('SetValue', true);
        }

    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('vfCliente'.toLowerCase() === argumentName.toLowerCase()) {
            this.vfCliente.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'P_Clientes';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('vfInstalacion'.toLowerCase() === argumentName.toLowerCase()) {
            this.vfInstalacion.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_InstalacionDef';
            exchInfo.navigationalFilterIdentity = ['OrdenTrabajo_F_OrdenTrabajo_vfInstalacion_NavFilter'];
            exchInfo.navigationalFilterVariables = this.getNavigationFilterVariables();
            this.util.navigateSelectionForward(exchInfo);
        }
    }

    /**
     * Process the change in the search text in the vfCliente variable
     */
    public onvfclienteChange() {
        this.executeLenseSearch(this.vfCliente, ModelConstants.Cliente.name, 'DSS_Cliente', []);
        this.executeDependecyRulesvfcliente('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the vfCliente variable
     */
    public processvfclienteSelected(index: number): void {
        this.vfCliente.processIndexSelected(index);
        this.executeDependecyRulesvfcliente('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisCliente lense search argument
     */
    public cleanvfcliente(): void {
        this.clearValidationMessages();
        this.vfCliente.clean();
        this.executeDependecyRulesvfcliente('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Set the supplementary information to the vfCliente argument
     */
    private setSuppInfovfcliente(): void {
        this.setSuplementaryInformationToField(this.vfCliente, ModelConstants.Cliente.name, 'NombreRazonSocial');
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for vfCliente variable
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesvfcliente(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfovfcliente();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Process the change in the search text in the vfInstalacion variable
     */
    public onvfinstalacionChange() {
        this.executeLenseSearch(this.vfInstalacion, ModelConstants.Instalacion.name, 'DSS_Instalacion',
            ['OrdenTrabajo_F_OrdenTrabajo_vfInstalacion_NavFilter']);
        this.executeDependecyRulesvfinstalacion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the vfInstalacion variable
     */
    public processvfinstalacionSelected(index: number): void {
        this.vfInstalacion.processIndexSelected(index);
        this.executeDependecyRulesvfinstalacion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisCliente lense search argument
     */
    public cleanvfinstalacion(): void {
        this.clearValidationMessages();
        this.vfInstalacion.clean();
        this.executeDependecyRulesvfinstalacion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Set the supplementary information to the vfInstalacion argument
     */
    private setSuppInfovfinstalacion(): void {
        this.setSuplementaryInformationToField(this.vfInstalacion, ModelConstants.Instalacion.name, 'Nombre');
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for vfInstalacion variable
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesvfinstalacion(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfovfinstalacion();
        }
        this.executePendingDependencyRules();
    }
}
