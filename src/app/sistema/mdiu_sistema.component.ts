import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { SistemaIIUuSistemaComponent } from './iiu_sistema.component';
import { ElementoSistemaPIUuElementoSistemaComponent } from '../elementosistema/piu_elementosistema.component';
import { DireccionIPPIUuSistemtaComponent } from '../direccionip/piu_sistemta.component';
import { UsuarioCRAPIUuSistemaComponent } from '../usuariocra/piu_sistema.component';
import { ServicioPIUuSistemaComponent } from '../servicio/piu_sistema.component';
import { AlarmaTecnicaPIUuSistemaComponent } from '../alarmatecnica/piu_sistema.component';
import { ParametroSistemaPIUuParametroSistemaComponent } from '../parametrosistema/piu_parametrosistema.component';
import { PresupuestoPIUuPresupuestoComponent } from '../presupuesto/piu_presupuesto.component';
import { ContactoPIUuSistemaComponent } from '../contacto/piu_sistema.component';
import { DocumentoPIUuSistemaComponent } from '../documento/piu_sistema.component';
import { ContratoPIUuContratoSistemaComponent } from '../contrato/piu_contratosistema.component';
import { SistemaIIUuSistemaFechasComponent } from './iiu_sistemafechas.component';
import { OrdenTrabajoPIUuOrdenTrabajo4InstalacionComponent } from '../ordentrabajo/piu_ordentrabajo4instalacion.component';
import { ParteTrabajoPIUuParteTrabajo4InstalacionComponent } from '../partetrabajo/piu_partetrabajo4instalacion.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-sistema-mdiu-sistema',
    templateUrl: './mdiu_sistema.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SistemaMDIUuSistemaComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: SistemaIIUuSistemaComponent;

    /** Details */
    /** Detail component 0 */
    public d0: ElementoSistemaPIUuElementoSistemaComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;
    /** Detail component 1 */
    public d1: DireccionIPPIUuSistemtaComponent;
    /** Detail 1 visible or not */
    public d1Visible = true;
    /** Detail component 2 */
    public d2: UsuarioCRAPIUuSistemaComponent;
    /** Detail 2 visible or not */
    public d2Visible = true;
    /** Detail component 3 */
    public d3: ServicioPIUuSistemaComponent;
    /** Detail 3 visible or not */
    public d3Visible = true;
    /** Detail component 4 */
    public d4: AlarmaTecnicaPIUuSistemaComponent;
    /** Detail 4 visible or not */
    public d4Visible = true;
    /** Detail component 5 */
    public d5: ParametroSistemaPIUuParametroSistemaComponent;
    /** Detail 5 visible or not */
    public d5Visible = true;
    /** Detail component 6 */
    public d6: PresupuestoPIUuPresupuestoComponent;
    /** Detail 6 visible or not */
    public d6Visible = true;
    /** Detail component 7 */
    public d7: ContactoPIUuSistemaComponent;
    /** Detail 7 visible or not */
    public d7Visible = true;
    /** Detail component 8 */
    public d8: DocumentoPIUuSistemaComponent;
    /** Detail 8 visible or not */
    public d8Visible = true;
    /** Detail component 9 */
    public d9: ContratoPIUuContratoSistemaComponent;
    /** Detail 9 visible or not */
    public d9Visible = true;
    /** Detail component 10 */
    public d10: SistemaIIUuSistemaFechasComponent;
    /** Detail 10 visible or not */
    public d10Visible = true;
    /** Detail component 11 */
    public d11: OrdenTrabajoPIUuOrdenTrabajo4InstalacionComponent;
    /** Detail 11 visible or not */
    public d11Visible = true;
    /** Detail component 12 */
    public d12: ParteTrabajoPIUuParteTrabajo4InstalacionComponent;
    /** Detail 12 visible or not */
    public d12Visible = true;

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
        this.idXML = 'Clas_1699352150016718UIMaDet_1';
        this.className = ModelConstants.Sistema.name;
        this.iuName = ModelConstants.Sistema.mdiuusistema;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Sistema_mdiu_MDIU_Sistema',
            'Sistema');
        // Create the details and assign the master detail container
        this.master = new SistemaIIUuSistemaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016718UIMaDet_1Det_1',
            ['Cliente']);
        if (this.d0Visible) {
            this.d0 = new ElementoSistemaPIUuElementoSistemaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d0.masterDetailContainer = this;
            this.details.push(this.d0);
        }
        this.d1Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016718UIMaDet_1Det_2',
            ['Cliente']);
        if (this.d1Visible) {
            this.d1 = new DireccionIPPIUuSistemtaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d1.masterDetailContainer = this;
            this.details.push(this.d1);
        }
        this.d2Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016718UIMaDet_1Det_3',
            ['Cliente']);
        if (this.d2Visible) {
            this.d2 = new UsuarioCRAPIUuSistemaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d2.masterDetailContainer = this;
            this.details.push(this.d2);
        }
        this.d3Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016718UIMaDet_1Det_4',
            ['Cliente']);
        if (this.d3Visible) {
            this.d3 = new ServicioPIUuSistemaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d3.masterDetailContainer = this;
            this.details.push(this.d3);
        }
        this.d4Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016718UIMaDet_1Det_5',
            ['Cliente']);
        if (this.d4Visible) {
            this.d4 = new AlarmaTecnicaPIUuSistemaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d4.masterDetailContainer = this;
            this.details.push(this.d4);
        }
        this.d5Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016718UIMaDet_1Det_6',
            ['Cliente']);
        if (this.d5Visible) {
            this.d5 = new ParametroSistemaPIUuParametroSistemaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d5.masterDetailContainer = this;
            this.details.push(this.d5);
        }
        this.d6Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016718UIMaDet_1Det_7',
            ['Cliente']);
        if (this.d6Visible) {
            this.d6 = new PresupuestoPIUuPresupuestoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d6.masterDetailContainer = this;
            this.details.push(this.d6);
        }
        this.d7Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016718UIMaDet_1Det_10',
            ['Cliente']);
        if (this.d7Visible) {
            this.d7 = new ContactoPIUuSistemaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d7.masterDetailContainer = this;
            this.details.push(this.d7);
        }
        this.d8Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016718UIMaDet_1Det_11',
            ['Cliente']);
        if (this.d8Visible) {
            this.d8 = new DocumentoPIUuSistemaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d8.masterDetailContainer = this;
            this.details.push(this.d8);
        }
        this.d9Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016718UIMaDet_1Det_13',
            ['Cliente']);
        if (this.d9Visible) {
            this.d9 = new ContratoPIUuContratoSistemaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d9.masterDetailContainer = this;
            this.details.push(this.d9);
        }
        this.d10Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016718UIMaDet_1Det_14',
            ['Cliente']);
        if (this.d10Visible) {
            this.d10 = new SistemaIIUuSistemaFechasComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d10.masterDetailContainer = this;
            this.details.push(this.d10);
        }
        this.d11Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016718UIMaDet_1Det_15',
            ['Cliente']);
        if (this.d11Visible) {
            this.d11 = new OrdenTrabajoPIUuOrdenTrabajo4InstalacionComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d11.masterDetailContainer = this;
            this.details.push(this.d11);
        }
        this.d12Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016718UIMaDet_1Det_16',
            ['Cliente']);
        if (this.d12Visible) {
            this.d12 = new ParteTrabajoPIUuParteTrabajo4InstalacionComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d12.masterDetailContainer = this;
            this.details.push(this.d12);
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
                'cls_Sistema_mdiu_MDIU_Sistema_detail_Clas_1699352150016718UIMaDet_1Det_1',
                'Elementos');
            this.d0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('ElementoSistema',
                this.master.getContext(), null, 'Sistema', null, 'Sistema', ''));
        }
        if (this.d1Visible) {
            this.d1.order = 1;
            this.d1.iuId = this.iuId + 'D1';
            this.d1.initializeComponents();
            this.d1.title = this.langMng.translateText(
                'cls_Sistema_mdiu_MDIU_Sistema_detail_Clas_1699352150016718UIMaDet_1Det_2',
                'Direcciones IP');
            this.d1.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('DireccionIP',
                this.master.getContext(), null, 'Sistema', null, 'Sistema', ''));
        }
        if (this.d2Visible) {
            this.d2.order = 2;
            this.d2.iuId = this.iuId + 'D2';
            this.d2.initializeComponents();
            this.d2.title = this.langMng.translateText(
                'cls_Sistema_mdiu_MDIU_Sistema_detail_Clas_1699352150016718UIMaDet_1Det_3',
                'Usuarios CRA');
            this.d2.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('UsuarioCRA',
                this.master.getContext(), null, 'Sistema', null, 'Sistema', ''));
        }
        if (this.d3Visible) {
            this.d3.order = 3;
            this.d3.iuId = this.iuId + 'D3';
            this.d3.initializeComponents();
            this.d3.title = this.langMng.translateText(
                'cls_Sistema_mdiu_MDIU_Sistema_detail_Clas_1699352150016718UIMaDet_1Det_4',
                'Servicios');
            this.d3.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Servicio',
                this.master.getContext(), null, 'Sistema', null, 'Sistema', ''));
        }
        if (this.d4Visible) {
            this.d4.order = 4;
            this.d4.iuId = this.iuId + 'D4';
            this.d4.initializeComponents();
            this.d4.title = this.langMng.translateText(
                'cls_Sistema_mdiu_MDIU_Sistema_detail_Clas_1699352150016718UIMaDet_1Det_5',
                'Alarmas técnicas');
            this.d4.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('AlarmaTecnica',
                this.master.getContext(), null, 'Sistema', null, 'Sistema', ''));
        }
        if (this.d5Visible) {
            this.d5.order = 5;
            this.d5.iuId = this.iuId + 'D5';
            this.d5.initializeComponents();
            this.d5.title = this.langMng.translateText(
                'cls_Sistema_mdiu_MDIU_Sistema_detail_Clas_1699352150016718UIMaDet_1Det_6',
                'Parámetros');
            this.d5.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('ParametroSistema',
                this.master.getContext(), null, 'Sistema', null, 'Sistema', ''));
        }
        if (this.d6Visible) {
            this.d6.order = 6;
            this.d6.iuId = this.iuId + 'D6';
            this.d6.initializeComponents();
            this.d6.title = this.langMng.translateText(
                'cls_Sistema_mdiu_MDIU_Sistema_detail_Clas_1699352150016718UIMaDet_1Det_7',
                'Presupuestos');
            this.d6.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Presupuesto',
                this.master.getContext(), null, 'Instalacion.Sistemas', null, 'Sistema', ''));
        }
        if (this.d7Visible) {
            this.d7.order = 7;
            this.d7.iuId = this.iuId + 'D7';
            this.d7.initializeComponents();
            this.d7.title = this.langMng.translateText(
                'cls_Sistema_mdiu_MDIU_Sistema_detail_Clas_1699352150016718UIMaDet_1Det_10',
                'Contactos');
            this.d7.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Contacto',
                this.master.getContext(), null, 'Sistema', null, 'Sistema', ''));
        }
        if (this.d8Visible) {
            this.d8.order = 8;
            this.d8.iuId = this.iuId + 'D8';
            this.d8.initializeComponents();
            this.d8.title = this.langMng.translateText(
                'cls_Sistema_mdiu_MDIU_Sistema_detail_Clas_1699352150016718UIMaDet_1Det_11',
                'Documentos');
            this.d8.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Documento',
                this.master.getContext(), null, 'Sistema', null, 'Sistema', 'Clas_1699352150016718FiltNav_3'));
        }
        if (this.d9Visible) {
            this.d9.order = 9;
            this.d9.iuId = this.iuId + 'D9';
            this.d9.initializeComponents();
            this.d9.title = this.langMng.translateText(
                'cls_Sistema_mdiu_MDIU_Sistema_detail_Clas_1699352150016718UIMaDet_1Det_13',
                'Contratos');
            this.d9.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Contrato',
                this.master.getContext(), null, 'Sistemas', null, 'Sistema', ''));
        }
        if (this.d10Visible) {
            this.d10.order = 10;
            this.d10.iuId = this.iuId + 'D10';
            this.d10.initializeComponents();
            this.d10.title = this.langMng.translateText(
                'cls_Sistema_mdiu_MDIU_Sistema_detail_Clas_1699352150016718UIMaDet_1Det_14',
                'Fechas');
            this.d10.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Sistema',
                this.master.getContext(), null, '', null, 'Sistema', ''));
        }
        if (this.d11Visible) {
            this.d11.order = 11;
            this.d11.iuId = this.iuId + 'D11';
            this.d11.initializeComponents();
            this.d11.title = this.langMng.translateText(
                'cls_Sistema_mdiu_MDIU_Sistema_detail_Clas_1699352150016718UIMaDet_1Det_15',
                'Órdenes trabajo');
            this.d11.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('OrdenTrabajo',
                this.master.getContext(), null, 'Sistema', null, 'Sistema', ''));
        }
        if (this.d12Visible) {
            this.d12.order = 12;
            this.d12.iuId = this.iuId + 'D12';
            this.d12.initializeComponents();
            this.d12.title = this.langMng.translateText(
                'cls_Sistema_mdiu_MDIU_Sistema_detail_Clas_1699352150016718UIMaDet_1Det_16',
                'Partes trabajo');
            this.d12.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('ParteTrabajo',
                this.master.getContext(), null, 'OrdenTrabajo.Sistema', null, 'Sistema', ''));
        }
        super.initializeComponents();
    }

}
