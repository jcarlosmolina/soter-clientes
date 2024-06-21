import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { ClienteIIUuClienteMComponent } from './iiu_clientem.component';
import { PresupuestoPIUuPresupuestoComponent } from '../presupuesto/piu_presupuesto.component';
import { AlbaranVentaPIUuAlbaranVentaComponent } from '../albaranventa/piu_albaranventa.component';
import { FacturaVentaPIUuFacturaVentaClienteComponent } from '../facturaventa/piu_facturaventacliente.component';
import { InstalacionPIUuInstalacionComponent } from '../instalacion/piu_instalacion.component';
import { ContratoPIUuContratoClienteComponent } from '../contrato/piu_contratocliente.component';
import { DocumentoPIUuClientesComponent } from '../documento/piu_clientes.component';
import { ClienteIIUuClienteDireccionFiscalComponent } from './iiu_clientedireccionfiscal.component';
import { ClienteIIUuDatosContablesComponent } from './iiu_datoscontables.component';
import { ClienteIIUuClienteDatosJuridicaComponent } from './iiu_clientedatosjuridica.component';
import { ClienteIIUuClienteFacturaElectronicaComponent } from './iiu_clientefacturaelectronica.component';
import { ClienteIIUuClienteAdmonFincaComponent } from './iiu_clienteadmonfinca.component';
import { ClienteIIUuClienteLogoComponent } from './iiu_clientelogo.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-cliente-mdiu-cliente',
    templateUrl: './mdiu_cliente.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClienteMDIUuClienteComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: ClienteIIUuClienteMComponent;

    /** Details */
    /** Detail component 0 */
    public d0: PresupuestoPIUuPresupuestoComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;
    /** Detail component 1 */
    public d1: AlbaranVentaPIUuAlbaranVentaComponent;
    /** Detail 1 visible or not */
    public d1Visible = true;
    /** Detail component 2 */
    public d2: FacturaVentaPIUuFacturaVentaClienteComponent;
    /** Detail 2 visible or not */
    public d2Visible = true;
    /** Detail component 3 */
    public d3: InstalacionPIUuInstalacionComponent;
    /** Detail 3 visible or not */
    public d3Visible = true;
    /** Detail component 4 */
    public d4: ContratoPIUuContratoClienteComponent;
    /** Detail 4 visible or not */
    public d4Visible = true;
    /** Detail component 5 */
    public d5: DocumentoPIUuClientesComponent;
    /** Detail 5 visible or not */
    public d5Visible = true;
    /** Detail component 6 */
    public d6: ClienteIIUuClienteDireccionFiscalComponent;
    /** Detail 6 visible or not */
    public d6Visible = true;
    /** Detail component 7 */
    public d7: ClienteIIUuDatosContablesComponent;
    /** Detail 7 visible or not */
    public d7Visible = true;
    /** Detail component 8 */
    public d8: ClienteIIUuClienteDatosJuridicaComponent;
    /** Detail 8 visible or not */
    public d8Visible = true;
    /** Detail component 9 */
    public d9: ClienteIIUuClienteFacturaElectronicaComponent;
    /** Detail 9 visible or not */
    public d9Visible = true;
    /** Detail component 10 */
    public d10: ClienteIIUuClienteAdmonFincaComponent;
    /** Detail 10 visible or not */
    public d10Visible = true;
    /** Detail component 11 */
    public d11: ClienteIIUuClienteLogoComponent;
    /** Detail 11 visible or not */
    public d11Visible = true;

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
        this.idXML = 'Clas_1699352150016661UIMaDet_1';
        this.className = ModelConstants.Cliente.name;
        this.iuName = ModelConstants.Cliente.mdiuucliente;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Cliente_mdiu_MDIU_Cliente',
            'Cliente');
        // Create the details and assign the master detail container
        this.master = new ClienteIIUuClienteMComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016661UIMaDet_1Det_3',
            ['Cliente']);
        if (this.d0Visible) {
            this.d0 = new PresupuestoPIUuPresupuestoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d0.masterDetailContainer = this;
            this.details.push(this.d0);
        }
        this.d1Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016661UIMaDet_1Det_6',
            ['Cliente']);
        if (this.d1Visible) {
            this.d1 = new AlbaranVentaPIUuAlbaranVentaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d1.masterDetailContainer = this;
            this.details.push(this.d1);
        }
        this.d2Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016661UIMaDet_1Det_7',
            ['Cliente']);
        if (this.d2Visible) {
            this.d2 = new FacturaVentaPIUuFacturaVentaClienteComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d2.masterDetailContainer = this;
            this.details.push(this.d2);
        }
        this.d3Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016661UIMaDet_1Det_8',
            ['Cliente']);
        if (this.d3Visible) {
            this.d3 = new InstalacionPIUuInstalacionComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d3.masterDetailContainer = this;
            this.details.push(this.d3);
        }
        this.d4Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016661UIMaDet_1Det_9',
            ['Cliente']);
        if (this.d4Visible) {
            this.d4 = new ContratoPIUuContratoClienteComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d4.masterDetailContainer = this;
            this.details.push(this.d4);
        }
        this.d5Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016661UIMaDet_1Det_12',
            ['Cliente']);
        if (this.d5Visible) {
            this.d5 = new DocumentoPIUuClientesComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d5.masterDetailContainer = this;
            this.details.push(this.d5);
        }
        this.d6Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016661UIMaDet_1Det_13',
            ['Cliente']);
        if (this.d6Visible) {
            this.d6 = new ClienteIIUuClienteDireccionFiscalComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d6.masterDetailContainer = this;
            this.details.push(this.d6);
        }
        this.d7Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016661UIMaDet_1Det_14',
            ['Cliente']);
        if (this.d7Visible) {
            this.d7 = new ClienteIIUuDatosContablesComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d7.masterDetailContainer = this;
            this.details.push(this.d7);
        }
        this.d8Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016661UIMaDet_1Det_15',
            ['Cliente']);
        if (this.d8Visible) {
            this.d8 = new ClienteIIUuClienteDatosJuridicaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d8.masterDetailContainer = this;
            this.details.push(this.d8);
        }
        this.d9Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016661UIMaDet_1Det_18',
            ['Cliente']);
        if (this.d9Visible) {
            this.d9 = new ClienteIIUuClienteFacturaElectronicaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d9.masterDetailContainer = this;
            this.details.push(this.d9);
        }
        this.d10Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016661UIMaDet_1Det_19',
            ['Cliente']);
        if (this.d10Visible) {
            this.d10 = new ClienteIIUuClienteAdmonFincaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d10.masterDetailContainer = this;
            this.details.push(this.d10);
        }
        this.d11Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016661UIMaDet_1Det_20',
            ['Cliente']);
        if (this.d11Visible) {
            this.d11 = new ClienteIIUuClienteLogoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d11.masterDetailContainer = this;
            this.details.push(this.d11);
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
                'cls_Cliente_mdiu_MDIU_Cliente_detail_Clas_1699352150016661UIMaDet_1Det_3',
                'Presupuestos');
            this.d0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Presupuesto',
                this.master.getContext(), null, 'Instalacion.Cliente', null, 'Cliente', 'Clas_1699352150016661FiltNav_9'));
        }
        if (this.d1Visible) {
            this.d1.order = 1;
            this.d1.iuId = this.iuId + 'D1';
            this.d1.initializeComponents();
            this.d1.title = this.langMng.translateText(
                'cls_Cliente_mdiu_MDIU_Cliente_detail_Clas_1699352150016661UIMaDet_1Det_6',
                'Albaranes');
            this.d1.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('AlbaranVenta',
                this.master.getContext(), null, 'Cliente', null, 'Cliente', ''));
        }
        if (this.d2Visible) {
            this.d2.order = 2;
            this.d2.iuId = this.iuId + 'D2';
            this.d2.initializeComponents();
            this.d2.title = this.langMng.translateText(
                'cls_Cliente_mdiu_MDIU_Cliente_detail_Clas_1699352150016661UIMaDet_1Det_7',
                'Facturas');
            this.d2.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('FacturaVenta',
                this.master.getContext(), null, 'Cliente', null, 'Cliente', ''));
        }
        if (this.d3Visible) {
            this.d3.order = 3;
            this.d3.iuId = this.iuId + 'D3';
            this.d3.initializeComponents();
            this.d3.title = this.langMng.translateText(
                'cls_Cliente_mdiu_MDIU_Cliente_detail_Clas_1699352150016661UIMaDet_1Det_8',
                'Instalaciones');
            this.d3.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Instalacion',
                this.master.getContext(), null, 'Cliente', null, 'Cliente', ''));
        }
        if (this.d4Visible) {
            this.d4.order = 4;
            this.d4.iuId = this.iuId + 'D4';
            this.d4.initializeComponents();
            this.d4.title = this.langMng.translateText(
                'cls_Cliente_mdiu_MDIU_Cliente_detail_Clas_1699352150016661UIMaDet_1Det_9',
                'Contratos');
            this.d4.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Contrato',
                this.master.getContext(), null, 'Cliente', null, 'Cliente', ''));
        }
        if (this.d5Visible) {
            this.d5.order = 5;
            this.d5.iuId = this.iuId + 'D5';
            this.d5.initializeComponents();
            this.d5.title = this.langMng.translateText(
                'cls_Cliente_mdiu_MDIU_Cliente_detail_Clas_1699352150016661UIMaDet_1Det_12',
                'Documentos');
            this.d5.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Documento',
                this.master.getContext(), null, 'Cliente', null, 'Cliente', 'Clas_1699352150016661FiltNav_10'));
        }
        if (this.d6Visible) {
            this.d6.order = 6;
            this.d6.iuId = this.iuId + 'D6';
            this.d6.initializeComponents();
            this.d6.title = this.langMng.translateText(
                'cls_Cliente_mdiu_MDIU_Cliente_detail_Clas_1699352150016661UIMaDet_1Det_13',
                'Dirección fiscal');
            this.d6.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Cliente',
                this.master.getContext(), null, '', null, 'Cliente', ''));
        }
        if (this.d7Visible) {
            this.d7.order = 7;
            this.d7.iuId = this.iuId + 'D7';
            this.d7.initializeComponents();
            this.d7.title = this.langMng.translateText(
                'cls_Cliente_mdiu_MDIU_Cliente_detail_Clas_1699352150016661UIMaDet_1Det_14',
                'Datos contables');
            this.d7.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Cliente',
                this.master.getContext(), null, '', null, 'Cliente', ''));
        }
        if (this.d8Visible) {
            this.d8.order = 8;
            this.d8.iuId = this.iuId + 'D8';
            this.d8.initializeComponents();
            this.d8.title = this.langMng.translateText(
                'cls_Cliente_mdiu_MDIU_Cliente_detail_Clas_1699352150016661UIMaDet_1Det_15',
                'Persona jurídica');
            this.d8.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Cliente',
                this.master.getContext(), null, '', null, 'Cliente', ''));
        }
        if (this.d9Visible) {
            this.d9.order = 9;
            this.d9.iuId = this.iuId + 'D9';
            this.d9.initializeComponents();
            this.d9.title = this.langMng.translateText(
                'cls_Cliente_mdiu_MDIU_Cliente_detail_Clas_1699352150016661UIMaDet_1Det_18',
                'Factura electrónica');
            this.d9.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Cliente',
                this.master.getContext(), null, '', null, 'Cliente', ''));
        }
        if (this.d10Visible) {
            this.d10.order = 10;
            this.d10.iuId = this.iuId + 'D10';
            this.d10.initializeComponents();
            this.d10.title = this.langMng.translateText(
                'cls_Cliente_mdiu_MDIU_Cliente_detail_Clas_1699352150016661UIMaDet_1Det_19',
                'Administración Finca');
            this.d10.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Cliente',
                this.master.getContext(), null, '', null, 'Cliente', ''));
        }
        if (this.d11Visible) {
            this.d11.order = 11;
            this.d11.iuId = this.iuId + 'D11';
            this.d11.initializeComponents();
            this.d11.title = this.langMng.translateText(
                'cls_Cliente_mdiu_MDIU_Cliente_detail_Clas_1699352150016661UIMaDet_1Det_20',
                'Logo');
            this.d11.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Cliente',
                this.master.getContext(), null, '', null, 'Cliente', ''));
        }
        super.initializeComponents();
    }

}
