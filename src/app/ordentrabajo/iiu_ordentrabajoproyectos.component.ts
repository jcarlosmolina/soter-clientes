import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field } from '../common/baseIUElements';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

export class OrdenTrabajoIIUuOrdenTrabajoProyectosComponent extends AbstractIIU {

    /** Display Set elements */
    public dseIdProyectoDrv: Field;

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
    constructor(
        public appGlobalInfo: AppGlobalInfo, public util: Util, public changeDetectorRef: ChangeDetectorRef,
        public langMng: LanguageMng, public stdFun: StandardFunctions,
        public condNavMng: ConditionalNavigationMng, public usrFunc: UserFunctions) {
        super(appGlobalInfo, util, changeDetectorRef, condNavMng);
        this.idXML = 'Clas_1699352150016871UIInst_5';
        this.className = ModelConstants.Ordentrabajo.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_OrdenTrabajo_iiu_IIU_OrdenTrabajoProyectos',
            'Proyecto');
        this.queryURL = '/api/OrdenTrabajoApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseIdProyectoDrv = new Field(this.langMng);
        this.dseIdProyectoDrv.nameInRequest = 'idproyectodrv';
        this.dseIdProyectoDrv.alias = this.langMng.translateText(
            'cls_OrdenTrabajo_ds_DS_OrdenTrabajoProyectos_item_Clas_1699352150016871CjtoVis_7ICtjoVis_1',
            'Proyecto');
        this.dseIdProyectoDrv.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016871CjtoVis_7ICtjoVis_1', ['Cliente']);
        this.dseIdProyectoDrv.enabled = false;
        this.dseIdProyectoDrv.mandatory = false;
        this.dseIdProyectoDrv.dataType = Field.dtString;
        this.dseIdProyectoDrv.maxLength = 50;
        this.dseIdProyectoDrv.assignCSS();
        this.fields.push(this.dseIdProyectoDrv);

    }
}
