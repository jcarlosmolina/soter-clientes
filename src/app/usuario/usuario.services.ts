import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'Usuario'
 */
export class UsuarioServices extends AbstractServices {


    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'Usuario');
    }

    /**
     * Call to the filter 'F_Usuario' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vCodigoVar Variable vCodigo
     * @param vNombreVar Variable vNombre
     * @param vEsActivoVar Variable vEsActivo
     * @param vPerfilVar Variable vPerfil
     */
    public queryByFilterFuUsuario(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vCodigoVar: string, vNombreVar: string, vEsActivoVar: boolean, vPerfilVar: any): Promise<any> {
        const filter = this.util.getFilter('F_Usuario');
        this.util.addFilterVariable(filter, 'vcodigo', vCodigoVar);
        this.util.addFilterVariable(filter, 'vnombre', vNombreVar);
        this.util.addFilterVariable(filter, 'vesactivo', vEsActivoVar);
        this.util.addFilterVariable(filter, 'vperfil', vPerfilVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * @param oidPerfiles Oid of related 'Perfil' instance using the role 'Perfiles'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPerfiles(
        oidPerfiles: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPerfiles, 'Perfiles');
    }

    /**
     * @param oidSupervisor Oid of related 'Usuario' instance using the role 'Supervisor'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedSupervisor(
        oidSupervisor: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidSupervisor, 'Supervisor');
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

    /**
     * @param oidSubordinados Oid of related 'Usuario' instance using the role 'Subordinados'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedSubordinados(
        oidSubordinados: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidSubordinados, 'Subordinados');
    }

    /**
     * @param oidContratos Oid of related 'Contrato' instance using the role 'Contratos'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedContratos(
        oidContratos: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidContratos, 'Contratos');
    }

    /**
     * @param oidInstalacionesComercial Oid of related 'Instalacion' instance using the role 'InstalacionesComercial'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedInstalacionesComercial(
        oidInstalacionesComercial: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidInstalacionesComercial, 'InstalacionesComercial');
    }

    /**
     * @param oidOrdenesTrabajoCreadas Oid of related 'OrdenTrabajo' instance using the role 'OrdenesTrabajoCreadas'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedOrdenesTrabajoCreadas(
        oidOrdenesTrabajoCreadas: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidOrdenesTrabajoCreadas, 'OrdenesTrabajoCreadas');
    }

    /**
     * @param oidOrdenesTrabajo Oid of related 'OrdenTrabajo' instance using the role 'OrdenesTrabajo'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedOrdenesTrabajo(
        oidOrdenesTrabajo: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidOrdenesTrabajo, 'OrdenesTrabajo');
    }

    /**
     * @param oidPartesTrabajo Oid of related 'ParteTrabajo' instance using the role 'PartesTrabajo'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPartesTrabajo(
        oidPartesTrabajo: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPartesTrabajo, 'PartesTrabajo');
    }

    /**
     * @param oidPresupuestosCreados Oid of related 'Presupuesto' instance using the role 'PresupuestosCreados'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPresupuestosCreados(
        oidPresupuestosCreados: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPresupuestosCreados, 'PresupuestosCreados');
    }
}
