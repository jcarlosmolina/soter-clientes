import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'FacturaVenta'
 */
export class FacturaVentaServices extends AbstractServices {


    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'FacturaVenta');
    }

    /**
     * Call to the filter 'F_FacturaVentaObs' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfEstadoVar Variable vfEstado
     * @param vfNombreRazonVar Variable vfNombreRazon
     * @param vfFechaEmiDesdeVar Variable vfFechaEmiDesde
     * @param vfFechaEmiHastaVar Variable vfFechaEmiHasta
     * @param vrfCobradaVar Variable vrfCobrada
     * @param vrfContabilizadaVar Variable vrfContabilizada
     */
    public queryByFilterFuFacturaVentaObs(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfEstadoVar: string, vfNombreRazonVar: string, vfFechaEmiDesdeVar: Date, vfFechaEmiHastaVar: Date, vrfCobradaVar: boolean,
        vrfContabilizadaVar: boolean): Promise<any> {
        const filter = this.util.getFilter('F_FacturaVentaObs');
        this.util.addFilterVariable(filter, 'vfestado', vfEstadoVar);
        this.util.addFilterVariable(filter, 'vfnombrerazon', vfNombreRazonVar);
        this.util.addFilterVariable(filter, 'vffechaemidesde', JsonUtility.date2Json(vfFechaEmiDesdeVar));
        this.util.addFilterVariable(filter, 'vffechaemihasta', JsonUtility.date2Json(vfFechaEmiHastaVar));
        this.util.addFilterVariable(filter, 'vrfcobrada', vrfCobradaVar);
        this.util.addFilterVariable(filter, 'vrfcontabilizada', vrfContabilizadaVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * Call to the filter 'F_FacturaVentaCliente' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfEstadoVar Variable vfEstado
     * @param vfNombreRazonVar Variable vfNombreRazon
     * @param vfFechaEmiDesdeVar Variable vfFechaEmiDesde
     * @param vfFechaEmiHastaVar Variable vfFechaEmiHasta
     * @param vrfCobradaVar Variable vrfCobrada
     */
    public queryByFilterFuFacturaVentaCliente(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfEstadoVar: string, vfNombreRazonVar: string, vfFechaEmiDesdeVar: Date, vfFechaEmiHastaVar: Date,
        vrfCobradaVar: boolean): Promise<any> {
        const filter = this.util.getFilter('F_FacturaVentaCliente');
        this.util.addFilterVariable(filter, 'vfestado', vfEstadoVar);
        this.util.addFilterVariable(filter, 'vfnombrerazon', vfNombreRazonVar);
        this.util.addFilterVariable(filter, 'vffechaemidesde', JsonUtility.date2Json(vfFechaEmiDesdeVar));
        this.util.addFilterVariable(filter, 'vffechaemihasta', JsonUtility.date2Json(vfFechaEmiHastaVar));
        this.util.addFilterVariable(filter, 'vrfcobrada', vrfCobradaVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * Call to the filter 'F_FacturaVentaPortalCli' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfEstadoVar Variable vfEstado
     * @param vfFechaEmiDesdeVar Variable vfFechaEmiDesde
     * @param vfFechaEmiHastaVar Variable vfFechaEmiHasta
     */
    public queryByFilterFuFacturaVentaPortalCli(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfEstadoVar: string, vfFechaEmiDesdeVar: Date, vfFechaEmiHastaVar: Date): Promise<any> {
        const filter = this.util.getFilter('F_FacturaVentaPortalCli');
        this.util.addFilterVariable(filter, 'vfestado', vfEstadoVar);
        this.util.addFilterVariable(filter, 'vffechaemidesde', JsonUtility.date2Json(vfFechaEmiDesdeVar));
        this.util.addFilterVariable(filter, 'vffechaemihasta', JsonUtility.date2Json(vfFechaEmiHastaVar));
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * @param oidCliente Oid of related 'Cliente' instance using the role 'Cliente'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedCliente(
        oidCliente: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidCliente, 'Cliente');
    }

    /**
     * @param oidRectificaA Oid of related 'FacturaVenta' instance using the role 'RectificaA'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedRectificaA(
        oidRectificaA: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidRectificaA, 'RectificaA');
    }

    /**
     * @param oidDocumentos Oid of related 'Documento' instance using the role 'Documentos'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDocumentos(
        oidDocumentos: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDocumentos, 'Documentos');
    }

    /**
     * @param oidAlbaranes Oid of related 'AlbaranVenta' instance using the role 'Albaranes'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedAlbaranes(
        oidAlbaranes: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidAlbaranes, 'Albaranes');
    }

    /**
     * @param oidCobrosAnticipos Oid of related 'CobroAnticipo' instance using the role 'CobrosAnticipos'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedCobrosAnticipos(
        oidCobrosAnticipos: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidCobrosAnticipos, 'CobrosAnticipos');
    }

    /**
     * @param oidRectificadaPor Oid of related 'FacturaVenta' instance using the role 'RectificadaPor'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedRectificadaPor(
        oidRectificadaPor: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidRectificadaPor, 'RectificadaPor');
    }

    /**
     * @param oidSubTotales Oid of related 'SubTotalFacturaVenta' instance using the role 'SubTotales'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedSubTotales(
        oidSubTotales: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidSubTotales, 'SubTotales');
    }

    /**
     * @param oidVencimientos Oid of related 'Vencimiento' instance using the role 'Vencimientos'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedVencimientos(
        oidVencimientos: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidVencimientos, 'Vencimientos');
    }
}
