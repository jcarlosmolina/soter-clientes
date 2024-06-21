import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { ClienteIIUuClienteMPortalCliComponent } from './iiu_clientemportalcli.component';
import { ClienteIIUuDatosContablesPortalCliComponent } from './iiu_datoscontablesportalcli.component';
import { ClienteIIUuClienteDatosJuridicaComponent } from './iiu_clientedatosjuridica.component';
import { ClienteIIUuClienteDireccionFiscalComponent } from './iiu_clientedireccionfiscal.component';
import { ClienteIIUuClienteAdmonFincaComponent } from './iiu_clienteadmonfinca.component';
import { ClienteIIUuClienteLogoComponent } from './iiu_clientelogo.component';
import { DocumentoPIUuClientesPortalCliComponent } from '../documento/piu_clientesportalcli.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-cliente-mdiu-clienteportalcli',
    templateUrl: './mdiu_clienteportalcli.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClienteMDIUuClientePortalCliComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: ClienteIIUuClienteMPortalCliComponent;

    /** Details */
    /** Detail component 0 */
    public d0: ClienteIIUuDatosContablesPortalCliComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;
    /** Detail component 1 */
    public d1: ClienteIIUuClienteDatosJuridicaComponent;
    /** Detail 1 visible or not */
    public d1Visible = true;
    /** Detail component 2 */
    public d2: ClienteIIUuClienteDireccionFiscalComponent;
    /** Detail 2 visible or not */
    public d2Visible = true;
    /** Detail component 3 */
    public d3: ClienteIIUuClienteAdmonFincaComponent;
    /** Detail 3 visible or not */
    public d3Visible = true;
    /** Detail component 4 */
    public d4: ClienteIIUuClienteLogoComponent;
    /** Detail 4 visible or not */
    public d4Visible = true;
    /** Detail component 5 */
    public d5: DocumentoPIUuClientesPortalCliComponent;
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
        this.idXML = 'Clas_1699352150016661UIMaDet_2';
        this.className = ModelConstants.Cliente.name;
        this.iuName = ModelConstants.Cliente.mdiuuclienteportalcli;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Cliente_mdiu_MDIU_ClientePortalCli',
            'Perfil');
        // Create the details and assign the master detail container
        this.master = new ClienteIIUuClienteMPortalCliComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016661UIMaDet_2Det_21',
            ['Cliente']);
        if (this.d0Visible) {
            this.d0 = new ClienteIIUuDatosContablesPortalCliComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d0.masterDetailContainer = this;
            this.details.push(this.d0);
        }
        this.d1Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016661UIMaDet_2Det_15',
            ['Cliente']);
        if (this.d1Visible) {
            this.d1 = new ClienteIIUuClienteDatosJuridicaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d1.masterDetailContainer = this;
            this.details.push(this.d1);
        }
        this.d2Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016661UIMaDet_2Det_13',
            ['Cliente']);
        if (this.d2Visible) {
            this.d2 = new ClienteIIUuClienteDireccionFiscalComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d2.masterDetailContainer = this;
            this.details.push(this.d2);
        }
        this.d3Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016661UIMaDet_2Det_19',
            ['Cliente']);
        if (this.d3Visible) {
            this.d3 = new ClienteIIUuClienteAdmonFincaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d3.masterDetailContainer = this;
            this.details.push(this.d3);
        }
        this.d4Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016661UIMaDet_2Det_20',
            ['Cliente']);
        if (this.d4Visible) {
            this.d4 = new ClienteIIUuClienteLogoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d4.masterDetailContainer = this;
            this.details.push(this.d4);
        }
        this.d5Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016661UIMaDet_2Det_22',
            ['Cliente']);
        if (this.d5Visible) {
            this.d5 = new DocumentoPIUuClientesPortalCliComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
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
                'cls_Cliente_mdiu_MDIU_ClientePortalCli_detail_Clas_1699352150016661UIMaDet_2Det_21',
                'Datos contables');
            this.d0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Cliente',
                this.master.getContext(), null, '', null, 'Cliente', ''));
        }
        if (this.d1Visible) {
            this.d1.order = 1;
            this.d1.iuId = this.iuId + 'D1';
            this.d1.initializeComponents();
            this.d1.title = this.langMng.translateText(
                'cls_Cliente_mdiu_MDIU_ClientePortalCli_detail_Clas_1699352150016661UIMaDet_2Det_15',
                'Persona jurídica');
            this.d1.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Cliente',
                this.master.getContext(), null, '', null, 'Cliente', ''));
        }
        if (this.d2Visible) {
            this.d2.order = 2;
            this.d2.iuId = this.iuId + 'D2';
            this.d2.initializeComponents();
            this.d2.title = this.langMng.translateText(
                'cls_Cliente_mdiu_MDIU_ClientePortalCli_detail_Clas_1699352150016661UIMaDet_2Det_13',
                'Dirección fiscal');
            this.d2.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Cliente',
                this.master.getContext(), null, '', null, 'Cliente', ''));
        }
        if (this.d3Visible) {
            this.d3.order = 3;
            this.d3.iuId = this.iuId + 'D3';
            this.d3.initializeComponents();
            this.d3.title = this.langMng.translateText(
                'cls_Cliente_mdiu_MDIU_ClientePortalCli_detail_Clas_1699352150016661UIMaDet_2Det_19',
                'Administración finca');
            this.d3.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Cliente',
                this.master.getContext(), null, '', null, 'Cliente', ''));
        }
        if (this.d4Visible) {
            this.d4.order = 4;
            this.d4.iuId = this.iuId + 'D4';
            this.d4.initializeComponents();
            this.d4.title = this.langMng.translateText(
                'cls_Cliente_mdiu_MDIU_ClientePortalCli_detail_Clas_1699352150016661UIMaDet_2Det_20',
                'Logo');
            this.d4.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Cliente',
                this.master.getContext(), null, '', null, 'Cliente', ''));
        }
        if (this.d5Visible) {
            this.d5.order = 5;
            this.d5.iuId = this.iuId + 'D5';
            this.d5.initializeComponents();
            this.d5.title = this.langMng.translateText(
                'cls_Cliente_mdiu_MDIU_ClientePortalCli_detail_Clas_1699352150016661UIMaDet_2Det_22',
                'Documentos');
            this.d5.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Documento',
                this.master.getContext(), null, 'Cliente', null, 'Cliente', 'Clas_1699352150016661FiltNav_18'));
        }
        super.initializeComponents();
    }

}
