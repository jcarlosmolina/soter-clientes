import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'LnOrdenTrabajo'
 */
export class LnOrdenTrabajoServices extends AbstractServices {


    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'LnOrdenTrabajo');
    }

    /**
     * @param oidParteTrabajo Oid of related 'ParteTrabajo' instance using the role 'ParteTrabajo'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedParteTrabajo(
        oidParteTrabajo: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidParteTrabajo, 'ParteTrabajo');
    }

    /**
     * @param oidOrdenTrabajoPropia Oid of related 'OrdenTrabajo' instance using the role 'OrdenTrabajoPropia'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedOrdenTrabajoPropia(
        oidOrdenTrabajoPropia: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidOrdenTrabajoPropia, 'OrdenTrabajoPropia');
    }

    /**
     * @param oidLnDeOrdenTrabajo Oid of related 'LnOrdenTrabajo' instance using the role 'LnDeOrdenTrabajo'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedLnDeOrdenTrabajo(
        oidLnDeOrdenTrabajo: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidLnDeOrdenTrabajo, 'LnDeOrdenTrabajo');
    }

    /**
     * @param oidElementoSistema Oid of related 'ElementoSistema' instance using the role 'ElementoSistema'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedElementoSistema(
        oidElementoSistema: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidElementoSistema, 'ElementoSistema');
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
     * @param oidLnDePartesTrabajo Oid of related 'LnOrdenTrabajo' instance using the role 'LnDePartesTrabajo'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedLnDePartesTrabajo(
        oidLnDePartesTrabajo: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidLnDePartesTrabajo, 'LnDePartesTrabajo');
    }
}
