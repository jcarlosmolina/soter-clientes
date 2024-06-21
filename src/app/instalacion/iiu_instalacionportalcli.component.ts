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

export class InstalacionIIUuInstalacionPortalCliComponent extends AbstractIIU {

    /** Display Set elements */
    public dseClienteNombreRazonSocial: Field;
    public dseiduInstalacion: Field;
    public dseNombre: Field;
    public dseDireccion: Field;
    public dseZonaNombre: Field;
    public dseTelefono: Field;
    public dseFax: Field;
    public dseTipoLocal: Field;
    public dseHorarioAproximado: Field;

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
        this.idXML = 'Clas_1699352150016405UIInst_4';
        this.className = ModelConstants.Instalacion.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Instalacion_iiu_IIU_InstalacionPortalCli',
            'Instalación');
        this.queryURL = '/api/InstalacionApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseClienteNombreRazonSocial = new Field(this.langMng);
        this.dseClienteNombreRazonSocial.nameInRequest = 'cliente.nombrerazonsocial';
        this.dseClienteNombreRazonSocial.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_InstalacionPortalCli_item_Clas_1699352150016405CjtoVis_7ICtjoVis_1',
            'Cliente');
        this.dseClienteNombreRazonSocial.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_7ICtjoVis_1', ['Cliente']);
        this.dseClienteNombreRazonSocial.enabled = false;
        this.dseClienteNombreRazonSocial.mandatory = false;
        this.dseClienteNombreRazonSocial.dataType = Field.dtString;
        this.dseClienteNombreRazonSocial.maxLength = 300;
        this.dseClienteNombreRazonSocial.assignCSS();
        this.fields.push(this.dseClienteNombreRazonSocial);

        this.dseiduInstalacion = new Field(this.langMng);
        this.dseiduInstalacion.nameInRequest = 'id_instalacion';
        this.dseiduInstalacion.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_InstalacionPortalCli_item_Clas_1699352150016405CjtoVis_7ICtjoVis_2',
            'Código');
        this.dseiduInstalacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_7ICtjoVis_2', ['Cliente']);
        this.dseiduInstalacion.enabled = false;
        this.dseiduInstalacion.mandatory = false;
        this.dseiduInstalacion.dataType = Field.dtAuto;
        this.dseiduInstalacion.assignCSS();
        this.fields.push(this.dseiduInstalacion);

        this.dseNombre = new Field(this.langMng);
        this.dseNombre.nameInRequest = 'nombre';
        this.dseNombre.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_InstalacionPortalCli_item_Clas_1699352150016405CjtoVis_7ICtjoVis_3',
            'Nombre');
        this.dseNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_7ICtjoVis_3', ['Cliente']);
        this.dseNombre.enabled = false;
        this.dseNombre.mandatory = false;
        this.dseNombre.dataType = Field.dtString;
        this.dseNombre.maxLength = 100;
        this.dseNombre.assignCSS();
        this.fields.push(this.dseNombre);

        this.dseDireccion = new Field(this.langMng);
        this.dseDireccion.nameInRequest = 'direccion';
        this.dseDireccion.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_InstalacionPortalCli_item_Clas_1699352150016405CjtoVis_7ICtjoVis_4',
            'Dirección');
        this.dseDireccion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_7ICtjoVis_4', ['Cliente']);
        this.dseDireccion.enabled = false;
        this.dseDireccion.mandatory = false;
        this.dseDireccion.dataType = Field.dtString;
        this.dseDireccion.maxLength = 300;
        this.dseDireccion.assignCSS();
        this.fields.push(this.dseDireccion);

        this.dseZonaNombre = new Field(this.langMng);
        this.dseZonaNombre.nameInRequest = 'zona.nombre';
        this.dseZonaNombre.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_InstalacionPortalCli_item_Clas_1699352150016405CjtoVis_7ICtjoVis_21',
            'Zona');
        this.dseZonaNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_7ICtjoVis_21', ['Cliente']);
        this.dseZonaNombre.enabled = false;
        this.dseZonaNombre.mandatory = false;
        this.dseZonaNombre.dataType = Field.dtString;
        this.dseZonaNombre.maxLength = 300;
        this.dseZonaNombre.assignCSS();
        this.fields.push(this.dseZonaNombre);

        this.dseTelefono = new Field(this.langMng);
        this.dseTelefono.nameInRequest = 'telefono';
        this.dseTelefono.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_InstalacionPortalCli_item_Clas_1699352150016405CjtoVis_7ICtjoVis_7',
            'Teléfono');
        this.dseTelefono.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_7ICtjoVis_7', ['Cliente']);
        this.dseTelefono.enabled = false;
        this.dseTelefono.mandatory = false;
        this.dseTelefono.dataType = Field.dtString;
        this.dseTelefono.maxLength = 20;
        this.dseTelefono.assignCSS();
        this.fields.push(this.dseTelefono);

        this.dseFax = new Field(this.langMng);
        this.dseFax.nameInRequest = 'fax';
        this.dseFax.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_InstalacionPortalCli_item_Clas_1699352150016405CjtoVis_7ICtjoVis_8',
            'Fax');
        this.dseFax.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_7ICtjoVis_8', ['Cliente']);
        this.dseFax.enabled = false;
        this.dseFax.mandatory = false;
        this.dseFax.dataType = Field.dtString;
        this.dseFax.maxLength = 20;
        this.dseFax.assignCSS();
        this.fields.push(this.dseFax);

        this.dseTipoLocal = new Field(this.langMng);
        this.dseTipoLocal.nameInRequest = 'tipolocal';
        this.dseTipoLocal.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_InstalacionPortalCli_item_Clas_1699352150016405CjtoVis_7ICtjoVis_13',
            'Tipo local');
        this.dseTipoLocal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_7ICtjoVis_13', ['Cliente']);
        this.dseTipoLocal.enabled = false;
        this.dseTipoLocal.mandatory = false;
        this.dseTipoLocal.dataType = Field.dtString;
        this.dseTipoLocal.maxLength = 300;
        this.dseTipoLocal.assignCSS();
        this.fields.push(this.dseTipoLocal);

        this.dseHorarioAproximado = new Field(this.langMng);
        this.dseHorarioAproximado.nameInRequest = 'horarioaproximado';
        this.dseHorarioAproximado.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_InstalacionPortalCli_item_Clas_1699352150016405CjtoVis_7ICtjoVis_14',
            'Horario aproximado');
        this.dseHorarioAproximado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_7ICtjoVis_14', ['Cliente']);
        this.dseHorarioAproximado.enabled = false;
        this.dseHorarioAproximado.mandatory = false;
        this.dseHorarioAproximado.dataType = Field.dtString;
        this.dseHorarioAproximado.maxLength = 300;
        this.dseHorarioAproximado.assignCSS();
        this.fields.push(this.dseHorarioAproximado);

    }

    /**
     * Initialize the action items
     */
    public initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1699352150016405AccOfer_5ElemAcc_5';
        accItem.alias = this.langMng.translateText(
            'cls_Instalacion_act_APIU_InstalacionPortalCli_item_Clas_1699352150016405AccOfer_5ElemAcc_5',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Cliente.name];
        accItem.targetClass = ModelConstants.Instalacion.name;
        accItem.targetUI = ModelConstants.Instalacion.siuutmodificarcli;
        this.actions.push(accItem);

    }
}
