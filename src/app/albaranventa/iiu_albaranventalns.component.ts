import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field, FieldDefinedSelection } from '../common/baseIUElements';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

export class AlbaranVentaIIUuAlbaranVentaLnsComponent extends AbstractIIU {

    /** Display Set elements */
    public dseClienteNumLineasFacturasCuota: FieldDefinedSelection;

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
        this.idXML = 'Clas_1699352150016564UIInst_3';
        this.className = ModelConstants.Albaranventa.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_AlbaranVenta_iiu_IIU_AlbaranVentaLns',
            'Agrupación de líneas de cuotas');
        this.queryURL = '/api/AlbaranVentaApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseClienteNumLineasFacturasCuota = new FieldDefinedSelection(this.langMng);
        this.dseClienteNumLineasFacturasCuota.nameInRequest = 'cliente.numlineasfacturascuota';
        this.dseClienteNumLineasFacturasCuota.alias = this.langMng.translateText(
            'cls_AlbaranVenta_ds_DSI_AlbaranVentaLns_item_Clas_1699352150016564CjtoVis_4ICtjoVis_1',
            'Criterio de agrupación de líneas');
        this.dseClienteNumLineasFacturasCuota.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016564CjtoVis_4ICtjoVis_1', ['Cliente']);
        this.dseClienteNumLineasFacturasCuota.enabled = false;
        this.dseClienteNumLineasFacturasCuota.mandatory = false;
        this.dseClienteNumLineasFacturasCuota.dataType = Field.dtString;
        this.dseClienteNumLineasFacturasCuota.maxLength = 5;
        this.dseClienteNumLineasFacturasCuota.options = DefinedSelections.DS_NUMLINEASFACTURA;
        this.dseClienteNumLineasFacturasCuota.assignCSS();
        this.fields.push(this.dseClienteNumLineasFacturasCuota);

    }
}
