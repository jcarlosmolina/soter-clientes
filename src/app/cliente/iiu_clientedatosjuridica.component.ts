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

export class ClienteIIUuClienteDatosJuridicaComponent extends AbstractIIU {

    /** Display Set elements */
    public dseRepresentanteLegal: Field;
    public dseDNIRepresentante: Field;
    public dseNotario: Field;
    public dseFechaConstitucion: Field;
    public dseProtocolo: Field;
    public dseRegistroMercantil: Field;

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
        this.idXML = 'Clas_1699352150016661UIInst_3';
        this.className = ModelConstants.Cliente.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Cliente_iiu_IIU_ClienteDatosJuridica',
            'Persona jurídica');
        this.queryURL = '/api/ClienteApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseRepresentanteLegal = new Field(this.langMng);
        this.dseRepresentanteLegal.nameInRequest = 'representantelegal';
        this.dseRepresentanteLegal.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteDatosJuridica_item_Clas_1699352150016661CjtoVis_6ICtjoVis_1',
            'Representante legal');
        this.dseRepresentanteLegal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_6ICtjoVis_1', ['Cliente']);
        this.dseRepresentanteLegal.enabled = false;
        this.dseRepresentanteLegal.mandatory = false;
        this.dseRepresentanteLegal.dataType = Field.dtString;
        this.dseRepresentanteLegal.maxLength = 300;
        this.dseRepresentanteLegal.assignCSS();
        this.fields.push(this.dseRepresentanteLegal);

        this.dseDNIRepresentante = new Field(this.langMng);
        this.dseDNIRepresentante.nameInRequest = 'dnirepresentante';
        this.dseDNIRepresentante.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteDatosJuridica_item_Clas_1699352150016661CjtoVis_6ICtjoVis_2',
            'DNI representante');
        this.dseDNIRepresentante.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_6ICtjoVis_2', ['Cliente']);
        this.dseDNIRepresentante.enabled = false;
        this.dseDNIRepresentante.mandatory = false;
        this.dseDNIRepresentante.dataType = Field.dtString;
        this.dseDNIRepresentante.maxLength = 30;
        this.dseDNIRepresentante.assignCSS();
        this.fields.push(this.dseDNIRepresentante);

        this.dseNotario = new Field(this.langMng);
        this.dseNotario.nameInRequest = 'notario';
        this.dseNotario.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteDatosJuridica_item_Clas_1699352150016661CjtoVis_6ICtjoVis_3',
            'Notario');
        this.dseNotario.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_6ICtjoVis_3', ['Cliente']);
        this.dseNotario.enabled = false;
        this.dseNotario.mandatory = false;
        this.dseNotario.dataType = Field.dtString;
        this.dseNotario.maxLength = 300;
        this.dseNotario.assignCSS();
        this.fields.push(this.dseNotario);

        this.dseFechaConstitucion = new Field(this.langMng);
        this.dseFechaConstitucion.nameInRequest = 'fechaconstitucion';
        this.dseFechaConstitucion.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteDatosJuridica_item_Clas_1699352150016661CjtoVis_6ICtjoVis_4',
            'F. Constitución');
        this.dseFechaConstitucion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_6ICtjoVis_4', ['Cliente']);
        this.dseFechaConstitucion.enabled = false;
        this.dseFechaConstitucion.mandatory = false;
        this.dseFechaConstitucion.dataType = Field.dtDate;
        this.dseFechaConstitucion.assignCSS();
        this.fields.push(this.dseFechaConstitucion);

        this.dseProtocolo = new Field(this.langMng);
        this.dseProtocolo.nameInRequest = 'protocolo';
        this.dseProtocolo.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteDatosJuridica_item_Clas_1699352150016661CjtoVis_6ICtjoVis_5',
            'Protocolo');
        this.dseProtocolo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_6ICtjoVis_5', ['Cliente']);
        this.dseProtocolo.enabled = false;
        this.dseProtocolo.mandatory = false;
        this.dseProtocolo.dataType = Field.dtString;
        this.dseProtocolo.maxLength = 50;
        this.dseProtocolo.assignCSS();
        this.fields.push(this.dseProtocolo);

        this.dseRegistroMercantil = new Field(this.langMng);
        this.dseRegistroMercantil.nameInRequest = 'registromercantil';
        this.dseRegistroMercantil.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteDatosJuridica_item_Clas_1699352150016661CjtoVis_6ICtjoVis_6',
            'Registro mercantil');
        this.dseRegistroMercantil.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_6ICtjoVis_6', ['Cliente']);
        this.dseRegistroMercantil.enabled = false;
        this.dseRegistroMercantil.mandatory = false;
        this.dseRegistroMercantil.dataType = Field.dtString;
        this.dseRegistroMercantil.maxLength = 300;
        this.dseRegistroMercantil.assignCSS();
        this.fields.push(this.dseRegistroMercantil);

    }

    /**
     * Initialize the action items
     */
    public initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1699352150016661AccOfer_5ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Cliente_act_AI_ClienteJuridica_item_Clas_1699352150016661AccOfer_5ElemAcc_1',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Cliente.name];
        accItem.targetClass = ModelConstants.Cliente.name;
        accItem.targetUI = ModelConstants.Cliente.siuutmodificarpersjuridica;
        accItem.setShowInModalProperties('imes-cliente-siu-tmodificarpersjuridica',
            this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARPERSJURIDICA',
            'Modificar'));
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['personajuridica'] });
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['estado'] });
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['estado'] });
        this.actions.push(accItem);

    }

    /**
     * Evaluate in advance the associated service preconditions to the action element
     * @param actionId Action element identification
     * @param rows Rows to be check
     */
    public checkPreconditionInAdvanceForRows(actionId: number, rows: any[]): boolean {
        let isEnabled = true;
        for (const row of rows) {
            if (actionId === 0) {
                isEnabled = this.checkPrecondicionInAdvanceNum0(row);
            }
        }
        return isEnabled;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 0
     * @param row Instance data
     */
    private checkPrecondicionInAdvanceNum0(row: any): boolean {
        // PersonaJuridica = true
        if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'personajuridica')), true))) {
            return false;
        }
        // Estado <> "Bloqueado"
        if (!(!this.util.valueEquals(this.getRowData(row, 'estado'), 'Bloqueado'))) {
            return false;
        }
        // Estado <> "Baja"
        if (!(!this.util.valueEquals(this.getRowData(row, 'estado'), 'Baja'))) {
            return false;
        }
        return true;
    }
}
