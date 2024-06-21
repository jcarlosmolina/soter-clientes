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

export class DocumentoPIUuParteTrabajoPortalCliComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsnombredocumento = 'Nombre';
    private readonly dsnotas = 'Notas';

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
        this.idXML = 'Clas_1699352150016172UIPobCl_29';
        this.className = ModelConstants.Documento.name;
        this.iuName = 'PIU_ParteTrabajoPortalCli';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Documento_piu_PIU_ParteTrabajoPortalCli',
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
        dsItem.idXML = 'Clas_1699352150016172CjtoVis_3ICtjoVis_1';
        dsItem.name = 'nombredocumento';
        dsItem.field = 'nombredocumento';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Documento_ds_DSP_DocumentoConNotas_item_Clas_1699352150016172CjtoVis_3ICtjoVis_1',
            this.dsnombredocumento);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016172CjtoVis_3ICtjoVis_2';
        dsItem.name = 'notas';
        dsItem.field = 'notas';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 350;
        dsItem.alias = this.langMng.translateText(
            'cls_Documento_ds_DSP_DocumentoConNotas_item_Clas_1699352150016172CjtoVis_3ICtjoVis_2',
            this.dsnotas);
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
        accItem.idXML = 'Clas_1699352150016172AccOfer_28ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Documento_act_A_ParteTrabajoPortalCli_item_Clas_1699352150016172AccOfer_28ElemAcc_3',
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
        accItem.idXML = 'Clas_1699352150016172AccOfer_28ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_Documento_act_A_ParteTrabajoPortalCli_item_Clas_1699352150016172AccOfer_28ElemAcc_4',
            'Descargar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Cliente.name];
        accItem.targetClass = ModelConstants.Documento.name;
        accItem.targetUI = ModelConstants.Documento.siuudescargar;
        accItem.setDirectDownloadProperties('descargar', 'p_thisdocuadjunto_oid', 'poutfichero', 'poutnombrefichero');

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1699352150016172AccOfer_28ElemAcc_7';
        accItem.alias = this.langMng.translateText(
            'cls_Documento_act_A_ParteTrabajoPortalCli_item_Clas_1699352150016172AccOfer_28ElemAcc_7',
            'Obtener firmado');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Cliente.name];
        accItem.targetClass = ModelConstants.Documento.name;
        accItem.targetUI = ModelConstants.Documento.siuutobtenerfirmado4parte;
        accItem.setShowInModalProperties('genericsiu',
            this.langMng.translateText(
            'cls_Documento_svc_TOBTENERFIRMADO4PARTE',
            'Obtener firmado'));

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
