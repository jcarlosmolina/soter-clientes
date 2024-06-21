import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'Pais'
 */
export class PaisServices extends AbstractServices {


    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'Pais');
    }

    /**
     * Call to the filter 'F_Pais' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfNombreVar Variable vfNombre
     */
    public queryByFilterFuPais(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfNombreVar: string): Promise<any> {
        const filter = this.util.getFilter('F_Pais');
        this.util.addFilterVariable(filter, 'vfnombre', vfNombreVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * @param oidClientesFiscal Oid of related 'Cliente' instance using the role 'ClientesFiscal'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedClientesFiscal(
        oidClientesFiscal: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidClientesFiscal, 'ClientesFiscal');
    }

    /**
     * @param oidContratosFirma Oid of related 'Contrato' instance using the role 'ContratosFirma'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedContratosFirma(
        oidContratosFirma: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidContratosFirma, 'ContratosFirma');
    }

    /**
     * @param oidContratosInstalacion Oid of related 'Contrato' instance using the role 'ContratosInstalacion'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedContratosInstalacion(
        oidContratosInstalacion: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidContratosInstalacion, 'ContratosInstalacion');
    }

    /**
     * @param oidInstalaciones Oid of related 'Instalacion' instance using the role 'Instalaciones'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedInstalaciones(
        oidInstalaciones: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidInstalaciones, 'Instalaciones');
    }

    /**
     * @param oidMunicipios Oid of related 'Municipio' instance using the role 'Municipios'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedMunicipios(
        oidMunicipios: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidMunicipios, 'Municipios');
    }

    /**
     * @param oidProvincias Oid of related 'Provincia' instance using the role 'Provincias'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedProvincias(
        oidProvincias: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidProvincias, 'Provincias');
    }

    /**
     * @param oidSucursalesBancaria Oid of related 'SucursalBancaria' instance using the role 'SucursalesBancaria'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedSucursalesBancaria(
        oidSucursalesBancaria: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidSucursalesBancaria, 'SucursalesBancaria');
    }
}
