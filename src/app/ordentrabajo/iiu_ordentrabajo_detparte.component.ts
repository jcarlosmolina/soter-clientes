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

export class OrdenTrabajoIIUuOrdenTrabajouDetParteComponent extends AbstractIIU {

    /** Display Set elements */
    public dseiduOrdenTrabajo: Field;
    public dseTipoOrden: FieldDefinedSelection;
    public dseEstado: FieldDefinedSelection;
    public dsePrioridad: FieldDefinedSelection;
    public dseTipoSistemaDescripcion: Field;
    public dseFechaPrevista: Field;
    public dseFechaLimite: Field;
    public dseTrabajoARealizar: Field;
    public dseTiempoEspera: Field;

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
        this.idXML = 'Clas_1699352150016871UIInst_4';
        this.className = ModelConstants.Ordentrabajo.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_OrdenTrabajo_iiu_IIU_OrdenTrabajo_DetParte',
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
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_DetParte_item_Clas_1699352150016871CjtoVis_6ICtjoVis_1',
            'Nº orden');
        this.dseiduOrdenTrabajo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_6ICtjoVis_1', ['Cliente']);
        this.dseiduOrdenTrabajo.enabled = false;
        this.dseiduOrdenTrabajo.mandatory = false;
        this.dseiduOrdenTrabajo.dataType = Field.dtAuto;
        this.dseiduOrdenTrabajo.assignCSS();
        this.fields.push(this.dseiduOrdenTrabajo);

        this.dseTipoOrden = new FieldDefinedSelection(this.langMng);
        this.dseTipoOrden.nameInRequest = 'tipoorden';
        this.dseTipoOrden.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_DetParte_item_Clas_1699352150016871CjtoVis_6ICtjoVis_2',
            'Tipo orden');
        this.dseTipoOrden.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_6ICtjoVis_2', ['Cliente']);
        this.dseTipoOrden.enabled = false;
        this.dseTipoOrden.mandatory = false;
        this.dseTipoOrden.dataType = Field.dtString;
        this.dseTipoOrden.maxLength = 1;
        this.dseTipoOrden.options = DefinedSelections.DS_TIPOORDENTRABAJO;
        this.dseTipoOrden.assignCSS();
        this.fields.push(this.dseTipoOrden);

        this.dseEstado = new FieldDefinedSelection(this.langMng);
        this.dseEstado.nameInRequest = 'estado';
        this.dseEstado.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_DetParte_item_Clas_1699352150016871CjtoVis_6ICtjoVis_3',
            'Estado');
        this.dseEstado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_6ICtjoVis_3', ['Cliente']);
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
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_DetParte_item_Clas_1699352150016871CjtoVis_6ICtjoVis_4',
            'Prioridad');
        this.dsePrioridad.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_6ICtjoVis_4', ['Cliente']);
        this.dsePrioridad.enabled = false;
        this.dsePrioridad.mandatory = false;
        this.dsePrioridad.dataType = Field.dtString;
        this.dsePrioridad.maxLength = 2;
        this.dsePrioridad.options = DefinedSelections.DS_TAREA_URGENCIA;
        this.dsePrioridad.assignCSS();
        this.fields.push(this.dsePrioridad);

        this.dseTipoSistemaDescripcion = new Field(this.langMng);
        this.dseTipoSistemaDescripcion.nameInRequest = 'tiposistema.descripcion';
        this.dseTipoSistemaDescripcion.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_DetParte_item_Clas_1699352150016871CjtoVis_6ICtjoVis_5',
            'Tipo de sistema');
        this.dseTipoSistemaDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_6ICtjoVis_5', ['Cliente']);
        this.dseTipoSistemaDescripcion.enabled = false;
        this.dseTipoSistemaDescripcion.mandatory = false;
        this.dseTipoSistemaDescripcion.dataType = Field.dtString;
        this.dseTipoSistemaDescripcion.maxLength = 100;
        this.dseTipoSistemaDescripcion.assignCSS();
        this.fields.push(this.dseTipoSistemaDescripcion);

        this.dseFechaPrevista = new Field(this.langMng);
        this.dseFechaPrevista.nameInRequest = 'fechaprevista';
        this.dseFechaPrevista.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_DetParte_item_Clas_1699352150016871CjtoVis_6ICtjoVis_6',
            'Fecha prevista');
        this.dseFechaPrevista.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_6ICtjoVis_6', ['Cliente']);
        this.dseFechaPrevista.enabled = false;
        this.dseFechaPrevista.mandatory = false;
        this.dseFechaPrevista.dataType = Field.dtDate;
        this.dseFechaPrevista.assignCSS();
        this.fields.push(this.dseFechaPrevista);

        this.dseFechaLimite = new Field(this.langMng);
        this.dseFechaLimite.nameInRequest = 'fechalimite';
        this.dseFechaLimite.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_DetParte_item_Clas_1699352150016871CjtoVis_6ICtjoVis_7',
            'Fecha límite');
        this.dseFechaLimite.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_6ICtjoVis_7', ['Cliente']);
        this.dseFechaLimite.enabled = false;
        this.dseFechaLimite.mandatory = false;
        this.dseFechaLimite.dataType = Field.dtDate;
        this.dseFechaLimite.assignCSS();
        this.fields.push(this.dseFechaLimite);

        this.dseTrabajoARealizar = new Field(this.langMng);
        this.dseTrabajoARealizar.nameInRequest = 'trabajoarealizar';
        this.dseTrabajoARealizar.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_DetParte_item_Clas_1699352150016871CjtoVis_6ICtjoVis_8',
            'Trabajo a realizar');
        this.dseTrabajoARealizar.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_6ICtjoVis_8', ['Cliente']);
        this.dseTrabajoARealizar.enabled = false;
        this.dseTrabajoARealizar.mandatory = false;
        this.dseTrabajoARealizar.dataType = Field.dtText;
        this.dseTrabajoARealizar.assignCSS();
        this.fields.push(this.dseTrabajoARealizar);

        this.dseTiempoEspera = new Field(this.langMng);
        this.dseTiempoEspera.nameInRequest = 'tiempoespera';
        this.dseTiempoEspera.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DSI_OrdenTrabajo_DetParte_item_Clas_1699352150016871CjtoVis_6ICtjoVis_9',
            'Tiempo espera (hrs.)');
        this.dseTiempoEspera.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_6ICtjoVis_9', ['Cliente']);
        this.dseTiempoEspera.enabled = false;
        this.dseTiempoEspera.mandatory = false;
        this.dseTiempoEspera.dataType = Field.dtReal;
        this.dseTiempoEspera.assignCSS();
        this.fields.push(this.dseTiempoEspera);

    }

    /**
     * Initialize the action items
     */
    public initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1699352150016871AccOfer_3ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_act_AIIU_OrdenTrabajo_DetParte_item_Clas_1699352150016871AccOfer_3ElemAcc_1',
            'Detalles');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Cliente.name];
        accItem.targetClass = ModelConstants.Ordentrabajo.name;
        accItem.targetUI = ModelConstants.Ordentrabajo.mdiuuordentrabajo;
        this.actions.push(accItem);

    }
}
