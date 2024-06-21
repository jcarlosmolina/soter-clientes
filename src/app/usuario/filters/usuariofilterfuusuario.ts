import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { InstanceCache } from '../../common/app.cachedependencyrules';
import { ModelConstants } from '../../common/model.constants';
import { Field, FieldDefinedSelection, FieldOVLenseSearch, Instance } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { ExchangeInfo } from '../../common/app.exchangeinfo';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';
import { DefinedSelections } from '../../common/definedSelection';
import { UserFunctions } from '../../common/userFunctions';

/**
 * Manages the filter F_Usuario of class Usuario
 */
export class UsuarioFilterFuUsuario extends AbstractFilter {

    /** Filter variables */
    public vCodigo: Field;
    public vNombre: Field;
    public vEsActivo: FieldDefinedSelection;
    public vPerfil: FieldOVLenseSearch;

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param stdFun Standard functions
     * @param usrFunc User functions
     */
    constructor(public appGlobalInfo: AppGlobalInfo,
                public util: Util,
                public changeDetectorRef: ChangeDetectorRef,
                public langMng: LanguageMng,
                public stdFun: StandardFunctions, public usrFunc: UserFunctions) {
        super(appGlobalInfo, util, changeDetectorRef);
        this.title = this.langMng.translateText('cls_Usuario_filter_F_Usuario',
            'Buscar');
        this.filterName = 'F_Usuario';
    }

    /**
     * Initialize the filter
     */
    public initializeComponents(): void {

        this.vCodigo = new Field(this.langMng);
        this.vCodigo.nameInRequest = 'vcodigo';
        this.vCodigo.alias = this.langMng.translateText(
            'cls_Usuario_filter_F_Usuario_fvar_vCodigo',
            'Codigo');
        this.vCodigo.visible = true;
        this.vCodigo.enabled = true;
        this.vCodigo.mandatory = false;
        this.vCodigo.dataType = Field.dtString;
        this.vCodigo.maxLength = 50;
        this.vCodigo.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vCodigo);

        this.vNombre = new Field(this.langMng);
        this.vNombre.nameInRequest = 'vnombre';
        this.vNombre.alias = this.langMng.translateText(
            'cls_Usuario_filter_F_Usuario_fvar_vNombre',
            'Nombre');
        this.vNombre.visible = true;
        this.vNombre.enabled = true;
        this.vNombre.mandatory = false;
        this.vNombre.dataType = Field.dtString;
        this.vNombre.maxLength = 40;
        this.vNombre.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vNombre);

        this.vEsActivo = new FieldDefinedSelection(this.langMng);
        this.vEsActivo.nameInRequest = 'vesactivo';
        this.vEsActivo.alias = this.langMng.translateText(
            'cls_Usuario_filter_F_Usuario_fvar_vEsActivo',
            'Activo');
        this.vEsActivo.visible = true;
        this.vEsActivo.enabled = true;
        this.vEsActivo.mandatory = false;
        this.vEsActivo.dataType = Field.dtBool;
        this.vEsActivo.options = DefinedSelections.DS_SI_NO;
        this.vEsActivo.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vEsActivo);

        this.vPerfil = new FieldOVLenseSearch(this.langMng);
        this.vPerfil.nameInRequest = 'vperfil';
        this.vPerfil.alias = this.langMng.translateText(
            'cls_Usuario_filter_F_Usuario_fvar_vPerfil',
            'Perfil');
        this.vPerfil.visible = true;
        this.vPerfil.enabled = true;
        this.vPerfil.mandatory = false;
        this.vPerfil.dataType = ModelConstants.Perfil.name;
        this.vPerfil.text = '';
        this.vPerfil.searchResults = [];
        this.vPerfil.allowMultiSelect = false;
        this.vPerfil.maxLength = 50;
        this.vPerfil.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vPerfil);
    }

   /**
    * Process the selection backward navigation
    */
    public processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (exchInfo.originArgumentName === 'vPerfil' && exchInfo.selectedOids && exchInfo.selectedOids.length > 0) {
            this.vPerfil.setValue(exchInfo.selectedOids);
            this.executeDependecyRulesvperfil('SetValue', true);
        }

    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('vPerfil'.toLowerCase() === argumentName.toLowerCase()) {
            this.vPerfil.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'P_Perfiles';
            exchInfo.navigationalFilterIdentity = ['Usuario_F_Usuario_vPerfil_NavFilter'];
            exchInfo.navigationalFilterVariables = this.getNavigationFilterVariables();
            this.util.navigateSelectionForward(exchInfo);
        }
    }

    /**
     * Process the change in the search text in the vPerfil variable
     */
    public onvperfilChange() {
        this.executeLenseSearch(this.vPerfil, ModelConstants.Perfil.name, 'DSI_Perfil', ['Usuario_F_Usuario_vPerfil_NavFilter']);
        this.executeDependecyRulesvperfil('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the vPerfil variable
     */
    public processvperfilSelected(index: number): void {
        this.vPerfil.processIndexSelected(index);
        this.executeDependecyRulesvperfil('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisCliente lense search argument
     */
    public cleanvperfil(): void {
        this.clearValidationMessages();
        this.vPerfil.clean();
        this.executeDependecyRulesvperfil('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Set the supplementary information to the vPerfil argument
     */
    private setSuppInfovperfil(): void {
        this.setSuplementaryInformationToField(this.vPerfil, ModelConstants.Perfil.name, 'Nombre');
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for vPerfil variable
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesvperfil(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfovperfil();
        }
        this.executePendingDependencyRules();
    }
}
