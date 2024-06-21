import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

export class DocumentoPIUuAlbaranComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsversiondoc = 'Versión';
    private readonly dsnombredocumento = 'Nombre';
    private readonly dsnotas = 'Notas';
    private readonly dsobservacions = 'Observaciones';

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
        this.idXML = 'Clas_1699352150016172UIPobCl_18';
        this.className = ModelConstants.Documento.name;
        this.iuName = 'PIU_Albaran';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Documento_piu_PIU_Albaran',
            'Documentos');
        this.queryURL = '/api/DocumentoApi/GetPopulationDynamic';
        this.paginationInClient = false;
        // Hide filter variables area depending on screen resolution
        this.hideFilters = this.appGlobalInfo.hideFilters;
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016172CjtoVis_2ICtjoVis_5';
        dsItem.name = 'versiondoc';
        dsItem.field = 'versiondoc';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_Documento_ds_DSP_Documento_item_Clas_1699352150016172CjtoVis_2ICtjoVis_5',
            this.dsversiondoc);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016172CjtoVis_2ICtjoVis_1';
        dsItem.name = 'nombredocumento';
        dsItem.field = 'nombredocumento';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Documento_ds_DSP_Documento_item_Clas_1699352150016172CjtoVis_2ICtjoVis_1',
            this.dsnombredocumento);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016172CjtoVis_2ICtjoVis_3';
        dsItem.name = 'notas';
        dsItem.field = 'notas';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 350;
        dsItem.alias = this.langMng.translateText(
            'cls_Documento_ds_DSP_Documento_item_Clas_1699352150016172CjtoVis_2ICtjoVis_3',
            this.dsnotas);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016172CjtoVis_2ICtjoVis_4';
        dsItem.name = 'observacions';
        dsItem.field = 'observacions';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Documento_ds_DSP_Documento_item_Clas_1699352150016172CjtoVis_2ICtjoVis_4',
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
        accItem.idXML = 'Clas_1699352150016172AccOfer_17ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Documento_act_A_Albaran_item_Clas_1699352150016172AccOfer_17ElemAcc_1',
            'Previsualizar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Cliente.name];
        accItem.targetClass = ModelConstants.Documento.name;
        accItem.targetUI = ModelConstants.Documento.siuuabrirnuevaventana;
        accItem.setOpenNewWindowProperties('abrirNuevaVentana', 'p_thisdocuadjunto_oid', 'poutfichero', 'poutnombrefichero');

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1699352150016172AccOfer_17ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Documento_act_A_Albaran_item_Clas_1699352150016172AccOfer_17ElemAcc_2',
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
     * Initialize the order criterias
     */
    public initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
