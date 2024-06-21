import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from './app.utils';
import { LanguageMng } from './languageMng';
import { ExchangeInfo } from './app.exchangeinfo';
import { ModelConstants } from './model.constants';
import { ConditionalNavigationMng } from './conditionalNavigationMng';
import { Field } from './baseIUElements';
import { Subscription } from 'rxjs';
/**
 * Generic component for services under specific conditions
 *      Service has not inbound argments or only one and object valued that not allows null
 *      Service has not outbound arguments
 *      Service is not offered in the manu
 */
@Component({
    selector: 'genericsiu',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `

    <ng-container *ngIf="visible">
        <div style="text-align: center;margin-bottom: 10px;">
            <h2>{{title}}</h2>

            <div>
                <label class="control-label">{{argAlias}}</label>
                <label class="control-label" style="padding-left: 10px;">
                    {{argValue}}
                </label>
            </div>

        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 siuButtons">
            <button type="button" class="btnOk btn btn-primary" (click)="saveChanges()">
                {{langMng.translateText('app_SIU_BTNOK', '')}}</button>
            <button type="button" class="btnCancel btn btn-danger" (click)="processCancel()">
                {{langMng.translateText('app_SIU_BTNCANCEL', '')}}
            </button>
        </div>
    </ng-container>

  `
})
export class GenericSiuComponent implements OnInit {

    /** Exchange information */
    private exchangeInfo: ExchangeInfo;
    /** Target class name */
    private className: string;
    /** Target service interaction unit name */
    private serviceIUName: string;
    /** Target service name */
    private serviceName: string;
    /** Argument class name */
    private argClassName: string;
    /** Argument name */
    private argName: string;
    /** Argument name in request */
    private argNameInRequest: string;
    /** Supplementary information attribute names */
    private argSupInfAttNames: string;
    /** Supplementary attribute data types */
    private argSupInfAttTypes: string[];
    /** Service Interaction unit must not been shown */
    private siuHasNoShow = false;

    /** Title */
    public title = '';
    /** Argument alias */
    public argAlias: string;
    /** Argument value */
    public argValue: string;

    /** Progress bar subscription to manage the cancel */
    protected progressBarSubscription: Subscription;
    /** Selected Oids */
    private originalOidList: any[] = [];
    private oidList: any[] = [];

    /** Scenario is visible or not */
    public visible = true;

    constructor(
        protected appGlobalInfo: AppGlobalInfo,
        protected util: Util,
        public langMng: LanguageMng,
        protected condNavMng: ConditionalNavigationMng,
        public changeDetectorRef: ChangeDetectorRef) {
    }

    public ngOnInit(): void {
        this.util.hideWaitDialog();
        this.exchangeInfo = this.appGlobalInfo.appExchangeInfo.get();
        this.className = this.exchangeInfo.targetClassName;
        this.serviceIUName = this.exchangeInfo.targetIUName;

        if (this.configureSIU()) {
            // Get the selected instances
            if (this.siuHasNoShow) {
                this.visible = false;
            }
            if (this.argName) {
                // Navigational or custom initialization
                if (this.exchangeInfo.customData[this.argName]) {
                    this.originalOidList.push(this.exchangeInfo.customData[this.argName]);
                } else {
                    // Selected instance
                    if (this.exchangeInfo.selectedOidsClassName === this.argClassName) {
                        this.originalOidList = this.exchangeInfo.selectedOids;
                    } else {
                        // Any in the context stack
                        this.originalOidList = this.exchangeInfo.getOidsOfClass(this.argClassName);
                    }
                }
            }
            if (this.argName && this.originalOidList.length === 0) {
                // No Oid found
                this.title = 'Error';
                this.argAlias = 'No selected element';
                this.argValue = '';
            } else {
                this.showSuplementaryInformation();
            }
        } else {
            // Configuration has not been found
            this.title = 'Error';
            this.argAlias = 'Configuration not found';
            this.argValue = '';
        }
		this.appGlobalInfo.setScenarioTitle(this.title);
    }

    /**
     * Call service
     */
    public saveChanges(): void {
        this.oidList  = [];
        this.originalOidList.forEach(val => this.oidList.push(Object.assign({}, val)));

        if (this.oidList.length === 0) {
            this.executeService(null, [], 0, 1);
        } else {
            const totalOids = this.oidList.length;
            if (totalOids > 1) {
                this.progressBarSubscription = this.util.progessBarCancelResponse.subscribe(() => {
                    this.util.hideProgressBar();
                    this.oidList = [];
                    this.progressBarSubscription.unsubscribe();
                });
            }
            this.executeService(this.oidList.pop(), [], 0, totalOids);
        }
    }

    /**
     * Auxiliar function to manages the multiselection
     * @param oid Instance Oid
     * @param errorList List of errors
     * @param executionCount Execution counter
     * @param totalExecutions Total executions
     */
    private executeService(oid: any, errorList: string[], executionCount: number, totalExecutions: number): void {
        // Show progress bar or wait dialog
        if (totalExecutions > 1) {
            this.util.showProgressBar(this.title, executionCount + 1 === totalExecutions ? 99 :
                Math.round(((executionCount + 1) / totalExecutions) * 100), 0);
        } else {
            this.util.showWaitDialog();
        }
        let lOid = oid;
        if (this.argNameInRequest && this.argNameInRequest.endsWith('_json')) {
            lOid = JSON.stringify(oid);
        }
        this.util.executeNoShowService(this.className, this.serviceName, lOid, this.argNameInRequest).then(
            (data: {request: any, response: any}) => {
                executionCount++;
                if (data.response.resultCode !== '000' && data.response.resultCode !== '') {
                    errorList.push(data.response.resultDescription);
                }
                if (this.oidList.length === 0) {
                    if (errorList.length === 0) {
                        this.util.hideWaitDialog();
                        this.util.hideProgressBar();
                        if (executionCount <= 1) {
                            if (!this.condNavMng.processConditionalNavigation(this.className, this.serviceName,
                                data.request, data.response, this.exchangeInfo.previous, this.exchangeInfo.comeBackContext)) {
                                this.processCancel(true);
                            }
                        } else {
                            this.processCancel(true);
                        }
                    } else {
                        this.visible = true;
                        this.util.addErrorMessageList(errorList);
                        this.util.hideWaitDialog();
                        this.util.hideProgressBar();
                        this.changeDetectorRef.markForCheck();
                    }
                } else {
                    this.executeService(this.oidList.pop(), errorList, executionCount, totalExecutions);
                }
            }, (error: {request: any, response: any}) => {
                executionCount++;
                errorList.push(this.langMng.translateError(error.response));
                if (this.oidList.length === 0) {
                    this.visible = true;
                    this.util.addErrorMessageList(errorList);
                    this.util.hideWaitDialog();
                    this.util.hideProgressBar();
                    this.changeDetectorRef.markForCheck();
                } else {
                    this.executeService(this.oidList.pop(), errorList, executionCount, totalExecutions);
                }
            });
    }

    /**
     * Manages Cancel button
     * @param lastExecutionSuccess Tue if the execution was success or not
     */
    public processCancel(lastExecutionSuccess = false): void {
        this.util.hideProgressBar();
        if (this.exchangeInfo) {
            if (this.util.processCancelInPopup(lastExecutionSuccess)) {
                // Remove the top element in the context stack
                if (this.exchangeInfo && this.exchangeInfo.comeBackContext &&
                    this.exchangeInfo.comeBackContext.exchangeInfo !== {}) {
                    this.appGlobalInfo.appExchangeInfo.save(this.exchangeInfo.comeBackContext.exchangeInfo);
                }
            } else {
                if (this.exchangeInfo && this.exchangeInfo.comeBackContext && this.exchangeInfo.comeBackContext !== {}) {
                    this.util.navigateComeBack(this.exchangeInfo.comeBackContext);
                } else {
                    this.util.navigateToMain();
                }
            }
        } else {
            this.util.navigateToMain();
        }
    }

    /**
     * Show the supplementary information of the selected Oids
     */
    private showSuplementaryInformation(): void {
        // If no argument
        if (!this.argName || this.originalOidList.length === 0) {
            if (this.siuHasNoShow) {
                this.saveChanges();
            }
            return;
        }

        if (this.originalOidList.length > 1) {
            this.argValue = this.langMng.translateTextWithParams(
                LanguageMng.fsNumberInstacesSelected, '',
                this.originalOidList.length.toString());
            if (this.siuHasNoShow) {
                this.saveChanges();
            }
        } else {
            // Query to get the value of attributes
            this.util.showWaitDialog();
            this.util.callQueryByOid(this.argClassName, this.originalOidList[0], this.argSupInfAttNames).then((instance) => {
                if (instance) {
                    let textValue = '';
                    const attArray: string[] = this.argSupInfAttNames.split(',');
                    let i = 0;
                    for (const att of attArray) {
                        if (textValue.length > 0) {
                            textValue += ' ';
                        }
                        if (this.argSupInfAttTypes && this.argSupInfAttTypes.length > i) {
                            textValue += this.util.applyDefaultFormat(instance[att.replace('.', '-')], this.argSupInfAttTypes[i]);
                        } else {
                            textValue += this.util.valueToString(instance[att.replace('.', '-')]);
                        }
                        i++;
                    }
                    this.argValue = textValue;
                } else {
                    this.argValue = '';
                }
                this.util.hideWaitDialog();
                this.changeDetectorRef.markForCheck();
                if (this.siuHasNoShow) {
                    this.saveChanges();
                }
            }).catch((errorMsg) => {
                this.argValue = '';
                this.util.addErrorMessage(errorMsg);
                this.util.hideWaitDialog();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Configure the scenario based on the Class and service interaction unit
     */
    private configureSIU(): boolean {
        let siuFound = false;
        switch (this.className) {
            case ModelConstants.Documento.name:
                siuFound = this.configureClassDocumento();
                break;
            case ModelConstants.Contacto.name:
                siuFound = this.configureClassContacto();
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Documento
     */
    private configureClassDocumento(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Documento.siuutobtenerfirmado4contrato:
                this.title = this.langMng.translateText('cls_Documento_svc_TOBTENERFIRMADO4CONTRATO',
                    'Obtener firmado');
                this.serviceName = 'TOBTENERFIRMADO4CONTRATO';
                this.argName = 'pdocumentosinfirmar';
                this.argNameInRequest = 'pdocumentosinfirmar_oid';
                this.argClassName = ModelConstants.Documento.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Documento_svc_TOBTENERFIRMADO4CONTRATO_inArg_pDocumentoSinFirmar',
                    'Doc. sin firmar');
                this.argSupInfAttNames = 'nombredocumento';
                this.argSupInfAttTypes = [Field.dtString];
                siuFound = true;
                break;
            case ModelConstants.Documento.siuutobtenerfirmado4presupuest:
                this.title = this.langMng.translateText('cls_Documento_svc_TOBTENERFIRMADO4PRESUPUESTO',
                    'Obtener firmado');
                this.serviceName = 'TOBTENERFIRMADO4PRESUPUESTO';
                this.argName = 'pdocumentosinfirmar';
                this.argNameInRequest = 'pdocumentosinfirmar_oid';
                this.argClassName = ModelConstants.Documento.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Documento_svc_TOBTENERFIRMADO4PRESUPUESTO_inArg_pDocumentoSinFirmar',
                    'Doc. sin firmar');
                this.argSupInfAttNames = 'nombredocumento';
                this.argSupInfAttTypes = [Field.dtString];
                siuFound = true;
                break;
            case ModelConstants.Documento.siuutobtenerfirmado4parte:
                this.title = this.langMng.translateText('cls_Documento_svc_TOBTENERFIRMADO4PARTE',
                    'Obtener firmado');
                this.serviceName = 'TOBTENERFIRMADO4PARTE';
                this.argName = 'pdocumentosinfirmar';
                this.argNameInRequest = 'pdocumentosinfirmar_oid';
                this.argClassName = ModelConstants.Documento.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Documento_svc_TOBTENERFIRMADO4PARTE_inArg_pDocumentoSinFirmar',
                    'Doc. sin firmar');
                this.argSupInfAttNames = 'nombredocumento';
                this.argSupInfAttTypes = [Field.dtString];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Contacto
     */
    private configureClassContacto(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Contacto.siuudeleteuinstance:
                this.title = this.langMng.translateText('cls_Contacto_svc_delete_instance',
                    'Eliminar');
                this.serviceName = 'delete_instance';
                this.argName = 'p_thiscontacto';
                this.argNameInRequest = 'p_thiscontacto_oid';
                this.argClassName = ModelConstants.Contacto.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Contacto_svc_delete_instance_inArg_p_thisContacto',
                    'Contacto');
                this.argSupInfAttNames = 'nombre';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }
}
