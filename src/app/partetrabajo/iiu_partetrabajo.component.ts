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

export class ParteTrabajoIIUuParteTrabajoComponent extends AbstractIIU {

    /** Display Set elements */
    public dseiduParteTrabajo: Field;
    public dseOrdenTrabajoInstalacionClienteCodigo: Field;
    public dseOrdenTrabajoInstalacionClienteCIFNIF: Field;
    public dseOrdenTrabajoInstalacionClienteNombreComercial: Field;
    public dseOrdenTrabajoInstalacionNombre: Field;
    public dseOrdenTrabajoInstalacionDireccion: Field;
    public dseOrdenTrabajoInstalacionCodigoPostalCP: Field;
    public dseOrdenTrabajoInstalacionMunicipioNombre: Field;
    public dseOrdenTrabajoInstalacionTelefono: Field;
    public dseTiposSistema: Field;
    public dseFechaInicio: Field;
    public dseHoraInicio: Field;
    public dseFechaFin: Field;
    public dseHoraFin: Field;
    public dseFechaInicioReal: Field;
    public dseHoraInicioReal: Field;
    public dseFechaFinReal: Field;
    public dseHoraFinReal: Field;
    public dseEstado: FieldDefinedSelection;
    public dseEsCita: FieldDefinedSelection;
    public dseOrdenTrabajoTipoOrden: FieldDefinedSelection;
    public dseOrdenTrabajoPrioridad: FieldDefinedSelection;
    public dseOrdenTrabajoDepartamentoNombre: Field;
    public dseTecnicosConcat: Field;
    public dseTipoCierreDescripcion: Field;
    public dseFirmado: FieldDefinedSelection;
    public dseValoracionCliente: FieldDefinedSelection;
    public dseMotivoAnulacionDescripcion: Field;
    public dseEnviadoCliente: FieldDefinedSelection;
    public dseFacturado: FieldDefinedSelection;

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
        this.idXML = 'Clas_1699352150016581UIInst_1';
        this.className = ModelConstants.Partetrabajo.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_ParteTrabajo_iiu_IIU_ParteTrabajo',
            'Parte de trabajo');
        this.queryURL = '/api/ParteTrabajoApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseiduParteTrabajo = new Field(this.langMng);
        this.dseiduParteTrabajo.nameInRequest = 'id_partetrabajo';
        this.dseiduParteTrabajo.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_1',
            'Nº parte');
        this.dseiduParteTrabajo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_1', ['Cliente']);
        this.dseiduParteTrabajo.enabled = false;
        this.dseiduParteTrabajo.mandatory = false;
        this.dseiduParteTrabajo.dataType = Field.dtAuto;
        this.dseiduParteTrabajo.assignCSS();
        this.fields.push(this.dseiduParteTrabajo);

        this.dseOrdenTrabajoInstalacionClienteCodigo = new Field(this.langMng);
        this.dseOrdenTrabajoInstalacionClienteCodigo.nameInRequest = 'ordentrabajo.instalacion.cliente.codigo';
        this.dseOrdenTrabajoInstalacionClienteCodigo.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_2',
            'Cod. Cliente');
        this.dseOrdenTrabajoInstalacionClienteCodigo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_2', ['Cliente']);
        this.dseOrdenTrabajoInstalacionClienteCodigo.enabled = false;
        this.dseOrdenTrabajoInstalacionClienteCodigo.mandatory = false;
        this.dseOrdenTrabajoInstalacionClienteCodigo.dataType = Field.dtString;
        this.dseOrdenTrabajoInstalacionClienteCodigo.maxLength = 6;
        this.dseOrdenTrabajoInstalacionClienteCodigo.assignCSS();
        this.fields.push(this.dseOrdenTrabajoInstalacionClienteCodigo);

        this.dseOrdenTrabajoInstalacionClienteCIFNIF = new Field(this.langMng);
        this.dseOrdenTrabajoInstalacionClienteCIFNIF.nameInRequest = 'ordentrabajo.instalacion.cliente.cifnif';
        this.dseOrdenTrabajoInstalacionClienteCIFNIF.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_3',
            'CIF/NIF');
        this.dseOrdenTrabajoInstalacionClienteCIFNIF.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_3', ['Cliente']);
        this.dseOrdenTrabajoInstalacionClienteCIFNIF.enabled = false;
        this.dseOrdenTrabajoInstalacionClienteCIFNIF.mandatory = false;
        this.dseOrdenTrabajoInstalacionClienteCIFNIF.dataType = Field.dtString;
        this.dseOrdenTrabajoInstalacionClienteCIFNIF.maxLength = 30;
        this.dseOrdenTrabajoInstalacionClienteCIFNIF.assignCSS();
        this.fields.push(this.dseOrdenTrabajoInstalacionClienteCIFNIF);

        this.dseOrdenTrabajoInstalacionClienteNombreComercial = new Field(this.langMng);
        this.dseOrdenTrabajoInstalacionClienteNombreComercial.nameInRequest = 'ordentrabajo.instalacion.cliente.nombrecomercial';
        this.dseOrdenTrabajoInstalacionClienteNombreComercial.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_4',
            'Cliente');
        this.dseOrdenTrabajoInstalacionClienteNombreComercial.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_4', ['Cliente']);
        this.dseOrdenTrabajoInstalacionClienteNombreComercial.enabled = false;
        this.dseOrdenTrabajoInstalacionClienteNombreComercial.mandatory = false;
        this.dseOrdenTrabajoInstalacionClienteNombreComercial.dataType = Field.dtString;
        this.dseOrdenTrabajoInstalacionClienteNombreComercial.maxLength = 300;
        this.dseOrdenTrabajoInstalacionClienteNombreComercial.assignCSS();
        this.fields.push(this.dseOrdenTrabajoInstalacionClienteNombreComercial);

        this.dseOrdenTrabajoInstalacionNombre = new Field(this.langMng);
        this.dseOrdenTrabajoInstalacionNombre.nameInRequest = 'ordentrabajo.instalacion.nombre';
        this.dseOrdenTrabajoInstalacionNombre.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_5',
            'Instalación');
        this.dseOrdenTrabajoInstalacionNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_5', ['Cliente']);
        this.dseOrdenTrabajoInstalacionNombre.enabled = false;
        this.dseOrdenTrabajoInstalacionNombre.mandatory = false;
        this.dseOrdenTrabajoInstalacionNombre.dataType = Field.dtString;
        this.dseOrdenTrabajoInstalacionNombre.maxLength = 100;
        this.dseOrdenTrabajoInstalacionNombre.assignCSS();
        this.fields.push(this.dseOrdenTrabajoInstalacionNombre);

        this.dseOrdenTrabajoInstalacionDireccion = new Field(this.langMng);
        this.dseOrdenTrabajoInstalacionDireccion.nameInRequest = 'ordentrabajo.instalacion.direccion';
        this.dseOrdenTrabajoInstalacionDireccion.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_6',
            'Dirección');
        this.dseOrdenTrabajoInstalacionDireccion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_6', ['Cliente']);
        this.dseOrdenTrabajoInstalacionDireccion.enabled = false;
        this.dseOrdenTrabajoInstalacionDireccion.mandatory = false;
        this.dseOrdenTrabajoInstalacionDireccion.dataType = Field.dtString;
        this.dseOrdenTrabajoInstalacionDireccion.maxLength = 300;
        this.dseOrdenTrabajoInstalacionDireccion.assignCSS();
        this.fields.push(this.dseOrdenTrabajoInstalacionDireccion);

        this.dseOrdenTrabajoInstalacionCodigoPostalCP = new Field(this.langMng);
        this.dseOrdenTrabajoInstalacionCodigoPostalCP.nameInRequest = 'ordentrabajo.instalacion.codigopostal.cp';
        this.dseOrdenTrabajoInstalacionCodigoPostalCP.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_7',
            'Código Postal');
        this.dseOrdenTrabajoInstalacionCodigoPostalCP.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_7', ['Cliente']);
        this.dseOrdenTrabajoInstalacionCodigoPostalCP.enabled = false;
        this.dseOrdenTrabajoInstalacionCodigoPostalCP.mandatory = false;
        this.dseOrdenTrabajoInstalacionCodigoPostalCP.dataType = Field.dtString;
        this.dseOrdenTrabajoInstalacionCodigoPostalCP.maxLength = 10;
        this.dseOrdenTrabajoInstalacionCodigoPostalCP.assignCSS();
        this.fields.push(this.dseOrdenTrabajoInstalacionCodigoPostalCP);

        this.dseOrdenTrabajoInstalacionMunicipioNombre = new Field(this.langMng);
        this.dseOrdenTrabajoInstalacionMunicipioNombre.nameInRequest = 'ordentrabajo.instalacion.municipio.nombre';
        this.dseOrdenTrabajoInstalacionMunicipioNombre.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_8',
            'Municipio');
        this.dseOrdenTrabajoInstalacionMunicipioNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_8', ['Cliente']);
        this.dseOrdenTrabajoInstalacionMunicipioNombre.enabled = false;
        this.dseOrdenTrabajoInstalacionMunicipioNombre.mandatory = false;
        this.dseOrdenTrabajoInstalacionMunicipioNombre.dataType = Field.dtString;
        this.dseOrdenTrabajoInstalacionMunicipioNombre.maxLength = 300;
        this.dseOrdenTrabajoInstalacionMunicipioNombre.assignCSS();
        this.fields.push(this.dseOrdenTrabajoInstalacionMunicipioNombre);

        this.dseOrdenTrabajoInstalacionTelefono = new Field(this.langMng);
        this.dseOrdenTrabajoInstalacionTelefono.nameInRequest = 'ordentrabajo.instalacion.telefono';
        this.dseOrdenTrabajoInstalacionTelefono.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_9',
            'Teléfono');
        this.dseOrdenTrabajoInstalacionTelefono.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_9', ['Cliente']);
        this.dseOrdenTrabajoInstalacionTelefono.enabled = false;
        this.dseOrdenTrabajoInstalacionTelefono.mandatory = false;
        this.dseOrdenTrabajoInstalacionTelefono.dataType = Field.dtString;
        this.dseOrdenTrabajoInstalacionTelefono.maxLength = 20;
        this.dseOrdenTrabajoInstalacionTelefono.assignCSS();
        this.fields.push(this.dseOrdenTrabajoInstalacionTelefono);

        this.dseTiposSistema = new Field(this.langMng);
        this.dseTiposSistema.nameInRequest = 'tipossistema';
        this.dseTiposSistema.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_10',
            'Tipos sistema');
        this.dseTiposSistema.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_10', ['Cliente']);
        this.dseTiposSistema.enabled = false;
        this.dseTiposSistema.mandatory = false;
        this.dseTiposSistema.dataType = Field.dtString;
        this.dseTiposSistema.maxLength = 300;
        this.dseTiposSistema.assignCSS();
        this.fields.push(this.dseTiposSistema);

        this.dseFechaInicio = new Field(this.langMng);
        this.dseFechaInicio.nameInRequest = 'fechainicio';
        this.dseFechaInicio.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_11',
            'Fecha inicio');
        this.dseFechaInicio.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_11', ['Cliente']);
        this.dseFechaInicio.enabled = false;
        this.dseFechaInicio.mandatory = false;
        this.dseFechaInicio.dataType = Field.dtDate;
        this.dseFechaInicio.assignCSS();
        this.fields.push(this.dseFechaInicio);

        this.dseHoraInicio = new Field(this.langMng);
        this.dseHoraInicio.nameInRequest = 'horainicio';
        this.dseHoraInicio.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_12',
            'Hora inicio');
        this.dseHoraInicio.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_12', ['Cliente']);
        this.dseHoraInicio.enabled = false;
        this.dseHoraInicio.mandatory = false;
        this.dseHoraInicio.dataType = Field.dtTime;
        this.dseHoraInicio.assignCSS();
        this.fields.push(this.dseHoraInicio);

        this.dseFechaFin = new Field(this.langMng);
        this.dseFechaFin.nameInRequest = 'fechafin';
        this.dseFechaFin.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_13',
            'Fecha fin');
        this.dseFechaFin.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_13', ['Cliente']);
        this.dseFechaFin.enabled = false;
        this.dseFechaFin.mandatory = false;
        this.dseFechaFin.dataType = Field.dtDate;
        this.dseFechaFin.assignCSS();
        this.fields.push(this.dseFechaFin);

        this.dseHoraFin = new Field(this.langMng);
        this.dseHoraFin.nameInRequest = 'horafin';
        this.dseHoraFin.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_14',
            'Hora fin');
        this.dseHoraFin.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_14', ['Cliente']);
        this.dseHoraFin.enabled = false;
        this.dseHoraFin.mandatory = false;
        this.dseHoraFin.dataType = Field.dtTime;
        this.dseHoraFin.assignCSS();
        this.fields.push(this.dseHoraFin);

        this.dseFechaInicioReal = new Field(this.langMng);
        this.dseFechaInicioReal.nameInRequest = 'fechainicioreal';
        this.dseFechaInicioReal.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_15',
            'Fecha inicio real');
        this.dseFechaInicioReal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_15', ['Cliente']);
        this.dseFechaInicioReal.enabled = false;
        this.dseFechaInicioReal.mandatory = false;
        this.dseFechaInicioReal.dataType = Field.dtDate;
        this.dseFechaInicioReal.assignCSS();
        this.fields.push(this.dseFechaInicioReal);

        this.dseHoraInicioReal = new Field(this.langMng);
        this.dseHoraInicioReal.nameInRequest = 'horainicioreal';
        this.dseHoraInicioReal.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_16',
            'Hora inicio real');
        this.dseHoraInicioReal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_16', ['Cliente']);
        this.dseHoraInicioReal.enabled = false;
        this.dseHoraInicioReal.mandatory = false;
        this.dseHoraInicioReal.dataType = Field.dtTime;
        this.dseHoraInicioReal.assignCSS();
        this.fields.push(this.dseHoraInicioReal);

        this.dseFechaFinReal = new Field(this.langMng);
        this.dseFechaFinReal.nameInRequest = 'fechafinreal';
        this.dseFechaFinReal.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_17',
            'Fecha fin real');
        this.dseFechaFinReal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_17', ['Cliente']);
        this.dseFechaFinReal.enabled = false;
        this.dseFechaFinReal.mandatory = false;
        this.dseFechaFinReal.dataType = Field.dtDate;
        this.dseFechaFinReal.assignCSS();
        this.fields.push(this.dseFechaFinReal);

        this.dseHoraFinReal = new Field(this.langMng);
        this.dseHoraFinReal.nameInRequest = 'horafinreal';
        this.dseHoraFinReal.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_18',
            'Hora fin real');
        this.dseHoraFinReal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_18', ['Cliente']);
        this.dseHoraFinReal.enabled = false;
        this.dseHoraFinReal.mandatory = false;
        this.dseHoraFinReal.dataType = Field.dtTime;
        this.dseHoraFinReal.assignCSS();
        this.fields.push(this.dseHoraFinReal);

        this.dseEstado = new FieldDefinedSelection(this.langMng);
        this.dseEstado.nameInRequest = 'estado';
        this.dseEstado.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_19',
            'Estado');
        this.dseEstado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_19', ['Cliente']);
        this.dseEstado.enabled = false;
        this.dseEstado.mandatory = false;
        this.dseEstado.dataType = Field.dtString;
        this.dseEstado.maxLength = 1;
        this.dseEstado.options = DefinedSelections.DS_PARTETRABAJO_ESTADO;
        this.dseEstado.assignCSS();
        this.fields.push(this.dseEstado);

        this.dseEsCita = new FieldDefinedSelection(this.langMng);
        this.dseEsCita.nameInRequest = 'escita';
        this.dseEsCita.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_20',
            'Es cita');
        this.dseEsCita.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_20', ['Cliente']);
        this.dseEsCita.enabled = false;
        this.dseEsCita.mandatory = false;
        this.dseEsCita.dataType = Field.dtBool;
        this.dseEsCita.options = DefinedSelections.DS_SI_NO;
        this.dseEsCita.assignCSS();
        this.fields.push(this.dseEsCita);

        this.dseOrdenTrabajoTipoOrden = new FieldDefinedSelection(this.langMng);
        this.dseOrdenTrabajoTipoOrden.nameInRequest = 'ordentrabajo.tipoorden';
        this.dseOrdenTrabajoTipoOrden.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_21',
            'Tipo');
        this.dseOrdenTrabajoTipoOrden.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_21', ['Cliente']);
        this.dseOrdenTrabajoTipoOrden.enabled = false;
        this.dseOrdenTrabajoTipoOrden.mandatory = false;
        this.dseOrdenTrabajoTipoOrden.dataType = Field.dtString;
        this.dseOrdenTrabajoTipoOrden.maxLength = 1;
        this.dseOrdenTrabajoTipoOrden.options = DefinedSelections.DS_TIPOORDENTRABAJO;
        this.dseOrdenTrabajoTipoOrden.assignCSS();
        this.fields.push(this.dseOrdenTrabajoTipoOrden);

        this.dseOrdenTrabajoPrioridad = new FieldDefinedSelection(this.langMng);
        this.dseOrdenTrabajoPrioridad.nameInRequest = 'ordentrabajo.prioridad';
        this.dseOrdenTrabajoPrioridad.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_22',
            'Prioridad');
        this.dseOrdenTrabajoPrioridad.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_22', ['Cliente']);
        this.dseOrdenTrabajoPrioridad.enabled = false;
        this.dseOrdenTrabajoPrioridad.mandatory = false;
        this.dseOrdenTrabajoPrioridad.dataType = Field.dtString;
        this.dseOrdenTrabajoPrioridad.maxLength = 2;
        this.dseOrdenTrabajoPrioridad.options = DefinedSelections.DS_TAREA_URGENCIA;
        this.dseOrdenTrabajoPrioridad.assignCSS();
        this.fields.push(this.dseOrdenTrabajoPrioridad);

        this.dseOrdenTrabajoDepartamentoNombre = new Field(this.langMng);
        this.dseOrdenTrabajoDepartamentoNombre.nameInRequest = 'ordentrabajo.departamento.nombre';
        this.dseOrdenTrabajoDepartamentoNombre.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_23',
            'Departamento');
        this.dseOrdenTrabajoDepartamentoNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_23', []);
        this.dseOrdenTrabajoDepartamentoNombre.enabled = false;
        this.dseOrdenTrabajoDepartamentoNombre.mandatory = false;
        this.dseOrdenTrabajoDepartamentoNombre.dataType = Field.dtString;
        this.dseOrdenTrabajoDepartamentoNombre.maxLength = 100;
        this.dseOrdenTrabajoDepartamentoNombre.assignCSS();
        this.fields.push(this.dseOrdenTrabajoDepartamentoNombre);

        this.dseTecnicosConcat = new Field(this.langMng);
        this.dseTecnicosConcat.nameInRequest = 'tecnicosconcat';
        this.dseTecnicosConcat.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_24',
            'Técnicos');
        this.dseTecnicosConcat.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_24', ['Cliente']);
        this.dseTecnicosConcat.enabled = false;
        this.dseTecnicosConcat.mandatory = false;
        this.dseTecnicosConcat.dataType = Field.dtString;
        this.dseTecnicosConcat.maxLength = 300;
        this.dseTecnicosConcat.assignCSS();
        this.fields.push(this.dseTecnicosConcat);

        this.dseTipoCierreDescripcion = new Field(this.langMng);
        this.dseTipoCierreDescripcion.nameInRequest = 'tipocierre.descripcion';
        this.dseTipoCierreDescripcion.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_25',
            'Tipo cierre');
        this.dseTipoCierreDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_25', []);
        this.dseTipoCierreDescripcion.enabled = false;
        this.dseTipoCierreDescripcion.mandatory = false;
        this.dseTipoCierreDescripcion.dataType = Field.dtString;
        this.dseTipoCierreDescripcion.maxLength = 300;
        this.dseTipoCierreDescripcion.assignCSS();
        this.fields.push(this.dseTipoCierreDescripcion);

        this.dseFirmado = new FieldDefinedSelection(this.langMng);
        this.dseFirmado.nameInRequest = 'firmado';
        this.dseFirmado.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_26',
            'Firmado');
        this.dseFirmado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_26', ['Cliente']);
        this.dseFirmado.enabled = false;
        this.dseFirmado.mandatory = false;
        this.dseFirmado.dataType = Field.dtBool;
        this.dseFirmado.options = DefinedSelections.DS_SI_NO;
        this.dseFirmado.assignCSS();
        this.fields.push(this.dseFirmado);

        this.dseValoracionCliente = new FieldDefinedSelection(this.langMng);
        this.dseValoracionCliente.nameInRequest = 'valoracioncliente';
        this.dseValoracionCliente.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_27',
            'Valoración cliente');
        this.dseValoracionCliente.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_27', ['Cliente']);
        this.dseValoracionCliente.enabled = false;
        this.dseValoracionCliente.mandatory = false;
        this.dseValoracionCliente.dataType = Field.dtInt;
        this.dseValoracionCliente.options = DefinedSelections.DS_PARTETRABAJO_VALORACION;
        this.dseValoracionCliente.assignCSS();
        this.fields.push(this.dseValoracionCliente);

        this.dseMotivoAnulacionDescripcion = new Field(this.langMng);
        this.dseMotivoAnulacionDescripcion.nameInRequest = 'motivoanulacion.descripcion';
        this.dseMotivoAnulacionDescripcion.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_28',
            'Motivo anulación');
        this.dseMotivoAnulacionDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_28', []);
        this.dseMotivoAnulacionDescripcion.enabled = false;
        this.dseMotivoAnulacionDescripcion.mandatory = false;
        this.dseMotivoAnulacionDescripcion.dataType = Field.dtString;
        this.dseMotivoAnulacionDescripcion.maxLength = 100;
        this.dseMotivoAnulacionDescripcion.assignCSS();
        this.fields.push(this.dseMotivoAnulacionDescripcion);

        this.dseEnviadoCliente = new FieldDefinedSelection(this.langMng);
        this.dseEnviadoCliente.nameInRequest = 'enviadocliente';
        this.dseEnviadoCliente.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_29',
            'Enviado al cliente');
        this.dseEnviadoCliente.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_29', ['Cliente']);
        this.dseEnviadoCliente.enabled = false;
        this.dseEnviadoCliente.mandatory = false;
        this.dseEnviadoCliente.dataType = Field.dtBool;
        this.dseEnviadoCliente.options = DefinedSelections.DS_SI_NO;
        this.dseEnviadoCliente.assignCSS();
        this.fields.push(this.dseEnviadoCliente);

        this.dseFacturado = new FieldDefinedSelection(this.langMng);
        this.dseFacturado.nameInRequest = 'facturado';
        this.dseFacturado.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajo_item_Clas_1699352150016581CjtoVis_3ICtjoVis_30',
            'Facturado');
        this.dseFacturado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_3ICtjoVis_30', ['Cliente']);
        this.dseFacturado.enabled = false;
        this.dseFacturado.mandatory = false;
        this.dseFacturado.dataType = Field.dtBool;
        this.dseFacturado.options = DefinedSelections.DS_SI_NO;
        this.dseFacturado.assignCSS();
        this.fields.push(this.dseFacturado);

    }
}
