import { Component, ChangeDetectorRef, HostListener } from '@angular/core';
import { Util } from './common/app.utils';
import { Title } from '@angular/platform-browser';
import { LanguageMng } from './common/languageMng';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    /** Flag to show/hide the wait dialog */
    public showWaitDialog = false;
    /** Timer for wait dialog */
    private waitDialogTimer: any;
    /** Application error messages */
    public errorMessages: string[] = [];
    /** Flag to show the preferences dialog */
    public showGridPreferences = false;
    /** Columns to personalize in preferences dialog */
    public gridColumnsToEdit: any[];
    /** Interaction unit in popup information */
    public iuInPopUpInfo: {visible: boolean, selector: string, title: string} = {visible: false, selector: '', title: ''};
    /** Progress bar information */
    public progressBarData: {value: number, secondsRemaining: number} = {value: -1, secondsRemaining: 0};
    /** Body content margin top */
    public bodyMarginTop = 40;

    constructor(
        protected util: Util,
        protected changeDetectorRef: ChangeDetectorRef,
        private readonly titleService: Title,
        private readonly langMng: LanguageMng,
        private messageService: MessageService,
        private configPrimeNG: PrimeNGConfig
    ) {
        util.waitDialogAction.subscribe(data => this.waitDialogAction(data));
        util.errorMessagesAction.subscribe(data => this.errorMessagesAction(data));
        util.gridPreferencesAction.subscribe(data => this.gridPreferencesAction(data));
        util.modalForIUAction.subscribe(data => this.modalForIUAction(data));
        util.modalForIUResponse.subscribe(data => this.processCloseModalForIU(data));
        util.progessBarAction.subscribe(data => this.progessBarAction(data));
        util.toastMessagesAction.subscribe(data => this.toastMessagesAction(data));
        titleService.setTitle(langMng.translateText('app_TITLE', ''));
        this.configPrimeNG.setTranslation(this.langMng.getPrimNGTranslation());
    }

    /**
     * Manages the suscription to the wait dialog observable
     */
    public waitDialogAction(data: boolean): void {
        setTimeout(() => {
            this.showWaitDialog = data;
        });

        // Set timeout for the bloking wait dialog
        // if (data) {
        //     if (this.waitDialogTimer) {
        //         window.clearTimeout(this.waitDialogTimer);
        //         this.waitDialogTimer = undefined;
        //     }
        //     this.waitDialogTimer = window.setTimeout(() => {
        //         this.waitDialogTimer = undefined;
        //         this.showWaitDialog = false;
        //     }, 15000);
        // } else {
        //     if (this.waitDialogTimer) {
        //         window.clearTimeout(this.waitDialogTimer);
        //         this.waitDialogTimer = undefined;
        //     }
        // }
    }

    /**
     * Manages the suscription to the error messages observable
     */
    public errorMessagesAction(data: string): void {
        let tempError = this.errorMessages.slice();
        if (data && data.length > 0) {
            tempError.push(this.langMng.translateText('', data));
        } else {
            tempError = [];
        }
        this.errorMessages = tempError;
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Manages the toast messages observable
     */
    public toastMessagesAction(data: any): void {
        let severity = 'info';
        if (data.severity) {
            severity = data.severity;
        }
        let summary = this.langMng.translateText('app_ERROR_TITLE', 'Info');
        if (data.summary) {
            summary = data.summary;
        }
        let detail = data;
        if (data.detail) {
            detail = this.langMng.translateText('', data.detail);
        }
        this.messageService.add({key: 'mainToast',
            severity,
            summary,
            detail});
    }

    /**
     * Clear the error messages
     */
    public clearErrorMessages(): void {
        this.errorMessages = [];
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the preferences action in any grid
     * @param data Grid columns to be personalized
     */
    public gridPreferencesAction(data: any[]) {
        if (data && data.length > 0) {
            this.gridColumnsToEdit = data;
            this.showGridPreferences = true;
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * Manages the close event in preferences dialog
     * @param data Modified columns
     */
    public closeGridPreferences(data: any): void {
        this.showGridPreferences = false;
        this.util.gridPreferencesResponse.next(data);
        this.gridColumnsToEdit = [];
        this.changeDetectorRef.markForCheck();
    }


    /**
     * Manages the event when an interaction unit must be shown in the modal popup
     * @param data Modal information
     */
    public modalForIUAction(data: any) {
        if (data) {
            this.iuInPopUpInfo.selector = data.selector;
            this.iuInPopUpInfo.title = data.title;
            this.iuInPopUpInfo.visible = true;
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * Manages the event when the interaction unit in modal popup is closed
     * @param data Modal result
     */
    public processCloseModalForIU(data: any): void {
        this.iuInPopUpInfo.visible = false;
        this.iuInPopUpInfo.selector = '';
        this.iuInPopUpInfo.title = '';
        this.changeDetectorRef.markForCheck();
    }

    public cancelProgressBar(): void {
        this.util.progessBarCancelResponse.next();
    }

    public progessBarAction(data: {title: string, value: number, secondsRemaining: number}): void {
        setTimeout(() => {
            this.progressBarData = data;
        });
    }

    /**
     * Manages the window resize event
     * @param event Event arguments
     */
    @HostListener('window:resize', ['$event'])
    public windowResize(event: any): void {
        this.adjustBodyContent();
    }

    /**
     * Manages the window load event
     * @param event Event arguments
     */
    @HostListener('window:load', ['$event'])
    public windowLoad(event: any): void {
        this.adjustBodyContent();
    }

    /**
     * Adjust padding-top of body-content according to the height of menu
     */
    private adjustBodyContent(): void {
        const divMenu = document.querySelector('#navbarSupportedContent');
        if (divMenu && divMenu.clientHeight) {
            this.bodyMarginTop = divMenu.clientHeight;
        } else {
            // Default value
            this.bodyMarginTop = 40;
        }
        if (this.bodyMarginTop < 40) {
            this.bodyMarginTop = 40;
        }
    }

}
