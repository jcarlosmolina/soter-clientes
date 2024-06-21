import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'AlbaranVenta'
 */
export class AlbaranVentaServices extends AbstractServices {


    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'AlbaranVenta');
    }

    /**
     * Call to the filter 'F_AlbaranVenta' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vSerieVar Variable vSerie
     * @param vCodAlbaranVar Variable vCodAlbaran
     * @param vEstadoVar Variable vEstado
     * @param vClienteVar Variable vCliente
     * @param vCreacionDesdeVar Variable vCreacionDesde
     * @param vCreacionHastaVar Variable vCreacionHasta
     * @param vEntregaDesdeVar Variable vEntregaDesde
     * @param vEntregaHastaVar Variable vEntregaHasta
     * @param vDireccionVar Variable vDireccion
     */
    public queryByFilterFuAlbaranVenta(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vSerieVar: any, vCodAlbaranVar: number, vEstadoVar: string, vClienteVar: any, vCreacionDesdeVar: Date,
        vCreacionHastaVar: Date, vEntregaDesdeVar: Date, vEntregaHastaVar: Date, vDireccionVar: string): Promise<any> {
        const filter = this.util.getFilter('F_AlbaranVenta');
        this.util.addFilterVariable(filter, 'vserie', vSerieVar);
        this.util.addFilterVariable(filter, 'vcodalbaran', vCodAlbaranVar);
        this.util.addFilterVariable(filter, 'vestado', vEstadoVar);
        this.util.addFilterVariable(filter, 'vcliente', vClienteVar);
        this.util.addFilterVariable(filter, 'vcreaciondesde', JsonUtility.date2Json(vCreacionDesdeVar));
        this.util.addFilterVariable(filter, 'vcreacionhasta', JsonUtility.date2Json(vCreacionHastaVar));
        this.util.addFilterVariable(filter, 'ventregadesde', JsonUtility.date2Json(vEntregaDesdeVar));
        this.util.addFilterVariable(filter, 'ventregahasta', JsonUtility.date2Json(vEntregaHastaVar));
        this.util.addFilterVariable(filter, 'vdireccion', vDireccionVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * @param oidPresupuesto Oid of related 'Presupuesto' instance using the role 'Presupuesto'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPresupuesto(
        oidPresupuesto: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPresupuesto, 'Presupuesto');
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
     * @param oidPagador Oid of related 'Cliente' instance using the role 'Pagador'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPagador(
        oidPagador: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPagador, 'Pagador');
    }

    /**
     * @param oidFacturas Oid of related 'FacturaVenta' instance using the role 'Facturas'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedFacturas(
        oidFacturas: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidFacturas, 'Facturas');
    }

    /**
     * @param oidParteTrabajo Oid of related 'ParteTrabajo' instance using the role 'ParteTrabajo'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedParteTrabajo(
        oidParteTrabajo: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidParteTrabajo, 'ParteTrabajo');
    }

    /**
     * @param oidCuotas Oid of related 'Cuota' instance using the role 'Cuotas'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedCuotas(
        oidCuotas: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidCuotas, 'Cuotas');
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
     * @param oidLineas Oid of related 'LnAlbaranVenta' instance using the role 'Lineas'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedLineas(
        oidLineas: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidLineas, 'Lineas');
    }

    /**
     * @param oidSubTotales Oid of related 'SubTotalAlbaranVenta' instance using the role 'SubTotales'
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
}
