import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { AbstractQueryIU } from '../common/queryIUElements';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { CheckListOTPIUuCheckListOTuMuPartePortalCComponent } from './piu_checklistot_m_parteportalc.component';
import { GrupoCompOTMDIUuGrupoCompOTuTREEuPortalClComponent } from '../grupocompot/mdiu_grupocompot_tree_portalcl.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-checklistot-mdiu-checklistot-tree-portalcl',
    templateUrl: './mdiu_checklistot_tree_portalcl.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckListOTMDIUuCheckListOTuTREEuPortalClComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: CheckListOTPIUuCheckListOTuMuPartePortalCComponent;

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
        this.idXML = 'Clas_1699352150016855UIMaDet_5';
        this.className = ModelConstants.Checklistot.name;
        this.iuName = ModelConstants.Checklistot.mdiuuchecklistotutreeuportalcl;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_CheckListOT_mdiu_MDIU_CheckListOT_TREE_PortalCl',
            'Checklist');
        // Create the details and assign the master detail container
        this.master = new CheckListOTPIUuCheckListOTuMuPartePortalCComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        // Expand details in the grid
        this.expandDetails = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016855UIMaDet_5Det_2',
            ['Cliente']);
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
        super.initializeComponents();
    }

    /**
     * Create the details to be shown in a row
     */
    public createDetails(masterOid: string): Array<(AbstractQueryIU | AbstractMDIU)> {

        const detailList: Array<(AbstractQueryIU | AbstractMDIU)> = [];
        if (this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016855UIMaDet_5Det_2', ['Cliente'])) {

            const detail0 = new GrupoCompOTMDIUuGrupoCompOTuTREEuPortalClComponent(this.appGlobalInfo, this.util, this.changeDetectorRef,
                this.langMng, this.stdFun, this.condNavMng, this.usrFunc);
            detail0.masterDetailContainer = this;
            detail0.order = 0;
            detail0.iuId = this.iuId + 'D0' + masterOid;
            detail0.initializeComponents();
            detail0.title = this.langMng.translateText(
                'cls_CheckListOT_mdiu_MDIU_CheckListOT_TREE_PortalCl_detail_Clas_1699352150016855UIMaDet_5Det_2',
                'Grupos');
            detail0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('GrupoCompOT',
                this.master.getContext(), null, 'CheckListOT', null, 'CheckListOT', ''));

            detailList.push(detail0);
        }

        return detailList;
    }
}
