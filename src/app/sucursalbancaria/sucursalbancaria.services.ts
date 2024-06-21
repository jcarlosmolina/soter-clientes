import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'SucursalBancaria'
 */
export class SucursalBancariaServices extends AbstractServices {


    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'SucursalBancaria');
    }

    /**
     * Call to the filter 'F_SucursalBancaria' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfEntidadVar Variable vfEntidad
     * @param vfNombreVar Variable vfNombre
     * @param vfMunicipioVar Variable vfMunicipio
     */
    public queryByFilterFuSucursalBancaria(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfEntidadVar: any, vfNombreVar: string, vfMunicipioVar: any): Promise<any> {
        const filter = this.util.getFilter('F_SucursalBancaria');
        this.util.addFilterVariable(filter, 'vfentidad', vfEntidadVar);
        this.util.addFilterVariable(filter, 'vfnombre', vfNombreVar);
        this.util.addFilterVariable(filter, 'vfmunicipio', vfMunicipioVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * @param oidEntidadBancaria Oid of related 'EntidadBancaria' instance using the role 'EntidadBancaria'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedEntidadBancaria(
        oidEntidadBancaria: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidEntidadBancaria, 'EntidadBancaria');
    }

    /**
     * @param oidCodigoPostal Oid of related 'CodigoPostal' instance using the role 'CodigoPostal'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedCodigoPostal(
        oidCodigoPostal: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidCodigoPostal, 'CodigoPostal');
    }

    /**
     * @param oidMunicipio Oid of related 'Municipio' instance using the role 'Municipio'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedMunicipio(
        oidMunicipio: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidMunicipio, 'Municipio');
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
     * @param oidClientes Oid of related 'Cliente' instance using the role 'Clientes'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedClientes(
        oidClientes: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidClientes, 'Clientes');
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
     * @param oidGruposPresupuesto Oid of related 'GrupoPresupuesto' instance using the role 'GruposPresupuesto'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedGruposPresupuesto(
        oidGruposPresupuesto: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidGruposPresupuesto, 'GruposPresupuesto');
    }

    /**
     * @param oidPresupuestos Oid of related 'Presupuesto' instance using the role 'Presupuestos'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPresupuestos(
        oidPresupuestos: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPresupuestos, 'Presupuestos');
    }
}
