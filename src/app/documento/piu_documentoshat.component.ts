import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DocumentoFilterFuDocumento} from './filters/documentofilterfudocumento';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-documento-piu-documentoshat',
    templateUrl: './piu_documentoshat.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentoPIUuDocumentosHATComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsnombredocumento = 'Nombre';
    private readonly dstipo = 'Tipo';
    private readonly dsversiondoc = 'Versión';
    private readonly dsidentificadororigen = 'Origen';
    private readonly dsreferencia = 'Referencia';
    private readonly dsfechadocumento = 'Fecha';
    private readonly dsfechacarga = 'Fecha carga';
    private readonly dsnotas = 'Notas';
    private readonly dsobservacions = 'Observaciones';

    /** Filters */
    public f0: DocumentoFilterFuDocumento;

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
        super(appGlobalInfo, util, changeDetectorRef, langMng, condNavMng);
        this.idXML = 'Clas_1699352150016172UIPobCl_13';
        this.className = ModelConstants.Documento.name;
        this.iuName = ModelConstants.Documento.piuudocumentoshat;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Documento_piu_PIU_DocumentosHAT',
            'Documentos');
        this.f0 = new DocumentoFilterFuDocumento(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun, usrFunc);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/DocumentoApi/GetPopulationDynamic';
        this.paginationInClient = false;
        // Hide filter variables area depending on screen resolution
        this.hideFilters = this.appGlobalInfo.hideFilters;
    }

    /**
     * It is the main component. Process the initial actions
     */
    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016172CjtoVis_4ICtjoVis_1';
        dsItem.name = 'nombredocumento';
        dsItem.field = 'nombredocumento';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Documento_ds_DS_DocumentoHAT_item_Clas_1699352150016172CjtoVis_4ICtjoVis_1',
            this.dsnombredocumento);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016172CjtoVis_4ICtjoVis_2';
        dsItem.name = 'tipo';
        dsItem.field = 'tipo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_Documento_ds_DS_DocumentoHAT_item_Clas_1699352150016172CjtoVis_4ICtjoVis_2',
            this.dstipo);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016172CjtoVis_4ICtjoVis_3';
        dsItem.name = 'versiondoc';
        dsItem.field = 'versiondoc';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_Documento_ds_DS_DocumentoHAT_item_Clas_1699352150016172CjtoVis_4ICtjoVis_3',
            this.dsversiondoc);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016172CjtoVis_4ICtjoVis_4';
        dsItem.name = 'identificadororigen';
        dsItem.field = 'identificadororigen';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Documento_ds_DS_DocumentoHAT_item_Clas_1699352150016172CjtoVis_4ICtjoVis_4',
            this.dsidentificadororigen);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016172CjtoVis_4ICtjoVis_5';
        dsItem.name = 'referencia';
        dsItem.field = 'referencia';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Documento_ds_DS_DocumentoHAT_item_Clas_1699352150016172CjtoVis_4ICtjoVis_5',
            this.dsreferencia);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016172CjtoVis_4ICtjoVis_6';
        dsItem.name = 'fechadocumento';
        dsItem.field = 'fechadocumento';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_Documento_ds_DS_DocumentoHAT_item_Clas_1699352150016172CjtoVis_4ICtjoVis_6',
            this.dsfechadocumento);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016172CjtoVis_4ICtjoVis_7';
        dsItem.name = 'fechacarga';
        dsItem.field = 'fechacarga';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_Documento_ds_DS_DocumentoHAT_item_Clas_1699352150016172CjtoVis_4ICtjoVis_7',
            this.dsfechacarga);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016172CjtoVis_4ICtjoVis_8';
        dsItem.name = 'notas';
        dsItem.field = 'notas';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 350;
        dsItem.alias = this.langMng.translateText(
            'cls_Documento_ds_DS_DocumentoHAT_item_Clas_1699352150016172CjtoVis_4ICtjoVis_8',
            this.dsnotas);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016172CjtoVis_4ICtjoVis_9';
        dsItem.name = 'observacions';
        dsItem.field = 'observacions';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Documento_ds_DS_DocumentoHAT_item_Clas_1699352150016172CjtoVis_4ICtjoVis_9',
            this.dsobservacions);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1699352150016172AccOfer_12ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Documento_act_A_DocumentoPIUHAT_item_Clas_1699352150016172AccOfer_12ElemAcc_1',
            'Modificar notas');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Cliente.name];
        accItem.targetClass = ModelConstants.Documento.name;
        accItem.targetUI = ModelConstants.Documento.siuuedituinstance;
        accItem.setShowInModalProperties('imes-documento-siu-edit-instance',
            this.langMng.translateText(
            'cls_Documento_svc_edit_instance',
            'Modificar notas'));

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1699352150016172AccOfer_12ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Documento_act_A_DocumentoPIUHAT_item_Clas_1699352150016172AccOfer_12ElemAcc_2',
            'Previsualizar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Cliente.name];
        accItem.targetClass = ModelConstants.Documento.name;
        accItem.targetUI = ModelConstants.Documento.siuuabrirnuevaventana;
        accItem.setOpenNewWindowProperties('abrirNuevaVentana', 'p_thisdocuadjunto_oid', 'poutfichero', 'poutnombrefichero');

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1699352150016172AccOfer_12ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Documento_act_A_DocumentoPIUHAT_item_Clas_1699352150016172AccOfer_12ElemAcc_3',
            'Descargar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Cliente.name];
        accItem.targetClass = ModelConstants.Documento.name;
        accItem.targetUI = ModelConstants.Documento.siuudescargar;
        accItem.setDirectDownloadProperties('descargar', 'p_thisdocuadjunto_oid', 'poutfichero', 'poutnombrefichero');

        this.actions.push(accItem);

    }

    /**
     * Initialize the navigation items
     */
    public initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1699352150016172NavOfer_1ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_Documento_nav_N_DocumentoPIUHAT_item_Clas_1699352150016172NavOfer_1ElemNav_1',
            'Versiones Anteriores');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Cliente.name];
        navItem.targetClass = ModelConstants.Documento.name;
        navItem.targetUI = ModelConstants.Documento.piuudocumentoversant;
        navItem.rolePath = 'VersionesSiguientes';
        this.navigations.push(navItem);

    }

    /**
     * Initialize the order criterias
     */
    public initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
