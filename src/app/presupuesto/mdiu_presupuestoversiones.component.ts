import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { PresupuestoIIUuPresupuestoVersionesComponent } from './iiu_presupuestoversiones.component';
import { GrupoPresupuestoMDIUuGrupoPresupuestoVersionesComponent } from '../grupopresupuesto/mdiu_grupopresupuestoversiones.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-presupuesto-mdiu-presupuestoversiones',
    templateUrl: './mdiu_presupuestoversiones.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresupuestoMDIUuPresupuestoVersionesComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: PresupuestoIIUuPresupuestoVersionesComponent;

    /** Details */
    /** Detail component 0 */
    public d0: GrupoPresupuestoMDIUuGrupoPresupuestoVersionesComponent;
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
        this.idXML = 'Clas_1699352150016913UIMaDet_2';
        this.className = ModelConstants.Presupuesto.name;
        this.iuName = ModelConstants.Presupuesto.mdiuupresupuestoversiones;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Presupuesto_mdiu_MDIU_PresupuestoVersiones',
            'Presupuesto');
        // Create the details and assign the master detail container
        this.master = new PresupuestoIIUuPresupuestoVersionesComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016913UIMaDet_2Det_1',
            ['Cliente']);
        if (this.d0Visible) {
            this.d0 = new GrupoPresupuestoMDIUuGrupoPresupuestoVersionesComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
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
                'cls_Presupuesto_mdiu_MDIU_PresupuestoVersiones_detail_Clas_1699352150016913UIMaDet_2Det_1',
                'Grupos');
            this.d0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('GrupoPresupuesto',
                this.master.getContext(), null, 'Presupuesto', null, 'Presupuesto', ''));
        }
        super.initializeComponents();
    }

}
