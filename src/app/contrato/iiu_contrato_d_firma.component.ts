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

export class ContratoIIUuContratouDuFirmaComponent extends AbstractIIU {

    /** Display Set elements */
    public dseFechaFirma: Field;
    public dseDireccionFirma: Field;
    public dseMunicipioFirmaNombre: Field;
    public dseCodigoPostalFirmaCP: Field;
    public dsePaisFirmaNombre: Field;

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
        this.idXML = 'Clas_1699352150016715UIInst_2';
        this.className = ModelConstants.Contrato.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Contrato_iiu_IIU_Contrato_D_Firma',
            'Firma');
        this.queryURL = '/api/ContratoApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseFechaFirma = new Field(this.langMng);
        this.dseFechaFirma.nameInRequest = 'fechafirma';
        this.dseFechaFirma.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSI_Contrato_Firma_item_Clas_1699352150016715CjtoVis_5ICtjoVis_1',
            'Fecha firma');
        this.dseFechaFirma.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016715CjtoVis_5ICtjoVis_1', ['Cliente']);
        this.dseFechaFirma.enabled = false;
        this.dseFechaFirma.mandatory = false;
        this.dseFechaFirma.dataType = Field.dtDate;
        this.dseFechaFirma.assignCSS();
        this.fields.push(this.dseFechaFirma);

        this.dseDireccionFirma = new Field(this.langMng);
        this.dseDireccionFirma.nameInRequest = 'direccionfirma';
        this.dseDireccionFirma.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSI_Contrato_Firma_item_Clas_1699352150016715CjtoVis_5ICtjoVis_2',
            'Dirección');
        this.dseDireccionFirma.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016715CjtoVis_5ICtjoVis_2', ['Cliente']);
        this.dseDireccionFirma.enabled = false;
        this.dseDireccionFirma.mandatory = false;
        this.dseDireccionFirma.dataType = Field.dtString;
        this.dseDireccionFirma.maxLength = 300;
        this.dseDireccionFirma.assignCSS();
        this.fields.push(this.dseDireccionFirma);

        this.dseMunicipioFirmaNombre = new Field(this.langMng);
        this.dseMunicipioFirmaNombre.nameInRequest = 'municipiofirma.nombre';
        this.dseMunicipioFirmaNombre.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSI_Contrato_Firma_item_Clas_1699352150016715CjtoVis_5ICtjoVis_3',
            'Municipio');
        this.dseMunicipioFirmaNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016715CjtoVis_5ICtjoVis_3', ['Cliente']);
        this.dseMunicipioFirmaNombre.enabled = false;
        this.dseMunicipioFirmaNombre.mandatory = false;
        this.dseMunicipioFirmaNombre.dataType = Field.dtString;
        this.dseMunicipioFirmaNombre.maxLength = 300;
        this.dseMunicipioFirmaNombre.assignCSS();
        this.fields.push(this.dseMunicipioFirmaNombre);

        this.dseCodigoPostalFirmaCP = new Field(this.langMng);
        this.dseCodigoPostalFirmaCP.nameInRequest = 'codigopostalfirma.cp';
        this.dseCodigoPostalFirmaCP.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSI_Contrato_Firma_item_Clas_1699352150016715CjtoVis_5ICtjoVis_4',
            'Código Postal');
        this.dseCodigoPostalFirmaCP.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016715CjtoVis_5ICtjoVis_4', ['Cliente']);
        this.dseCodigoPostalFirmaCP.enabled = false;
        this.dseCodigoPostalFirmaCP.mandatory = false;
        this.dseCodigoPostalFirmaCP.dataType = Field.dtString;
        this.dseCodigoPostalFirmaCP.maxLength = 10;
        this.dseCodigoPostalFirmaCP.assignCSS();
        this.fields.push(this.dseCodigoPostalFirmaCP);

        this.dsePaisFirmaNombre = new Field(this.langMng);
        this.dsePaisFirmaNombre.nameInRequest = 'paisfirma.nombre';
        this.dsePaisFirmaNombre.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSI_Contrato_Firma_item_Clas_1699352150016715CjtoVis_5ICtjoVis_5',
            'País');
        this.dsePaisFirmaNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016715CjtoVis_5ICtjoVis_5', ['Cliente']);
        this.dsePaisFirmaNombre.enabled = false;
        this.dsePaisFirmaNombre.mandatory = false;
        this.dsePaisFirmaNombre.dataType = Field.dtString;
        this.dsePaisFirmaNombre.maxLength = 100;
        this.dsePaisFirmaNombre.assignCSS();
        this.fields.push(this.dsePaisFirmaNombre);

    }
}
