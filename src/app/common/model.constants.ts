/**
 * Model constans names
 */
export class ModelConstants {
    public static readonly Archivoenlacecontable = {name : 'ArchivoEnlaceContable'};
    public static readonly Importaciondatos = {name : 'ImportacionDatos'};
    public static readonly Localizacion = {name : 'Localizacion'};
    public static readonly Perfil = {name : 'Perfil', puperfiles: 'p_perfiles'};
    public static readonly Usuario = {name : 'Usuario', puusuariosdef: 'p_usuariosdef'};
    public static readonly Controlhorario = {name : 'ControlHorario'};
    public static readonly Planificador = {name : 'Planificador'};
    public static readonly Registroanualpermisos = {name : 'RegistroAnualPermisos'};
    public static readonly Registrohorario = {name : 'RegistroHorario'};
    public static readonly Solicitudpermiso = {name : 'SolicitudPermiso'};
    public static readonly Iu = {name : 'IU'};
    public static readonly Iuaction = {name : 'IUAction'};
    public static readonly Iuattribute = {name : 'IUAttribute'};
    public static readonly Iudetail = {name : 'IUDetail'};
    public static readonly Iumenuitem = {name : 'IUMenuItem'};
    public static readonly Iunavigation = {name : 'IUNavigation'};
    public static readonly Iurelation = {name : 'IURelation'};
    public static readonly Iuviewuser = {name : 'IUViewUser'};
    public static readonly Profile = {name : 'Profile'};
    public static readonly Profileiu = {name : 'ProfileIU'};
    public static readonly Profileiuact = {name : 'ProfileIUAct'};
    public static readonly Profileiuattr = {name : 'ProfileIUAttr'};
    public static readonly Profileiudetail = {name : 'ProfileIUDetail'};
    public static readonly Profileiumenuitem = {name : 'ProfileIUMenuItem'};
    public static readonly Profileiunav = {name : 'ProfileIUNav'};
    public static readonly Profileiurelation = {name : 'ProfileIURelation'};
    public static readonly Viewprofile = {name : 'ViewProfile'};
    public static readonly Almacen = {name : 'Almacen'};
    public static readonly Articuloenalmacen = {name : 'ArticuloEnAlmacen'};
    public static readonly Articuloservicio = {name : 'ArticuloServicio'};
    public static readonly Movimientoartenalmacen = {name : 'MovimientoArtEnAlmacen'};
    public static readonly Nroseriearticulo = {name : 'NroSerieArticulo'};
    public static readonly Regularizacionartenalmacen = {name : 'RegularizacionArtEnAlmacen'};
    public static readonly Reservamanual = {name : 'ReservaManual'};
    public static readonly Subarticulokit = {name : 'SubArticuloKit'};
    public static readonly Agentecliente = {name : 'AgenteCliente'};
    public static readonly Cliente = {name : 'Cliente', siuutmodificardirfiscal: 'siu_tmodificardirfiscal',
        siuutmodificarpersjuridica: 'siu_tmodificarpersjuridica', siuutmodificarlogo: 'siu_tmodificarlogo',
        siuutmodificaradmonfinca: 'siu_tmodificaradmonfinca', siuumodificardatoscontablescli: 'siu_modificardatoscontablescli',
        siuutmodificarcli: 'siu_tmodificarcli', puclientes: 'p_clientes', mdiuucliente: 'mdiu_cliente',
        mdiuuclienteportalcli: 'mdiu_clienteportalcli'};
    public static readonly Contadoremail = {name : 'ContadorEmail'};
    public static readonly Enviomasivocliente = {name : 'EnvioMasivoCliente'};
    public static readonly Enviomasivoemail = {name : 'EnvioMasivoEmail'};
    public static readonly Agentoportunidad = {name : 'AgentOportunidad'};
    public static readonly Comentariooc = {name : 'ComentarioOC'};
    public static readonly Oportunidadcomercial = {name : 'OportunidadComercial'};
    public static readonly Albarancompra = {name : 'AlbaranCompra'};
    public static readonly Articuloproveedor = {name : 'ArticuloProveedor'};
    public static readonly Contactoproveedor = {name : 'ContactoProveedor'};
    public static readonly Facturacompra = {name : 'FacturaCompra'};
    public static readonly Lnalbarancompra = {name : 'LnAlbaranCompra'};
    public static readonly Lnfacturacompra = {name : 'LnFacturaCompra'};
    public static readonly Lnpedidocompra = {name : 'LnPedidoCompra'};
    public static readonly Pedidocompra = {name : 'PedidoCompra'};
    public static readonly Plantillaimportacion = {name : 'PlantillaImportacion'};
    public static readonly Proveedor = {name : 'Proveedor'};
    public static readonly Reciboproveedor = {name : 'ReciboProveedor'};
    public static readonly Subtotalalbarancompra = {name : 'SubTotalAlbaranCompra'};
    public static readonly Subtotalfacturacompra = {name : 'SubTotalFacturaCompra'};
    public static readonly Subtotalpedidocompra = {name : 'SubTotalPedidoCompra'};
    public static readonly Vunecesidadescompra = {name : 'V_NecesidadesCompra'};
    public static readonly Vucontrolcostes = {name : 'V_ControlCostes'};
    public static readonly Vumodelosmasvendidos = {name : 'V_ModelosMasVendidos'};
    public static readonly Vupreciosporproveedor = {name : 'V_PreciosPorProveedor'};
    public static readonly Vuproductividadtec = {name : 'V_ProductividadTec'};
    public static readonly Vusubidaprecios = {name : 'V_SubidaPrecios'};
    public static readonly Vutiemposavisos = {name : 'V_TiemposAvisos'};
    public static readonly Vutiemposmediosavisos = {name : 'V_TiemposMediosAvisos'};
    public static readonly Documento = {name : 'Documento', siuudescargar: 'siu_descargar', siuudescargaruout: 'siu_descargar_out',
        siuuedituinstance: 'siu_edit_instance', siuuabrirnuevaventana: 'siu_abrirnuevaventana',
        siuuabrirnuevaventanauout: 'siu_abrirnuevaventana_out', siuutcrear4cliente: 'siu_tcrear4cliente',
        siuutobtenerfirmado4contrato: 'siu_tobtenerfirmado4contrato',
        siuutobtenerfirmado4presupuest: 'siu_tobtenerfirmado4presupuest', siuutobtenerfirmado4parte: 'siu_tobtenerfirmado4parte',
        piuudocumentoshat: 'piu_documentoshat', piuudocumentoversant: 'piu_documentoversant'};
    public static readonly Firmadocumento = {name : 'FirmaDocumento'};
    public static readonly Firmanotifica = {name : 'FirmaNotifica'};
    public static readonly Firmante = {name : 'Firmante'};
    public static readonly Imagen = {name : 'Imagen'};
    public static readonly Elementorecom = {name : 'ElementoRecom'};
    public static readonly Elerecomendado = {name : 'EleRecomendado'};
    public static readonly Proyectocctv = {name : 'ProyectoCCTV'};
    public static readonly Proyectog2 = {name : 'ProyectoG2'};
    public static readonly Proyectog3 = {name : 'ProyectoG3'};
    public static readonly Anomalia = {name : 'Anomalia'};
    public static readonly Checklist = {name : 'CheckList'};
    public static readonly Checklistot = {name : 'CheckListOT', mdiuuchecklistotutreeuparte: 'mdiu_checklistot_tree_parte',
        mdiuuchecklistotutreeuorden: 'mdiu_checklistot_tree_orden', mdiuuchecklistotutreeuportalcl: 'mdiu_checklistot_tree_portalcl'};
    public static readonly Comprobacion = {name : 'Comprobacion'};
    public static readonly Comprobacionot = {name : 'ComprobacionOT',
        mdiuucomprobacionotutreeuparte: 'mdiu_comprobacionot_tree_parte',
        mdiuucomprobacionotutreeuporta: 'mdiu_comprobacionot_tree_porta'};
    public static readonly Grupocomp = {name : 'GrupoComp'};
    public static readonly Grupocompot = {name : 'GrupoCompOT', mdiuugrupocompotutreeuparte: 'mdiu_grupocompot_tree_parte',
        mdiuugrupocompotutreeuorden: 'mdiu_grupocompot_tree_orden', mdiuugrupocompotutreeuportalcl: 'mdiu_grupocompot_tree_portalcl'};
    public static readonly Contrato = {name : 'Contrato', piuucontrato: 'piu_contrato',
        piuucontratoportalcli: 'piu_contratoportalcli', mdiuucontrato: 'mdiu_contrato',
        mdiuucontratoportalcli: 'mdiu_contratoportalcli'};
    public static readonly Cuota = {name : 'Cuota', piuucuotacontrato: 'piu_cuotacontrato', mdiuucuotacontrato: 'mdiu_cuotacontrato'};
    public static readonly Lncontrato = {name : 'LnContrato'};
    public static readonly Lnobjetoctr = {name : 'LnObjetoCtr', piuulnobjetoctr: 'piu_lnobjetoctr',
        mdiuulnobjetoctr: 'mdiu_lnobjetoctr', mdiuulnobjetoctrportalcli: 'mdiu_lnobjetoctrportalcli'};
    public static readonly Objetocontrato = {name : 'ObjetoContrato'};
    public static readonly Subtotalcontrato = {name : 'SubTotalContrato'};
    public static readonly Alarmatecnica = {name : 'AlarmaTecnica'};
    public static readonly Contacto = {name : 'Contacto', siuudeleteuinstance: 'siu_delete_instance',
        siuuedituinstance: 'siu_edit_instance', siuutcrear4instalacion: 'siu_tcrear4instalacion',
        siuutcrear4sistema: 'siu_tcrear4sistema', piuusistema: 'piu_sistema'};
    public static readonly Direccionip = {name : 'DireccionIP'};
    public static readonly Elementosistema = {name : 'ElementoSistema', piuuelementosistema: 'piu_elementosistema',
        mdiuuelementosistema: 'mdiu_elementosistema'};
    public static readonly Instalacion = {name : 'Instalacion', siuutmodificarcli: 'siu_tmodificarcli',
        siuutmodatoscontablesportalcli: 'siu_tmodatoscontablesportalcli', piuuinstalacion: 'piu_instalacion',
        piuuinstalaciondef: 'piu_instalaciondef', piuuinstalacionportalcli: 'piu_instalacionportalcli',
        mdiuuinstalacion: 'mdiu_instalacion', mdiuuinstalacionportalcli: 'mdiu_instalacionportalcli'};
    public static readonly Moddiseno = {name : 'ModDiseno'};
    public static readonly Parametrosistema = {name : 'ParametroSistema'};
    public static readonly Servicio = {name : 'Servicio'};
    public static readonly Sistema = {name : 'Sistema', siuutimprimir: 'siu_timprimir', siuutimprimiruout: 'siu_timprimir_out',
        piuusistema: 'piu_sistema', mdiuusistema: 'mdiu_sistema'};
    public static readonly Usuariocra = {name : 'UsuarioCRA'};
    public static readonly Vueleminstal = {name : 'V_ElemInstal'};
    public static readonly Vugrupoelem = {name : 'V_GrupoElem'};
    public static readonly Mantenimiento = {name : 'Mantenimiento'};
    public static readonly Periodoinactivo = {name : 'PeriodoInactivo'};
    public static readonly Plantillamantenimiento = {name : 'PlantillaMantenimiento'};
    public static readonly Empcontratista = {name : 'EmpContratista'};
    public static readonly Lnordentrabajo = {name : 'LnOrdenTrabajo'};
    public static readonly Logreplan = {name : 'LogReplan'};
    public static readonly Ordentrabajo = {name : 'OrdenTrabajo', piuuordentrabajo: 'piu_ordentrabajo',
        mdiuuordentrabajo: 'mdiu_ordentrabajo', mdiuuordentrabajoeconimicos: 'mdiu_ordentrabajoeconimicos',
        mdiuuotobramodsistema: 'mdiu_otobramodsistema'};
    public static readonly Partetrabajo = {name : 'ParteTrabajo', piuupartetrabajo: 'piu_partetrabajo',
        piuupartetrabajoportalcli: 'piu_partetrabajoportalcli', mdiuupartetrabajoueconomico: 'mdiu_partetrabajo_economico',
        mdiuupartetrabajo: 'mdiu_partetrabajo', mdiuupartetrabajoportalcli: 'mdiu_partetrabajoportalcli'};
    public static readonly Subtotalordentrabajo = {name : 'SubtotalOrdenTrabajo'};
    public static readonly Tarea = {name : 'Tarea'};
    public static readonly Agentepresupuesto = {name : 'AgentePresupuesto'};
    public static readonly Comisionpresupuesto = {name : 'ComisionPresupuesto'};
    public static readonly Grupopresupuesto = {name : 'GrupoPresupuesto', piuugrupopresupuesto: 'piu_grupopresupuesto',
        mdiuugrupopresupuesto: 'mdiu_grupopresupuesto', mdiuugrupopresupuestoversiones: 'mdiu_grupopresupuestoversiones',
        mdiuugrupopresupuestoportalcli: 'mdiu_grupopresupuestoportalcli'};
    public static readonly Grupopresupuestoplantilla = {name : 'GrupoPresupuestoPlantilla'};
    public static readonly Lnpresupuesto = {name : 'LnPresupuesto', mdiuulnpresupuesto: 'mdiu_lnpresupuesto',
        mdiuulnpresupuestoversiones: 'mdiu_lnpresupuestoversiones', mdiuulnpresupuestoportalcli: 'mdiu_lnpresupuestoportalcli'};
    public static readonly Lnpresupuestoplantilla = {name : 'LnPresupuestoPlantilla'};
    public static readonly Plantillapresupuesto = {name : 'PlantillaPresupuesto'};
    public static readonly Presupuesto = {name : 'Presupuesto', piuupresupuestoselec: 'piu_presupuestoselec',
        piuupresupuestoportalcli: 'piu_presupuestoportalcli', mdiuupresupuesto: 'mdiu_presupuesto',
        mdiuupresupuestoversiones: 'mdiu_presupuestoversiones', mdiuupresupuestocontrato: 'mdiu_presupuestocontrato',
        mdiuupresupuestoportalcli: 'mdiu_presupuestoportalcli'};
    public static readonly Subtotalpresupuesto = {name : 'SubtotalPresupuesto'};
    public static readonly Anyolaboral = {name : 'AnyoLaboral'};
    public static readonly Campanyacomercial = {name : 'CampanyaComercial'};
    public static readonly Codigopostal = {name : 'CodigoPostal', pucodigospostales: 'p_codigospostales'};
    public static readonly Cra = {name : 'CRA'};
    public static readonly Ctabancaria = {name : 'CtaBancaria'};
    public static readonly Departamento = {name : 'Departamento'};
    public static readonly Empresa = {name : 'Empresa'};
    public static readonly Entidadbancaria = {name : 'EntidadBancaria', puentidadbancaria: 'p_entidadbancaria'};
    public static readonly Estadooportunidadcomercial = {name : 'EstadoOportunidadComercial'};
    public static readonly Familia = {name : 'Familia'};
    public static readonly Festivo = {name : 'Festivo'};
    public static readonly Formapago = {name : 'FormaPago'};
    public static readonly Grupoempresa = {name : 'GrupoEmpresa'};
    public static readonly Grupofacturacion = {name : 'GrupoFacturacion'};
    public static readonly Importeespecialcliente = {name : 'ImporteEspecialCliente'};
    public static readonly Marca = {name : 'Marca', pumarca: 'p_marca'};
    public static readonly Modelodocumento = {name : 'ModeloDocumento'};
    public static readonly Modelosistema = {name : 'ModeloSistema'};
    public static readonly Motivo = {name : 'Motivo'};
    public static readonly Municipio = {name : 'Municipio', pumunicipios: 'p_municipios', mdumunicipios: 'md_municipios'};
    public static readonly Noconformidad = {name : 'NoConformidad'};
    public static readonly Normativa = {name : 'Normativa'};
    public static readonly Operativacctv = {name : 'OperativaCCTV'};
    public static readonly Origenoportunidad = {name : 'OrigenOportunidad'};
    public static readonly Pais = {name : 'Pais', pupaises: 'p_paises'};
    public static readonly Parametro = {name : 'Parametro'};
    public static readonly Periodicidad = {name : 'Periodicidad'};
    public static readonly Porcentaje = {name : 'Porcentaje'};
    public static readonly Precioventaarticulo = {name : 'PrecioVentaArticulo'};
    public static readonly Provincia = {name : 'Provincia', puprovincias: 'p_provincias'};
    public static readonly Reglaajusteh = {name : 'ReglaAjusteH'};
    public static readonly Sector = {name : 'Sector', pusector: 'p_sector'};
    public static readonly Seriealbaran = {name : 'SerieAlbaran'};
    public static readonly Seriealbarancompra = {name : 'SerieAlbaranCompra'};
    public static readonly Seriefactura = {name : 'SerieFactura'};
    public static readonly Seriefacturacompra = {name : 'SerieFacturaCompra'};
    public static readonly Seriepedidocompra = {name : 'SeriePedidoCompra'};
    public static readonly Sucursalbancaria = {name : 'SucursalBancaria', pusucursalbancaria: 'p_sucursalbancaria'};
    public static readonly Tarifaventa = {name : 'TarifaVenta'};
    public static readonly Tipoaccioncomercial = {name : 'TipoAccionComercial'};
    public static readonly Tipoaviso = {name : 'TipoAviso'};
    public static readonly Tipocierre = {name : 'TipoCierre'};
    public static readonly Tipocliente = {name : 'TipoCliente', putiposclientes: 'p_tiposclientes'};
    public static readonly Tipocontacto = {name : 'TipoContacto'};
    public static readonly Tipodocumento = {name : 'TipoDocumento'};
    public static readonly Tipoelemento = {name : 'TipoElemento'};
    public static readonly Tipoiva = {name : 'TipoIVA'};
    public static readonly Tipooportunidad = {name : 'TipoOportunidad'};
    public static readonly Tipoproveedor = {name : 'TipoProveedor'};
    public static readonly Tiporiesgo = {name : 'TipoRiesgo'};
    public static readonly Tiposervicio = {name : 'TipoServicio'};
    public static readonly Tiposistema = {name : 'TipoSistema', putipossistema: 'p_tipossistema'};
    public static readonly Tiposolicitud = {name : 'TipoSolicitud'};
    public static readonly Zona = {name : 'Zona', puzonas: 'p_zonas'};
    public static readonly Alerta = {name : 'Alerta'};
    public static readonly Configemailalerta = {name : 'ConfigEmailAlerta'};
    public static readonly Claseglobal = {name : 'ClaseGlobal'};
    public static readonly Albaranventa = {name : 'AlbaranVenta', piuualbaranventa: 'piu_albaranventa',
        mdiuualbaranventa: 'mdiu_albaranventa', mdiuualbaranventalns: 'mdiu_albaranventalns',
        mdiuualbaranventaportalcli: 'mdiu_albaranventaportalcli', mdiuualbaranventalnsportalcli: 'mdiu_albaranventalnsportalcli'};
    public static readonly Cobroanticipo = {name : 'CobroAnticipo'};
    public static readonly Facturaventa = {name : 'FacturaVenta', piuufacturaventaobs: 'piu_facturaventaobs',
        piuufacturaventaportalcli: 'piu_facturaventaportalcli', mdiuufacturaventa: 'mdiu_facturaventa',
        mdiuufacturaventaportalcli: 'mdiu_facturaventaportalcli'};
    public static readonly Lnalbaranventa = {name : 'LnAlbaranVenta'};
    public static readonly Remesapago = {name : 'RemesaPago'};
    public static readonly Subtotalalbaranventa = {name : 'SubTotalAlbaranVenta'};
    public static readonly Subtotalfacturaventa = {name : 'SubTotalFacturaVenta'};
    public static readonly Vencimiento = {name : 'Vencimiento'};
    public static readonly Confcomision = {name : 'ConfComision'};
    public static readonly Itemcontrolable = {name : 'ItemControlable'};
    public static readonly Movimientoic = {name : 'MovimientoIC'};
    public static readonly Aviso = {name : 'Aviso', siuutcrear: 'siu_tcrear', piuuavisoportalcli: 'piu_avisoportalcli'};
    public static readonly Vucontrolactcomercial = {name : 'V_ControlActComercial'};
    public static readonly Viewprofilelevel1 = {name : 'ViewProfileLevel1'};
    public static readonly Viewprofilelevel2 = {name : 'ViewProfileLevel2'};
}
