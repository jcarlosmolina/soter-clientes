import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { InstanceCache } from '../../common/app.cachedependencyrules';
import { ModelConstants } from '../../common/model.constants';
import { Field, FieldOVLenseSearch, FieldOVPreload, Instance } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { ExchangeInfo } from '../../common/app.exchangeinfo';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';
import { UserFunctions } from '../../common/userFunctions';

/**
 * Manages the filter F_Instalacion of class Instalacion
 */
export class InstalacionFilterFuInstalacion extends AbstractFilter {

    /** Filter variables */
    public vCliente: FieldOVLenseSearch;
    public vfMunicipio: FieldOVLenseSearch;
    public vfZona: FieldOVPreload;

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
        this.title = this.langMng.translateText('cls_Instalacion_filter_F_Instalacion',
            'Buscar');
        this.filterName = 'F_Instalacion';
    }

    /**
     * Initialize the filter
     */
    public initializeComponents(): void {

        this.vCliente = new FieldOVLenseSearch(this.langMng);
        this.vCliente.nameInRequest = 'vcliente';
        this.vCliente.alias = this.langMng.translateText(
            'cls_Instalacion_filter_F_Instalacion_fvar_vCliente',
            'Cliente');
        this.vCliente.visible = true;
        this.vCliente.enabled = true;
        this.vCliente.mandatory = false;
        this.vCliente.dataType = ModelConstants.Cliente.name;
        this.vCliente.text = '';
        this.vCliente.searchResults = [];
        this.vCliente.allowMultiSelect = false;
        this.vCliente.maxLength = 300;
        this.vCliente.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vCliente);

        this.vfMunicipio = new FieldOVLenseSearch(this.langMng);
        this.vfMunicipio.nameInRequest = 'vfmunicipio';
        this.vfMunicipio.alias = this.langMng.translateText(
            'cls_Instalacion_filter_F_Instalacion_fvar_vfMunicipio',
            'Municipio');
        this.vfMunicipio.visible = true;
        this.vfMunicipio.enabled = true;
        this.vfMunicipio.mandatory = false;
        this.vfMunicipio.dataType = ModelConstants.Municipio.name;
        this.vfMunicipio.text = '';
        this.vfMunicipio.searchResults = [];
        this.vfMunicipio.allowMultiSelect = false;
        this.vfMunicipio.maxLength = 300;
        this.vfMunicipio.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfMunicipio);

        this.vfZona = new FieldOVPreload(this.langMng);
        this.vfZona.nameInRequest = 'vfzona';
        this.vfZona.alias = this.langMng.translateText(
            'cls_Instalacion_filter_F_Instalacion_fvar_vfZona',
            'Zona');
        this.vfZona.visible = true;
        this.vfZona.enabled = true;
        this.vfZona.mandatory = false;
        this.vfZona.dataType = ModelConstants.Zona.name;
        this.vfZona.preloadValues = [];
        this.vfZona.allowMultiSelect = false;
        this.vfZona.maxLength = 300;
        this.vfZona.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfZona);
    }

   /**
    * Process the selection backward navigation
    */
    public processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (exchInfo.originArgumentName === 'vCliente' && exchInfo.selectedOids && exchInfo.selectedOids.length > 0) {
            this.vCliente.setValue(exchInfo.selectedOids);
            this.executeDependecyRulesvcliente('SetValue', true);
        }

        if (exchInfo.originArgumentName === 'vfMunicipio' && exchInfo.selectedOids && exchInfo.selectedOids.length > 0) {
            this.vfMunicipio.setValue(exchInfo.selectedOids);
            this.executeDependecyRulesvfmunicipio('SetValue', true);
        }

    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('vCliente'.toLowerCase() === argumentName.toLowerCase()) {
            this.vCliente.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'P_Clientes';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('vfMunicipio'.toLowerCase() === argumentName.toLowerCase()) {
            this.vfMunicipio.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'P_Municipios';
            this.util.navigateSelectionForward(exchInfo);
        }
    }

    /**
     * Process the change in the search text in the vCliente variable
     */
    public onvclienteChange() {
        this.executeLenseSearch(this.vCliente, ModelConstants.Cliente.name, 'DSS_Cliente', []);
        this.executeDependecyRulesvcliente('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the vCliente variable
     */
    public processvclienteSelected(index: number): void {
        this.vCliente.processIndexSelected(index);
        this.executeDependecyRulesvcliente('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisCliente lense search argument
     */
    public cleanvcliente(): void {
        this.clearValidationMessages();
        this.vCliente.clean();
        this.executeDependecyRulesvcliente('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Set the supplementary information to the vCliente argument
     */
    private setSuppInfovcliente(): void {
        this.setSuplementaryInformationToField(this.vCliente, ModelConstants.Cliente.name, 'NombreRazonSocial');
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for vCliente variable
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesvcliente(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfovcliente();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Process the change in the search text in the vfMunicipio variable
     */
    public onvfmunicipioChange() {
        this.executeLenseSearch(this.vfMunicipio, ModelConstants.Municipio.name, 'DSS_Municipio', []);
        this.executeDependecyRulesvfmunicipio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the vfMunicipio variable
     */
    public processvfmunicipioSelected(index: number): void {
        this.vfMunicipio.processIndexSelected(index);
        this.executeDependecyRulesvfmunicipio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisCliente lense search argument
     */
    public cleanvfmunicipio(): void {
        this.clearValidationMessages();
        this.vfMunicipio.clean();
        this.executeDependecyRulesvfmunicipio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Set the supplementary information to the vfMunicipio argument
     */
    private setSuppInfovfmunicipio(): void {
        this.setSuplementaryInformationToField(this.vfMunicipio, ModelConstants.Municipio.name, 'Nombre');
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for vfMunicipio variable
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesvfmunicipio(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfovfmunicipio();
        }
        // Load dependent preload
        if ('SetValue' === event) {
            this.loadPreloadvfzona();
        }
        this.executePendingDependencyRules();
    }

    public loadPreload(): void {
    }


    /**
     * Search the preload values of field vfZona
     */
    private loadPreloadvfzona(): void {
        if (this.vfMunicipio.getSelectedInstances().length === 1) {
            this.executeSearchPreload(this.vfZona, ModelConstants.Zona.name, 'DSS_Zona',
                '',  ['Instalacion_F_Instalacion_vfZona_NavFilter']);
        } else {
            this.vfZona.cleanPreload();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }
}
