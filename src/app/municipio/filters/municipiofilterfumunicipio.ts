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
 * Manages the filter F_Municipio of class Municipio
 */
export class MunicipioFilterFuMunicipio extends AbstractFilter {

    /** Filter variables */
    public vouProvincia: FieldOVLenseSearch;
    public vuNombre: Field;

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
        this.title = this.langMng.translateText('cls_Municipio_filter_F_Municipio',
            'Buscar');
        this.filterName = 'F_Municipio';
    }

    /**
     * Initialize the filter
     */
    public initializeComponents(): void {

        this.vouProvincia = new FieldOVLenseSearch(this.langMng);
        this.vouProvincia.nameInRequest = 'vo_provincia';
        this.vouProvincia.alias = this.langMng.translateText(
            'cls_Municipio_filter_F_Municipio_fvar_vo_Provincia',
            'Provincia');
        this.vouProvincia.visible = true;
        this.vouProvincia.enabled = true;
        this.vouProvincia.mandatory = false;
        this.vouProvincia.dataType = ModelConstants.Provincia.name;
        this.vouProvincia.text = '';
        this.vouProvincia.searchResults = [];
        this.vouProvincia.allowMultiSelect = false;
        this.vouProvincia.maxLength = 100;
        this.vouProvincia.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vouProvincia);

        this.vuNombre = new Field(this.langMng);
        this.vuNombre.nameInRequest = 'v_nombre';
        this.vuNombre.alias = this.langMng.translateText(
            'cls_Municipio_filter_F_Municipio_fvar_v_Nombre',
            'Nombre');
        this.vuNombre.visible = true;
        this.vuNombre.enabled = true;
        this.vuNombre.mandatory = false;
        this.vuNombre.dataType = Field.dtString;
        this.vuNombre.maxLength = 50;
        this.vuNombre.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vuNombre);
    }

   /**
    * Process the selection backward navigation
    */
    public processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (exchInfo.originArgumentName === 'vouProvincia' && exchInfo.selectedOids && exchInfo.selectedOids.length > 0) {
            this.vouProvincia.setValue(exchInfo.selectedOids);
            this.executeDependecyRulesvouprovincia('SetValue', true);
        }

    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('vouProvincia'.toLowerCase() === argumentName.toLowerCase()) {
            this.vouProvincia.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'P_Provincias';
            this.util.navigateSelectionForward(exchInfo);
        }
    }

    /**
     * Process the change in the search text in the vo_Provincia variable
     */
    public onvouprovinciaChange() {
        this.executeLenseSearch(this.vouProvincia, ModelConstants.Provincia.name, 'DSS_Provincia', []);
        this.executeDependecyRulesvouprovincia('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the vo_Provincia variable
     */
    public processvouprovinciaSelected(index: number): void {
        this.vouProvincia.processIndexSelected(index);
        this.executeDependecyRulesvouprovincia('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisCliente lense search argument
     */
    public cleanvouprovincia(): void {
        this.clearValidationMessages();
        this.vouProvincia.clean();
        this.executeDependecyRulesvouprovincia('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Set the supplementary information to the vo_Provincia argument
     */
    private setSuppInfovouprovincia(): void {
        this.setSuplementaryInformationToField(this.vouProvincia, ModelConstants.Provincia.name, 'Nombre');
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for vo_Provincia variable
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesvouprovincia(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfovouprovincia();
        }
        this.executePendingDependencyRules();
    }
}
