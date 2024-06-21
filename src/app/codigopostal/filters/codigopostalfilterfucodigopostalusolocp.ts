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
 * Manages the filter F_CodigoPostal_SoloCP of class CodigoPostal
 */
export class CodigoPostalFilterFuCodigoPostaluSoloCP extends AbstractFilter {

    /** Filter variables */
    public vCP: Field;

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
        this.title = this.langMng.translateText('cls_CodigoPostal_filter_F_CodigoPostal_SoloCP',
            'Buscar');
        this.filterName = 'F_CodigoPostal_SoloCP';
    }

    /**
     * Initialize the filter
     */
    public initializeComponents(): void {

        this.vCP = new Field(this.langMng);
        this.vCP.nameInRequest = 'vcp';
        this.vCP.alias = this.langMng.translateText(
            'cls_CodigoPostal_filter_F_CodigoPostal_SoloCP_fvar_vCP',
            'CP');
        this.vCP.visible = true;
        this.vCP.enabled = true;
        this.vCP.mandatory = false;
        this.vCP.dataType = Field.dtString;
        this.vCP.maxLength = 10;
        this.vCP.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vCP);
    }
}
