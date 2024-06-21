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
import { GrupoPresupuestoPIUuGrupoPresupuestoPortalCliComponent } from './piu_grupopresupuestoportalcli.component';
import { LnPresupuestoMDIUuLnPresupuestoPortalCliComponent } from '../lnpresupuesto/mdiu_lnpresupuestoportalcli.component';
import { GrupoPresupuestoIIUuGrupoPresupuestoPortalCliComponent } from './iiu_grupopresupuestoportalcli.component';
import { SubtotalPresupuestoPIUuSubtotalComponent } from '../subtotalpresupuesto/piu_subtotal.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-grupopresupuesto-mdiu-grupopresupuestoportalcli',
    templateUrl: './mdiu_grupopresupuestoportalcli.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrupoPresupuestoMDIUuGrupoPresupuestoPortalCliComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: GrupoPresupuestoPIUuGrupoPresupuestoPortalCliComponent;

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
        this.idXML = 'Clas_1699352150016730UIMaDet_3';
        this.className = ModelConstants.Grupopresupuesto.name;
        this.iuName = ModelConstants.Grupopresupuesto.mdiuugrupopresupuestoportalcli;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_GrupoPresupuesto_mdiu_MDIU_GrupoPresupuestoPortalCli',
            'Grupos');
        // Create the details and assign the master detail container
        this.master = new GrupoPresupuestoPIUuGrupoPresupuestoPortalCliComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        // Expand details in the grid
        this.expandDetails = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016730UIMaDet_3Det_4',
            ['Cliente']) || this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016730UIMaDet_3Det_5',
            ['Cliente']) || this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016730UIMaDet_3Det_3',
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
        if (this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016730UIMaDet_3Det_4', ['Cliente'])) {

            const detail0 = new LnPresupuestoMDIUuLnPresupuestoPortalCliComponent(this.appGlobalInfo, this.util, this.changeDetectorRef,
                this.langMng, this.stdFun, this.condNavMng, this.usrFunc);
            detail0.masterDetailContainer = this;
            detail0.order = 0;
            detail0.iuId = this.iuId + 'D0' + masterOid;
            detail0.initializeComponents();
            detail0.title = this.langMng.translateText(
                'cls_GrupoPresupuesto_mdiu_MDIU_GrupoPresupuestoPortalCli_detail_Clas_1699352150016730UIMaDet_3Det_4',
                'Líneas');
            detail0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('LnPresupuesto',
                this.master.getContext(), null, 'GrupoPresupuesto', null, 'GrupoPresupuesto', 'Clas_1699352150016730FiltNav_4'));

            detailList.push(detail0);
        }
        if (this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016730UIMaDet_3Det_5', ['Cliente'])) {

            const detail1 = new GrupoPresupuestoIIUuGrupoPresupuestoPortalCliComponent(this.appGlobalInfo, this.util, this.changeDetectorRef,
                this.langMng, this.stdFun, this.condNavMng, this.usrFunc);
            detail1.masterDetailContainer = this;
            detail1.order = 1;
            detail1.iuId = this.iuId + 'D1' + masterOid;
            detail1.initializeComponents();
            detail1.title = this.langMng.translateText(
                'cls_GrupoPresupuesto_mdiu_MDIU_GrupoPresupuestoPortalCli_detail_Clas_1699352150016730UIMaDet_3Det_5',
                'Detalles');
            detail1.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('GrupoPresupuesto',
                this.master.getContext(), null, '', null, 'GrupoPresupuesto', ''));

            detailList.push(detail1);
        }
        if (this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016730UIMaDet_3Det_3', ['Cliente'])) {

            const detail2 = new SubtotalPresupuestoPIUuSubtotalComponent(this.appGlobalInfo, this.util, this.changeDetectorRef,
                this.langMng, this.stdFun, this.condNavMng, this.usrFunc);
            detail2.masterDetailContainer = this;
            detail2.order = 2;
            detail2.iuId = this.iuId + 'D2' + masterOid;
            detail2.initializeComponents();
            detail2.title = this.langMng.translateText(
                'cls_GrupoPresupuesto_mdiu_MDIU_GrupoPresupuestoPortalCli_detail_Clas_1699352150016730UIMaDet_3Det_3',
                'Totales');
            detail2.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('SubtotalPresupuesto',
                this.master.getContext(), null, 'GrupoPresupuesto', null, 'GrupoPresupuesto', ''));

            detailList.push(detail2);
        }

        return detailList;
    }
}
