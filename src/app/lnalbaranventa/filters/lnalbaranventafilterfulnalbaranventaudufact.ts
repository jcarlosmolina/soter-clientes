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
 * Manages the filter F_LnAlbaranVenta_D_Fact of class LnAlbaranVenta
 */
export class LnAlbaranVentaFilterFuLnAlbaranVentauDuFact extends AbstractFilter {

    /** Filter variables */
    public vfCodArt: Field;
    public vfDescArt: Field;
    public vfCodAlbaran: Field;

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
        this.title = this.langMng.translateText('cls_LnAlbaranVenta_filter_F_LnAlbaranVenta_D_Fact',
            'Buscar');
        this.filterName = 'F_LnAlbaranVenta_D_Fact';
    }

    /**
     * Initialize the filter
     */
    public initializeComponents(): void {

        this.vfCodArt = new Field(this.langMng);
        this.vfCodArt.nameInRequest = 'vfcodart';
        this.vfCodArt.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_filter_F_LnAlbaranVenta_D_Fact_fvar_vfCodArt',
            'Código artículo');
        this.vfCodArt.visible = true;
        this.vfCodArt.enabled = true;
        this.vfCodArt.mandatory = false;
        this.vfCodArt.dataType = Field.dtString;
        this.vfCodArt.maxLength = 20;
        this.vfCodArt.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfCodArt);

        this.vfDescArt = new Field(this.langMng);
        this.vfDescArt.nameInRequest = 'vfdescart';
        this.vfDescArt.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_filter_F_LnAlbaranVenta_D_Fact_fvar_vfDescArt',
            'Descripción artículo');
        this.vfDescArt.visible = true;
        this.vfDescArt.enabled = true;
        this.vfDescArt.mandatory = false;
        this.vfDescArt.dataType = Field.dtString;
        this.vfDescArt.maxLength = 20;
        this.vfDescArt.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfDescArt);

        this.vfCodAlbaran = new Field(this.langMng);
        this.vfCodAlbaran.nameInRequest = 'vfcodalbaran';
        this.vfCodAlbaran.alias = this.langMng.translateText(
            'cls_LnAlbaranVenta_filter_F_LnAlbaranVenta_D_Fact_fvar_vfCodAlbaran',
            'Código albarán');
        this.vfCodAlbaran.visible = true;
        this.vfCodAlbaran.enabled = true;
        this.vfCodAlbaran.mandatory = false;
        this.vfCodAlbaran.dataType = Field.dtInt;
        this.vfCodAlbaran.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfCodAlbaran);
    }
}
