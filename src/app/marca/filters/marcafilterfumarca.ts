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
 * Manages the filter F_Marca of class Marca
 */
export class MarcaFilterFuMarca extends AbstractFilter {

    /** Filter variables */
    public vfDesc: Field;

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
        this.title = this.langMng.translateText('cls_Marca_filter_F_Marca',
            'Buscar');
        this.filterName = 'F_Marca';
    }

    /**
     * Initialize the filter
     */
    public initializeComponents(): void {

        this.vfDesc = new Field(this.langMng);
        this.vfDesc.nameInRequest = 'vfdesc';
        this.vfDesc.alias = this.langMng.translateText(
            'cls_Marca_filter_F_Marca_fvar_vfDesc',
            'Descripción');
        this.vfDesc.visible = true;
        this.vfDesc.enabled = true;
        this.vfDesc.mandatory = false;
        this.vfDesc.dataType = Field.dtString;
        this.vfDesc.maxLength = 20;
        this.vfDesc.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfDesc);
    }
}
