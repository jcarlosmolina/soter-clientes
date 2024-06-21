import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { ParteTrabajoIIUuParteTrabajouTotalesComponent } from './iiu_partetrabajo_totales.component';
import { SubtotalOrdenTrabajoPIUuSubtotalOrdenTrabajoOrdenComponent } from '../subtotalordentrabajo/piu_subtotalordentrabajoorden.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-partetrabajo-mdiu-partetrabajo-economico',
    templateUrl: './mdiu_partetrabajo_economico.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParteTrabajoMDIUuParteTrabajouEconomicoComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: ParteTrabajoIIUuParteTrabajouTotalesComponent;

    /** Details */
    /** Detail component 0 */
    public d0: SubtotalOrdenTrabajoPIUuSubtotalOrdenTrabajoOrdenComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;

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
        this.idXML = 'Clas_1699352150016581UIMaDet_1';
        this.className = ModelConstants.Partetrabajo.name;
        this.iuName = ModelConstants.Partetrabajo.mdiuupartetrabajoueconomico;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_ParteTrabajo_mdiu_MDIU_ParteTrabajo_Economico',
            'Datos económicos');
        // Create the details and assign the master detail container
        this.master = new ParteTrabajoIIUuParteTrabajouTotalesComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016581UIMaDet_1Det_1',
            ['Cliente']);
        if (this.d0Visible) {
            this.d0 = new SubtotalOrdenTrabajoPIUuSubtotalOrdenTrabajoOrdenComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d0.masterDetailContainer = this;
            this.details.push(this.d0);
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
                'cls_ParteTrabajo_mdiu_MDIU_ParteTrabajo_Economico_detail_Clas_1699352150016581UIMaDet_1Det_1',
                'Subtotales');
            this.d0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('SubtotalOrdenTrabajo',
                this.master.getContext(), null, 'ParteTrabajo', null, 'ParteTrabajo', ''));
        }
        super.initializeComponents();
    }

}
