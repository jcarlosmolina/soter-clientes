import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { InstanceCache } from '../../common/app.cachedependencyrules';
import { ModelConstants } from '../../common/model.constants';
import { Field, FieldOVLenseSearch, Instance } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { ExchangeInfo } from '../../common/app.exchangeinfo';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';
import { UserFunctions } from '../../common/userFunctions';

/**
 * Manages the filter F_CodigoPostal of class CodigoPostal
 */
export class CodigoPostalFilterFuCodigoPostal extends AbstractFilter {

    /** Filter variables */
    public vCP: Field;
    public vMunicipio: FieldOVLenseSearch;
    public vProvincia: FieldOVLenseSearch;

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
        this.title = this.langMng.translateText('cls_CodigoPostal_filter_F_CodigoPostal',
            'Buscar');
        this.filterName = 'F_CodigoPostal';
    }

    /**
     * Initialize the filter
     */
    public initializeComponents(): void {

        this.vCP = new Field(this.langMng);
        this.vCP.nameInRequest = 'vcp';
        this.vCP.alias = this.langMng.translateText(
            'cls_CodigoPostal_filter_F_CodigoPostal_fvar_vCP',
            'CP');
        this.vCP.visible = true;
        this.vCP.enabled = true;
        this.vCP.mandatory = false;
        this.vCP.dataType = Field.dtString;
        this.vCP.maxLength = 10;
        this.vCP.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vCP);

        this.vMunicipio = new FieldOVLenseSearch(this.langMng);
        this.vMunicipio.nameInRequest = 'vmunicipio';
        this.vMunicipio.alias = this.langMng.translateText(
            'cls_CodigoPostal_filter_F_CodigoPostal_fvar_vMunicipio',
            'Municipio');
        this.vMunicipio.visible = true;
        this.vMunicipio.enabled = true;
        this.vMunicipio.mandatory = false;
        this.vMunicipio.dataType = ModelConstants.Municipio.name;
        this.vMunicipio.text = '';
        this.vMunicipio.searchResults = [];
        this.vMunicipio.allowMultiSelect = false;
        this.vMunicipio.maxLength = 300;
        this.vMunicipio.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vMunicipio);

        this.vProvincia = new FieldOVLenseSearch(this.langMng);
        this.vProvincia.nameInRequest = 'vprovincia';
        this.vProvincia.alias = this.langMng.translateText(
            'cls_CodigoPostal_filter_F_CodigoPostal_fvar_vProvincia',
            'Provincia');
        this.vProvincia.visible = true;
        this.vProvincia.enabled = true;
        this.vProvincia.mandatory = false;
        this.vProvincia.dataType = ModelConstants.Provincia.name;
        this.vProvincia.text = '';
        this.vProvincia.searchResults = [];
        this.vProvincia.allowMultiSelect = false;
        this.vProvincia.maxLength = 100;
        this.vProvincia.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vProvincia);
    }

   /**
    * Process the selection backward navigation
    */
    public processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (exchInfo.originArgumentName === 'vMunicipio' && exchInfo.selectedOids && exchInfo.selectedOids.length > 0) {
            this.vMunicipio.setValue(exchInfo.selectedOids);
            this.executeDependecyRulesvmunicipio('SetValue', true);
        }

        if (exchInfo.originArgumentName === 'vProvincia' && exchInfo.selectedOids && exchInfo.selectedOids.length > 0) {
            this.vProvincia.setValue(exchInfo.selectedOids);
            this.executeDependecyRulesvprovincia('SetValue', true);
        }

    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('vMunicipio'.toLowerCase() === argumentName.toLowerCase()) {
            this.vMunicipio.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'P_Municipios';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('vProvincia'.toLowerCase() === argumentName.toLowerCase()) {
            this.vProvincia.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'P_Provincias';
            this.util.navigateSelectionForward(exchInfo);
        }
    }

    /**
     * Process the change in the search text in the vMunicipio variable
     */
    public onvmunicipioChange() {
        this.executeLenseSearch(this.vMunicipio, ModelConstants.Municipio.name, 'DSS_Municipio', []);
        this.executeDependecyRulesvmunicipio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the vMunicipio variable
     */
    public processvmunicipioSelected(index: number): void {
        this.vMunicipio.processIndexSelected(index);
        this.executeDependecyRulesvmunicipio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisCliente lense search argument
     */
    public cleanvmunicipio(): void {
        this.clearValidationMessages();
        this.vMunicipio.clean();
        this.executeDependecyRulesvmunicipio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Set the supplementary information to the vMunicipio argument
     */
    private setSuppInfovmunicipio(): void {
        this.setSuplementaryInformationToField(this.vMunicipio, ModelConstants.Municipio.name, 'Nombre');
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for vMunicipio variable
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesvmunicipio(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfovmunicipio();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Process the change in the search text in the vProvincia variable
     */
    public onvprovinciaChange() {
        this.executeLenseSearch(this.vProvincia, ModelConstants.Provincia.name, 'DSS_Provincia', []);
        this.executeDependecyRulesvprovincia('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the vProvincia variable
     */
    public processvprovinciaSelected(index: number): void {
        this.vProvincia.processIndexSelected(index);
        this.executeDependecyRulesvprovincia('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisCliente lense search argument
     */
    public cleanvprovincia(): void {
        this.clearValidationMessages();
        this.vProvincia.clean();
        this.executeDependecyRulesvprovincia('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Set the supplementary information to the vProvincia argument
     */
    private setSuppInfovprovincia(): void {
        this.setSuplementaryInformationToField(this.vProvincia, ModelConstants.Provincia.name, 'Nombre');
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for vProvincia variable
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesvprovincia(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfovprovincia();
        }
        this.executePendingDependencyRules();
    }
}
