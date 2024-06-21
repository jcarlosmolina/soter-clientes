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

export class ClienteIIUuDatosContablesPortalCliComponent extends AbstractIIU {

    /** Display Set elements */
    public dseEntidadBancariaiduEntidadBancaria: Field;
    public dseSucursalBancariaiduSucursalBancaria: Field;
    public dseDCCuentaBancaria: Field;
    public dseCuentaBancaria: Field;
    public dseIBANCuentaBancaria: Field;
    public dseSwift: Field;

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
        this.idXML = 'Clas_1699352150016661UIInst_9';
        this.className = ModelConstants.Cliente.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Cliente_iiu_IIU_DatosContablesPortalCli',
            'Datos contables');
        this.queryURL = '/api/ClienteApi/GetPopulationDynamic';
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        this.dseEntidadBancariaiduEntidadBancaria = new Field(this.langMng);
        this.dseEntidadBancariaiduEntidadBancaria.nameInRequest = 'entidadbancaria.id_entidadbancaria';
        this.dseEntidadBancariaiduEntidadBancaria.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_DatosContablesPortalCli_item_Clas_1699352150016661CjtoVis_12ICtjoVis_4',
            'Entidad');
        this.dseEntidadBancariaiduEntidadBancaria.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_12ICtjoVis_4', ['Cliente']);
        this.dseEntidadBancariaiduEntidadBancaria.enabled = false;
        this.dseEntidadBancariaiduEntidadBancaria.mandatory = false;
        this.dseEntidadBancariaiduEntidadBancaria.dataType = Field.dtString;
        this.dseEntidadBancariaiduEntidadBancaria.maxLength = 5;
        this.dseEntidadBancariaiduEntidadBancaria.assignCSS();
        this.fields.push(this.dseEntidadBancariaiduEntidadBancaria);

        this.dseSucursalBancariaiduSucursalBancaria = new Field(this.langMng);
        this.dseSucursalBancariaiduSucursalBancaria.nameInRequest = 'sucursalbancaria.id_sucursalbancaria';
        this.dseSucursalBancariaiduSucursalBancaria.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_DatosContablesPortalCli_item_Clas_1699352150016661CjtoVis_12ICtjoVis_5',
            'Sucursal');
        this.dseSucursalBancariaiduSucursalBancaria.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_12ICtjoVis_5', ['Cliente']);
        this.dseSucursalBancariaiduSucursalBancaria.enabled = false;
        this.dseSucursalBancariaiduSucursalBancaria.mandatory = false;
        this.dseSucursalBancariaiduSucursalBancaria.dataType = Field.dtString;
        this.dseSucursalBancariaiduSucursalBancaria.maxLength = 5;
        this.dseSucursalBancariaiduSucursalBancaria.assignCSS();
        this.fields.push(this.dseSucursalBancariaiduSucursalBancaria);

        this.dseDCCuentaBancaria = new Field(this.langMng);
        this.dseDCCuentaBancaria.nameInRequest = 'dccuentabancaria';
        this.dseDCCuentaBancaria.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_DatosContablesPortalCli_item_Clas_1699352150016661CjtoVis_12ICtjoVis_6',
            'DC');
        this.dseDCCuentaBancaria.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_12ICtjoVis_6', ['Cliente']);
        this.dseDCCuentaBancaria.enabled = false;
        this.dseDCCuentaBancaria.mandatory = false;
        this.dseDCCuentaBancaria.dataType = Field.dtString;
        this.dseDCCuentaBancaria.maxLength = 2;
        this.dseDCCuentaBancaria.assignCSS();
        this.fields.push(this.dseDCCuentaBancaria);

        this.dseCuentaBancaria = new Field(this.langMng);
        this.dseCuentaBancaria.nameInRequest = 'cuentabancaria';
        this.dseCuentaBancaria.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_DatosContablesPortalCli_item_Clas_1699352150016661CjtoVis_12ICtjoVis_7',
            'Cuenta');
        this.dseCuentaBancaria.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_12ICtjoVis_7', ['Cliente']);
        this.dseCuentaBancaria.enabled = false;
        this.dseCuentaBancaria.mandatory = false;
        this.dseCuentaBancaria.dataType = Field.dtString;
        this.dseCuentaBancaria.maxLength = 10;
        this.dseCuentaBancaria.assignCSS();
        this.fields.push(this.dseCuentaBancaria);

        this.dseIBANCuentaBancaria = new Field(this.langMng);
        this.dseIBANCuentaBancaria.nameInRequest = 'ibancuentabancaria';
        this.dseIBANCuentaBancaria.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_DatosContablesPortalCli_item_Clas_1699352150016661CjtoVis_12ICtjoVis_8',
            'IBAN');
        this.dseIBANCuentaBancaria.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_12ICtjoVis_8', ['Cliente']);
        this.dseIBANCuentaBancaria.enabled = false;
        this.dseIBANCuentaBancaria.mandatory = false;
        this.dseIBANCuentaBancaria.dataType = Field.dtString;
        this.dseIBANCuentaBancaria.maxLength = 34;
        this.dseIBANCuentaBancaria.assignCSS();
        this.fields.push(this.dseIBANCuentaBancaria);

        this.dseSwift = new Field(this.langMng);
        this.dseSwift.nameInRequest = 'swift';
        this.dseSwift.alias = this.langMng.translateText(
            'cls_Cliente_ds_DSI_DatosContablesPortalCli_item_Clas_1699352150016661CjtoVis_12ICtjoVis_9',
            'Swift');
        this.dseSwift.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1699352150016661CjtoVis_12ICtjoVis_9', ['Cliente']);
        this.dseSwift.enabled = false;
        this.dseSwift.mandatory = false;
        this.dseSwift.dataType = Field.dtString;
        this.dseSwift.maxLength = 50;
        this.dseSwift.assignCSS();
        this.fields.push(this.dseSwift);

    }

    /**
     * Initialize the action items
     */
    public initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1699352150016661AccOfer_11ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Cliente_act_A_DatosContablesPortalCli_item_Clas_1699352150016661AccOfer_11ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Cliente.name];
        accItem.targetClass = ModelConstants.Cliente.name;
        accItem.targetUI = ModelConstants.Cliente.siuumodificardatoscontablescli;
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['estado'] });
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['estado'] });
        this.actions.push(accItem);

    }

    /**
     * Evaluate in advance the associated service preconditions to the action element
     * @param actionId Action element identification
     * @param rows Rows to be check
     */
    public checkPreconditionInAdvanceForRows(actionId: number, rows: any[]): boolean {
        let isEnabled = true;
        for (const row of rows) {
            if (actionId === 0) {
                isEnabled = this.checkPrecondicionInAdvanceNum0(row);
            }
        }
        return isEnabled;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 0
     * @param row Instance data
     */
    private checkPrecondicionInAdvanceNum0(row: any): boolean {
        // Estado <> "Bloqueado"
        if (!(!this.util.valueEquals(this.getRowData(row, 'estado'), 'Bloqueado'))) {
            return false;
        }
        // Estado <> "Baja"
        if (!(!this.util.valueEquals(this.getRowData(row, 'estado'), 'Baja'))) {
            return false;
        }
        return true;
    }
}
