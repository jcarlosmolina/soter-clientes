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

export class ClienteIIUuClienteAdmonFincaComponent extends AbstractIIU {

    /** Display Set elements */
    public dseNombreRazonSocialAdmonFinca: Field;
    public dsePersonaContactoAdmonFinca: Field;
    public dseTipoViaAdmonFinca: FieldDefinedSelection;
    public dseDireccionAdmonFinca: Field;
    public dseNumeroAdmonFinca: Field;
    public dseEscaleraAdmonFinca: Field;
    public dsePisoAdmonFinca: Field;
    public dsePuertaAdmonFinca: Field;
    public dseMunicipioAdmonFincaNombre: Field;
    public dseCodigoPostalAdmonFincaCP: Field;
    public dseTelefonoAdmonFinca: Field;
    public dseExtensionAdmonFinca: Field;
    public dseFaxAdmonFinca: Field;
    public dseEmailAdmonFinca: Field;

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
        this.idXML = 'Clas_1699352150016661UIInst_6';
        this.className = ModelConstants.Cliente.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Cliente_iiu_IIU_ClienteAdmonFinca',
            'Administración Finca');
        this.queryURL = '/api/ClienteApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseNombreRazonSocialAdmonFinca = new Field(this.langMng);
        this.dseNombreRazonSocialAdmonFinca.nameInRequest = 'nombrerazonsocialadmonfinca';
        this.dseNombreRazonSocialAdmonFinca.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteAdmonFinca_item_Clas_1699352150016661CjtoVis_9ICtjoVis_1',
            'Nombre/Razón Social');
        this.dseNombreRazonSocialAdmonFinca.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_9ICtjoVis_1', ['Cliente']);
        this.dseNombreRazonSocialAdmonFinca.enabled = false;
        this.dseNombreRazonSocialAdmonFinca.mandatory = false;
        this.dseNombreRazonSocialAdmonFinca.dataType = Field.dtString;
        this.dseNombreRazonSocialAdmonFinca.maxLength = 300;
        this.dseNombreRazonSocialAdmonFinca.assignCSS();
        this.fields.push(this.dseNombreRazonSocialAdmonFinca);

        this.dsePersonaContactoAdmonFinca = new Field(this.langMng);
        this.dsePersonaContactoAdmonFinca.nameInRequest = 'personacontactoadmonfinca';
        this.dsePersonaContactoAdmonFinca.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteAdmonFinca_item_Clas_1699352150016661CjtoVis_9ICtjoVis_2',
            'Persona de contacto');
        this.dsePersonaContactoAdmonFinca.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_9ICtjoVis_2', ['Cliente']);
        this.dsePersonaContactoAdmonFinca.enabled = false;
        this.dsePersonaContactoAdmonFinca.mandatory = false;
        this.dsePersonaContactoAdmonFinca.dataType = Field.dtString;
        this.dsePersonaContactoAdmonFinca.maxLength = 300;
        this.dsePersonaContactoAdmonFinca.assignCSS();
        this.fields.push(this.dsePersonaContactoAdmonFinca);

        this.dseTipoViaAdmonFinca = new FieldDefinedSelection(this.langMng);
        this.dseTipoViaAdmonFinca.nameInRequest = 'tipoviaadmonfinca';
        this.dseTipoViaAdmonFinca.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteAdmonFinca_item_Clas_1699352150016661CjtoVis_9ICtjoVis_9',
            'Tipo vía');
        this.dseTipoViaAdmonFinca.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_9ICtjoVis_9', ['Cliente']);
        this.dseTipoViaAdmonFinca.enabled = false;
        this.dseTipoViaAdmonFinca.mandatory = false;
        this.dseTipoViaAdmonFinca.dataType = Field.dtString;
        this.dseTipoViaAdmonFinca.maxLength = 2;
        this.dseTipoViaAdmonFinca.options = DefinedSelections.DS_TIPOVIA;
        this.dseTipoViaAdmonFinca.assignCSS();
        this.fields.push(this.dseTipoViaAdmonFinca);

        this.dseDireccionAdmonFinca = new Field(this.langMng);
        this.dseDireccionAdmonFinca.nameInRequest = 'direccionadmonfinca';
        this.dseDireccionAdmonFinca.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteAdmonFinca_item_Clas_1699352150016661CjtoVis_9ICtjoVis_3',
            'Dirección');
        this.dseDireccionAdmonFinca.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_9ICtjoVis_3', ['Cliente']);
        this.dseDireccionAdmonFinca.enabled = false;
        this.dseDireccionAdmonFinca.mandatory = false;
        this.dseDireccionAdmonFinca.dataType = Field.dtString;
        this.dseDireccionAdmonFinca.maxLength = 300;
        this.dseDireccionAdmonFinca.assignCSS();
        this.fields.push(this.dseDireccionAdmonFinca);

        this.dseNumeroAdmonFinca = new Field(this.langMng);
        this.dseNumeroAdmonFinca.nameInRequest = 'numeroadmonfinca';
        this.dseNumeroAdmonFinca.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteAdmonFinca_item_Clas_1699352150016661CjtoVis_9ICtjoVis_10',
            'Nº');
        this.dseNumeroAdmonFinca.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_9ICtjoVis_10', ['Cliente']);
        this.dseNumeroAdmonFinca.enabled = false;
        this.dseNumeroAdmonFinca.mandatory = false;
        this.dseNumeroAdmonFinca.dataType = Field.dtString;
        this.dseNumeroAdmonFinca.maxLength = 5;
        this.dseNumeroAdmonFinca.assignCSS();
        this.fields.push(this.dseNumeroAdmonFinca);

        this.dseEscaleraAdmonFinca = new Field(this.langMng);
        this.dseEscaleraAdmonFinca.nameInRequest = 'escaleraadmonfinca';
        this.dseEscaleraAdmonFinca.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteAdmonFinca_item_Clas_1699352150016661CjtoVis_9ICtjoVis_11',
            'Escalera');
        this.dseEscaleraAdmonFinca.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_9ICtjoVis_11', ['Cliente']);
        this.dseEscaleraAdmonFinca.enabled = false;
        this.dseEscaleraAdmonFinca.mandatory = false;
        this.dseEscaleraAdmonFinca.dataType = Field.dtString;
        this.dseEscaleraAdmonFinca.maxLength = 2;
        this.dseEscaleraAdmonFinca.assignCSS();
        this.fields.push(this.dseEscaleraAdmonFinca);

        this.dsePisoAdmonFinca = new Field(this.langMng);
        this.dsePisoAdmonFinca.nameInRequest = 'pisoadmonfinca';
        this.dsePisoAdmonFinca.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteAdmonFinca_item_Clas_1699352150016661CjtoVis_9ICtjoVis_12',
            'Piso');
        this.dsePisoAdmonFinca.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_9ICtjoVis_12', ['Cliente']);
        this.dsePisoAdmonFinca.enabled = false;
        this.dsePisoAdmonFinca.mandatory = false;
        this.dsePisoAdmonFinca.dataType = Field.dtString;
        this.dsePisoAdmonFinca.maxLength = 2;
        this.dsePisoAdmonFinca.assignCSS();
        this.fields.push(this.dsePisoAdmonFinca);

        this.dsePuertaAdmonFinca = new Field(this.langMng);
        this.dsePuertaAdmonFinca.nameInRequest = 'puertaadmonfinca';
        this.dsePuertaAdmonFinca.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteAdmonFinca_item_Clas_1699352150016661CjtoVis_9ICtjoVis_13',
            'Puerta');
        this.dsePuertaAdmonFinca.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_9ICtjoVis_13', ['Cliente']);
        this.dsePuertaAdmonFinca.enabled = false;
        this.dsePuertaAdmonFinca.mandatory = false;
        this.dsePuertaAdmonFinca.dataType = Field.dtString;
        this.dsePuertaAdmonFinca.maxLength = 2;
        this.dsePuertaAdmonFinca.assignCSS();
        this.fields.push(this.dsePuertaAdmonFinca);

        this.dseMunicipioAdmonFincaNombre = new Field(this.langMng);
        this.dseMunicipioAdmonFincaNombre.nameInRequest = 'municipioadmonfinca.nombre';
        this.dseMunicipioAdmonFincaNombre.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteAdmonFinca_item_Clas_1699352150016661CjtoVis_9ICtjoVis_4',
            'Municipio');
        this.dseMunicipioAdmonFincaNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_9ICtjoVis_4', ['Cliente']);
        this.dseMunicipioAdmonFincaNombre.enabled = false;
        this.dseMunicipioAdmonFincaNombre.mandatory = false;
        this.dseMunicipioAdmonFincaNombre.dataType = Field.dtString;
        this.dseMunicipioAdmonFincaNombre.maxLength = 300;
        this.dseMunicipioAdmonFincaNombre.assignCSS();
        this.fields.push(this.dseMunicipioAdmonFincaNombre);

        this.dseCodigoPostalAdmonFincaCP = new Field(this.langMng);
        this.dseCodigoPostalAdmonFincaCP.nameInRequest = 'codigopostaladmonfinca.cp';
        this.dseCodigoPostalAdmonFincaCP.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteAdmonFinca_item_Clas_1699352150016661CjtoVis_9ICtjoVis_5',
            'Código Postal');
        this.dseCodigoPostalAdmonFincaCP.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_9ICtjoVis_5', ['Cliente']);
        this.dseCodigoPostalAdmonFincaCP.enabled = false;
        this.dseCodigoPostalAdmonFincaCP.mandatory = false;
        this.dseCodigoPostalAdmonFincaCP.dataType = Field.dtString;
        this.dseCodigoPostalAdmonFincaCP.maxLength = 10;
        this.dseCodigoPostalAdmonFincaCP.assignCSS();
        this.fields.push(this.dseCodigoPostalAdmonFincaCP);

        this.dseTelefonoAdmonFinca = new Field(this.langMng);
        this.dseTelefonoAdmonFinca.nameInRequest = 'telefonoadmonfinca';
        this.dseTelefonoAdmonFinca.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteAdmonFinca_item_Clas_1699352150016661CjtoVis_9ICtjoVis_6',
            'Teléfono');
        this.dseTelefonoAdmonFinca.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_9ICtjoVis_6', ['Cliente']);
        this.dseTelefonoAdmonFinca.enabled = false;
        this.dseTelefonoAdmonFinca.mandatory = false;
        this.dseTelefonoAdmonFinca.dataType = Field.dtString;
        this.dseTelefonoAdmonFinca.maxLength = 20;
        this.dseTelefonoAdmonFinca.assignCSS();
        this.fields.push(this.dseTelefonoAdmonFinca);

        this.dseExtensionAdmonFinca = new Field(this.langMng);
        this.dseExtensionAdmonFinca.nameInRequest = 'extensionadmonfinca';
        this.dseExtensionAdmonFinca.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteAdmonFinca_item_Clas_1699352150016661CjtoVis_9ICtjoVis_14',
            'Extensión');
        this.dseExtensionAdmonFinca.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_9ICtjoVis_14', ['Cliente']);
        this.dseExtensionAdmonFinca.enabled = false;
        this.dseExtensionAdmonFinca.mandatory = false;
        this.dseExtensionAdmonFinca.dataType = Field.dtString;
        this.dseExtensionAdmonFinca.maxLength = 4;
        this.dseExtensionAdmonFinca.assignCSS();
        this.fields.push(this.dseExtensionAdmonFinca);

        this.dseFaxAdmonFinca = new Field(this.langMng);
        this.dseFaxAdmonFinca.nameInRequest = 'faxadmonfinca';
        this.dseFaxAdmonFinca.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteAdmonFinca_item_Clas_1699352150016661CjtoVis_9ICtjoVis_7',
            'Fax');
        this.dseFaxAdmonFinca.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_9ICtjoVis_7', ['Cliente']);
        this.dseFaxAdmonFinca.enabled = false;
        this.dseFaxAdmonFinca.mandatory = false;
        this.dseFaxAdmonFinca.dataType = Field.dtString;
        this.dseFaxAdmonFinca.maxLength = 20;
        this.dseFaxAdmonFinca.assignCSS();
        this.fields.push(this.dseFaxAdmonFinca);

        this.dseEmailAdmonFinca = new Field(this.langMng);
        this.dseEmailAdmonFinca.nameInRequest = 'emailadmonfinca';
        this.dseEmailAdmonFinca.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteAdmonFinca_item_Clas_1699352150016661CjtoVis_9ICtjoVis_8',
            'Email');
        this.dseEmailAdmonFinca.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_9ICtjoVis_8', ['Cliente']);
        this.dseEmailAdmonFinca.enabled = false;
        this.dseEmailAdmonFinca.mandatory = false;
        this.dseEmailAdmonFinca.dataType = Field.dtString;
        this.dseEmailAdmonFinca.maxLength = 100;
        this.dseEmailAdmonFinca.assignCSS();
        this.fields.push(this.dseEmailAdmonFinca);

    }

    /**
     * Initialize the action items
     */
    public initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1699352150016661AccOfer_8ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Cliente_act_A_ClienteAdmonFinca_item_Clas_1699352150016661AccOfer_8ElemAcc_1',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Cliente.name];
        accItem.targetClass = ModelConstants.Cliente.name;
        accItem.targetUI = ModelConstants.Cliente.siuutmodificaradmonfinca;
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['comunidadpropietarios'] });
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
        // ComunidadPropietarios = true
        if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'comunidadpropietarios')), true))) {
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
