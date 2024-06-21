import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'Provincia'
 */
export class ProvinciaServices extends AbstractServices {


    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'Provincia');
    }

    /**
     * Call to the filter 'F_Provincia' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfNombreVar Variable vfNombre
     */
    public queryByFilterFuProvincia(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfNombreVar: string): Promise<any> {
        const filter = this.util.getFilter('F_Provincia');
        this.util.addFilterVariable(filter, 'vfnombre', vfNombreVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
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
     * @param oidCodigosPostales Oid of related 'CodigoPostal' instance using the role 'CodigosPostales'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedCodigosPostales(
        oidCodigosPostales: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidCodigosPostales, 'CodigosPostales');
    }

    /**
     * @param oidMunicipios Oid of related 'Municipio' instance using the role 'Municipios'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedMunicipios(
        oidMunicipios: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidMunicipios, 'Municipios');
    }
}
