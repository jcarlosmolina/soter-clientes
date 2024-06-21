import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { InstalacionIIUuInstalacionComponent } from './iiu_instalacion.component';
import { ContactoPIUuInstalacionComponent } from '../contacto/piu_instalacion.component';
import { SistemaPIUuSistemaComponent } from '../sistema/piu_sistema.component';
import { PresupuestoPIUuPresupuestoComponent } from '../presupuesto/piu_presupuesto.component';
import { OrdenTrabajoPIUuOrdenTrabajo4InstalacionComponent } from '../ordentrabajo/piu_ordentrabajo4instalacion.component';
import { ParteTrabajoPIUuParteTrabajo4InstalacionComponent } from '../partetrabajo/piu_partetrabajo4instalacion.component';
import { ContratoPIUuContratoInstalacionComponent } from '../contrato/piu_contratoinstalacion.component';
import { DocumentoPIUuInstalacionComponent } from '../documento/piu_instalacion.component';
import { InstalacionIIUuDatosContablesComponent } from './iiu_datoscontables.component';
import { InstalacionIIUuFactElectronicaComponent } from './iiu_factelectronica.component';
import { ImagenPIUuImagenesuInstalacionComponent } from '../imagen/piu_imagenes_instalacion.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-instalacion-mdiu-instalacion',
    templateUrl: './mdiu_instalacion.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstalacionMDIUuInstalacionComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: InstalacionIIUuInstalacionComponent;

    /** Details */
    /** Detail component 0 */
    public d0: ContactoPIUuInstalacionComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;
    /** Detail component 1 */
    public d1: SistemaPIUuSistemaComponent;
    /** Detail 1 visible or not */
    public d1Visible = true;
    /** Detail component 2 */
    public d2: PresupuestoPIUuPresupuestoComponent;
    /** Detail 2 visible or not */
    public d2Visible = true;
    /** Detail component 3 */
    public d3: OrdenTrabajoPIUuOrdenTrabajo4InstalacionComponent;
    /** Detail 3 visible or not */
    public d3Visible = true;
    /** Detail component 4 */
    public d4: ParteTrabajoPIUuParteTrabajo4InstalacionComponent;
    /** Detail 4 visible or not */
    public d4Visible = true;
    /** Detail component 5 */
    public d5: ContratoPIUuContratoInstalacionComponent;
    /** Detail 5 visible or not */
    public d5Visible = true;
    /** Detail component 6 */
    public d6: DocumentoPIUuInstalacionComponent;
    /** Detail 6 visible or not */
    public d6Visible = true;
    /** Detail component 7 */
    public d7: InstalacionIIUuDatosContablesComponent;
    /** Detail 7 visible or not */
    public d7Visible = true;
    /** Detail component 8 */
    public d8: InstalacionIIUuFactElectronicaComponent;
    /** Detail 8 visible or not */
    public d8Visible = true;
    /** Detail component 9 */
    public d9: ImagenPIUuImagenesuInstalacionComponent;
    /** Detail 9 visible or not */
    public d9Visible = true;

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
        this.idXML = 'Clas_1699352150016405UIMaDet_1';
        this.className = ModelConstants.Instalacion.name;
        this.iuName = ModelConstants.Instalacion.mdiuuinstalacion;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Instalacion_mdiu_MDIU_Instalacion',
            'Instalación');
        // Create the details and assign the master detail container
        this.master = new InstalacionIIUuInstalacionComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016405UIMaDet_1Det_1',
            ['Cliente']);
        if (this.d0Visible) {
            this.d0 = new ContactoPIUuInstalacionComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d0.masterDetailContainer = this;
            this.details.push(this.d0);
        }
        this.d1Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016405UIMaDet_1Det_2',
            ['Cliente']);
        if (this.d1Visible) {
            this.d1 = new SistemaPIUuSistemaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d1.masterDetailContainer = this;
            this.details.push(this.d1);
        }
        this.d2Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016405UIMaDet_1Det_3',
            ['Cliente']);
        if (this.d2Visible) {
            this.d2 = new PresupuestoPIUuPresupuestoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d2.masterDetailContainer = this;
            this.details.push(this.d2);
        }
        this.d3Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016405UIMaDet_1Det_6',
            ['Cliente']);
        if (this.d3Visible) {
            this.d3 = new OrdenTrabajoPIUuOrdenTrabajo4InstalacionComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d3.masterDetailContainer = this;
            this.details.push(this.d3);
        }
        this.d4Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016405UIMaDet_1Det_7',
            ['Cliente']);
        if (this.d4Visible) {
            this.d4 = new ParteTrabajoPIUuParteTrabajo4InstalacionComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d4.masterDetailContainer = this;
            this.details.push(this.d4);
        }
        this.d5Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016405UIMaDet_1Det_8',
            ['Cliente']);
        if (this.d5Visible) {
            this.d5 = new ContratoPIUuContratoInstalacionComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d5.masterDetailContainer = this;
            this.details.push(this.d5);
        }
        this.d6Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016405UIMaDet_1Det_9',
            ['Cliente']);
        if (this.d6Visible) {
            this.d6 = new DocumentoPIUuInstalacionComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d6.masterDetailContainer = this;
            this.details.push(this.d6);
        }
        this.d7Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016405UIMaDet_1Det_10',
            ['Cliente']);
        if (this.d7Visible) {
            this.d7 = new InstalacionIIUuDatosContablesComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d7.masterDetailContainer = this;
            this.details.push(this.d7);
        }
        this.d8Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016405UIMaDet_1Det_11',
            ['Cliente']);
        if (this.d8Visible) {
            this.d8 = new InstalacionIIUuFactElectronicaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d8.masterDetailContainer = this;
            this.details.push(this.d8);
        }
        this.d9Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016405UIMaDet_1Det_13',
            ['Cliente']);
        if (this.d9Visible) {
            this.d9 = new ImagenPIUuImagenesuInstalacionComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
                condNavMng, usrFunc);
            this.d9.masterDetailContainer = this;
            this.details.push(this.d9);
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
                'cls_Instalacion_mdiu_MDIU_Instalacion_detail_Clas_1699352150016405UIMaDet_1Det_1',
                'Contactos');
            this.d0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Contacto',
                this.master.getContext(), null, 'Instalacion', null, 'Instalacion', ''));
        }
        if (this.d1Visible) {
            this.d1.order = 1;
            this.d1.iuId = this.iuId + 'D1';
            this.d1.initializeComponents();
            this.d1.title = this.langMng.translateText(
                'cls_Instalacion_mdiu_MDIU_Instalacion_detail_Clas_1699352150016405UIMaDet_1Det_2',
                'Sistemas');
            this.d1.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Sistema',
                this.master.getContext(), null, 'Instalacion', null, 'Instalacion', ''));
        }
        if (this.d2Visible) {
            this.d2.order = 2;
            this.d2.iuId = this.iuId + 'D2';
            this.d2.initializeComponents();
            this.d2.title = this.langMng.translateText(
                'cls_Instalacion_mdiu_MDIU_Instalacion_detail_Clas_1699352150016405UIMaDet_1Det_3',
                'Presupuestos');
            this.d2.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Presupuesto',
                this.master.getContext(), null, 'Instalacion', null, 'Instalacion', ''));
        }
        if (this.d3Visible) {
            this.d3.order = 3;
            this.d3.iuId = this.iuId + 'D3';
            this.d3.initializeComponents();
            this.d3.title = this.langMng.translateText(
                'cls_Instalacion_mdiu_MDIU_Instalacion_detail_Clas_1699352150016405UIMaDet_1Det_6',
                'Órdenes de trabajo');
            this.d3.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('OrdenTrabajo',
                this.master.getContext(), null, 'Instalacion', null, 'Instalacion', ''));
        }
        if (this.d4Visible) {
            this.d4.order = 4;
            this.d4.iuId = this.iuId + 'D4';
            this.d4.initializeComponents();
            this.d4.title = this.langMng.translateText(
                'cls_Instalacion_mdiu_MDIU_Instalacion_detail_Clas_1699352150016405UIMaDet_1Det_7',
                'Partes de Trabajo');
            this.d4.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('ParteTrabajo',
                this.master.getContext(), null, 'OrdenTrabajo.Instalacion', null, 'Instalacion', ''));
        }
        if (this.d5Visible) {
            this.d5.order = 5;
            this.d5.iuId = this.iuId + 'D5';
            this.d5.initializeComponents();
            this.d5.title = this.langMng.translateText(
                'cls_Instalacion_mdiu_MDIU_Instalacion_detail_Clas_1699352150016405UIMaDet_1Det_8',
                'Contratos');
            this.d5.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Contrato',
                this.master.getContext(), null, 'Instalacion', null, 'Instalacion', ''));
        }
        if (this.d6Visible) {
            this.d6.order = 6;
            this.d6.iuId = this.iuId + 'D6';
            this.d6.initializeComponents();
            this.d6.title = this.langMng.translateText(
                'cls_Instalacion_mdiu_MDIU_Instalacion_detail_Clas_1699352150016405UIMaDet_1Det_9',
                'Documentos');
            this.d6.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Documento',
                this.master.getContext(), null, 'Instalacion', null, 'Instalacion', 'Clas_1699352150016405FiltNav_8'));
        }
        if (this.d7Visible) {
            this.d7.order = 7;
            this.d7.iuId = this.iuId + 'D7';
            this.d7.initializeComponents();
            this.d7.title = this.langMng.translateText(
                'cls_Instalacion_mdiu_MDIU_Instalacion_detail_Clas_1699352150016405UIMaDet_1Det_10',
                'Datos Contables');
            this.d7.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Instalacion',
                this.master.getContext(), null, '', null, 'Instalacion', ''));
        }
        if (this.d8Visible) {
            this.d8.order = 8;
            this.d8.iuId = this.iuId + 'D8';
            this.d8.initializeComponents();
            this.d8.title = this.langMng.translateText(
                'cls_Instalacion_mdiu_MDIU_Instalacion_detail_Clas_1699352150016405UIMaDet_1Det_11',
                'Factura Electrónica');
            this.d8.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Instalacion',
                this.master.getContext(), null, '', null, 'Instalacion', ''));
        }
        if (this.d9Visible) {
            this.d9.order = 9;
            this.d9.iuId = this.iuId + 'D9';
            this.d9.initializeComponents();
            this.d9.title = this.langMng.translateText(
                'cls_Instalacion_mdiu_MDIU_Instalacion_detail_Clas_1699352150016405UIMaDet_1Det_13',
                'Fotos');
            this.d9.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Imagen',
                this.master.getContext(), null, 'Instalacion', null, 'Instalacion', ''));
        }
        super.initializeComponents();
    }

}
