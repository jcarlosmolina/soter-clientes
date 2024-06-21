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
 * Manages the filter F_Pais of class Pais
 */
export class PaisFilterFuPais extends AbstractFilter {

    /** Filter variables */
    public vfNombre: Field;

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
        this.title = this.langMng.translateText('cls_Pais_filter_F_Pais',
            'Buscar');
        this.filterName = 'F_Pais';
    }

    /**
     * Initialize the filter
     */
    public initializeComponents(): void {

        this.vfNombre = new Field(this.langMng);
        this.vfNombre.nameInRequest = 'vfnombre';
        this.vfNombre.alias = this.langMng.translateText(
            'cls_Pais_filter_F_Pais_fvar_vfNombre',
            'Nombre');
        this.vfNombre.visible = true;
        this.vfNombre.enabled = true;
        this.vfNombre.mandatory = false;
        this.vfNombre.dataType = Field.dtString;
        this.vfNombre.maxLength = 20;
        this.vfNombre.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfNombre);
    }
}
