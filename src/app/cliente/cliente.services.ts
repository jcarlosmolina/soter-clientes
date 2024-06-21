import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'Cliente'
 */
export class ClienteServices extends AbstractServices {

    private tMODIFICARDIRFISCALSrvName = 'TMODIFICARDIRFISCAL';
    private tMODIFICARPERSJURIDICASrvName = 'TMODIFICARPERSJURIDICA';
    private tMODIFICARLOGOSrvName = 'TMODIFICARLOGO';
    private tMODIFICARADMONFINCASrvName = 'TMODIFICARADMONFINCA';
    private mODIFICARDATOSCONTABLESCLISrvName = 'MODIFICARDATOSCONTABLESCLI';
    private tMODIFICARCLISrvName = 'TMODIFICARCLI';

    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'Cliente');
    }

    /**
     * @param oidTipoCliente Oid of related 'TipoCliente' instance using the role 'TipoCliente'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedTipoCliente(
        oidTipoCliente: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidTipoCliente, 'TipoCliente');
    }

    /**
     * @param oidSector Oid of related 'Sector' instance using the role 'Sector'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedSector(
        oidSector: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidSector, 'Sector');
    }

    /**
     * @param oidMunicipioFiscal Oid of related 'Municipio' instance using the role 'MunicipioFiscal'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedMunicipioFiscal(
        oidMunicipioFiscal: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidMunicipioFiscal, 'MunicipioFiscal');
    }

    /**
     * @param oidCodigoPostalFiscal Oid of related 'CodigoPostal' instance using the role 'CodigoPostalFiscal'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedCodigoPostalFiscal(
        oidCodigoPostalFiscal: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidCodigoPostalFiscal, 'CodigoPostalFiscal');
    }

    /**
     * @param oidPaisFiscal Oid of related 'Pais' instance using the role 'PaisFiscal'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPaisFiscal(
        oidPaisFiscal: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPaisFiscal, 'PaisFiscal');
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
     * @param oidMunicipioAdmonFinca Oid of related 'Municipio' instance using the role 'MunicipioAdmonFinca'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedMunicipioAdmonFinca(
        oidMunicipioAdmonFinca: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidMunicipioAdmonFinca, 'MunicipioAdmonFinca');
    }

    /**
     * @param oidCodigoPostalAdmonFinca Oid of related 'CodigoPostal' instance using the role 'CodigoPostalAdmonFinca'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedCodigoPostalAdmonFinca(
        oidCodigoPostalAdmonFinca: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidCodigoPostalAdmonFinca, 'CodigoPostalAdmonFinca');
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
     * @param oidInstalaciones Oid of related 'Instalacion' instance using the role 'Instalaciones'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedInstalaciones(
        oidInstalaciones: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidInstalaciones, 'Instalaciones');
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
     * @param oidPagadorDeAlbaranes Oid of related 'AlbaranVenta' instance using the role 'PagadorDeAlbaranes'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPagadorDeAlbaranes(
        oidPagadorDeAlbaranes: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPagadorDeAlbaranes, 'PagadorDeAlbaranes');
    }

    /**
     * @param oidFacturasVenta Oid of related 'FacturaVenta' instance using the role 'FacturasVenta'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedFacturasVenta(
        oidFacturasVenta: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<ErrorInformation | QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidFacturasVenta, 'FacturasVenta');
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
     * Call to the service 'TMODIFICARDIRFISCAL' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisClienteInArg Mandatory argument 'p_thisCliente'. Oid of 'Cliente' class
     * @param pDireccionFiscalInArg Optional argument 'pDireccionFiscal'
     * @param pMunicipioInArg Optional argument 'pMunicipio'. Oid of 'Municipio' class
     * @param pCodigoPostalInArg Optional argument 'pCodigoPostal'. Oid of 'CodigoPostal' class
     * @param pPaisInArg Optional argument 'pPais'. Oid of 'Pais' class
     * @param pTelefonoFiscalInArg Optional argument 'pTelefonoFiscal'
     * @param pFaxFiscalInArg Optional argument 'pFaxFiscal'
     * @param pTipoViaFiscalInArg Optional argument 'pTipoViaFiscal'
     * @param pNumeroFiscalInArg Optional argument 'pNumeroFiscal'
     * @param pEscaleraFiscalInArg Optional argument 'pEscaleraFiscal'
     * @param pPisoFiscalInArg Optional argument 'pPisoFiscal'
     * @param pPuertaFiscalInArg Optional argument 'pPuertaFiscal'
     * @param pExtensionFiscalInArg Optional argument 'pExtensionFiscal'
     */
    public tMODIFICARDIRFISCAL(
        puthisClienteInArg: any, pDireccionFiscalInArg: string, pMunicipioInArg: any, pCodigoPostalInArg: any, pPaisInArg: any,
        pTelefonoFiscalInArg: string, pFaxFiscalInArg: string, pTipoViaFiscalInArg: string, pNumeroFiscalInArg: string,
        pEscaleraFiscalInArg: string, pPisoFiscalInArg: string, pPuertaFiscalInArg: string,
        pExtensionFiscalInArg: string): Promise<ErrorInformation | void> {
        const request: {
            p_thiscliente_oid: any, pdireccionfiscal: string, pmunicipio_oid: any, pcodigopostal_oid: any, ppais_oid: any,
            ptelefonofiscal: string, pfaxfiscal: string, ptipoviafiscal: string, pnumerofiscal: string, pescalerafiscal: string,
            ppisofiscal: string, ppuertafiscal: string, pextensionfiscal: string
        } = {
            p_thiscliente_oid: puthisClienteInArg, pdireccionfiscal: pDireccionFiscalInArg, pmunicipio_oid: pMunicipioInArg,
            pcodigopostal_oid: pCodigoPostalInArg, ppais_oid: pPaisInArg, ptelefonofiscal: pTelefonoFiscalInArg,
            pfaxfiscal: pFaxFiscalInArg, ptipoviafiscal: pTipoViaFiscalInArg, pnumerofiscal: pNumeroFiscalInArg,
            pescalerafiscal: pEscaleraFiscalInArg, ppisofiscal: pPisoFiscalInArg, ppuertafiscal: pPuertaFiscalInArg,
            pextensionfiscal: pExtensionFiscalInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tMODIFICARDIRFISCALSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TMODIFICARPERSJURIDICA' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisClienteInArg Mandatory argument 'p_thisCliente'. Oid of 'Cliente' class
     * @param pRepresentanteLegalInArg Optional argument 'pRepresentanteLegal'
     * @param pDNIRepresentanteInArg Optional argument 'pDNIRepresentante'
     * @param pNotarioInArg Optional argument 'pNotario'
     * @param pFechaConstitucionInArg Optional argument 'pFechaConstitucion'
     * @param pProtocoloInArg Optional argument 'pProtocolo'
     * @param pRegistroMercantilInArg Optional argument 'pRegistroMercantil'
     */
    public tMODIFICARPERSJURIDICA(
        puthisClienteInArg: any, pRepresentanteLegalInArg: string, pDNIRepresentanteInArg: string, pNotarioInArg: string,
        pFechaConstitucionInArg: Date, pProtocoloInArg: string, pRegistroMercantilInArg: string): Promise<ErrorInformation | void> {
        const request: {
            p_thiscliente_oid: any, prepresentantelegal: string, pdnirepresentante: string, pnotario: string,
            pfechaconstitucion: string, pprotocolo: string, pregistromercantil: string
        } = {
            p_thiscliente_oid: puthisClienteInArg, prepresentantelegal: pRepresentanteLegalInArg,
            pdnirepresentante: pDNIRepresentanteInArg, pnotario: pNotarioInArg,
            pfechaconstitucion: JsonUtility.date2Json(pFechaConstitucionInArg), pprotocolo: pProtocoloInArg,
            pregistromercantil: pRegistroMercantilInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tMODIFICARPERSJURIDICASrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TMODIFICARLOGO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisClienteInArg Mandatory argument 'p_thisCliente'. Oid of 'Cliente' class
     * @param pLogoInArg Optional argument 'pLogo'
     * @param pNombreFicheroLogoInArg Optional argument 'pNombreFicheroLogo'
     */
    public tMODIFICARLOGO(
        puthisClienteInArg: any, pLogoInArg: string, pNombreFicheroLogoInArg: string): Promise<ErrorInformation | void> {
        const request: {
            p_thiscliente_oid: any, plogo: string, pnombreficherologo: string
        } = {
            p_thiscliente_oid: puthisClienteInArg, plogo: pLogoInArg, pnombreficherologo: pNombreFicheroLogoInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tMODIFICARLOGOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TMODIFICARADMONFINCA' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisClienteInArg Mandatory argument 'p_thisCliente'. Oid of 'Cliente' class
     * @param pNombreRazonSocialInArg Optional argument 'pNombreRazonSocial'
     * @param pPersonaContactoInArg Optional argument 'pPersonaContacto'
     * @param pTelefonoInArg Optional argument 'pTelefono'
     * @param pFaxInArg Optional argument 'pFax'
     * @param pEmailInArg Optional argument 'pEmail'
     * @param pMunicipioAdmonFincaInArg Optional argument 'pMunicipioAdmonFinca'. Oid of 'Municipio' class
     * @param pCodigoPostalAdmonFincaInArg Optional argument 'pCodigoPostalAdmonFinca'. Oid of 'CodigoPostal' class
     * @param pDireccionInArg Optional argument 'pDireccion'
     * @param pTipoViaAdmonFincaInArg Optional argument 'pTipoViaAdmonFinca'
     * @param pNumeroAdmonFincaInArg Optional argument 'pNumeroAdmonFinca'
     * @param pEscaleraAdmonFincaInArg Optional argument 'pEscaleraAdmonFinca'
     * @param pPisoAdmonFincaInArg Optional argument 'pPisoAdmonFinca'
     * @param pPuertaAdmonFincaInArg Optional argument 'pPuertaAdmonFinca'
     * @param pExtensionAdmonFincaInArg Optional argument 'pExtensionAdmonFinca'
     */
    public tMODIFICARADMONFINCA(
        puthisClienteInArg: any, pNombreRazonSocialInArg: string, pPersonaContactoInArg: string, pTelefonoInArg: string,
        pFaxInArg: string, pEmailInArg: string, pMunicipioAdmonFincaInArg: any, pCodigoPostalAdmonFincaInArg: any,
        pDireccionInArg: string, pTipoViaAdmonFincaInArg: string, pNumeroAdmonFincaInArg: string, pEscaleraAdmonFincaInArg: string,
        pPisoAdmonFincaInArg: string, pPuertaAdmonFincaInArg: string,
        pExtensionAdmonFincaInArg: string): Promise<ErrorInformation | void> {
        const request: {
            p_thiscliente_oid: any, pnombrerazonsocial: string, ppersonacontacto: string, ptelefono: string, pfax: string,
            pemail: string, pmunicipioadmonfinca_oid: any, pcodigopostaladmonfinca_oid: any, pdireccion: string,
            ptipoviaadmonfinca: string, pnumeroadmonfinca: string, pescaleraadmonfinca: string, ppisoadmonfinca: string,
            ppuertaadmonfinca: string, pextensionadmonfinca: string
        } = {
            p_thiscliente_oid: puthisClienteInArg, pnombrerazonsocial: pNombreRazonSocialInArg,
            ppersonacontacto: pPersonaContactoInArg, ptelefono: pTelefonoInArg, pfax: pFaxInArg, pemail: pEmailInArg,
            pmunicipioadmonfinca_oid: pMunicipioAdmonFincaInArg, pcodigopostaladmonfinca_oid: pCodigoPostalAdmonFincaInArg,
            pdireccion: pDireccionInArg, ptipoviaadmonfinca: pTipoViaAdmonFincaInArg, pnumeroadmonfinca: pNumeroAdmonFincaInArg,
            pescaleraadmonfinca: pEscaleraAdmonFincaInArg, ppisoadmonfinca: pPisoAdmonFincaInArg,
            ppuertaadmonfinca: pPuertaAdmonFincaInArg, pextensionadmonfinca: pExtensionAdmonFincaInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tMODIFICARADMONFINCASrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'MODIFICARDATOSCONTABLESCLI' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisClienteInArg Mandatory argument 'p_thisCliente'. Oid of 'Cliente' class
     * @param pEntidadBancariaInArg Optional argument 'pEntidadBancaria'. Oid of 'EntidadBancaria' class
     * @param pSucursalBancariaInArg Optional argument 'pSucursalBancaria'. Oid of 'SucursalBancaria' class
     * @param pDCCuentaBancariaInArg Optional argument 'pDCCuentaBancaria'
     * @param pCuentaBancariaInArg Optional argument 'pCuentaBancaria'
     * @param pIBANCuentaBancariaInArg Optional argument 'pIBANCuentaBancaria'
     * @param pSwiftInArg Optional argument 'pSwift'
     */
    public mODIFICARDATOSCONTABLESCLI(
        puthisClienteInArg: any, pEntidadBancariaInArg: any, pSucursalBancariaInArg: any, pDCCuentaBancariaInArg: string,
        pCuentaBancariaInArg: string, pIBANCuentaBancariaInArg: string, pSwiftInArg: string): Promise<ErrorInformation | void> {
        const request: {
            p_thiscliente_oid: any, pentidadbancaria_oid: any, psucursalbancaria_oid: any, pdccuentabancaria: string,
            pcuentabancaria: string, pibancuentabancaria: string, pswift: string
        } = {
            p_thiscliente_oid: puthisClienteInArg, pentidadbancaria_oid: pEntidadBancariaInArg,
            psucursalbancaria_oid: pSucursalBancariaInArg, pdccuentabancaria: pDCCuentaBancariaInArg,
            pcuentabancaria: pCuentaBancariaInArg, pibancuentabancaria: pIBANCuentaBancariaInArg, pswift: pSwiftInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.mODIFICARDATOSCONTABLESCLISrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TMODIFICARCLI' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisClienteInArg Mandatory argument 'p_thisCliente'. Oid of 'Cliente' class
     * @param pNombreComercialInArg Optional argument 'pNombreComercial'
     * @param pCIFNIFInArg Optional argument 'pCIFNIF'
     * @param pPaginaWebInArg Optional argument 'pPaginaWeb'
     * @param pEmailInArg Optional argument 'pEmail'
     * @param pTelefonoInArg Optional argument 'pTelefono'
     * @param pFaxInArg Optional argument 'pFax'
     * @param pSectorInArg Optional argument 'pSector'. Oid of 'Sector' class
     * @param pExtensionInArg Optional argument 'pExtension'
     */
    public tMODIFICARCLI(
        puthisClienteInArg: any, pNombreComercialInArg: string, pCIFNIFInArg: string, pPaginaWebInArg: string, pEmailInArg: string,
        pTelefonoInArg: string, pFaxInArg: string, pSectorInArg: any, pExtensionInArg: string): Promise<ErrorInformation | void> {
        const request: {
            p_thiscliente_oid: any, pnombrecomercial: string, pcifnif: string, ppaginaweb: string, pemail: string, ptelefono: string,
            pfax: string, psector_oid: any, pextension: string
        } = {
            p_thiscliente_oid: puthisClienteInArg, pnombrecomercial: pNombreComercialInArg, pcifnif: pCIFNIFInArg,
            ppaginaweb: pPaginaWebInArg, pemail: pEmailInArg, ptelefono: pTelefonoInArg, pfax: pFaxInArg, psector_oid: pSectorInArg,
            pextension: pExtensionInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tMODIFICARCLISrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
