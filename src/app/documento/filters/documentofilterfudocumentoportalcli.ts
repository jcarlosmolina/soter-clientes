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
 * Manages the filter F_DocumentoPortalCli of class Documento
 */
export class DocumentoFilterFuDocumentoPortalCli extends AbstractFilter {

    /** Filter variables */
    public vFechaIni: Field;
    public vFechaFin: Field;
    public vTipo: FieldDefinedSelection;

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
        this.title = this.langMng.translateText('cls_Documento_filter_F_DocumentoPortalCli',
            'Buscar');
        this.filterName = 'F_DocumentoPortalCli';
    }

    /**
     * Initialize the filter
     */
    public initializeComponents(): void {

        this.vFechaIni = new Field(this.langMng);
        this.vFechaIni.nameInRequest = 'vfechaini';
        this.vFechaIni.alias = this.langMng.translateText(
            'cls_Documento_filter_F_DocumentoPortalCli_fvar_vFechaIni',
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
            'cls_Documento_filter_F_DocumentoPortalCli_fvar_vFechaFin',
            'Fecha <=');
        this.vFechaFin.visible = true;
        this.vFechaFin.enabled = true;
        this.vFechaFin.mandatory = false;
        this.vFechaFin.dataType = Field.dtDate;
        this.vFechaFin.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vFechaFin);

        this.vTipo = new FieldDefinedSelection(this.langMng);
        this.vTipo.nameInRequest = 'vtipo';
        this.vTipo.alias = this.langMng.translateText(
            'cls_Documento_filter_F_DocumentoPortalCli_fvar_vTipo',
            'Tipo documento');
        this.vTipo.visible = true;
        this.vTipo.enabled = true;
        this.vTipo.mandatory = false;
        this.vTipo.dataType = Field.dtString;
        this.vTipo.options = DefinedSelections.DS_TIPODOCPORTALCLI;
        this.vTipo.maxLength = 50;
        this.vTipo.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vTipo);
    }
}
