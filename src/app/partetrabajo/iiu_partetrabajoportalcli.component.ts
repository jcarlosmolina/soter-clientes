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

export class ParteTrabajoIIUuParteTrabajoPortalCliComponent extends AbstractIIU {

    /** Display Set elements */
    public dseiduParteTrabajo: Field;
    public dseOrdenTrabajoInstalacionNombre: Field;
    public dseOrdenTrabajoInstalacionTelefono: Field;
    public dseTiposSistema: Field;
    public dseFechaInicioReal: Field;
    public dseHoraInicioReal: Field;
    public dseFechaFinReal: Field;
    public dseHoraFinReal: Field;
    public dseEstado: FieldDefinedSelection;
    public dseTecnicosConcat: Field;
    public dseFirmado: FieldDefinedSelection;
    public dseValoracionCliente: FieldDefinedSelection;

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
        this.idXML = 'Clas_1699352150016581UIInst_8';
        this.className = ModelConstants.Partetrabajo.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_ParteTrabajo_iiu_IIU_ParteTrabajoPortalCli',
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
            'cls_ParteTrabajo_ds_DSI_ParteTrabajoPortalCli_item_Clas_1699352150016581CjtoVis_15ICtjoVis_1',
            'Nº parte');
        this.dseiduParteTrabajo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_15ICtjoVis_1', ['Cliente']);
        this.dseiduParteTrabajo.enabled = false;
        this.dseiduParteTrabajo.mandatory = false;
        this.dseiduParteTrabajo.dataType = Field.dtAuto;
        this.dseiduParteTrabajo.assignCSS();
        this.fields.push(this.dseiduParteTrabajo);

        this.dseOrdenTrabajoInstalacionNombre = new Field(this.langMng);
        this.dseOrdenTrabajoInstalacionNombre.nameInRequest = 'ordentrabajo.instalacion.nombre';
        this.dseOrdenTrabajoInstalacionNombre.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajoPortalCli_item_Clas_1699352150016581CjtoVis_15ICtjoVis_5',
            'Instalación');
        this.dseOrdenTrabajoInstalacionNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_15ICtjoVis_5', ['Cliente']);
        this.dseOrdenTrabajoInstalacionNombre.enabled = false;
        this.dseOrdenTrabajoInstalacionNombre.mandatory = false;
        this.dseOrdenTrabajoInstalacionNombre.dataType = Field.dtString;
        this.dseOrdenTrabajoInstalacionNombre.maxLength = 100;
        this.dseOrdenTrabajoInstalacionNombre.assignCSS();
        this.fields.push(this.dseOrdenTrabajoInstalacionNombre);

        this.dseOrdenTrabajoInstalacionTelefono = new Field(this.langMng);
        this.dseOrdenTrabajoInstalacionTelefono.nameInRequest = 'ordentrabajo.instalacion.telefono';
        this.dseOrdenTrabajoInstalacionTelefono.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajoPortalCli_item_Clas_1699352150016581CjtoVis_15ICtjoVis_9',
            'Teléfono');
        this.dseOrdenTrabajoInstalacionTelefono.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_15ICtjoVis_9', ['Cliente']);
        this.dseOrdenTrabajoInstalacionTelefono.enabled = false;
        this.dseOrdenTrabajoInstalacionTelefono.mandatory = false;
        this.dseOrdenTrabajoInstalacionTelefono.dataType = Field.dtString;
        this.dseOrdenTrabajoInstalacionTelefono.maxLength = 20;
        this.dseOrdenTrabajoInstalacionTelefono.assignCSS();
        this.fields.push(this.dseOrdenTrabajoInstalacionTelefono);

        this.dseTiposSistema = new Field(this.langMng);
        this.dseTiposSistema.nameInRequest = 'tipossistema';
        this.dseTiposSistema.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajoPortalCli_item_Clas_1699352150016581CjtoVis_15ICtjoVis_10',
            'Tipos sistema');
        this.dseTiposSistema.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_15ICtjoVis_10', ['Cliente']);
        this.dseTiposSistema.enabled = false;
        this.dseTiposSistema.mandatory = false;
        this.dseTiposSistema.dataType = Field.dtString;
        this.dseTiposSistema.maxLength = 300;
        this.dseTiposSistema.assignCSS();
        this.fields.push(this.dseTiposSistema);

        this.dseFechaInicioReal = new Field(this.langMng);
        this.dseFechaInicioReal.nameInRequest = 'fechainicioreal';
        this.dseFechaInicioReal.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajoPortalCli_item_Clas_1699352150016581CjtoVis_15ICtjoVis_15',
            'Fecha inicio');
        this.dseFechaInicioReal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_15ICtjoVis_15', ['Cliente']);
        this.dseFechaInicioReal.enabled = false;
        this.dseFechaInicioReal.mandatory = false;
        this.dseFechaInicioReal.dataType = Field.dtDate;
        this.dseFechaInicioReal.assignCSS();
        this.fields.push(this.dseFechaInicioReal);

        this.dseHoraInicioReal = new Field(this.langMng);
        this.dseHoraInicioReal.nameInRequest = 'horainicioreal';
        this.dseHoraInicioReal.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajoPortalCli_item_Clas_1699352150016581CjtoVis_15ICtjoVis_16',
            'Hora inicio');
        this.dseHoraInicioReal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_15ICtjoVis_16', ['Cliente']);
        this.dseHoraInicioReal.enabled = false;
        this.dseHoraInicioReal.mandatory = false;
        this.dseHoraInicioReal.dataType = Field.dtTime;
        this.dseHoraInicioReal.assignCSS();
        this.fields.push(this.dseHoraInicioReal);

        this.dseFechaFinReal = new Field(this.langMng);
        this.dseFechaFinReal.nameInRequest = 'fechafinreal';
        this.dseFechaFinReal.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajoPortalCli_item_Clas_1699352150016581CjtoVis_15ICtjoVis_17',
            'Fecha fin');
        this.dseFechaFinReal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_15ICtjoVis_17', ['Cliente']);
        this.dseFechaFinReal.enabled = false;
        this.dseFechaFinReal.mandatory = false;
        this.dseFechaFinReal.dataType = Field.dtDate;
        this.dseFechaFinReal.assignCSS();
        this.fields.push(this.dseFechaFinReal);

        this.dseHoraFinReal = new Field(this.langMng);
        this.dseHoraFinReal.nameInRequest = 'horafinreal';
        this.dseHoraFinReal.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajoPortalCli_item_Clas_1699352150016581CjtoVis_15ICtjoVis_18',
            'Hora fin');
        this.dseHoraFinReal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_15ICtjoVis_18', ['Cliente']);
        this.dseHoraFinReal.enabled = false;
        this.dseHoraFinReal.mandatory = false;
        this.dseHoraFinReal.dataType = Field.dtTime;
        this.dseHoraFinReal.assignCSS();
        this.fields.push(this.dseHoraFinReal);

        this.dseEstado = new FieldDefinedSelection(this.langMng);
        this.dseEstado.nameInRequest = 'estado';
        this.dseEstado.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajoPortalCli_item_Clas_1699352150016581CjtoVis_15ICtjoVis_19',
            'Estado');
        this.dseEstado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_15ICtjoVis_19', ['Cliente']);
        this.dseEstado.enabled = false;
        this.dseEstado.mandatory = false;
        this.dseEstado.dataType = Field.dtString;
        this.dseEstado.maxLength = 1;
        this.dseEstado.options = DefinedSelections.DS_PARTETRABAJO_ESTADO;
        this.dseEstado.assignCSS();
        this.fields.push(this.dseEstado);

        this.dseTecnicosConcat = new Field(this.langMng);
        this.dseTecnicosConcat.nameInRequest = 'tecnicosconcat';
        this.dseTecnicosConcat.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajoPortalCli_item_Clas_1699352150016581CjtoVis_15ICtjoVis_24',
            'Técnicos');
        this.dseTecnicosConcat.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_15ICtjoVis_24', ['Cliente']);
        this.dseTecnicosConcat.enabled = false;
        this.dseTecnicosConcat.mandatory = false;
        this.dseTecnicosConcat.dataType = Field.dtString;
        this.dseTecnicosConcat.maxLength = 300;
        this.dseTecnicosConcat.assignCSS();
        this.fields.push(this.dseTecnicosConcat);

        this.dseFirmado = new FieldDefinedSelection(this.langMng);
        this.dseFirmado.nameInRequest = 'firmado';
        this.dseFirmado.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajoPortalCli_item_Clas_1699352150016581CjtoVis_15ICtjoVis_26',
            'Firmado');
        this.dseFirmado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_15ICtjoVis_26', ['Cliente']);
        this.dseFirmado.enabled = false;
        this.dseFirmado.mandatory = false;
        this.dseFirmado.dataType = Field.dtBool;
        this.dseFirmado.options = DefinedSelections.DS_SI_NO;
        this.dseFirmado.assignCSS();
        this.fields.push(this.dseFirmado);

        this.dseValoracionCliente = new FieldDefinedSelection(this.langMng);
        this.dseValoracionCliente.nameInRequest = 'valoracioncliente';
        this.dseValoracionCliente.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DSI_ParteTrabajoPortalCli_item_Clas_1699352150016581CjtoVis_15ICtjoVis_27',
            'Valoración cliente');
        this.dseValoracionCliente.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_15ICtjoVis_27', ['Cliente']);
        this.dseValoracionCliente.enabled = false;
        this.dseValoracionCliente.mandatory = false;
        this.dseValoracionCliente.dataType = Field.dtInt;
        this.dseValoracionCliente.options = DefinedSelections.DS_PARTETRABAJO_VALORACION;
        this.dseValoracionCliente.assignCSS();
        this.fields.push(this.dseValoracionCliente);

    }
}
