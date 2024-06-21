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

export class InstalacionIIUuFactElectronicaComponent extends AbstractIIU {

    /** Display Set elements */
    public dseFacturaElectronicaAdmon: FieldDefinedSelection;
    public dseOficinaContable: Field;
    public dseOrganoGestor: Field;
    public dseUnidadTramitadora: Field;
    public dseOrganoProponente: Field;

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
        this.idXML = 'Clas_1699352150016405UIInst_3';
        this.className = ModelConstants.Instalacion.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Instalacion_iiu_IIU_FactElectronica',
            'Factura Electrónica');
        this.queryURL = '/api/InstalacionApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseFacturaElectronicaAdmon = new FieldDefinedSelection(this.langMng);
        this.dseFacturaElectronicaAdmon.nameInRequest = 'facturaelectronicaadmon';
        this.dseFacturaElectronicaAdmon.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DS_FactElectronica_item_Clas_1699352150016405CjtoVis_6ICtjoVis_1',
            'Factura Electrónica');
        this.dseFacturaElectronicaAdmon.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_6ICtjoVis_1', ['Cliente']);
        this.dseFacturaElectronicaAdmon.enabled = false;
        this.dseFacturaElectronicaAdmon.mandatory = false;
        this.dseFacturaElectronicaAdmon.dataType = Field.dtBool;
        this.dseFacturaElectronicaAdmon.options = DefinedSelections.DS_SI_NO;
        this.dseFacturaElectronicaAdmon.assignCSS();
        this.fields.push(this.dseFacturaElectronicaAdmon);

        this.dseOficinaContable = new Field(this.langMng);
        this.dseOficinaContable.nameInRequest = 'oficinacontable';
        this.dseOficinaContable.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DS_FactElectronica_item_Clas_1699352150016405CjtoVis_6ICtjoVis_2',
            'Oficina contable');
        this.dseOficinaContable.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_6ICtjoVis_2', ['Cliente']);
        this.dseOficinaContable.enabled = false;
        this.dseOficinaContable.mandatory = false;
        this.dseOficinaContable.dataType = Field.dtString;
        this.dseOficinaContable.maxLength = 300;
        this.dseOficinaContable.assignCSS();
        this.fields.push(this.dseOficinaContable);

        this.dseOrganoGestor = new Field(this.langMng);
        this.dseOrganoGestor.nameInRequest = 'organogestor';
        this.dseOrganoGestor.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DS_FactElectronica_item_Clas_1699352150016405CjtoVis_6ICtjoVis_3',
            'Órgano gestor');
        this.dseOrganoGestor.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_6ICtjoVis_3', ['Cliente']);
        this.dseOrganoGestor.enabled = false;
        this.dseOrganoGestor.mandatory = false;
        this.dseOrganoGestor.dataType = Field.dtString;
        this.dseOrganoGestor.maxLength = 300;
        this.dseOrganoGestor.assignCSS();
        this.fields.push(this.dseOrganoGestor);

        this.dseUnidadTramitadora = new Field(this.langMng);
        this.dseUnidadTramitadora.nameInRequest = 'unidadtramitadora';
        this.dseUnidadTramitadora.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DS_FactElectronica_item_Clas_1699352150016405CjtoVis_6ICtjoVis_4',
            'Unidad Tramitadora');
        this.dseUnidadTramitadora.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_6ICtjoVis_4', ['Cliente']);
        this.dseUnidadTramitadora.enabled = false;
        this.dseUnidadTramitadora.mandatory = false;
        this.dseUnidadTramitadora.dataType = Field.dtString;
        this.dseUnidadTramitadora.maxLength = 300;
        this.dseUnidadTramitadora.assignCSS();
        this.fields.push(this.dseUnidadTramitadora);

        this.dseOrganoProponente = new Field(this.langMng);
        this.dseOrganoProponente.nameInRequest = 'organoproponente';
        this.dseOrganoProponente.alias = this.langMng.translateText(
            'cls_Instalacion_ds_DS_FactElectronica_item_Clas_1699352150016405CjtoVis_6ICtjoVis_5',
            'Órgano proponente');
        this.dseOrganoProponente.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016405CjtoVis_6ICtjoVis_5', ['Cliente']);
        this.dseOrganoProponente.enabled = false;
        this.dseOrganoProponente.mandatory = false;
        this.dseOrganoProponente.dataType = Field.dtString;
        this.dseOrganoProponente.maxLength = 300;
        this.dseOrganoProponente.assignCSS();
        this.fields.push(this.dseOrganoProponente);

    }
}
