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
import { LnPresupuestoPIUuLnPresupuestoComponent } from './piu_lnpresupuesto.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-lnpresupuesto-mdiu-lnpresupuesto',
    templateUrl: './mdiu_lnpresupuesto.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LnPresupuestoMDIUuLnPresupuestoComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: LnPresupuestoPIUuLnPresupuestoComponent;

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
        this.idXML = 'Clas_1699352150016080UIMaDet_1';
        this.className = ModelConstants.Lnpresupuesto.name;
        this.iuName = ModelConstants.Lnpresupuesto.mdiuulnpresupuesto;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_LnPresupuesto_mdiu_MDIU_LnPresupuesto',
            'Líneas');
        // Create the details and assign the master detail container
        this.master = new LnPresupuestoPIUuLnPresupuestoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        // Expand details in the grid
        this.expandDetails = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016080UIMaDet_1Det_1',
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
        if (this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016080UIMaDet_1Det_1', ['Cliente'])) {

            const detail0 = new LnPresupuestoPIUuLnPresupuestoComponent(this.appGlobalInfo, this.util, this.changeDetectorRef,
                this.langMng, this.stdFun, this.condNavMng, this.usrFunc);
            detail0.masterDetailContainer = this;
            detail0.order = 0;
            detail0.iuId = this.iuId + 'D0' + masterOid;
            detail0.initializeComponents();
            detail0.title = this.langMng.translateText(
                'cls_LnPresupuesto_mdiu_MDIU_LnPresupuesto_detail_Clas_1699352150016080UIMaDet_1Det_1',
                'Líneas');
            detail0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('LnPresupuesto',
                this.master.getContext(), null, 'Kit', null, 'LnPresupuesto', ''));

            detailList.push(detail0);
        }

        return detailList;
    }
}
