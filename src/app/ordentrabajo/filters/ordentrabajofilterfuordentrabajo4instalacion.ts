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
 * Manages the filter F_OrdenTrabajo4Instalacion of class OrdenTrabajo
 */
export class OrdenTrabajoFilterFuOrdenTrabajo4Instalacion extends AbstractFilter {

    /** Filter variables */
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
        this.title = this.langMng.translateText('cls_OrdenTrabajo_filter_F_OrdenTrabajo4Instalacion',
            'Buscar');
        this.filterName = 'F_OrdenTrabajo4Instalacion';
    }

    /**
     * Initialize the filter
     */
    public initializeComponents(): void {

        this.vfEstado = new FieldDefinedSelection(this.langMng);
        this.vfEstado.nameInRequest = 'vfestado';
        this.vfEstado.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_filter_F_OrdenTrabajo4Instalacion_fvar_vfEstado',
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
            'cls_OrdenTrabajo_filter_F_OrdenTrabajo4Instalacion_fvar_vfTipoOrden',
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
            'cls_OrdenTrabajo_filter_F_OrdenTrabajo4Instalacion_fvar_vfDesde',
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
            'cls_OrdenTrabajo_filter_F_OrdenTrabajo4Instalacion_fvar_vfHasta',
            'Hasta');
        this.vfHasta.visible = true;
        this.vfHasta.enabled = true;
        this.vfHasta.mandatory = false;
        this.vfHasta.dataType = Field.dtDate;
        this.vfHasta.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfHasta);
    }
}
