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
 * Manages the filter FP_Contrato of class Contrato
 */
export class ContratoFilterFPuContrato extends AbstractFilter {

    /** Filter variables */
    public vCliente: FieldOVLenseSearch;
    public vDesde: Field;
    public vHasta: Field;
    public vVigencia: FieldDefinedSelection;
    public vObjetoContrato: Field;

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
        this.title = this.langMng.translateText('cls_Contrato_filter_FP_Contrato',
            'Buscar');
        this.filterName = 'FP_Contrato';
    }

    /**
     * Initialize the filter
     */
    public initializeComponents(): void {

        this.vCliente = new FieldOVLenseSearch(this.langMng);
        this.vCliente.nameInRequest = 'vcliente';
        this.vCliente.alias = this.langMng.translateText(
            'cls_Contrato_filter_FP_Contrato_fvar_vCliente',
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

        this.vDesde = new Field(this.langMng);
        this.vDesde.nameInRequest = 'vdesde';
        this.vDesde.alias = this.langMng.translateText(
            'cls_Contrato_filter_FP_Contrato_fvar_vDesde',
            'Desde');
        this.vDesde.visible = true;
        this.vDesde.enabled = true;
        this.vDesde.mandatory = false;
        this.vDesde.dataType = Field.dtDate;
        this.vDesde.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vDesde);

        this.vHasta = new Field(this.langMng);
        this.vHasta.nameInRequest = 'vhasta';
        this.vHasta.alias = this.langMng.translateText(
            'cls_Contrato_filter_FP_Contrato_fvar_vHasta',
            'Hasta');
        this.vHasta.visible = true;
        this.vHasta.enabled = true;
        this.vHasta.mandatory = false;
        this.vHasta.dataType = Field.dtDate;
        this.vHasta.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vHasta);

        this.vVigencia = new FieldDefinedSelection(this.langMng);
        this.vVigencia.nameInRequest = 'vvigencia';
        this.vVigencia.alias = this.langMng.translateText(
            'cls_Contrato_filter_FP_Contrato_fvar_vVigencia',
            'Vigencia');
        this.vVigencia.visible = true;
        this.vVigencia.enabled = true;
        this.vVigencia.mandatory = false;
        this.vVigencia.dataType = Field.dtString;
        this.vVigencia.options = DefinedSelections.DS_VIGENCIACONTRATO;
        this.vVigencia.maxLength = 2;
        this.vVigencia.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vVigencia);

        this.vObjetoContrato = new Field(this.langMng);
        this.vObjetoContrato.nameInRequest = 'vobjetocontrato';
        this.vObjetoContrato.alias = this.langMng.translateText(
            'cls_Contrato_filter_FP_Contrato_fvar_vObjetoContrato',
            'Objeto contrato');
        this.vObjetoContrato.visible = true;
        this.vObjetoContrato.enabled = true;
        this.vObjetoContrato.mandatory = false;
        this.vObjetoContrato.dataType = Field.dtString;
        this.vObjetoContrato.maxLength = 50;
        this.vObjetoContrato.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vObjetoContrato);
    }

   /**
    * Process the selection backward navigation
    */
    public processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (exchInfo.originArgumentName === 'vCliente' && exchInfo.selectedOids && exchInfo.selectedOids.length > 0) {
            this.vCliente.setValue(exchInfo.selectedOids);
            this.executeDependecyRulesvcliente('SetValue', true);
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
}
