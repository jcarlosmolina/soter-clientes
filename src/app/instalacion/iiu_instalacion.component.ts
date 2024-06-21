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

export class InstalacionIIUuInstalacionComponent extends AbstractIIU {

    /** Display Set elements */
    public dseClienteNombreRazonSocial: Field;
    public dseiduInstalacion: Field;
    public dseNombre: Field;
    public dseDireccion: Field;
    public dseObservacions: Field;
    public dseZonaNombre: Field;
    public dseTelefono: Field;
    public dseFax: Field;
    public dseLatitudGPS: Field;
    public dseLongitudGPS: Field;
    public dseUsuarioComercialNombreCompleto: Field;
    public dseEnvioAutoPartes: FieldDefinedSelection;
    public dseTipoLocal: Field;
    public dseHorarioAproximado: Field;
    public dseEsVehiculo: FieldDefinedSelection;
    public dseMatriculaVehiculo: Field;
    public dseMarcaVehiculo: Field;
    public dseModeloVehiculo: Field;
    public dseOtrosVehiculo: Field;
    public dseGrupoFacturacionDescripcion: Field;

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
        this.idXML = 'Clas_1699352150016405UIInst_1';
        this.className = ModelConstants.Instalacion.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Instalacion_iiu_IIU_Instalacion',
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
            'cls_Instalacion_ds_DSI_Instalacion_item_Clas_1699352150016405CjtoVis_3ICtjoVis_1',
            'Cliente');
        this.dseClienteNombreRazonSocial.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_3ICtjoVis_1', ['Cliente']);
        this.dseClienteNombreRazonSocial.enabled = false;
        this.dseClienteNombreRazonSocial.mandatory = false;
        this.dseClienteNombreRazonSocial.dataType = Field.dtString;
        this.dseClienteNombreRazonSocial.maxLength = 300;
        this.dseClienteNombreRazonSocial.assignCSS();
        this.fields.push(this.dseClienteNombreRazonSocial);

        this.dseiduInstalacion = new Field(this.langMng);
        this.dseiduInstalacion.nameInRequest = 'id_instalacion';
        this.dseiduInstalacion.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_Instalacion_item_Clas_1699352150016405CjtoVis_3ICtjoVis_2',
            'Código');
        this.dseiduInstalacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_3ICtjoVis_2', ['Cliente']);
        this.dseiduInstalacion.enabled = false;
        this.dseiduInstalacion.mandatory = false;
        this.dseiduInstalacion.dataType = Field.dtAuto;
        this.dseiduInstalacion.assignCSS();
        this.fields.push(this.dseiduInstalacion);

        this.dseNombre = new Field(this.langMng);
        this.dseNombre.nameInRequest = 'nombre';
        this.dseNombre.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_Instalacion_item_Clas_1699352150016405CjtoVis_3ICtjoVis_3',
            'Nombre');
        this.dseNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_3ICtjoVis_3', ['Cliente']);
        this.dseNombre.enabled = false;
        this.dseNombre.mandatory = false;
        this.dseNombre.dataType = Field.dtString;
        this.dseNombre.maxLength = 100;
        this.dseNombre.assignCSS();
        this.fields.push(this.dseNombre);

        this.dseDireccion = new Field(this.langMng);
        this.dseDireccion.nameInRequest = 'direccion';
        this.dseDireccion.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_Instalacion_item_Clas_1699352150016405CjtoVis_3ICtjoVis_4',
            'Dirección');
        this.dseDireccion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_3ICtjoVis_4', ['Cliente']);
        this.dseDireccion.enabled = false;
        this.dseDireccion.mandatory = false;
        this.dseDireccion.dataType = Field.dtString;
        this.dseDireccion.maxLength = 300;
        this.dseDireccion.assignCSS();
        this.fields.push(this.dseDireccion);

        this.dseObservacions = new Field(this.langMng);
        this.dseObservacions.nameInRequest = 'observacions';
        this.dseObservacions.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_Instalacion_item_Clas_1699352150016405CjtoVis_3ICtjoVis_5',
            'Observaciones');
        this.dseObservacions.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_3ICtjoVis_5', ['Cliente']);
        this.dseObservacions.enabled = false;
        this.dseObservacions.mandatory = false;
        this.dseObservacions.dataType = Field.dtString;
        this.dseObservacions.maxLength = 300;
        this.dseObservacions.assignCSS();
        this.fields.push(this.dseObservacions);

        this.dseZonaNombre = new Field(this.langMng);
        this.dseZonaNombre.nameInRequest = 'zona.nombre';
        this.dseZonaNombre.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_Instalacion_item_Clas_1699352150016405CjtoVis_3ICtjoVis_21',
            'Zona');
        this.dseZonaNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_3ICtjoVis_21', ['Cliente']);
        this.dseZonaNombre.enabled = false;
        this.dseZonaNombre.mandatory = false;
        this.dseZonaNombre.dataType = Field.dtString;
        this.dseZonaNombre.maxLength = 300;
        this.dseZonaNombre.assignCSS();
        this.fields.push(this.dseZonaNombre);

        this.dseTelefono = new Field(this.langMng);
        this.dseTelefono.nameInRequest = 'telefono';
        this.dseTelefono.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_Instalacion_item_Clas_1699352150016405CjtoVis_3ICtjoVis_7',
            'Teléfono');
        this.dseTelefono.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_3ICtjoVis_7', ['Cliente']);
        this.dseTelefono.enabled = false;
        this.dseTelefono.mandatory = false;
        this.dseTelefono.dataType = Field.dtString;
        this.dseTelefono.maxLength = 20;
        this.dseTelefono.assignCSS();
        this.fields.push(this.dseTelefono);

        this.dseFax = new Field(this.langMng);
        this.dseFax.nameInRequest = 'fax';
        this.dseFax.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_Instalacion_item_Clas_1699352150016405CjtoVis_3ICtjoVis_8',
            'Fax');
        this.dseFax.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_3ICtjoVis_8', ['Cliente']);
        this.dseFax.enabled = false;
        this.dseFax.mandatory = false;
        this.dseFax.dataType = Field.dtString;
        this.dseFax.maxLength = 20;
        this.dseFax.assignCSS();
        this.fields.push(this.dseFax);

        this.dseLatitudGPS = new Field(this.langMng);
        this.dseLatitudGPS.nameInRequest = 'latitudgps';
        this.dseLatitudGPS.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_Instalacion_item_Clas_1699352150016405CjtoVis_3ICtjoVis_9',
            'Latitud (GPS)');
        this.dseLatitudGPS.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_3ICtjoVis_9', ['Cliente']);
        this.dseLatitudGPS.enabled = false;
        this.dseLatitudGPS.mandatory = false;
        this.dseLatitudGPS.dataType = Field.dtReal;
        this.dseLatitudGPS.assignCSS();
        this.fields.push(this.dseLatitudGPS);

        this.dseLongitudGPS = new Field(this.langMng);
        this.dseLongitudGPS.nameInRequest = 'longitudgps';
        this.dseLongitudGPS.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_Instalacion_item_Clas_1699352150016405CjtoVis_3ICtjoVis_10',
            'Longitud (GPS)');
        this.dseLongitudGPS.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_3ICtjoVis_10', ['Cliente']);
        this.dseLongitudGPS.enabled = false;
        this.dseLongitudGPS.mandatory = false;
        this.dseLongitudGPS.dataType = Field.dtReal;
        this.dseLongitudGPS.assignCSS();
        this.fields.push(this.dseLongitudGPS);

        this.dseUsuarioComercialNombreCompleto = new Field(this.langMng);
        this.dseUsuarioComercialNombreCompleto.nameInRequest = 'usuariocomercial.nombrecompleto';
        this.dseUsuarioComercialNombreCompleto.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_Instalacion_item_Clas_1699352150016405CjtoVis_3ICtjoVis_11',
            'Comercial');
        this.dseUsuarioComercialNombreCompleto.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_3ICtjoVis_11', []);
        this.dseUsuarioComercialNombreCompleto.enabled = false;
        this.dseUsuarioComercialNombreCompleto.mandatory = false;
        this.dseUsuarioComercialNombreCompleto.dataType = Field.dtString;
        this.dseUsuarioComercialNombreCompleto.maxLength = 200;
        this.dseUsuarioComercialNombreCompleto.assignCSS();
        this.fields.push(this.dseUsuarioComercialNombreCompleto);

        this.dseEnvioAutoPartes = new FieldDefinedSelection(this.langMng);
        this.dseEnvioAutoPartes.nameInRequest = 'envioautopartes';
        this.dseEnvioAutoPartes.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_Instalacion_item_Clas_1699352150016405CjtoVis_3ICtjoVis_12',
            'Envío automático de partes');
        this.dseEnvioAutoPartes.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_3ICtjoVis_12', ['Cliente']);
        this.dseEnvioAutoPartes.enabled = false;
        this.dseEnvioAutoPartes.mandatory = false;
        this.dseEnvioAutoPartes.dataType = Field.dtBool;
        this.dseEnvioAutoPartes.options = DefinedSelections.DS_SI_NO;
        this.dseEnvioAutoPartes.assignCSS();
        this.fields.push(this.dseEnvioAutoPartes);

        this.dseTipoLocal = new Field(this.langMng);
        this.dseTipoLocal.nameInRequest = 'tipolocal';
        this.dseTipoLocal.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_Instalacion_item_Clas_1699352150016405CjtoVis_3ICtjoVis_13',
            'Tipo local');
        this.dseTipoLocal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_3ICtjoVis_13', ['Cliente']);
        this.dseTipoLocal.enabled = false;
        this.dseTipoLocal.mandatory = false;
        this.dseTipoLocal.dataType = Field.dtString;
        this.dseTipoLocal.maxLength = 300;
        this.dseTipoLocal.assignCSS();
        this.fields.push(this.dseTipoLocal);

        this.dseHorarioAproximado = new Field(this.langMng);
        this.dseHorarioAproximado.nameInRequest = 'horarioaproximado';
        this.dseHorarioAproximado.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_Instalacion_item_Clas_1699352150016405CjtoVis_3ICtjoVis_14',
            'Horario aproximado');
        this.dseHorarioAproximado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_3ICtjoVis_14', ['Cliente']);
        this.dseHorarioAproximado.enabled = false;
        this.dseHorarioAproximado.mandatory = false;
        this.dseHorarioAproximado.dataType = Field.dtString;
        this.dseHorarioAproximado.maxLength = 300;
        this.dseHorarioAproximado.assignCSS();
        this.fields.push(this.dseHorarioAproximado);

        this.dseEsVehiculo = new FieldDefinedSelection(this.langMng);
        this.dseEsVehiculo.nameInRequest = 'esvehiculo';
        this.dseEsVehiculo.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_Instalacion_item_Clas_1699352150016405CjtoVis_3ICtjoVis_15',
            'Es vehículo');
        this.dseEsVehiculo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_3ICtjoVis_15', ['Cliente']);
        this.dseEsVehiculo.enabled = false;
        this.dseEsVehiculo.mandatory = false;
        this.dseEsVehiculo.dataType = Field.dtBool;
        this.dseEsVehiculo.options = DefinedSelections.DS_SI_NO;
        this.dseEsVehiculo.assignCSS();
        this.fields.push(this.dseEsVehiculo);

        this.dseMatriculaVehiculo = new Field(this.langMng);
        this.dseMatriculaVehiculo.nameInRequest = 'matriculavehiculo';
        this.dseMatriculaVehiculo.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_Instalacion_item_Clas_1699352150016405CjtoVis_3ICtjoVis_16',
            'Matrícula');
        this.dseMatriculaVehiculo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_3ICtjoVis_16', ['Cliente']);
        this.dseMatriculaVehiculo.enabled = false;
        this.dseMatriculaVehiculo.mandatory = false;
        this.dseMatriculaVehiculo.dataType = Field.dtString;
        this.dseMatriculaVehiculo.maxLength = 50;
        this.dseMatriculaVehiculo.assignCSS();
        this.fields.push(this.dseMatriculaVehiculo);

        this.dseMarcaVehiculo = new Field(this.langMng);
        this.dseMarcaVehiculo.nameInRequest = 'marcavehiculo';
        this.dseMarcaVehiculo.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_Instalacion_item_Clas_1699352150016405CjtoVis_3ICtjoVis_17',
            'Marca');
        this.dseMarcaVehiculo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_3ICtjoVis_17', ['Cliente']);
        this.dseMarcaVehiculo.enabled = false;
        this.dseMarcaVehiculo.mandatory = false;
        this.dseMarcaVehiculo.dataType = Field.dtString;
        this.dseMarcaVehiculo.maxLength = 100;
        this.dseMarcaVehiculo.assignCSS();
        this.fields.push(this.dseMarcaVehiculo);

        this.dseModeloVehiculo = new Field(this.langMng);
        this.dseModeloVehiculo.nameInRequest = 'modelovehiculo';
        this.dseModeloVehiculo.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_Instalacion_item_Clas_1699352150016405CjtoVis_3ICtjoVis_18',
            'Modelo');
        this.dseModeloVehiculo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_3ICtjoVis_18', ['Cliente']);
        this.dseModeloVehiculo.enabled = false;
        this.dseModeloVehiculo.mandatory = false;
        this.dseModeloVehiculo.dataType = Field.dtString;
        this.dseModeloVehiculo.maxLength = 100;
        this.dseModeloVehiculo.assignCSS();
        this.fields.push(this.dseModeloVehiculo);

        this.dseOtrosVehiculo = new Field(this.langMng);
        this.dseOtrosVehiculo.nameInRequest = 'otrosvehiculo';
        this.dseOtrosVehiculo.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_Instalacion_item_Clas_1699352150016405CjtoVis_3ICtjoVis_19',
            'Otros');
        this.dseOtrosVehiculo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_3ICtjoVis_19', ['Cliente']);
        this.dseOtrosVehiculo.enabled = false;
        this.dseOtrosVehiculo.mandatory = false;
        this.dseOtrosVehiculo.dataType = Field.dtString;
        this.dseOtrosVehiculo.maxLength = 300;
        this.dseOtrosVehiculo.assignCSS();
        this.fields.push(this.dseOtrosVehiculo);

        this.dseGrupoFacturacionDescripcion = new Field(this.langMng);
        this.dseGrupoFacturacionDescripcion.nameInRequest = 'grupofacturacion.descripcion';
        this.dseGrupoFacturacionDescripcion.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DSI_Instalacion_item_Clas_1699352150016405CjtoVis_3ICtjoVis_20',
            'Grupo de facturación');
        this.dseGrupoFacturacionDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_3ICtjoVis_20', []);
        this.dseGrupoFacturacionDescripcion.enabled = false;
        this.dseGrupoFacturacionDescripcion.mandatory = false;
        this.dseGrupoFacturacionDescripcion.dataType = Field.dtString;
        this.dseGrupoFacturacionDescripcion.maxLength = 100;
        this.dseGrupoFacturacionDescripcion.assignCSS();
        this.fields.push(this.dseGrupoFacturacionDescripcion);

    }
}
