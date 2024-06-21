import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'TipoCliente'
 */
export class TipoClienteServices extends AbstractServices {


    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'TipoCliente');
    }

    /**
     * Call to the filter 'F_TipoCliente' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfDescVar Variable vfDesc
     */
    public queryByFilterFuTipoCliente(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfDescVar: string): Promise<any> {
        const filter = this.util.getFilter('F_TipoCliente');
        this.util.addFilterVariable(filter, 'vfdesc', vfDescVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
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
}
