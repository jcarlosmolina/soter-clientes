import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { InstanceCache } from '../../common/app.cachedependencyrules';
import { ModelConstants } from '../../common/model.constants';
import { Field, FieldDefinedSelection, FieldOVPreload, Instance } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';
import { DefinedSelections } from '../../common/definedSelection';
import { UserFunctions } from '../../common/userFunctions';

/**
 * Manages the filter F_ElementoSistema of class ElementoSistema
 */
export class ElementoSistemaFilterFuElementoSistema extends AbstractFilter {

    /** Filter variables */
    public vfTipoElemento: FieldOVPreload;
    public vfNombre: Field;
    public vfNumSerie: Field;
    public vfZona: Field;
    public vfPendienteRevision: FieldDefinedSelection;

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
        this.title = this.langMng.translateText('cls_ElementoSistema_filter_F_ElementoSistema',
            'Buscar');
        this.filterName = 'F_ElementoSistema';
    }

    /**
     * Initialize the filter
     */
    public initializeComponents(): void {

        this.vfTipoElemento = new FieldOVPreload(this.langMng);
        this.vfTipoElemento.nameInRequest = 'vftipoelemento';
        this.vfTipoElemento.alias = this.langMng.translateText(
            'cls_ElementoSistema_filter_F_ElementoSistema_fvar_vfTipoElemento',
            'Tipo de elemento');
        this.vfTipoElemento.visible = true;
        this.vfTipoElemento.enabled = true;
        this.vfTipoElemento.mandatory = false;
        this.vfTipoElemento.dataType = ModelConstants.Tipoelemento.name;
        this.vfTipoElemento.preloadValues = [];
        this.vfTipoElemento.allowMultiSelect = false;
        this.vfTipoElemento.maxLength = 100;
        this.vfTipoElemento.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfTipoElemento);

        this.vfNombre = new Field(this.langMng);
        this.vfNombre.nameInRequest = 'vfnombre';
        this.vfNombre.alias = this.langMng.translateText(
            'cls_ElementoSistema_filter_F_ElementoSistema_fvar_vfNombre',
            'Nombre');
        this.vfNombre.visible = true;
        this.vfNombre.enabled = true;
        this.vfNombre.mandatory = false;
        this.vfNombre.dataType = Field.dtString;
        this.vfNombre.maxLength = 50;
        this.vfNombre.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfNombre);

        this.vfNumSerie = new Field(this.langMng);
        this.vfNumSerie.nameInRequest = 'vfnumserie';
        this.vfNumSerie.alias = this.langMng.translateText(
            'cls_ElementoSistema_filter_F_ElementoSistema_fvar_vfNumSerie',
            'Nº de serie');
        this.vfNumSerie.visible = true;
        this.vfNumSerie.enabled = true;
        this.vfNumSerie.mandatory = false;
        this.vfNumSerie.dataType = Field.dtString;
        this.vfNumSerie.maxLength = 20;
        this.vfNumSerie.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfNumSerie);

        this.vfZona = new Field(this.langMng);
        this.vfZona.nameInRequest = 'vfzona';
        this.vfZona.alias = this.langMng.translateText(
            'cls_ElementoSistema_filter_F_ElementoSistema_fvar_vfZona',
            'Zona');
        this.vfZona.visible = true;
        this.vfZona.enabled = true;
        this.vfZona.mandatory = false;
        this.vfZona.dataType = Field.dtString;
        this.vfZona.maxLength = 50;
        this.vfZona.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfZona);

        this.vfPendienteRevision = new FieldDefinedSelection(this.langMng);
        this.vfPendienteRevision.nameInRequest = 'vfpendienterevision';
        this.vfPendienteRevision.alias = this.langMng.translateText(
            'cls_ElementoSistema_filter_F_ElementoSistema_fvar_vfPendienteRevision',
            'Pdte revisar creación');
        this.vfPendienteRevision.visible = true;
        this.vfPendienteRevision.enabled = true;
        this.vfPendienteRevision.mandatory = false;
        this.vfPendienteRevision.dataType = Field.dtBool;
        this.vfPendienteRevision.options = DefinedSelections.DS_SI_NO;
        this.vfPendienteRevision.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfPendienteRevision);
    }

    public loadPreload(): void {

        // vfTipoElemento
        this.executeSearchPreload(this.vfTipoElemento, ModelConstants.Tipoelemento.name, 'DSS_TipoElemento',
            '', []);
    }

}
