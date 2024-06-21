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
import { PresupuestoIIUuPresupuestoDatosContablesComponent } from './iiu_presupuestodatoscontables.component';
import { PresupuestoPIUuPresupuestoVersionesComponent } from './piu_presupuestoversiones.component';
import { DocumentoPIUuPresupuestoComponent } from '../documento/piu_presupuesto.component';
import { ContratoPIUuContratoPresupuestoComponent } from '../contrato/piu_contratopresupuesto.component';
import { OrdenTrabajoPIUuOrdenTrabajo4PresupuestoComponent } from '../ordentrabajo/piu_ordentrabajo4presupuesto.component';
import { AlbaranVentaPIUuAlbaranVentauDuPresuComponent } from '../albaranventa/piu_albaranventa_d_presu.component';
import { FacturaVentaPIUuFacturaVentauDuPresupComponent } from '../facturaventa/piu_facturaventa_d_presup.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-presupuesto-mdiu-presupuesto',
    templateUrl: './mdiu_presupuesto.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresupuestoMDIUuPresupuestoComponent extends AbstractMDIU implements OnInit {

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
    public d2: PresupuestoIIUuPresupuestoDatosContablesComponent;
    /** Detail 2 visible or not */
    public d2Visible = true;
    /** Detail component 3 */
    public d3: PresupuestoPIUuPresupuestoVersionesComponent;
    /** Detail 3 visible or not */
    public d3Visible = true;
    /** Detail component 4 */
    public d4: DocumentoPIUuPresupuestoComponent;
    /** Detail 4 visible or not */
    public d4Visible = true;
    /** Detail component 5 */
    public d5: ContratoPIUuContratoPresupuestoComponent;
    /** Detail 5 visible or not */
    public d5Visible = true;
    /** Detail component 6 */
    public d6: OrdenTrabajoPIUuOrdenTrabajo4PresupuestoComponent;
    /** Detail 6 visible or not */
    public d6Visible = true;
    /** Detail component 7 */
    public d7: AlbaranVentaPIUuAlbaranVentauDuPresuComponent;
    /** Detail 7 visible or not */
    public d7Visible = true;
    /** Detail component 8 */
    public d8: FacturaVentaPIUuFacturaVentauDuPresupComponent;
    /** Detail 8 visible or not */
    public d8Visible = true;

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
        this.idXML = 'Clas_1699352150016913UIMaDet_1';
        this.className = ModelConstants.Presupuesto.name;
        this.iuName = ModelConstants.Presupuesto.mdiuupresupuesto;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Presupuesto_mdiu_MDIU_Presupuesto',
            'Presupuesto');
        // Create the details and assign the master detail container
        this.master = new PresupuestoIIUuPresupuestoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016913UIMaDet_1Det_1',
            ['Cliente']);
        if (this.d0Visible) {
            this.d0 = new GrupoPresupuestoMDIUuGrupoPresupuestoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d0.masterDetailContainer = this;
            this.details.push(this.d0);
        }
        this.d1Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016913UIMaDet_1Det_2',
            ['Cliente']);
        if (this.d1Visible) {
            this.d1 = new SubtotalPresupuestoPIUuSubtotalComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d1.masterDetailContainer = this;
            this.details.push(this.d1);
        }
        this.d2Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016913UIMaDet_1Det_3',
            ['Cliente']);
        if (this.d2Visible) {
            this.d2 = new PresupuestoIIUuPresupuestoDatosContablesComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d2.masterDetailContainer = this;
            this.details.push(this.d2);
        }
        this.d3Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016913UIMaDet_1Det_5',
            ['Cliente']);
        if (this.d3Visible) {
            this.d3 = new PresupuestoPIUuPresupuestoVersionesComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d3.masterDetailContainer = this;
            this.details.push(this.d3);
        }
        this.d4Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016913UIMaDet_1Det_6',
            ['Cliente']);
        if (this.d4Visible) {
            this.d4 = new DocumentoPIUuPresupuestoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d4.masterDetailContainer = this;
            this.details.push(this.d4);
        }
        this.d5Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016913UIMaDet_1Det_7',
            ['Cliente']);
        if (this.d5Visible) {
            this.d5 = new ContratoPIUuContratoPresupuestoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d5.masterDetailContainer = this;
            this.details.push(this.d5);
        }
        this.d6Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016913UIMaDet_1Det_12',
            ['Cliente']);
        if (this.d6Visible) {
            this.d6 = new OrdenTrabajoPIUuOrdenTrabajo4PresupuestoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d6.masterDetailContainer = this;
            this.details.push(this.d6);
        }
        this.d7Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016913UIMaDet_1Det_10',
            ['Cliente']);
        if (this.d7Visible) {
            this.d7 = new AlbaranVentaPIUuAlbaranVentauDuPresuComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d7.masterDetailContainer = this;
            this.details.push(this.d7);
        }
        this.d8Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016913UIMaDet_1Det_11',
            ['Cliente']);
        if (this.d8Visible) {
            this.d8 = new FacturaVentaPIUuFacturaVentauDuPresupComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d8.masterDetailContainer = this;
            this.details.push(this.d8);
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
                'cls_Presupuesto_mdiu_MDIU_Presupuesto_detail_Clas_1699352150016913UIMaDet_1Det_1',
                'Líneas');
            this.d0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('GrupoPresupuesto',
                this.master.getContext(), null, 'Presupuesto', null, 'Presupuesto', ''));
        }
        if (this.d1Visible) {
            this.d1.order = 1;
            this.d1.iuId = this.iuId + 'D1';
            this.d1.initializeComponents();
            this.d1.title = this.langMng.translateText(
                'cls_Presupuesto_mdiu_MDIU_Presupuesto_detail_Clas_1699352150016913UIMaDet_1Det_2',
                'Totales');
            this.d1.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('SubtotalPresupuesto',
                this.master.getContext(), null, 'Presupuesto', null, 'Presupuesto', ''));
        }
        if (this.d2Visible) {
            this.d2.order = 2;
            this.d2.iuId = this.iuId + 'D2';
            this.d2.initializeComponents();
            this.d2.title = this.langMng.translateText(
                'cls_Presupuesto_mdiu_MDIU_Presupuesto_detail_Clas_1699352150016913UIMaDet_1Det_3',
                'Datos contables');
            this.d2.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Presupuesto',
                this.master.getContext(), null, '', null, 'Presupuesto', ''));
        }
        if (this.d3Visible) {
            this.d3.order = 3;
            this.d3.iuId = this.iuId + 'D3';
            this.d3.initializeComponents();
            this.d3.title = this.langMng.translateText(
                'cls_Presupuesto_mdiu_MDIU_Presupuesto_detail_Clas_1699352150016913UIMaDet_1Det_5',
                'Versiones');
            this.d3.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Presupuesto',
                this.master.getContext(), null, 'Cliente.Presupuestos', null, 'Presupuesto', 'Clas_1699352150016913FiltNav_21'));
        }
        if (this.d4Visible) {
            this.d4.order = 4;
            this.d4.iuId = this.iuId + 'D4';
            this.d4.initializeComponents();
            this.d4.title = this.langMng.translateText(
                'cls_Presupuesto_mdiu_MDIU_Presupuesto_detail_Clas_1699352150016913UIMaDet_1Det_6',
                'Documentos');
            this.d4.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Documento',
                this.master.getContext(), null, 'Presupuesto', null, 'Presupuesto', 'Clas_1699352150016913FiltNav_22'));
        }
        if (this.d5Visible) {
            this.d5.order = 5;
            this.d5.iuId = this.iuId + 'D5';
            this.d5.initializeComponents();
            this.d5.title = this.langMng.translateText(
                'cls_Presupuesto_mdiu_MDIU_Presupuesto_detail_Clas_1699352150016913UIMaDet_1Det_7',
                'Contratos');
            this.d5.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Contrato',
                this.master.getContext(), null, 'Presupuesto', null, 'Presupuesto', ''));
        }
        if (this.d6Visible) {
            this.d6.order = 6;
            this.d6.iuId = this.iuId + 'D6';
            this.d6.initializeComponents();
            this.d6.title = this.langMng.translateText(
                'cls_Presupuesto_mdiu_MDIU_Presupuesto_detail_Clas_1699352150016913UIMaDet_1Det_12',
                'Órdenes trabajo');
            this.d6.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('OrdenTrabajo',
                this.master.getContext(), null, 'Presupuesto', null, 'Presupuesto', ''));
        }
        if (this.d7Visible) {
            this.d7.order = 7;
            this.d7.iuId = this.iuId + 'D7';
            this.d7.initializeComponents();
            this.d7.title = this.langMng.translateText(
                'cls_Presupuesto_mdiu_MDIU_Presupuesto_detail_Clas_1699352150016913UIMaDet_1Det_10',
                'Albaranes');
            this.d7.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('AlbaranVenta',
                this.master.getContext(), null, 'Presupuesto', null, 'Presupuesto', ''));
        }
        if (this.d8Visible) {
            this.d8.order = 8;
            this.d8.iuId = this.iuId + 'D8';
            this.d8.initializeComponents();
            this.d8.title = this.langMng.translateText(
                'cls_Presupuesto_mdiu_MDIU_Presupuesto_detail_Clas_1699352150016913UIMaDet_1Det_11',
                'Facturas');
            this.d8.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('FacturaVenta',
                this.master.getContext(), null, 'Albaranes.Presupuesto', null, 'Presupuesto', ''));
        }
        super.initializeComponents();
    }

}
