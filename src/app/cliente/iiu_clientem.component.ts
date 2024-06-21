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

export class ClienteIIUuClienteMComponent extends AbstractIIU {

    /** Display Set elements */
    public dseCodigo: Field;
    public dseGrupoEmpresaNombre: Field;
    public dseNombreRazonSocial: Field;
    public dsePersonaJuridica: FieldDefinedSelection;
    public dseNombreComercial: Field;
    public dseCIFNIF: Field;
    public dseFechaAlta: Field;
    public dseFechaBaja: Field;
    public dseObservacionesBaja: Field;
    public dseObservacions: Field;
    public dseEmail: Field;
    public dsePaginaWeb: Field;
    public dseTipoClienteDescripcion: Field;
    public dseSectorDescripcion: Field;
    public dseTelefono: Field;
    public dseExtension: Field;
    public dseFax: Field;
    public dseEstado: FieldDefinedSelection;
    public dseObservacionesInternas: Field;
    public dseTipoResidencia: FieldDefinedSelection;
    public dseComunidadPropietarios: FieldDefinedSelection;
    public dseSepararFacturasCuotas: FieldDefinedSelection;
    public dseNumLineasFacturasCuota: FieldDefinedSelection;
    public dseConsienteComunica: FieldDefinedSelection;
    public dseTieneAccesoWeb: FieldDefinedSelection;

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
        this.idXML = 'Clas_1699352150016661UIInst_1';
        this.className = ModelConstants.Cliente.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Cliente_iiu_IIU_ClienteM',
            'Cliente');
        this.queryURL = '/api/ClienteApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseCodigo = new Field(this.langMng);
        this.dseCodigo.nameInRequest = 'codigo';
        this.dseCodigo.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_1',
            'Código');
        this.dseCodigo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_1', ['Cliente']);
        this.dseCodigo.enabled = false;
        this.dseCodigo.mandatory = false;
        this.dseCodigo.dataType = Field.dtString;
        this.dseCodigo.maxLength = 6;
        this.dseCodigo.assignCSS();
        this.fields.push(this.dseCodigo);

        this.dseGrupoEmpresaNombre = new Field(this.langMng);
        this.dseGrupoEmpresaNombre.nameInRequest = 'grupoempresa.nombre';
        this.dseGrupoEmpresaNombre.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_2',
            'Empresa');
        this.dseGrupoEmpresaNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_2', []);
        this.dseGrupoEmpresaNombre.enabled = false;
        this.dseGrupoEmpresaNombre.mandatory = false;
        this.dseGrupoEmpresaNombre.dataType = Field.dtString;
        this.dseGrupoEmpresaNombre.maxLength = 300;
        this.dseGrupoEmpresaNombre.assignCSS();
        this.fields.push(this.dseGrupoEmpresaNombre);

        this.dseNombreRazonSocial = new Field(this.langMng);
        this.dseNombreRazonSocial.nameInRequest = 'nombrerazonsocial';
        this.dseNombreRazonSocial.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_3',
            'Nombre/razón social');
        this.dseNombreRazonSocial.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_3', ['Cliente']);
        this.dseNombreRazonSocial.enabled = false;
        this.dseNombreRazonSocial.mandatory = false;
        this.dseNombreRazonSocial.dataType = Field.dtString;
        this.dseNombreRazonSocial.maxLength = 300;
        this.dseNombreRazonSocial.assignCSS();
        this.fields.push(this.dseNombreRazonSocial);

        this.dsePersonaJuridica = new FieldDefinedSelection(this.langMng);
        this.dsePersonaJuridica.nameInRequest = 'personajuridica';
        this.dsePersonaJuridica.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_4',
            'Persona jurídica');
        this.dsePersonaJuridica.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_4', ['Cliente']);
        this.dsePersonaJuridica.enabled = false;
        this.dsePersonaJuridica.mandatory = false;
        this.dsePersonaJuridica.dataType = Field.dtBool;
        this.dsePersonaJuridica.options = DefinedSelections.DS_SI_NO;
        this.dsePersonaJuridica.assignCSS();
        this.fields.push(this.dsePersonaJuridica);

        this.dseNombreComercial = new Field(this.langMng);
        this.dseNombreComercial.nameInRequest = 'nombrecomercial';
        this.dseNombreComercial.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_5',
            'Nombre comercial');
        this.dseNombreComercial.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_5', ['Cliente']);
        this.dseNombreComercial.enabled = false;
        this.dseNombreComercial.mandatory = false;
        this.dseNombreComercial.dataType = Field.dtString;
        this.dseNombreComercial.maxLength = 300;
        this.dseNombreComercial.assignCSS();
        this.fields.push(this.dseNombreComercial);

        this.dseCIFNIF = new Field(this.langMng);
        this.dseCIFNIF.nameInRequest = 'cifnif';
        this.dseCIFNIF.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_6',
            'CIF/NIF');
        this.dseCIFNIF.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_6', ['Cliente']);
        this.dseCIFNIF.enabled = false;
        this.dseCIFNIF.mandatory = false;
        this.dseCIFNIF.dataType = Field.dtString;
        this.dseCIFNIF.maxLength = 30;
        this.dseCIFNIF.assignCSS();
        this.fields.push(this.dseCIFNIF);

        this.dseFechaAlta = new Field(this.langMng);
        this.dseFechaAlta.nameInRequest = 'fechaalta';
        this.dseFechaAlta.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_7',
            'F. Alta');
        this.dseFechaAlta.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_7', ['Cliente']);
        this.dseFechaAlta.enabled = false;
        this.dseFechaAlta.mandatory = false;
        this.dseFechaAlta.dataType = Field.dtDate;
        this.dseFechaAlta.assignCSS();
        this.fields.push(this.dseFechaAlta);

        this.dseFechaBaja = new Field(this.langMng);
        this.dseFechaBaja.nameInRequest = 'fechabaja';
        this.dseFechaBaja.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_8',
            'F. Baja');
        this.dseFechaBaja.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_8', ['Cliente']);
        this.dseFechaBaja.enabled = false;
        this.dseFechaBaja.mandatory = false;
        this.dseFechaBaja.dataType = Field.dtDate;
        this.dseFechaBaja.assignCSS();
        this.fields.push(this.dseFechaBaja);

        this.dseObservacionesBaja = new Field(this.langMng);
        this.dseObservacionesBaja.nameInRequest = 'observacionesbaja';
        this.dseObservacionesBaja.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_9',
            'Observaciones baja');
        this.dseObservacionesBaja.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_9', ['Cliente']);
        this.dseObservacionesBaja.enabled = false;
        this.dseObservacionesBaja.mandatory = false;
        this.dseObservacionesBaja.dataType = Field.dtString;
        this.dseObservacionesBaja.maxLength = 999;
        this.dseObservacionesBaja.assignCSS();
        this.fields.push(this.dseObservacionesBaja);

        this.dseObservacions = new Field(this.langMng);
        this.dseObservacions.nameInRequest = 'observacions';
        this.dseObservacions.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_10',
            'Observaciones');
        this.dseObservacions.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_10', ['Cliente']);
        this.dseObservacions.enabled = false;
        this.dseObservacions.mandatory = false;
        this.dseObservacions.dataType = Field.dtString;
        this.dseObservacions.maxLength = 999;
        this.dseObservacions.assignCSS();
        this.fields.push(this.dseObservacions);

        this.dseEmail = new Field(this.langMng);
        this.dseEmail.nameInRequest = 'email';
        this.dseEmail.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_11',
            'Email');
        this.dseEmail.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_11', ['Cliente']);
        this.dseEmail.enabled = false;
        this.dseEmail.mandatory = false;
        this.dseEmail.dataType = Field.dtString;
        this.dseEmail.maxLength = 100;
        this.dseEmail.assignCSS();
        this.fields.push(this.dseEmail);

        this.dsePaginaWeb = new Field(this.langMng);
        this.dsePaginaWeb.nameInRequest = 'paginaweb';
        this.dsePaginaWeb.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_12',
            'Página web');
        this.dsePaginaWeb.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_12', ['Cliente']);
        this.dsePaginaWeb.enabled = false;
        this.dsePaginaWeb.mandatory = false;
        this.dsePaginaWeb.dataType = Field.dtString;
        this.dsePaginaWeb.maxLength = 300;
        this.dsePaginaWeb.assignCSS();
        this.fields.push(this.dsePaginaWeb);

        this.dseTipoClienteDescripcion = new Field(this.langMng);
        this.dseTipoClienteDescripcion.nameInRequest = 'tipocliente.descripcion';
        this.dseTipoClienteDescripcion.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_13',
            'Tipo cliente');
        this.dseTipoClienteDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_13', []);
        this.dseTipoClienteDescripcion.enabled = false;
        this.dseTipoClienteDescripcion.mandatory = false;
        this.dseTipoClienteDescripcion.dataType = Field.dtString;
        this.dseTipoClienteDescripcion.maxLength = 100;
        this.dseTipoClienteDescripcion.fieldSize = 50;
        this.dseTipoClienteDescripcion.assignCSS();
        this.fields.push(this.dseTipoClienteDescripcion);

        this.dseSectorDescripcion = new Field(this.langMng);
        this.dseSectorDescripcion.nameInRequest = 'sector.descripcion';
        this.dseSectorDescripcion.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_14',
            'Sector');
        this.dseSectorDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_14', ['Cliente']);
        this.dseSectorDescripcion.enabled = false;
        this.dseSectorDescripcion.mandatory = false;
        this.dseSectorDescripcion.dataType = Field.dtString;
        this.dseSectorDescripcion.maxLength = 100;
        this.dseSectorDescripcion.fieldSize = 50;
        this.dseSectorDescripcion.assignCSS();
        this.fields.push(this.dseSectorDescripcion);

        this.dseTelefono = new Field(this.langMng);
        this.dseTelefono.nameInRequest = 'telefono';
        this.dseTelefono.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_15',
            'Teléfono');
        this.dseTelefono.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_15', ['Cliente']);
        this.dseTelefono.enabled = false;
        this.dseTelefono.mandatory = false;
        this.dseTelefono.dataType = Field.dtString;
        this.dseTelefono.maxLength = 20;
        this.dseTelefono.fieldSize = 15;
        this.dseTelefono.assignCSS();
        this.fields.push(this.dseTelefono);

        this.dseExtension = new Field(this.langMng);
        this.dseExtension.nameInRequest = 'extension';
        this.dseExtension.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_25',
            'Extensión');
        this.dseExtension.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_25', ['Cliente']);
        this.dseExtension.enabled = false;
        this.dseExtension.mandatory = false;
        this.dseExtension.dataType = Field.dtString;
        this.dseExtension.maxLength = 4;
        this.dseExtension.assignCSS();
        this.fields.push(this.dseExtension);

        this.dseFax = new Field(this.langMng);
        this.dseFax.nameInRequest = 'fax';
        this.dseFax.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_16',
            'Fax');
        this.dseFax.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_16', ['Cliente']);
        this.dseFax.enabled = false;
        this.dseFax.mandatory = false;
        this.dseFax.dataType = Field.dtString;
        this.dseFax.maxLength = 20;
        this.dseFax.fieldSize = 15;
        this.dseFax.assignCSS();
        this.fields.push(this.dseFax);

        this.dseEstado = new FieldDefinedSelection(this.langMng);
        this.dseEstado.nameInRequest = 'estado';
        this.dseEstado.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_17',
            'Estado');
        this.dseEstado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_17', ['Cliente']);
        this.dseEstado.enabled = false;
        this.dseEstado.mandatory = false;
        this.dseEstado.dataType = Field.dtString;
        this.dseEstado.maxLength = 10;
        this.dseEstado.fieldSize = 15;
        this.dseEstado.options = DefinedSelections.DS_CLIENTE_ESTADO;
        this.dseEstado.assignCSS();
        this.fields.push(this.dseEstado);

        this.dseObservacionesInternas = new Field(this.langMng);
        this.dseObservacionesInternas.nameInRequest = 'observacionesinternas';
        this.dseObservacionesInternas.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_18',
            'Observaciones internas');
        this.dseObservacionesInternas.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_18', ['Cliente']);
        this.dseObservacionesInternas.enabled = false;
        this.dseObservacionesInternas.mandatory = false;
        this.dseObservacionesInternas.dataType = Field.dtString;
        this.dseObservacionesInternas.maxLength = 999;
        this.dseObservacionesInternas.assignCSS();
        this.fields.push(this.dseObservacionesInternas);

        this.dseTipoResidencia = new FieldDefinedSelection(this.langMng);
        this.dseTipoResidencia.nameInRequest = 'tiporesidencia';
        this.dseTipoResidencia.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_20',
            'Tipo de residencia');
        this.dseTipoResidencia.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_20', ['Cliente']);
        this.dseTipoResidencia.enabled = false;
        this.dseTipoResidencia.mandatory = false;
        this.dseTipoResidencia.dataType = Field.dtString;
        this.dseTipoResidencia.maxLength = 2;
        this.dseTipoResidencia.fieldSize = 20;
        this.dseTipoResidencia.options = DefinedSelections.DS_TIPORESIDENCIACLIENTE;
        this.dseTipoResidencia.assignCSS();
        this.fields.push(this.dseTipoResidencia);

        this.dseComunidadPropietarios = new FieldDefinedSelection(this.langMng);
        this.dseComunidadPropietarios.nameInRequest = 'comunidadpropietarios';
        this.dseComunidadPropietarios.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_21',
            'Es comunidad de propietarios');
        this.dseComunidadPropietarios.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_21', ['Cliente']);
        this.dseComunidadPropietarios.enabled = false;
        this.dseComunidadPropietarios.mandatory = false;
        this.dseComunidadPropietarios.dataType = Field.dtBool;
        this.dseComunidadPropietarios.fieldSize = 20;
        this.dseComunidadPropietarios.options = DefinedSelections.DS_SI_NO;
        this.dseComunidadPropietarios.assignCSS();
        this.fields.push(this.dseComunidadPropietarios);

        this.dseSepararFacturasCuotas = new FieldDefinedSelection(this.langMng);
        this.dseSepararFacturasCuotas.nameInRequest = 'separarfacturascuotas';
        this.dseSepararFacturasCuotas.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_22',
            'Separar facturas de cuotas');
        this.dseSepararFacturasCuotas.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_22', ['Cliente']);
        this.dseSepararFacturasCuotas.enabled = false;
        this.dseSepararFacturasCuotas.mandatory = false;
        this.dseSepararFacturasCuotas.dataType = Field.dtString;
        this.dseSepararFacturasCuotas.maxLength = 5;
        this.dseSepararFacturasCuotas.options = DefinedSelections.DS_SEPARARFACTURA;
        this.dseSepararFacturasCuotas.assignCSS();
        this.fields.push(this.dseSepararFacturasCuotas);

        this.dseNumLineasFacturasCuota = new FieldDefinedSelection(this.langMng);
        this.dseNumLineasFacturasCuota.nameInRequest = 'numlineasfacturascuota';
        this.dseNumLineasFacturasCuota.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_23',
            'Nº de líneas en facturas de cuotas');
        this.dseNumLineasFacturasCuota.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_23', ['Cliente']);
        this.dseNumLineasFacturasCuota.enabled = false;
        this.dseNumLineasFacturasCuota.mandatory = false;
        this.dseNumLineasFacturasCuota.dataType = Field.dtString;
        this.dseNumLineasFacturasCuota.maxLength = 5;
        this.dseNumLineasFacturasCuota.options = DefinedSelections.DS_NUMLINEASFACTURA;
        this.dseNumLineasFacturasCuota.assignCSS();
        this.fields.push(this.dseNumLineasFacturasCuota);

        this.dseConsienteComunica = new FieldDefinedSelection(this.langMng);
        this.dseConsienteComunica.nameInRequest = 'consientecomunica';
        this.dseConsienteComunica.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_24',
            'Consiente comunicaciones');
        this.dseConsienteComunica.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_24', ['Cliente']);
        this.dseConsienteComunica.enabled = false;
        this.dseConsienteComunica.mandatory = false;
        this.dseConsienteComunica.dataType = Field.dtBool;
        this.dseConsienteComunica.options = DefinedSelections.DS_SI_NO;
        this.dseConsienteComunica.assignCSS();
        this.fields.push(this.dseConsienteComunica);

        this.dseTieneAccesoWeb = new FieldDefinedSelection(this.langMng);
        this.dseTieneAccesoWeb.nameInRequest = 'tieneaccesoweb';
        this.dseTieneAccesoWeb.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_ClienteM_item_Clas_1699352150016661CjtoVis_3ICtjoVis_26',
            'Tiene acceso web');
        this.dseTieneAccesoWeb.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_3ICtjoVis_26', []);
        this.dseTieneAccesoWeb.enabled = false;
        this.dseTieneAccesoWeb.mandatory = false;
        this.dseTieneAccesoWeb.dataType = Field.dtBool;
        this.dseTieneAccesoWeb.options = DefinedSelections.DS_SI_NO;
        this.dseTieneAccesoWeb.assignCSS();
        this.fields.push(this.dseTieneAccesoWeb);

    }
}
