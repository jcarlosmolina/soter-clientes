import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { InstanceCache } from '../../common/app.cachedependencyrules';
import { ModelConstants } from '../../common/model.constants';
import { Field, FieldDefinedSelection } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';
import { DefinedSelections } from '../../common/definedSelection';
import { UserFunctions } from '../../common/userFunctions';

/**
 * Manages the filter F_FacturaVentaObs of class FacturaVenta
 */
export class FacturaVentaFilterFuFacturaVentaObs extends AbstractFilter {

    /** Filter variables */
    public vfEstado: FieldDefinedSelection;
    public vfNombreRazon: Field;
    public vfFechaEmiDesde: Field;
    public vfFechaEmiHasta: Field;
    public vrfCobrada: FieldDefinedSelection;
    public vrfContabilizada: FieldDefinedSelection;

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
        this.title = this.langMng.translateText('cls_FacturaVenta_filter_F_FacturaVentaObs',
            'Buscar');
        this.filterName = 'F_FacturaVentaObs';
    }

    /**
     * Initialize the filter
     */
    public initializeComponents(): void {

        this.vfEstado = new FieldDefinedSelection(this.langMng);
        this.vfEstado.nameInRequest = 'vfestado';
        this.vfEstado.alias = this.langMng.translateText(
            'cls_FacturaVenta_filter_F_FacturaVentaObs_fvar_vfEstado',
            'Estado');
        this.vfEstado.visible = true;
        this.vfEstado.enabled = true;
        this.vfEstado.mandatory = false;
        this.vfEstado.dataType = Field.dtString;
        this.vfEstado.options = DefinedSelections.DS_ESTADOFACTURAVENTA;
        this.vfEstado.maxLength = 1;
        this.vfEstado.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfEstado);

        this.vfNombreRazon = new Field(this.langMng);
        this.vfNombreRazon.nameInRequest = 'vfnombrerazon';
        this.vfNombreRazon.alias = this.langMng.translateText(
            'cls_FacturaVenta_filter_F_FacturaVentaObs_fvar_vfNombreRazon',
            'Nombre / Razón social');
        this.vfNombreRazon.visible = true;
        this.vfNombreRazon.enabled = true;
        this.vfNombreRazon.mandatory = false;
        this.vfNombreRazon.dataType = Field.dtString;
        this.vfNombreRazon.maxLength = 20;
        this.vfNombreRazon.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfNombreRazon);

        this.vfFechaEmiDesde = new Field(this.langMng);
        this.vfFechaEmiDesde.nameInRequest = 'vffechaemidesde';
        this.vfFechaEmiDesde.alias = this.langMng.translateText(
            'cls_FacturaVenta_filter_F_FacturaVentaObs_fvar_vfFechaEmiDesde',
            'F. Emisión desde');
        this.vfFechaEmiDesde.visible = true;
        this.vfFechaEmiDesde.enabled = true;
        this.vfFechaEmiDesde.mandatory = false;
        this.vfFechaEmiDesde.dataType = Field.dtDate;
        this.vfFechaEmiDesde.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfFechaEmiDesde);

        this.vfFechaEmiHasta = new Field(this.langMng);
        this.vfFechaEmiHasta.nameInRequest = 'vffechaemihasta';
        this.vfFechaEmiHasta.alias = this.langMng.translateText(
            'cls_FacturaVenta_filter_F_FacturaVentaObs_fvar_vfFechaEmiHasta',
            'F. Emisión hasta');
        this.vfFechaEmiHasta.visible = true;
        this.vfFechaEmiHasta.enabled = true;
        this.vfFechaEmiHasta.mandatory = false;
        this.vfFechaEmiHasta.dataType = Field.dtDate;
        this.vfFechaEmiHasta.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfFechaEmiHasta);

        this.vrfCobrada = new FieldDefinedSelection(this.langMng);
        this.vrfCobrada.nameInRequest = 'vrfcobrada';
        this.vrfCobrada.alias = this.langMng.translateText(
            'cls_FacturaVenta_filter_F_FacturaVentaObs_fvar_vrfCobrada',
            'Cobrada');
        this.vrfCobrada.visible = true;
        this.vrfCobrada.enabled = true;
        this.vrfCobrada.mandatory = false;
        this.vrfCobrada.dataType = Field.dtBool;
        this.vrfCobrada.options = DefinedSelections.DS_SI_NO;
        this.vrfCobrada.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vrfCobrada);

        this.vrfContabilizada = new FieldDefinedSelection(this.langMng);
        this.vrfContabilizada.nameInRequest = 'vrfcontabilizada';
        this.vrfContabilizada.alias = this.langMng.translateText(
            'cls_FacturaVenta_filter_F_FacturaVentaObs_fvar_vrfContabilizada',
            'Contabilizada');
        this.vrfContabilizada.visible = true;
        this.vrfContabilizada.enabled = true;
        this.vrfContabilizada.mandatory = false;
        this.vrfContabilizada.dataType = Field.dtBool;
        this.vrfContabilizada.options = DefinedSelections.DS_SI_NO;
        this.vrfContabilizada.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vrfContabilizada);
    }
}
