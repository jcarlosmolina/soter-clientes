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

export class PresupuestoIIUuPresupuDetAlbaranComponent extends AbstractIIU {

    /** Display Set elements */
    public dseCodigo: Field;
    public dseClienteNombreRazonSocial: Field;
    public dseFecha: Field;
    public dseFechaAceptacion: Field;
    public dseFechaPrevista: Field;
    public dseFechaValidez: Field;
    public dseBaseImponible: Field;
    public dseIVATotal: Field;
    public dseRecargoEquivalencia: Field;
    public dsePorcentajeDescuento: Field;
    public dseDescuento: Field;
    public dseImporte: Field;

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
        this.idXML = 'Clas_1699352150016913UIInst_5';
        this.className = ModelConstants.Presupuesto.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Presupuesto_iiu_IIU_Presup_DetAlbaran',
            'Presupuesto');
        this.queryURL = '/api/PresupuestoApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseCodigo = new Field(this.langMng);
        this.dseCodigo.nameInRequest = 'codigo';
        this.dseCodigo.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DS_Presup_DetAlbaran_item_Clas_1699352150016913CjtoVis_8ICtjoVis_1',
            'Código');
        this.dseCodigo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_8ICtjoVis_1', ['Cliente']);
        this.dseCodigo.enabled = false;
        this.dseCodigo.mandatory = false;
        this.dseCodigo.dataType = Field.dtString;
        this.dseCodigo.maxLength = 10;
        this.dseCodigo.assignCSS();
        this.fields.push(this.dseCodigo);

        this.dseClienteNombreRazonSocial = new Field(this.langMng);
        this.dseClienteNombreRazonSocial.nameInRequest = 'cliente.nombrerazonsocial';
        this.dseClienteNombreRazonSocial.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DS_Presup_DetAlbaran_item_Clas_1699352150016913CjtoVis_8ICtjoVis_2',
            'Cliente');
        this.dseClienteNombreRazonSocial.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_8ICtjoVis_2', ['Cliente']);
        this.dseClienteNombreRazonSocial.enabled = false;
        this.dseClienteNombreRazonSocial.mandatory = false;
        this.dseClienteNombreRazonSocial.dataType = Field.dtString;
        this.dseClienteNombreRazonSocial.maxLength = 300;
        this.dseClienteNombreRazonSocial.assignCSS();
        this.fields.push(this.dseClienteNombreRazonSocial);

        this.dseFecha = new Field(this.langMng);
        this.dseFecha.nameInRequest = 'fecha';
        this.dseFecha.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DS_Presup_DetAlbaran_item_Clas_1699352150016913CjtoVis_8ICtjoVis_3',
            'Fecha');
        this.dseFecha.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_8ICtjoVis_3', ['Cliente']);
        this.dseFecha.enabled = false;
        this.dseFecha.mandatory = false;
        this.dseFecha.dataType = Field.dtDate;
        this.dseFecha.assignCSS();
        this.fields.push(this.dseFecha);

        this.dseFechaAceptacion = new Field(this.langMng);
        this.dseFechaAceptacion.nameInRequest = 'fechaaceptacion';
        this.dseFechaAceptacion.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DS_Presup_DetAlbaran_item_Clas_1699352150016913CjtoVis_8ICtjoVis_4',
            'Fecha aceptación');
        this.dseFechaAceptacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_8ICtjoVis_4', ['Cliente']);
        this.dseFechaAceptacion.enabled = false;
        this.dseFechaAceptacion.mandatory = false;
        this.dseFechaAceptacion.dataType = Field.dtDate;
        this.dseFechaAceptacion.assignCSS();
        this.fields.push(this.dseFechaAceptacion);

        this.dseFechaPrevista = new Field(this.langMng);
        this.dseFechaPrevista.nameInRequest = 'fechaprevista';
        this.dseFechaPrevista.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DS_Presup_DetAlbaran_item_Clas_1699352150016913CjtoVis_8ICtjoVis_5',
            'Fecha prevista');
        this.dseFechaPrevista.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_8ICtjoVis_5', ['Cliente']);
        this.dseFechaPrevista.enabled = false;
        this.dseFechaPrevista.mandatory = false;
        this.dseFechaPrevista.dataType = Field.dtDate;
        this.dseFechaPrevista.assignCSS();
        this.fields.push(this.dseFechaPrevista);

        this.dseFechaValidez = new Field(this.langMng);
        this.dseFechaValidez.nameInRequest = 'fechavalidez';
        this.dseFechaValidez.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DS_Presup_DetAlbaran_item_Clas_1699352150016913CjtoVis_8ICtjoVis_6',
            'Fecha validez');
        this.dseFechaValidez.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_8ICtjoVis_6', ['Cliente']);
        this.dseFechaValidez.enabled = false;
        this.dseFechaValidez.mandatory = false;
        this.dseFechaValidez.dataType = Field.dtDate;
        this.dseFechaValidez.assignCSS();
        this.fields.push(this.dseFechaValidez);

        this.dseBaseImponible = new Field(this.langMng);
        this.dseBaseImponible.nameInRequest = 'baseimponible';
        this.dseBaseImponible.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DS_Presup_DetAlbaran_item_Clas_1699352150016913CjtoVis_8ICtjoVis_7',
            'Base imp');
        this.dseBaseImponible.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_8ICtjoVis_7', ['Cliente']);
        this.dseBaseImponible.enabled = false;
        this.dseBaseImponible.mandatory = false;
        this.dseBaseImponible.dataType = Field.dtReal;
        this.dseBaseImponible.assignCSS();
        this.fields.push(this.dseBaseImponible);

        this.dseIVATotal = new Field(this.langMng);
        this.dseIVATotal.nameInRequest = 'ivatotal';
        this.dseIVATotal.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DS_Presup_DetAlbaran_item_Clas_1699352150016913CjtoVis_8ICtjoVis_8',
            'IVA');
        this.dseIVATotal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_8ICtjoVis_8', ['Cliente']);
        this.dseIVATotal.enabled = false;
        this.dseIVATotal.mandatory = false;
        this.dseIVATotal.dataType = Field.dtReal;
        this.dseIVATotal.assignCSS();
        this.fields.push(this.dseIVATotal);

        this.dseRecargoEquivalencia = new Field(this.langMng);
        this.dseRecargoEquivalencia.nameInRequest = 'recargoequivalencia';
        this.dseRecargoEquivalencia.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DS_Presup_DetAlbaran_item_Clas_1699352150016913CjtoVis_8ICtjoVis_9',
            'Rec equiv');
        this.dseRecargoEquivalencia.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_8ICtjoVis_9', ['Cliente']);
        this.dseRecargoEquivalencia.enabled = false;
        this.dseRecargoEquivalencia.mandatory = false;
        this.dseRecargoEquivalencia.dataType = Field.dtReal;
        this.dseRecargoEquivalencia.assignCSS();
        this.fields.push(this.dseRecargoEquivalencia);

        this.dsePorcentajeDescuento = new Field(this.langMng);
        this.dsePorcentajeDescuento.nameInRequest = 'porcentajedescuento';
        this.dsePorcentajeDescuento.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DS_Presup_DetAlbaran_item_Clas_1699352150016913CjtoVis_8ICtjoVis_10',
            '% Dto');
        this.dsePorcentajeDescuento.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_8ICtjoVis_10', ['Cliente']);
        this.dsePorcentajeDescuento.enabled = false;
        this.dsePorcentajeDescuento.mandatory = false;
        this.dsePorcentajeDescuento.dataType = Field.dtReal;
        this.dsePorcentajeDescuento.assignCSS();
        this.fields.push(this.dsePorcentajeDescuento);

        this.dseDescuento = new Field(this.langMng);
        this.dseDescuento.nameInRequest = 'descuento';
        this.dseDescuento.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DS_Presup_DetAlbaran_item_Clas_1699352150016913CjtoVis_8ICtjoVis_11',
            'Descuento');
        this.dseDescuento.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_8ICtjoVis_11', ['Cliente']);
        this.dseDescuento.enabled = false;
        this.dseDescuento.mandatory = false;
        this.dseDescuento.dataType = Field.dtReal;
        this.dseDescuento.assignCSS();
        this.fields.push(this.dseDescuento);

        this.dseImporte = new Field(this.langMng);
        this.dseImporte.nameInRequest = 'importe';
        this.dseImporte.alias = this.langMng.translateText(
            'cls_Presupuesto_ds_DS_Presup_DetAlbaran_item_Clas_1699352150016913CjtoVis_8ICtjoVis_12',
            'Importe');
        this.dseImporte.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016913CjtoVis_8ICtjoVis_12', ['Cliente']);
        this.dseImporte.enabled = false;
        this.dseImporte.mandatory = false;
        this.dseImporte.dataType = Field.dtReal;
        this.dseImporte.assignCSS();
        this.fields.push(this.dseImporte);

    }

    /**
     * Initialize the navigation items
     */
    public initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1699352150016913NavOfer_1ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_Presupuesto_nav_N_PresupuestoMD_item_Clas_1699352150016913NavOfer_1ElemNav_1',
            'Detalles');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Presupuesto.name;
        navItem.targetUI = ModelConstants.Presupuesto.mdiuupresupuesto;
        navItem.rolePath = '';
        this.navigations.push(navItem);

    }
}
