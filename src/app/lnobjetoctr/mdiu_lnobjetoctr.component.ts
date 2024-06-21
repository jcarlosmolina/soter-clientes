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
import { LnObjetoCtrPIUuLnObjetoCtrComponent } from './piu_lnobjetoctr.component';
import { LnContratoPIUuLnContratoComponent } from '../lncontrato/piu_lncontrato.component';
import { SubTotalContratoPIUuSubTotalContratoComponent } from '../subtotalcontrato/piu_subtotalcontrato.component';
import { LnObjetoCtrIIUuLnObjetoCtrComponent } from './iiu_lnobjetoctr.component';
import { CuotaPIUuCuotaContratoComponent } from '../cuota/piu_cuotacontrato.component';
import { UsuarioCRAPIUuContratoComponent } from '../usuariocra/piu_contrato.component';
import { AlarmaTecnicaPIUuLnObjetoCtrComponent } from '../alarmatecnica/piu_lnobjetoctr.component';
import { DireccionIPPIUuLnObjetoCtrComponent } from '../direccionip/piu_lnobjetoctr.component';
import { ServicioPIUuLnObjetoCtrComponent } from '../servicio/piu_lnobjetoctr.component';
import { LnObjetoCtrIIUuLnObjetoCtruCCTVComponent } from './iiu_lnobjetoctr_cctv.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-lnobjetoctr-mdiu-lnobjetoctr',
    templateUrl: './mdiu_lnobjetoctr.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LnObjetoCtrMDIUuLnObjetoCtrComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: LnObjetoCtrPIUuLnObjetoCtrComponent;

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
        this.idXML = 'Clas_1699352150016018UIMaDet_1';
        this.className = ModelConstants.Lnobjetoctr.name;
        this.iuName = ModelConstants.Lnobjetoctr.mdiuulnobjetoctr;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_LnObjetoCtr_mdiu_MDIU_LnObjetoCtr',
            'Objetos');
        // Create the details and assign the master detail container
        this.master = new LnObjetoCtrPIUuLnObjetoCtrComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        // Expand details in the grid
        this.expandDetails = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016018UIMaDet_1Det_1',
            ['Cliente']) || this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016018UIMaDet_1Det_2',
            ['Cliente']) || this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016018UIMaDet_1Det_3',
            ['Cliente']) || this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016018UIMaDet_1Det_4',
            ['Cliente']) || this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016018UIMaDet_1Det_5',
            ['Cliente']) || this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016018UIMaDet_1Det_6',
            ['Cliente']) || this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016018UIMaDet_1Det_7',
            ['Cliente']) || this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016018UIMaDet_1Det_8',
            ['Cliente']) || this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016018UIMaDet_1Det_9',
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

        // Usuarios CRA solamente debería ser visible si el objeto de contrato es ISG
        // Alarmas técnicas solamente debería ser visible si el objeto de contrato es CRA
        // DireccionesIP solamente debería ser visible si el objeto de contrato es CRA
        // Servicios solamente debería ser visible si el objeto de contrato es CRA
        // Datos CCTV solamente debería ser visible si el objeto de contrato es CRA

        let objContrato = '';
        if (masterOid) {
            const oid = JSON.parse(masterOid);
            objContrato = oid.id_lnobjetoctr;
        }

        // El detalle de cuotas tan solo debe ser visible si la
        //  forma de pago de la linea de objeto contrato es periodica
        let formaPagoPeriodica = false;
        if (this.master && this.master.gridData && this.master.gridData.length > 0) {
            const filaSelecc = this.master.gridData.filter(row => row.oid===masterOid);
            if (filaSelecc && filaSelecc.length > 0) {
                formaPagoPeriodica = filaSelecc[0]['formapago-periodica'];
            }
        }

        const detailList: Array<(AbstractQueryIU | AbstractMDIU)> = [];
        if (this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016018UIMaDet_1Det_1', ['Cliente'])) {

            const detail0 = new LnContratoPIUuLnContratoComponent(this.appGlobalInfo, this.util, this.changeDetectorRef,
                this.langMng, this.stdFun, this.condNavMng, this.usrFunc);
            detail0.masterDetailContainer = this;
            detail0.order = 0;
            detail0.iuId = this.iuId + 'D0' + masterOid;
            detail0.initializeComponents();
            detail0.title = this.langMng.translateText(
                'cls_LnObjetoCtr_mdiu_MDIU_LnObjetoCtr_detail_Clas_1699352150016018UIMaDet_1Det_1',
                'Líneas');
            detail0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('LnContrato',
                this.master.getContext(), null, 'LnObjetoCtr', null, 'LnObjetoCtr', ''));

            detailList.push(detail0);
        }
        if (this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016018UIMaDet_1Det_2', ['Cliente'])) {

            const detail1 = new SubTotalContratoPIUuSubTotalContratoComponent(this.appGlobalInfo, this.util, this.changeDetectorRef,
                this.langMng, this.stdFun, this.condNavMng, this.usrFunc);
            detail1.masterDetailContainer = this;
            detail1.order = 1;
            detail1.iuId = this.iuId + 'D1' + masterOid;
            detail1.initializeComponents();
            detail1.title = this.langMng.translateText(
                'cls_LnObjetoCtr_mdiu_MDIU_LnObjetoCtr_detail_Clas_1699352150016018UIMaDet_1Det_2',
                'Subtotales');
            detail1.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('SubTotalContrato',
                this.master.getContext(), null, 'LnObjetoCtr', null, 'LnObjetoCtr', ''));

            detailList.push(detail1);
        }
        if (objContrato === 'ISG' &&
            this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016018UIMaDet_1Det_3', ['Cliente'])) {

            const detail2 = new LnObjetoCtrIIUuLnObjetoCtrComponent(this.appGlobalInfo, this.util, this.changeDetectorRef,
                this.langMng, this.stdFun, this.condNavMng, this.usrFunc);
            detail2.masterDetailContainer = this;
            detail2.order = 2;
            detail2.iuId = this.iuId + 'D2' + masterOid;
            detail2.initializeComponents();
            detail2.title = this.langMng.translateText(
                'cls_LnObjetoCtr_mdiu_MDIU_LnObjetoCtr_detail_Clas_1699352150016018UIMaDet_1Det_3',
                'Detalles');
            detail2.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('LnObjetoCtr',
                this.master.getContext(), null, '', null, 'LnObjetoCtr', ''));

            detailList.push(detail2);
        }
        if (objContrato === 'CRA' &&
            this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016018UIMaDet_1Det_4', ['Cliente'])) {

            const detail3 = new CuotaPIUuCuotaContratoComponent(this.appGlobalInfo, this.util, this.changeDetectorRef,
                this.langMng, this.stdFun, this.condNavMng, this.usrFunc);
            detail3.masterDetailContainer = this;
            detail3.order = 3;
            detail3.iuId = this.iuId + 'D3' + masterOid;
            detail3.initializeComponents();
            detail3.title = this.langMng.translateText(
                'cls_LnObjetoCtr_mdiu_MDIU_LnObjetoCtr_detail_Clas_1699352150016018UIMaDet_1Det_4',
                'Cuotas');
            detail3.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Cuota',
                this.master.getContext(), null, 'LnObjetoCtr', null, 'LnObjetoCtr', ''));

            detailList.push(detail3);
        }
        if (objContrato === 'CRA' &&
            this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016018UIMaDet_1Det_5', ['Cliente'])) {

            const detail4 = new UsuarioCRAPIUuContratoComponent(this.appGlobalInfo, this.util, this.changeDetectorRef,
                this.langMng, this.stdFun, this.condNavMng, this.usrFunc);
            detail4.masterDetailContainer = this;
            detail4.order = 4;
            detail4.iuId = this.iuId + 'D4' + masterOid;
            detail4.initializeComponents();
            detail4.title = this.langMng.translateText(
                'cls_LnObjetoCtr_mdiu_MDIU_LnObjetoCtr_detail_Clas_1699352150016018UIMaDet_1Det_5',
                'Usuarios CRA');
            detail4.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('UsuarioCRA',
                this.master.getContext(), null, 'LnObjetoCtr', null, 'LnObjetoCtr', ''));

            detailList.push(detail4);
        }
        if (objContrato === 'CRA' &&
            this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016018UIMaDet_1Det_6', ['Cliente'])) {

            const detail5 = new AlarmaTecnicaPIUuLnObjetoCtrComponent(this.appGlobalInfo, this.util, this.changeDetectorRef,
                this.langMng, this.stdFun, this.condNavMng, this.usrFunc);
            detail5.masterDetailContainer = this;
            detail5.order = 5;
            detail5.iuId = this.iuId + 'D5' + masterOid;
            detail5.initializeComponents();
            detail5.title = this.langMng.translateText(
                'cls_LnObjetoCtr_mdiu_MDIU_LnObjetoCtr_detail_Clas_1699352150016018UIMaDet_1Det_6',
                'Alarmas técnicas');
            detail5.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('AlarmaTecnica',
                this.master.getContext(), null, 'LnObjetoCtr', null, 'LnObjetoCtr', ''));

            detailList.push(detail5);
        }
        if (this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016018UIMaDet_1Det_7', ['Cliente'])) {

            const detail6 = new DireccionIPPIUuLnObjetoCtrComponent(this.appGlobalInfo, this.util, this.changeDetectorRef,
                this.langMng, this.stdFun, this.condNavMng, this.usrFunc);
            detail6.masterDetailContainer = this;
            detail6.order = 6;
            detail6.iuId = this.iuId + 'D6' + masterOid;
            detail6.initializeComponents();
            detail6.title = this.langMng.translateText(
                'cls_LnObjetoCtr_mdiu_MDIU_LnObjetoCtr_detail_Clas_1699352150016018UIMaDet_1Det_7',
                'Direcciones IP');
            detail6.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('DireccionIP',
                this.master.getContext(), null, 'LnObjetoCtr', null, 'LnObjetoCtr', ''));

            detailList.push(detail6);
        }
        if (objContrato === 'CRA' &&
            this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016018UIMaDet_1Det_8', ['Cliente'])) {

            const detail7 = new ServicioPIUuLnObjetoCtrComponent(this.appGlobalInfo, this.util, this.changeDetectorRef,
                this.langMng, this.stdFun, this.condNavMng, this.usrFunc);
            detail7.masterDetailContainer = this;
            detail7.order = 7;
            detail7.iuId = this.iuId + 'D7' + masterOid;
            detail7.initializeComponents();
            detail7.title = this.langMng.translateText(
                'cls_LnObjetoCtr_mdiu_MDIU_LnObjetoCtr_detail_Clas_1699352150016018UIMaDet_1Det_8',
                'Servicios');
            detail7.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Servicio',
                this.master.getContext(), null, 'LnObjetoCtr', null, 'LnObjetoCtr', ''));

            detailList.push(detail7);
        }
        if (this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016018UIMaDet_1Det_9', ['Cliente'])) {

            const detail8 = new LnObjetoCtrIIUuLnObjetoCtruCCTVComponent(this.appGlobalInfo, this.util, this.changeDetectorRef,
                this.langMng, this.stdFun, this.condNavMng, this.usrFunc);
            detail8.masterDetailContainer = this;
            detail8.order = 8;
            detail8.iuId = this.iuId + 'D8' + masterOid;
            detail8.initializeComponents();
            detail8.title = this.langMng.translateText(
                'cls_LnObjetoCtr_mdiu_MDIU_LnObjetoCtr_detail_Clas_1699352150016018UIMaDet_1Det_9',
                'Datos CRA');
            detail8.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('LnObjetoCtr',
                this.master.getContext(), null, '', null, 'LnObjetoCtr', ''));

            detailList.push(detail8);
        }

        return detailList;
    }
}
