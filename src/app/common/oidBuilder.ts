import { Injectable } from '@angular/core';
import { JsonUtility } from './jsonUtility';

@Injectable({providedIn: 'root'})
export class OidBuilder {

    /**
     * Builds an Oid of class ArchivoEnlaceContable
     * @param archivoEnlaceContableuiduArchivoEnlaceContable Identificacion field 1
     */
    public buildOidArchivoEnlaceContable(archivoEnlaceContableuiduArchivoEnlaceContable: number): {
        id_archivoenlacecontable: number} {
        if (archivoEnlaceContableuiduArchivoEnlaceContable) {
            return {id_archivoenlacecontable: archivoEnlaceContableuiduArchivoEnlaceContable};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ImportacionDatos
     * @param importacionDatosuiduImportacionDatos Identificacion field 1
     */
    public buildOidImportacionDatos(importacionDatosuiduImportacionDatos: number): {
        id_importaciondatos: number} {
        if (importacionDatosuiduImportacionDatos) {
            return {id_importaciondatos: importacionDatosuiduImportacionDatos};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Localizacion
     * @param localizacionuiduLocalizacion Identificacion field 1
     */
    public buildOidLocalizacion(localizacionuiduLocalizacion: number): {
        id_localizacion: number} {
        if (localizacionuiduLocalizacion) {
            return {id_localizacion: localizacionuiduLocalizacion};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Perfil
     * @param perfiluiduPerfil Identificacion field 1
     */
    public buildOidPerfil(perfiluiduPerfil: number): {
        id_perfil: number} {
        if (perfiluiduPerfil) {
            return {id_perfil: perfiluiduPerfil};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Usuario
     * @param usuariouiduUsuario Identificacion field 1
     */
    public buildOidUsuario(usuariouiduUsuario: string): {
        id_usuario: string} {
        if (usuariouiduUsuario) {
            return {id_usuario: usuariouiduUsuario};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ControlHorario
     * @param controlHorariouiduControlHorario Identificacion field 1
     */
    public buildOidControlHorario(controlHorariouiduControlHorario: number): {
        id_controlhorario: number} {
        if (controlHorariouiduControlHorario) {
            return {id_controlhorario: controlHorariouiduControlHorario};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Planificador
     * @param planificadoruiduPlanificador Identificacion field 1
     */
    public buildOidPlanificador(planificadoruiduPlanificador: string): {
        id_planificador: string} {
        if (planificadoruiduPlanificador) {
            return {id_planificador: planificadoruiduPlanificador};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class RegistroAnualPermisos
     * @param registroAnualPermisosuiduPermisoAnual Identificacion field 1
     */
    public buildOidRegistroAnualPermisos(registroAnualPermisosuiduPermisoAnual: number): {
        id_permisoanual: number} {
        if (registroAnualPermisosuiduPermisoAnual) {
            return {id_permisoanual: registroAnualPermisosuiduPermisoAnual};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class RegistroHorario
     * @param registroHorariouiduRegistroHorario Identificacion field 1
     */
    public buildOidRegistroHorario(registroHorariouiduRegistroHorario: number): {
        id_registrohorario: number} {
        if (registroHorariouiduRegistroHorario) {
            return {id_registrohorario: registroHorariouiduRegistroHorario};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class SolicitudPermiso
     * @param solicitudPermisouiduSolicitudPermiso Identificacion field 1
     */
    public buildOidSolicitudPermiso(solicitudPermisouiduSolicitudPermiso: number): {
        id_solicitudpermiso: number} {
        if (solicitudPermisouiduSolicitudPermiso) {
            return {id_solicitudpermiso: solicitudPermisouiduSolicitudPermiso};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class IU
     * @param iUuidIU Identificacion field 1
     */
    public buildOidIU(iUuidIU: string): {
        idiu: string} {
        if (iUuidIU) {
            return {idiu: iUuidIU};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class IUAction
     * @param iUActionuidIU Identificacion field 1
     * @param iUActionuidIUAction Identificacion field 2
     */
    public buildOidIUAction(iUActionuidIU: string, iUActionuidIUAction: string): {
        idiu: string,
        idiuaction: string} {
        if (iUActionuidIU || iUActionuidIUAction) {
            return {idiu: iUActionuidIU,
                idiuaction: iUActionuidIUAction};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class IUAttribute
     * @param iUAttributeuidIU Identificacion field 1
     * @param iUAttributeuidIUAttribute Identificacion field 2
     */
    public buildOidIUAttribute(iUAttributeuidIU: string, iUAttributeuidIUAttribute: string): {
        idiu: string,
        idiuattribute: string} {
        if (iUAttributeuidIU || iUAttributeuidIUAttribute) {
            return {idiu: iUAttributeuidIU,
                idiuattribute: iUAttributeuidIUAttribute};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class IUDetail
     * @param iUDetailuidIU Identificacion field 1
     * @param iUDetailuidIUDetail Identificacion field 2
     */
    public buildOidIUDetail(iUDetailuidIU: string, iUDetailuidIUDetail: string): {
        idiu: string,
        idiudetail: string} {
        if (iUDetailuidIU || iUDetailuidIUDetail) {
            return {idiu: iUDetailuidIU,
                idiudetail: iUDetailuidIUDetail};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class IUMenuItem
     * @param iUMenuItemuiduIUMenuItem Identificacion field 1
     */
    public buildOidIUMenuItem(iUMenuItemuiduIUMenuItem: string): {
        id_iumenuitem: string} {
        if (iUMenuItemuiduIUMenuItem) {
            return {id_iumenuitem: iUMenuItemuiduIUMenuItem};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class IUNavigation
     * @param iUNavigationuidIU Identificacion field 1
     * @param iUNavigationuidIUNavigation Identificacion field 2
     */
    public buildOidIUNavigation(iUNavigationuidIU: string, iUNavigationuidIUNavigation: string): {
        idiu: string,
        idiunavigation: string} {
        if (iUNavigationuidIU || iUNavigationuidIUNavigation) {
            return {idiu: iUNavigationuidIU,
                idiunavigation: iUNavigationuidIUNavigation};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class IURelation
     * @param iURelationuiduIURelation Identificacion field 1
     */
    public buildOidIURelation(iURelationuiduIURelation: number): {
        id_iurelation: number} {
        if (iURelationuiduIURelation) {
            return {id_iurelation: iURelationuiduIURelation};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class IUViewUser
     * @param iUViewUseruiduIUViewUser Identificacion field 1
     */
    public buildOidIUViewUser(iUViewUseruiduIUViewUser: number): {
        id_iuviewuser: number} {
        if (iUViewUseruiduIUViewUser) {
            return {id_iuviewuser: iUViewUseruiduIUViewUser};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Profile
     * @param profileuidProfile Identificacion field 1
     */
    public buildOidProfile(profileuidProfile: number): {
        idprofile: number} {
        if (profileuidProfile) {
            return {idprofile: profileuidProfile};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ProfileIU
     * @param profileIUuidProfile Identificacion field 1
     * @param profileIUuidProfileIU Identificacion field 2
     */
    public buildOidProfileIU(profileIUuidProfile: number, profileIUuidProfileIU: string): {
        idprofile: number,
        idprofileiu: string} {
        if (profileIUuidProfile || profileIUuidProfileIU) {
            return {idprofile: profileIUuidProfile,
                idprofileiu: profileIUuidProfileIU};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ProfileIUAct
     * @param profileIUActuidProfile Identificacion field 1
     * @param profileIUActuidProfileIU Identificacion field 2
     * @param profileIUActuidProfileIUAct Identificacion field 3
     */
    public buildOidProfileIUAct(profileIUActuidProfile: number, profileIUActuidProfileIU: string,
                                profileIUActuidProfileIUAct: string): {
        idprofile: number,
        idprofileiu: string,
        idprofileiuact: string} {
        if (profileIUActuidProfile || profileIUActuidProfileIU
             || profileIUActuidProfileIUAct) {
            return {idprofile: profileIUActuidProfile,
                idprofileiu: profileIUActuidProfileIU,
                idprofileiuact: profileIUActuidProfileIUAct};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ProfileIUAttr
     * @param profileIUAttruidProfile Identificacion field 1
     * @param profileIUAttruidProfileIU Identificacion field 2
     * @param profileIUAttruidProfileIUAttr Identificacion field 3
     */
    public buildOidProfileIUAttr(profileIUAttruidProfile: number, profileIUAttruidProfileIU: string,
                                 profileIUAttruidProfileIUAttr: string): {
        idprofile: number,
        idprofileiu: string,
        idprofileiuattr: string} {
        if (profileIUAttruidProfile || profileIUAttruidProfileIU
             || profileIUAttruidProfileIUAttr) {
            return {idprofile: profileIUAttruidProfile,
                idprofileiu: profileIUAttruidProfileIU,
                idprofileiuattr: profileIUAttruidProfileIUAttr};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ProfileIUDetail
     * @param profileIUDetailuidProfile Identificacion field 1
     * @param profileIUDetailuidProfileIU Identificacion field 2
     * @param profileIUDetailuidProfileIUDetail Identificacion field 3
     */
    public buildOidProfileIUDetail(profileIUDetailuidProfile: number, profileIUDetailuidProfileIU: string,
                                   profileIUDetailuidProfileIUDetail: string): {
        idprofile: number,
        idprofileiu: string,
        idprofileiudetail: string} {
        if (profileIUDetailuidProfile || profileIUDetailuidProfileIU
             || profileIUDetailuidProfileIUDetail) {
            return {idprofile: profileIUDetailuidProfile,
                idprofileiu: profileIUDetailuidProfileIU,
                idprofileiudetail: profileIUDetailuidProfileIUDetail};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ProfileIUMenuItem
     * @param profileIUMenuItemuidProfile Identificacion field 1
     * @param profileIUMenuItemuidProfileIUMenuItem Identificacion field 2
     */
    public buildOidProfileIUMenuItem(profileIUMenuItemuidProfile: number, profileIUMenuItemuidProfileIUMenuItem: string): {
        idprofile: number,
        idprofileiumenuitem: string} {
        if (profileIUMenuItemuidProfile || profileIUMenuItemuidProfileIUMenuItem) {
            return {idprofile: profileIUMenuItemuidProfile,
                idprofileiumenuitem: profileIUMenuItemuidProfileIUMenuItem};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ProfileIUNav
     * @param profileIUNavuidProfile Identificacion field 1
     * @param profileIUNavuidProfileIU Identificacion field 2
     * @param profileIUNavuidProfileIUNav Identificacion field 3
     */
    public buildOidProfileIUNav(profileIUNavuidProfile: number, profileIUNavuidProfileIU: string,
                                profileIUNavuidProfileIUNav: string): {
        idprofile: number,
        idprofileiu: string,
        idprofileiunav: string} {
        if (profileIUNavuidProfile || profileIUNavuidProfileIU
             || profileIUNavuidProfileIUNav) {
            return {idprofile: profileIUNavuidProfile,
                idprofileiu: profileIUNavuidProfileIU,
                idprofileiunav: profileIUNavuidProfileIUNav};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ProfileIURelation
     * @param profileIURelationuiduProfileIURelation Identificacion field 1
     */
    public buildOidProfileIURelation(profileIURelationuiduProfileIURelation: number): {
        id_profileiurelation: number} {
        if (profileIURelationuiduProfileIURelation) {
            return {id_profileiurelation: profileIURelationuiduProfileIURelation};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ViewProfile
     * @param viewProfileuiduViewProfile Identificacion field 1
     */
    public buildOidViewProfile(viewProfileuiduViewProfile: number): {
        id_viewprofile: number} {
        if (viewProfileuiduViewProfile) {
            return {id_viewprofile: viewProfileuiduViewProfile};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Almacen
     * @param almacenuiduAlmacen Identificacion field 1
     */
    public buildOidAlmacen(almacenuiduAlmacen: number): {
        id_almacen: number} {
        if (almacenuiduAlmacen) {
            return {id_almacen: almacenuiduAlmacen};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ArticuloEnAlmacen
     * @param articuloEnAlmacenuiduAlmacen Identificacion field 1
     * @param articuloEnAlmacenuiduArticuloServicio Identificacion field 2
     */
    public buildOidArticuloEnAlmacen(articuloEnAlmacenuiduAlmacen: number, articuloEnAlmacenuiduArticuloServicio: number): {
        id_almacen: number,
        id_articuloservicio: number} {
        if (articuloEnAlmacenuiduAlmacen || articuloEnAlmacenuiduArticuloServicio) {
            return {id_almacen: articuloEnAlmacenuiduAlmacen,
                id_articuloservicio: articuloEnAlmacenuiduArticuloServicio};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ArticuloServicio
     * @param articuloServiciouiduArticuloServicio Identificacion field 1
     */
    public buildOidArticuloServicio(articuloServiciouiduArticuloServicio: number): {
        id_articuloservicio: number} {
        if (articuloServiciouiduArticuloServicio) {
            return {id_articuloservicio: articuloServiciouiduArticuloServicio};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class MovimientoArtEnAlmacen
     * @param movimientoArtEnAlmacenuiduMovimientoArtEnAlmacen Identificacion field 1
     */
    public buildOidMovimientoArtEnAlmacen(movimientoArtEnAlmacenuiduMovimientoArtEnAlmacen: number): {
        id_movimientoartenalmacen: number} {
        if (movimientoArtEnAlmacenuiduMovimientoArtEnAlmacen) {
            return {id_movimientoartenalmacen: movimientoArtEnAlmacenuiduMovimientoArtEnAlmacen};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class NroSerieArticulo
     * @param nroSerieArticulouNroSerie Identificacion field 1
     */
    public buildOidNroSerieArticulo(nroSerieArticulouNroSerie: string): {
        nroserie: string} {
        if (nroSerieArticulouNroSerie) {
            return {nroserie: nroSerieArticulouNroSerie};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class RegularizacionArtEnAlmacen
     * @param regularizacionArtEnAlmacenuiduRegularizacionArtEnAlmacen Identificacion field 1
     */
    public buildOidRegularizacionArtEnAlmacen(regularizacionArtEnAlmacenuiduRegularizacionArtEnAlmacen: number): {
        id_regularizacionartenalmacen: number} {
        if (regularizacionArtEnAlmacenuiduRegularizacionArtEnAlmacen) {
            return {id_regularizacionartenalmacen: regularizacionArtEnAlmacenuiduRegularizacionArtEnAlmacen};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ReservaManual
     * @param reservaManualuiduReservaManual Identificacion field 1
     */
    public buildOidReservaManual(reservaManualuiduReservaManual: number): {
        id_reservamanual: number} {
        if (reservaManualuiduReservaManual) {
            return {id_reservamanual: reservaManualuiduReservaManual};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class SubArticuloKit
     * @param subArticuloKituiduSubArticuloKit Identificacion field 1
     */
    public buildOidSubArticuloKit(subArticuloKituiduSubArticuloKit: number): {
        id_subarticulokit: number} {
        if (subArticuloKituiduSubArticuloKit) {
            return {id_subarticulokit: subArticuloKituiduSubArticuloKit};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class AgenteCliente
     * @param agenteClienteuiduAgenteCliente Identificacion field 1
     */
    public buildOidAgenteCliente(agenteClienteuiduAgenteCliente: number): {
        id_agentecliente: number} {
        if (agenteClienteuiduAgenteCliente) {
            return {id_agentecliente: agenteClienteuiduAgenteCliente};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Cliente
     * @param clienteuiduCliente Identificacion field 1
     */
    public buildOidCliente(clienteuiduCliente: number): {
        id_cliente: number} {
        if (clienteuiduCliente) {
            return {id_cliente: clienteuiduCliente};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ContadorEmail
     * @param contadorEmailuiduContadorEmail Identificacion field 1
     */
    public buildOidContadorEmail(contadorEmailuiduContadorEmail: number): {
        id_contadoremail: number} {
        if (contadorEmailuiduContadorEmail) {
            return {id_contadoremail: contadorEmailuiduContadorEmail};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class EnvioMasivoCliente
     * @param envioMasivoClienteuiduEnvioMasivoCliente Identificacion field 1
     */
    public buildOidEnvioMasivoCliente(envioMasivoClienteuiduEnvioMasivoCliente: number): {
        id_enviomasivocliente: number} {
        if (envioMasivoClienteuiduEnvioMasivoCliente) {
            return {id_enviomasivocliente: envioMasivoClienteuiduEnvioMasivoCliente};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class EnvioMasivoEmail
     * @param envioMasivoEmailuiduEnvioMasivoEmail Identificacion field 1
     */
    public buildOidEnvioMasivoEmail(envioMasivoEmailuiduEnvioMasivoEmail: number): {
        id_enviomasivoemail: number} {
        if (envioMasivoEmailuiduEnvioMasivoEmail) {
            return {id_enviomasivoemail: envioMasivoEmailuiduEnvioMasivoEmail};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class AgentOportunidad
     * @param agentOportunidaduiduAgentOportunidad Identificacion field 1
     */
    public buildOidAgentOportunidad(agentOportunidaduiduAgentOportunidad: number): {
        id_agentoportunidad: number} {
        if (agentOportunidaduiduAgentOportunidad) {
            return {id_agentoportunidad: agentOportunidaduiduAgentOportunidad};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ComentarioOC
     * @param comentarioOCuiduComentarioOC Identificacion field 1
     */
    public buildOidComentarioOC(comentarioOCuiduComentarioOC: number): {
        id_comentariooc: number} {
        if (comentarioOCuiduComentarioOC) {
            return {id_comentariooc: comentarioOCuiduComentarioOC};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class OportunidadComercial
     * @param oportunidadComercialuiduOportunidadComercial Identificacion field 1
     */
    public buildOidOportunidadComercial(oportunidadComercialuiduOportunidadComercial: number): {
        id_oportunidadcomercial: number} {
        if (oportunidadComercialuiduOportunidadComercial) {
            return {id_oportunidadcomercial: oportunidadComercialuiduOportunidadComercial};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class AlbaranCompra
     * @param albaranComprauiduAlbaranCompra Identificacion field 1
     */
    public buildOidAlbaranCompra(albaranComprauiduAlbaranCompra: number): {
        id_albarancompra: number} {
        if (albaranComprauiduAlbaranCompra) {
            return {id_albarancompra: albaranComprauiduAlbaranCompra};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ArticuloProveedor
     * @param articuloProveedoruiduArticuloProveedor Identificacion field 1
     */
    public buildOidArticuloProveedor(articuloProveedoruiduArticuloProveedor: number): {
        id_articuloproveedor: number} {
        if (articuloProveedoruiduArticuloProveedor) {
            return {id_articuloproveedor: articuloProveedoruiduArticuloProveedor};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ContactoProveedor
     * @param contactoProveedoruiduContactoProveedor Identificacion field 1
     */
    public buildOidContactoProveedor(contactoProveedoruiduContactoProveedor: number): {
        id_contactoproveedor: number} {
        if (contactoProveedoruiduContactoProveedor) {
            return {id_contactoproveedor: contactoProveedoruiduContactoProveedor};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class FacturaCompra
     * @param facturaComprauiduFacturaCompra Identificacion field 1
     */
    public buildOidFacturaCompra(facturaComprauiduFacturaCompra: number): {
        id_facturacompra: number} {
        if (facturaComprauiduFacturaCompra) {
            return {id_facturacompra: facturaComprauiduFacturaCompra};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class LnAlbaranCompra
     * @param lnAlbaranComprauiduAlbaranCompra Identificacion field 1
     * @param lnAlbaranComprauiduLnAlbaranCompra Identificacion field 2
     */
    public buildOidLnAlbaranCompra(lnAlbaranComprauiduAlbaranCompra: number, lnAlbaranComprauiduLnAlbaranCompra: number): {
        id_albarancompra: number,
        id_lnalbarancompra: number} {
        if (lnAlbaranComprauiduAlbaranCompra || lnAlbaranComprauiduLnAlbaranCompra) {
            return {id_albarancompra: lnAlbaranComprauiduAlbaranCompra,
                id_lnalbarancompra: lnAlbaranComprauiduLnAlbaranCompra};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class LnFacturaCompra
     * @param lnFacturaComprauiduFacturaCompra Identificacion field 1
     * @param lnFacturaComprauiduLnFacturaCompra Identificacion field 2
     */
    public buildOidLnFacturaCompra(lnFacturaComprauiduFacturaCompra: number, lnFacturaComprauiduLnFacturaCompra: number): {
        id_facturacompra: number,
        id_lnfacturacompra: number} {
        if (lnFacturaComprauiduFacturaCompra || lnFacturaComprauiduLnFacturaCompra) {
            return {id_facturacompra: lnFacturaComprauiduFacturaCompra,
                id_lnfacturacompra: lnFacturaComprauiduLnFacturaCompra};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class LnPedidoCompra
     * @param lnPedidoComprauiduPedidoCompra Identificacion field 1
     * @param lnPedidoComprauiduLnPedidoCompra Identificacion field 2
     */
    public buildOidLnPedidoCompra(lnPedidoComprauiduPedidoCompra: number, lnPedidoComprauiduLnPedidoCompra: number): {
        id_pedidocompra: number,
        id_lnpedidocompra: number} {
        if (lnPedidoComprauiduPedidoCompra || lnPedidoComprauiduLnPedidoCompra) {
            return {id_pedidocompra: lnPedidoComprauiduPedidoCompra,
                id_lnpedidocompra: lnPedidoComprauiduLnPedidoCompra};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class PedidoCompra
     * @param pedidoComprauiduPedidoCompra Identificacion field 1
     */
    public buildOidPedidoCompra(pedidoComprauiduPedidoCompra: number): {
        id_pedidocompra: number} {
        if (pedidoComprauiduPedidoCompra) {
            return {id_pedidocompra: pedidoComprauiduPedidoCompra};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class PlantillaImportacion
     * @param plantillaImportacionuiduPlantillaImportacion Identificacion field 1
     */
    public buildOidPlantillaImportacion(plantillaImportacionuiduPlantillaImportacion: number): {
        id_plantillaimportacion: number} {
        if (plantillaImportacionuiduPlantillaImportacion) {
            return {id_plantillaimportacion: plantillaImportacionuiduPlantillaImportacion};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Proveedor
     * @param proveedoruiduProveedor Identificacion field 1
     */
    public buildOidProveedor(proveedoruiduProveedor: number): {
        id_proveedor: number} {
        if (proveedoruiduProveedor) {
            return {id_proveedor: proveedoruiduProveedor};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ReciboProveedor
     * @param reciboProveedoruiduReciboProveedor Identificacion field 1
     */
    public buildOidReciboProveedor(reciboProveedoruiduReciboProveedor: number): {
        id_reciboproveedor: number} {
        if (reciboProveedoruiduReciboProveedor) {
            return {id_reciboproveedor: reciboProveedoruiduReciboProveedor};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class SubTotalAlbaranCompra
     * @param subTotalAlbaranComprauiduSubTotalPedidoCompra Identificacion field 1
     */
    public buildOidSubTotalAlbaranCompra(subTotalAlbaranComprauiduSubTotalPedidoCompra: number): {
        id_subtotalpedidocompra: number} {
        if (subTotalAlbaranComprauiduSubTotalPedidoCompra) {
            return {id_subtotalpedidocompra: subTotalAlbaranComprauiduSubTotalPedidoCompra};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class SubTotalFacturaCompra
     * @param subTotalFacturaComprauiduSubTotalFacturaCompra Identificacion field 1
     */
    public buildOidSubTotalFacturaCompra(subTotalFacturaComprauiduSubTotalFacturaCompra: number): {
        id_subtotalfacturacompra: number} {
        if (subTotalFacturaComprauiduSubTotalFacturaCompra) {
            return {id_subtotalfacturacompra: subTotalFacturaComprauiduSubTotalFacturaCompra};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class SubTotalPedidoCompra
     * @param subTotalPedidoComprauiduSubTotalPedidoCompra Identificacion field 1
     */
    public buildOidSubTotalPedidoCompra(subTotalPedidoComprauiduSubTotalPedidoCompra: number): {
        id_subtotalpedidocompra: number} {
        if (subTotalPedidoComprauiduSubTotalPedidoCompra) {
            return {id_subtotalpedidocompra: subTotalPedidoComprauiduSubTotalPedidoCompra};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class V_NecesidadesCompra
     * @param vuNecesidadesComprauiduVuNecesidadesCompra Identificacion field 1
     */
    public buildOidV_NecesidadesCompra(vuNecesidadesComprauiduVuNecesidadesCompra: number): {
        id_v_necesidadescompra: number} {
        if (vuNecesidadesComprauiduVuNecesidadesCompra) {
            return {id_v_necesidadescompra: vuNecesidadesComprauiduVuNecesidadesCompra};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class V_ControlCostes
     * @param vuControlCostesuiduControlCostes Identificacion field 1
     */
    public buildOidV_ControlCostes(vuControlCostesuiduControlCostes: number): {
        id_controlcostes: number} {
        if (vuControlCostesuiduControlCostes) {
            return {id_controlcostes: vuControlCostesuiduControlCostes};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class V_ModelosMasVendidos
     * @param vuModelosMasVendidosuiduVuModelosMasVendidos Identificacion field 1
     */
    public buildOidV_ModelosMasVendidos(vuModelosMasVendidosuiduVuModelosMasVendidos: number): {
        id_v_modelosmasvendidos: number} {
        if (vuModelosMasVendidosuiduVuModelosMasVendidos) {
            return {id_v_modelosmasvendidos: vuModelosMasVendidosuiduVuModelosMasVendidos};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class V_PreciosPorProveedor
     * @param vuPreciosPorProveedoruiduPreciosPorProveedor Identificacion field 1
     */
    public buildOidV_PreciosPorProveedor(vuPreciosPorProveedoruiduPreciosPorProveedor: number): {
        id_preciosporproveedor: number} {
        if (vuPreciosPorProveedoruiduPreciosPorProveedor) {
            return {id_preciosporproveedor: vuPreciosPorProveedoruiduPreciosPorProveedor};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class V_ProductividadTec
     * @param vuProductividadTecuiduProductividadTecnicos Identificacion field 1
     */
    public buildOidV_ProductividadTec(vuProductividadTecuiduProductividadTecnicos: number): {
        id_productividadtecnicos: number} {
        if (vuProductividadTecuiduProductividadTecnicos) {
            return {id_productividadtecnicos: vuProductividadTecuiduProductividadTecnicos};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class V_SubidaPrecios
     * @param vuSubidaPreciosuiduVuSubidaPrecios Identificacion field 1
     */
    public buildOidV_SubidaPrecios(vuSubidaPreciosuiduVuSubidaPrecios: number): {
        id_v_subidaprecios: number} {
        if (vuSubidaPreciosuiduVuSubidaPrecios) {
            return {id_v_subidaprecios: vuSubidaPreciosuiduVuSubidaPrecios};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class V_TiemposAvisos
     * @param vuTiemposAvisosuiduVuTiemposAvisos Identificacion field 1
     */
    public buildOidV_TiemposAvisos(vuTiemposAvisosuiduVuTiemposAvisos: number): {
        id_v_tiemposavisos: number} {
        if (vuTiemposAvisosuiduVuTiemposAvisos) {
            return {id_v_tiemposavisos: vuTiemposAvisosuiduVuTiemposAvisos};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class V_TiemposMediosAvisos
     * @param vuTiemposMediosAvisosuiduVuTiemposMediosAvisos Identificacion field 1
     */
    public buildOidV_TiemposMediosAvisos(vuTiemposMediosAvisosuiduVuTiemposMediosAvisos: number): {
        id_v_tiemposmediosavisos: number} {
        if (vuTiemposMediosAvisosuiduVuTiemposMediosAvisos) {
            return {id_v_tiemposmediosavisos: vuTiemposMediosAvisosuiduVuTiemposMediosAvisos};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Documento
     * @param documentouiduDocumento Identificacion field 1
     */
    public buildOidDocumento(documentouiduDocumento: number): {
        id_documento: number} {
        if (documentouiduDocumento) {
            return {id_documento: documentouiduDocumento};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class FirmaDocumento
     * @param firmaDocumentouiduFirmaDocumento Identificacion field 1
     */
    public buildOidFirmaDocumento(firmaDocumentouiduFirmaDocumento: number): {
        id_firmadocumento: number} {
        if (firmaDocumentouiduFirmaDocumento) {
            return {id_firmadocumento: firmaDocumentouiduFirmaDocumento};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class FirmaNotifica
     * @param firmaNotificauiduFirmaNotifica Identificacion field 1
     */
    public buildOidFirmaNotifica(firmaNotificauiduFirmaNotifica: number): {
        id_firmanotifica: number} {
        if (firmaNotificauiduFirmaNotifica) {
            return {id_firmanotifica: firmaNotificauiduFirmaNotifica};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Firmante
     * @param firmanteuiduFirmante Identificacion field 1
     */
    public buildOidFirmante(firmanteuiduFirmante: number): {
        id_firmante: number} {
        if (firmanteuiduFirmante) {
            return {id_firmante: firmanteuiduFirmante};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Imagen
     * @param imagenuiduImagen Identificacion field 1
     */
    public buildOidImagen(imagenuiduImagen: number): {
        id_imagen: number} {
        if (imagenuiduImagen) {
            return {id_imagen: imagenuiduImagen};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ElementoRecom
     * @param elementoRecomuiduElementoRecom Identificacion field 1
     */
    public buildOidElementoRecom(elementoRecomuiduElementoRecom: number): {
        id_elementorecom: number} {
        if (elementoRecomuiduElementoRecom) {
            return {id_elementorecom: elementoRecomuiduElementoRecom};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class EleRecomendado
     * @param eleRecomendadouiduEleRecomendado Identificacion field 1
     */
    public buildOidEleRecomendado(eleRecomendadouiduEleRecomendado: number): {
        id_elerecomendado: number} {
        if (eleRecomendadouiduEleRecomendado) {
            return {id_elerecomendado: eleRecomendadouiduEleRecomendado};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ProyectoCCTV
     * @param proyectoCCTVuiduProyectoCCTV Identificacion field 1
     */
    public buildOidProyectoCCTV(proyectoCCTVuiduProyectoCCTV: number): {
        id_proyectocctv: number} {
        if (proyectoCCTVuiduProyectoCCTV) {
            return {id_proyectocctv: proyectoCCTVuiduProyectoCCTV};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ProyectoG2
     * @param proyectoG2uiduProyectoG2 Identificacion field 1
     */
    public buildOidProyectoG2(proyectoG2uiduProyectoG2: number): {
        id_proyectog2: number} {
        if (proyectoG2uiduProyectoG2) {
            return {id_proyectog2: proyectoG2uiduProyectoG2};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ProyectoG3
     * @param proyectoG3uiduProyectoG3 Identificacion field 1
     */
    public buildOidProyectoG3(proyectoG3uiduProyectoG3: number): {
        id_proyectog3: number} {
        if (proyectoG3uiduProyectoG3) {
            return {id_proyectog3: proyectoG3uiduProyectoG3};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Anomalia
     * @param anomaliauiduAnomalia Identificacion field 1
     */
    public buildOidAnomalia(anomaliauiduAnomalia: number): {
        id_anomalia: number} {
        if (anomaliauiduAnomalia) {
            return {id_anomalia: anomaliauiduAnomalia};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class CheckList
     * @param checkListuiduCheckList Identificacion field 1
     */
    public buildOidCheckList(checkListuiduCheckList: number): {
        id_checklist: number} {
        if (checkListuiduCheckList) {
            return {id_checklist: checkListuiduCheckList};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class CheckListOT
     * @param checkListOTuiduCheckListOT Identificacion field 1
     */
    public buildOidCheckListOT(checkListOTuiduCheckListOT: number): {
        id_checklistot: number} {
        if (checkListOTuiduCheckListOT) {
            return {id_checklistot: checkListOTuiduCheckListOT};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Comprobacion
     * @param comprobacionuiduComprobacion Identificacion field 1
     */
    public buildOidComprobacion(comprobacionuiduComprobacion: number): {
        id_comprobacion: number} {
        if (comprobacionuiduComprobacion) {
            return {id_comprobacion: comprobacionuiduComprobacion};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ComprobacionOT
     * @param comprobacionOTuiduComprobacionOT Identificacion field 1
     */
    public buildOidComprobacionOT(comprobacionOTuiduComprobacionOT: number): {
        id_comprobacionot: number} {
        if (comprobacionOTuiduComprobacionOT) {
            return {id_comprobacionot: comprobacionOTuiduComprobacionOT};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class GrupoComp
     * @param grupoCompuiduGrupoComp Identificacion field 1
     */
    public buildOidGrupoComp(grupoCompuiduGrupoComp: number): {
        id_grupocomp: number} {
        if (grupoCompuiduGrupoComp) {
            return {id_grupocomp: grupoCompuiduGrupoComp};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class GrupoCompOT
     * @param grupoCompOTuiduGrupoCompOT Identificacion field 1
     */
    public buildOidGrupoCompOT(grupoCompOTuiduGrupoCompOT: number): {
        id_grupocompot: number} {
        if (grupoCompOTuiduGrupoCompOT) {
            return {id_grupocompot: grupoCompOTuiduGrupoCompOT};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Contrato
     * @param contratouAnyoContrato Identificacion field 1
     * @param contratouiduContrato Identificacion field 2
     */
    public buildOidContrato(contratouAnyoContrato: number, contratouiduContrato: number): {
        anyocontrato: number,
        id_contrato: number} {
        if (contratouAnyoContrato || contratouiduContrato) {
            return {anyocontrato: contratouAnyoContrato,
                id_contrato: contratouiduContrato};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Cuota
     * @param cuotauiduCuota Identificacion field 1
     */
    public buildOidCuota(cuotauiduCuota: number): {
        id_cuota: number} {
        if (cuotauiduCuota) {
            return {id_cuota: cuotauiduCuota};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class LnContrato
     * @param lnContratouAnyoContrato Identificacion field 1
     * @param lnContratouiduContrato Identificacion field 2
     * @param lnContratouiduLnContrato Identificacion field 3
     */
    public buildOidLnContrato(lnContratouAnyoContrato: number, lnContratouiduContrato: number,
                              lnContratouiduLnContrato: number): {
        anyocontrato: number,
        id_contrato: number,
        id_lncontrato: number} {
        if (lnContratouAnyoContrato || lnContratouiduContrato
             || lnContratouiduLnContrato) {
            return {anyocontrato: lnContratouAnyoContrato,
                id_contrato: lnContratouiduContrato,
                id_lncontrato: lnContratouiduLnContrato};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class LnObjetoCtr
     * @param lnObjetoCtruAnyoContrato Identificacion field 1
     * @param lnObjetoCtruiduContrato Identificacion field 2
     * @param lnObjetoCtruiduLnObjetoCtr Identificacion field 3
     */
    public buildOidLnObjetoCtr(lnObjetoCtruAnyoContrato: number, lnObjetoCtruiduContrato: number,
                               lnObjetoCtruiduLnObjetoCtr: string): {
        anyocontrato: number,
        id_contrato: number,
        id_lnobjetoctr: string} {
        if (lnObjetoCtruAnyoContrato || lnObjetoCtruiduContrato
             || lnObjetoCtruiduLnObjetoCtr) {
            return {anyocontrato: lnObjetoCtruAnyoContrato,
                id_contrato: lnObjetoCtruiduContrato,
                id_lnobjetoctr: lnObjetoCtruiduLnObjetoCtr};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ObjetoContrato
     * @param objetoContratouiduObjetoContrato Identificacion field 1
     */
    public buildOidObjetoContrato(objetoContratouiduObjetoContrato: string): {
        id_objetocontrato: string} {
        if (objetoContratouiduObjetoContrato) {
            return {id_objetocontrato: objetoContratouiduObjetoContrato};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class SubTotalContrato
     * @param subTotalContratouiduSubTotalContrato Identificacion field 1
     */
    public buildOidSubTotalContrato(subTotalContratouiduSubTotalContrato: number): {
        id_subtotalcontrato: number} {
        if (subTotalContratouiduSubTotalContrato) {
            return {id_subtotalcontrato: subTotalContratouiduSubTotalContrato};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class AlarmaTecnica
     * @param alarmaTecnicauiduAlarmaTecnica Identificacion field 1
     */
    public buildOidAlarmaTecnica(alarmaTecnicauiduAlarmaTecnica: number): {
        id_alarmatecnica: number} {
        if (alarmaTecnicauiduAlarmaTecnica) {
            return {id_alarmatecnica: alarmaTecnicauiduAlarmaTecnica};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Contacto
     * @param contactouiduContacto Identificacion field 1
     */
    public buildOidContacto(contactouiduContacto: number): {
        id_contacto: number} {
        if (contactouiduContacto) {
            return {id_contacto: contactouiduContacto};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class DireccionIP
     * @param direccionIPuiduDireccionIP Identificacion field 1
     */
    public buildOidDireccionIP(direccionIPuiduDireccionIP: number): {
        id_direccionip: number} {
        if (direccionIPuiduDireccionIP) {
            return {id_direccionip: direccionIPuiduDireccionIP};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ElementoSistema
     * @param elementoSistemauiduElementoSistema Identificacion field 1
     */
    public buildOidElementoSistema(elementoSistemauiduElementoSistema: number): {
        id_elementosistema: number} {
        if (elementoSistemauiduElementoSistema) {
            return {id_elementosistema: elementoSistemauiduElementoSistema};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Instalacion
     * @param instalacionuiduInstalacion Identificacion field 1
     */
    public buildOidInstalacion(instalacionuiduInstalacion: number): {
        id_instalacion: number} {
        if (instalacionuiduInstalacion) {
            return {id_instalacion: instalacionuiduInstalacion};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ModDiseno
     * @param modDisenouiduSistema Identificacion field 1
     * @param modDisenouiduModDiseno Identificacion field 2
     */
    public buildOidModDiseno(modDisenouiduSistema: number, modDisenouiduModDiseno: number): {
        id_sistema: number,
        id_moddiseno: number} {
        if (modDisenouiduSistema || modDisenouiduModDiseno) {
            return {id_sistema: modDisenouiduSistema,
                id_moddiseno: modDisenouiduModDiseno};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ParametroSistema
     * @param parametroSistemauiduParametroSistema Identificacion field 1
     */
    public buildOidParametroSistema(parametroSistemauiduParametroSistema: number): {
        id_parametrosistema: number} {
        if (parametroSistemauiduParametroSistema) {
            return {id_parametrosistema: parametroSistemauiduParametroSistema};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Servicio
     * @param serviciouiduServicio Identificacion field 1
     */
    public buildOidServicio(serviciouiduServicio: number): {
        id_servicio: number} {
        if (serviciouiduServicio) {
            return {id_servicio: serviciouiduServicio};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Sistema
     * @param sistemauiduSistema Identificacion field 1
     */
    public buildOidSistema(sistemauiduSistema: number): {
        id_sistema: number} {
        if (sistemauiduSistema) {
            return {id_sistema: sistemauiduSistema};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class UsuarioCRA
     * @param usuarioCRAuiduUsuarioCRA Identificacion field 1
     */
    public buildOidUsuarioCRA(usuarioCRAuiduUsuarioCRA: number): {
        id_usuariocra: number} {
        if (usuarioCRAuiduUsuarioCRA) {
            return {id_usuariocra: usuarioCRAuiduUsuarioCRA};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class V_ElemInstal
     * @param vuElemInstaluiduVuElemInstal Identificacion field 1
     */
    public buildOidV_ElemInstal(vuElemInstaluiduVuElemInstal: number): {
        id_v_eleminstal: number} {
        if (vuElemInstaluiduVuElemInstal) {
            return {id_v_eleminstal: vuElemInstaluiduVuElemInstal};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class V_GrupoElem
     * @param vuGrupoElemuiduVuGrupoElementos Identificacion field 1
     */
    public buildOidV_GrupoElem(vuGrupoElemuiduVuGrupoElementos: number): {
        id_v_grupoelementos: number} {
        if (vuGrupoElemuiduVuGrupoElementos) {
            return {id_v_grupoelementos: vuGrupoElemuiduVuGrupoElementos};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Mantenimiento
     * @param mantenimientouiduMantenimiento Identificacion field 1
     */
    public buildOidMantenimiento(mantenimientouiduMantenimiento: number): {
        id_mantenimiento: number} {
        if (mantenimientouiduMantenimiento) {
            return {id_mantenimiento: mantenimientouiduMantenimiento};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class PeriodoInactivo
     * @param periodoInactivouiduPeriodoInactivo Identificacion field 1
     */
    public buildOidPeriodoInactivo(periodoInactivouiduPeriodoInactivo: number): {
        id_periodoinactivo: number} {
        if (periodoInactivouiduPeriodoInactivo) {
            return {id_periodoinactivo: periodoInactivouiduPeriodoInactivo};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class PlantillaMantenimiento
     * @param plantillaMantenimientouiduPlantillaMantenimiento Identificacion field 1
     */
    public buildOidPlantillaMantenimiento(plantillaMantenimientouiduPlantillaMantenimiento: number): {
        id_plantillamantenimiento: number} {
        if (plantillaMantenimientouiduPlantillaMantenimiento) {
            return {id_plantillamantenimiento: plantillaMantenimientouiduPlantillaMantenimiento};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class EmpContratista
     * @param empContratistauiduEmpContratista Identificacion field 1
     */
    public buildOidEmpContratista(empContratistauiduEmpContratista: number): {
        id_empcontratista: number} {
        if (empContratistauiduEmpContratista) {
            return {id_empcontratista: empContratistauiduEmpContratista};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class LnOrdenTrabajo
     * @param lnOrdenTrabajouiduLnOrdenTrabajo Identificacion field 1
     */
    public buildOidLnOrdenTrabajo(lnOrdenTrabajouiduLnOrdenTrabajo: number): {
        id_lnordentrabajo: number} {
        if (lnOrdenTrabajouiduLnOrdenTrabajo) {
            return {id_lnordentrabajo: lnOrdenTrabajouiduLnOrdenTrabajo};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class LogReplan
     * @param logReplanuiduLogReplan Identificacion field 1
     */
    public buildOidLogReplan(logReplanuiduLogReplan: number): {
        id_logreplan: number} {
        if (logReplanuiduLogReplan) {
            return {id_logreplan: logReplanuiduLogReplan};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class OrdenTrabajo
     * @param ordenTrabajouiduOrdenTrabajo Identificacion field 1
     */
    public buildOidOrdenTrabajo(ordenTrabajouiduOrdenTrabajo: number): {
        id_ordentrabajo: number} {
        if (ordenTrabajouiduOrdenTrabajo) {
            return {id_ordentrabajo: ordenTrabajouiduOrdenTrabajo};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ParteTrabajo
     * @param parteTrabajouiduParteTrabajo Identificacion field 1
     */
    public buildOidParteTrabajo(parteTrabajouiduParteTrabajo: number): {
        id_partetrabajo: number} {
        if (parteTrabajouiduParteTrabajo) {
            return {id_partetrabajo: parteTrabajouiduParteTrabajo};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class SubtotalOrdenTrabajo
     * @param subtotalOrdenTrabajouiduSubtotalOrdenTrabajo Identificacion field 1
     */
    public buildOidSubtotalOrdenTrabajo(subtotalOrdenTrabajouiduSubtotalOrdenTrabajo: number): {
        id_subtotalordentrabajo: number} {
        if (subtotalOrdenTrabajouiduSubtotalOrdenTrabajo) {
            return {id_subtotalordentrabajo: subtotalOrdenTrabajouiduSubtotalOrdenTrabajo};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Tarea
     * @param tareauiduTarea Identificacion field 1
     */
    public buildOidTarea(tareauiduTarea: number): {
        id_tarea: number} {
        if (tareauiduTarea) {
            return {id_tarea: tareauiduTarea};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class AgentePresupuesto
     * @param agentePresupuestouiduAgentePresupuesto Identificacion field 1
     */
    public buildOidAgentePresupuesto(agentePresupuestouiduAgentePresupuesto: number): {
        id_agentepresupuesto: number} {
        if (agentePresupuestouiduAgentePresupuesto) {
            return {id_agentepresupuesto: agentePresupuestouiduAgentePresupuesto};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ComisionPresupuesto
     * @param comisionPresupuestouiduComisionPresupuesto Identificacion field 1
     */
    public buildOidComisionPresupuesto(comisionPresupuestouiduComisionPresupuesto: number): {
        id_comisionpresupuesto: number} {
        if (comisionPresupuestouiduComisionPresupuesto) {
            return {id_comisionpresupuesto: comisionPresupuestouiduComisionPresupuesto};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class GrupoPresupuesto
     * @param grupoPresupuestouiduGrupoPresupuesto Identificacion field 1
     */
    public buildOidGrupoPresupuesto(grupoPresupuestouiduGrupoPresupuesto: number): {
        id_grupopresupuesto: number} {
        if (grupoPresupuestouiduGrupoPresupuesto) {
            return {id_grupopresupuesto: grupoPresupuestouiduGrupoPresupuesto};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class GrupoPresupuestoPlantilla
     * @param grupoPresupuestoPlantillauiduGrupoPresupuestoPlantilla Identificacion field 1
     */
    public buildOidGrupoPresupuestoPlantilla(grupoPresupuestoPlantillauiduGrupoPresupuestoPlantilla: number): {
        id_grupopresupuestoplantilla: number} {
        if (grupoPresupuestoPlantillauiduGrupoPresupuestoPlantilla) {
            return {id_grupopresupuestoplantilla: grupoPresupuestoPlantillauiduGrupoPresupuestoPlantilla};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class LnPresupuesto
     * @param lnPresupuestouiduLnPresupuesto Identificacion field 1
     */
    public buildOidLnPresupuesto(lnPresupuestouiduLnPresupuesto: number): {
        id_lnpresupuesto: number} {
        if (lnPresupuestouiduLnPresupuesto) {
            return {id_lnpresupuesto: lnPresupuestouiduLnPresupuesto};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class LnPresupuestoPlantilla
     * @param lnPresupuestoPlantillauiduLnPresupuestoPlantilla Identificacion field 1
     */
    public buildOidLnPresupuestoPlantilla(lnPresupuestoPlantillauiduLnPresupuestoPlantilla: number): {
        id_lnpresupuestoplantilla: number} {
        if (lnPresupuestoPlantillauiduLnPresupuestoPlantilla) {
            return {id_lnpresupuestoplantilla: lnPresupuestoPlantillauiduLnPresupuestoPlantilla};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class PlantillaPresupuesto
     * @param plantillaPresupuestouiduPlantillaPresupuesto Identificacion field 1
     */
    public buildOidPlantillaPresupuesto(plantillaPresupuestouiduPlantillaPresupuesto: number): {
        id_plantillapresupuesto: number} {
        if (plantillaPresupuestouiduPlantillaPresupuesto) {
            return {id_plantillapresupuesto: plantillaPresupuestouiduPlantillaPresupuesto};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Presupuesto
     * @param presupuestouPrefijo Identificacion field 1
     * @param presupuestouiduPresupuesto Identificacion field 2
     * @param presupuestouVersionAttr Identificacion field 3
     */
    public buildOidPresupuesto(presupuestouPrefijo: string, presupuestouiduPresupuesto: number,
                               presupuestouVersionAttr: number): {
        prefijo: string,
        id_presupuesto: number,
        versionattr: number} {
        if (presupuestouPrefijo || presupuestouiduPresupuesto
             || presupuestouVersionAttr) {
            return {prefijo: presupuestouPrefijo,
                id_presupuesto: presupuestouiduPresupuesto,
                versionattr: presupuestouVersionAttr};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class SubtotalPresupuesto
     * @param subtotalPresupuestouiduSubtotal Identificacion field 1
     */
    public buildOidSubtotalPresupuesto(subtotalPresupuestouiduSubtotal: number): {
        id_subtotal: number} {
        if (subtotalPresupuestouiduSubtotal) {
            return {id_subtotal: subtotalPresupuestouiduSubtotal};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class AnyoLaboral
     * @param anyoLaboraluiduAnyoLaboral Identificacion field 1
     */
    public buildOidAnyoLaboral(anyoLaboraluiduAnyoLaboral: number): {
        id_anyolaboral: number} {
        if (anyoLaboraluiduAnyoLaboral) {
            return {id_anyolaboral: anyoLaboraluiduAnyoLaboral};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class CampanyaComercial
     * @param campanyaComercialuiduCampanyaComercial Identificacion field 1
     */
    public buildOidCampanyaComercial(campanyaComercialuiduCampanyaComercial: number): {
        id_campanyacomercial: number} {
        if (campanyaComercialuiduCampanyaComercial) {
            return {id_campanyacomercial: campanyaComercialuiduCampanyaComercial};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class CodigoPostal
     * @param codigoPostaluCP Identificacion field 1
     */
    public buildOidCodigoPostal(codigoPostaluCP: string): {
        cp: string} {
        if (codigoPostaluCP) {
            return {cp: codigoPostaluCP};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class CRA
     * @param cRAuiduCRA Identificacion field 1
     */
    public buildOidCRA(cRAuiduCRA: number): {
        id_cra: number} {
        if (cRAuiduCRA) {
            return {id_cra: cRAuiduCRA};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class CtaBancaria
     * @param ctaBancariauiduCtaBancaria Identificacion field 1
     */
    public buildOidCtaBancaria(ctaBancariauiduCtaBancaria: number): {
        id_ctabancaria: number} {
        if (ctaBancariauiduCtaBancaria) {
            return {id_ctabancaria: ctaBancariauiduCtaBancaria};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Departamento
     * @param departamentouiduDepartamento Identificacion field 1
     */
    public buildOidDepartamento(departamentouiduDepartamento: number): {
        id_departamento: number} {
        if (departamentouiduDepartamento) {
            return {id_departamento: departamentouiduDepartamento};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Empresa
     * @param empresauiduEmpresa Identificacion field 1
     */
    public buildOidEmpresa(empresauiduEmpresa: string): {
        id_empresa: string} {
        if (empresauiduEmpresa) {
            return {id_empresa: empresauiduEmpresa};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class EntidadBancaria
     * @param entidadBancariauiduEntidadBancaria Identificacion field 1
     */
    public buildOidEntidadBancaria(entidadBancariauiduEntidadBancaria: string): {
        id_entidadbancaria: string} {
        if (entidadBancariauiduEntidadBancaria) {
            return {id_entidadbancaria: entidadBancariauiduEntidadBancaria};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class EstadoOportunidadComercial
     * @param estadoOportunidadComercialuiduEstadoOportunidadComercial Identificacion field 1
     */
    public buildOidEstadoOportunidadComercial(estadoOportunidadComercialuiduEstadoOportunidadComercial: number): {
        id_estadooportunidadcomercial: number} {
        if (estadoOportunidadComercialuiduEstadoOportunidadComercial) {
            return {id_estadooportunidadcomercial: estadoOportunidadComercialuiduEstadoOportunidadComercial};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Familia
     * @param familiauiduFamilia Identificacion field 1
     */
    public buildOidFamilia(familiauiduFamilia: number): {
        id_familia: number} {
        if (familiauiduFamilia) {
            return {id_familia: familiauiduFamilia};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Festivo
     * @param festivouiduFestivo Identificacion field 1
     */
    public buildOidFestivo(festivouiduFestivo: number): {
        id_festivo: number} {
        if (festivouiduFestivo) {
            return {id_festivo: festivouiduFestivo};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class FormaPago
     * @param formaPagouiduFormaPago Identificacion field 1
     */
    public buildOidFormaPago(formaPagouiduFormaPago: number): {
        id_formapago: number} {
        if (formaPagouiduFormaPago) {
            return {id_formapago: formaPagouiduFormaPago};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class GrupoEmpresa
     * @param grupoEmpresauiduGrupoEmpresa Identificacion field 1
     */
    public buildOidGrupoEmpresa(grupoEmpresauiduGrupoEmpresa: number): {
        id_grupoempresa: number} {
        if (grupoEmpresauiduGrupoEmpresa) {
            return {id_grupoempresa: grupoEmpresauiduGrupoEmpresa};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class GrupoFacturacion
     * @param grupoFacturacionuiduGrupoFacturacion Identificacion field 1
     */
    public buildOidGrupoFacturacion(grupoFacturacionuiduGrupoFacturacion: number): {
        id_grupofacturacion: number} {
        if (grupoFacturacionuiduGrupoFacturacion) {
            return {id_grupofacturacion: grupoFacturacionuiduGrupoFacturacion};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ImporteEspecialCliente
     * @param importeEspecialClienteuiduPrecioVentaArticulo Identificacion field 1
     */
    public buildOidImporteEspecialCliente(importeEspecialClienteuiduPrecioVentaArticulo: number): {
        id_precioventaarticulo: number} {
        if (importeEspecialClienteuiduPrecioVentaArticulo) {
            return {id_precioventaarticulo: importeEspecialClienteuiduPrecioVentaArticulo};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Marca
     * @param marcauiduMarca Identificacion field 1
     */
    public buildOidMarca(marcauiduMarca: number): {
        id_marca: number} {
        if (marcauiduMarca) {
            return {id_marca: marcauiduMarca};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ModeloDocumento
     * @param modeloDocumentouiduModeloDocumento Identificacion field 1
     */
    public buildOidModeloDocumento(modeloDocumentouiduModeloDocumento: number): {
        id_modelodocumento: number} {
        if (modeloDocumentouiduModeloDocumento) {
            return {id_modelodocumento: modeloDocumentouiduModeloDocumento};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ModeloSistema
     * @param modeloSistemauiduModeloSistema Identificacion field 1
     */
    public buildOidModeloSistema(modeloSistemauiduModeloSistema: number): {
        id_modelosistema: number} {
        if (modeloSistemauiduModeloSistema) {
            return {id_modelosistema: modeloSistemauiduModeloSistema};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Motivo
     * @param motivouiduMotivo Identificacion field 1
     */
    public buildOidMotivo(motivouiduMotivo: number): {
        id_motivo: number} {
        if (motivouiduMotivo) {
            return {id_motivo: motivouiduMotivo};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Municipio
     * @param municipiouiduMunicipio Identificacion field 1
     */
    public buildOidMunicipio(municipiouiduMunicipio: number): {
        id_municipio: number} {
        if (municipiouiduMunicipio) {
            return {id_municipio: municipiouiduMunicipio};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class NoConformidad
     * @param noConformidaduiduNoConformidad Identificacion field 1
     */
    public buildOidNoConformidad(noConformidaduiduNoConformidad: number): {
        id_noconformidad: number} {
        if (noConformidaduiduNoConformidad) {
            return {id_noconformidad: noConformidaduiduNoConformidad};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Normativa
     * @param normativauiduNormativa Identificacion field 1
     */
    public buildOidNormativa(normativauiduNormativa: number): {
        id_normativa: number} {
        if (normativauiduNormativa) {
            return {id_normativa: normativauiduNormativa};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class OperativaCCTV
     * @param operativaCCTVuiduOperativaCCTV Identificacion field 1
     */
    public buildOidOperativaCCTV(operativaCCTVuiduOperativaCCTV: number): {
        id_operativacctv: number} {
        if (operativaCCTVuiduOperativaCCTV) {
            return {id_operativacctv: operativaCCTVuiduOperativaCCTV};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class OrigenOportunidad
     * @param origenOportunidaduiduOrigenOportunidad Identificacion field 1
     */
    public buildOidOrigenOportunidad(origenOportunidaduiduOrigenOportunidad: number): {
        id_origenoportunidad: number} {
        if (origenOportunidaduiduOrigenOportunidad) {
            return {id_origenoportunidad: origenOportunidaduiduOrigenOportunidad};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Pais
     * @param paisuiduPais Identificacion field 1
     */
    public buildOidPais(paisuiduPais: string): {
        id_pais: string} {
        if (paisuiduPais) {
            return {id_pais: paisuiduPais};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Parametro
     * @param parametrouiduParametro Identificacion field 1
     */
    public buildOidParametro(parametrouiduParametro: number): {
        id_parametro: number} {
        if (parametrouiduParametro) {
            return {id_parametro: parametrouiduParametro};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Periodicidad
     * @param periodicidaduiduPeriodicidad Identificacion field 1
     */
    public buildOidPeriodicidad(periodicidaduiduPeriodicidad: number): {
        id_periodicidad: number} {
        if (periodicidaduiduPeriodicidad) {
            return {id_periodicidad: periodicidaduiduPeriodicidad};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Porcentaje
     * @param porcentajeuiduPorcentaje Identificacion field 1
     */
    public buildOidPorcentaje(porcentajeuiduPorcentaje: number): {
        id_porcentaje: number} {
        if (porcentajeuiduPorcentaje) {
            return {id_porcentaje: porcentajeuiduPorcentaje};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class PrecioVentaArticulo
     * @param precioVentaArticulouiduPrecioVentaArticulo Identificacion field 1
     */
    public buildOidPrecioVentaArticulo(precioVentaArticulouiduPrecioVentaArticulo: number): {
        id_precioventaarticulo: number} {
        if (precioVentaArticulouiduPrecioVentaArticulo) {
            return {id_precioventaarticulo: precioVentaArticulouiduPrecioVentaArticulo};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Provincia
     * @param provinciauiduProvincia Identificacion field 1
     */
    public buildOidProvincia(provinciauiduProvincia: string): {
        id_provincia: string} {
        if (provinciauiduProvincia) {
            return {id_provincia: provinciauiduProvincia};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ReglaAjusteH
     * @param reglaAjusteHuiduReglaAjusteH Identificacion field 1
     */
    public buildOidReglaAjusteH(reglaAjusteHuiduReglaAjusteH: number): {
        id_reglaajusteh: number} {
        if (reglaAjusteHuiduReglaAjusteH) {
            return {id_reglaajusteh: reglaAjusteHuiduReglaAjusteH};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Sector
     * @param sectoruiduSector Identificacion field 1
     */
    public buildOidSector(sectoruiduSector: number): {
        id_sector: number} {
        if (sectoruiduSector) {
            return {id_sector: sectoruiduSector};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class SerieAlbaran
     * @param serieAlbaranuCodSerieAlbaran Identificacion field 1
     */
    public buildOidSerieAlbaran(serieAlbaranuCodSerieAlbaran: string): {
        codseriealbaran: string} {
        if (serieAlbaranuCodSerieAlbaran) {
            return {codseriealbaran: serieAlbaranuCodSerieAlbaran};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class SerieAlbaranCompra
     * @param serieAlbaranComprauCodigoSerie Identificacion field 1
     */
    public buildOidSerieAlbaranCompra(serieAlbaranComprauCodigoSerie: string): {
        codigoserie: string} {
        if (serieAlbaranComprauCodigoSerie) {
            return {codigoserie: serieAlbaranComprauCodigoSerie};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class SerieFactura
     * @param serieFacturauIdSerieFactura Identificacion field 1
     */
    public buildOidSerieFactura(serieFacturauIdSerieFactura: string): {
        idseriefactura: string} {
        if (serieFacturauIdSerieFactura) {
            return {idseriefactura: serieFacturauIdSerieFactura};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class SerieFacturaCompra
     * @param serieFacturaComprauIdSerieFacturaCompra Identificacion field 1
     */
    public buildOidSerieFacturaCompra(serieFacturaComprauIdSerieFacturaCompra: string): {
        idseriefacturacompra: string} {
        if (serieFacturaComprauIdSerieFacturaCompra) {
            return {idseriefacturacompra: serieFacturaComprauIdSerieFacturaCompra};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class SeriePedidoCompra
     * @param seriePedidoComprauCodigoSerie Identificacion field 1
     */
    public buildOidSeriePedidoCompra(seriePedidoComprauCodigoSerie: string): {
        codigoserie: string} {
        if (seriePedidoComprauCodigoSerie) {
            return {codigoserie: seriePedidoComprauCodigoSerie};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class SucursalBancaria
     * @param sucursalBancariauiduEntidadBancaria Identificacion field 1
     * @param sucursalBancariauiduSucursalBancaria Identificacion field 2
     */
    public buildOidSucursalBancaria(sucursalBancariauiduEntidadBancaria: string, sucursalBancariauiduSucursalBancaria: string): {
        id_entidadbancaria: string,
        id_sucursalbancaria: string} {
        if (sucursalBancariauiduEntidadBancaria || sucursalBancariauiduSucursalBancaria) {
            return {id_entidadbancaria: sucursalBancariauiduEntidadBancaria,
                id_sucursalbancaria: sucursalBancariauiduSucursalBancaria};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class TarifaVenta
     * @param tarifaVentauiduTarifaVenta Identificacion field 1
     */
    public buildOidTarifaVenta(tarifaVentauiduTarifaVenta: number): {
        id_tarifaventa: number} {
        if (tarifaVentauiduTarifaVenta) {
            return {id_tarifaventa: tarifaVentauiduTarifaVenta};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class TipoAccionComercial
     * @param tipoAccionComercialuiduTipoAccionComercial Identificacion field 1
     */
    public buildOidTipoAccionComercial(tipoAccionComercialuiduTipoAccionComercial: number): {
        id_tipoaccioncomercial: number} {
        if (tipoAccionComercialuiduTipoAccionComercial) {
            return {id_tipoaccioncomercial: tipoAccionComercialuiduTipoAccionComercial};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class TipoAviso
     * @param tipoAvisouiduTipoAviso Identificacion field 1
     */
    public buildOidTipoAviso(tipoAvisouiduTipoAviso: number): {
        id_tipoaviso: number} {
        if (tipoAvisouiduTipoAviso) {
            return {id_tipoaviso: tipoAvisouiduTipoAviso};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class TipoCierre
     * @param tipoCierreuiduTipoCierre Identificacion field 1
     */
    public buildOidTipoCierre(tipoCierreuiduTipoCierre: number): {
        id_tipocierre: number} {
        if (tipoCierreuiduTipoCierre) {
            return {id_tipocierre: tipoCierreuiduTipoCierre};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class TipoCliente
     * @param tipoClienteuiduTipoCliente Identificacion field 1
     */
    public buildOidTipoCliente(tipoClienteuiduTipoCliente: number): {
        id_tipocliente: number} {
        if (tipoClienteuiduTipoCliente) {
            return {id_tipocliente: tipoClienteuiduTipoCliente};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class TipoContacto
     * @param tipoContactouiduTipoContacto Identificacion field 1
     */
    public buildOidTipoContacto(tipoContactouiduTipoContacto: number): {
        id_tipocontacto: number} {
        if (tipoContactouiduTipoContacto) {
            return {id_tipocontacto: tipoContactouiduTipoContacto};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class TipoDocumento
     * @param tipoDocumentouiduTipoDocumento Identificacion field 1
     */
    public buildOidTipoDocumento(tipoDocumentouiduTipoDocumento: number): {
        id_tipodocumento: number} {
        if (tipoDocumentouiduTipoDocumento) {
            return {id_tipodocumento: tipoDocumentouiduTipoDocumento};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class TipoElemento
     * @param tipoElementouiduTipoElemento Identificacion field 1
     */
    public buildOidTipoElemento(tipoElementouiduTipoElemento: number): {
        id_tipoelemento: number} {
        if (tipoElementouiduTipoElemento) {
            return {id_tipoelemento: tipoElementouiduTipoElemento};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class TipoIVA
     * @param tipoIVAuiduTipoIVA Identificacion field 1
     */
    public buildOidTipoIVA(tipoIVAuiduTipoIVA: number): {
        id_tipoiva: number} {
        if (tipoIVAuiduTipoIVA) {
            return {id_tipoiva: tipoIVAuiduTipoIVA};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class TipoOportunidad
     * @param tipoOportunidaduiduTipoOportunidad Identificacion field 1
     */
    public buildOidTipoOportunidad(tipoOportunidaduiduTipoOportunidad: number): {
        id_tipooportunidad: number} {
        if (tipoOportunidaduiduTipoOportunidad) {
            return {id_tipooportunidad: tipoOportunidaduiduTipoOportunidad};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class TipoProveedor
     * @param tipoProveedoruiduTipoProveedor Identificacion field 1
     */
    public buildOidTipoProveedor(tipoProveedoruiduTipoProveedor: number): {
        id_tipoproveedor: number} {
        if (tipoProveedoruiduTipoProveedor) {
            return {id_tipoproveedor: tipoProveedoruiduTipoProveedor};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class TipoRiesgo
     * @param tipoRiesgouiduTipoRiesgo Identificacion field 1
     */
    public buildOidTipoRiesgo(tipoRiesgouiduTipoRiesgo: number): {
        id_tiporiesgo: number} {
        if (tipoRiesgouiduTipoRiesgo) {
            return {id_tiporiesgo: tipoRiesgouiduTipoRiesgo};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class TipoServicio
     * @param tipoServiciouiduTipoServicio Identificacion field 1
     */
    public buildOidTipoServicio(tipoServiciouiduTipoServicio: number): {
        id_tiposervicio: number} {
        if (tipoServiciouiduTipoServicio) {
            return {id_tiposervicio: tipoServiciouiduTipoServicio};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class TipoSistema
     * @param tipoSistemauiduTipoSistema Identificacion field 1
     */
    public buildOidTipoSistema(tipoSistemauiduTipoSistema: number): {
        id_tiposistema: number} {
        if (tipoSistemauiduTipoSistema) {
            return {id_tiposistema: tipoSistemauiduTipoSistema};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class TipoSolicitud
     * @param tipoSolicituduiduTipoSolicitud Identificacion field 1
     */
    public buildOidTipoSolicitud(tipoSolicituduiduTipoSolicitud: number): {
        id_tiposolicitud: number} {
        if (tipoSolicituduiduTipoSolicitud) {
            return {id_tiposolicitud: tipoSolicituduiduTipoSolicitud};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Zona
     * @param zonauiduZona Identificacion field 1
     */
    public buildOidZona(zonauiduZona: number): {
        id_zona: number} {
        if (zonauiduZona) {
            return {id_zona: zonauiduZona};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Alerta
     * @param alertauiduAlerta Identificacion field 1
     */
    public buildOidAlerta(alertauiduAlerta: number): {
        id_alerta: number} {
        if (alertauiduAlerta) {
            return {id_alerta: alertauiduAlerta};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ConfigEmailAlerta
     * @param configEmailAlertauiduEmpresa Identificacion field 1
     * @param configEmailAlertauTipo Identificacion field 2
     * @param configEmailAlertauiduConfigEmailAlerta Identificacion field 3
     */
    public buildOidConfigEmailAlerta(configEmailAlertauiduEmpresa: string, configEmailAlertauTipo: string,
                                     configEmailAlertauiduConfigEmailAlerta: string): {
        id_empresa: string,
        tipo: string,
        id_configemailalerta: string} {
        if (configEmailAlertauiduEmpresa || configEmailAlertauTipo
             || configEmailAlertauiduConfigEmailAlerta) {
            return {id_empresa: configEmailAlertauiduEmpresa,
                tipo: configEmailAlertauTipo,
                id_configemailalerta: configEmailAlertauiduConfigEmailAlerta};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ClaseGlobal
     * @param claseGlobaluiduClaseGlobal Identificacion field 1
     */
    public buildOidClaseGlobal(claseGlobaluiduClaseGlobal: number): {
        id_claseglobal: number} {
        if (claseGlobaluiduClaseGlobal) {
            return {id_claseglobal: claseGlobaluiduClaseGlobal};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class AlbaranVenta
     * @param albaranVentauCodAlbaran Identificacion field 1
     */
    public buildOidAlbaranVenta(albaranVentauCodAlbaran: number): {
        codalbaran: number} {
        if (albaranVentauCodAlbaran) {
            return {codalbaran: albaranVentauCodAlbaran};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class CobroAnticipo
     * @param cobroAnticipouidCobroAnticipo Identificacion field 1
     */
    public buildOidCobroAnticipo(cobroAnticipouidCobroAnticipo: number): {
        idcobroanticipo: number} {
        if (cobroAnticipouidCobroAnticipo) {
            return {idcobroanticipo: cobroAnticipouidCobroAnticipo};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class FacturaVenta
     * @param facturaVentauidFacturaVenta Identificacion field 1
     */
    public buildOidFacturaVenta(facturaVentauidFacturaVenta: number): {
        idfacturaventa: number} {
        if (facturaVentauidFacturaVenta) {
            return {idfacturaventa: facturaVentauidFacturaVenta};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class LnAlbaranVenta
     * @param lnAlbaranVentauCodAlbaran Identificacion field 1
     * @param lnAlbaranVentauIdLnAlbaranVenta Identificacion field 2
     */
    public buildOidLnAlbaranVenta(lnAlbaranVentauCodAlbaran: number, lnAlbaranVentauIdLnAlbaranVenta: number): {
        codalbaran: number,
        idlnalbaranventa: number} {
        if (lnAlbaranVentauCodAlbaran || lnAlbaranVentauIdLnAlbaranVenta) {
            return {codalbaran: lnAlbaranVentauCodAlbaran,
                idlnalbaranventa: lnAlbaranVentauIdLnAlbaranVenta};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class RemesaPago
     * @param remesaPagouidRemesaPago Identificacion field 1
     */
    public buildOidRemesaPago(remesaPagouidRemesaPago: number): {
        idremesapago: number} {
        if (remesaPagouidRemesaPago) {
            return {idremesapago: remesaPagouidRemesaPago};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class SubTotalAlbaranVenta
     * @param subTotalAlbaranVentauiduSubTotalAlbVenta Identificacion field 1
     */
    public buildOidSubTotalAlbaranVenta(subTotalAlbaranVentauiduSubTotalAlbVenta: number): {
        id_subtotalalbventa: number} {
        if (subTotalAlbaranVentauiduSubTotalAlbVenta) {
            return {id_subtotalalbventa: subTotalAlbaranVentauiduSubTotalAlbVenta};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class SubTotalFacturaVenta
     * @param subTotalFacturaVentauiduSubTotalAlbVenta Identificacion field 1
     */
    public buildOidSubTotalFacturaVenta(subTotalFacturaVentauiduSubTotalAlbVenta: number): {
        id_subtotalalbventa: number} {
        if (subTotalFacturaVentauiduSubTotalAlbVenta) {
            return {id_subtotalalbventa: subTotalFacturaVentauiduSubTotalAlbVenta};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Vencimiento
     * @param vencimientouidVencimiento Identificacion field 1
     */
    public buildOidVencimiento(vencimientouidVencimiento: number): {
        idvencimiento: number} {
        if (vencimientouidVencimiento) {
            return {idvencimiento: vencimientouidVencimiento};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ConfComision
     * @param confComisionuiduConfComision Identificacion field 1
     */
    public buildOidConfComision(confComisionuiduConfComision: number): {
        id_confcomision: number} {
        if (confComisionuiduConfComision) {
            return {id_confcomision: confComisionuiduConfComision};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ItemControlable
     * @param itemControlableuiduItemControlable Identificacion field 1
     */
    public buildOidItemControlable(itemControlableuiduItemControlable: number): {
        id_itemcontrolable: number} {
        if (itemControlableuiduItemControlable) {
            return {id_itemcontrolable: itemControlableuiduItemControlable};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class MovimientoIC
     * @param movimientoICuiduMovimientoIC Identificacion field 1
     */
    public buildOidMovimientoIC(movimientoICuiduMovimientoIC: number): {
        id_movimientoic: number} {
        if (movimientoICuiduMovimientoIC) {
            return {id_movimientoic: movimientoICuiduMovimientoIC};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class Aviso
     * @param avisouiduAviso Identificacion field 1
     */
    public buildOidAviso(avisouiduAviso: number): {
        id_aviso: number} {
        if (avisouiduAviso) {
            return {id_aviso: avisouiduAviso};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class V_ControlActComercial
     * @param vuControlActComercialuiduCliente Identificacion field 1
     * @param vuControlActComercialuiduUsuario Identificacion field 2
     */
    public buildOidV_ControlActComercial(vuControlActComercialuiduCliente: number, vuControlActComercialuiduUsuario: string): {
        id_cliente: number,
        id_usuario: string} {
        if (vuControlActComercialuiduCliente || vuControlActComercialuiduUsuario) {
            return {id_cliente: vuControlActComercialuiduCliente,
                id_usuario: vuControlActComercialuiduUsuario};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ViewProfileLevel1
     * @param viewProfileLevel1uidProfile Identificacion field 1
     * @param viewProfileLevel1uIULevel1Menu Identificacion field 2
     */
    public buildOidViewProfileLevel1(viewProfileLevel1uidProfile: number, viewProfileLevel1uIULevel1Menu: string): {
        idprofile: number,
        iulevel1menu: string} {
        if (viewProfileLevel1uidProfile || viewProfileLevel1uIULevel1Menu) {
            return {idprofile: viewProfileLevel1uidProfile,
                iulevel1menu: viewProfileLevel1uIULevel1Menu};
        }
        return undefined;
    }
    /**
     * Builds an Oid of class ViewProfileLevel2
     * @param viewProfileLevel2uidProfile Identificacion field 1
     * @param viewProfileLevel2uIULevel1Menu Identificacion field 2
     * @param viewProfileLevel2uIULevel2Menu Identificacion field 3
     */
    public buildOidViewProfileLevel2(viewProfileLevel2uidProfile: number, viewProfileLevel2uIULevel1Menu: string,
                                     viewProfileLevel2uIULevel2Menu: string): {
        idprofile: number,
        iulevel1menu: string,
        iulevel2menu: string} {
        if (viewProfileLevel2uidProfile || viewProfileLevel2uIULevel1Menu
             || viewProfileLevel2uIULevel2Menu) {
            return {idprofile: viewProfileLevel2uidProfile,
                iulevel1menu: viewProfileLevel2uIULevel1Menu,
                iulevel2menu: viewProfileLevel2uIULevel2Menu};
        }
        return undefined;
    }

}
