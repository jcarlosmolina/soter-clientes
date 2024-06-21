import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'TipoSistema'
 */
export class TipoSistemaServices extends AbstractServices {


    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'TipoSistema');
    }

    /**
     * Call to the filter 'F_TipoSistema' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfDescVar Variable vfDesc
     */
    public queryByFilterFuTipoSistema(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfDescVar: string): Promise<any> {
        const filter = this.util.getFilter('F_TipoSistema');
        this.util.addFilterVariable(filter, 'vfdesc', vfDescVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
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
}
