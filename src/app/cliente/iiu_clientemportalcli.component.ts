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

export class ClienteIIUuClienteMPortalCliComponent extends AbstractIIU {

    /** Display Set elements */
    public dseCodigo: Field;
    public dseGrupoEmpresaNombre: Field;
    public dseNombreRazonSocial: Field;
    public dseNombreComercial: Field;
    public dseCIFNIF: Field;
    public dseEmail: Field;
    public dsePaginaWeb: Field;
    public dseSectorDescripcion: Field;
    public dseTelefono: Field;
    public dseExtension: Field;
    public dseFax: Field;

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
        this.idXML = 'Clas_1699352150016661UIInst_8';
        this.className = ModelConstants.Cliente.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Cliente_iiu_IIU_ClienteMPortalCli',
            'Datos generales');
        this.queryURL = '/api/ClienteApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseCodigo = new Field(this.langMng);
        this.dseCodigo.nameInRequest = 'codigo';
        this.dseCodigo.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteMPortalCli_item_Clas_1699352150016661CjtoVis_11ICtjoVis_1',
            'Código');
        this.dseCodigo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_11ICtjoVis_1', ['Cliente']);
        this.dseCodigo.enabled = false;
        this.dseCodigo.mandatory = false;
        this.dseCodigo.dataType = Field.dtString;
        this.dseCodigo.maxLength = 6;
        this.dseCodigo.assignCSS();
        this.fields.push(this.dseCodigo);

        this.dseGrupoEmpresaNombre = new Field(this.langMng);
        this.dseGrupoEmpresaNombre.nameInRequest = 'grupoempresa.nombre';
        this.dseGrupoEmpresaNombre.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteMPortalCli_item_Clas_1699352150016661CjtoVis_11ICtjoVis_2',
            'Empresa');
        this.dseGrupoEmpresaNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_11ICtjoVis_2', []);
        this.dseGrupoEmpresaNombre.enabled = false;
        this.dseGrupoEmpresaNombre.mandatory = false;
        this.dseGrupoEmpresaNombre.dataType = Field.dtString;
        this.dseGrupoEmpresaNombre.maxLength = 300;
        this.dseGrupoEmpresaNombre.assignCSS();
        this.fields.push(this.dseGrupoEmpresaNombre);

        this.dseNombreRazonSocial = new Field(this.langMng);
        this.dseNombreRazonSocial.nameInRequest = 'nombrerazonsocial';
        this.dseNombreRazonSocial.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteMPortalCli_item_Clas_1699352150016661CjtoVis_11ICtjoVis_3',
            'Nombre/razón social');
        this.dseNombreRazonSocial.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_11ICtjoVis_3', ['Cliente']);
        this.dseNombreRazonSocial.enabled = false;
        this.dseNombreRazonSocial.mandatory = false;
        this.dseNombreRazonSocial.dataType = Field.dtString;
        this.dseNombreRazonSocial.maxLength = 300;
        this.dseNombreRazonSocial.assignCSS();
        this.fields.push(this.dseNombreRazonSocial);

        this.dseNombreComercial = new Field(this.langMng);
        this.dseNombreComercial.nameInRequest = 'nombrecomercial';
        this.dseNombreComercial.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteMPortalCli_item_Clas_1699352150016661CjtoVis_11ICtjoVis_5',
            'Nombre comercial');
        this.dseNombreComercial.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_11ICtjoVis_5', ['Cliente']);
        this.dseNombreComercial.enabled = false;
        this.dseNombreComercial.mandatory = false;
        this.dseNombreComercial.dataType = Field.dtString;
        this.dseNombreComercial.maxLength = 300;
        this.dseNombreComercial.assignCSS();
        this.fields.push(this.dseNombreComercial);

        this.dseCIFNIF = new Field(this.langMng);
        this.dseCIFNIF.nameInRequest = 'cifnif';
        this.dseCIFNIF.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteMPortalCli_item_Clas_1699352150016661CjtoVis_11ICtjoVis_6',
            'CIF/NIF');
        this.dseCIFNIF.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_11ICtjoVis_6', ['Cliente']);
        this.dseCIFNIF.enabled = false;
        this.dseCIFNIF.mandatory = false;
        this.dseCIFNIF.dataType = Field.dtString;
        this.dseCIFNIF.maxLength = 30;
        this.dseCIFNIF.assignCSS();
        this.fields.push(this.dseCIFNIF);

        this.dseEmail = new Field(this.langMng);
        this.dseEmail.nameInRequest = 'email';
        this.dseEmail.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteMPortalCli_item_Clas_1699352150016661CjtoVis_11ICtjoVis_11',
            'Email');
        this.dseEmail.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_11ICtjoVis_11', ['Cliente']);
        this.dseEmail.enabled = false;
        this.dseEmail.mandatory = false;
        this.dseEmail.dataType = Field.dtString;
        this.dseEmail.maxLength = 100;
        this.dseEmail.assignCSS();
        this.fields.push(this.dseEmail);

        this.dsePaginaWeb = new Field(this.langMng);
        this.dsePaginaWeb.nameInRequest = 'paginaweb';
        this.dsePaginaWeb.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteMPortalCli_item_Clas_1699352150016661CjtoVis_11ICtjoVis_12',
            'Página web');
        this.dsePaginaWeb.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_11ICtjoVis_12', ['Cliente']);
        this.dsePaginaWeb.enabled = false;
        this.dsePaginaWeb.mandatory = false;
        this.dsePaginaWeb.dataType = Field.dtString;
        this.dsePaginaWeb.maxLength = 300;
        this.dsePaginaWeb.assignCSS();
        this.fields.push(this.dsePaginaWeb);

        this.dseSectorDescripcion = new Field(this.langMng);
        this.dseSectorDescripcion.nameInRequest = 'sector.descripcion';
        this.dseSectorDescripcion.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteMPortalCli_item_Clas_1699352150016661CjtoVis_11ICtjoVis_14',
            'Sector');
        this.dseSectorDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_11ICtjoVis_14', ['Cliente']);
        this.dseSectorDescripcion.enabled = false;
        this.dseSectorDescripcion.mandatory = false;
        this.dseSectorDescripcion.dataType = Field.dtString;
        this.dseSectorDescripcion.maxLength = 100;
        this.dseSectorDescripcion.fieldSize = 50;
        this.dseSectorDescripcion.assignCSS();
        this.fields.push(this.dseSectorDescripcion);

        this.dseTelefono = new Field(this.langMng);
        this.dseTelefono.nameInRequest = 'telefono';
        this.dseTelefono.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteMPortalCli_item_Clas_1699352150016661CjtoVis_11ICtjoVis_15',
            'Teléfono');
        this.dseTelefono.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_11ICtjoVis_15', ['Cliente']);
        this.dseTelefono.enabled = false;
        this.dseTelefono.mandatory = false;
        this.dseTelefono.dataType = Field.dtString;
        this.dseTelefono.maxLength = 20;
        this.dseTelefono.fieldSize = 15;
        this.dseTelefono.assignCSS();
        this.fields.push(this.dseTelefono);

        this.dseExtension = new Field(this.langMng);
        this.dseExtension.nameInRequest = 'extension';
        this.dseExtension.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteMPortalCli_item_Clas_1699352150016661CjtoVis_11ICtjoVis_16',
            'Extensión');
        this.dseExtension.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_11ICtjoVis_16', ['Cliente']);
        this.dseExtension.enabled = false;
        this.dseExtension.mandatory = false;
        this.dseExtension.dataType = Field.dtString;
        this.dseExtension.maxLength = 4;
        this.dseExtension.assignCSS();
        this.fields.push(this.dseExtension);

        this.dseFax = new Field(this.langMng);
        this.dseFax.nameInRequest = 'fax';
        this.dseFax.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteMPortalCli_item_Clas_1699352150016661CjtoVis_11ICtjoVis_17',
            'Fax');
        this.dseFax.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_11ICtjoVis_17', ['Cliente']);
        this.dseFax.enabled = false;
        this.dseFax.mandatory = false;
        this.dseFax.dataType = Field.dtString;
        this.dseFax.maxLength = 20;
        this.dseFax.fieldSize = 15;
        this.dseFax.assignCSS();
        this.fields.push(this.dseFax);

    }

    /**
     * Initialize the action items
     */
    public initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1699352150016661AccOfer_10ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Cliente_act_AIIU_ClienteMPortalCli_item_Clas_1699352150016661AccOfer_10ElemAcc_1',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Cliente.name];
        accItem.targetClass = ModelConstants.Cliente.name;
        accItem.targetUI = ModelConstants.Cliente.siuutmodificarcli;
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['estado'] });
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['estado'] });
        this.actions.push(accItem);

    }

    public initializeFromContext(): void {
        this.context.exchangeInfo.selectedOidsClassName = this.className;
        this.context.exchangeInfo.selectedOids = [this.appGlobalInfo.getLoggedUserInfo().oid];
        super.initializeFromContext();
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
