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

export class OrdenTrabajoIIUuOrdenTrabajoComponent extends AbstractIIU {

    /** Display Set elements */
    public dseiduOrdenTrabajo: Field;
    public dseTipoOrden: FieldDefinedSelection;
    public dseTipoAvisoNombre: Field;
    public dseEstado: FieldDefinedSelection;
    public dsePrioridad: FieldDefinedSelection;
    public dseInstalacionClienteCIFNIF: Field;
    public dseInstalacionClienteNombreRazonSocial: Field;
    public dseInstalacionNombre: Field;
    public dseInstalacionDireccion: Field;
    public dseInstalacionMunicipioNombre: Field;
    public dseInstalacionCodigoPostalCP: Field;
    public dseInstalacionTelefono: Field;
    public dseTipoSistemaDescripcion: Field;
    public dseFechaPrevista: Field;
    public dseFechaLimite: Field;
    public dseDuracionPrevista: Field;
    public dseDepartamentoNombre: Field;
    public dseTareaListaUsuarios: Field;
    public dseNotasInternas: Field;
    public dseTrabajoARealizar: Field;
    public dseTiempoEspera: Field;
    public dseAlertaiduAlerta: Field;
    public dseUsuarioCreacionNombreCompleto: Field;
    public dseEmpContratistaNombre: Field;

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
        this.idXML = 'Clas_1699352150016871UIInst_1';
        this.className = ModelConstants.Ordentrabajo.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_OrdenTrabajo_iiu_IIU_OrdenTrabajo',
            'Orden de trabajo');
        this.queryURL = '/api/OrdenTrabajoApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseiduOrdenTrabajo = new Field(this.langMng);
        this.dseiduOrdenTrabajo.nameInRequest = 'id_ordentrabajo';
        this.dseiduOrdenTrabajo.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_1',
            'Nº orden');
        this.dseiduOrdenTrabajo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_1', ['Cliente']);
        this.dseiduOrdenTrabajo.enabled = false;
        this.dseiduOrdenTrabajo.mandatory = false;
        this.dseiduOrdenTrabajo.dataType = Field.dtAuto;
        this.dseiduOrdenTrabajo.assignCSS();
        this.fields.push(this.dseiduOrdenTrabajo);

        this.dseTipoOrden = new FieldDefinedSelection(this.langMng);
        this.dseTipoOrden.nameInRequest = 'tipoorden';
        this.dseTipoOrden.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_2',
            'Tipo orden');
        this.dseTipoOrden.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_2', ['Cliente']);
        this.dseTipoOrden.enabled = false;
        this.dseTipoOrden.mandatory = false;
        this.dseTipoOrden.dataType = Field.dtString;
        this.dseTipoOrden.maxLength = 1;
        this.dseTipoOrden.options = DefinedSelections.DS_TIPOORDENTRABAJO;
        this.dseTipoOrden.assignCSS();
        this.fields.push(this.dseTipoOrden);

        this.dseTipoAvisoNombre = new Field(this.langMng);
        this.dseTipoAvisoNombre.nameInRequest = 'tipoaviso.nombre';
        this.dseTipoAvisoNombre.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_3',
            'Tipo aviso');
        this.dseTipoAvisoNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_3', []);
        this.dseTipoAvisoNombre.enabled = false;
        this.dseTipoAvisoNombre.mandatory = false;
        this.dseTipoAvisoNombre.dataType = Field.dtString;
        this.dseTipoAvisoNombre.maxLength = 50;
        this.dseTipoAvisoNombre.assignCSS();
        this.fields.push(this.dseTipoAvisoNombre);

        this.dseEstado = new FieldDefinedSelection(this.langMng);
        this.dseEstado.nameInRequest = 'estado';
        this.dseEstado.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_4',
            'Estado');
        this.dseEstado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_4', ['Cliente']);
        this.dseEstado.enabled = false;
        this.dseEstado.mandatory = false;
        this.dseEstado.dataType = Field.dtString;
        this.dseEstado.maxLength = 1;
        this.dseEstado.fieldSize = 15;
        this.dseEstado.options = DefinedSelections.DS_ORDENTRABAJO_ESTADO;
        this.dseEstado.assignCSS();
        this.fields.push(this.dseEstado);

        this.dsePrioridad = new FieldDefinedSelection(this.langMng);
        this.dsePrioridad.nameInRequest = 'prioridad';
        this.dsePrioridad.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_5',
            'Prioridad');
        this.dsePrioridad.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_5', ['Cliente']);
        this.dsePrioridad.enabled = false;
        this.dsePrioridad.mandatory = false;
        this.dsePrioridad.dataType = Field.dtString;
        this.dsePrioridad.maxLength = 2;
        this.dsePrioridad.options = DefinedSelections.DS_TAREA_URGENCIA;
        this.dsePrioridad.assignCSS();
        this.fields.push(this.dsePrioridad);

        this.dseInstalacionClienteCIFNIF = new Field(this.langMng);
        this.dseInstalacionClienteCIFNIF.nameInRequest = 'instalacion.cliente.cifnif';
        this.dseInstalacionClienteCIFNIF.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_6',
            'CIF/NIF');
        this.dseInstalacionClienteCIFNIF.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_6', ['Cliente']);
        this.dseInstalacionClienteCIFNIF.enabled = false;
        this.dseInstalacionClienteCIFNIF.mandatory = false;
        this.dseInstalacionClienteCIFNIF.dataType = Field.dtString;
        this.dseInstalacionClienteCIFNIF.maxLength = 30;
        this.dseInstalacionClienteCIFNIF.assignCSS();
        this.fields.push(this.dseInstalacionClienteCIFNIF);

        this.dseInstalacionClienteNombreRazonSocial = new Field(this.langMng);
        this.dseInstalacionClienteNombreRazonSocial.nameInRequest = 'instalacion.cliente.nombrerazonsocial';
        this.dseInstalacionClienteNombreRazonSocial.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_7',
            'Nombre cliente');
        this.dseInstalacionClienteNombreRazonSocial.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_7', ['Cliente']);
        this.dseInstalacionClienteNombreRazonSocial.enabled = false;
        this.dseInstalacionClienteNombreRazonSocial.mandatory = false;
        this.dseInstalacionClienteNombreRazonSocial.dataType = Field.dtString;
        this.dseInstalacionClienteNombreRazonSocial.maxLength = 300;
        this.dseInstalacionClienteNombreRazonSocial.assignCSS();
        this.fields.push(this.dseInstalacionClienteNombreRazonSocial);

        this.dseInstalacionNombre = new Field(this.langMng);
        this.dseInstalacionNombre.nameInRequest = 'instalacion.nombre';
        this.dseInstalacionNombre.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_8',
            'Instalación');
        this.dseInstalacionNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_8', ['Cliente']);
        this.dseInstalacionNombre.enabled = false;
        this.dseInstalacionNombre.mandatory = false;
        this.dseInstalacionNombre.dataType = Field.dtString;
        this.dseInstalacionNombre.maxLength = 100;
        this.dseInstalacionNombre.assignCSS();
        this.fields.push(this.dseInstalacionNombre);

        this.dseInstalacionDireccion = new Field(this.langMng);
        this.dseInstalacionDireccion.nameInRequest = 'instalacion.direccion';
        this.dseInstalacionDireccion.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_9',
            'Dirección');
        this.dseInstalacionDireccion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_9', ['Cliente']);
        this.dseInstalacionDireccion.enabled = false;
        this.dseInstalacionDireccion.mandatory = false;
        this.dseInstalacionDireccion.dataType = Field.dtString;
        this.dseInstalacionDireccion.maxLength = 300;
        this.dseInstalacionDireccion.assignCSS();
        this.fields.push(this.dseInstalacionDireccion);

        this.dseInstalacionMunicipioNombre = new Field(this.langMng);
        this.dseInstalacionMunicipioNombre.nameInRequest = 'instalacion.municipio.nombre';
        this.dseInstalacionMunicipioNombre.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_10',
            'Municipio');
        this.dseInstalacionMunicipioNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_10', ['Cliente']);
        this.dseInstalacionMunicipioNombre.enabled = false;
        this.dseInstalacionMunicipioNombre.mandatory = false;
        this.dseInstalacionMunicipioNombre.dataType = Field.dtString;
        this.dseInstalacionMunicipioNombre.maxLength = 300;
        this.dseInstalacionMunicipioNombre.assignCSS();
        this.fields.push(this.dseInstalacionMunicipioNombre);

        this.dseInstalacionCodigoPostalCP = new Field(this.langMng);
        this.dseInstalacionCodigoPostalCP.nameInRequest = 'instalacion.codigopostal.cp';
        this.dseInstalacionCodigoPostalCP.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_11',
            'Código postal');
        this.dseInstalacionCodigoPostalCP.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_11', ['Cliente']);
        this.dseInstalacionCodigoPostalCP.enabled = false;
        this.dseInstalacionCodigoPostalCP.mandatory = false;
        this.dseInstalacionCodigoPostalCP.dataType = Field.dtString;
        this.dseInstalacionCodigoPostalCP.maxLength = 10;
        this.dseInstalacionCodigoPostalCP.assignCSS();
        this.fields.push(this.dseInstalacionCodigoPostalCP);

        this.dseInstalacionTelefono = new Field(this.langMng);
        this.dseInstalacionTelefono.nameInRequest = 'instalacion.telefono';
        this.dseInstalacionTelefono.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_12',
            'Teléfono');
        this.dseInstalacionTelefono.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_12', ['Cliente']);
        this.dseInstalacionTelefono.enabled = false;
        this.dseInstalacionTelefono.mandatory = false;
        this.dseInstalacionTelefono.dataType = Field.dtString;
        this.dseInstalacionTelefono.maxLength = 20;
        this.dseInstalacionTelefono.assignCSS();
        this.fields.push(this.dseInstalacionTelefono);

        this.dseTipoSistemaDescripcion = new Field(this.langMng);
        this.dseTipoSistemaDescripcion.nameInRequest = 'tiposistema.descripcion';
        this.dseTipoSistemaDescripcion.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_13',
            'Tipo de sistema');
        this.dseTipoSistemaDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_13', ['Cliente']);
        this.dseTipoSistemaDescripcion.enabled = false;
        this.dseTipoSistemaDescripcion.mandatory = false;
        this.dseTipoSistemaDescripcion.dataType = Field.dtString;
        this.dseTipoSistemaDescripcion.maxLength = 100;
        this.dseTipoSistemaDescripcion.assignCSS();
        this.fields.push(this.dseTipoSistemaDescripcion);

        this.dseFechaPrevista = new Field(this.langMng);
        this.dseFechaPrevista.nameInRequest = 'fechaprevista';
        this.dseFechaPrevista.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_14',
            'Fecha prevista');
        this.dseFechaPrevista.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_14', ['Cliente']);
        this.dseFechaPrevista.enabled = false;
        this.dseFechaPrevista.mandatory = false;
        this.dseFechaPrevista.dataType = Field.dtDate;
        this.dseFechaPrevista.assignCSS();
        this.fields.push(this.dseFechaPrevista);

        this.dseFechaLimite = new Field(this.langMng);
        this.dseFechaLimite.nameInRequest = 'fechalimite';
        this.dseFechaLimite.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_15',
            'Fecha límite');
        this.dseFechaLimite.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_15', ['Cliente']);
        this.dseFechaLimite.enabled = false;
        this.dseFechaLimite.mandatory = false;
        this.dseFechaLimite.dataType = Field.dtDate;
        this.dseFechaLimite.assignCSS();
        this.fields.push(this.dseFechaLimite);

        this.dseDuracionPrevista = new Field(this.langMng);
        this.dseDuracionPrevista.nameInRequest = 'duracionprevista';
        this.dseDuracionPrevista.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_16',
            'Duración prevista');
        this.dseDuracionPrevista.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_16', ['Cliente']);
        this.dseDuracionPrevista.enabled = false;
        this.dseDuracionPrevista.mandatory = false;
        this.dseDuracionPrevista.dataType = Field.dtReal;
        this.dseDuracionPrevista.assignCSS();
        this.fields.push(this.dseDuracionPrevista);

        this.dseDepartamentoNombre = new Field(this.langMng);
        this.dseDepartamentoNombre.nameInRequest = 'departamento.nombre';
        this.dseDepartamentoNombre.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_17',
            'Departamento');
        this.dseDepartamentoNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_17', []);
        this.dseDepartamentoNombre.enabled = false;
        this.dseDepartamentoNombre.mandatory = false;
        this.dseDepartamentoNombre.dataType = Field.dtString;
        this.dseDepartamentoNombre.maxLength = 100;
        this.dseDepartamentoNombre.assignCSS();
        this.fields.push(this.dseDepartamentoNombre);

        this.dseTareaListaUsuarios = new Field(this.langMng);
        this.dseTareaListaUsuarios.nameInRequest = 'tarea.listausuarios';
        this.dseTareaListaUsuarios.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_18',
            'Usuarios asignados');
        this.dseTareaListaUsuarios.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_18', []);
        this.dseTareaListaUsuarios.enabled = false;
        this.dseTareaListaUsuarios.mandatory = false;
        this.dseTareaListaUsuarios.dataType = Field.dtString;
        this.dseTareaListaUsuarios.maxLength = 999;
        this.dseTareaListaUsuarios.assignCSS();
        this.fields.push(this.dseTareaListaUsuarios);

        this.dseNotasInternas = new Field(this.langMng);
        this.dseNotasInternas.nameInRequest = 'notasinternas';
        this.dseNotasInternas.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_19',
            'Notas internas');
        this.dseNotasInternas.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_19', ['Cliente']);
        this.dseNotasInternas.enabled = false;
        this.dseNotasInternas.mandatory = false;
        this.dseNotasInternas.dataType = Field.dtText;
        this.dseNotasInternas.assignCSS();
        this.fields.push(this.dseNotasInternas);

        this.dseTrabajoARealizar = new Field(this.langMng);
        this.dseTrabajoARealizar.nameInRequest = 'trabajoarealizar';
        this.dseTrabajoARealizar.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_20',
            'Trabajo a realizar');
        this.dseTrabajoARealizar.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_20', ['Cliente']);
        this.dseTrabajoARealizar.enabled = false;
        this.dseTrabajoARealizar.mandatory = false;
        this.dseTrabajoARealizar.dataType = Field.dtText;
        this.dseTrabajoARealizar.assignCSS();
        this.fields.push(this.dseTrabajoARealizar);

        this.dseTiempoEspera = new Field(this.langMng);
        this.dseTiempoEspera.nameInRequest = 'tiempoespera';
        this.dseTiempoEspera.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_21',
            'Tiempo espera (hrs.)');
        this.dseTiempoEspera.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_21', ['Cliente']);
        this.dseTiempoEspera.enabled = false;
        this.dseTiempoEspera.mandatory = false;
        this.dseTiempoEspera.dataType = Field.dtReal;
        this.dseTiempoEspera.assignCSS();
        this.fields.push(this.dseTiempoEspera);

        this.dseAlertaiduAlerta = new Field(this.langMng);
        this.dseAlertaiduAlerta.nameInRequest = 'alerta.id_alerta';
        this.dseAlertaiduAlerta.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_22',
            'Aviso nº');
        this.dseAlertaiduAlerta.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_22', []);
        this.dseAlertaiduAlerta.enabled = false;
        this.dseAlertaiduAlerta.mandatory = false;
        this.dseAlertaiduAlerta.dataType = Field.dtAuto;
        this.dseAlertaiduAlerta.assignCSS();
        this.fields.push(this.dseAlertaiduAlerta);

        this.dseUsuarioCreacionNombreCompleto = new Field(this.langMng);
        this.dseUsuarioCreacionNombreCompleto.nameInRequest = 'usuariocreacion.nombrecompleto';
        this.dseUsuarioCreacionNombreCompleto.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_23',
            'Usuario creación');
        this.dseUsuarioCreacionNombreCompleto.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_23', []);
        this.dseUsuarioCreacionNombreCompleto.enabled = false;
        this.dseUsuarioCreacionNombreCompleto.mandatory = false;
        this.dseUsuarioCreacionNombreCompleto.dataType = Field.dtString;
        this.dseUsuarioCreacionNombreCompleto.maxLength = 200;
        this.dseUsuarioCreacionNombreCompleto.assignCSS();
        this.fields.push(this.dseUsuarioCreacionNombreCompleto);

        this.dseEmpContratistaNombre = new Field(this.langMng);
        this.dseEmpContratistaNombre.nameInRequest = 'empcontratista.nombre';
        this.dseEmpContratistaNombre.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_item_Clas_1699352150016871CjtoVis_3ICtjoVis_24',
            'Empresa contratista');
        this.dseEmpContratistaNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_3ICtjoVis_24', []);
        this.dseEmpContratistaNombre.enabled = false;
        this.dseEmpContratistaNombre.mandatory = false;
        this.dseEmpContratistaNombre.dataType = Field.dtString;
        this.dseEmpContratistaNombre.maxLength = 50;
        this.dseEmpContratistaNombre.assignCSS();
        this.fields.push(this.dseEmpContratistaNombre);

    }

    /**
     * Initialize the navigation items
     */
    public initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1699352150016871NavOfer_2ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_nav_NIIU_OrdenTrabajo_item_Clas_1699352150016871NavOfer_2ElemNav_1',
            'Cliente');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Cliente.name;
        navItem.targetUI = ModelConstants.Cliente.mdiuucliente;
        navItem.rolePath = 'Instalaciones.OrdenesTrabajo';
        this.navigations.push(navItem);

        navItem = new AccNavItem();
        navItem.id = 1;
        navItem.idXML = 'Clas_1699352150016871NavOfer_2ElemNav_2';
        navItem.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_nav_NIIU_OrdenTrabajo_item_Clas_1699352150016871NavOfer_2ElemNav_2',
            'Instalación');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Instalacion.name;
        navItem.targetUI = ModelConstants.Instalacion.mdiuuinstalacion;
        navItem.rolePath = 'OrdenesTrabajo';
        this.navigations.push(navItem);

        navItem = new AccNavItem();
        navItem.id = 2;
        navItem.idXML = 'Clas_1699352150016871NavOfer_2ElemNav_3';
        navItem.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_nav_NIIU_OrdenTrabajo_item_Clas_1699352150016871NavOfer_2ElemNav_3',
            'Sistema');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Sistema.name;
        navItem.targetUI = ModelConstants.Sistema.mdiuusistema;
        navItem.rolePath = 'OrdenesTrabajo';
        this.navigations.push(navItem);

    }
}
