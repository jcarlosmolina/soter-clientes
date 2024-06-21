import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { ContratoIIUuContratoPortalCliComponent } from './iiu_contratoportalcli.component';
import { LnObjetoCtrMDIUuLnObjetoCtrPortalCliComponent } from '../lnobjetoctr/mdiu_lnobjetoctrportalcli.component';
import { SubTotalContratoPIUuSubTotalContratoComponent } from '../subtotalcontrato/piu_subtotalcontrato.component';
import { ContratoIIUuContratouDuFirmaComponent } from './iiu_contrato_d_firma.component';
import { DocumentoPIUuContratoPortalCliComponent } from '../documento/piu_contratoportalcli.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-contrato-mdiu-contratoportalcli',
    templateUrl: './mdiu_contratoportalcli.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContratoMDIUuContratoPortalCliComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: ContratoIIUuContratoPortalCliComponent;

    /** Details */
    /** Detail component 0 */
    public d0: LnObjetoCtrMDIUuLnObjetoCtrPortalCliComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;
    /** Detail component 1 */
    public d1: SubTotalContratoPIUuSubTotalContratoComponent;
    /** Detail 1 visible or not */
    public d1Visible = true;
    /** Detail component 2 */
    public d2: ContratoIIUuContratouDuFirmaComponent;
    /** Detail 2 visible or not */
    public d2Visible = true;
    /** Detail component 3 */
    public d3: DocumentoPIUuContratoPortalCliComponent;
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
        this.idXML = 'Clas_1699352150016715UIMaDet_2';
        this.className = ModelConstants.Contrato.name;
        this.iuName = ModelConstants.Contrato.mdiuucontratoportalcli;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Contrato_mdiu_MDIU_ContratoPortalCli',
            'Contrato');
        // Create the details and assign the master detail container
        this.master = new ContratoIIUuContratoPortalCliComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016715UIMaDet_2Det_7',
            ['Cliente']);
        if (this.d0Visible) {
            this.d0 = new LnObjetoCtrMDIUuLnObjetoCtrPortalCliComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d0.masterDetailContainer = this;
            this.details.push(this.d0);
        }
        this.d1Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016715UIMaDet_2Det_4',
            ['Cliente']);
        if (this.d1Visible) {
            this.d1 = new SubTotalContratoPIUuSubTotalContratoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d1.masterDetailContainer = this;
            this.details.push(this.d1);
        }
        this.d2Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016715UIMaDet_2Det_6',
            ['Cliente']);
        if (this.d2Visible) {
            this.d2 = new ContratoIIUuContratouDuFirmaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d2.masterDetailContainer = this;
            this.details.push(this.d2);
        }
        this.d3Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016715UIMaDet_2Det_8',
            ['Cliente']);
        if (this.d3Visible) {
            this.d3 = new DocumentoPIUuContratoPortalCliComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
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
                'cls_Contrato_mdiu_MDIU_ContratoPortalCli_detail_Clas_1699352150016715UIMaDet_2Det_7',
                'Objetos');
            this.d0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('LnObjetoCtr',
                this.master.getContext(), null, 'Contrato', null, 'Contrato', ''));
        }
        if (this.d1Visible) {
            this.d1.order = 1;
            this.d1.iuId = this.iuId + 'D1';
            this.d1.initializeComponents();
            this.d1.title = this.langMng.translateText(
                'cls_Contrato_mdiu_MDIU_ContratoPortalCli_detail_Clas_1699352150016715UIMaDet_2Det_4',
                'Subtotales');
            this.d1.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('SubTotalContrato',
                this.master.getContext(), null, 'Contrato', null, 'Contrato', ''));
        }
        if (this.d2Visible) {
            this.d2.order = 2;
            this.d2.iuId = this.iuId + 'D2';
            this.d2.initializeComponents();
            this.d2.title = this.langMng.translateText(
                'cls_Contrato_mdiu_MDIU_ContratoPortalCli_detail_Clas_1699352150016715UIMaDet_2Det_6',
                'Firma');
            this.d2.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Contrato',
                this.master.getContext(), null, '', null, 'Contrato', ''));
        }
        if (this.d3Visible) {
            this.d3.order = 3;
            this.d3.iuId = this.iuId + 'D3';
            this.d3.initializeComponents();
            this.d3.title = this.langMng.translateText(
                'cls_Contrato_mdiu_MDIU_ContratoPortalCli_detail_Clas_1699352150016715UIMaDet_2Det_8',
                'Documentos');
            this.d3.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Documento',
                this.master.getContext(), null, 'Contrato', null, 'Contrato', 'Clas_1699352150016715FiltNav_36'));
        }
        super.initializeComponents();
    }

}
