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
 * Manages the filter F_Zona of class Zona
 */
export class ZonaFilterFuZona extends AbstractFilter {

    /** Filter variables */
    public vfNombre: Field;
    public vfMunicipio: FieldOVLenseSearch;

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
        this.title = this.langMng.translateText('cls_Zona_filter_F_Zona',
            'Buscar');
        this.filterName = 'F_Zona';
    }

    /**
     * Initialize the filter
     */
    public initializeComponents(): void {

        this.vfNombre = new Field(this.langMng);
        this.vfNombre.nameInRequest = 'vfnombre';
        this.vfNombre.alias = this.langMng.translateText(
            'cls_Zona_filter_F_Zona_fvar_vfNombre',
            'Nombre');
        this.vfNombre.visible = true;
        this.vfNombre.enabled = true;
        this.vfNombre.mandatory = false;
        this.vfNombre.dataType = Field.dtString;
        this.vfNombre.maxLength = 20;
        this.vfNombre.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfNombre);

        this.vfMunicipio = new FieldOVLenseSearch(this.langMng);
        this.vfMunicipio.nameInRequest = 'vfmunicipio';
        this.vfMunicipio.alias = this.langMng.translateText(
            'cls_Zona_filter_F_Zona_fvar_vfMunicipio',
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
    }

   /**
    * Process the selection backward navigation
    */
    public processSelectionBackward(exchInfo: ExchangeInfo): void {
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
        if ('vfMunicipio'.toLowerCase() === argumentName.toLowerCase()) {
            this.vfMunicipio.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'P_Municipios';
            this.util.navigateSelectionForward(exchInfo);
        }
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
        this.executePendingDependencyRules();
    }
}
