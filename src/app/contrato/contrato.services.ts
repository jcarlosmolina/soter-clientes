import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'Contrato'
 */
export class ContratoServices extends AbstractServices {


    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'Contrato');
    }

    /**
     * Call to the filter 'FP_Contrato' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vClienteVar Variable vCliente
     * @param vDesdeVar Variable vDesde
     * @param vHastaVar Variable vHasta
     * @param vVigenciaVar Variable vVigencia
     * @param vObjetoContratoVar Variable vObjetoContrato
     */
    public queryByFilterFPuContrato(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vClienteVar: any, vDesdeVar: Date, vHastaVar: Date, vVigenciaVar: string, vObjetoContratoVar: string): Promise<any> {
        const filter = this.util.getFilter('FP_Contrato');
        this.util.addFilterVariable(filter, 'vcliente', vClienteVar);
        this.util.addFilterVariable(filter, 'vdesde', JsonUtility.date2Json(vDesdeVar));
        this.util.addFilterVariable(filter, 'vhasta', JsonUtility.date2Json(vHastaVar));
        this.util.addFilterVariable(filter, 'vvigencia', vVigenciaVar);
        this.util.addFilterVariable(filter, 'vobjetocontrato', vObjetoContratoVar);
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
     * @param oidInstalacion Oid of related 'Instalacion' instance using the role 'Instalacion'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedInstalacion(
        oidInstalacion: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidInstalacion, 'Instalacion');
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
     * @param oidMunicipioFirma Oid of related 'Municipio' instance using the role 'MunicipioFirma'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedMunicipioFirma(
        oidMunicipioFirma: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidMunicipioFirma, 'MunicipioFirma');
    }

    /**
     * @param oidCodigoPostalFirma Oid of related 'CodigoPostal' instance using the role 'CodigoPostalFirma'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedCodigoPostalFirma(
        oidCodigoPostalFirma: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidCodigoPostalFirma, 'CodigoPostalFirma');
    }

    /**
     * @param oidPaisFirma Oid of related 'Pais' instance using the role 'PaisFirma'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPaisFirma(
        oidPaisFirma: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPaisFirma, 'PaisFirma');
    }

    /**
     * @param oidMunicipioInstalacion Oid of related 'Municipio' instance using the role 'MunicipioInstalacion'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedMunicipioInstalacion(
        oidMunicipioInstalacion: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidMunicipioInstalacion, 'MunicipioInstalacion');
    }

    /**
     * @param oidCodigoPostalInstalacion Oid of related 'CodigoPostal' instance using the role 'CodigoPostalInstalacion'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedCodigoPostalInstalacion(
        oidCodigoPostalInstalacion: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidCodigoPostalInstalacion, 'CodigoPostalInstalacion');
    }

    /**
     * @param oidPaisInstalacion Oid of related 'Pais' instance using the role 'PaisInstalacion'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPaisInstalacion(
        oidPaisInstalacion: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPaisInstalacion, 'PaisInstalacion');
    }

    /**
     * @param oidZonaInstalacion Oid of related 'Zona' instance using the role 'ZonaInstalacion'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedZonaInstalacion(
        oidZonaInstalacion: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidZonaInstalacion, 'ZonaInstalacion');
    }

    /**
     * @param oidRepresentanteEmpresa Oid of related 'Usuario' instance using the role 'RepresentanteEmpresa'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedRepresentanteEmpresa(
        oidRepresentanteEmpresa: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidRepresentanteEmpresa, 'RepresentanteEmpresa');
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
     * @param oidLineas Oid of related 'LnContrato' instance using the role 'Lineas'
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
     * @param oidLnsObjetoCtr Oid of related 'LnObjetoCtr' instance using the role 'LnsObjetoCtr'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedLnsObjetoCtr(
        oidLnsObjetoCtr: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidLnsObjetoCtr, 'LnsObjetoCtr');
    }

    /**
     * @param oidLnsObjetoCRA Oid of related 'LnObjetoCtr' instance using the role 'LnsObjetoCRA'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedLnsObjetoCRA(
        oidLnsObjetoCRA: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidLnsObjetoCRA, 'LnsObjetoCRA');
    }

    /**
     * @param oidSubtotales Oid of related 'SubTotalContrato' instance using the role 'Subtotales'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedSubtotales(
        oidSubtotales: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidSubtotales, 'Subtotales');
    }

    /**
     * @param oidSistemas Oid of related 'Sistema' instance using the role 'Sistemas'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedSistemas(
        oidSistemas: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidSistemas, 'Sistemas');
    }

    /**
     * @param oidOrdenTrabajo Oid of related 'OrdenTrabajo' instance using the role 'OrdenTrabajo'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedOrdenTrabajo(
        oidOrdenTrabajo: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidOrdenTrabajo, 'OrdenTrabajo');
    }
}
