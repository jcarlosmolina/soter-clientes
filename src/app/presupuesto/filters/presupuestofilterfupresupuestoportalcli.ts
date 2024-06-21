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
 * Manages the filter F_PresupuestoPortalCli of class Presupuesto
 */
export class PresupuestoFilterFuPresupuestoPortalCli extends AbstractFilter {

    /** Filter variables */
    public vfEstado: FieldDefinedSelection;
    public vfFechaDesde: Field;
    public vfFechaHasta: Field;

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
        this.title = this.langMng.translateText('cls_Presupuesto_filter_F_PresupuestoPortalCli',
            'Buscar');
        this.filterName = 'F_PresupuestoPortalCli';
    }

    /**
     * Initialize the filter
     */
    public initializeComponents(): void {

        this.vfEstado = new FieldDefinedSelection(this.langMng);
        this.vfEstado.nameInRequest = 'vfestado';
        this.vfEstado.alias = this.langMng.translateText(
            'cls_Presupuesto_filter_F_PresupuestoPortalCli_fvar_vfEstado',
            'Estado');
        this.vfEstado.visible = true;
        this.vfEstado.enabled = true;
        this.vfEstado.mandatory = false;
        this.vfEstado.dataType = Field.dtString;
        this.vfEstado.options = DefinedSelections.DS_PRESUPUESTO_ESTADO;
        this.vfEstado.maxLength = 25;
        this.vfEstado.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfEstado);

        this.vfFechaDesde = new Field(this.langMng);
        this.vfFechaDesde.nameInRequest = 'vffechadesde';
        this.vfFechaDesde.alias = this.langMng.translateText(
            'cls_Presupuesto_filter_F_PresupuestoPortalCli_fvar_vfFechaDesde',
            'Creación desde');
        this.vfFechaDesde.visible = true;
        this.vfFechaDesde.enabled = true;
        this.vfFechaDesde.mandatory = false;
        this.vfFechaDesde.dataType = Field.dtDate;
        this.vfFechaDesde.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfFechaDesde);

        this.vfFechaHasta = new Field(this.langMng);
        this.vfFechaHasta.nameInRequest = 'vffechahasta';
        this.vfFechaHasta.alias = this.langMng.translateText(
            'cls_Presupuesto_filter_F_PresupuestoPortalCli_fvar_vfFechaHasta',
            'Creación  hasta');
        this.vfFechaHasta.visible = true;
        this.vfFechaHasta.enabled = true;
        this.vfFechaHasta.mandatory = false;
        this.vfFechaHasta.dataType = Field.dtDate;
        this.vfFechaHasta.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfFechaHasta);
    }
}
