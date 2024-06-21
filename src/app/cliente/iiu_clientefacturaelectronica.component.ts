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

export class ClienteIIUuClienteFacturaElectronicaComponent extends AbstractIIU {

    /** Display Set elements */
    public dseFactElectronicaAdministracion: FieldDefinedSelection;
    public dseEsAdminPublica: FieldDefinedSelection;
    public dseOficinaContableFactElectronica: Field;
    public dseOrganoGestorFactElectronica: Field;
    public dseUnidadTramitadFactElectronica: Field;
    public dseOrganoProponenFactElectronica: Field;
    public dseNombrePersonaF: Field;
    public dseApellido1PersonaF: Field;
    public dseApellido2PersonaF: Field;

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
        this.idXML = 'Clas_1699352150016661UIInst_5';
        this.className = ModelConstants.Cliente.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Cliente_iiu_IIU_ClienteFacturaElectronica',
            'Factura electrónica');
        this.queryURL = '/api/ClienteApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseFactElectronicaAdministracion = new FieldDefinedSelection(this.langMng);
        this.dseFactElectronicaAdministracion.nameInRequest = 'factelectronicaadministracion';
        this.dseFactElectronicaAdministracion.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteFacturaElectronica_item_Clas_1699352150016661CjtoVis_8ICtjoVis_1',
            'Quiere facturas electrónicas');
        this.dseFactElectronicaAdministracion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_8ICtjoVis_1', ['Cliente']);
        this.dseFactElectronicaAdministracion.enabled = false;
        this.dseFactElectronicaAdministracion.mandatory = false;
        this.dseFactElectronicaAdministracion.dataType = Field.dtBool;
        this.dseFactElectronicaAdministracion.options = DefinedSelections.DS_SI_NO;
        this.dseFactElectronicaAdministracion.assignCSS();
        this.fields.push(this.dseFactElectronicaAdministracion);

        this.dseEsAdminPublica = new FieldDefinedSelection(this.langMng);
        this.dseEsAdminPublica.nameInRequest = 'esadminpublica';
        this.dseEsAdminPublica.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteFacturaElectronica_item_Clas_1699352150016661CjtoVis_8ICtjoVis_9',
            'Es admin. pública');
        this.dseEsAdminPublica.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_8ICtjoVis_9', []);
        this.dseEsAdminPublica.enabled = false;
        this.dseEsAdminPublica.mandatory = false;
        this.dseEsAdminPublica.dataType = Field.dtBool;
        this.dseEsAdminPublica.options = DefinedSelections.DS_SI_NO;
        this.dseEsAdminPublica.assignCSS();
        this.fields.push(this.dseEsAdminPublica);

        this.dseOficinaContableFactElectronica = new Field(this.langMng);
        this.dseOficinaContableFactElectronica.nameInRequest = 'oficinacontablefactelectronica';
        this.dseOficinaContableFactElectronica.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteFacturaElectronica_item_Clas_1699352150016661CjtoVis_8ICtjoVis_2',
            'Oficina Contable');
        this.dseOficinaContableFactElectronica.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_8ICtjoVis_2', ['Cliente']);
        this.dseOficinaContableFactElectronica.enabled = false;
        this.dseOficinaContableFactElectronica.mandatory = false;
        this.dseOficinaContableFactElectronica.dataType = Field.dtString;
        this.dseOficinaContableFactElectronica.maxLength = 300;
        this.dseOficinaContableFactElectronica.assignCSS();
        this.fields.push(this.dseOficinaContableFactElectronica);

        this.dseOrganoGestorFactElectronica = new Field(this.langMng);
        this.dseOrganoGestorFactElectronica.nameInRequest = 'organogestorfactelectronica';
        this.dseOrganoGestorFactElectronica.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteFacturaElectronica_item_Clas_1699352150016661CjtoVis_8ICtjoVis_3',
            'Órgano Gestor');
        this.dseOrganoGestorFactElectronica.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_8ICtjoVis_3', ['Cliente']);
        this.dseOrganoGestorFactElectronica.enabled = false;
        this.dseOrganoGestorFactElectronica.mandatory = false;
        this.dseOrganoGestorFactElectronica.dataType = Field.dtString;
        this.dseOrganoGestorFactElectronica.maxLength = 300;
        this.dseOrganoGestorFactElectronica.assignCSS();
        this.fields.push(this.dseOrganoGestorFactElectronica);

        this.dseUnidadTramitadFactElectronica = new Field(this.langMng);
        this.dseUnidadTramitadFactElectronica.nameInRequest = 'unidadtramitadfactelectronica';
        this.dseUnidadTramitadFactElectronica.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteFacturaElectronica_item_Clas_1699352150016661CjtoVis_8ICtjoVis_4',
            'Unidad Tramitadora');
        this.dseUnidadTramitadFactElectronica.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_8ICtjoVis_4', ['Cliente']);
        this.dseUnidadTramitadFactElectronica.enabled = false;
        this.dseUnidadTramitadFactElectronica.mandatory = false;
        this.dseUnidadTramitadFactElectronica.dataType = Field.dtString;
        this.dseUnidadTramitadFactElectronica.maxLength = 300;
        this.dseUnidadTramitadFactElectronica.assignCSS();
        this.fields.push(this.dseUnidadTramitadFactElectronica);

        this.dseOrganoProponenFactElectronica = new Field(this.langMng);
        this.dseOrganoProponenFactElectronica.nameInRequest = 'organoproponenfactelectronica';
        this.dseOrganoProponenFactElectronica.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteFacturaElectronica_item_Clas_1699352150016661CjtoVis_8ICtjoVis_5',
            'Órgano Proponente');
        this.dseOrganoProponenFactElectronica.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_8ICtjoVis_5', ['Cliente']);
        this.dseOrganoProponenFactElectronica.enabled = false;
        this.dseOrganoProponenFactElectronica.mandatory = false;
        this.dseOrganoProponenFactElectronica.dataType = Field.dtString;
        this.dseOrganoProponenFactElectronica.maxLength = 300;
        this.dseOrganoProponenFactElectronica.assignCSS();
        this.fields.push(this.dseOrganoProponenFactElectronica);

        this.dseNombrePersonaF = new Field(this.langMng);
        this.dseNombrePersonaF.nameInRequest = 'nombrepersonaf';
        this.dseNombrePersonaF.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteFacturaElectronica_item_Clas_1699352150016661CjtoVis_8ICtjoVis_6',
            'Nombre');
        this.dseNombrePersonaF.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_8ICtjoVis_6', ['Cliente']);
        this.dseNombrePersonaF.enabled = false;
        this.dseNombrePersonaF.mandatory = false;
        this.dseNombrePersonaF.dataType = Field.dtString;
        this.dseNombrePersonaF.maxLength = 100;
        this.dseNombrePersonaF.assignCSS();
        this.fields.push(this.dseNombrePersonaF);

        this.dseApellido1PersonaF = new Field(this.langMng);
        this.dseApellido1PersonaF.nameInRequest = 'apellido1personaf';
        this.dseApellido1PersonaF.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteFacturaElectronica_item_Clas_1699352150016661CjtoVis_8ICtjoVis_7',
            'Apellido 1');
        this.dseApellido1PersonaF.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_8ICtjoVis_7', ['Cliente']);
        this.dseApellido1PersonaF.enabled = false;
        this.dseApellido1PersonaF.mandatory = false;
        this.dseApellido1PersonaF.dataType = Field.dtString;
        this.dseApellido1PersonaF.maxLength = 100;
        this.dseApellido1PersonaF.assignCSS();
        this.fields.push(this.dseApellido1PersonaF);

        this.dseApellido2PersonaF = new Field(this.langMng);
        this.dseApellido2PersonaF.nameInRequest = 'apellido2personaf';
        this.dseApellido2PersonaF.alias = this.langMng.translateText(
            'cls_Cliente_ds_DS_ClienteFacturaElectronica_item_Clas_1699352150016661CjtoVis_8ICtjoVis_8',
            'Apellido 2');
        this.dseApellido2PersonaF.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_8ICtjoVis_8', ['Cliente']);
        this.dseApellido2PersonaF.enabled = false;
        this.dseApellido2PersonaF.mandatory = false;
        this.dseApellido2PersonaF.dataType = Field.dtString;
        this.dseApellido2PersonaF.maxLength = 100;
        this.dseApellido2PersonaF.assignCSS();
        this.fields.push(this.dseApellido2PersonaF);

    }
}
