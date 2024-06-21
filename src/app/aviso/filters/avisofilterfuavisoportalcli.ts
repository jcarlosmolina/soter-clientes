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
 * Manages the filter F_AvisoPortalCli of class Aviso
 */
export class AvisoFilterFuAvisoPortalCli extends AbstractFilter {

    /** Filter variables */
    public vFechaIni: Field;
    public vFechaFin: Field;
    public vEstado: FieldDefinedSelection;
    public vUrgencia: FieldDefinedSelection;
    public vCerrado: FieldDefinedSelection;

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
        this.title = this.langMng.translateText('cls_Aviso_filter_F_AvisoPortalCli',
            'Buscar');
        this.filterName = 'F_AvisoPortalCli';
    }

    /**
     * Initialize the filter
     */
    public initializeComponents(): void {

        this.vFechaIni = new Field(this.langMng);
        this.vFechaIni.nameInRequest = 'vfechaini';
        this.vFechaIni.alias = this.langMng.translateText(
            'cls_Aviso_filter_F_AvisoPortalCli_fvar_vFechaIni',
            'Fecha >=');
        this.vFechaIni.visible = true;
        this.vFechaIni.enabled = true;
        this.vFechaIni.mandatory = false;
        this.vFechaIni.dataType = Field.dtDate;
        this.vFechaIni.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vFechaIni);

        this.vFechaFin = new Field(this.langMng);
        this.vFechaFin.nameInRequest = 'vfechafin';
        this.vFechaFin.alias = this.langMng.translateText(
            'cls_Aviso_filter_F_AvisoPortalCli_fvar_vFechaFin',
            'Fecha <=');
        this.vFechaFin.visible = true;
        this.vFechaFin.enabled = true;
        this.vFechaFin.mandatory = false;
        this.vFechaFin.dataType = Field.dtDate;
        this.vFechaFin.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vFechaFin);

        this.vEstado = new FieldDefinedSelection(this.langMng);
        this.vEstado.nameInRequest = 'vestado';
        this.vEstado.alias = this.langMng.translateText(
            'cls_Aviso_filter_F_AvisoPortalCli_fvar_vEstado',
            'Estado');
        this.vEstado.visible = true;
        this.vEstado.enabled = true;
        this.vEstado.mandatory = false;
        this.vEstado.dataType = Field.dtString;
        this.vEstado.options = DefinedSelections.DS_ESTADOAVISO;
        this.vEstado.maxLength = 1;
        this.vEstado.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vEstado);

        this.vUrgencia = new FieldDefinedSelection(this.langMng);
        this.vUrgencia.nameInRequest = 'vurgencia';
        this.vUrgencia.alias = this.langMng.translateText(
            'cls_Aviso_filter_F_AvisoPortalCli_fvar_vUrgencia',
            'Urgencia');
        this.vUrgencia.visible = true;
        this.vUrgencia.enabled = true;
        this.vUrgencia.mandatory = false;
        this.vUrgencia.dataType = Field.dtString;
        this.vUrgencia.options = DefinedSelections.DS_TAREA_URGENCIA;
        this.vUrgencia.maxLength = 1;
        this.vUrgencia.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vUrgencia);

        this.vCerrado = new FieldDefinedSelection(this.langMng);
        this.vCerrado.nameInRequest = 'vcerrado';
        this.vCerrado.alias = this.langMng.translateText(
            'cls_Aviso_filter_F_AvisoPortalCli_fvar_vCerrado',
            'Cerrado');
        this.vCerrado.visible = true;
        this.vCerrado.enabled = true;
        this.vCerrado.mandatory = false;
        this.vCerrado.dataType = Field.dtBool;
        this.vCerrado.options = DefinedSelections.DS_SI_NO;
        this.vCerrado.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vCerrado);
    }
}
