import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'Sistema'
 */
export class SistemaServices extends AbstractServices {

    private tIMPRIMIRSrvName = 'TIMPRIMIR';

    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'Sistema');
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
     * @param oidAlarmasTecnicas Oid of related 'AlarmaTecnica' instance using the role 'AlarmasTecnicas'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedAlarmasTecnicas(
        oidAlarmasTecnicas: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidAlarmasTecnicas, 'AlarmasTecnicas');
    }

    /**
     * @param oidContactos Oid of related 'Contacto' instance using the role 'Contactos'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedContactos(
        oidContactos: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidContactos, 'Contactos');
    }

    /**
     * @param oidDireccionesIP Oid of related 'DireccionIP' instance using the role 'DireccionesIP'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDireccionesIP(
        oidDireccionesIP: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDireccionesIP, 'DireccionesIP');
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
     * @param oidParametroSistema Oid of related 'ParametroSistema' instance using the role 'ParametroSistema'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedParametroSistema(
        oidParametroSistema: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidParametroSistema, 'ParametroSistema');
    }

    /**
     * @param oidServicios Oid of related 'Servicio' instance using the role 'Servicios'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedServicios(
        oidServicios: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidServicios, 'Servicios');
    }

    /**
     * @param oidUsuariosCRA Oid of related 'UsuarioCRA' instance using the role 'UsuariosCRA'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedUsuariosCRA(
        oidUsuariosCRA: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidUsuariosCRA, 'UsuariosCRA');
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
     * Call to the service 'TIMPRIMIR' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSistemaInArg Mandatory argument 'p_thisSistema'. Oid of 'Sistema' class
     */
    public tIMPRIMIR(
        puthisSistemaInArg: any):
        Promise<ErrorInformation | {
            poutfichero: string,
            poutnombrefichero: string,
            poutdocumento: any
        }> {
        const request: {
            p_thissistema_oid: any
        } = {
            p_thissistema_oid: puthisSistemaInArg
        };
        return new Promise<ErrorInformation | {
            poutfichero: string,
            poutnombrefichero: string,
            poutdocumento: any
        }> ((resolve, reject) => {
            this.callService(this.tIMPRIMIRSrvName, request).then((response: any) => {
                resolve({
                    poutfichero: response.poutfichero,
                    poutnombrefichero: response.poutnombrefichero,
                    poutdocumento: response.poutdocumento
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
