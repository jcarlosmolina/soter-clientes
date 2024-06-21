import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'CodigoPostal'
 */
export class CodigoPostalServices extends AbstractServices {


    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'CodigoPostal');
    }

    /**
     * Call to the filter 'F_CodigoPostal' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vCPVar Variable vCP
     * @param vMunicipioVar Variable vMunicipio
     * @param vProvinciaVar Variable vProvincia
     */
    public queryByFilterFuCodigoPostal(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vCPVar: string, vMunicipioVar: any, vProvinciaVar: any): Promise<any> {
        const filter = this.util.getFilter('F_CodigoPostal');
        this.util.addFilterVariable(filter, 'vcp', vCPVar);
        this.util.addFilterVariable(filter, 'vmunicipio', vMunicipioVar);
        this.util.addFilterVariable(filter, 'vprovincia', vProvinciaVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * Call to the filter 'F_CodigoPostal_SoloCP' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vCPVar Variable vCP
     */
    public queryByFilterFuCodigoPostaluSoloCP(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vCPVar: string): Promise<any> {
        const filter = this.util.getFilter('F_CodigoPostal_SoloCP');
        this.util.addFilterVariable(filter, 'vcp', vCPVar);
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
