import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'Zona'
 */
export class ZonaServices extends AbstractServices {


    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'Zona');
    }

    /**
     * Call to the filter 'F_Zona' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfNombreVar Variable vfNombre
     * @param vfMunicipioVar Variable vfMunicipio
     */
    public queryByFilterFuZona(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfNombreVar: string, vfMunicipioVar: any): Promise<any> {
        const filter = this.util.getFilter('F_Zona');
        this.util.addFilterVariable(filter, 'vfnombre', vfNombreVar);
        this.util.addFilterVariable(filter, 'vfmunicipio', vfMunicipioVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
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
     * @param oidUsuarios Oid of related 'Usuario' instance using the role 'Usuarios'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedUsuarios(
        oidUsuarios: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidUsuarios, 'Usuarios');
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
}
