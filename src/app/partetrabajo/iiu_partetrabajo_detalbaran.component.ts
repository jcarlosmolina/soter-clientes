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

export class ParteTrabajoIIUuParteTrabajouDetAlbaranComponent extends AbstractIIU {

    /** Display Set elements */
    public dseiduParteTrabajo: Field;
    public dseOrdenTrabajoInstalacionClienteNombreRazonSocialAdmonFinca: Field;
    public dseOrdenTrabajoInstalacionNombre: Field;
    public dseFechaInicioReal: Field;
    public dseHoraInicioReal: Field;
    public dseFechaFinReal: Field;
    public dseHoraFinReal: Field;
    public dseDescuentoTotal: Field;
    public dseBaseTotal: Field;
    public dseIVATotal: Field;
    public dseRecargoEquivalenciaTotal: Field;
    public dseImporteTotal: Field;

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
        this.idXML = 'Clas_1699352150016581UIInst_4';
        this.className = ModelConstants.Partetrabajo.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_ParteTrabajo_iiu_IIU_ParteTrabajo_DetAlbaran',
            'Parte Trabajo');
        this.queryURL = '/api/ParteTrabajoApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseiduParteTrabajo = new Field(this.langMng);
        this.dseiduParteTrabajo.nameInRequest = 'id_partetrabajo';
        this.dseiduParteTrabajo.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_DetAlbaran_item_Clas_1699352150016581CjtoVis_7ICtjoVis_1',
            'Nº parte');
        this.dseiduParteTrabajo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_7ICtjoVis_1', ['Cliente']);
        this.dseiduParteTrabajo.enabled = false;
        this.dseiduParteTrabajo.mandatory = false;
        this.dseiduParteTrabajo.dataType = Field.dtAuto;
        this.dseiduParteTrabajo.assignCSS();
        this.fields.push(this.dseiduParteTrabajo);

        this.dseOrdenTrabajoInstalacionClienteNombreRazonSocialAdmonFinca = new Field(this.langMng);
        this.dseOrdenTrabajoInstalacionClienteNombreRazonSocialAdmonFinca.nameInRequest = 'ordentrabajo.instalacion.cliente.nombrerazonsocialadmonfinca';
        this.dseOrdenTrabajoInstalacionClienteNombreRazonSocialAdmonFinca.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_DetAlbaran_item_Clas_1699352150016581CjtoVis_7ICtjoVis_2',
            'Cliente');
        this.dseOrdenTrabajoInstalacionClienteNombreRazonSocialAdmonFinca.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_7ICtjoVis_2', ['Cliente']);
        this.dseOrdenTrabajoInstalacionClienteNombreRazonSocialAdmonFinca.enabled = false;
        this.dseOrdenTrabajoInstalacionClienteNombreRazonSocialAdmonFinca.mandatory = false;
        this.dseOrdenTrabajoInstalacionClienteNombreRazonSocialAdmonFinca.dataType = Field.dtString;
        this.dseOrdenTrabajoInstalacionClienteNombreRazonSocialAdmonFinca.maxLength = 300;
        this.dseOrdenTrabajoInstalacionClienteNombreRazonSocialAdmonFinca.assignCSS();
        this.fields.push(this.dseOrdenTrabajoInstalacionClienteNombreRazonSocialAdmonFinca);

        this.dseOrdenTrabajoInstalacionNombre = new Field(this.langMng);
        this.dseOrdenTrabajoInstalacionNombre.nameInRequest = 'ordentrabajo.instalacion.nombre';
        this.dseOrdenTrabajoInstalacionNombre.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_DetAlbaran_item_Clas_1699352150016581CjtoVis_7ICtjoVis_3',
            'Instalación');
        this.dseOrdenTrabajoInstalacionNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_7ICtjoVis_3', ['Cliente']);
        this.dseOrdenTrabajoInstalacionNombre.enabled = false;
        this.dseOrdenTrabajoInstalacionNombre.mandatory = false;
        this.dseOrdenTrabajoInstalacionNombre.dataType = Field.dtString;
        this.dseOrdenTrabajoInstalacionNombre.maxLength = 100;
        this.dseOrdenTrabajoInstalacionNombre.assignCSS();
        this.fields.push(this.dseOrdenTrabajoInstalacionNombre);

        this.dseFechaInicioReal = new Field(this.langMng);
        this.dseFechaInicioReal.nameInRequest = 'fechainicioreal';
        this.dseFechaInicioReal.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_DetAlbaran_item_Clas_1699352150016581CjtoVis_7ICtjoVis_4',
            'Fecha inicio');
        this.dseFechaInicioReal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_7ICtjoVis_4', ['Cliente']);
        this.dseFechaInicioReal.enabled = false;
        this.dseFechaInicioReal.mandatory = false;
        this.dseFechaInicioReal.dataType = Field.dtDate;
        this.dseFechaInicioReal.assignCSS();
        this.fields.push(this.dseFechaInicioReal);

        this.dseHoraInicioReal = new Field(this.langMng);
        this.dseHoraInicioReal.nameInRequest = 'horainicioreal';
        this.dseHoraInicioReal.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_DetAlbaran_item_Clas_1699352150016581CjtoVis_7ICtjoVis_5',
            'Hora inicio');
        this.dseHoraInicioReal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_7ICtjoVis_5', ['Cliente']);
        this.dseHoraInicioReal.enabled = false;
        this.dseHoraInicioReal.mandatory = false;
        this.dseHoraInicioReal.dataType = Field.dtTime;
        this.dseHoraInicioReal.assignCSS();
        this.fields.push(this.dseHoraInicioReal);

        this.dseFechaFinReal = new Field(this.langMng);
        this.dseFechaFinReal.nameInRequest = 'fechafinreal';
        this.dseFechaFinReal.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_DetAlbaran_item_Clas_1699352150016581CjtoVis_7ICtjoVis_6',
            'Fecha fin');
        this.dseFechaFinReal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_7ICtjoVis_6', ['Cliente']);
        this.dseFechaFinReal.enabled = false;
        this.dseFechaFinReal.mandatory = false;
        this.dseFechaFinReal.dataType = Field.dtDate;
        this.dseFechaFinReal.assignCSS();
        this.fields.push(this.dseFechaFinReal);

        this.dseHoraFinReal = new Field(this.langMng);
        this.dseHoraFinReal.nameInRequest = 'horafinreal';
        this.dseHoraFinReal.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_DetAlbaran_item_Clas_1699352150016581CjtoVis_7ICtjoVis_7',
            'Hora fin');
        this.dseHoraFinReal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_7ICtjoVis_7', ['Cliente']);
        this.dseHoraFinReal.enabled = false;
        this.dseHoraFinReal.mandatory = false;
        this.dseHoraFinReal.dataType = Field.dtTime;
        this.dseHoraFinReal.assignCSS();
        this.fields.push(this.dseHoraFinReal);

        this.dseDescuentoTotal = new Field(this.langMng);
        this.dseDescuentoTotal.nameInRequest = 'descuentototal';
        this.dseDescuentoTotal.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_DetAlbaran_item_Clas_1699352150016581CjtoVis_7ICtjoVis_8',
            'Descuento');
        this.dseDescuentoTotal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_7ICtjoVis_8', ['Cliente']);
        this.dseDescuentoTotal.enabled = false;
        this.dseDescuentoTotal.mandatory = false;
        this.dseDescuentoTotal.dataType = Field.dtReal;
        this.dseDescuentoTotal.assignCSS();
        this.fields.push(this.dseDescuentoTotal);

        this.dseBaseTotal = new Field(this.langMng);
        this.dseBaseTotal.nameInRequest = 'basetotal';
        this.dseBaseTotal.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_DetAlbaran_item_Clas_1699352150016581CjtoVis_7ICtjoVis_9',
            'Base imp');
        this.dseBaseTotal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_7ICtjoVis_9', ['Cliente']);
        this.dseBaseTotal.enabled = false;
        this.dseBaseTotal.mandatory = false;
        this.dseBaseTotal.dataType = Field.dtReal;
        this.dseBaseTotal.assignCSS();
        this.fields.push(this.dseBaseTotal);

        this.dseIVATotal = new Field(this.langMng);
        this.dseIVATotal.nameInRequest = 'ivatotal';
        this.dseIVATotal.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_DetAlbaran_item_Clas_1699352150016581CjtoVis_7ICtjoVis_10',
            'IVA');
        this.dseIVATotal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_7ICtjoVis_10', ['Cliente']);
        this.dseIVATotal.enabled = false;
        this.dseIVATotal.mandatory = false;
        this.dseIVATotal.dataType = Field.dtReal;
        this.dseIVATotal.assignCSS();
        this.fields.push(this.dseIVATotal);

        this.dseRecargoEquivalenciaTotal = new Field(this.langMng);
        this.dseRecargoEquivalenciaTotal.nameInRequest = 'recargoequivalenciatotal';
        this.dseRecargoEquivalenciaTotal.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_DetAlbaran_item_Clas_1699352150016581CjtoVis_7ICtjoVis_11',
            'Rec equiv');
        this.dseRecargoEquivalenciaTotal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_7ICtjoVis_11', ['Cliente']);
        this.dseRecargoEquivalenciaTotal.enabled = false;
        this.dseRecargoEquivalenciaTotal.mandatory = false;
        this.dseRecargoEquivalenciaTotal.dataType = Field.dtReal;
        this.dseRecargoEquivalenciaTotal.assignCSS();
        this.fields.push(this.dseRecargoEquivalenciaTotal);

        this.dseImporteTotal = new Field(this.langMng);
        this.dseImporteTotal.nameInRequest = 'importetotal';
        this.dseImporteTotal.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_DetAlbaran_item_Clas_1699352150016581CjtoVis_7ICtjoVis_12',
            'Importe');
        this.dseImporteTotal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_7ICtjoVis_12', ['Cliente']);
        this.dseImporteTotal.enabled = false;
        this.dseImporteTotal.mandatory = false;
        this.dseImporteTotal.dataType = Field.dtReal;
        this.dseImporteTotal.assignCSS();
        this.fields.push(this.dseImporteTotal);

    }

    /**
     * Initialize the navigation items
     */
    public initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1699352150016581NavOfer_1ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_ParteTrabajo_nav_N_ParteTrabajoMD_item_Clas_1699352150016581NavOfer_1ElemNav_1',
            'Detalles');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Partetrabajo.name;
        navItem.targetUI = ModelConstants.Partetrabajo.mdiuupartetrabajo;
        navItem.rolePath = '';
        this.navigations.push(navItem);

    }
}
