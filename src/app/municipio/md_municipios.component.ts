import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { MunicipioIIUuMunicipioComponent } from './iiu_municipio.component';
import { CodigoPostalPuCodigoPostalesu4MunicipioComponent } from '../codigopostal/p_codigopostales_4municipio.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-municipio-md-municipios',
    templateUrl: './md_municipios.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MunicipioMDuMunicipiosComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: MunicipioIIUuMunicipioComponent;

    /** Details */
    /** Detail component 0 */
    public d0: CodigoPostalPuCodigoPostalesu4MunicipioComponent;
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
        this.idXML = 'Clas_1699352150016603UIMaDet_1';
        this.className = ModelConstants.Municipio.name;
        this.iuName = ModelConstants.Municipio.mdumunicipios;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Municipio_mdiu_MD_Municipios',
            'Municipios');
        // Create the details and assign the master detail container
        this.master = new MunicipioIIUuMunicipioComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1699352150016603UIMaDet_1Det_1',
            ['Cliente']);
        if (this.d0Visible) {
            this.d0 = new CodigoPostalPuCodigoPostalesu4MunicipioComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
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
                'cls_Municipio_mdiu_MD_Municipios_detail_Clas_1699352150016603UIMaDet_1Det_1',
                'Códigos Postales');
            this.d0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('CodigoPostal',
                this.master.getContext(), null, 'Municipios', null, 'Municipio', ''));
        }
        super.initializeComponents();
    }

}
