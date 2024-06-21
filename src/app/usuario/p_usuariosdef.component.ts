import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { UsuarioFilterFuUsuario} from './filters/usuariofilterfuusuario';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-usuario-p-usuariosdef',
    templateUrl: './p_usuariosdef.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsuarioPuUsuariosDEFComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsiduusuario = 'Código';
    private readonly dsnombrecompleto = 'Nombre completo';
    private readonly dsemail = 'Email';
    private readonly dstelefono = 'Móvil';
    private readonly dsesusuarioactivo = 'Activo';
    private readonly dsdepartamentodnombre = 'Departamento';
    private readonly dssupervisordnombrecompleto = 'Supervisor';

    /** Filters */
    public f0: UsuarioFilterFuUsuario;

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
        this.idXML = 'Clas_1699352150016260UIPobCl_2';
        this.className = ModelConstants.Usuario.name;
        this.iuName = ModelConstants.Usuario.puusuariosdef;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, []));
        this.title = this.langMng.translateText('cls_Usuario_piu_P_UsuariosDEF',
            'Usuarios');
        this.f0 = new UsuarioFilterFuUsuario(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun, usrFunc);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/UsuarioApi/GetPopulationDynamic';
        this.paginationInClient = false;
        // Hide filter variables area depending on screen resolution
        this.hideFilters = this.appGlobalInfo.hideFilters;
    }

    /**
     * It is the main component. Process the initial actions
     */
    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the display set elements
     */
    public initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016260CjtoVis_1ICtjoVis_1';
        dsItem.name = 'id_usuario';
        dsItem.field = 'id_usuario';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Usuario_ds_DS_Usuarios_item_Clas_1699352150016260CjtoVis_1ICtjoVis_1',
            this.dsiduusuario);
        dsItem.agents = [];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016260CjtoVis_1ICtjoVis_2';
        dsItem.name = 'nombrecompleto';
        dsItem.field = 'nombrecompleto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 200;
        dsItem.alias = this.langMng.translateText(
            'cls_Usuario_ds_DS_Usuarios_item_Clas_1699352150016260CjtoVis_1ICtjoVis_2',
            this.dsnombrecompleto);
        dsItem.agents = [];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016260CjtoVis_1ICtjoVis_3';
        dsItem.name = 'email';
        dsItem.field = 'email';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 300;
        dsItem.alias = this.langMng.translateText(
            'cls_Usuario_ds_DS_Usuarios_item_Clas_1699352150016260CjtoVis_1ICtjoVis_3',
            this.dsemail);
        dsItem.agents = [];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016260CjtoVis_1ICtjoVis_4';
        dsItem.name = 'telefono';
        dsItem.field = 'telefono';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Usuario_ds_DS_Usuarios_item_Clas_1699352150016260CjtoVis_1ICtjoVis_4',
            this.dstelefono);
        dsItem.agents = [];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016260CjtoVis_1ICtjoVis_5';
        dsItem.name = 'esusuarioactivo';
        dsItem.field = 'esusuarioactivo';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Usuario_ds_DS_Usuarios_item_Clas_1699352150016260CjtoVis_1ICtjoVis_5',
            this.dsesusuarioactivo);
        dsItem.agents = [];
        dsItem.options = DefinedSelections.DS_SI_NO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016260CjtoVis_1ICtjoVis_6';
        dsItem.name = 'departamento.nombre';
        dsItem.field = 'departamento-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Usuario_ds_DS_Usuarios_item_Clas_1699352150016260CjtoVis_1ICtjoVis_6',
            this.dsdepartamentodnombre);
        dsItem.agents = [];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1699352150016260CjtoVis_1ICtjoVis_7';
        dsItem.name = 'supervisor.nombrecompleto';
        dsItem.field = 'supervisor-nombrecompleto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 200;
        dsItem.alias = this.langMng.translateText(
            'cls_Usuario_ds_DS_Usuarios_item_Clas_1699352150016260CjtoVis_1ICtjoVis_7',
            this.dssupervisordnombrecompleto);
        dsItem.agents = [];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
