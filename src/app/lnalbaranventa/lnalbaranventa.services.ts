import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'LnAlbaranVenta'
 */
export class LnAlbaranVentaServices extends AbstractServices {


    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'LnAlbaranVenta');
    }

    /**
     * Call to the filter 'F_LnAlbaranVenta_D_Fact' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfCodArtVar Variable vfCodArt
     * @param vfDescArtVar Variable vfDescArt
     * @param vfCodAlbaranVar Variable vfCodAlbaran
     */
    public queryByFilterFuLnAlbaranVentauDuFact(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfCodArtVar: string, vfDescArtVar: string, vfCodAlbaranVar: number): Promise<any> {
        const filter = this.util.getFilter('F_LnAlbaranVenta_D_Fact');
        this.util.addFilterVariable(filter, 'vfcodart', vfCodArtVar);
        this.util.addFilterVariable(filter, 'vfdescart', vfDescArtVar);
        this.util.addFilterVariable(filter, 'vfcodalbaran', vfCodAlbaranVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
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
