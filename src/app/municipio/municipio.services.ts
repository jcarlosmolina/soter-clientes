import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'Municipio'
 */
export class MunicipioServices extends AbstractServices {


    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'Municipio');
    }

    /**
     * Call to the filter 'F_Municipio' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vouProvinciaVar Variable vo_Provincia
     * @param vuNombreVar Variable v_Nombre
     */
    public queryByFilterFuMunicipio(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vouProvinciaVar: any, vuNombreVar: string): Promise<any> {
        const filter = this.util.getFilter('F_Municipio');
        this.util.addFilterVariable(filter, 'vo_provincia', vouProvinciaVar);
        this.util.addFilterVariable(filter, 'v_nombre', vuNombreVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * @param oidProvincia Oid of related 'Provincia' instance using the role 'Provincia'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedProvincia(
        oidProvincia: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidProvincia, 'Provincia');
    }

    /**
     * @param oidPais Oid of related 'Pais' instance using the role 'Pais'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPais(
        oidPais: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPais, 'Pais');
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
     * @param oidClientesAdmonFinca Oid of related 'Cliente' instance using the role 'ClientesAdmonFinca'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedClientesAdmonFinca(
        oidClientesAdmonFinca: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidClientesAdmonFinca, 'ClientesAdmonFinca');
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
     * @param oidCodigosPostales Oid of related 'CodigoPostal' instance using the role 'CodigosPostales'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedCodigosPostales(
        oidCodigosPostales: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidCodigosPostales, 'CodigosPostales');
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

    /**
     * @param oidZonas Oid of related 'Zona' instance using the role 'Zonas'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedZonas(
        oidZonas: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidZonas, 'Zonas');
    }
}
