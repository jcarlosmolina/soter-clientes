import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { AlbaranVentaIIUuAlbaranVentaLnsComponent } from './iiu_albaranventalns.component';
import { LnAlbaranVentaPIUuLnAlbaranVentaComponent } from '../lnalbaranventa/piu_lnalbaranventa.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-albaranventa-mdiu-albaranventalns',
    templateUrl: './mdiu_albaranventalns.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbaranVentaMDIUuAlbaranVentaLnsComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: AlbaranVentaIIUuAlbaranVentaLnsComponent;

    /** Details */
    /** Detail component 0 */
    public d0: LnAlbaranVentaPIUuLnAlbaranVentaComponent;
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
        this.idXML = 'Clas_1699352150016564UIMaDet_2';
        this.className = ModelConstants.Albaranventa.name;
        this.iuName = ModelConstants.Albaranventa.mdiuualbaranventalns;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_AlbaranVenta_mdiu_MDIU_AlbaranVentaLns',
            'Líneas');
        // Create the details and assign the master detail container
        this.master = new AlbaranVentaIIUuAlbaranVentaLnsComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016564UIMaDet_2Det_1',
            ['Cliente']);
        if (this.d0Visible) {
            this.d0 = new LnAlbaranVentaPIUuLnAlbaranVentaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
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
                'cls_AlbaranVenta_mdiu_MDIU_AlbaranVentaLns_detail_Clas_1699352150016564UIMaDet_2Det_1',
                'Líneas');
            this.d0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('LnAlbaranVenta',
                this.master.getContext(), null, 'Albaran', null, 'AlbaranVenta', ''));
        }
        super.initializeComponents();
    }

}
