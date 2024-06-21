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

export class ClienteIIUuClienteDireccionFiscalComponent extends AbstractIIU {

    /** Display Set elements */
    public dseTipoViaFiscal: FieldDefinedSelection;
    public dseDireccionFiscal: Field;
    public dseNumeroFiscal: Field;
    public dseEscaleraFiscal: Field;
    public dsePisoFiscal: Field;
    public dsePuertaFiscal: Field;
    public dseMunicipioFiscalNombre: Field;
    public dseCodigoPostalFiscalCP: Field;
    public dseTelefonoFiscal: Field;
    public dseExtensionFiscal: Field;
    public dseFaxFiscal: Field;
    public dsePaisFiscalNombre: Field;

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
        this.idXML = 'Clas_1699352150016661UIInst_4';
        this.className = ModelConstants.Cliente.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Cliente_iiu_IIU_ClienteDireccionFiscal',
            'Dirección fiscal');
        this.queryURL = '/api/ClienteApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseTipoViaFiscal = new FieldDefinedSelection(this.langMng);
        this.dseTipoViaFiscal.nameInRequest = 'tipoviafiscal';
        this.dseTipoViaFiscal.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteDireccionFiscal_item_Clas_1699352150016661CjtoVis_7ICtjoVis_7',
            'Tipo vía');
        this.dseTipoViaFiscal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_7ICtjoVis_7', ['Cliente']);
        this.dseTipoViaFiscal.enabled = false;
        this.dseTipoViaFiscal.mandatory = false;
        this.dseTipoViaFiscal.dataType = Field.dtString;
        this.dseTipoViaFiscal.maxLength = 2;
        this.dseTipoViaFiscal.options = DefinedSelections.DS_TIPOVIA;
        this.dseTipoViaFiscal.assignCSS();
        this.fields.push(this.dseTipoViaFiscal);

        this.dseDireccionFiscal = new Field(this.langMng);
        this.dseDireccionFiscal.nameInRequest = 'direccionfiscal';
        this.dseDireccionFiscal.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteDireccionFiscal_item_Clas_1699352150016661CjtoVis_7ICtjoVis_1',
            'Dirección');
        this.dseDireccionFiscal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_7ICtjoVis_1', ['Cliente']);
        this.dseDireccionFiscal.enabled = false;
        this.dseDireccionFiscal.mandatory = false;
        this.dseDireccionFiscal.dataType = Field.dtString;
        this.dseDireccionFiscal.maxLength = 300;
        this.dseDireccionFiscal.assignCSS();
        this.fields.push(this.dseDireccionFiscal);

        this.dseNumeroFiscal = new Field(this.langMng);
        this.dseNumeroFiscal.nameInRequest = 'numerofiscal';
        this.dseNumeroFiscal.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteDireccionFiscal_item_Clas_1699352150016661CjtoVis_7ICtjoVis_8',
            'Nº');
        this.dseNumeroFiscal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_7ICtjoVis_8', ['Cliente']);
        this.dseNumeroFiscal.enabled = false;
        this.dseNumeroFiscal.mandatory = false;
        this.dseNumeroFiscal.dataType = Field.dtString;
        this.dseNumeroFiscal.maxLength = 5;
        this.dseNumeroFiscal.assignCSS();
        this.fields.push(this.dseNumeroFiscal);

        this.dseEscaleraFiscal = new Field(this.langMng);
        this.dseEscaleraFiscal.nameInRequest = 'escalerafiscal';
        this.dseEscaleraFiscal.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteDireccionFiscal_item_Clas_1699352150016661CjtoVis_7ICtjoVis_9',
            'Escalera');
        this.dseEscaleraFiscal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_7ICtjoVis_9', ['Cliente']);
        this.dseEscaleraFiscal.enabled = false;
        this.dseEscaleraFiscal.mandatory = false;
        this.dseEscaleraFiscal.dataType = Field.dtString;
        this.dseEscaleraFiscal.maxLength = 2;
        this.dseEscaleraFiscal.assignCSS();
        this.fields.push(this.dseEscaleraFiscal);

        this.dsePisoFiscal = new Field(this.langMng);
        this.dsePisoFiscal.nameInRequest = 'pisofiscal';
        this.dsePisoFiscal.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteDireccionFiscal_item_Clas_1699352150016661CjtoVis_7ICtjoVis_10',
            'Piso');
        this.dsePisoFiscal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_7ICtjoVis_10', ['Cliente']);
        this.dsePisoFiscal.enabled = false;
        this.dsePisoFiscal.mandatory = false;
        this.dsePisoFiscal.dataType = Field.dtString;
        this.dsePisoFiscal.maxLength = 2;
        this.dsePisoFiscal.assignCSS();
        this.fields.push(this.dsePisoFiscal);

        this.dsePuertaFiscal = new Field(this.langMng);
        this.dsePuertaFiscal.nameInRequest = 'puertafiscal';
        this.dsePuertaFiscal.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteDireccionFiscal_item_Clas_1699352150016661CjtoVis_7ICtjoVis_11',
            'Puerta');
        this.dsePuertaFiscal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_7ICtjoVis_11', ['Cliente']);
        this.dsePuertaFiscal.enabled = false;
        this.dsePuertaFiscal.mandatory = false;
        this.dsePuertaFiscal.dataType = Field.dtString;
        this.dsePuertaFiscal.maxLength = 2;
        this.dsePuertaFiscal.assignCSS();
        this.fields.push(this.dsePuertaFiscal);

        this.dseMunicipioFiscalNombre = new Field(this.langMng);
        this.dseMunicipioFiscalNombre.nameInRequest = 'municipiofiscal.nombre';
        this.dseMunicipioFiscalNombre.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteDireccionFiscal_item_Clas_1699352150016661CjtoVis_7ICtjoVis_2',
            'Municipio');
        this.dseMunicipioFiscalNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_7ICtjoVis_2', ['Cliente']);
        this.dseMunicipioFiscalNombre.enabled = false;
        this.dseMunicipioFiscalNombre.mandatory = false;
        this.dseMunicipioFiscalNombre.dataType = Field.dtString;
        this.dseMunicipioFiscalNombre.maxLength = 300;
        this.dseMunicipioFiscalNombre.assignCSS();
        this.fields.push(this.dseMunicipioFiscalNombre);

        this.dseCodigoPostalFiscalCP = new Field(this.langMng);
        this.dseCodigoPostalFiscalCP.nameInRequest = 'codigopostalfiscal.cp';
        this.dseCodigoPostalFiscalCP.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteDireccionFiscal_item_Clas_1699352150016661CjtoVis_7ICtjoVis_3',
            'Código Postal');
        this.dseCodigoPostalFiscalCP.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_7ICtjoVis_3', ['Cliente']);
        this.dseCodigoPostalFiscalCP.enabled = false;
        this.dseCodigoPostalFiscalCP.mandatory = false;
        this.dseCodigoPostalFiscalCP.dataType = Field.dtString;
        this.dseCodigoPostalFiscalCP.maxLength = 10;
        this.dseCodigoPostalFiscalCP.assignCSS();
        this.fields.push(this.dseCodigoPostalFiscalCP);

        this.dseTelefonoFiscal = new Field(this.langMng);
        this.dseTelefonoFiscal.nameInRequest = 'telefonofiscal';
        this.dseTelefonoFiscal.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteDireccionFiscal_item_Clas_1699352150016661CjtoVis_7ICtjoVis_4',
            'Teléfono');
        this.dseTelefonoFiscal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_7ICtjoVis_4', ['Cliente']);
        this.dseTelefonoFiscal.enabled = false;
        this.dseTelefonoFiscal.mandatory = false;
        this.dseTelefonoFiscal.dataType = Field.dtString;
        this.dseTelefonoFiscal.maxLength = 20;
        this.dseTelefonoFiscal.assignCSS();
        this.fields.push(this.dseTelefonoFiscal);

        this.dseExtensionFiscal = new Field(this.langMng);
        this.dseExtensionFiscal.nameInRequest = 'extensionfiscal';
        this.dseExtensionFiscal.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteDireccionFiscal_item_Clas_1699352150016661CjtoVis_7ICtjoVis_12',
            'Extensión');
        this.dseExtensionFiscal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_7ICtjoVis_12', ['Cliente']);
        this.dseExtensionFiscal.enabled = false;
        this.dseExtensionFiscal.mandatory = false;
        this.dseExtensionFiscal.dataType = Field.dtString;
        this.dseExtensionFiscal.maxLength = 4;
        this.dseExtensionFiscal.assignCSS();
        this.fields.push(this.dseExtensionFiscal);

        this.dseFaxFiscal = new Field(this.langMng);
        this.dseFaxFiscal.nameInRequest = 'faxfiscal';
        this.dseFaxFiscal.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteDireccionFiscal_item_Clas_1699352150016661CjtoVis_7ICtjoVis_5',
            'Fax');
        this.dseFaxFiscal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_7ICtjoVis_5', ['Cliente']);
        this.dseFaxFiscal.enabled = false;
        this.dseFaxFiscal.mandatory = false;
        this.dseFaxFiscal.dataType = Field.dtString;
        this.dseFaxFiscal.maxLength = 20;
        this.dseFaxFiscal.assignCSS();
        this.fields.push(this.dseFaxFiscal);

        this.dsePaisFiscalNombre = new Field(this.langMng);
        this.dsePaisFiscalNombre.nameInRequest = 'paisfiscal.nombre';
        this.dsePaisFiscalNombre.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteDireccionFiscal_item_Clas_1699352150016661CjtoVis_7ICtjoVis_6',
            'País');
        this.dsePaisFiscalNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_7ICtjoVis_6', ['Cliente']);
        this.dsePaisFiscalNombre.enabled = false;
        this.dsePaisFiscalNombre.mandatory = false;
        this.dsePaisFiscalNombre.dataType = Field.dtString;
        this.dsePaisFiscalNombre.maxLength = 100;
        this.dsePaisFiscalNombre.assignCSS();
        this.fields.push(this.dsePaisFiscalNombre);

    }

    /**
     * Initialize the action items
     */
    public initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1699352150016661AccOfer_4ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Cliente_act_AI_ClienteDirFiscal_item_Clas_1699352150016661AccOfer_4ElemAcc_1',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Cliente.name];
        accItem.targetClass = ModelConstants.Cliente.name;
        accItem.targetUI = ModelConstants.Cliente.siuutmodificardirfiscal;
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
