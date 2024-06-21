import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'Documento'
 */
export class DocumentoServices extends AbstractServices {

    private descargarSrvName = 'descargar';
    private edituinstanceSrvName = 'edit_instance';
    private abrirNuevaVentanaSrvName = 'abrirNuevaVentana';
    private tCREAR4CLIENTESrvName = 'TCREAR4CLIENTE';
    private tOBTENERFIRMADO4CONTRATOSrvName = 'TOBTENERFIRMADO4CONTRATO';
    private tOBTENERFIRMADO4PRESUPUESTOSrvName = 'TOBTENERFIRMADO4PRESUPUESTO';
    private tOBTENERFIRMADO4PARTESrvName = 'TOBTENERFIRMADO4PARTE';

    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'Documento');
    }

    /**
     * Call to the filter 'F_Documento' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vTipoDocVar Variable vTipoDoc
     * @param vIdentificadorVar Variable vIdentificador
     * @param vReferenciaVar Variable vReferencia
     * @param vClienteCodigoVar Variable vClienteCodigo
     */
    public queryByFilterFuDocumento(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vTipoDocVar: string, vIdentificadorVar: string, vReferenciaVar: string, vClienteCodigoVar: string): Promise<any> {
        const filter = this.util.getFilter('F_Documento');
        this.util.addFilterVariable(filter, 'vtipodoc', vTipoDocVar);
        this.util.addFilterVariable(filter, 'videntificador', vIdentificadorVar);
        this.util.addFilterVariable(filter, 'vreferencia', vReferenciaVar);
        this.util.addFilterVariable(filter, 'vclientecodigo', vClienteCodigoVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * Call to the filter 'F_DocumentoPortalCli' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vFechaIniVar Variable vFechaIni
     * @param vFechaFinVar Variable vFechaFin
     * @param vTipoVar Variable vTipo
     */
    public queryByFilterFuDocumentoPortalCli(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vFechaIniVar: Date, vFechaFinVar: Date, vTipoVar: string): Promise<any> {
        const filter = this.util.getFilter('F_DocumentoPortalCli');
        this.util.addFilterVariable(filter, 'vfechaini', JsonUtility.date2Json(vFechaIniVar));
        this.util.addFilterVariable(filter, 'vfechafin', JsonUtility.date2Json(vFechaFinVar));
        this.util.addFilterVariable(filter, 'vtipo', vTipoVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
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
     * @param oidAlbaranVenta Oid of related 'AlbaranVenta' instance using the role 'AlbaranVenta'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedAlbaranVenta(
        oidAlbaranVenta: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidAlbaranVenta, 'AlbaranVenta');
    }

    /**
     * @param oidFacturaVenta Oid of related 'FacturaVenta' instance using the role 'FacturaVenta'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedFacturaVenta(
        oidFacturaVenta: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidFacturaVenta, 'FacturaVenta');
    }

    /**
     * @param oidDocumentoPrev Oid of related 'Documento' instance using the role 'DocumentoPrev'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDocumentoPrev(
        oidDocumentoPrev: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDocumentoPrev, 'DocumentoPrev');
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
     * @param oidVersionesAnteriores Oid of related 'Documento' instance using the role 'VersionesAnteriores'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedVersionesAnteriores(
        oidVersionesAnteriores: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidVersionesAnteriores, 'VersionesAnteriores');
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
     * @param oidCuota Oid of related 'Cuota' instance using the role 'Cuota'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedCuota(
        oidCuota: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidCuota, 'Cuota');
    }

    /**
     * @param oidDocumentoSig Oid of related 'Documento' instance using the role 'DocumentoSig'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDocumentoSig(
        oidDocumentoSig: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDocumentoSig, 'DocumentoSig');
    }

    /**
     * @param oidVersionesSiguientes Oid of related 'Documento' instance using the role 'VersionesSiguientes'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedVersionesSiguientes(
        oidVersionesSiguientes: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidVersionesSiguientes, 'VersionesSiguientes');
    }

    /**
     * Call to the service 'descargar' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDocuAdjuntoInArg Mandatory argument 'p_thisDocuAdjunto'. Oid of 'Documento' class
     */
    public descargar(
        puthisDocuAdjuntoInArg: any):
        Promise<ErrorInformation | {
            poutfichero: string,
            poutnombrefichero: string
        }> {
        const request: {
            p_thisdocuadjunto_oid: any
        } = {
            p_thisdocuadjunto_oid: puthisDocuAdjuntoInArg
        };
        return new Promise<ErrorInformation | {
            poutfichero: string,
            poutnombrefichero: string
        }> ((resolve, reject) => {
            this.callService(this.descargarSrvName, request).then((response: any) => {
                resolve({
                    poutfichero: response.poutfichero,
                    poutnombrefichero: response.poutnombrefichero
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'edit_instance' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDocumentoInArg Mandatory argument 'p_thisDocumento'. Oid of 'Documento' class
     * @param puNotasInArg Optional argument 'p_Notas'
     * @param puObservacionsInArg Optional argument 'p_Observacions'
     */
    public edituinstance(
        puthisDocumentoInArg: any, puNotasInArg: string, puObservacionsInArg: string): Promise<ErrorInformation | void> {
        const request: {
            p_thisdocumento_oid: any, p_notas: string, p_observacions: string
        } = {
            p_thisdocumento_oid: puthisDocumentoInArg, p_notas: puNotasInArg, p_observacions: puObservacionsInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.edituinstanceSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'abrirNuevaVentana' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDocuAdjuntoInArg Mandatory argument 'p_thisDocuAdjunto'. Oid of 'Documento' class
     */
    public abrirNuevaVentana(
        puthisDocuAdjuntoInArg: any):
        Promise<ErrorInformation | {
            poutfichero: string,
            poutnombrefichero: string
        }> {
        const request: {
            p_thisdocuadjunto_oid: any
        } = {
            p_thisdocuadjunto_oid: puthisDocuAdjuntoInArg
        };
        return new Promise<ErrorInformation | {
            poutfichero: string,
            poutnombrefichero: string
        }> ((resolve, reject) => {
            this.callService(this.abrirNuevaVentanaSrvName, request).then((response: any) => {
                resolve({
                    poutfichero: response.poutfichero,
                    poutnombrefichero: response.poutnombrefichero
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TCREAR4CLIENTE' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param pClienteInArg Mandatory argument 'pCliente'. Oid of 'Cliente' class
     * @param pFicheroInArg Mandatory argument 'pFichero'
     * @param pNombreDocumentoInArg Mandatory argument 'pNombreDocumento'
     * @param pNotasInArg Optional argument 'pNotas'
     * @param pObservacionesInArg Optional argument 'pObservaciones'
     */
    public tCREAR4CLIENTE(
        pClienteInArg: any, pFicheroInArg: string, pNombreDocumentoInArg: string, pNotasInArg: string, pObservacionesInArg: string):
        Promise<ErrorInformation | {
            poutdocumento: any
        }> {
        const request: {
            pcliente_oid: any, pfichero: string, pnombredocumento: string, pnotas: string, pobservaciones: string
        } = {
            pcliente_oid: pClienteInArg, pfichero: pFicheroInArg, pnombredocumento: pNombreDocumentoInArg, pnotas: pNotasInArg,
            pobservaciones: pObservacionesInArg
        };
        return new Promise<ErrorInformation | {
            poutdocumento: any
        }> ((resolve, reject) => {
            this.callService(this.tCREAR4CLIENTESrvName, request).then((response: any) => {
                resolve({
                    poutdocumento: response.poutdocumento
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TOBTENERFIRMADO4CONTRATO' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param pDocumentoSinFirmarInArg Mandatory argument 'pDocumentoSinFirmar'. Oid of 'Documento' class
     */
    public tOBTENERFIRMADO4CONTRATO(
        pDocumentoSinFirmarInArg: any):
        Promise<ErrorInformation | {
            psfichero: string,
            psdocumento: any
        }> {
        const request: {
            pdocumentosinfirmar_oid: any
        } = {
            pdocumentosinfirmar_oid: pDocumentoSinFirmarInArg
        };
        return new Promise<ErrorInformation | {
            psfichero: string,
            psdocumento: any
        }> ((resolve, reject) => {
            this.callService(this.tOBTENERFIRMADO4CONTRATOSrvName, request).then((response: any) => {
                resolve({
                    psfichero: response.psfichero,
                    psdocumento: response.psdocumento
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TOBTENERFIRMADO4PRESUPUESTO' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param pDocumentoSinFirmarInArg Mandatory argument 'pDocumentoSinFirmar'. Oid of 'Documento' class
     */
    public tOBTENERFIRMADO4PRESUPUESTO(
        pDocumentoSinFirmarInArg: any):
        Promise<ErrorInformation | {
            psfichero: string,
            psdocumento: any
        }> {
        const request: {
            pdocumentosinfirmar_oid: any
        } = {
            pdocumentosinfirmar_oid: pDocumentoSinFirmarInArg
        };
        return new Promise<ErrorInformation | {
            psfichero: string,
            psdocumento: any
        }> ((resolve, reject) => {
            this.callService(this.tOBTENERFIRMADO4PRESUPUESTOSrvName, request).then((response: any) => {
                resolve({
                    psfichero: response.psfichero,
                    psdocumento: response.psdocumento
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TOBTENERFIRMADO4PARTE' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param pDocumentoSinFirmarInArg Mandatory argument 'pDocumentoSinFirmar'. Oid of 'Documento' class
     */
    public tOBTENERFIRMADO4PARTE(
        pDocumentoSinFirmarInArg: any):
        Promise<ErrorInformation | {
            psfichero: string,
            psdocumento: any
        }> {
        const request: {
            pdocumentosinfirmar_oid: any
        } = {
            pdocumentosinfirmar_oid: pDocumentoSinFirmarInArg
        };
        return new Promise<ErrorInformation | {
            psfichero: string,
            psdocumento: any
        }> ((resolve, reject) => {
            this.callService(this.tOBTENERFIRMADO4PARTESrvName, request).then((response: any) => {
                resolve({
                    psfichero: response.psfichero,
                    psdocumento: response.psdocumento
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
