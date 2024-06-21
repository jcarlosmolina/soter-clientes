import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'OrdenTrabajo'
 */
export class OrdenTrabajoServices extends AbstractServices {


    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'OrdenTrabajo');
    }

    /**
     * Call to the filter 'F_OrdenTrabajo' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfClienteVar Variable vfCliente
     * @param vfInstalacionVar Variable vfInstalacion
     * @param vfEstadoVar Variable vfEstado
     * @param vfTipoOrdenVar Variable vfTipoOrden
     * @param vfDesdeVar Variable vfDesde
     * @param vfHastaVar Variable vfHasta
     */
    public queryByFilterFuOrdenTrabajo(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfClienteVar: any, vfInstalacionVar: any, vfEstadoVar: string, vfTipoOrdenVar: string, vfDesdeVar: Date,
        vfHastaVar: Date): Promise<any> {
        const filter = this.util.getFilter('F_OrdenTrabajo');
        this.util.addFilterVariable(filter, 'vfcliente', vfClienteVar);
        this.util.addFilterVariable(filter, 'vfinstalacion', vfInstalacionVar);
        this.util.addFilterVariable(filter, 'vfestado', vfEstadoVar);
        this.util.addFilterVariable(filter, 'vftipoorden', vfTipoOrdenVar);
        this.util.addFilterVariable(filter, 'vfdesde', JsonUtility.date2Json(vfDesdeVar));
        this.util.addFilterVariable(filter, 'vfhasta', JsonUtility.date2Json(vfHastaVar));
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * Call to the filter 'F_OrdenTrabajo4Instalacion' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfEstadoVar Variable vfEstado
     * @param vfTipoOrdenVar Variable vfTipoOrden
     * @param vfDesdeVar Variable vfDesde
     * @param vfHastaVar Variable vfHasta
     */
    public queryByFilterFuOrdenTrabajo4Instalacion(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfEstadoVar: string, vfTipoOrdenVar: string, vfDesdeVar: Date, vfHastaVar: Date): Promise<any> {
        const filter = this.util.getFilter('F_OrdenTrabajo4Instalacion');
        this.util.addFilterVariable(filter, 'vfestado', vfEstadoVar);
        this.util.addFilterVariable(filter, 'vftipoorden', vfTipoOrdenVar);
        this.util.addFilterVariable(filter, 'vfdesde', JsonUtility.date2Json(vfDesdeVar));
        this.util.addFilterVariable(filter, 'vfhasta', JsonUtility.date2Json(vfHastaVar));
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
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
     * @param oidSistema Oid of related 'Sistema' instance using the role 'Sistema'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedSistema(
        oidSistema: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidSistema, 'Sistema');
    }

    /**
     * @param oidUsuarioCreacion Oid of related 'Usuario' instance using the role 'UsuarioCreacion'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedUsuarioCreacion(
        oidUsuarioCreacion: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidUsuarioCreacion, 'UsuarioCreacion');
    }

    /**
     * @param oidUsuariosTecnicos Oid of related 'Usuario' instance using the role 'UsuariosTecnicos'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedUsuariosTecnicos(
        oidUsuariosTecnicos: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidUsuariosTecnicos, 'UsuariosTecnicos');
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
     * @param oidContrato Oid of related 'Contrato' instance using the role 'Contrato'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedContrato(
        oidContrato: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidContrato, 'Contrato');
    }

    /**
     * @param oidTipoSistema Oid of related 'TipoSistema' instance using the role 'TipoSistema'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedTipoSistema(
        oidTipoSistema: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidTipoSistema, 'TipoSistema');
    }

    /**
     * @param oidAviso Oid of related 'Aviso' instance using the role 'Aviso'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedAviso(
        oidAviso: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidAviso, 'Aviso');
    }

    /**
     * @param oidCheckListOT Oid of related 'CheckListOT' instance using the role 'CheckListOT'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedCheckListOT(
        oidCheckListOT: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidCheckListOT, 'CheckListOT');
    }

    /**
     * @param oidLineasPropias Oid of related 'LnOrdenTrabajo' instance using the role 'LineasPropias'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedLineasPropias(
        oidLineasPropias: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidLineasPropias, 'LineasPropias');
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
     * @param oidSubtotales Oid of related 'SubtotalOrdenTrabajo' instance using the role 'Subtotales'
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
}
