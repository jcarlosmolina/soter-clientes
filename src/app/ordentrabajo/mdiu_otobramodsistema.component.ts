import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { OrdenTrabajoIIUuOrdenTrabajoProyectosComponent } from './iiu_ordentrabajoproyectos.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-ordentrabajo-mdiu-otobramodsistema',
    templateUrl: './mdiu_otobramodsistema.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdenTrabajoMDIUuOTObraModSistemaComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: OrdenTrabajoIIUuOrdenTrabajoProyectosComponent;

    /** Details */

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
        this.idXML = 'Clas_1699352150016871UIMaDet_3';
        this.className = ModelConstants.Ordentrabajo.name;
        this.iuName = ModelConstants.Ordentrabajo.mdiuuotobramodsistema;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_OrdenTrabajo_mdiu_MDIU_OTObraModSistema',
            'Modificaciones sistema');
        // Create the details and assign the master detail container
        this.master = new OrdenTrabajoIIUuOrdenTrabajoProyectosComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
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
        super.initializeComponents();
    }

}
