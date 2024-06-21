import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'Aviso'
 */
export class AvisoServices extends AbstractServices {

    private tCREARSrvName = 'TCREAR';

    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'Aviso');
    }

    /**
     * Call to the filter 'F_AvisoPortalCli' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vFechaIniVar Variable vFechaIni
     * @param vFechaFinVar Variable vFechaFin
     * @param vEstadoVar Variable vEstado
     * @param vUrgenciaVar Variable vUrgencia
     * @param vCerradoVar Variable vCerrado
     */
    public queryByFilterFuAvisoPortalCli(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vFechaIniVar: Date, vFechaFinVar: Date, vEstadoVar: string, vUrgenciaVar: string, vCerradoVar: boolean): Promise<any> {
        const filter = this.util.getFilter('F_AvisoPortalCli');
        this.util.addFilterVariable(filter, 'vfechaini', JsonUtility.date2Json(vFechaIniVar));
        this.util.addFilterVariable(filter, 'vfechafin', JsonUtility.date2Json(vFechaFinVar));
        this.util.addFilterVariable(filter, 'vestado', vEstadoVar);
        this.util.addFilterVariable(filter, 'vurgencia', vUrgenciaVar);
        this.util.addFilterVariable(filter, 'vcerrado', vCerradoVar);
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

    /**
     * Call to the service 'TCREAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param pInstalacionInArg Mandatory argument 'pInstalacion'. Oid of 'Instalacion' class
     * @param pDescripcionInArg Mandatory argument 'pDescripcion'
     * @param pUrgenciaInArg Mandatory argument 'pUrgencia'
     * @param pTituloInArg Mandatory argument 'pTitulo'
     */
    public tCREAR(
        pInstalacionInArg: any, pDescripcionInArg: string, pUrgenciaInArg: string,
        pTituloInArg: string): Promise<ErrorInformation | void> {
        const request: {
            pinstalacion_json: any, pdescripcion: string, purgencia: string, ptitulo: string
        } = {
            pinstalacion_json: pInstalacionInArg ? JSON.stringify(pInstalacionInArg) : '', pdescripcion: pDescripcionInArg,
            purgencia: pUrgenciaInArg, ptitulo: pTituloInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tCREARSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
