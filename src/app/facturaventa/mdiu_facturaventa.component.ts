import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { FacturaVentaIIUuFacturaVentauMuMDComponent } from './iiu_facturaventa_m_md.component';
import { LnAlbaranVentaPIUuLnAlbaranVentauDuFactComponent } from '../lnalbaranventa/piu_lnalbaranventa_d_fact.component';
import { AlbaranVentaPIUuAlbaranVentauDuFactComponent } from '../albaranventa/piu_albaranventa_d_fact.component';
import { SubTotalFacturaVentaPIUuSubTotalFacturaVentauDuMDComponent } from '../subtotalfacturaventa/piu_subtotalfacturaventa_d_md.component';
import { VencimientoPIUuVencimientouDuFactComponent } from '../vencimiento/piu_vencimiento_d_fact.component';
import { CobroAnticipoPIUuCobroAnticipouDuFactComponent } from '../cobroanticipo/piu_cobroanticipo_d_fact.component';
import { FacturaVentaIIUuFacturaVentauElectComponent } from './iiu_facturaventa_elect.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-facturaventa-mdiu-facturaventa',
    templateUrl: './mdiu_facturaventa.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacturaVentaMDIUuFacturaVentaComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: FacturaVentaIIUuFacturaVentauMuMDComponent;

    /** Details */
    /** Detail component 0 */
    public d0: LnAlbaranVentaPIUuLnAlbaranVentauDuFactComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;
    /** Detail component 1 */
    public d1: AlbaranVentaPIUuAlbaranVentauDuFactComponent;
    /** Detail 1 visible or not */
    public d1Visible = true;
    /** Detail component 2 */
    public d2: SubTotalFacturaVentaPIUuSubTotalFacturaVentauDuMDComponent;
    /** Detail 2 visible or not */
    public d2Visible = true;
    /** Detail component 3 */
    public d3: VencimientoPIUuVencimientouDuFactComponent;
    /** Detail 3 visible or not */
    public d3Visible = true;
    /** Detail component 4 */
    public d4: CobroAnticipoPIUuCobroAnticipouDuFactComponent;
    /** Detail 4 visible or not */
    public d4Visible = true;
    /** Detail component 5 */
    public d5: FacturaVentaIIUuFacturaVentauElectComponent;
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
        this.idXML = 'Clas_1699352150016050UIMaDet_1';
        this.className = ModelConstants.Facturaventa.name;
        this.iuName = ModelConstants.Facturaventa.mdiuufacturaventa;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_FacturaVenta_mdiu_MDIU_FacturaVenta',
            'Detalles factura');
        // Create the details and assign the master detail container
        this.master = new FacturaVentaIIUuFacturaVentauMuMDComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016050UIMaDet_1Det_1',
            ['Cliente']);
        if (this.d0Visible) {
            this.d0 = new LnAlbaranVentaPIUuLnAlbaranVentauDuFactComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d0.masterDetailContainer = this;
            this.details.push(this.d0);
        }
        this.d1Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016050UIMaDet_1Det_2',
            ['Cliente']);
        if (this.d1Visible) {
            this.d1 = new AlbaranVentaPIUuAlbaranVentauDuFactComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d1.masterDetailContainer = this;
            this.details.push(this.d1);
        }
        this.d2Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016050UIMaDet_1Det_3',
            ['Cliente']);
        if (this.d2Visible) {
            this.d2 = new SubTotalFacturaVentaPIUuSubTotalFacturaVentauDuMDComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d2.masterDetailContainer = this;
            this.details.push(this.d2);
        }
        this.d3Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016050UIMaDet_1Det_4',
            ['Cliente']);
        if (this.d3Visible) {
            this.d3 = new VencimientoPIUuVencimientouDuFactComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d3.masterDetailContainer = this;
            this.details.push(this.d3);
        }
        this.d4Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016050UIMaDet_1Det_5',
            ['Cliente']);
        if (this.d4Visible) {
            this.d4 = new CobroAnticipoPIUuCobroAnticipouDuFactComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d4.masterDetailContainer = this;
            this.details.push(this.d4);
        }
        this.d5Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016050UIMaDet_1Det_6',
            ['Cliente']);
        if (this.d5Visible) {
            this.d5 = new FacturaVentaIIUuFacturaVentauElectComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
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
                'cls_FacturaVenta_mdiu_MDIU_FacturaVenta_detail_Clas_1699352150016050UIMaDet_1Det_1',
                'Líneas');
            this.d0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('LnAlbaranVenta',
                this.master.getContext(), null, 'Albaran.Facturas', null, 'FacturaVenta', ''));
        }
        if (this.d1Visible) {
            this.d1.order = 1;
            this.d1.iuId = this.iuId + 'D1';
            this.d1.initializeComponents();
            this.d1.title = this.langMng.translateText(
                'cls_FacturaVenta_mdiu_MDIU_FacturaVenta_detail_Clas_1699352150016050UIMaDet_1Det_2',
                'Albaranes');
            this.d1.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('AlbaranVenta',
                this.master.getContext(), null, 'Facturas', null, 'FacturaVenta', ''));
        }
        if (this.d2Visible) {
            this.d2.order = 2;
            this.d2.iuId = this.iuId + 'D2';
            this.d2.initializeComponents();
            this.d2.title = this.langMng.translateText(
                'cls_FacturaVenta_mdiu_MDIU_FacturaVenta_detail_Clas_1699352150016050UIMaDet_1Det_3',
                'Subtotales');
            this.d2.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('SubTotalFacturaVenta',
                this.master.getContext(), null, 'Factura', null, 'FacturaVenta', ''));
        }
        if (this.d3Visible) {
            this.d3.order = 3;
            this.d3.iuId = this.iuId + 'D3';
            this.d3.initializeComponents();
            this.d3.title = this.langMng.translateText(
                'cls_FacturaVenta_mdiu_MDIU_FacturaVenta_detail_Clas_1699352150016050UIMaDet_1Det_4',
                'Vencimientos');
            this.d3.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Vencimiento',
                this.master.getContext(), null, 'Factura', null, 'FacturaVenta', ''));
        }
        if (this.d4Visible) {
            this.d4.order = 4;
            this.d4.iuId = this.iuId + 'D4';
            this.d4.initializeComponents();
            this.d4.title = this.langMng.translateText(
                'cls_FacturaVenta_mdiu_MDIU_FacturaVenta_detail_Clas_1699352150016050UIMaDet_1Det_5',
                'Cobros / Anticipos');
            this.d4.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('CobroAnticipo',
                this.master.getContext(), null, 'Factura', null, 'FacturaVenta', ''));
        }
        if (this.d5Visible) {
            this.d5.order = 5;
            this.d5.iuId = this.iuId + 'D5';
            this.d5.initializeComponents();
            this.d5.title = this.langMng.translateText(
                'cls_FacturaVenta_mdiu_MDIU_FacturaVenta_detail_Clas_1699352150016050UIMaDet_1Det_6',
                'Factura electrónica');
            this.d5.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('FacturaVenta',
                this.master.getContext(), null, '', null, 'FacturaVenta', ''));
        }
        super.initializeComponents();
    }

}
