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
 * Manages the filter F_Documento of class Documento
 */
export class DocumentoFilterFuDocumento extends AbstractFilter {

    /** Filter variables */
    public vTipoDoc: Field;
    public vIdentificador: Field;
    public vReferencia: Field;
    public vClienteCodigo: Field;

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
        this.title = this.langMng.translateText('cls_Documento_filter_F_Documento',
            'Buscar');
        this.filterName = 'F_Documento';
    }

    /**
     * Initialize the filter
     */
    public initializeComponents(): void {

        this.vTipoDoc = new Field(this.langMng);
        this.vTipoDoc.nameInRequest = 'vtipodoc';
        this.vTipoDoc.alias = this.langMng.translateText(
            'cls_Documento_filter_F_Documento_fvar_vTipoDoc',
            'Tipo documento');
        this.vTipoDoc.visible = true;
        this.vTipoDoc.enabled = true;
        this.vTipoDoc.mandatory = false;
        this.vTipoDoc.dataType = Field.dtString;
        this.vTipoDoc.maxLength = 50;
        this.vTipoDoc.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vTipoDoc);

        this.vIdentificador = new Field(this.langMng);
        this.vIdentificador.nameInRequest = 'videntificador';
        this.vIdentificador.alias = this.langMng.translateText(
            'cls_Documento_filter_F_Documento_fvar_vIdentificador',
            'Id. Origen');
        this.vIdentificador.visible = true;
        this.vIdentificador.enabled = true;
        this.vIdentificador.mandatory = false;
        this.vIdentificador.dataType = Field.dtString;
        this.vIdentificador.maxLength = 50;
        this.vIdentificador.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vIdentificador);

        this.vReferencia = new Field(this.langMng);
        this.vReferencia.nameInRequest = 'vreferencia';
        this.vReferencia.alias = this.langMng.translateText(
            'cls_Documento_filter_F_Documento_fvar_vReferencia',
            'Referencia');
        this.vReferencia.visible = true;
        this.vReferencia.enabled = true;
        this.vReferencia.mandatory = false;
        this.vReferencia.dataType = Field.dtString;
        this.vReferencia.maxLength = 50;
        this.vReferencia.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vReferencia);

        this.vClienteCodigo = new Field(this.langMng);
        this.vClienteCodigo.nameInRequest = 'vclientecodigo';
        this.vClienteCodigo.alias = this.langMng.translateText(
            'cls_Documento_filter_F_Documento_fvar_vClienteCodigo',
            'Código cliente');
        this.vClienteCodigo.visible = true;
        this.vClienteCodigo.enabled = true;
        this.vClienteCodigo.mandatory = false;
        this.vClienteCodigo.dataType = Field.dtString;
        this.vClienteCodigo.maxLength = 50;
        this.vClienteCodigo.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vClienteCodigo);
    }
}
