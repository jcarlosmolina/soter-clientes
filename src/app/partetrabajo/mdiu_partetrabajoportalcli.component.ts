import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { ParteTrabajoIIUuParteTrabajoPortalCliComponent } from './iiu_partetrabajoportalcli.component';
import { LnOrdenTrabajoPIUuLnOrdenTrabajoPortalCliComponent } from '../lnordentrabajo/piu_lnordentrabajoportalcli.component';
import { CheckListOTMDIUuCheckListOTuTREEuPortalClComponent } from '../checklistot/mdiu_checklistot_tree_portalcl.component';
import { ParteTrabajoMDIUuParteTrabajouEconomicoComponent } from './mdiu_partetrabajo_economico.component';
import { DocumentoPIUuParteTrabajoPortalCliComponent } from '../documento/piu_partetrabajoportalcli.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-partetrabajo-mdiu-partetrabajoportalcli',
    templateUrl: './mdiu_partetrabajoportalcli.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParteTrabajoMDIUuParteTrabajoPortalCliComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: ParteTrabajoIIUuParteTrabajoPortalCliComponent;

    /** Details */
    /** Detail component 0 */
    public d0: LnOrdenTrabajoPIUuLnOrdenTrabajoPortalCliComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;
    /** Detail component 1 */
    public d1: CheckListOTMDIUuCheckListOTuTREEuPortalClComponent;
    /** Detail 1 visible or not */
    public d1Visible = true;
    /** Detail component 2 */
    public d2: ParteTrabajoMDIUuParteTrabajouEconomicoComponent;
    /** Detail 2 visible or not */
    public d2Visible = true;
    /** Detail component 3 */
    public d3: DocumentoPIUuParteTrabajoPortalCliComponent;
    /** Detail 3 visible or not */
    public d3Visible = true;

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
    constructor(public appGlobalInfo: AppGlobalInfo, public util: Util, public changeDetectorRef: ChangeDetectorRef,
                public langMng: LanguageMng, public stdFun: StandardFunctions,
                public condNavMng: ConditionalNavigationMng, public usrFunc: UserFunctions) {
        super(appGlobalInfo, util, changeDetectorRef);
        this.idXML = 'Clas_1699352150016581UIMaDet_5';
        this.className = ModelConstants.Partetrabajo.name;
        this.iuName = ModelConstants.Partetrabajo.mdiuupartetrabajoportalcli;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_ParteTrabajo_mdiu_MDIU_ParteTrabajoPortalCli',
            'Parte de trabajo');
        // Create the details and assign the master detail container
        this.master = new ParteTrabajoIIUuParteTrabajoPortalCliComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016581UIMaDet_5Det_11',
            ['Cliente']);
        if (this.d0Visible) {
            this.d0 = new LnOrdenTrabajoPIUuLnOrdenTrabajoPortalCliComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d0.masterDetailContainer = this;
            this.details.push(this.d0);
        }
        this.d1Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016581UIMaDet_5Det_12',
            ['Cliente']);
        if (this.d1Visible) {
            this.d1 = new CheckListOTMDIUuCheckListOTuTREEuPortalClComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d1.masterDetailContainer = this;
            this.details.push(this.d1);
        }
        this.d2Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016581UIMaDet_5Det_4',
            ['Cliente']);
        if (this.d2Visible) {
            this.d2 = new ParteTrabajoMDIUuParteTrabajouEconomicoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d2.masterDetailContainer = this;
            this.details.push(this.d2);
        }
        this.d3Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016581UIMaDet_5Det_13',
            ['Cliente']);
        if (this.d3Visible) {
            this.d3 = new DocumentoPIUuParteTrabajoPortalCliComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d3.masterDetailContainer = this;
            this.details.push(this.d3);
        }
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the master and details components
     */
    public initializeComponents(): void {
        this.master.iuId = this.iuId + 'M';
        this.master.initializeComponents();
        // Subscribe to the selection changed event
        this.master.selectionChanged.subscribe(data => this.processMasterSelectionChanged());
        // Details
        if (this.d0Visible) {
            this.d0.order = 0;
            this.d0.iuId = this.iuId + 'D0';
            this.d0.initializeComponents();
            this.d0.title = this.langMng.translateText(
                'cls_ParteTrabajo_mdiu_MDIU_ParteTrabajoPortalCli_detail_Clas_1699352150016581UIMaDet_5Det_11',
                'Líneas');
            this.d0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('LnOrdenTrabajo',
                this.master.getContext(), null, 'ParteTrabajo', null, 'ParteTrabajo', ''));
        }
        if (this.d1Visible) {
            this.d1.order = 1;
            this.d1.iuId = this.iuId + 'D1';
            this.d1.initializeComponents();
            this.d1.title = this.langMng.translateText(
                'cls_ParteTrabajo_mdiu_MDIU_ParteTrabajoPortalCli_detail_Clas_1699352150016581UIMaDet_5Det_12',
                'Checklists');
            this.d1.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('CheckListOT',
                this.master.getContext(), null, 'ParteTrabajo', null, 'ParteTrabajo', ''));
        }
        if (this.d2Visible) {
            this.d2.order = 2;
            this.d2.iuId = this.iuId + 'D2';
            this.d2.initializeComponents();
            this.d2.title = this.langMng.translateText(
                'cls_ParteTrabajo_mdiu_MDIU_ParteTrabajoPortalCli_detail_Clas_1699352150016581UIMaDet_5Det_4',
                'Datos económicos');
            this.d2.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('ParteTrabajo',
                this.master.getContext(), null, '', null, 'ParteTrabajo', ''));
        }
        if (this.d3Visible) {
            this.d3.order = 3;
            this.d3.iuId = this.iuId + 'D3';
            this.d3.initializeComponents();
            this.d3.title = this.langMng.translateText(
                'cls_ParteTrabajo_mdiu_MDIU_ParteTrabajoPortalCli_detail_Clas_1699352150016581UIMaDet_5Det_13',
                'Documentos');
            this.d3.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Documento',
                this.master.getContext(), null, 'ParteTrabajo', null, 'ParteTrabajo', ''));
        }
        super.initializeComponents();
    }

}
