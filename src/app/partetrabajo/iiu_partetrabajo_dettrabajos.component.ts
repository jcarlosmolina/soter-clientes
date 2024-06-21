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

export class ParteTrabajoIIUuParteTrabajouDetTrabajosComponent extends AbstractIIU {

    /** Display Set elements */
    public dseAlmacenNombre: Field;
    public dseDuracion: Field;
    public dseTiempoEspera: Field;
    public dseEnGarantia: FieldDefinedSelection;
    public dseNotasInternas: Field;
    public dseTrabajoARealizar: Field;
    public dseObservacions: Field;
    public dseTrabajoRealizado: Field;
    public dseComentariosFinalesTecnico: Field;
    public dseRequierePresupuesto: FieldDefinedSelection;
    public dseTextoPresupuesto: Field;
    public dseRequiereInforme: FieldDefinedSelection;
    public dseTextoInformeRequerido: Field;
    public dseConclusionCorrecta: FieldDefinedSelection;

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
        this.idXML = 'Clas_1699352150016581UIInst_2';
        this.className = ModelConstants.Partetrabajo.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_ParteTrabajo_iiu_IIU_ParteTrabajo_DetTrabajos',
            'Detalles');
        this.queryURL = '/api/ParteTrabajoApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseAlmacenNombre = new Field(this.langMng);
        this.dseAlmacenNombre.nameInRequest = 'almacen.nombre';
        this.dseAlmacenNombre.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_Detalles_item_Clas_1699352150016581CjtoVis_5ICtjoVis_1',
            'Almacén');
        this.dseAlmacenNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_5ICtjoVis_1', []);
        this.dseAlmacenNombre.enabled = false;
        this.dseAlmacenNombre.mandatory = false;
        this.dseAlmacenNombre.dataType = Field.dtString;
        this.dseAlmacenNombre.maxLength = 100;
        this.dseAlmacenNombre.assignCSS();
        this.fields.push(this.dseAlmacenNombre);

        this.dseDuracion = new Field(this.langMng);
        this.dseDuracion.nameInRequest = 'duracion';
        this.dseDuracion.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_Detalles_item_Clas_1699352150016581CjtoVis_5ICtjoVis_2',
            'Duración');
        this.dseDuracion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_5ICtjoVis_2', ['Cliente']);
        this.dseDuracion.enabled = false;
        this.dseDuracion.mandatory = false;
        this.dseDuracion.dataType = Field.dtReal;
        this.dseDuracion.assignCSS();
        this.fields.push(this.dseDuracion);

        this.dseTiempoEspera = new Field(this.langMng);
        this.dseTiempoEspera.nameInRequest = 'tiempoespera';
        this.dseTiempoEspera.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_Detalles_item_Clas_1699352150016581CjtoVis_5ICtjoVis_3',
            'Tiempo espera');
        this.dseTiempoEspera.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_5ICtjoVis_3', ['Cliente']);
        this.dseTiempoEspera.enabled = false;
        this.dseTiempoEspera.mandatory = false;
        this.dseTiempoEspera.dataType = Field.dtReal;
        this.dseTiempoEspera.assignCSS();
        this.fields.push(this.dseTiempoEspera);

        this.dseEnGarantia = new FieldDefinedSelection(this.langMng);
        this.dseEnGarantia.nameInRequest = 'engarantia';
        this.dseEnGarantia.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_Detalles_item_Clas_1699352150016581CjtoVis_5ICtjoVis_4',
            'En garantía');
        this.dseEnGarantia.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_5ICtjoVis_4', ['Cliente']);
        this.dseEnGarantia.enabled = false;
        this.dseEnGarantia.mandatory = false;
        this.dseEnGarantia.dataType = Field.dtBool;
        this.dseEnGarantia.options = DefinedSelections.DS_SI_NO;
        this.dseEnGarantia.assignCSS();
        this.fields.push(this.dseEnGarantia);

        this.dseNotasInternas = new Field(this.langMng);
        this.dseNotasInternas.nameInRequest = 'notasinternas';
        this.dseNotasInternas.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_Detalles_item_Clas_1699352150016581CjtoVis_5ICtjoVis_5',
            'Notas internas');
        this.dseNotasInternas.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_5ICtjoVis_5', ['Cliente']);
        this.dseNotasInternas.enabled = false;
        this.dseNotasInternas.mandatory = false;
        this.dseNotasInternas.dataType = Field.dtText;
        this.dseNotasInternas.assignCSS();
        this.fields.push(this.dseNotasInternas);

        this.dseTrabajoARealizar = new Field(this.langMng);
        this.dseTrabajoARealizar.nameInRequest = 'trabajoarealizar';
        this.dseTrabajoARealizar.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_Detalles_item_Clas_1699352150016581CjtoVis_5ICtjoVis_6',
            'Trabajo a realizar');
        this.dseTrabajoARealizar.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_5ICtjoVis_6', ['Cliente']);
        this.dseTrabajoARealizar.enabled = false;
        this.dseTrabajoARealizar.mandatory = false;
        this.dseTrabajoARealizar.dataType = Field.dtText;
        this.dseTrabajoARealizar.assignCSS();
        this.fields.push(this.dseTrabajoARealizar);

        this.dseObservacions = new Field(this.langMng);
        this.dseObservacions.nameInRequest = 'observacions';
        this.dseObservacions.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_Detalles_item_Clas_1699352150016581CjtoVis_5ICtjoVis_7',
            'Observaciones');
        this.dseObservacions.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_5ICtjoVis_7', ['Cliente']);
        this.dseObservacions.enabled = false;
        this.dseObservacions.mandatory = false;
        this.dseObservacions.dataType = Field.dtText;
        this.dseObservacions.assignCSS();
        this.fields.push(this.dseObservacions);

        this.dseTrabajoRealizado = new Field(this.langMng);
        this.dseTrabajoRealizado.nameInRequest = 'trabajorealizado';
        this.dseTrabajoRealizado.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_Detalles_item_Clas_1699352150016581CjtoVis_5ICtjoVis_8',
            'Trabajo realizado');
        this.dseTrabajoRealizado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_5ICtjoVis_8', ['Cliente']);
        this.dseTrabajoRealizado.enabled = false;
        this.dseTrabajoRealizado.mandatory = false;
        this.dseTrabajoRealizado.dataType = Field.dtText;
        this.dseTrabajoRealizado.assignCSS();
        this.fields.push(this.dseTrabajoRealizado);

        this.dseComentariosFinalesTecnico = new Field(this.langMng);
        this.dseComentariosFinalesTecnico.nameInRequest = 'comentariosfinalestecnico';
        this.dseComentariosFinalesTecnico.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_Detalles_item_Clas_1699352150016581CjtoVis_5ICtjoVis_9',
            'Comentarios finales técnico');
        this.dseComentariosFinalesTecnico.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_5ICtjoVis_9', ['Cliente']);
        this.dseComentariosFinalesTecnico.enabled = false;
        this.dseComentariosFinalesTecnico.mandatory = false;
        this.dseComentariosFinalesTecnico.dataType = Field.dtText;
        this.dseComentariosFinalesTecnico.assignCSS();
        this.fields.push(this.dseComentariosFinalesTecnico);

        this.dseRequierePresupuesto = new FieldDefinedSelection(this.langMng);
        this.dseRequierePresupuesto.nameInRequest = 'requierepresupuesto';
        this.dseRequierePresupuesto.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_Detalles_item_Clas_1699352150016581CjtoVis_5ICtjoVis_10',
            'Requiere presupuesto');
        this.dseRequierePresupuesto.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_5ICtjoVis_10', ['Cliente']);
        this.dseRequierePresupuesto.enabled = false;
        this.dseRequierePresupuesto.mandatory = false;
        this.dseRequierePresupuesto.dataType = Field.dtBool;
        this.dseRequierePresupuesto.options = DefinedSelections.DS_SI_NO;
        this.dseRequierePresupuesto.assignCSS();
        this.fields.push(this.dseRequierePresupuesto);

        this.dseTextoPresupuesto = new Field(this.langMng);
        this.dseTextoPresupuesto.nameInRequest = 'textopresupuesto';
        this.dseTextoPresupuesto.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_Detalles_item_Clas_1699352150016581CjtoVis_5ICtjoVis_11',
            'Texto presupuesto');
        this.dseTextoPresupuesto.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_5ICtjoVis_11', ['Cliente']);
        this.dseTextoPresupuesto.enabled = false;
        this.dseTextoPresupuesto.mandatory = false;
        this.dseTextoPresupuesto.dataType = Field.dtText;
        this.dseTextoPresupuesto.assignCSS();
        this.fields.push(this.dseTextoPresupuesto);

        this.dseRequiereInforme = new FieldDefinedSelection(this.langMng);
        this.dseRequiereInforme.nameInRequest = 'requiereinforme';
        this.dseRequiereInforme.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_Detalles_item_Clas_1699352150016581CjtoVis_5ICtjoVis_12',
            'Requiere informe');
        this.dseRequiereInforme.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_5ICtjoVis_12', ['Cliente']);
        this.dseRequiereInforme.enabled = false;
        this.dseRequiereInforme.mandatory = false;
        this.dseRequiereInforme.dataType = Field.dtBool;
        this.dseRequiereInforme.options = DefinedSelections.DS_SI_NO;
        this.dseRequiereInforme.assignCSS();
        this.fields.push(this.dseRequiereInforme);

        this.dseTextoInformeRequerido = new Field(this.langMng);
        this.dseTextoInformeRequerido.nameInRequest = 'textoinformerequerido';
        this.dseTextoInformeRequerido.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_Detalles_item_Clas_1699352150016581CjtoVis_5ICtjoVis_13',
            'Texto informe requerido');
        this.dseTextoInformeRequerido.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_5ICtjoVis_13', ['Cliente']);
        this.dseTextoInformeRequerido.enabled = false;
        this.dseTextoInformeRequerido.mandatory = false;
        this.dseTextoInformeRequerido.dataType = Field.dtText;
        this.dseTextoInformeRequerido.assignCSS();
        this.fields.push(this.dseTextoInformeRequerido);

        this.dseConclusionCorrecta = new FieldDefinedSelection(this.langMng);
        this.dseConclusionCorrecta.nameInRequest = 'conclusioncorrecta';
        this.dseConclusionCorrecta.alias = this.langMng.translateText(
            'cls_ParteTrabajo_ds_DS_ParteTrabajo_Detalles_item_Clas_1699352150016581CjtoVis_5ICtjoVis_14',
            'Conclusión correcta');
        this.dseConclusionCorrecta.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016581CjtoVis_5ICtjoVis_14', ['Cliente']);
        this.dseConclusionCorrecta.enabled = false;
        this.dseConclusionCorrecta.mandatory = false;
        this.dseConclusionCorrecta.dataType = Field.dtBool;
        this.dseConclusionCorrecta.options = DefinedSelections.DS_SI_NO;
        this.dseConclusionCorrecta.assignCSS();
        this.fields.push(this.dseConclusionCorrecta);

    }
}
