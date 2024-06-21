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

export class AlbaranVentaIIUuAlbaranVentaComponent extends AbstractIIU {

    /** Display Set elements */
    public dseSerieAlbaranCodSerieAlbaran: Field;
    public dseCodAlbaran: Field;
    public dseFechaCreacion: Field;
    public dseFechaEntrega: Field;
    public dseDireccion: Field;
    public dseClienteNombreComercial: Field;
    public dseClienteCodigo: Field;
    public dseClienteCIFNIF: Field;
    public dsePagadorNombreComercial: Field;
    public dseBaseImponible: Field;
    public dseIVA: Field;
    public dseRecargoEquivalencia: Field;
    public dseImporteTotal: Field;
    public dseEstado: FieldDefinedSelection;
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
        this.idXML = 'Clas_1699352150016564UIInst_1';
        this.className = ModelConstants.Albaranventa.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_AlbaranVenta_iiu_IIU_AlbaranVenta',
            'Albarán');
        this.queryURL = '/api/AlbaranVentaApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseSerieAlbaranCodSerieAlbaran = new Field(this.langMng);
        this.dseSerieAlbaranCodSerieAlbaran.nameInRequest = 'seriealbaran.codseriealbaran';
        this.dseSerieAlbaranCodSerieAlbaran.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_1',
            'Serie');
        this.dseSerieAlbaranCodSerieAlbaran.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016564CjtoVis_1ICtjoVis_1', ['Cliente']);
        this.dseSerieAlbaranCodSerieAlbaran.enabled = false;
        this.dseSerieAlbaranCodSerieAlbaran.mandatory = false;
        this.dseSerieAlbaranCodSerieAlbaran.dataType = Field.dtString;
        this.dseSerieAlbaranCodSerieAlbaran.maxLength = 5;
        this.dseSerieAlbaranCodSerieAlbaran.assignCSS();
        this.fields.push(this.dseSerieAlbaranCodSerieAlbaran);

        this.dseCodAlbaran = new Field(this.langMng);
        this.dseCodAlbaran.nameInRequest = 'codalbaran';
        this.dseCodAlbaran.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_2',
            'Código');
        this.dseCodAlbaran.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016564CjtoVis_1ICtjoVis_2', ['Cliente']);
        this.dseCodAlbaran.enabled = false;
        this.dseCodAlbaran.mandatory = false;
        this.dseCodAlbaran.dataType = Field.dtAuto;
        this.dseCodAlbaran.assignCSS();
        this.fields.push(this.dseCodAlbaran);

        this.dseFechaCreacion = new Field(this.langMng);
        this.dseFechaCreacion.nameInRequest = 'fechacreacion';
        this.dseFechaCreacion.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_3',
            'Fecha');
        this.dseFechaCreacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016564CjtoVis_1ICtjoVis_3', ['Cliente']);
        this.dseFechaCreacion.enabled = false;
        this.dseFechaCreacion.mandatory = false;
        this.dseFechaCreacion.dataType = Field.dtDate;
        this.dseFechaCreacion.assignCSS();
        this.fields.push(this.dseFechaCreacion);

        this.dseFechaEntrega = new Field(this.langMng);
        this.dseFechaEntrega.nameInRequest = 'fechaentrega';
        this.dseFechaEntrega.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_4',
            'F. Entrega');
        this.dseFechaEntrega.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016564CjtoVis_1ICtjoVis_4', ['Cliente']);
        this.dseFechaEntrega.enabled = false;
        this.dseFechaEntrega.mandatory = false;
        this.dseFechaEntrega.dataType = Field.dtDate;
        this.dseFechaEntrega.assignCSS();
        this.fields.push(this.dseFechaEntrega);

        this.dseDireccion = new Field(this.langMng);
        this.dseDireccion.nameInRequest = 'direccion';
        this.dseDireccion.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_5',
            'Dirección');
        this.dseDireccion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016564CjtoVis_1ICtjoVis_5', ['Cliente']);
        this.dseDireccion.enabled = false;
        this.dseDireccion.mandatory = false;
        this.dseDireccion.dataType = Field.dtString;
        this.dseDireccion.maxLength = 300;
        this.dseDireccion.fieldSize = 20;
        this.dseDireccion.assignCSS();
        this.fields.push(this.dseDireccion);

        this.dseClienteNombreComercial = new Field(this.langMng);
        this.dseClienteNombreComercial.nameInRequest = 'cliente.nombrecomercial';
        this.dseClienteNombreComercial.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_6',
            'Cliente');
        this.dseClienteNombreComercial.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016564CjtoVis_1ICtjoVis_6', ['Cliente']);
        this.dseClienteNombreComercial.enabled = false;
        this.dseClienteNombreComercial.mandatory = false;
        this.dseClienteNombreComercial.dataType = Field.dtString;
        this.dseClienteNombreComercial.maxLength = 300;
        this.dseClienteNombreComercial.fieldSize = 20;
        this.dseClienteNombreComercial.assignCSS();
        this.fields.push(this.dseClienteNombreComercial);

        this.dseClienteCodigo = new Field(this.langMng);
        this.dseClienteCodigo.nameInRequest = 'cliente.codigo';
        this.dseClienteCodigo.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_7',
            'Cod. cliente');
        this.dseClienteCodigo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016564CjtoVis_1ICtjoVis_7', ['Cliente']);
        this.dseClienteCodigo.enabled = false;
        this.dseClienteCodigo.mandatory = false;
        this.dseClienteCodigo.dataType = Field.dtString;
        this.dseClienteCodigo.maxLength = 6;
        this.dseClienteCodigo.assignCSS();
        this.fields.push(this.dseClienteCodigo);

        this.dseClienteCIFNIF = new Field(this.langMng);
        this.dseClienteCIFNIF.nameInRequest = 'cliente.cifnif';
        this.dseClienteCIFNIF.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_8',
            'CIF/NIF');
        this.dseClienteCIFNIF.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016564CjtoVis_1ICtjoVis_8', ['Cliente']);
        this.dseClienteCIFNIF.enabled = false;
        this.dseClienteCIFNIF.mandatory = false;
        this.dseClienteCIFNIF.dataType = Field.dtString;
        this.dseClienteCIFNIF.maxLength = 30;
        this.dseClienteCIFNIF.assignCSS();
        this.fields.push(this.dseClienteCIFNIF);

        this.dsePagadorNombreComercial = new Field(this.langMng);
        this.dsePagadorNombreComercial.nameInRequest = 'pagador.nombrecomercial';
        this.dsePagadorNombreComercial.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_9',
            'Pagador');
        this.dsePagadorNombreComercial.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016564CjtoVis_1ICtjoVis_9', []);
        this.dsePagadorNombreComercial.enabled = false;
        this.dsePagadorNombreComercial.mandatory = false;
        this.dsePagadorNombreComercial.dataType = Field.dtString;
        this.dsePagadorNombreComercial.maxLength = 300;
        this.dsePagadorNombreComercial.fieldSize = 20;
        this.dsePagadorNombreComercial.assignCSS();
        this.fields.push(this.dsePagadorNombreComercial);

        this.dseBaseImponible = new Field(this.langMng);
        this.dseBaseImponible.nameInRequest = 'baseimponible';
        this.dseBaseImponible.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_10',
            'Base imp');
        this.dseBaseImponible.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016564CjtoVis_1ICtjoVis_10', ['Cliente']);
        this.dseBaseImponible.enabled = false;
        this.dseBaseImponible.mandatory = false;
        this.dseBaseImponible.dataType = Field.dtReal;
        this.dseBaseImponible.assignCSS();
        this.fields.push(this.dseBaseImponible);

        this.dseIVA = new Field(this.langMng);
        this.dseIVA.nameInRequest = 'iva';
        this.dseIVA.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_11',
            'IVA');
        this.dseIVA.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016564CjtoVis_1ICtjoVis_11', ['Cliente']);
        this.dseIVA.enabled = false;
        this.dseIVA.mandatory = false;
        this.dseIVA.dataType = Field.dtReal;
        this.dseIVA.assignCSS();
        this.fields.push(this.dseIVA);

        this.dseRecargoEquivalencia = new Field(this.langMng);
        this.dseRecargoEquivalencia.nameInRequest = 'recargoequivalencia';
        this.dseRecargoEquivalencia.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_12',
            'Rec equiv');
        this.dseRecargoEquivalencia.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016564CjtoVis_1ICtjoVis_12', ['Cliente']);
        this.dseRecargoEquivalencia.enabled = false;
        this.dseRecargoEquivalencia.mandatory = false;
        this.dseRecargoEquivalencia.dataType = Field.dtReal;
        this.dseRecargoEquivalencia.assignCSS();
        this.fields.push(this.dseRecargoEquivalencia);

        this.dseImporteTotal = new Field(this.langMng);
        this.dseImporteTotal.nameInRequest = 'importetotal';
        this.dseImporteTotal.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_13',
            'Total');
        this.dseImporteTotal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016564CjtoVis_1ICtjoVis_13', ['Cliente']);
        this.dseImporteTotal.enabled = false;
        this.dseImporteTotal.mandatory = false;
        this.dseImporteTotal.dataType = Field.dtReal;
        this.dseImporteTotal.assignCSS();
        this.fields.push(this.dseImporteTotal);

        this.dseEstado = new FieldDefinedSelection(this.langMng);
        this.dseEstado.nameInRequest = 'estado';
        this.dseEstado.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_14',
            'Estado');
        this.dseEstado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016564CjtoVis_1ICtjoVis_14', ['Cliente']);
        this.dseEstado.enabled = false;
        this.dseEstado.mandatory = false;
        this.dseEstado.dataType = Field.dtString;
        this.dseEstado.maxLength = 1;
        this.dseEstado.options = DefinedSelections.DS_ALBARAN_ESTADO;
        this.dseEstado.assignCSS();
        this.fields.push(this.dseEstado);

        this.dseFacturado = new FieldDefinedSelection(this.langMng);
        this.dseFacturado.nameInRequest = 'facturado';
        this.dseFacturado.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVenta_item_Clas_1699352150016564CjtoVis_1ICtjoVis_15',
            'Facturado');
        this.dseFacturado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016564CjtoVis_1ICtjoVis_15', ['Cliente']);
        this.dseFacturado.enabled = false;
        this.dseFacturado.mandatory = false;
        this.dseFacturado.dataType = Field.dtBool;
        this.dseFacturado.options = DefinedSelections.DS_SI_NO;
        this.dseFacturado.assignCSS();
        this.fields.push(this.dseFacturado);

    }
}
