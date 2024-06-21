import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'Contacto'
 */
export class ContactoServices extends AbstractServices {

    private deleteuinstanceSrvName = 'delete_instance';
    private edituinstanceSrvName = 'edit_instance';
    private tCREAR4INSTALACIONSrvName = 'TCREAR4INSTALACION';
    private tCREAR4SISTEMASrvName = 'TCREAR4SISTEMA';

    constructor(
        protected readonly appGlobalInfo: AppGlobalInfo,
        protected readonly util: Util) {
        super(appGlobalInfo, util, 'Contacto');
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
     * Call to the service 'delete_instance' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisContactoInArg Mandatory argument 'p_thisContacto'. Oid of 'Contacto' class
     */
    public deleteuinstance(
        puthisContactoInArg: any): Promise<ErrorInformation | void> {
        const request: {
            p_thiscontacto_oid: any
        } = {
            p_thiscontacto_oid: puthisContactoInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.deleteuinstanceSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'edit_instance' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisContactoInArg Mandatory argument 'p_thisContacto'. Oid of 'Contacto' class
     * @param puNombreInArg Optional argument 'p_Nombre'
     * @param puTelefono1InArg Optional argument 'p_Telefono1'
     * @param puTelefono2InArg Optional argument 'p_Telefono2'
     * @param puFaxInArg Optional argument 'p_Fax'
     * @param puEmailInArg Optional argument 'p_Email'
     * @param puRecibePresupuestosInArg Mandatory argument 'p_RecibePresupuestos'
     * @param puRecibePartesInArg Mandatory argument 'p_RecibePartes'
     * @param puRecibeFacturasInArg Mandatory argument 'p_RecibeFacturas'
     * @param puPuedeFirmarInArg Optional argument 'p_PuedeFirmar'
     * @param puDNIInArg Optional argument 'p_DNI'
     * @param puMovilInArg Optional argument 'p_Movil'
     * @param puTipoFirmaInArg Optional argument 'p_TipoFirma'
     * @param puIdDispositivoInArg Optional argument 'p_IdDispositivo'
     */
    public edituinstance(
        puthisContactoInArg: any, puNombreInArg: string, puTelefono1InArg: string, puTelefono2InArg: string, puFaxInArg: string,
        puEmailInArg: string, puRecibePresupuestosInArg: boolean, puRecibePartesInArg: boolean, puRecibeFacturasInArg: boolean,
        puPuedeFirmarInArg: boolean, puDNIInArg: string, puMovilInArg: string, puTipoFirmaInArg: string,
        puIdDispositivoInArg: string): Promise<ErrorInformation | void> {
        const request: {
            p_thiscontacto_oid: any, p_nombre: string, p_telefono1: string, p_telefono2: string, p_fax: string, p_email: string,
            p_recibepresupuestos: boolean, p_recibepartes: boolean, p_recibefacturas: boolean, p_puedefirmar: boolean, p_dni: string,
            p_movil: string, p_tipofirma: string, p_iddispositivo: string
        } = {
            p_thiscontacto_oid: puthisContactoInArg, p_nombre: puNombreInArg, p_telefono1: puTelefono1InArg,
            p_telefono2: puTelefono2InArg, p_fax: puFaxInArg, p_email: puEmailInArg, p_recibepresupuestos: puRecibePresupuestosInArg,
            p_recibepartes: puRecibePartesInArg, p_recibefacturas: puRecibeFacturasInArg, p_puedefirmar: puPuedeFirmarInArg,
            p_dni: puDNIInArg, p_movil: puMovilInArg, p_tipofirma: puTipoFirmaInArg, p_iddispositivo: puIdDispositivoInArg
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
     * Call to the service 'TCREAR4INSTALACION' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param pInstalacionInArg Mandatory argument 'pInstalacion'. Oid of 'Instalacion' class
     * @param pTipoContactoInArg Mandatory argument 'pTipoContacto'. Oid of 'TipoContacto' class
     * @param pNombreInArg Optional argument 'pNombre'
     * @param pTelefono1InArg Optional argument 'pTelefono1'
     * @param pTelefono2InArg Optional argument 'pTelefono2'
     * @param pFaxInArg Optional argument 'pFax'
     * @param pEmailInArg Optional argument 'pEmail'
     * @param pRecibePresupuestosInArg Mandatory argument 'pRecibePresupuestos'
     * @param pRecibePartesInArg Mandatory argument 'pRecibePartes'
     * @param pRecibeFacturasInArg Mandatory argument 'pRecibeFacturas'
     * @param pPuedeFirmarInArg Optional argument 'pPuedeFirmar'
     * @param pDNIInArg Optional argument 'pDNI'
     * @param pMovilInArg Optional argument 'pMovil'
     * @param pTipoFirmaInArg Optional argument 'pTipoFirma'
     * @param pIdDispositivoInArg Optional argument 'pIdDispositivo'
     */
    public tCREAR4INSTALACION(
        pInstalacionInArg: any, pTipoContactoInArg: any, pNombreInArg: string, pTelefono1InArg: string, pTelefono2InArg: string,
        pFaxInArg: string, pEmailInArg: string, pRecibePresupuestosInArg: boolean, pRecibePartesInArg: boolean,
        pRecibeFacturasInArg: boolean, pPuedeFirmarInArg: boolean, pDNIInArg: string, pMovilInArg: string, pTipoFirmaInArg: string,
        pIdDispositivoInArg: string): Promise<ErrorInformation | void> {
        const request: {
            pinstalacion_oid: any, ptipocontacto_json: any, pnombre: string, ptelefono1: string, ptelefono2: string, pfax: string,
            pemail: string, precibepresupuestos: boolean, precibepartes: boolean, precibefacturas: boolean, ppuedefirmar: boolean,
            pdni: string, pmovil: string, ptipofirma: string, piddispositivo: string
        } = {
            pinstalacion_oid: pInstalacionInArg, ptipocontacto_json: pTipoContactoInArg ? JSON.stringify(pTipoContactoInArg) : '',
            pnombre: pNombreInArg, ptelefono1: pTelefono1InArg, ptelefono2: pTelefono2InArg, pfax: pFaxInArg, pemail: pEmailInArg,
            precibepresupuestos: pRecibePresupuestosInArg, precibepartes: pRecibePartesInArg, precibefacturas: pRecibeFacturasInArg,
            ppuedefirmar: pPuedeFirmarInArg, pdni: pDNIInArg, pmovil: pMovilInArg, ptipofirma: pTipoFirmaInArg,
            piddispositivo: pIdDispositivoInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tCREAR4INSTALACIONSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TCREAR4SISTEMA' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param pSistemaInArg Mandatory argument 'pSistema'. Oid of 'Sistema' class
     * @param pTipoContactoInArg Mandatory argument 'pTipoContacto'. Oid of 'TipoContacto' class
     * @param pNombreInArg Optional argument 'pNombre'
     * @param pTelefono1InArg Optional argument 'pTelefono1'
     * @param pTelefono2InArg Optional argument 'pTelefono2'
     * @param pFaxInArg Optional argument 'pFax'
     * @param pEmailInArg Optional argument 'pEmail'
     * @param pRecibePresupuestosInArg Mandatory argument 'pRecibePresupuestos'
     * @param pRecibePartesInArg Mandatory argument 'pRecibePartes'
     * @param pRecibeFacturasInArg Mandatory argument 'pRecibeFacturas'
     * @param pPuedeFirmarInArg Optional argument 'pPuedeFirmar'
     * @param pDNIInArg Optional argument 'pDNI'
     * @param pMovilInArg Optional argument 'pMovil'
     * @param pTipoFirmaInArg Optional argument 'pTipoFirma'
     * @param pIdDispositivoInArg Optional argument 'pIdDispositivo'
     */
    public tCREAR4SISTEMA(
        pSistemaInArg: any, pTipoContactoInArg: any, pNombreInArg: string, pTelefono1InArg: string, pTelefono2InArg: string,
        pFaxInArg: string, pEmailInArg: string, pRecibePresupuestosInArg: boolean, pRecibePartesInArg: boolean,
        pRecibeFacturasInArg: boolean, pPuedeFirmarInArg: boolean, pDNIInArg: string, pMovilInArg: string, pTipoFirmaInArg: string,
        pIdDispositivoInArg: string): Promise<ErrorInformation | void> {
        const request: {
            psistema_oid: any, ptipocontacto_json: any, pnombre: string, ptelefono1: string, ptelefono2: string, pfax: string,
            pemail: string, precibepresupuestos: boolean, precibepartes: boolean, precibefacturas: boolean, ppuedefirmar: boolean,
            pdni: string, pmovil: string, ptipofirma: string, piddispositivo: string
        } = {
            psistema_oid: pSistemaInArg, ptipocontacto_json: pTipoContactoInArg ? JSON.stringify(pTipoContactoInArg) : '',
            pnombre: pNombreInArg, ptelefono1: pTelefono1InArg, ptelefono2: pTelefono2InArg, pfax: pFaxInArg, pemail: pEmailInArg,
            precibepresupuestos: pRecibePresupuestosInArg, precibepartes: pRecibePartesInArg, precibefacturas: pRecibeFacturasInArg,
            ppuedefirmar: pPuedeFirmarInArg, pdni: pDNIInArg, pmovil: pMovilInArg, ptipofirma: pTipoFirmaInArg,
            piddispositivo: pIdDispositivoInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tCREAR4SISTEMASrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
