import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { CacheDependencyRules, InstanceCache } from '../common/app.cachedependencyrules';
import { Field, FieldOVLenseSearch, Instance } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';
@Component({
    selector: 'imes-cliente-siu-tmodificarpersjuridica',
    templateUrl: './siu_tmodificarpersjuridica.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClienteSIUuTMODIFICARPERSJURIDICAComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisCliente: FieldOVLenseSearch;
    public pRepresentanteLegal: Field;
    public pDNIRepresentante: Field;
    public pNotario: Field;
    public pFechaConstitucion: Field;
    public pProtocolo: Field;
    public pRegistroMercantil: Field;

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
        this.idXML = 'Clas_1699352150016661Ser_59UIServ_1';
        this.className = ModelConstants.Cliente.name;
        this.iuName = ModelConstants.Cliente.siuutmodificarpersjuridica;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.serviceName = 'TMODIFICARPERSJURIDICA';
        this.title = this.langMng.translateText('cls_Cliente_svc_TMODIFICARPERSJURIDICA',
            'Modificar');
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public initializeComponents(): void {

        this.puthisCliente = new FieldOVLenseSearch(this.langMng);
        this.puthisCliente.nameInRequest = 'p_thiscliente';
        this.puthisCliente.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARPERSJURIDICA_inArg_p_thisCliente',
            'Cliente');
        this.puthisCliente.visible = this.util.isNull(this.queryContainer) ||
            this.queryContainer.className !== this.className;
        this.puthisCliente.mandatory = true;
        this.puthisCliente.dataType = ModelConstants.Cliente.name;
        this.puthisCliente.maxLength = 300;
        this.puthisCliente.assignCSS();
        this.fields.push(this.puthisCliente);

        this.pRepresentanteLegal = new Field(this.langMng);
        this.pRepresentanteLegal.nameInRequest = 'prepresentantelegal';
        this.pRepresentanteLegal.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARPERSJURIDICA_inArg_pRepresentanteLegal',
            'Representante legal');
        this.pRepresentanteLegal.mandatory = false;
        this.pRepresentanteLegal.dataType = Field.dtString;
        this.pRepresentanteLegal.maxLength = 300;
        this.pRepresentanteLegal.fieldSize = 50;
        this.pRepresentanteLegal.assignCSS();
        this.fields.push(this.pRepresentanteLegal);

        this.pDNIRepresentante = new Field(this.langMng);
        this.pDNIRepresentante.nameInRequest = 'pdnirepresentante';
        this.pDNIRepresentante.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARPERSJURIDICA_inArg_pDNIRepresentante',
            'DNI representante');
        this.pDNIRepresentante.mandatory = false;
        this.pDNIRepresentante.dataType = Field.dtString;
        this.pDNIRepresentante.maxLength = 30;
        this.pDNIRepresentante.fieldSize = 10;
        this.pDNIRepresentante.assignCSS();
        this.fields.push(this.pDNIRepresentante);

        this.pNotario = new Field(this.langMng);
        this.pNotario.nameInRequest = 'pnotario';
        this.pNotario.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARPERSJURIDICA_inArg_pNotario',
            'Notario');
        this.pNotario.mandatory = false;
        this.pNotario.dataType = Field.dtString;
        this.pNotario.maxLength = 300;
        this.pNotario.fieldSize = 50;
        this.pNotario.assignCSS();
        this.fields.push(this.pNotario);

        this.pFechaConstitucion = new Field(this.langMng);
        this.pFechaConstitucion.nameInRequest = 'pfechaconstitucion';
        this.pFechaConstitucion.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARPERSJURIDICA_inArg_pFechaConstitucion',
            'Fecha constitución');
        this.pFechaConstitucion.mandatory = false;
        this.pFechaConstitucion.dataType = Field.dtDate;
        this.pFechaConstitucion.assignCSS();
        this.fields.push(this.pFechaConstitucion);

        this.pProtocolo = new Field(this.langMng);
        this.pProtocolo.nameInRequest = 'pprotocolo';
        this.pProtocolo.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARPERSJURIDICA_inArg_pProtocolo',
            'Protocolo');
        this.pProtocolo.mandatory = false;
        this.pProtocolo.dataType = Field.dtString;
        this.pProtocolo.maxLength = 50;
        this.pProtocolo.fieldSize = 20;
        this.pProtocolo.assignCSS();
        this.fields.push(this.pProtocolo);

        this.pRegistroMercantil = new Field(this.langMng);
        this.pRegistroMercantil.nameInRequest = 'pregistromercantil';
        this.pRegistroMercantil.alias = this.langMng.translateText(
            'cls_Cliente_svc_TMODIFICARPERSJURIDICA_inArg_pRegistroMercantil',
            'Registro mercantil');
        this.pRegistroMercantil.mandatory = false;
        this.pRegistroMercantil.dataType = Field.dtString;
        this.pRegistroMercantil.maxLength = 300;
        this.pRegistroMercantil.fieldSize = 20;
        this.pRegistroMercantil.assignCSS();
        this.fields.push(this.pRegistroMercantil);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo.selectedOidsClassName === 'Cliente' &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisCliente.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhiscliente('SetValue', true);
            this.puthisCliente.enabled = false;
            this.executeDependecyRulesputhiscliente('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisCliente'.toLowerCase()) {
            this.puthisCliente.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhiscliente('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisCliente argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhiscliente(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhiscliente();
        }
        if ('SetValue' === event && this.puthisCliente.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisCliente();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisCliente argument
     */
    private setSuppInfoputhiscliente(): void {

        const displaySetIC = 'NombreRazonSocial';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisCliente.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Cliente.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisCliente.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisCliente.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Cliente.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisCliente.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisCliente argument
     */
    private executeDependecyRules1puthisCliente(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisCliente,
                'representantelegal,dnirepresentante,notario,fechaconstitucion,protocolo,registromercantil');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisClienteActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisCliente argument
     */
    private executeDependecyRules1puthisClienteActions(): void {
        const varputhiscliente = this.getFirstInstanceFromCache(this.puthisCliente);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (!this.util.isNull(varputhiscliente)) {
            // pRepresentanteLegal.SetValue( v.representantelegal )
            this.pRepresentanteLegal.setValue(varputhiscliente.get('representantelegal'));
            // pDNIRepresentante.SetValue( v.dnirepresentante )
            this.pDNIRepresentante.setValue(varputhiscliente.get('dnirepresentante'));
            // pNotario.SetValue( v.notario )
            this.pNotario.setValue(varputhiscliente.get('notario'));
            // pFechaConstitucion.SetValue( v.fechaconstitucion )
            this.pFechaConstitucion.setValue(this.util.getDate(varputhiscliente.get('fechaconstitucion')));
            // pProtocolo.SetValue( v.protocolo )
            this.pProtocolo.setValue(varputhiscliente.get('protocolo'));
            // pRegistroMercantil.SetValue( v.registromercantil )
            this.pRegistroMercantil.setValue(varputhiscliente.get('registromercantil'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisCliente lense search argument
     */
    public onputhisclienteChange(): void {

        const searchText = this.puthisCliente.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisCliente.lastText) {
                this.puthisCliente.removeCSSClass('noResultsLenseSearch');
                this.puthisCliente.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Cliente.name, 'DSS_Cliente', searchText, [], null).then(
                        (response: any) => {
                            this.puthisCliente.removeCSSClass('noResultsLenseSearch');
                            this.puthisCliente.searchResults = response.results;
                            if (this.puthisCliente.searchResults &&
                                this.puthisCliente.searchResults.length === 0) {
                                this.puthisCliente.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisCliente.searchResults &&
                                this.puthisCliente.searchResults.length === 1) {
                                this.processputhisclienteSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisCliente.removeCSSClass('noResultsLenseSearch');
                            this.puthisCliente.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisCliente.removeCSSClass('noResultsLenseSearch');
            this.puthisCliente.searchResults = [];
            this.cleanputhiscliente();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisCliente lense search argument
     */
    public processputhisclienteSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisCliente.searchResults.length > index) {
            selectedInstance = this.puthisCliente.searchResults[index];
        }
        // Clean the result list
        this.puthisCliente.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisCliente.allowMultiSelect) {
                this.puthisCliente.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisCliente.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhiscliente('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisCliente lense search argument
     */
    public cleanputhiscliente(): void {
        this.clearValidationMessages();
        this.puthisCliente.clean();
        this.executeDependecyRulesputhiscliente('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisCliente'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisCliente.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'P_Clientes';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
