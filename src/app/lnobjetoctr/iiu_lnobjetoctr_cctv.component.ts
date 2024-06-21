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

export class LnObjetoCtrIIUuLnObjetoCtruCCTVComponent extends AbstractIIU {

    /** Display Set elements */
    public dseModeloGrabador: Field;
    public dseUsuarioAccesoCRA: Field;
    public dseClaveAccesoCRA: Field;
    public dseOperativaCCTVNombre: Field;
    public dseOperativaCCTVDescripcion: Field;
    public dseContratoComunicado: Field;
    public dseVerificacionAlarmasPorAudio: FieldDefinedSelection;
    public dseVerificacionAlarmasPorVideo: FieldDefinedSelection;
    public dseVerificacionAlarmasSecuencial: FieldDefinedSelection;
    public dseVerificacionAlarmasVigilanteEx: FieldDefinedSelection;
    public dseVerificacionAlarmasVigilanteIn: FieldDefinedSelection;

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
        this.idXML = 'Clas_1699352150016018UIInst_2';
        this.className = ModelConstants.Lnobjetoctr.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_LnObjetoCtr_iiu_IIU_LnObjetoCtr_CCTV',
            'Datos CCTV');
        this.queryURL = '/api/LnObjetoCtrApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseModeloGrabador = new Field(this.langMng);
        this.dseModeloGrabador.nameInRequest = 'modelograbador';
        this.dseModeloGrabador.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DS_LnObjetoCtr_CCTV_item_Clas_1699352150016018CjtoVis_4ICtjoVis_1',
            'Modelo grabador');
        this.dseModeloGrabador.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016018CjtoVis_4ICtjoVis_1', ['Cliente']);
        this.dseModeloGrabador.enabled = false;
        this.dseModeloGrabador.mandatory = false;
        this.dseModeloGrabador.dataType = Field.dtString;
        this.dseModeloGrabador.maxLength = 100;
        this.dseModeloGrabador.assignCSS();
        this.fields.push(this.dseModeloGrabador);

        this.dseUsuarioAccesoCRA = new Field(this.langMng);
        this.dseUsuarioAccesoCRA.nameInRequest = 'usuarioaccesocra';
        this.dseUsuarioAccesoCRA.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DS_LnObjetoCtr_CCTV_item_Clas_1699352150016018CjtoVis_4ICtjoVis_2',
            'Usuario acceso CRA');
        this.dseUsuarioAccesoCRA.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016018CjtoVis_4ICtjoVis_2', ['Cliente']);
        this.dseUsuarioAccesoCRA.enabled = false;
        this.dseUsuarioAccesoCRA.mandatory = false;
        this.dseUsuarioAccesoCRA.dataType = Field.dtString;
        this.dseUsuarioAccesoCRA.maxLength = 100;
        this.dseUsuarioAccesoCRA.assignCSS();
        this.fields.push(this.dseUsuarioAccesoCRA);

        this.dseClaveAccesoCRA = new Field(this.langMng);
        this.dseClaveAccesoCRA.nameInRequest = 'claveaccesocra';
        this.dseClaveAccesoCRA.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DS_LnObjetoCtr_CCTV_item_Clas_1699352150016018CjtoVis_4ICtjoVis_3',
            'Clave acceso CRA');
        this.dseClaveAccesoCRA.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016018CjtoVis_4ICtjoVis_3', ['Cliente']);
        this.dseClaveAccesoCRA.enabled = false;
        this.dseClaveAccesoCRA.mandatory = false;
        this.dseClaveAccesoCRA.dataType = Field.dtString;
        this.dseClaveAccesoCRA.maxLength = 100;
        this.dseClaveAccesoCRA.assignCSS();
        this.fields.push(this.dseClaveAccesoCRA);

        this.dseOperativaCCTVNombre = new Field(this.langMng);
        this.dseOperativaCCTVNombre.nameInRequest = 'operativacctv.nombre';
        this.dseOperativaCCTVNombre.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DS_LnObjetoCtr_CCTV_item_Clas_1699352150016018CjtoVis_4ICtjoVis_4',
            'Operativa CCTV');
        this.dseOperativaCCTVNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016018CjtoVis_4ICtjoVis_4', ['Cliente']);
        this.dseOperativaCCTVNombre.enabled = false;
        this.dseOperativaCCTVNombre.mandatory = false;
        this.dseOperativaCCTVNombre.dataType = Field.dtString;
        this.dseOperativaCCTVNombre.maxLength = 300;
        this.dseOperativaCCTVNombre.assignCSS();
        this.fields.push(this.dseOperativaCCTVNombre);

        this.dseOperativaCCTVDescripcion = new Field(this.langMng);
        this.dseOperativaCCTVDescripcion.nameInRequest = 'operativacctv.descripcion';
        this.dseOperativaCCTVDescripcion.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DS_LnObjetoCtr_CCTV_item_Clas_1699352150016018CjtoVis_4ICtjoVis_5',
            'Descripción operativa CCTV');
        this.dseOperativaCCTVDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016018CjtoVis_4ICtjoVis_5', ['Cliente']);
        this.dseOperativaCCTVDescripcion.enabled = false;
        this.dseOperativaCCTVDescripcion.mandatory = false;
        this.dseOperativaCCTVDescripcion.dataType = Field.dtString;
        this.dseOperativaCCTVDescripcion.maxLength = 300;
        this.dseOperativaCCTVDescripcion.assignCSS();
        this.fields.push(this.dseOperativaCCTVDescripcion);

        this.dseContratoComunicado = new Field(this.langMng);
        this.dseContratoComunicado.nameInRequest = 'contratocomunicado';
        this.dseContratoComunicado.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DS_LnObjetoCtr_CCTV_item_Clas_1699352150016018CjtoVis_4ICtjoVis_6',
            'Contrato comunicado');
        this.dseContratoComunicado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016018CjtoVis_4ICtjoVis_6', ['Cliente']);
        this.dseContratoComunicado.enabled = false;
        this.dseContratoComunicado.mandatory = false;
        this.dseContratoComunicado.dataType = Field.dtString;
        this.dseContratoComunicado.maxLength = 50;
        this.dseContratoComunicado.assignCSS();
        this.fields.push(this.dseContratoComunicado);

        this.dseVerificacionAlarmasPorAudio = new FieldDefinedSelection(this.langMng);
        this.dseVerificacionAlarmasPorAudio.nameInRequest = 'verificacionalarmasporaudio';
        this.dseVerificacionAlarmasPorAudio.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DS_LnObjetoCtr_CCTV_item_Clas_1699352150016018CjtoVis_4ICtjoVis_7',
            'Alarmas por audio');
        this.dseVerificacionAlarmasPorAudio.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016018CjtoVis_4ICtjoVis_7', ['Cliente']);
        this.dseVerificacionAlarmasPorAudio.enabled = false;
        this.dseVerificacionAlarmasPorAudio.mandatory = false;
        this.dseVerificacionAlarmasPorAudio.dataType = Field.dtBool;
        this.dseVerificacionAlarmasPorAudio.options = DefinedSelections.DS_SI_NO;
        this.dseVerificacionAlarmasPorAudio.assignCSS();
        this.fields.push(this.dseVerificacionAlarmasPorAudio);

        this.dseVerificacionAlarmasPorVideo = new FieldDefinedSelection(this.langMng);
        this.dseVerificacionAlarmasPorVideo.nameInRequest = 'verificacionalarmasporvideo';
        this.dseVerificacionAlarmasPorVideo.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DS_LnObjetoCtr_CCTV_item_Clas_1699352150016018CjtoVis_4ICtjoVis_8',
            'Alarmas por video');
        this.dseVerificacionAlarmasPorVideo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016018CjtoVis_4ICtjoVis_8', ['Cliente']);
        this.dseVerificacionAlarmasPorVideo.enabled = false;
        this.dseVerificacionAlarmasPorVideo.mandatory = false;
        this.dseVerificacionAlarmasPorVideo.dataType = Field.dtBool;
        this.dseVerificacionAlarmasPorVideo.options = DefinedSelections.DS_SI_NO;
        this.dseVerificacionAlarmasPorVideo.assignCSS();
        this.fields.push(this.dseVerificacionAlarmasPorVideo);

        this.dseVerificacionAlarmasSecuencial = new FieldDefinedSelection(this.langMng);
        this.dseVerificacionAlarmasSecuencial.nameInRequest = 'verificacionalarmassecuencial';
        this.dseVerificacionAlarmasSecuencial.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DS_LnObjetoCtr_CCTV_item_Clas_1699352150016018CjtoVis_4ICtjoVis_9',
            'Alarmas secuencial');
        this.dseVerificacionAlarmasSecuencial.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016018CjtoVis_4ICtjoVis_9', ['Cliente']);
        this.dseVerificacionAlarmasSecuencial.enabled = false;
        this.dseVerificacionAlarmasSecuencial.mandatory = false;
        this.dseVerificacionAlarmasSecuencial.dataType = Field.dtBool;
        this.dseVerificacionAlarmasSecuencial.options = DefinedSelections.DS_SI_NO;
        this.dseVerificacionAlarmasSecuencial.assignCSS();
        this.fields.push(this.dseVerificacionAlarmasSecuencial);

        this.dseVerificacionAlarmasVigilanteEx = new FieldDefinedSelection(this.langMng);
        this.dseVerificacionAlarmasVigilanteEx.nameInRequest = 'verificacionalarmasvigilanteex';
        this.dseVerificacionAlarmasVigilanteEx.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DS_LnObjetoCtr_CCTV_item_Clas_1699352150016018CjtoVis_4ICtjoVis_10',
            'Persona (vigilante exterior)');
        this.dseVerificacionAlarmasVigilanteEx.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016018CjtoVis_4ICtjoVis_10', ['Cliente']);
        this.dseVerificacionAlarmasVigilanteEx.enabled = false;
        this.dseVerificacionAlarmasVigilanteEx.mandatory = false;
        this.dseVerificacionAlarmasVigilanteEx.dataType = Field.dtBool;
        this.dseVerificacionAlarmasVigilanteEx.options = DefinedSelections.DS_SI_NO;
        this.dseVerificacionAlarmasVigilanteEx.assignCSS();
        this.fields.push(this.dseVerificacionAlarmasVigilanteEx);

        this.dseVerificacionAlarmasVigilanteIn = new FieldDefinedSelection(this.langMng);
        this.dseVerificacionAlarmasVigilanteIn.nameInRequest = 'verificacionalarmasvigilantein';
        this.dseVerificacionAlarmasVigilanteIn.alias = this.langMng.translateText(
            'cls_LnObjetoCtr_ds_DS_LnObjetoCtr_CCTV_item_Clas_1699352150016018CjtoVis_4ICtjoVis_11',
            'Persona (vigilante interior)');
        this.dseVerificacionAlarmasVigilanteIn.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016018CjtoVis_4ICtjoVis_11', ['Cliente']);
        this.dseVerificacionAlarmasVigilanteIn.enabled = false;
        this.dseVerificacionAlarmasVigilanteIn.mandatory = false;
        this.dseVerificacionAlarmasVigilanteIn.dataType = Field.dtBool;
        this.dseVerificacionAlarmasVigilanteIn.options = DefinedSelections.DS_SI_NO;
        this.dseVerificacionAlarmasVigilanteIn.assignCSS();
        this.fields.push(this.dseVerificacionAlarmasVigilanteIn);

    }
}
