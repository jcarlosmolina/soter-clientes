import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { InstanceCache } from '../../common/app.cachedependencyrules';
import { ModelConstants } from '../../common/model.constants';
import { Field, FieldDefinedSelection, FieldOVLenseSearch, FieldOVPreload, Instance } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { ExchangeInfo } from '../../common/app.exchangeinfo';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';
import { DefinedSelections } from '../../common/definedSelection';
import { UserFunctions } from '../../common/userFunctions';

/**
 * Manages the filter F_AlbaranVenta of class AlbaranVenta
 */
export class AlbaranVentaFilterFuAlbaranVenta extends AbstractFilter {

    /** Filter variables */
    public vSerie: FieldOVPreload;
    public vCodAlbaran: Field;
    public vEstado: FieldDefinedSelection;
    public vCliente: FieldOVLenseSearch;
    public vCreacionDesde: Field;
    public vCreacionHasta: Field;
    public vEntregaDesde: Field;
    public vEntregaHasta: Field;
    public vDireccion: Field;

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
        this.title = this.langMng.translateText('cls_AlbaranVenta_filter_F_AlbaranVenta',
            'Buscar');
        this.filterName = 'F_AlbaranVenta';
    }

    /**
     * Initialize the filter
     */
    public initializeComponents(): void {

        this.vSerie = new FieldOVPreload(this.langMng);
        this.vSerie.nameInRequest = 'vserie';
        this.vSerie.alias = this.langMng.translateText(
            'cls_AlbaranVenta_filter_F_AlbaranVenta_fvar_vSerie',
            'Serie');
        this.vSerie.visible = true;
        this.vSerie.enabled = true;
        this.vSerie.mandatory = false;
        this.vSerie.dataType = ModelConstants.Seriealbaran.name;
        this.vSerie.preloadValues = [];
        this.vSerie.allowMultiSelect = false;
        this.vSerie.maxLength = 5;
        this.vSerie.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vSerie);

        this.vCodAlbaran = new Field(this.langMng);
        this.vCodAlbaran.nameInRequest = 'vcodalbaran';
        this.vCodAlbaran.alias = this.langMng.translateText(
            'cls_AlbaranVenta_filter_F_AlbaranVenta_fvar_vCodAlbaran',
            'Código');
        this.vCodAlbaran.visible = true;
        this.vCodAlbaran.enabled = true;
        this.vCodAlbaran.mandatory = false;
        this.vCodAlbaran.dataType = Field.dtInt;
        this.vCodAlbaran.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vCodAlbaran);

        this.vEstado = new FieldDefinedSelection(this.langMng);
        this.vEstado.nameInRequest = 'vestado';
        this.vEstado.alias = this.langMng.translateText(
            'cls_AlbaranVenta_filter_F_AlbaranVenta_fvar_vEstado',
            'Estado');
        this.vEstado.visible = true;
        this.vEstado.enabled = true;
        this.vEstado.mandatory = false;
        this.vEstado.dataType = Field.dtString;
        this.vEstado.options = DefinedSelections.DS_ALBARAN_ESTADO;
        this.vEstado.maxLength = 1;
        this.vEstado.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vEstado);

        this.vCliente = new FieldOVLenseSearch(this.langMng);
        this.vCliente.nameInRequest = 'vcliente';
        this.vCliente.alias = this.langMng.translateText(
            'cls_AlbaranVenta_filter_F_AlbaranVenta_fvar_vCliente',
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

        this.vCreacionDesde = new Field(this.langMng);
        this.vCreacionDesde.nameInRequest = 'vcreaciondesde';
        this.vCreacionDesde.alias = this.langMng.translateText(
            'cls_AlbaranVenta_filter_F_AlbaranVenta_fvar_vCreacionDesde',
            'Fecha desde');
        this.vCreacionDesde.visible = true;
        this.vCreacionDesde.enabled = true;
        this.vCreacionDesde.mandatory = false;
        this.vCreacionDesde.dataType = Field.dtDate;
        this.vCreacionDesde.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vCreacionDesde);

        this.vCreacionHasta = new Field(this.langMng);
        this.vCreacionHasta.nameInRequest = 'vcreacionhasta';
        this.vCreacionHasta.alias = this.langMng.translateText(
            'cls_AlbaranVenta_filter_F_AlbaranVenta_fvar_vCreacionHasta',
            'Fecha hasta');
        this.vCreacionHasta.visible = true;
        this.vCreacionHasta.enabled = true;
        this.vCreacionHasta.mandatory = false;
        this.vCreacionHasta.dataType = Field.dtDate;
        this.vCreacionHasta.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vCreacionHasta);

        this.vEntregaDesde = new Field(this.langMng);
        this.vEntregaDesde.nameInRequest = 'ventregadesde';
        this.vEntregaDesde.alias = this.langMng.translateText(
            'cls_AlbaranVenta_filter_F_AlbaranVenta_fvar_vEntregaDesde',
            'Entrega desde');
        this.vEntregaDesde.visible = true;
        this.vEntregaDesde.enabled = true;
        this.vEntregaDesde.mandatory = false;
        this.vEntregaDesde.dataType = Field.dtDate;
        this.vEntregaDesde.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vEntregaDesde);

        this.vEntregaHasta = new Field(this.langMng);
        this.vEntregaHasta.nameInRequest = 'ventregahasta';
        this.vEntregaHasta.alias = this.langMng.translateText(
            'cls_AlbaranVenta_filter_F_AlbaranVenta_fvar_vEntregaHasta',
            'Entrega hasta');
        this.vEntregaHasta.visible = true;
        this.vEntregaHasta.enabled = true;
        this.vEntregaHasta.mandatory = false;
        this.vEntregaHasta.dataType = Field.dtDate;
        this.vEntregaHasta.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vEntregaHasta);

        this.vDireccion = new Field(this.langMng);
        this.vDireccion.nameInRequest = 'vdireccion';
        this.vDireccion.alias = this.langMng.translateText(
            'cls_AlbaranVenta_filter_F_AlbaranVenta_fvar_vDireccion',
            'Dirección');
        this.vDireccion.visible = true;
        this.vDireccion.enabled = true;
        this.vDireccion.mandatory = false;
        this.vDireccion.dataType = Field.dtString;
        this.vDireccion.maxLength = 30;
        this.vDireccion.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vDireccion);
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

    public loadPreload(): void {

        // vSerie
        this.executeSearchPreload(this.vSerie, ModelConstants.Seriealbaran.name, 'DSS_SerieAlbaran',
            '', []);
    }

}
