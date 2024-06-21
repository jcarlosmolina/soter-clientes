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

export class ElementoSistemaIIUuElementoSistemaComponent extends AbstractIIU {

    /** Display Set elements */
    public dseSistemaInstalacionClienteNombreComercial: Field;
    public dseSistemaInstalacionNombre: Field;
    public dseSistemaNombre: Field;
    public dseiduElementoSistema: Field;
    public dseTipoElementoDescripcion: Field;
    public dseNombre: Field;
    public dseEstado: FieldDefinedSelection;
    public dseDescripcion: Field;
    public dseNumSeriePlaca: Field;
    public dseReferencia: Field;
    public dseMarcaDescripcion: Field;
    public dseModeloSistemaDescripcion: Field;
    public dseZonaUbicacion: Field;
    public dseFechaInstalacion: Field;
    public dseFechaFabricacion: Field;
    public dseFechaRevision: Field;
    public dseFinGarantiaProveedor: Field;
    public dseFinGarantiaCliente: Field;
    public dseObservacions: Field;
    public dsePendienteRevision: FieldDefinedSelection;
    public dseActivo: Field;

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
        this.idXML = 'Clas_1699352150016898UIInst_1';
        this.className = ModelConstants.Elementosistema.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_ElementoSistema_iiu_IIU_ElementoSistema',
            'Elemento');
        this.queryURL = '/api/ElementoSistemaApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseSistemaInstalacionClienteNombreComercial = new Field(this.langMng);
        this.dseSistemaInstalacionClienteNombreComercial.nameInRequest = 'sistema.instalacion.cliente.nombrecomercial';
        this.dseSistemaInstalacionClienteNombreComercial.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSI_ElementoSistema_item_Clas_1699352150016898CjtoVis_3ICtjoVis_1',
            'Cliente');
        this.dseSistemaInstalacionClienteNombreComercial.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016898CjtoVis_3ICtjoVis_1', ['Cliente']);
        this.dseSistemaInstalacionClienteNombreComercial.enabled = false;
        this.dseSistemaInstalacionClienteNombreComercial.mandatory = false;
        this.dseSistemaInstalacionClienteNombreComercial.dataType = Field.dtString;
        this.dseSistemaInstalacionClienteNombreComercial.maxLength = 300;
        this.dseSistemaInstalacionClienteNombreComercial.assignCSS();
        this.fields.push(this.dseSistemaInstalacionClienteNombreComercial);

        this.dseSistemaInstalacionNombre = new Field(this.langMng);
        this.dseSistemaInstalacionNombre.nameInRequest = 'sistema.instalacion.nombre';
        this.dseSistemaInstalacionNombre.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSI_ElementoSistema_item_Clas_1699352150016898CjtoVis_3ICtjoVis_2',
            'Instalación');
        this.dseSistemaInstalacionNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016898CjtoVis_3ICtjoVis_2', ['Cliente']);
        this.dseSistemaInstalacionNombre.enabled = false;
        this.dseSistemaInstalacionNombre.mandatory = false;
        this.dseSistemaInstalacionNombre.dataType = Field.dtString;
        this.dseSistemaInstalacionNombre.maxLength = 100;
        this.dseSistemaInstalacionNombre.assignCSS();
        this.fields.push(this.dseSistemaInstalacionNombre);

        this.dseSistemaNombre = new Field(this.langMng);
        this.dseSistemaNombre.nameInRequest = 'sistema.nombre';
        this.dseSistemaNombre.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSI_ElementoSistema_item_Clas_1699352150016898CjtoVis_3ICtjoVis_3',
            'Sistema');
        this.dseSistemaNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016898CjtoVis_3ICtjoVis_3', ['Cliente']);
        this.dseSistemaNombre.enabled = false;
        this.dseSistemaNombre.mandatory = false;
        this.dseSistemaNombre.dataType = Field.dtString;
        this.dseSistemaNombre.maxLength = 100;
        this.dseSistemaNombre.assignCSS();
        this.fields.push(this.dseSistemaNombre);

        this.dseiduElementoSistema = new Field(this.langMng);
        this.dseiduElementoSistema.nameInRequest = 'id_elementosistema';
        this.dseiduElementoSistema.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSI_ElementoSistema_item_Clas_1699352150016898CjtoVis_3ICtjoVis_4',
            'Código');
        this.dseiduElementoSistema.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016898CjtoVis_3ICtjoVis_4', ['Cliente']);
        this.dseiduElementoSistema.enabled = false;
        this.dseiduElementoSistema.mandatory = false;
        this.dseiduElementoSistema.dataType = Field.dtAuto;
        this.dseiduElementoSistema.assignCSS();
        this.fields.push(this.dseiduElementoSistema);

        this.dseTipoElementoDescripcion = new Field(this.langMng);
        this.dseTipoElementoDescripcion.nameInRequest = 'tipoelemento.descripcion';
        this.dseTipoElementoDescripcion.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSI_ElementoSistema_item_Clas_1699352150016898CjtoVis_3ICtjoVis_5',
            'Tipo de elemento');
        this.dseTipoElementoDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016898CjtoVis_3ICtjoVis_5', ['Cliente']);
        this.dseTipoElementoDescripcion.enabled = false;
        this.dseTipoElementoDescripcion.mandatory = false;
        this.dseTipoElementoDescripcion.dataType = Field.dtString;
        this.dseTipoElementoDescripcion.maxLength = 100;
        this.dseTipoElementoDescripcion.assignCSS();
        this.fields.push(this.dseTipoElementoDescripcion);

        this.dseNombre = new Field(this.langMng);
        this.dseNombre.nameInRequest = 'nombre';
        this.dseNombre.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSI_ElementoSistema_item_Clas_1699352150016898CjtoVis_3ICtjoVis_6',
            'Nombre');
        this.dseNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016898CjtoVis_3ICtjoVis_6', ['Cliente']);
        this.dseNombre.enabled = false;
        this.dseNombre.mandatory = false;
        this.dseNombre.dataType = Field.dtString;
        this.dseNombre.maxLength = 100;
        this.dseNombre.assignCSS();
        this.fields.push(this.dseNombre);

        this.dseEstado = new FieldDefinedSelection(this.langMng);
        this.dseEstado.nameInRequest = 'estado';
        this.dseEstado.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSI_ElementoSistema_item_Clas_1699352150016898CjtoVis_3ICtjoVis_7',
            'Estado');
        this.dseEstado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016898CjtoVis_3ICtjoVis_7', ['Cliente']);
        this.dseEstado.enabled = false;
        this.dseEstado.mandatory = false;
        this.dseEstado.dataType = Field.dtString;
        this.dseEstado.maxLength = 2;
        this.dseEstado.options = DefinedSelections.DS_ELEMENTO_ESTADO;
        this.dseEstado.assignCSS();
        this.fields.push(this.dseEstado);

        this.dseDescripcion = new Field(this.langMng);
        this.dseDescripcion.nameInRequest = 'descripcion';
        this.dseDescripcion.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSI_ElementoSistema_item_Clas_1699352150016898CjtoVis_3ICtjoVis_8',
            'Descripción');
        this.dseDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016898CjtoVis_3ICtjoVis_8', ['Cliente']);
        this.dseDescripcion.enabled = false;
        this.dseDescripcion.mandatory = false;
        this.dseDescripcion.dataType = Field.dtString;
        this.dseDescripcion.maxLength = 300;
        this.dseDescripcion.assignCSS();
        this.fields.push(this.dseDescripcion);

        this.dseNumSeriePlaca = new Field(this.langMng);
        this.dseNumSeriePlaca.nameInRequest = 'numserieplaca';
        this.dseNumSeriePlaca.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSI_ElementoSistema_item_Clas_1699352150016898CjtoVis_3ICtjoVis_9',
            'Número de serie/placa');
        this.dseNumSeriePlaca.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016898CjtoVis_3ICtjoVis_9', ['Cliente']);
        this.dseNumSeriePlaca.enabled = false;
        this.dseNumSeriePlaca.mandatory = false;
        this.dseNumSeriePlaca.dataType = Field.dtString;
        this.dseNumSeriePlaca.maxLength = 50;
        this.dseNumSeriePlaca.assignCSS();
        this.fields.push(this.dseNumSeriePlaca);

        this.dseReferencia = new Field(this.langMng);
        this.dseReferencia.nameInRequest = 'referencia';
        this.dseReferencia.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSI_ElementoSistema_item_Clas_1699352150016898CjtoVis_3ICtjoVis_10',
            'Referencia');
        this.dseReferencia.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016898CjtoVis_3ICtjoVis_10', ['Cliente']);
        this.dseReferencia.enabled = false;
        this.dseReferencia.mandatory = false;
        this.dseReferencia.dataType = Field.dtString;
        this.dseReferencia.maxLength = 100;
        this.dseReferencia.assignCSS();
        this.fields.push(this.dseReferencia);

        this.dseMarcaDescripcion = new Field(this.langMng);
        this.dseMarcaDescripcion.nameInRequest = 'marca.descripcion';
        this.dseMarcaDescripcion.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSI_ElementoSistema_item_Clas_1699352150016898CjtoVis_3ICtjoVis_11',
            'Marca');
        this.dseMarcaDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016898CjtoVis_3ICtjoVis_11', ['Cliente']);
        this.dseMarcaDescripcion.enabled = false;
        this.dseMarcaDescripcion.mandatory = false;
        this.dseMarcaDescripcion.dataType = Field.dtString;
        this.dseMarcaDescripcion.maxLength = 100;
        this.dseMarcaDescripcion.assignCSS();
        this.fields.push(this.dseMarcaDescripcion);

        this.dseModeloSistemaDescripcion = new Field(this.langMng);
        this.dseModeloSistemaDescripcion.nameInRequest = 'modelosistema.descripcion';
        this.dseModeloSistemaDescripcion.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSI_ElementoSistema_item_Clas_1699352150016898CjtoVis_3ICtjoVis_12',
            'Modelo');
        this.dseModeloSistemaDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016898CjtoVis_3ICtjoVis_12', ['Cliente']);
        this.dseModeloSistemaDescripcion.enabled = false;
        this.dseModeloSistemaDescripcion.mandatory = false;
        this.dseModeloSistemaDescripcion.dataType = Field.dtString;
        this.dseModeloSistemaDescripcion.maxLength = 100;
        this.dseModeloSistemaDescripcion.assignCSS();
        this.fields.push(this.dseModeloSistemaDescripcion);

        this.dseZonaUbicacion = new Field(this.langMng);
        this.dseZonaUbicacion.nameInRequest = 'zonaubicacion';
        this.dseZonaUbicacion.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSI_ElementoSistema_item_Clas_1699352150016898CjtoVis_3ICtjoVis_13',
            'Zona/Ubicación');
        this.dseZonaUbicacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016898CjtoVis_3ICtjoVis_13', ['Cliente']);
        this.dseZonaUbicacion.enabled = false;
        this.dseZonaUbicacion.mandatory = false;
        this.dseZonaUbicacion.dataType = Field.dtString;
        this.dseZonaUbicacion.maxLength = 300;
        this.dseZonaUbicacion.assignCSS();
        this.fields.push(this.dseZonaUbicacion);

        this.dseFechaInstalacion = new Field(this.langMng);
        this.dseFechaInstalacion.nameInRequest = 'fechainstalacion';
        this.dseFechaInstalacion.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSI_ElementoSistema_item_Clas_1699352150016898CjtoVis_3ICtjoVis_14',
            'F. Instalación');
        this.dseFechaInstalacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016898CjtoVis_3ICtjoVis_14', ['Cliente']);
        this.dseFechaInstalacion.enabled = false;
        this.dseFechaInstalacion.mandatory = false;
        this.dseFechaInstalacion.dataType = Field.dtDate;
        this.dseFechaInstalacion.assignCSS();
        this.fields.push(this.dseFechaInstalacion);

        this.dseFechaFabricacion = new Field(this.langMng);
        this.dseFechaFabricacion.nameInRequest = 'fechafabricacion';
        this.dseFechaFabricacion.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSI_ElementoSistema_item_Clas_1699352150016898CjtoVis_3ICtjoVis_15',
            'F. Fabricación');
        this.dseFechaFabricacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016898CjtoVis_3ICtjoVis_15', ['Cliente']);
        this.dseFechaFabricacion.enabled = false;
        this.dseFechaFabricacion.mandatory = false;
        this.dseFechaFabricacion.dataType = Field.dtDate;
        this.dseFechaFabricacion.assignCSS();
        this.fields.push(this.dseFechaFabricacion);

        this.dseFechaRevision = new Field(this.langMng);
        this.dseFechaRevision.nameInRequest = 'fecharevision';
        this.dseFechaRevision.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSI_ElementoSistema_item_Clas_1699352150016898CjtoVis_3ICtjoVis_16',
            'F. Revisión');
        this.dseFechaRevision.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016898CjtoVis_3ICtjoVis_16', ['Cliente']);
        this.dseFechaRevision.enabled = false;
        this.dseFechaRevision.mandatory = false;
        this.dseFechaRevision.dataType = Field.dtDate;
        this.dseFechaRevision.assignCSS();
        this.fields.push(this.dseFechaRevision);

        this.dseFinGarantiaProveedor = new Field(this.langMng);
        this.dseFinGarantiaProveedor.nameInRequest = 'fingarantiaproveedor';
        this.dseFinGarantiaProveedor.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSI_ElementoSistema_item_Clas_1699352150016898CjtoVis_3ICtjoVis_17',
            'Fin garantía proveedor');
        this.dseFinGarantiaProveedor.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016898CjtoVis_3ICtjoVis_17', ['Cliente']);
        this.dseFinGarantiaProveedor.enabled = false;
        this.dseFinGarantiaProveedor.mandatory = false;
        this.dseFinGarantiaProveedor.dataType = Field.dtDate;
        this.dseFinGarantiaProveedor.assignCSS();
        this.fields.push(this.dseFinGarantiaProveedor);

        this.dseFinGarantiaCliente = new Field(this.langMng);
        this.dseFinGarantiaCliente.nameInRequest = 'fingarantiacliente';
        this.dseFinGarantiaCliente.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSI_ElementoSistema_item_Clas_1699352150016898CjtoVis_3ICtjoVis_18',
            'Fin garantía cliente');
        this.dseFinGarantiaCliente.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016898CjtoVis_3ICtjoVis_18', ['Cliente']);
        this.dseFinGarantiaCliente.enabled = false;
        this.dseFinGarantiaCliente.mandatory = false;
        this.dseFinGarantiaCliente.dataType = Field.dtDate;
        this.dseFinGarantiaCliente.assignCSS();
        this.fields.push(this.dseFinGarantiaCliente);

        this.dseObservacions = new Field(this.langMng);
        this.dseObservacions.nameInRequest = 'observacions';
        this.dseObservacions.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSI_ElementoSistema_item_Clas_1699352150016898CjtoVis_3ICtjoVis_19',
            'Observaciones');
        this.dseObservacions.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016898CjtoVis_3ICtjoVis_19', ['Cliente']);
        this.dseObservacions.enabled = false;
        this.dseObservacions.mandatory = false;
        this.dseObservacions.dataType = Field.dtText;
        this.dseObservacions.fieldSize = 100;
        this.dseObservacions.assignCSS();
        this.fields.push(this.dseObservacions);

        this.dsePendienteRevision = new FieldDefinedSelection(this.langMng);
        this.dsePendienteRevision.nameInRequest = 'pendienterevision';
        this.dsePendienteRevision.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSI_ElementoSistema_item_Clas_1699352150016898CjtoVis_3ICtjoVis_20',
            'Pendiente Revisión?');
        this.dsePendienteRevision.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016898CjtoVis_3ICtjoVis_20', ['Cliente']);
        this.dsePendienteRevision.enabled = false;
        this.dsePendienteRevision.mandatory = false;
        this.dsePendienteRevision.dataType = Field.dtBool;
        this.dsePendienteRevision.options = DefinedSelections.DS_SI_NO;
        this.dsePendienteRevision.assignCSS();
        this.fields.push(this.dsePendienteRevision);

        this.dseActivo = new Field(this.langMng);
        this.dseActivo.nameInRequest = 'activo';
        this.dseActivo.alias = this.langMng.translateText(
            'cls_ElementoSistema_ds_DSI_ElementoSistema_item_Clas_1699352150016898CjtoVis_3ICtjoVis_21',
            'Activo');
        this.dseActivo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016898CjtoVis_3ICtjoVis_21', ['Cliente']);
        this.dseActivo.enabled = false;
        this.dseActivo.mandatory = false;
        this.dseActivo.dataType = Field.dtBool;
        this.dseActivo.assignCSS();
        this.fields.push(this.dseActivo);

    }
}
