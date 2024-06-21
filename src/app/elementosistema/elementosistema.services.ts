import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'ElementoSistema'
 */
export class ElementoSistemaServices extends AbstractServices {


    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'ElementoSistema');
    }

    /**
     * Call to the filter 'F_ElementoSistema' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfTipoElementoVar Variable vfTipoElemento
     * @param vfNombreVar Variable vfNombre
     * @param vfNumSerieVar Variable vfNumSerie
     * @param vfZonaVar Variable vfZona
     * @param vfPendienteRevisionVar Variable vfPendienteRevision
     */
    public queryByFilterFuElementoSistema(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfTipoElementoVar: any, vfNombreVar: string, vfNumSerieVar: string, vfZonaVar: string,
        vfPendienteRevisionVar: boolean): Promise<any> {
        const filter = this.util.getFilter('F_ElementoSistema');
        this.util.addFilterVariable(filter, 'vftipoelemento', vfTipoElementoVar);
        this.util.addFilterVariable(filter, 'vfnombre', vfNombreVar);
        this.util.addFilterVariable(filter, 'vfnumserie', vfNumSerieVar);
        this.util.addFilterVariable(filter, 'vfzona', vfZonaVar);
        this.util.addFilterVariable(filter, 'vfpendienterevision', vfPendienteRevisionVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
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
     * @param oidMarca Oid of related 'Marca' instance using the role 'Marca'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedMarca(
        oidMarca: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidMarca, 'Marca');
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
     * @param oidDocumentos Oid of related 'Documento' instance using the role 'Documentos'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDocumentos(
        oidDocumentos: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDocumentos, 'Documentos');
    }

    /**
     * @param oidLnOrdenTrabajo Oid of related 'LnOrdenTrabajo' instance using the role 'LnOrdenTrabajo'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedLnOrdenTrabajo(
        oidLnOrdenTrabajo: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidLnOrdenTrabajo, 'LnOrdenTrabajo');
    }
}
