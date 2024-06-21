import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { OrdenTrabajoIIUuOrdenTrabajoComponent } from './iiu_ordentrabajo.component';
import { LnOrdenTrabajoPIUuLnOrdenTrabajoOrdenComponent } from '../lnordentrabajo/piu_lnordentrabajoorden.component';
import { CheckListOTMDIUuCheckListOTuTREEuOrdenComponent } from '../checklistot/mdiu_checklistot_tree_orden.component';
import { ParteTrabajoPIUuParteTrabajouDuOrdenComponent } from '../partetrabajo/piu_partetrabajo_d_orden.component';
import { OrdenTrabajoMDIUuOrdenTrabajoEconimicosComponent } from './mdiu_ordentrabajoeconimicos.component';
import { SistemaIIUuSistemauDetOrdenComponent } from '../sistema/iiu_sistema_detorden.component';
import { OrdenTrabajoIIUuOrdenTrabajoProyectosComponent } from './iiu_ordentrabajoproyectos.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-ordentrabajo-mdiu-ordentrabajo',
    templateUrl: './mdiu_ordentrabajo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdenTrabajoMDIUuOrdenTrabajoComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: OrdenTrabajoIIUuOrdenTrabajoComponent;

    /** Details */
    /** Detail component 0 */
    public d0: LnOrdenTrabajoPIUuLnOrdenTrabajoOrdenComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;
    /** Detail component 1 */
    public d1: CheckListOTMDIUuCheckListOTuTREEuOrdenComponent;
    /** Detail 1 visible or not */
    public d1Visible = true;
    /** Detail component 2 */
    public d2: ParteTrabajoPIUuParteTrabajouDuOrdenComponent;
    /** Detail 2 visible or not */
    public d2Visible = true;
    /** Detail component 3 */
    public d3: OrdenTrabajoMDIUuOrdenTrabajoEconimicosComponent;
    /** Detail 3 visible or not */
    public d3Visible = true;
    /** Detail component 4 */
    public d4: SistemaIIUuSistemauDetOrdenComponent;
    /** Detail 4 visible or not */
    public d4Visible = true;
    /** Detail component 5 */
    public d5: OrdenTrabajoIIUuOrdenTrabajoProyectosComponent;
    /** Detail 5 visible or not */
    public d5Visible = true;

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
        this.idXML = 'Clas_1699352150016871UIMaDet_1';
        this.className = ModelConstants.Ordentrabajo.name;
        this.iuName = ModelConstants.Ordentrabajo.mdiuuordentrabajo;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_OrdenTrabajo_mdiu_MDIU_OrdenTrabajo',
            'Orden de trabajo');
        // Create the details and assign the master detail container
        this.master = new OrdenTrabajoIIUuOrdenTrabajoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016871UIMaDet_1Det_1',
            ['Cliente']);
        if (this.d0Visible) {
            this.d0 = new LnOrdenTrabajoPIUuLnOrdenTrabajoOrdenComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d0.masterDetailContainer = this;
            this.details.push(this.d0);
        }
        this.d1Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016871UIMaDet_1Det_2',
            ['Cliente']);
        if (this.d1Visible) {
            this.d1 = new CheckListOTMDIUuCheckListOTuTREEuOrdenComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d1.masterDetailContainer = this;
            this.details.push(this.d1);
        }
        this.d2Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016871UIMaDet_1Det_3',
            ['Cliente']);
        if (this.d2Visible) {
            this.d2 = new ParteTrabajoPIUuParteTrabajouDuOrdenComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d2.masterDetailContainer = this;
            this.details.push(this.d2);
        }
        this.d3Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016871UIMaDet_1Det_5',
            ['Cliente']);
        if (this.d3Visible) {
            this.d3 = new OrdenTrabajoMDIUuOrdenTrabajoEconimicosComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d3.masterDetailContainer = this;
            this.details.push(this.d3);
        }
        this.d4Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016871UIMaDet_1Det_6',
            ['Cliente']);
        if (this.d4Visible) {
            this.d4 = new SistemaIIUuSistemauDetOrdenComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d4.masterDetailContainer = this;
            this.details.push(this.d4);
        }
        this.d5Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016871UIMaDet_1Det_7',
            ['Cliente']);
        if (this.d5Visible) {
            this.d5 = new OrdenTrabajoIIUuOrdenTrabajoProyectosComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d5.masterDetailContainer = this;
            this.details.push(this.d5);
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
                'cls_OrdenTrabajo_mdiu_MDIU_OrdenTrabajo_detail_Clas_1699352150016871UIMaDet_1Det_1',
                'Líneas');
            this.d0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('LnOrdenTrabajo',
                this.master.getContext(), null, 'OrdenTrabajoPropia', null, 'OrdenTrabajo', ''));
        }
        if (this.d1Visible) {
            this.d1.order = 1;
            this.d1.iuId = this.iuId + 'D1';
            this.d1.initializeComponents();
            this.d1.title = this.langMng.translateText(
                'cls_OrdenTrabajo_mdiu_MDIU_OrdenTrabajo_detail_Clas_1699352150016871UIMaDet_1Det_2',
                'Checklists');
            this.d1.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('CheckListOT',
                this.master.getContext(), null, 'OrdenTrabajo', null, 'OrdenTrabajo', ''));
        }
        if (this.d2Visible) {
            this.d2.order = 2;
            this.d2.iuId = this.iuId + 'D2';
            this.d2.initializeComponents();
            this.d2.title = this.langMng.translateText(
                'cls_OrdenTrabajo_mdiu_MDIU_OrdenTrabajo_detail_Clas_1699352150016871UIMaDet_1Det_3',
                'Partes de trabajo');
            this.d2.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('ParteTrabajo',
                this.master.getContext(), null, 'OrdenTrabajo', null, 'OrdenTrabajo', ''));
        }
        if (this.d3Visible) {
            this.d3.order = 3;
            this.d3.iuId = this.iuId + 'D3';
            this.d3.initializeComponents();
            this.d3.title = this.langMng.translateText(
                'cls_OrdenTrabajo_mdiu_MDIU_OrdenTrabajo_detail_Clas_1699352150016871UIMaDet_1Det_5',
                'Datos económicos');
            this.d3.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('OrdenTrabajo',
                this.master.getContext(), null, '', null, 'OrdenTrabajo', ''));
        }
        if (this.d4Visible) {
            this.d4.order = 4;
            this.d4.iuId = this.iuId + 'D4';
            this.d4.initializeComponents();
            this.d4.title = this.langMng.translateText(
                'cls_OrdenTrabajo_mdiu_MDIU_OrdenTrabajo_detail_Clas_1699352150016871UIMaDet_1Det_6',
                'Sistema');
            this.d4.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Sistema',
                this.master.getContext(), null, 'OrdenesTrabajo', null, 'OrdenTrabajo', ''));
        }
        if (this.d5Visible) {
            this.d5.order = 5;
            this.d5.iuId = this.iuId + 'D5';
            this.d5.initializeComponents();
            this.d5.title = this.langMng.translateText(
                'cls_OrdenTrabajo_mdiu_MDIU_OrdenTrabajo_detail_Clas_1699352150016871UIMaDet_1Det_7',
                'Proyecto');
            this.d5.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('OrdenTrabajo',
                this.master.getContext(), null, '', null, 'OrdenTrabajo', ''));
        }
        super.initializeComponents();
    }

}
