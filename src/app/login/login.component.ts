import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ActivatedRoute } from '@angular/router';
import { LanguageMng } from '../common/languageMng';
import { Field, FieldDefinedSelection } from '../common/baseIUElements';
import { ModelConstants } from '../common/model.constants';
import { ErrorInformation } from '../common/answerRequestInformation';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-content',
    templateUrl: './login.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
    public title = 'Login Trucado';
    public backend_url = environment.BACKEND_URL;

    /** Agent selector */
    public agentSelector: FieldDefinedSelection;
    /** Oid fields  */
    public oidFields: Field[] = [];
    /** Agent Oid */
    private agentOid: any;
    public password = '';
    /** Return URL */
    private returnUrl = '';

    private PuedeVerLogs = false;

    constructor(private readonly appGlobalInfo: AppGlobalInfo,
                private readonly util: Util,
                private readonly changeDetectorRef: ChangeDetectorRef,
                private readonly route: ActivatedRoute,
                public readonly langMng: LanguageMng) {

        this.title = this.langMng.translateText('app_LOGIN_TITLE', '');

        this.agentSelector = new FieldDefinedSelection(this.langMng);
        this.agentSelector.alias = this.langMng.translateText('app_LOGIN_SELPROFILE', '');
        this.agentSelector.value = ModelConstants.Cliente.name;
        this.profileChanged();
    }

    ngOnInit() {
        // Get the query params
        this.route.queryParams.subscribe(params => this.returnUrl = params.return || '');
        this.util.hideWaitDialog();
    }

    /**
     * Return query string for login call
     */
    private getLoginRequestData(): any {

        // Validate input fields
        if (!this.agentSelector.value) {
            return null;
        }


        for (const oidField of this.oidFields) {
            if (!oidField.value) {
                return null;
            }
        }
        if (!this.password) {
            return null;
        }

        this.agentOid = null;
        if (this.agentSelector.value === ModelConstants.Cliente.name) {
            this.agentOid = this.util.oidBuilder.buildOidCliente(
                parseInt(this.oidFields[0].value)
            );
        }
        if (!this.agentOid) {
            return null;
        }

        const loginData: {facetname: string, username: string, password: string} = {
            facetname: this.agentSelector.value,
            username: JSON.stringify(this.agentOid),
            password: this.password
        };

        return loginData;
    }

    /**
     * Manages the login response
     * @param response Login response
     */
    private processResponse(response: any) {
        const data = response;
        if (data.hasRegistered && data.roles) {
            this.searchUserDetails().then( (displayName: string) => {
                this.appGlobalInfo.setUserInformation(this.agentOid, data.roles.split(','), displayName);
                this.appGlobalInfo.getLoggedUserInfo().PuedeVerLogs = this.PuedeVerLogs;
                if (data.visiblehatnodes && data.visibleius && data.visibleiuauxiliars) {
                    this.appGlobalInfo.setUserVisibilityInformation(data.visiblehatnodes, data.visibleius, data.visibleiuauxiliars);
                }
                if (data.gridPreferences) {
                    this.appGlobalInfo.setUserGridPreferences(data.gridPreferences);
                }
                if (this.returnUrl) {
                    this.util.navigateByUrl(this.returnUrl);
                } else {
                    if (this.appGlobalInfo.isPreviousUser() && this.appGlobalInfo.appExchangeInfo &&
                        this.appGlobalInfo.appExchangeInfo.get()) {
                        this.util.navigateTo(this.appGlobalInfo.appExchangeInfo.get());
                    } else {
                        this.util.navigateToMain();
                    }
                }
            });
            this.appGlobalInfo.loggedUserInfo.haRealizadoMarcaje = data.haRealizadoMarcaje;
        } else {
            this.util.addErrorMessage('Login error');
        }
        this.util.hideWaitDialog();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Call to the login process
     */
    public loginUser() {
        const loginData = this.getLoginRequestData();
        if (!loginData) {
            return;
        }
        this.util.showWaitDialog();
        this.util.loginUser(loginData).then(
            (response: any) => {
                this.appGlobalInfo.setUserToken(response);
                this.util.getUserInfo().then((responseGetUser: any) =>
                this.processResponse(responseGetUser));
                this.changeDetectorRef.markForCheck();
            }, (errorResponse: ErrorInformation) => {
                this.util.addErrorMessage(this.langMng.translateError(errorResponse));
                this.util.hideWaitDialog();
                this.changeDetectorRef.markForCheck();
            });
        this.changeDetectorRef.markForCheck();

    }

    /**
     * Manages the change in the agent profile
     */
    public profileChanged(): void {
        this.oidFields = [];
        if (!this.agentSelector.value) {
            return;
        }

        if (this.agentSelector.value === ModelConstants.Cliente.name) {
            this.oidFields.push(new Field(this.langMng));
            this.oidFields[0].alias = this.langMng.translateText('', 'Código');
            this.oidFields[0].dataType = Field.dtAuto;
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Gets the user details to be shown in page header
     */
    private searchUserDetails(): Promise<string> {
        return new Promise<string>((resolve) => {
            const agentDS = this.getAgentDisplaySetItems(this.agentSelector.value);
            // if (agentDS === '') {
            //     resolve('');
            // }
            this.util.callQueryByOid(this.agentSelector.value, this.agentOid , agentDS + ',puedeverlogs').then (
                (data: any) => {
                    this.PuedeVerLogs = data.puedeverlogs;
                    resolve(agentDS.split(',').map((value) => data[value.trim().replace(new RegExp('[.]', 'g'), '-')]).join(' '));
                }).catch( () => {
                    // In case of error, return an empty string
                    resolve('');
                });
        });
    }

    /**
     * Returns the agent attributes to be shown in the page header
     * @param className Agent class name
     */
    private getAgentDisplaySetItems(className: string): string {
        let displaySetItems = '';
        switch (className) {
            case 'Cliente':
                displaySetItems = 'nombrerazonsocial';
                break;
            default:
                displaySetItems = '';
        }
        return displaySetItems;
    }
}
