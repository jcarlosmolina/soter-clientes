import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'SubTotalAlbaranVenta'
 */
export class SubTotalAlbaranVentaServices extends AbstractServices {


    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'SubTotalAlbaranVenta');
    }

    /**
     * @param oidAlbaran Oid of related 'AlbaranVenta' instance using the role 'Albaran'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedAlbaran(
        oidAlbaran: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidAlbaran, 'Albaran');
    }
}
