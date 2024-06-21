import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { ParteTrabajoIIUuParteTrabajoComponent } from './iiu_partetrabajo.component';
import { LnOrdenTrabajoPIUuLnOrdenTrabajoParteComponent } from '../lnordentrabajo/piu_lnordentrabajoparte.component';
import { CheckListOTMDIUuCheckListOTuTREEuParteComponent } from '../checklistot/mdiu_checklistot_tree_parte.component';
import { ParteTrabajoIIUuParteTrabajouDetTrabajosComponent } from './iiu_partetrabajo_dettrabajos.component';
import { ParteTrabajoMDIUuParteTrabajouEconomicoComponent } from './mdiu_partetrabajo_economico.component';
import { AlbaranVentaIIUuAlbaranVentauDetParteComponent } from '../albaranventa/iiu_albaranventa_detparte.component';
import { DocumentoPIUuParteTrabajoComponent } from '../documento/piu_partetrabajo.component';
import { OrdenTrabajoIIUuOrdenTrabajouDetParteComponent } from '../ordentrabajo/iiu_ordentrabajo_detparte.component';
import { SistemaIIUuSistemauDetOrdenComponent } from '../sistema/iiu_sistema_detorden.component';
import { LnOrdenTrabajoPIUuLnOrdenTrabajoParteElemsReComponent } from '../lnordentrabajo/piu_lnordentrabajoparteelemsre.component';
import { OrdenTrabajoMDIUuOTObraModSistemaComponent } from '../ordentrabajo/mdiu_otobramodsistema.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-partetrabajo-mdiu-partetrabajo',
    templateUrl: './mdiu_partetrabajo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParteTrabajoMDIUuParteTrabajoComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: ParteTrabajoIIUuParteTrabajoComponent;

    /** Details */
    /** Detail component 0 */
    public d0: LnOrdenTrabajoPIUuLnOrdenTrabajoParteComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;
    /** Detail component 1 */
    public d1: CheckListOTMDIUuCheckListOTuTREEuParteComponent;
    /** Detail 1 visible or not */
    public d1Visible = true;
    /** Detail component 2 */
    public d2: ParteTrabajoIIUuParteTrabajouDetTrabajosComponent;
    /** Detail 2 visible or not */
    public d2Visible = true;
    /** Detail component 3 */
    public d3: ParteTrabajoMDIUuParteTrabajouEconomicoComponent;
    /** Detail 3 visible or not */
    public d3Visible = true;
    /** Detail component 4 */
    public d4: AlbaranVentaIIUuAlbaranVentauDetParteComponent;
    /** Detail 4 visible or not */
    public d4Visible = true;
    /** Detail component 5 */
    public d5: DocumentoPIUuParteTrabajoComponent;
    /** Detail 5 visible or not */
    public d5Visible = true;
    /** Detail component 6 */
    public d6: OrdenTrabajoIIUuOrdenTrabajouDetParteComponent;
    /** Detail 6 visible or not */
    public d6Visible = true;
    /** Detail component 7 */
    public d7: SistemaIIUuSistemauDetOrdenComponent;
    /** Detail 7 visible or not */
    public d7Visible = true;
    /** Detail component 8 */
    public d8: LnOrdenTrabajoPIUuLnOrdenTrabajoParteElemsReComponent;
    /** Detail 8 visible or not */
    public d8Visible = true;
    /** Detail component 9 */
    public d9: OrdenTrabajoMDIUuOTObraModSistemaComponent;
    /** Detail 9 visible or not */
    public d9Visible = true;


    public labelValoracion: string;

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
        this.idXML = 'Clas_1699352150016581UIMaDet_3';
        this.className = ModelConstants.Partetrabajo.name;
        this.iuName = ModelConstants.Partetrabajo.mdiuupartetrabajo;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_ParteTrabajo_mdiu_MDIU_ParteTrabajo',
            'Parte de trabajo');
        // Create the details and assign the master detail container
        this.master = new ParteTrabajoIIUuParteTrabajoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016581UIMaDet_3Det_1',
            ['Cliente']);
        if (this.d0Visible) {
            this.d0 = new LnOrdenTrabajoPIUuLnOrdenTrabajoParteComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d0.masterDetailContainer = this;
            this.details.push(this.d0);
        }
        this.d1Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016581UIMaDet_3Det_2',
            ['Cliente']);
        if (this.d1Visible) {
            this.d1 = new CheckListOTMDIUuCheckListOTuTREEuParteComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d1.masterDetailContainer = this;
            this.details.push(this.d1);
        }
        this.d2Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016581UIMaDet_3Det_3',
            ['Cliente']);
        if (this.d2Visible) {
            this.d2 = new ParteTrabajoIIUuParteTrabajouDetTrabajosComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d2.masterDetailContainer = this;
            this.details.push(this.d2);
        }
        this.d3Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016581UIMaDet_3Det_4',
            ['Cliente']);
        if (this.d3Visible) {
            this.d3 = new ParteTrabajoMDIUuParteTrabajouEconomicoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d3.masterDetailContainer = this;
            this.details.push(this.d3);
        }
        this.d4Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016581UIMaDet_3Det_5',
            ['Cliente']);
        if (this.d4Visible) {
            this.d4 = new AlbaranVentaIIUuAlbaranVentauDetParteComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d4.masterDetailContainer = this;
            this.details.push(this.d4);
        }
        this.d5Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016581UIMaDet_3Det_6',
            ['Cliente']);
        if (this.d5Visible) {
            this.d5 = new DocumentoPIUuParteTrabajoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d5.masterDetailContainer = this;
            this.details.push(this.d5);
        }
        this.d6Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016581UIMaDet_3Det_7',
            ['Cliente']);
        if (this.d6Visible) {
            this.d6 = new OrdenTrabajoIIUuOrdenTrabajouDetParteComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d6.masterDetailContainer = this;
            this.details.push(this.d6);
        }
        this.d7Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016581UIMaDet_3Det_8',
            ['Cliente']);
        if (this.d7Visible) {
            this.d7 = new SistemaIIUuSistemauDetOrdenComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d7.masterDetailContainer = this;
            this.details.push(this.d7);
        }
        this.d8Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016581UIMaDet_3Det_9',
            ['Cliente']);
        if (this.d8Visible) {
            this.d8 = new LnOrdenTrabajoPIUuLnOrdenTrabajoParteElemsReComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d8.masterDetailContainer = this;
            this.details.push(this.d8);
        }
        this.d9Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016581UIMaDet_3Det_10',
            ['Cliente']);
        if (this.d9Visible) {
            this.d9 = new OrdenTrabajoMDIUuOTObraModSistemaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d9.masterDetailContainer = this;
            this.details.push(this.d9);
        }
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }


    public getEmoji(): string {

        if (this.master.dseValoracionCliente.value != null) {
            this.labelValoracion = this.master.dseValoracionCliente.options[this.master.dseValoracionCliente.value].value;
            // Valoración cliente = "1" -- Pésimo
            if (this.master.dseValoracionCliente.value == 1) {

                return "assets/pesima.png";
            }

            if (this.master.dseValoracionCliente.value == 2) {
                return "assets/mala.png";
            }

            if (this.master.dseValoracionCliente.value == 3) {
                return "assets/regular.png";
            }

            if (this.master.dseValoracionCliente.value == 4) {
                return "assets/buena.png";
            }
            if (this.master.dseValoracionCliente.value == 5) {
                return "assets/excelente.png";
            }
            return null;
        }
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
                'cls_ParteTrabajo_mdiu_MDIU_ParteTrabajo_detail_Clas_1699352150016581UIMaDet_3Det_1',
                'Líneas');
            this.d0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('LnOrdenTrabajo',
                this.master.getContext(), null, 'ParteTrabajo', null, 'ParteTrabajo', ''));
        }
        if (this.d1Visible) {
            this.d1.order = 1;
            this.d1.iuId = this.iuId + 'D1';
            this.d1.initializeComponents();
            this.d1.title = this.langMng.translateText(
                'cls_ParteTrabajo_mdiu_MDIU_ParteTrabajo_detail_Clas_1699352150016581UIMaDet_3Det_2',
                'Checklists');
            this.d1.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('CheckListOT',
                this.master.getContext(), null, 'ParteTrabajo', null, 'ParteTrabajo', ''));
        }
        if (this.d2Visible) {
            this.d2.order = 2;
            this.d2.iuId = this.iuId + 'D2';
            this.d2.initializeComponents();
            this.d2.title = this.langMng.translateText(
                'cls_ParteTrabajo_mdiu_MDIU_ParteTrabajo_detail_Clas_1699352150016581UIMaDet_3Det_3',
                'Detalles');
            this.d2.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('ParteTrabajo',
                this.master.getContext(), null, '', null, 'ParteTrabajo', ''));
        }
        if (this.d3Visible) {
            this.d3.order = 3;
            this.d3.iuId = this.iuId + 'D3';
            this.d3.initializeComponents();
            this.d3.title = this.langMng.translateText(
                'cls_ParteTrabajo_mdiu_MDIU_ParteTrabajo_detail_Clas_1699352150016581UIMaDet_3Det_4',
                'Datos económicos');
            this.d3.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('ParteTrabajo',
                this.master.getContext(), null, '', null, 'ParteTrabajo', ''));
        }
        if (this.d4Visible) {
            this.d4.order = 4;
            this.d4.iuId = this.iuId + 'D4';
            this.d4.initializeComponents();
            this.d4.title = this.langMng.translateText(
                'cls_ParteTrabajo_mdiu_MDIU_ParteTrabajo_detail_Clas_1699352150016581UIMaDet_3Det_5',
                'Albarán');
            this.d4.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('AlbaranVenta',
                this.master.getContext(), null, 'ParteTrabajo', null, 'ParteTrabajo', ''));
        }
        if (this.d5Visible) {
            this.d5.order = 5;
            this.d5.iuId = this.iuId + 'D5';
            this.d5.initializeComponents();
            this.d5.title = this.langMng.translateText(
                'cls_ParteTrabajo_mdiu_MDIU_ParteTrabajo_detail_Clas_1699352150016581UIMaDet_3Det_6',
                'Documentos');
            this.d5.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Documento',
                this.master.getContext(), null, 'ParteTrabajo', null, 'ParteTrabajo', ''));
        }
        if (this.d6Visible) {
            this.d6.order = 6;
            this.d6.iuId = this.iuId + 'D6';
            this.d6.initializeComponents();
            this.d6.title = this.langMng.translateText(
                'cls_ParteTrabajo_mdiu_MDIU_ParteTrabajo_detail_Clas_1699352150016581UIMaDet_3Det_7',
                'Orden de trabajo');
            this.d6.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('OrdenTrabajo',
                this.master.getContext(), null, 'PartesTrabajo', null, 'ParteTrabajo', ''));
        }
        if (this.d7Visible) {
            this.d7.order = 7;
            this.d7.iuId = this.iuId + 'D7';
            this.d7.initializeComponents();
            this.d7.title = this.langMng.translateText(
                'cls_ParteTrabajo_mdiu_MDIU_ParteTrabajo_detail_Clas_1699352150016581UIMaDet_3Det_8',
                'Sistema');
            this.d7.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Sistema',
                this.master.getContext(), null, 'OrdenesTrabajo.PartesTrabajo', null, 'ParteTrabajo', ''));
        }
        if (this.d8Visible) {
            this.d8.order = 8;
            this.d8.iuId = this.iuId + 'D8';
            this.d8.initializeComponents();
            this.d8.title = this.langMng.translateText(
                'cls_ParteTrabajo_mdiu_MDIU_ParteTrabajo_detail_Clas_1699352150016581UIMaDet_3Det_9',
                'Elementos revisados');
            this.d8.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('LnOrdenTrabajo',
                this.master.getContext(), null, 'ParteTrabajo', null, 'ParteTrabajo', 'Clas_1699352150016581FiltNav_9'));
        }
        if (this.d9Visible) {
            this.d9.order = 9;
            this.d9.iuId = this.iuId + 'D9';
            this.d9.initializeComponents();
            this.d9.title = this.langMng.translateText(
                'cls_ParteTrabajo_mdiu_MDIU_ParteTrabajo_detail_Clas_1699352150016581UIMaDet_3Det_10',
                'Modificaciones sistema');
            this.d9.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('OrdenTrabajo',
                this.master.getContext(), null, 'PartesTrabajo', null, 'ParteTrabajo', ''));
        }
        super.initializeComponents();
    }

}
