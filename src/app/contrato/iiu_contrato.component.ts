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

export class ContratoIIUuContratoComponent extends AbstractIIU {

    /** Display Set elements */
    public dseClienteNombreRazonSocial: Field;
    public dseNumContrato: Field;
    public dseFecha: Field;
    public dsePresupuestoCodigo: Field;
    public dseLugar: Field;
    public dseListaObjetos: Field;
    public dseUbicacion: Field;
    public dseImporteTotal: Field;
    public dseClienteConsienteComunicaciones: FieldDefinedSelection;
    public dseFirmado: FieldDefinedSelection;
    public dseInstalacionNombre: Field;
    public dseNumAbonado: Field;
    public dseDuracion: Field;
    public dseFechaVencimiento: Field;
    public dseVigencia: FieldDefinedSelection;
    public dseTiposSistema: Field;

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
        this.idXML = 'Clas_1699352150016715UIInst_1';
        this.className = ModelConstants.Contrato.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Contrato_iiu_IIU_Contrato',
            'Contrato');
        this.queryURL = '/api/ContratoApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseClienteNombreRazonSocial = new Field(this.langMng);
        this.dseClienteNombreRazonSocial.nameInRequest = 'cliente.nombrerazonsocial';
        this.dseClienteNombreRazonSocial.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSI_Contrato_item_Clas_1699352150016715CjtoVis_3ICtjoVis_1',
            'Cliente');
        this.dseClienteNombreRazonSocial.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016715CjtoVis_3ICtjoVis_1', ['Cliente']);
        this.dseClienteNombreRazonSocial.enabled = false;
        this.dseClienteNombreRazonSocial.mandatory = false;
        this.dseClienteNombreRazonSocial.dataType = Field.dtString;
        this.dseClienteNombreRazonSocial.maxLength = 300;
        this.dseClienteNombreRazonSocial.assignCSS();
        this.fields.push(this.dseClienteNombreRazonSocial);

        this.dseNumContrato = new Field(this.langMng);
        this.dseNumContrato.nameInRequest = 'numcontrato';
        this.dseNumContrato.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSI_Contrato_item_Clas_1699352150016715CjtoVis_3ICtjoVis_2',
            'Nº  contrato');
        this.dseNumContrato.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016715CjtoVis_3ICtjoVis_2', ['Cliente']);
        this.dseNumContrato.enabled = false;
        this.dseNumContrato.mandatory = false;
        this.dseNumContrato.dataType = Field.dtString;
        this.dseNumContrato.maxLength = 10;
        this.dseNumContrato.assignCSS();
        this.fields.push(this.dseNumContrato);

        this.dseFecha = new Field(this.langMng);
        this.dseFecha.nameInRequest = 'fecha';
        this.dseFecha.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSI_Contrato_item_Clas_1699352150016715CjtoVis_3ICtjoVis_3',
            'Fecha');
        this.dseFecha.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016715CjtoVis_3ICtjoVis_3', ['Cliente']);
        this.dseFecha.enabled = false;
        this.dseFecha.mandatory = false;
        this.dseFecha.dataType = Field.dtDate;
        this.dseFecha.assignCSS();
        this.fields.push(this.dseFecha);

        this.dsePresupuestoCodigo = new Field(this.langMng);
        this.dsePresupuestoCodigo.nameInRequest = 'presupuesto.codigo';
        this.dsePresupuestoCodigo.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSI_Contrato_item_Clas_1699352150016715CjtoVis_3ICtjoVis_4',
            'Presupuesto');
        this.dsePresupuestoCodigo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016715CjtoVis_3ICtjoVis_4', ['Cliente']);
        this.dsePresupuestoCodigo.enabled = false;
        this.dsePresupuestoCodigo.mandatory = false;
        this.dsePresupuestoCodigo.dataType = Field.dtString;
        this.dsePresupuestoCodigo.maxLength = 10;
        this.dsePresupuestoCodigo.assignCSS();
        this.fields.push(this.dsePresupuestoCodigo);

        this.dseLugar = new Field(this.langMng);
        this.dseLugar.nameInRequest = 'lugar';
        this.dseLugar.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSI_Contrato_item_Clas_1699352150016715CjtoVis_3ICtjoVis_5',
            'Lugar');
        this.dseLugar.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016715CjtoVis_3ICtjoVis_5', ['Cliente']);
        this.dseLugar.enabled = false;
        this.dseLugar.mandatory = false;
        this.dseLugar.dataType = Field.dtString;
        this.dseLugar.maxLength = 300;
        this.dseLugar.assignCSS();
        this.fields.push(this.dseLugar);

        this.dseListaObjetos = new Field(this.langMng);
        this.dseListaObjetos.nameInRequest = 'listaobjetos';
        this.dseListaObjetos.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSI_Contrato_item_Clas_1699352150016715CjtoVis_3ICtjoVis_6',
            'Objeto');
        this.dseListaObjetos.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016715CjtoVis_3ICtjoVis_6', ['Cliente']);
        this.dseListaObjetos.enabled = false;
        this.dseListaObjetos.mandatory = false;
        this.dseListaObjetos.dataType = Field.dtString;
        this.dseListaObjetos.maxLength = 175;
        this.dseListaObjetos.assignCSS();
        this.fields.push(this.dseListaObjetos);

        this.dseUbicacion = new Field(this.langMng);
        this.dseUbicacion.nameInRequest = 'ubicacion';
        this.dseUbicacion.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSI_Contrato_item_Clas_1699352150016715CjtoVis_3ICtjoVis_7',
            'Ubicación');
        this.dseUbicacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016715CjtoVis_3ICtjoVis_7', ['Cliente']);
        this.dseUbicacion.enabled = false;
        this.dseUbicacion.mandatory = false;
        this.dseUbicacion.dataType = Field.dtString;
        this.dseUbicacion.maxLength = 300;
        this.dseUbicacion.assignCSS();
        this.fields.push(this.dseUbicacion);

        this.dseImporteTotal = new Field(this.langMng);
        this.dseImporteTotal.nameInRequest = 'importetotal';
        this.dseImporteTotal.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSI_Contrato_item_Clas_1699352150016715CjtoVis_3ICtjoVis_8',
            'Total');
        this.dseImporteTotal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016715CjtoVis_3ICtjoVis_8', ['Cliente']);
        this.dseImporteTotal.enabled = false;
        this.dseImporteTotal.mandatory = false;
        this.dseImporteTotal.dataType = Field.dtReal;
        this.dseImporteTotal.assignCSS();
        this.fields.push(this.dseImporteTotal);

        this.dseClienteConsienteComunicaciones = new FieldDefinedSelection(this.langMng);
        this.dseClienteConsienteComunicaciones.nameInRequest = 'clienteconsientecomunicaciones';
        this.dseClienteConsienteComunicaciones.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSI_Contrato_item_Clas_1699352150016715CjtoVis_3ICtjoVis_9',
            'Consiente comunica');
        this.dseClienteConsienteComunicaciones.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016715CjtoVis_3ICtjoVis_9', ['Cliente']);
        this.dseClienteConsienteComunicaciones.enabled = false;
        this.dseClienteConsienteComunicaciones.mandatory = false;
        this.dseClienteConsienteComunicaciones.dataType = Field.dtBool;
        this.dseClienteConsienteComunicaciones.options = DefinedSelections.DS_SI_NO;
        this.dseClienteConsienteComunicaciones.assignCSS();
        this.fields.push(this.dseClienteConsienteComunicaciones);

        this.dseFirmado = new FieldDefinedSelection(this.langMng);
        this.dseFirmado.nameInRequest = 'firmado';
        this.dseFirmado.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSI_Contrato_item_Clas_1699352150016715CjtoVis_3ICtjoVis_10',
            'Firmado');
        this.dseFirmado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016715CjtoVis_3ICtjoVis_10', ['Cliente']);
        this.dseFirmado.enabled = false;
        this.dseFirmado.mandatory = false;
        this.dseFirmado.dataType = Field.dtBool;
        this.dseFirmado.options = DefinedSelections.DS_SI_NO;
        this.dseFirmado.assignCSS();
        this.fields.push(this.dseFirmado);

        this.dseInstalacionNombre = new Field(this.langMng);
        this.dseInstalacionNombre.nameInRequest = 'instalacion.nombre';
        this.dseInstalacionNombre.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSI_Contrato_item_Clas_1699352150016715CjtoVis_3ICtjoVis_11',
            'Instalación');
        this.dseInstalacionNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016715CjtoVis_3ICtjoVis_11', ['Cliente']);
        this.dseInstalacionNombre.enabled = false;
        this.dseInstalacionNombre.mandatory = false;
        this.dseInstalacionNombre.dataType = Field.dtString;
        this.dseInstalacionNombre.maxLength = 100;
        this.dseInstalacionNombre.assignCSS();
        this.fields.push(this.dseInstalacionNombre);

        this.dseNumAbonado = new Field(this.langMng);
        this.dseNumAbonado.nameInRequest = 'numabonado';
        this.dseNumAbonado.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSI_Contrato_item_Clas_1699352150016715CjtoVis_3ICtjoVis_12',
            'Nº abonado');
        this.dseNumAbonado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016715CjtoVis_3ICtjoVis_12', ['Cliente']);
        this.dseNumAbonado.enabled = false;
        this.dseNumAbonado.mandatory = false;
        this.dseNumAbonado.dataType = Field.dtString;
        this.dseNumAbonado.maxLength = 50;
        this.dseNumAbonado.assignCSS();
        this.fields.push(this.dseNumAbonado);

        this.dseDuracion = new Field(this.langMng);
        this.dseDuracion.nameInRequest = 'duracion';
        this.dseDuracion.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSI_Contrato_item_Clas_1699352150016715CjtoVis_3ICtjoVis_13',
            'Duración meses');
        this.dseDuracion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016715CjtoVis_3ICtjoVis_13', ['Cliente']);
        this.dseDuracion.enabled = false;
        this.dseDuracion.mandatory = false;
        this.dseDuracion.dataType = Field.dtInt;
        this.dseDuracion.assignCSS();
        this.fields.push(this.dseDuracion);

        this.dseFechaVencimiento = new Field(this.langMng);
        this.dseFechaVencimiento.nameInRequest = 'fechavencimiento';
        this.dseFechaVencimiento.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSI_Contrato_item_Clas_1699352150016715CjtoVis_3ICtjoVis_14',
            'Fecha vto');
        this.dseFechaVencimiento.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016715CjtoVis_3ICtjoVis_14', ['Cliente']);
        this.dseFechaVencimiento.enabled = false;
        this.dseFechaVencimiento.mandatory = false;
        this.dseFechaVencimiento.dataType = Field.dtDate;
        this.dseFechaVencimiento.assignCSS();
        this.fields.push(this.dseFechaVencimiento);

        this.dseVigencia = new FieldDefinedSelection(this.langMng);
        this.dseVigencia.nameInRequest = 'vigencia';
        this.dseVigencia.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSI_Contrato_item_Clas_1699352150016715CjtoVis_3ICtjoVis_15',
            'Vigencia');
        this.dseVigencia.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016715CjtoVis_3ICtjoVis_15', ['Cliente']);
        this.dseVigencia.enabled = false;
        this.dseVigencia.mandatory = false;
        this.dseVigencia.dataType = Field.dtString;
        this.dseVigencia.maxLength = 2;
        this.dseVigencia.options = DefinedSelections.DS_VIGENCIACONTRATO;
        this.dseVigencia.assignCSS();
        this.fields.push(this.dseVigencia);

        this.dseTiposSistema = new Field(this.langMng);
        this.dseTiposSistema.nameInRequest = 'tipossistema';
        this.dseTiposSistema.alias = this.langMng.translateText(
            'cls_Contrato_ds_DSI_Contrato_item_Clas_1699352150016715CjtoVis_3ICtjoVis_16',
            'Tipos de sistema');
        this.dseTiposSistema.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016715CjtoVis_3ICtjoVis_16', ['Cliente']);
        this.dseTiposSistema.enabled = false;
        this.dseTiposSistema.mandatory = false;
        this.dseTiposSistema.dataType = Field.dtString;
        this.dseTiposSistema.maxLength = 300;
        this.dseTiposSistema.assignCSS();
        this.fields.push(this.dseTiposSistema);

    }
}
