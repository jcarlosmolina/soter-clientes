import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { InstanceCache } from '../../common/app.cachedependencyrules';
import { ModelConstants } from '../../common/model.constants';
import { Field } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';
import { UserFunctions } from '../../common/userFunctions';

/**
 * Manages the filter F_FacturaVentaPortalCli of class FacturaVenta
 */
export class FacturaVentaFilterFuFacturaVentaPortalCli extends AbstractFilter {

    /** Filter variables */
    public vfEstado: Field;
    public vfFechaEmiDesde: Field;
    public vfFechaEmiHasta: Field;

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
        this.title = this.langMng.translateText('cls_FacturaVenta_filter_F_FacturaVentaPortalCli',
            'Buscar');
        this.filterName = 'F_FacturaVentaPortalCli';
    }

    /**
     * Initialize the filter
     */
    public initializeComponents(): void {

        this.vfEstado = new Field(this.langMng);
        this.vfEstado.nameInRequest = 'vfestado';
        this.vfEstado.alias = this.langMng.translateText(
            'cls_FacturaVenta_filter_F_FacturaVentaPortalCli_fvar_vfEstado',
            'Estado');
        this.vfEstado.visible = true;
        this.vfEstado.enabled = true;
        this.vfEstado.mandatory = false;
        this.vfEstado.dataType = Field.dtString;
        this.vfEstado.maxLength = 1;
        this.vfEstado.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfEstado);

        this.vfFechaEmiDesde = new Field(this.langMng);
        this.vfFechaEmiDesde.nameInRequest = 'vffechaemidesde';
        this.vfFechaEmiDesde.alias = this.langMng.translateText(
            'cls_FacturaVenta_filter_F_FacturaVentaPortalCli_fvar_vfFechaEmiDesde',
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
            'cls_FacturaVenta_filter_F_FacturaVentaPortalCli_fvar_vfFechaEmiHasta',
            'F. Emisión hasta');
        this.vfFechaEmiHasta.visible = true;
        this.vfFechaEmiHasta.enabled = true;
        this.vfFechaEmiHasta.mandatory = false;
        this.vfFechaEmiHasta.dataType = Field.dtDate;
        this.vfFechaEmiHasta.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfFechaEmiHasta);
    }
}
