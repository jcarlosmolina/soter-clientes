import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { AbstractIU } from '../common/baseIUElements';
import { Field, FieldBlob } from '../common/baseIUElements';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
    selector: 'imes-documento-siu-abrirnuevaventana-out',
    templateUrl: './siu_abrirnuevaventana_out.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentoSIUuabrirNuevaVentanauOutComponent  extends AbstractIU implements OnInit {

    /** Outbound argument pOutFichero */
    public pOutFichero: FieldBlob;
    /** Outbound argument pOutNombreFichero */
    public pOutNombreFichero: Field;

    /** Service request */
    private serviceRequest: any;
    /** Service response */
    private serviceResponse: any;
    /** Context */
    private readonly context: {exchangeInfo: ExchangeInfo} = {exchangeInfo: undefined};

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param condNavMng Conditinal navigation manager
     */
    constructor(
        protected appGlobalInfo: AppGlobalInfo,
        protected util: Util,
        protected changeDetectorRef: ChangeDetectorRef,
        public langMng: LanguageMng,
        protected condNavMng: ConditionalNavigationMng) {
        super(appGlobalInfo, util, changeDetectorRef);
        this.className = ModelConstants.Documento.name;
        this.iuName = 'siu_abrirnuevaventana_out';
        this.title = this.langMng.translateText('cls_Documento_svc_abrirNuevaVentana',
            'Previsualizar');
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public initialize(): void {
        this.pOutFichero = new FieldBlob(this.langMng);
        this.pOutFichero.nameInRequest = 'poutfichero';
        this.pOutFichero.alias = this.langMng.translateText(
            'cls_Documento_svc_abrirNuevaVentana_outArg_pOutFichero',
            'Fichero');
        this.pOutFichero.dataType = Field.dtBlob;
        this.pOutFichero.enabled = false;
        this.pOutFichero.assignCSS();

        this.pOutNombreFichero = new Field(this.langMng);
        this.pOutNombreFichero.nameInRequest = 'poutnombrefichero';
        this.pOutNombreFichero.alias = this.langMng.translateText(
            'cls_Documento_svc_abrirNuevaVentana_outArg_pOutNombreFichero',
            'Nombre');
        this.pOutNombreFichero.dataType = Field.dtString;
        this.pOutNombreFichero.maxLength = 100;
        this.pOutNombreFichero.enabled = false;
        this.pOutNombreFichero.assignCSS();

        // Get request and response from the exchange information
        this.context.exchangeInfo = this.appGlobalInfo.appExchangeInfo.getExchangeInfoForScenario(this.className, this.iuName);
        if (this.context.exchangeInfo) {
            this.serviceRequest = this.context.exchangeInfo.customData.request;
            this.serviceResponse = this.context.exchangeInfo.customData.response;
            if (this.serviceRequest && this.serviceResponse) {
                this.initializeFromResponse();
            }
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Initialize the scenario using the response information
     */
    public initializeFromResponse(): void {
        this.pOutFichero.value =
            this.serviceResponse[this.pOutFichero.nameInRequest];
        this.pOutNombreFichero.value =
            this.serviceResponse[this.pOutNombreFichero.nameInRequest];
    }

    /**
     * Returns the context information
     */
    public getContext(): any {
        return this.context;
    }
}
