import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { CacheDependencyRules, InstanceCache } from '../common/app.cachedependencyrules';
import { Field, FieldDefinedSelection, FieldOVPreload, Instance } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';
@Component({
    selector: 'imes-aviso-siu-tcrear',
    templateUrl: './siu_tcrear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvisoSIUuTCREARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public pInstalacion: FieldOVPreload;
    public pDescripcion: Field;
    public pUrgencia: FieldDefinedSelection;
    public pTitulo: Field;

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
        this.idXML = 'Clas_1702835912704292Ser_4UIServ_1';
        this.className = ModelConstants.Aviso.name;
        this.iuName = ModelConstants.Aviso.siuutcrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Cliente']));
        this.serviceName = 'TCREAR';
        this.title = this.langMng.translateText('cls_Aviso_svc_TCREAR',
            'Reportar aviso');
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public initializeComponents(): void {

        this.pInstalacion = new FieldOVPreload(this.langMng);
        this.pInstalacion.nameInRequest = 'pinstalacion';
        this.pInstalacion.alias = this.langMng.translateText(
            'cls_Aviso_svc_TCREAR_inArg_pInstalacion',
            'Instalación');
        this.pInstalacion.mandatory = true;
        this.pInstalacion.dataType = ModelConstants.Instalacion.name;
        this.pInstalacion.maxLength = 100;
        this.pInstalacion.assignCSS();
        this.fields.push(this.pInstalacion);

        this.pDescripcion = new Field(this.langMng);
        this.pDescripcion.nameInRequest = 'pdescripcion';
        this.pDescripcion.alias = this.langMng.translateText(
            'cls_Aviso_svc_TCREAR_inArg_pDescripcion',
            'Descripción');
        this.pDescripcion.mandatory = true;
        this.pDescripcion.dataType = Field.dtText;
        this.pDescripcion.assignCSS();
        this.fields.push(this.pDescripcion);

        this.pUrgencia = new FieldDefinedSelection(this.langMng);
        this.pUrgencia.nameInRequest = 'purgencia';
        this.pUrgencia.alias = this.langMng.translateText(
            'cls_Aviso_svc_TCREAR_inArg_pUrgencia',
            'Urgencia');
        this.pUrgencia.mandatory = true;
        this.pUrgencia.dataType = Field.dtString;
        this.pUrgencia.options = DefinedSelections.DS_TAREA_URGENCIA;
        this.pUrgencia.maxLength = 2;
        this.pUrgencia.assignCSS();
        this.fields.push(this.pUrgencia);

        this.pTitulo = new Field(this.langMng);
        this.pTitulo.nameInRequest = 'ptitulo';
        this.pTitulo.alias = this.langMng.translateText(
            'cls_Aviso_svc_TCREAR_inArg_pTitulo',
            'Título');
        this.pTitulo.mandatory = true;
        this.pTitulo.dataType = Field.dtString;
        this.pTitulo.maxLength = 300;
        this.pTitulo.assignCSS();
        this.fields.push(this.pTitulo);
    }

    /**
     * Initialize arguments from context that identify a Role
     */
    public initializeFromCtxRelated(): void {
        const lastRole = this.context.exchangeInfo.getLastNavigationRole();
        const lastRoleOid = this.context.exchangeInfo.getLastNavigationRoleOid();

        if (lastRole && lastRoleOid !== {}) {
            if (lastRole === 'Instalacion') {
                this.pInstalacion.setValue(lastRoleOid);
                this.pInstalacion.enabled = false;
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public loadPreload(): void {

        // pInstalacion
        const navFilterspInstalacion: string[] = [];
        navFilterspInstalacion.push('Aviso_TCREAR_pInstalacion_NavFilter0');
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Instalacion', 'DSS_Instalacion', navFilterspInstalacion, this.getNavigationFilterVariables(), '').then(
            (response: any) => {
                if (response && response.results) {
                    this.pInstalacion.loadPreload(response.results);
                } else {
                    this.pInstalacion.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.notifyAnswerFromToTheBackEnd();
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.processErrorInLoadPreload(response.resultDescription);
            }
        );
        this.numberOfPendingPreload++;
    }
}
