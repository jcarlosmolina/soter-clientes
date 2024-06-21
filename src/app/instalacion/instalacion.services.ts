import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'Instalacion'
 */
export class InstalacionServices extends AbstractServices {

    private tMODIFICARCLISrvName = 'TMODIFICARCLI';
    private tMODATOSCONTABLESPORTALCLISrvName = 'TMODATOSCONTABLESPORTALCLI';

    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'Instalacion');
    }

    /**
     * Call to the filter 'F_Instalacion' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vClienteVar Variable vCliente
     * @param vfMunicipioVar Variable vfMunicipio
     * @param vfZonaVar Variable vfZona
     */
    public queryByFilterFuInstalacion(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vClienteVar: any, vfMunicipioVar: any, vfZonaVar: any): Promise<any> {
        const filter = this.util.getFilter('F_Instalacion');
        this.util.addFilterVariable(filter, 'vcliente', vClienteVar);
        this.util.addFilterVariable(filter, 'vfmunicipio', vfMunicipioVar);
        this.util.addFilterVariable(filter, 'vfzona', vfZonaVar);
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
     * @param oidZona Oid of related 'Zona' instance using the role 'Zona'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedZona(
        oidZona: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidZona, 'Zona');
    }

    /**
     * @param oidEntidadBancaria Oid of related 'EntidadBancaria' instance using the role 'EntidadBancaria'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedEntidadBancaria(
        oidEntidadBancaria: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidEntidadBancaria, 'EntidadBancaria');
    }

    /**
     * @param oidSucursalBancaria Oid of related 'SucursalBancaria' instance using the role 'SucursalBancaria'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedSucursalBancaria(
        oidSucursalBancaria: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidSucursalBancaria, 'SucursalBancaria');
    }

    /**
     * @param oidMunicipio Oid of related 'Municipio' instance using the role 'Municipio'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedMunicipio(
        oidMunicipio: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidMunicipio, 'Municipio');
    }

    /**
     * @param oidCodigoPostal Oid of related 'CodigoPostal' instance using the role 'CodigoPostal'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedCodigoPostal(
        oidCodigoPostal: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidCodigoPostal, 'CodigoPostal');
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
     * @param oidUsuarioComercial Oid of related 'Usuario' instance using the role 'UsuarioComercial'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedUsuarioComercial(
        oidUsuarioComercial: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidUsuarioComercial, 'UsuarioComercial');
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
     * @param oidImagenes Oid of related 'Imagen' instance using the role 'Imagenes'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedImagenes(
        oidImagenes: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidImagenes, 'Imagenes');
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
     * @param oidCuotas Oid of related 'Cuota' instance using the role 'Cuotas'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedCuotas(
        oidCuotas: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidCuotas, 'Cuotas');
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

    /**
     * @param oidPresupuestos Oid of related 'Presupuesto' instance using the role 'Presupuestos'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPresupuestos(
        oidPresupuestos: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPresupuestos, 'Presupuestos');
    }

    /**
     * @param oidAvisos Oid of related 'Aviso' instance using the role 'Avisos'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedAvisos(
        oidAvisos: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidAvisos, 'Avisos');
    }

    /**
     * Call to the service 'TMODIFICARCLI' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisInstalacionInArg Mandatory argument 'p_thisInstalacion'. Oid of 'Instalacion' class
     * @param pNombreInArg Mandatory argument 'pNombre'
     * @param pDireccionInArg Mandatory argument 'pDireccion'
     * @param pMunicipioInArg Optional argument 'pMunicipio'. Oid of 'Municipio' class
     * @param pCodigoPostalInArg Optional argument 'pCodigoPostal'. Oid of 'CodigoPostal' class
     * @param pPaisInArg Optional argument 'pPais'. Oid of 'Pais' class
     * @param pTelefonoInArg Optional argument 'pTelefono'
     * @param pFaxInArg Optional argument 'pFax'
     * @param pHorarioAproximadoInArg Optional argument 'pHorarioAproximado'
     */
    public tMODIFICARCLI(
        puthisInstalacionInArg: any, pNombreInArg: string, pDireccionInArg: string, pMunicipioInArg: any, pCodigoPostalInArg: any,
        pPaisInArg: any, pTelefonoInArg: string, pFaxInArg: string,
        pHorarioAproximadoInArg: string): Promise<ErrorInformation | void> {
        const request: {
            p_thisinstalacion_oid: any, pnombre: string, pdireccion: string, pmunicipio_oid: any, pcodigopostal_oid: any,
            ppais_oid: any, ptelefono: string, pfax: string, phorarioaproximado: string
        } = {
            p_thisinstalacion_oid: puthisInstalacionInArg, pnombre: pNombreInArg, pdireccion: pDireccionInArg,
            pmunicipio_oid: pMunicipioInArg, pcodigopostal_oid: pCodigoPostalInArg, ppais_oid: pPaisInArg, ptelefono: pTelefonoInArg,
            pfax: pFaxInArg, phorarioaproximado: pHorarioAproximadoInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tMODIFICARCLISrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TMODATOSCONTABLESPORTALCLI' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisInstalacionInArg Mandatory argument 'p_thisInstalacion'. Oid of 'Instalacion' class
     * @param pDCCuentaBancariaInArg Optional argument 'pDCCuentaBancaria'
     * @param pCuentaBancariaInArg Optional argument 'pCuentaBancaria'
     * @param pIBANCuentaBancariaInArg Optional argument 'pIBANCuentaBancaria'
     * @param pSwiftInArg Optional argument 'pSwift'
     * @param pEntidadBancariaInArg Optional argument 'pEntidadBancaria'. Oid of 'EntidadBancaria' class
     * @param pSucursalBancariaInArg Optional argument 'pSucursalBancaria'. Oid of 'SucursalBancaria' class
     */
    public tMODATOSCONTABLESPORTALCLI(
        puthisInstalacionInArg: any, pDCCuentaBancariaInArg: string, pCuentaBancariaInArg: string, pIBANCuentaBancariaInArg: string,
        pSwiftInArg: string, pEntidadBancariaInArg: any, pSucursalBancariaInArg: any): Promise<ErrorInformation | void> {
        const request: {
            p_thisinstalacion_oid: any, pdccuentabancaria: string, pcuentabancaria: string, pibancuentabancaria: string,
            pswift: string, pentidadbancaria_oid: any, psucursalbancaria_oid: any
        } = {
            p_thisinstalacion_oid: puthisInstalacionInArg, pdccuentabancaria: pDCCuentaBancariaInArg,
            pcuentabancaria: pCuentaBancariaInArg, pibancuentabancaria: pIBANCuentaBancariaInArg, pswift: pSwiftInArg,
            pentidadbancaria_oid: pEntidadBancariaInArg, psucursalbancaria_oid: pSucursalBancariaInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tMODATOSCONTABLESPORTALCLISrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
