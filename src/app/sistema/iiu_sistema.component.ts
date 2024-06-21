import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field, FieldDefinedSelection } from '../common/baseIUElements';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

export class SistemaIIUuSistemaComponent extends AbstractIIU {

    /** Display Set elements */
    public dseInstalacionClienteNombreRazonSocial: Field;
    public dseInstalacionNombre: Field;
    public dseiduSistema: Field;
    public dseTipoSistemaDescripcion: Field;
    public dseNombre: Field;
    public dseDescripcion: Field;
    public dseMarcaDescripcion: Field;
    public dseModeloDescripcion: Field;
    public dseTipoRiesgoDescripcion: Field;
    public dseGrado: FieldDefinedSelection;
    public dseCRANombre: Field;
    public dseModeloGrabador: Field;
    public dseUsuarioAccesoCRA: Field;
    public dseClaveAccesoCRA: Field;
    public dseOperativaCCTVDescripcion: Field;
    public dseOperativaFuego: Field;
    public dseNumAbonado: Field;
    public dseFechaInstalacion: Field;
    public dseFechaConexion: Field;
    public dseUbicacion: Field;
    public dsePendienteRevision: FieldDefinedSelection;

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
        this.idXML = 'Clas_1699352150016718UIInst_1';
        this.className = ModelConstants.Sistema.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Sistema_iiu_IIU_Sistema',
            'Sistema');
        this.queryURL = '/api/SistemaApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseInstalacionClienteNombreRazonSocial = new Field(this.langMng);
        this.dseInstalacionClienteNombreRazonSocial.nameInRequest = 'instalacion.cliente.nombrerazonsocial';
        this.dseInstalacionClienteNombreRazonSocial.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSI_Sistema_item_Clas_1699352150016718CjtoVis_2ICtjoVis_1',
            'Cliente');
        this.dseInstalacionClienteNombreRazonSocial.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_2ICtjoVis_1', ['Cliente']);
        this.dseInstalacionClienteNombreRazonSocial.enabled = false;
        this.dseInstalacionClienteNombreRazonSocial.mandatory = false;
        this.dseInstalacionClienteNombreRazonSocial.dataType = Field.dtString;
        this.dseInstalacionClienteNombreRazonSocial.maxLength = 300;
        this.dseInstalacionClienteNombreRazonSocial.assignCSS();
        this.fields.push(this.dseInstalacionClienteNombreRazonSocial);

        this.dseInstalacionNombre = new Field(this.langMng);
        this.dseInstalacionNombre.nameInRequest = 'instalacion.nombre';
        this.dseInstalacionNombre.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSI_Sistema_item_Clas_1699352150016718CjtoVis_2ICtjoVis_2',
            'Instalación');
        this.dseInstalacionNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_2ICtjoVis_2', ['Cliente']);
        this.dseInstalacionNombre.enabled = false;
        this.dseInstalacionNombre.mandatory = false;
        this.dseInstalacionNombre.dataType = Field.dtString;
        this.dseInstalacionNombre.maxLength = 100;
        this.dseInstalacionNombre.assignCSS();
        this.fields.push(this.dseInstalacionNombre);

        this.dseiduSistema = new Field(this.langMng);
        this.dseiduSistema.nameInRequest = 'id_sistema';
        this.dseiduSistema.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSI_Sistema_item_Clas_1699352150016718CjtoVis_2ICtjoVis_3',
            'Código');
        this.dseiduSistema.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_2ICtjoVis_3', ['Cliente']);
        this.dseiduSistema.enabled = false;
        this.dseiduSistema.mandatory = false;
        this.dseiduSistema.dataType = Field.dtAuto;
        this.dseiduSistema.assignCSS();
        this.fields.push(this.dseiduSistema);

        this.dseTipoSistemaDescripcion = new Field(this.langMng);
        this.dseTipoSistemaDescripcion.nameInRequest = 'tiposistema.descripcion';
        this.dseTipoSistemaDescripcion.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSI_Sistema_item_Clas_1699352150016718CjtoVis_2ICtjoVis_4',
            'Tipo de sistema');
        this.dseTipoSistemaDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_2ICtjoVis_4', ['Cliente']);
        this.dseTipoSistemaDescripcion.enabled = false;
        this.dseTipoSistemaDescripcion.mandatory = false;
        this.dseTipoSistemaDescripcion.dataType = Field.dtString;
        this.dseTipoSistemaDescripcion.maxLength = 100;
        this.dseTipoSistemaDescripcion.assignCSS();
        this.fields.push(this.dseTipoSistemaDescripcion);

        this.dseNombre = new Field(this.langMng);
        this.dseNombre.nameInRequest = 'nombre';
        this.dseNombre.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSI_Sistema_item_Clas_1699352150016718CjtoVis_2ICtjoVis_5',
            'Nombre');
        this.dseNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_2ICtjoVis_5', ['Cliente']);
        this.dseNombre.enabled = false;
        this.dseNombre.mandatory = false;
        this.dseNombre.dataType = Field.dtString;
        this.dseNombre.maxLength = 100;
        this.dseNombre.assignCSS();
        this.fields.push(this.dseNombre);

        this.dseDescripcion = new Field(this.langMng);
        this.dseDescripcion.nameInRequest = 'descripcion';
        this.dseDescripcion.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSI_Sistema_item_Clas_1699352150016718CjtoVis_2ICtjoVis_6',
            'Descripción');
        this.dseDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_2ICtjoVis_6', ['Cliente']);
        this.dseDescripcion.enabled = false;
        this.dseDescripcion.mandatory = false;
        this.dseDescripcion.dataType = Field.dtString;
        this.dseDescripcion.maxLength = 300;
        this.dseDescripcion.assignCSS();
        this.fields.push(this.dseDescripcion);

        this.dseMarcaDescripcion = new Field(this.langMng);
        this.dseMarcaDescripcion.nameInRequest = 'marca.descripcion';
        this.dseMarcaDescripcion.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSI_Sistema_item_Clas_1699352150016718CjtoVis_2ICtjoVis_7',
            'Marca');
        this.dseMarcaDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_2ICtjoVis_7', ['Cliente']);
        this.dseMarcaDescripcion.enabled = false;
        this.dseMarcaDescripcion.mandatory = false;
        this.dseMarcaDescripcion.dataType = Field.dtString;
        this.dseMarcaDescripcion.maxLength = 100;
        this.dseMarcaDescripcion.assignCSS();
        this.fields.push(this.dseMarcaDescripcion);

        this.dseModeloDescripcion = new Field(this.langMng);
        this.dseModeloDescripcion.nameInRequest = 'modelo.descripcion';
        this.dseModeloDescripcion.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSI_Sistema_item_Clas_1699352150016718CjtoVis_2ICtjoVis_8',
            'Modelo');
        this.dseModeloDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_2ICtjoVis_8', ['Cliente']);
        this.dseModeloDescripcion.enabled = false;
        this.dseModeloDescripcion.mandatory = false;
        this.dseModeloDescripcion.dataType = Field.dtString;
        this.dseModeloDescripcion.maxLength = 100;
        this.dseModeloDescripcion.assignCSS();
        this.fields.push(this.dseModeloDescripcion);

        this.dseTipoRiesgoDescripcion = new Field(this.langMng);
        this.dseTipoRiesgoDescripcion.nameInRequest = 'tiporiesgo.descripcion';
        this.dseTipoRiesgoDescripcion.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSI_Sistema_item_Clas_1699352150016718CjtoVis_2ICtjoVis_9',
            'Tipo de riesgo');
        this.dseTipoRiesgoDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_2ICtjoVis_9', []);
        this.dseTipoRiesgoDescripcion.enabled = false;
        this.dseTipoRiesgoDescripcion.mandatory = false;
        this.dseTipoRiesgoDescripcion.dataType = Field.dtString;
        this.dseTipoRiesgoDescripcion.maxLength = 100;
        this.dseTipoRiesgoDescripcion.assignCSS();
        this.fields.push(this.dseTipoRiesgoDescripcion);

        this.dseGrado = new FieldDefinedSelection(this.langMng);
        this.dseGrado.nameInRequest = 'grado';
        this.dseGrado.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSI_Sistema_item_Clas_1699352150016718CjtoVis_2ICtjoVis_10',
            'Grado');
        this.dseGrado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_2ICtjoVis_10', ['Cliente']);
        this.dseGrado.enabled = false;
        this.dseGrado.mandatory = false;
        this.dseGrado.dataType = Field.dtString;
        this.dseGrado.maxLength = 3;
        this.dseGrado.options = DefinedSelections.DS_GRADOSISTEMA;
        this.dseGrado.assignCSS();
        this.fields.push(this.dseGrado);

        this.dseCRANombre = new Field(this.langMng);
        this.dseCRANombre.nameInRequest = 'cra.nombre';
        this.dseCRANombre.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSI_Sistema_item_Clas_1699352150016718CjtoVis_2ICtjoVis_11',
            'CRA');
        this.dseCRANombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_2ICtjoVis_11', ['Cliente']);
        this.dseCRANombre.enabled = false;
        this.dseCRANombre.mandatory = false;
        this.dseCRANombre.dataType = Field.dtString;
        this.dseCRANombre.maxLength = 300;
        this.dseCRANombre.assignCSS();
        this.fields.push(this.dseCRANombre);

        this.dseModeloGrabador = new Field(this.langMng);
        this.dseModeloGrabador.nameInRequest = 'modelograbador';
        this.dseModeloGrabador.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSI_Sistema_item_Clas_1699352150016718CjtoVis_2ICtjoVis_12',
            'Modelo grabador');
        this.dseModeloGrabador.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_2ICtjoVis_12', ['Cliente']);
        this.dseModeloGrabador.enabled = false;
        this.dseModeloGrabador.mandatory = false;
        this.dseModeloGrabador.dataType = Field.dtString;
        this.dseModeloGrabador.maxLength = 100;
        this.dseModeloGrabador.assignCSS();
        this.fields.push(this.dseModeloGrabador);

        this.dseUsuarioAccesoCRA = new Field(this.langMng);
        this.dseUsuarioAccesoCRA.nameInRequest = 'usuarioaccesocra';
        this.dseUsuarioAccesoCRA.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSI_Sistema_item_Clas_1699352150016718CjtoVis_2ICtjoVis_13',
            'Usuario acceso CRA');
        this.dseUsuarioAccesoCRA.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_2ICtjoVis_13', ['Cliente']);
        this.dseUsuarioAccesoCRA.enabled = false;
        this.dseUsuarioAccesoCRA.mandatory = false;
        this.dseUsuarioAccesoCRA.dataType = Field.dtString;
        this.dseUsuarioAccesoCRA.maxLength = 100;
        this.dseUsuarioAccesoCRA.assignCSS();
        this.fields.push(this.dseUsuarioAccesoCRA);

        this.dseClaveAccesoCRA = new Field(this.langMng);
        this.dseClaveAccesoCRA.nameInRequest = 'claveaccesocra';
        this.dseClaveAccesoCRA.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSI_Sistema_item_Clas_1699352150016718CjtoVis_2ICtjoVis_14',
            'Clave acceso CRA');
        this.dseClaveAccesoCRA.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_2ICtjoVis_14', ['Cliente']);
        this.dseClaveAccesoCRA.enabled = false;
        this.dseClaveAccesoCRA.mandatory = false;
        this.dseClaveAccesoCRA.dataType = Field.dtString;
        this.dseClaveAccesoCRA.maxLength = 100;
        this.dseClaveAccesoCRA.assignCSS();
        this.fields.push(this.dseClaveAccesoCRA);

        this.dseOperativaCCTVDescripcion = new Field(this.langMng);
        this.dseOperativaCCTVDescripcion.nameInRequest = 'operativacctv.descripcion';
        this.dseOperativaCCTVDescripcion.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSI_Sistema_item_Clas_1699352150016718CjtoVis_2ICtjoVis_15',
            'Operativa CCTV');
        this.dseOperativaCCTVDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_2ICtjoVis_15', ['Cliente']);
        this.dseOperativaCCTVDescripcion.enabled = false;
        this.dseOperativaCCTVDescripcion.mandatory = false;
        this.dseOperativaCCTVDescripcion.dataType = Field.dtString;
        this.dseOperativaCCTVDescripcion.maxLength = 300;
        this.dseOperativaCCTVDescripcion.assignCSS();
        this.fields.push(this.dseOperativaCCTVDescripcion);

        this.dseOperativaFuego = new Field(this.langMng);
        this.dseOperativaFuego.nameInRequest = 'operativafuego';
        this.dseOperativaFuego.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSI_Sistema_item_Clas_1699352150016718CjtoVis_2ICtjoVis_16',
            'Operativa fuego');
        this.dseOperativaFuego.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_2ICtjoVis_16', ['Cliente']);
        this.dseOperativaFuego.enabled = false;
        this.dseOperativaFuego.mandatory = false;
        this.dseOperativaFuego.dataType = Field.dtString;
        this.dseOperativaFuego.maxLength = 300;
        this.dseOperativaFuego.assignCSS();
        this.fields.push(this.dseOperativaFuego);

        this.dseNumAbonado = new Field(this.langMng);
        this.dseNumAbonado.nameInRequest = 'numabonado';
        this.dseNumAbonado.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSI_Sistema_item_Clas_1699352150016718CjtoVis_2ICtjoVis_17',
            'Nº Abonado');
        this.dseNumAbonado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_2ICtjoVis_17', ['Cliente']);
        this.dseNumAbonado.enabled = false;
        this.dseNumAbonado.mandatory = false;
        this.dseNumAbonado.dataType = Field.dtString;
        this.dseNumAbonado.maxLength = 50;
        this.dseNumAbonado.assignCSS();
        this.fields.push(this.dseNumAbonado);

        this.dseFechaInstalacion = new Field(this.langMng);
        this.dseFechaInstalacion.nameInRequest = 'fechainstalacion';
        this.dseFechaInstalacion.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSI_Sistema_item_Clas_1699352150016718CjtoVis_2ICtjoVis_18',
            'F. Instalación');
        this.dseFechaInstalacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_2ICtjoVis_18', ['Cliente']);
        this.dseFechaInstalacion.enabled = false;
        this.dseFechaInstalacion.mandatory = false;
        this.dseFechaInstalacion.dataType = Field.dtDate;
        this.dseFechaInstalacion.assignCSS();
        this.fields.push(this.dseFechaInstalacion);

        this.dseFechaConexion = new Field(this.langMng);
        this.dseFechaConexion.nameInRequest = 'fechaconexion';
        this.dseFechaConexion.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSI_Sistema_item_Clas_1699352150016718CjtoVis_2ICtjoVis_19',
            'F. Conexión');
        this.dseFechaConexion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_2ICtjoVis_19', ['Cliente']);
        this.dseFechaConexion.enabled = false;
        this.dseFechaConexion.mandatory = false;
        this.dseFechaConexion.dataType = Field.dtDate;
        this.dseFechaConexion.assignCSS();
        this.fields.push(this.dseFechaConexion);

        this.dseUbicacion = new Field(this.langMng);
        this.dseUbicacion.nameInRequest = 'ubicacion';
        this.dseUbicacion.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSI_Sistema_item_Clas_1699352150016718CjtoVis_2ICtjoVis_20',
            'Ubicación');
        this.dseUbicacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_2ICtjoVis_20', ['Cliente']);
        this.dseUbicacion.enabled = false;
        this.dseUbicacion.mandatory = false;
        this.dseUbicacion.dataType = Field.dtString;
        this.dseUbicacion.maxLength = 300;
        this.dseUbicacion.assignCSS();
        this.fields.push(this.dseUbicacion);

        this.dsePendienteRevision = new FieldDefinedSelection(this.langMng);
        this.dsePendienteRevision.nameInRequest = 'pendienterevision';
        this.dsePendienteRevision.alias = this.langMng.translateText(
            'cls_Sistema_ds_DSI_Sistema_item_Clas_1699352150016718CjtoVis_2ICtjoVis_21',
            'Pendiente revisión?');
        this.dsePendienteRevision.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016718CjtoVis_2ICtjoVis_21', ['Cliente']);
        this.dsePendienteRevision.enabled = false;
        this.dsePendienteRevision.mandatory = false;
        this.dsePendienteRevision.dataType = Field.dtBool;
        this.dsePendienteRevision.options = DefinedSelections.DS_SI_NO;
        this.dsePendienteRevision.assignCSS();
        this.fields.push(this.dsePendienteRevision);

    }
}
