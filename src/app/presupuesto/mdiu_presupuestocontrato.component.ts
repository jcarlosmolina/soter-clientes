import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { PresupuestoIIUuPresupuestoComponent } from './iiu_presupuesto.component';
import { GrupoPresupuestoMDIUuGrupoPresupuestoComponent } from '../grupopresupuesto/mdiu_grupopresupuesto.component';
import { SubtotalPresupuestoPIUuSubtotalComponent } from '../subtotalpresupuesto/piu_subtotal.component';
import { PresupuestoPIUuPresupuestoVersionesComponent } from './piu_presupuestoversiones.component';
import { DocumentoPIUuPresupuestoComponent } from '../documento/piu_presupuesto.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-presupuesto-mdiu-presupuestocontrato',
    templateUrl: './mdiu_presupuestocontrato.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresupuestoMDIUuPresupuestoContratoComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: PresupuestoIIUuPresupuestoComponent;

    /** Details */
    /** Detail component 0 */
    public d0: GrupoPresupuestoMDIUuGrupoPresupuestoComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;
    /** Detail component 1 */
    public d1: SubtotalPresupuestoPIUuSubtotalComponent;
    /** Detail 1 visible or not */
    public d1Visible = true;
    /** Detail component 2 */
    public d2: PresupuestoPIUuPresupuestoVersionesComponent;
    /** Detail 2 visible or not */
    public d2Visible = true;
    /** Detail component 3 */
    public d3: DocumentoPIUuPresupuestoComponent;
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
        this.idXML = 'Clas_1699352150016913UIMaDet_3';
        this.className = ModelConstants.Presupuesto.name;
        this.iuName = ModelConstants.Presupuesto.mdiuupresupuestocontrato;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Presupuesto_mdiu_MDIU_PresupuestoContrato',
            'Presupuesto');
        // Create the details and assign the master detail container
        this.master = new PresupuestoIIUuPresupuestoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016913UIMaDet_3Det_1',
            ['Cliente']);
        if (this.d0Visible) {
            this.d0 = new GrupoPresupuestoMDIUuGrupoPresupuestoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d0.masterDetailContainer = this;
            this.details.push(this.d0);
        }
        this.d1Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016913UIMaDet_3Det_2',
            ['Cliente']);
        if (this.d1Visible) {
            this.d1 = new SubtotalPresupuestoPIUuSubtotalComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d1.masterDetailContainer = this;
            this.details.push(this.d1);
        }
        this.d2Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016913UIMaDet_3Det_3',
            ['Cliente']);
        if (this.d2Visible) {
            this.d2 = new PresupuestoPIUuPresupuestoVersionesComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d2.masterDetailContainer = this;
            this.details.push(this.d2);
        }
        this.d3Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016913UIMaDet_3Det_4',
            ['Cliente']);
        if (this.d3Visible) {
            this.d3 = new DocumentoPIUuPresupuestoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
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
                'cls_Presupuesto_mdiu_MDIU_PresupuestoContrato_detail_Clas_1699352150016913UIMaDet_3Det_1',
                'Grupos');
            this.d0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('GrupoPresupuesto',
                this.master.getContext(), null, 'Presupuesto', null, 'Presupuesto', ''));
        }
        if (this.d1Visible) {
            this.d1.order = 1;
            this.d1.iuId = this.iuId + 'D1';
            this.d1.initializeComponents();
            this.d1.title = this.langMng.translateText(
                'cls_Presupuesto_mdiu_MDIU_PresupuestoContrato_detail_Clas_1699352150016913UIMaDet_3Det_2',
                'Totales');
            this.d1.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('SubtotalPresupuesto',
                this.master.getContext(), null, 'Presupuesto', null, 'Presupuesto', ''));
        }
        if (this.d2Visible) {
            this.d2.order = 2;
            this.d2.iuId = this.iuId + 'D2';
            this.d2.initializeComponents();
            this.d2.title = this.langMng.translateText(
                'cls_Presupuesto_mdiu_MDIU_PresupuestoContrato_detail_Clas_1699352150016913UIMaDet_3Det_3',
                'Versiones');
            this.d2.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Presupuesto',
                this.master.getContext(), null, 'Cliente.Presupuestos', null, 'Presupuesto', 'Clas_1699352150016913FiltNav_23'));
        }
        if (this.d3Visible) {
            this.d3.order = 3;
            this.d3.iuId = this.iuId + 'D3';
            this.d3.initializeComponents();
            this.d3.title = this.langMng.translateText(
                'cls_Presupuesto_mdiu_MDIU_PresupuestoContrato_detail_Clas_1699352150016913UIMaDet_3Det_4',
                'Documentos');
            this.d3.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Documento',
                this.master.getContext(), null, 'Presupuesto', null, 'Presupuesto', 'Clas_1699352150016913FiltNav_48'));
        }
        super.initializeComponents();
    }

}
