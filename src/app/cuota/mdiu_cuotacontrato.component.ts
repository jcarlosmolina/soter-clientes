import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { CuotaIIUuCuotaContratoComponent } from './iiu_cuotacontrato.component';
import { DocumentoPIUuCuotaComponent } from '../documento/piu_cuota.component';
import { AlbaranVentaPIUuAlbaranVentauDuCuotaComponent } from '../albaranventa/piu_albaranventa_d_cuota.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-cuota-mdiu-cuotacontrato',
    templateUrl: './mdiu_cuotacontrato.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CuotaMDIUuCuotaContratoComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: CuotaIIUuCuotaContratoComponent;

    /** Details */
    /** Detail component 0 */
    public d0: DocumentoPIUuCuotaComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;
    /** Detail component 1 */
    public d1: AlbaranVentaPIUuAlbaranVentauDuCuotaComponent;
    /** Detail 1 visible or not */
    public d1Visible = true;

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
        this.idXML = 'Clas_1699352150016398UIMaDet_1';
        this.className = ModelConstants.Cuota.name;
        this.iuName = ModelConstants.Cuota.mdiuucuotacontrato;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Cuota_mdiu_MDIU_CuotaContrato',
            'Cuota');
        // Create the details and assign the master detail container
        this.master = new CuotaIIUuCuotaContratoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016398UIMaDet_1Det_1',
            ['Cliente']);
        if (this.d0Visible) {
            this.d0 = new DocumentoPIUuCuotaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d0.masterDetailContainer = this;
            this.details.push(this.d0);
        }
        this.d1Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016398UIMaDet_1Det_2',
            ['Cliente']);
        if (this.d1Visible) {
            this.d1 = new AlbaranVentaPIUuAlbaranVentauDuCuotaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d1.masterDetailContainer = this;
            this.details.push(this.d1);
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
                'cls_Cuota_mdiu_MDIU_CuotaContrato_detail_Clas_1699352150016398UIMaDet_1Det_1',
                'Documentos');
            this.d0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Documento',
                this.master.getContext(), null, 'Cuota', null, 'Cuota', 'Clas_1699352150016398FiltNav_1'));
        }
        if (this.d1Visible) {
            this.d1.order = 1;
            this.d1.iuId = this.iuId + 'D1';
            this.d1.initializeComponents();
            this.d1.title = this.langMng.translateText(
                'cls_Cuota_mdiu_MDIU_CuotaContrato_detail_Clas_1699352150016398UIMaDet_1Det_2',
                'Albaranes');
            this.d1.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('AlbaranVenta',
                this.master.getContext(), null, 'Cuotas', null, 'Cuota', ''));
        }
        super.initializeComponents();
    }

}
