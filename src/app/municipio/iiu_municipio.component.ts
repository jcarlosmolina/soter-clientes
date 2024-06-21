import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field } from '../common/baseIUElements';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

export class MunicipioIIUuMunicipioComponent extends AbstractIIU {

    /** Display Set elements */
    public dseiduMunicipio: Field;
    public dseNombre: Field;
    public dseProvinciaNombre: Field;
    public dsePaisNombre: Field;

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param stdFun Standard functions
     * @param condNavMng Conditional manager
     * @param usrFunc User functions
     */
    constructor(
        public appGlobalInfo: AppGlobalInfo, public util: Util, public changeDetectorRef: ChangeDetectorRef,
        public langMng: LanguageMng, public stdFun: StandardFunctions,
        public condNavMng: ConditionalNavigationMng, public usrFunc: UserFunctions) {
        super(appGlobalInfo, util, changeDetectorRef, condNavMng);
        this.idXML = 'Clas_1699352150016603UIInst_1';
        this.className = ModelConstants.Municipio.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Municipio_iiu_IIU_Municipio',
            'Municipio');
        this.queryURL = '/api/MunicipioApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseiduMunicipio = new Field(this.langMng);
        this.dseiduMunicipio.nameInRequest = 'id_municipio';
        this.dseiduMunicipio.alias = this.langMng.translateText(
            'cls_Municipio_ds_DSP_Municipio_item_Clas_1699352150016603CjtoVis_1ICtjoVis_1',
            'Código');
        this.dseiduMunicipio.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016603CjtoVis_1ICtjoVis_1', ['Cliente']);
        this.dseiduMunicipio.enabled = false;
        this.dseiduMunicipio.mandatory = false;
        this.dseiduMunicipio.dataType = Field.dtAuto;
        this.dseiduMunicipio.assignCSS();
        this.fields.push(this.dseiduMunicipio);

        this.dseNombre = new Field(this.langMng);
        this.dseNombre.nameInRequest = 'nombre';
        this.dseNombre.alias = this.langMng.translateText(
            'cls_Municipio_ds_DSP_Municipio_item_Clas_1699352150016603CjtoVis_1ICtjoVis_2',
            'Nombre');
        this.dseNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016603CjtoVis_1ICtjoVis_2', ['Cliente']);
        this.dseNombre.enabled = false;
        this.dseNombre.mandatory = false;
        this.dseNombre.dataType = Field.dtString;
        this.dseNombre.maxLength = 300;
        this.dseNombre.assignCSS();
        this.fields.push(this.dseNombre);

        this.dseProvinciaNombre = new Field(this.langMng);
        this.dseProvinciaNombre.nameInRequest = 'provincia.nombre';
        this.dseProvinciaNombre.alias = this.langMng.translateText(
            'cls_Municipio_ds_DSP_Municipio_item_Clas_1699352150016603CjtoVis_1ICtjoVis_3',
            'Província');
        this.dseProvinciaNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016603CjtoVis_1ICtjoVis_3', ['Cliente']);
        this.dseProvinciaNombre.enabled = false;
        this.dseProvinciaNombre.mandatory = false;
        this.dseProvinciaNombre.dataType = Field.dtString;
        this.dseProvinciaNombre.maxLength = 100;
        this.dseProvinciaNombre.assignCSS();
        this.fields.push(this.dseProvinciaNombre);

        this.dsePaisNombre = new Field(this.langMng);
        this.dsePaisNombre.nameInRequest = 'pais.nombre';
        this.dsePaisNombre.alias = this.langMng.translateText(
            'cls_Municipio_ds_DSP_Municipio_item_Clas_1699352150016603CjtoVis_1ICtjoVis_4',
            'País');
        this.dsePaisNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016603CjtoVis_1ICtjoVis_4', ['Cliente']);
        this.dsePaisNombre.enabled = false;
        this.dsePaisNombre.mandatory = false;
        this.dsePaisNombre.dataType = Field.dtString;
        this.dsePaisNombre.maxLength = 100;
        this.dsePaisNombre.assignCSS();
        this.fields.push(this.dsePaisNombre);

    }
}
