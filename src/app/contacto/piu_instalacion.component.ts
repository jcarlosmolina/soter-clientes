import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

export class ContactoPIUuInstalacionComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsiducontacto = 'Código';
    private readonly dstipocontactoddescripcion = 'Tipo';
    private readonly dsnombre = 'Nombre';
    private readonly dstelefono1 = 'Teléfono 1';
    private readonly dstelefono2 = 'Teléfono 2';
    private readonly dsfax = 'Fax';
    private readonly dsemail = 'Email';
    private readonly dsrecibepresupuestos = 'Recibe presupuestos';
    private readonly dsrecibepartes = 'Recibe partes';
    private readonly dsrecibefacturas = 'Recibe facturas';

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
        super(appGlobalInfo, util, changeDetectorRef, langMng, condNavMng);
        this.idXML = 'Clas_1699352150016154UIPobCl_2';
        this.className = ModelConstants.Contacto.name;
        this.iuName = 'PIU_Instalacion';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.title = this.langMng.translateText('cls_Contacto_piu_PIU_Instalacion',
            'Contactos');
        this.queryURL = '/api/ContactoApi/GetPopulationDynamic';
        this.paginationInClient = false;
        // Hide filter variables area depending on screen resolution
        this.hideFilters = this.appGlobalInfo.hideFilters;
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016154CjtoVis_2ICtjoVis_1';
        dsItem.name = 'id_contacto';
        dsItem.field = 'id_contacto';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_Contacto_ds_DSP_Contacto_item_Clas_1699352150016154CjtoVis_2ICtjoVis_1',
            this.dsiducontacto);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016154CjtoVis_2ICtjoVis_2';
        dsItem.name = 'tipocontacto.descripcion';
        dsItem.field = 'tipocontacto-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Contacto_ds_DSP_Contacto_item_Clas_1699352150016154CjtoVis_2ICtjoVis_2',
            this.dstipocontactoddescripcion);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016154CjtoVis_2ICtjoVis_3';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Contacto_ds_DSP_Contacto_item_Clas_1699352150016154CjtoVis_2ICtjoVis_3',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016154CjtoVis_2ICtjoVis_4';
        dsItem.name = 'telefono1';
        dsItem.field = 'telefono1';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_Contacto_ds_DSP_Contacto_item_Clas_1699352150016154CjtoVis_2ICtjoVis_4',
            this.dstelefono1);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016154CjtoVis_2ICtjoVis_5';
        dsItem.name = 'telefono2';
        dsItem.field = 'telefono2';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_Contacto_ds_DSP_Contacto_item_Clas_1699352150016154CjtoVis_2ICtjoVis_5',
            this.dstelefono2);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016154CjtoVis_2ICtjoVis_6';
        dsItem.name = 'fax';
        dsItem.field = 'fax';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_Contacto_ds_DSP_Contacto_item_Clas_1699352150016154CjtoVis_2ICtjoVis_6',
            this.dsfax);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016154CjtoVis_2ICtjoVis_7';
        dsItem.name = 'email';
        dsItem.field = 'email';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Contacto_ds_DSP_Contacto_item_Clas_1699352150016154CjtoVis_2ICtjoVis_7',
            this.dsemail);
        dsItem.agents = [ModelConstants.Cliente.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016154CjtoVis_2ICtjoVis_8';
        dsItem.name = 'recibepresupuestos';
        dsItem.field = 'recibepresupuestos';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Contacto_ds_DSP_Contacto_item_Clas_1699352150016154CjtoVis_2ICtjoVis_8',
            this.dsrecibepresupuestos);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_SI_NO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016154CjtoVis_2ICtjoVis_9';
        dsItem.name = 'recibepartes';
        dsItem.field = 'recibepartes';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Contacto_ds_DSP_Contacto_item_Clas_1699352150016154CjtoVis_2ICtjoVis_9',
            this.dsrecibepartes);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_SI_NO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016154CjtoVis_2ICtjoVis_10';
        dsItem.name = 'recibefacturas';
        dsItem.field = 'recibefacturas';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Contacto_ds_DSP_Contacto_item_Clas_1699352150016154CjtoVis_2ICtjoVis_10',
            this.dsrecibefacturas);
        dsItem.agents = [ModelConstants.Cliente.name];
        dsItem.options = DefinedSelections.DS_SI_NO;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1699352150016154AccOfer_2ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Contacto_act_A_Instalacion_item_Clas_1699352150016154AccOfer_2ElemAcc_1',
            'Alta');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Cliente.name];
        accItem.targetClass = ModelConstants.Contacto.name;
        accItem.targetUI = ModelConstants.Contacto.siuutcrear4instalacion;
        accItem.setShowInModalProperties('imes-contacto-siu-tcrear4instalacion',
            this.langMng.translateText(
            'cls_Contacto_svc_TCREAR4INSTALACION',
            'Alta'));

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1699352150016154AccOfer_2ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Contacto_act_A_Instalacion_item_Clas_1699352150016154AccOfer_2ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Cliente.name];
        accItem.targetClass = ModelConstants.Contacto.name;
        accItem.targetUI = ModelConstants.Contacto.siuuedituinstance;
        accItem.setShowInModalProperties('imes-contacto-siu-edit-instance',
            this.langMng.translateText(
            'cls_Contacto_svc_edit_instance',
            'Modificar'));

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1699352150016154AccOfer_2ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Contacto_act_A_Instalacion_item_Clas_1699352150016154AccOfer_2ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Cliente.name];
        accItem.targetClass = ModelConstants.Contacto.name;
        accItem.targetUI = ModelConstants.Contacto.siuudeleteuinstance;
        accItem.setNoShowProperties('delete_instance', 'p_thiscontacto_oid', '', false);

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
