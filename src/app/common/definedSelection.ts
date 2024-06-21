/**
 * Defined selection patterns
 */
export class DefinedSelections {
    /**
     * Defined selection pattern DS_Frecuencia for String data type
     */
    public static DS_FRECUENCIA = [{ key: null, value: '' }
        , { key: 'D', value: 'Diaria' }
        , { key: 'S', value: 'Semanal' }
        , { key: 'M', value: 'Mensual' }
        , { key: 'T', value: 'Trimestral' }
        , { key: '6', value: 'Semestral' }
        , { key: 'A', value: 'Anual' }
        , { key: 'O', value: 'Otra' }
    ];
    /**
     * Defined selection pattern DS_FrecuenciaUds for String data type
     */
    public static DS_FRECUENCIAUDS = [{ key: null, value: '' }
        , { key: 'D', value: 'Días' }
        , { key: 'S', value: 'Semanas' }
        , { key: 'M', value: 'Meses' }
        , { key: 'A', value: 'Años' }
    ];
    /**
     * Defined selection pattern DS_ParteTrabajo_Valoracion for Int data type
     */
    public static DS_PARTETRABAJO_VALORACION = [{ key: null, value: '' }
        , { key: 1, value: 'Pésima' }
        , { key: 2, value: 'Mala' }
        , { key: 3, value: 'Regular' }
        , { key: 4, value: 'Buena' }
        , { key: 5, value: 'Excelente' }
    ];
    /**
     * Defined selection pattern DS_Cliente_Estado for String data type
     */
    public static DS_CLIENTE_ESTADO = [{ key: null, value: '' }
        , { key: 'Activo', value: 'Activo' }
        , { key: 'Bloqueado', value: 'Bloqueado' }
        , { key: 'Baja', value: 'Baja' }
    ];
    /**
     * Defined selection pattern DS_Tarea_Estado for String data type
     */
    public static DS_TAREA_ESTADO = [{ key: null, value: '' }
        , { key: 'D', value: 'Pendiente' }
        , { key: 'A', value: 'Asignada' }
        , { key: 'P', value: 'Planificada' }
        , { key: 'I', value: 'Iniciada' }
        , { key: 'F', value: 'Finalizada' }
        , { key: 'B', value: 'Borrada' }
    ];
    /**
     * Defined selection pattern DS_Tarea_Urgencia for String data type
     */
    public static DS_TAREA_URGENCIA = [{ key: null, value: '' }
        , { key: '1B', value: 'Baja' }
        , { key: '2N', value: 'Normal' }
        , { key: '3P', value: 'Prioritario' }
        , { key: '4U', value: 'Urgente' }
    ];
    /**
     * Defined selection pattern DS_TipoTarea for String data type
     */
    public static DS_TIPOTAREA = [{ key: null, value: '' }
        , { key: 'C', value: 'Comercial' }
        , { key: 'A', value: 'Administrativa' }
        , { key: 'T', value: 'Técnica' }
    ];
    /**
     * Defined selection pattern DS_TipoResultado for String data type
     */
    public static DS_TIPORESULTADO = [{ key: null, value: '' }
        , { key: 'Real', value: 'Numérico' }
        , { key: 'Text', value: 'Texto' }
        , { key: 'Date', value: 'Fecha' }
        , { key: 'Bool', value: 'Sí/No' }
    ];
    /**
     * Defined selection pattern DS_TipoSolicitud for String data type
     */
    public static DS_TIPOSOLICITUD = [{ key: null, value: '' }
        , { key: 'V', value: 'Vacaciones' }
        , { key: 'E', value: 'Enfermedad' }
        , { key: 'N', value: 'Permiso Nacimiento' }
        , { key: 'S', value: 'Suspensión Empleo' }
        , { key: 'O', value: 'Otros' }
    ];
    /**
     * Defined selection pattern DS_Si_No for Bool data type
     */
    public static DS_SI_NO = [{ key: null, value: '' }
        , { key: true, value: 'Sí' }
        , { key: false, value: 'No' }
    ];
    /**
     * Defined selection pattern DS_TipoDato for String data type
     */
    public static DS_TIPODATO = [{ key: null, value: '' }
        , { key: 'T', value: 'Texto' }
        , { key: 'F', value: 'Fecha' }
        , { key: 'R', value: 'Núm. con decimales' }
        , { key: 'E', value: 'Núm. sin decimales' }
        , { key: 'S', value: 'String' }
        , { key: 'D', value: 'Directorio/Ruta' }
    ];
    /**
     * Defined selection pattern DS_TipoResidenciaCliente for String data type
     */
    public static DS_TIPORESIDENCIACLIENTE = [{ key: null, value: '' }
        , { key: 'ES', value: 'España' }
        , { key: 'UE', value: 'Unión Europea' }
        , { key: 'OT', value: 'Extranjero' }
    ];
    /**
     * Defined selection pattern DS_SepararFactura for String data type
     */
    public static DS_SEPARARFACTURA = [{ key: null, value: '' }
        , { key: 'OBJ', value: 'Una factura por objeto de contrato' }
        , { key: 'ZN', value: 'Una factura por grupo de facturación' }
        , { key: 'OBJZN', value: 'Una factura por objeto de contrato y grupo de facturación' }
        , { key: 'INS', value: 'Una factura por Instalación' }
        , { key: 'CLI', value: 'Una factura por cliente' }
    ];
    /**
     * Defined selection pattern DS_NumLineasFactura for String data type
     */
    public static DS_NUMLINEASFACTURA = [{ key: null, value: '' }
        , { key: 'OBJ', value: 'Una línea por objeto de contrato' }
        , { key: 'ZN', value: 'Una línea por grupo de facturación' }
        , { key: 'OBJZN', value: 'Una línea por objeto de contrato y grupo de facturación' }
        , { key: 'INS', value: 'Una línea por Instalación' }
        , { key: 'CUO', value: 'Tantas líneas como cuotas' }
    ];
    /**
     * Defined selection pattern DS_Presupuesto_Estado for String data type
     */
    public static DS_PRESUPUESTO_ESTADO = [{ key: null, value: '' }
        , { key: 'Abierto', value: 'Abierto' }
        , { key: 'Aceptado', value: 'Aceptado' }
        , { key: 'Rechazado', value: 'Rechazado' }
        , { key: 'Anulado', value: 'Anulado' }
    ];
    /**
     * Defined selection pattern DS_AreaNegocio for String data type
     */
    public static DS_AREANEGOCIO = [{ key: null, value: '' }
        , { key: 'A', value: 'Administración' }
        , { key: 'C', value: 'Comercial' }
        , { key: 'T', value: 'Técnico' }
        , { key: 'S', value: 'Superadministrador' }
    ];
    /**
     * Defined selection pattern DS_NoConformidad for String data type
     */
    public static DS_NOCONFORMIDAD = [{ key: null, value: '' }
        , { key: 'C', value: 'Cliente' }
        , { key: 'P', value: 'Proveedor' }
        , { key: 'I', value: 'Interna' }
    ];
    /**
     * Defined selection pattern DS_Motivo_AtribuibleA for String data type
     */
    public static DS_MOTIVO_ATRIBUIBLEA = [{ key: null, value: '' }
        , { key: 'C', value: 'Cliente' }
        , { key: 'P', value: 'Proveedor' }
        , { key: 'I', value: 'Interno' }
    ];
    /**
     * Defined selection pattern DS_ReglaAjusteH_Accion for String data type
     */
    public static DS_REGLAAJUSTEH_ACCION = [{ key: null, value: '' }
        , { key: 'R>', value: 'Redondear mayor' }
        , { key: 'R<', value: 'Redondear menor' }
    ];
    /**
     * Defined selection pattern DS_Meses for Int data type
     */
    public static DS_MESES = [{ key: null, value: '' }
        , { key: 1, value: 'Enero' }
        , { key: 2, value: 'Febrero' }
        , { key: 3, value: 'Marzo' }
        , { key: 4, value: 'Abril' }
        , { key: 5, value: 'Mayo' }
        , { key: 6, value: 'Junio' }
        , { key: 7, value: 'Julio' }
        , { key: 8, value: 'Agosto' }
        , { key: 9, value: 'Septiembre' }
        , { key: 10, value: 'Octubre' }
        , { key: 11, value: 'Noviembre' }
        , { key: 12, value: 'Diciembre' }
    ];
    /**
     * Defined selection pattern DS_ArticuloOServicio for String data type
     */
    public static DS_ARTICULOOSERVICIO = [{ key: null, value: '' }
        , { key: 'A', value: 'Artículo' }
        , { key: 'S', value: 'Servicio' }
    ];
    /**
     * Defined selection pattern DS_TipoMovimiento for String data type
     */
    public static DS_TIPOMOVIMIENTO = [{ key: null, value: '' }
        , { key: 'E', value: 'Entrada' }
        , { key: 'S', value: 'Salida' }
        , { key: 'R', value: 'Regularización' }
    ];
    /**
     * Defined selection pattern DS_GradoSistema for String data type
     */
    public static DS_GRADOSISTEMA = [{ key: null, value: '' }
        , { key: 'G.2', value: 'G.2' }
        , { key: 'G.3', value: 'G.3' }
        , { key: 'G.4', value: 'G.4' }
        , { key: 'N.C', value: 'N.C' }
        , { key: 'I.E', value: 'I.E' }
    ];
    /**
     * Defined selection pattern DS_Elemento_Estado for String data type
     */
    public static DS_ELEMENTO_ESTADO = [{ key: null, value: '' }
        , { key: 'PI', value: 'Pendiente instalación' }
        , { key: 'IN', value: 'Instalado' }
        , { key: 'TL', value: 'En taller' }
        , { key: 'RT', value: 'Retirado' }
        , { key: 'PR', value: 'Pendiente revisar' }
    ];
    /**
     * Defined selection pattern DS_Tipo_SolicitudPermiso for String data type
     */
    public static DS_TIPO_SOLICITUDPERMISO = [{ key: null, value: '' }
        , { key: 'V', value: 'Vacaciones' }
        , { key: 'P', value: 'Permiso' }
        , { key: 'B', value: 'Baja' }
    ];
    /**
     * Defined selection pattern DS_Estado_SolicitudPermiso for String data type
     */
    public static DS_ESTADO_SOLICITUDPERMISO = [{ key: null, value: '' }
        , { key: 'C', value: 'Creado' }
        , { key: 'S', value: 'Solicitado' }
        , { key: 'A', value: 'Aprobado' }
        , { key: 'R', value: 'Rechazado' }
        , { key: 'X', value: 'Anulado' }
    ];
    /**
     * Defined selection pattern DS_TipoTareaTecnica for String data type
     */
    public static DS_TIPOTAREATECNICA = [{ key: null, value: '' }
        , { key: 'I', value: 'Instalación' }
        , { key: 'A', value: 'Avería/Aviso' }
        , { key: 'M', value: 'Mantenimiento' }
    ];
    /**
     * Defined selection pattern DS_TipoTareaComercial for String data type
     */
    public static DS_TIPOTAREACOMERCIAL = [{ key: null, value: '' }
        , { key: 'V', value: 'Visita' }
        , { key: 'L', value: 'Llamada' }
        , { key: 'P', value: 'Elaboración presupuesto' }
        , { key: 'E', value: 'Email' }
    ];
    /**
     * Defined selection pattern DS_TipoTareaAdministrativa for String data type
     */
    public static DS_TIPOTAREAADMINISTRATIVA = [{ key: null, value: '' }
        , { key: 'FV', value: 'Factura Venta' }
        , { key: 'FC', value: 'Factura Compra' }
        , { key: 'AD', value: 'Alta datos' }
        , { key: 'MD', value: 'Modificación datos' }
        , { key: 'EC', value: 'Elaborar contrato' }
        , { key: 'EP', value: 'Elaborar presupuesto' }
        , { key: 'GU', value: 'Gestión de usuarios' }
        , { key: 'CI', value: 'Control inventario' }
        , { key: 'FE', value: 'Factura electrónica' }
        , { key: 'RP', value: 'Remesa de pago' }
        , { key: 'PC', value: 'Pedido Compra' }
        , { key: 'GI', value: 'Gestión ítem controlable' }
        , { key: 'CM', value: 'Control cuadro de mandos' }
        , { key: 'AV', value: 'Aviso de cliente' }
    ];
    /**
     * Defined selection pattern DS_OrdenTrabajo_Estado for String data type
     */
    public static DS_ORDENTRABAJO_ESTADO = [{ key: null, value: '' }
        , { key: 'C', value: 'Creada' }
        , { key: 'A', value: 'Asignada' }
        , { key: 'P', value: 'Planificada' }
        , { key: 'I', value: 'Iniciada' }
        , { key: 'F', value: 'Completada' }
    ];
    /**
     * Defined selection pattern DS_TipoOrdenTrabajo for String data type
     */
    public static DS_TIPOORDENTRABAJO = [{ key: null, value: '' }
        , { key: 'M', value: 'Mantenimiento' }
        , { key: 'A', value: 'Aviso' }
        , { key: 'O', value: 'Obra' }
    ];
    /**
     * Defined selection pattern DS_ParteTrabajo_Estado for String data type
     */
    public static DS_PARTETRABAJO_ESTADO = [{ key: null, value: '' }
        , { key: 'A', value: 'Asignado' }
        , { key: 'P', value: 'Planificado' }
        , { key: 'I', value: 'Iniciado' }
        , { key: 'F', value: 'Completado' }
        , { key: 'N', value: 'Anulado' }
        , { key: 'D', value: 'Cerrado' }
    ];
    /**
     * Defined selection pattern DS_TipoSerieFacturacion for String data type
     */
    public static DS_TIPOSERIEFACTURACION = [{ key: null, value: '' }
        , { key: 'N', value: 'Normal' }
        , { key: 'R', value: 'Rectificativa' }
        , { key: 'T', value: 'Retención' }
    ];
    /**
     * Defined selection pattern DS_Albaran_Estado for String data type
     */
    public static DS_ALBARAN_ESTADO = [{ key: null, value: '' }
        , { key: 'A', value: 'Abierto' }
        , { key: 'B', value: 'Bloqueado' }
        , { key: 'F', value: 'Facturado' }
    ];
    /**
     * Defined selection pattern DS_MantenimientoPeriodo for String data type
     */
    public static DS_MANTENIMIENTOPERIODO = [{ key: null, value: '' }
        , { key: 'D', value: 'Días' }
        , { key: 'M', value: 'Meses' }
    ];
    /**
     * Defined selection pattern DS_DatoElementoSistema for Nat data type
     */
    public static DS_DATOELEMENTOSISTEMA = [{ key: null, value: '' }
        , { key: 1, value: 'Nº de Serie' }
        , { key: 2, value: 'Referencia' }
        , { key: 3, value: 'Marca' }
        , { key: 4, value: 'Modelo' }
        , { key: 5, value: 'Fecha de fabricación' }
        , { key: 6, value: 'Fecha de revisión' }
        , { key: 7, value: 'Fecha fin garantía proveedor' }
        , { key: 8, value: 'Fecha fin garantía cliente' }
        , { key: 9, value: 'Fecha de instalación' }
        , { key: 10, value: 'Fecha última recarga' }
        , { key: 11, value: 'Fecha último retimbrado' }
        , { key: 12, value: 'Zona ubicación' }
        , { key: 13, value: 'Tipo de elemento' }
    ];
    /**
     * Defined selection pattern DS_GradoAnomalia for Nat data type
     */
    public static DS_GRADOANOMALIA = [{ key: null, value: '' }
        , { key: 0, value: 'Incorrecto' }
        , { key: 1, value: 'Mejorable' }
    ];
    /**
     * Defined selection pattern DS_ImportacionEntidad for Nat data type
     */
    public static DS_IMPORTACIONENTIDAD = [{ key: null, value: '' }
        , { key: 0, value: 'Almacenes' }
        , { key: 1, value: 'Articulo/Servicio' }
        , { key: 2, value: 'Checklists' }
        , { key: 3, value: 'Clientes' }
        , { key: 4, value: 'Contratos' }
        , { key: 5, value: 'Elementos de Sistema' }
        , { key: 6, value: 'Instalaciones' }
        , { key: 7, value: 'Lineas de contrato' }
        , { key: 8, value: 'Mantenimientos' }
        , { key: 9, value: 'Nro. Serie articulo' }
        , { key: 10, value: 'Proveedores' }
        , { key: 11, value: 'Sistemas' }
        , { key: 12, value: 'Usuarios' }
    ];
    /**
     * Defined selection pattern DS_TipoOrigenTarea for Nat data type
     */
    public static DS_TIPOORIGENTAREA = [{ key: null, value: '' }
        , { key: 0, value: 'No tiene origen' }
        , { key: 1, value: 'Orden de trabajo' }
        , { key: 2, value: 'Parte de trabajo' }
        , { key: 3, value: 'Contrato' }
        , { key: 4, value: 'Sistema' }
        , { key: 5, value: 'Aviso cliente portal' }
    ];
    /**
     * Defined selection pattern DS_VigenciaContrato for String data type
     */
    public static DS_VIGENCIACONTRATO = [{ key: null, value: '' }
        , { key: 'VI', value: 'Vigente' }
        , { key: 'VE', value: 'Vencido' }
        , { key: 'AP', value: 'A punto de vencer' }
    ];
    /**
     * Defined selection pattern DS_EstadoFacturaVenta for String data type
     */
    public static DS_ESTADOFACTURAVENTA = [{ key: null, value: '' }
        , { key: 'A', value: 'Abierta' }
        , { key: 'E', value: 'Emitida' }
        , { key: 'C', value: 'Cobrada' }
        , { key: 'N', value: 'Anulada' }
    ];
    /**
     * Defined selection pattern DS_Tarea_Estado_Vivas for String data type
     */
    public static DS_TAREA_ESTADO_VIVAS = [{ key: null, value: '' }
        , { key: 'D', value: 'Pendiente' }
        , { key: 'A', value: 'Asignada' }
        , { key: 'P', value: 'Planificada' }
        , { key: 'I', value: 'Iniciada' }
        , { key: 'F', value: 'Finalizada' }
    ];
    /**
     * Defined selection pattern DS_OrdentrabajoDividirPartes for String data type
     */
    public static DS_ORDENTRABAJODIVIDIRPARTES = [{ key: null, value: '' }
        , { key: 'UNO', value: 'Un único parte' }
        , { key: 'DIA', value: 'Un parte por día' }
        , { key: 'SEM', value: 'Un parte por semana' }
        , { key: 'MES', value: 'Un parte por mes' }
    ];
    /**
     * Defined selection pattern DS_TipoRegistroHorario for String data type
     */
    public static DS_TIPOREGISTROHORARIO = [{ key: null, value: '' }
        , { key: 'E', value: 'Entrada' }
        , { key: 'S', value: 'Salida' }
    ];
    /**
     * Defined selection pattern DS_EstadoPlanificador for String data type
     */
    public static DS_ESTADOPLANIFICADOR = [{ key: null, value: '' }
        , { key: 'C', value: 'Creado' }
        , { key: 'S', value: 'Solicitado' }
        , { key: 'A', value: 'Aprobado' }
        , { key: 'R', value: 'Rechazado' }
        , { key: 'X', value: 'Anulado' }
        , { key: 'F', value: '' }
    ];
    /**
     * Defined selection pattern DS_Tipo_Planificador for String data type
     */
    public static DS_TIPO_PLANIFICADOR = [{ key: null, value: '' }
        , { key: 'V', value: 'Vacaciones' }
        , { key: 'P', value: 'Permiso' }
        , { key: 'B', value: 'Baja' }
        , { key: 'F', value: '' }
    ];
    /**
     * Defined selection pattern DS_Aprobar_Denegar for String data type
     */
    public static DS_APROBAR_DENEGAR = [{ key: null, value: '' }
        , { key: 'A', value: 'Aprobar' }
        , { key: 'D', value: 'Denegar' }
    ];
    /**
     * Defined selection pattern DS_TipoAccionLnOrden for Nat data type
     */
    public static DS_TIPOACCIONLNORDEN = [{ key: null, value: '' }
        , { key: 1, value: 'Alta' }
        , { key: 2, value: 'Reparación' }
        , { key: 3, value: 'Sustitución' }
        , { key: 4, value: 'Eliminación' }
        , { key: 5, value: 'Revisión' }
        , { key: 6, value: 'Retimbrado' }
        , { key: 7, value: 'Recarga' }
        , { key: 8, value: 'Otro' }
    ];
    /**
     * Defined selection pattern DS_DarDeAltaOVincularExistente for String data type
     */
    public static DS_DARDEALTAOVINCULAREXISTENTE = [{ key: null, value: '' }
        , { key: 'A', value: 'Dar de alta un nuevo artículo de servicio y vincular al art. de proveedor' }
        , { key: 'V', value: 'Vincular con un artículo/servicio ya existente' }
    ];
    /**
     * Defined selection pattern DS_PedidoCompra_Estado for String data type
     */
    public static DS_PEDIDOCOMPRA_ESTADO = [{ key: null, value: '' }
        , { key: 'C', value: 'Creado' }
        , { key: 'E', value: 'Enviado' }
        , { key: 'R', value: 'Recibido' }
        , { key: 'A', value: 'Anulado' }
    ];
    /**
     * Defined selection pattern DS_Remesa_Estado for String data type
     */
    public static DS_REMESA_ESTADO = [{ key: null, value: '' }
        , { key: 'A', value: 'Abierta' }
        , { key: 'E', value: 'Emitida' }
        , { key: 'C', value: 'Cobrada' }
    ];
    /**
     * Defined selection pattern DS_PlantillaImp_Origen for String data type
     */
    public static DS_PLANTILLAIMP_ORIGEN = [{ key: null, value: '' }
        , { key: 'C', value: 'Campo' }
        , { key: 'D', value: 'Valor por defecto' }
        , { key: 'V', value: 'Vacío' }
    ];
    /**
     * Defined selection pattern DS_TipoFirma for String data type
     */
    public static DS_TIPOFIRMA = [{ key: null, value: '' }
        , { key: 'R', value: 'Remota' }
        , { key: 'B', value: 'Biométrica' }
    ];
    /**
     * Defined selection pattern DS_ProyTipoZona for Int data type
     */
    public static DS_PROYTIPOZONA = [{ key: null, value: '' }
        , { key: 1, value: 'Rural' }
        , { key: 2, value: 'Urbana' }
        , { key: 3, value: 'Industrial' }
        , { key: 4, value: 'Urbanización' }
        , { key: 5, value: 'Otra' }
    ];
    /**
     * Defined selection pattern DS_ProyTipoLocal for Int data type
     */
    public static DS_PROYTIPOLOCAL = [{ key: null, value: '' }
        , { key: 1, value: 'Edificio' }
        , { key: 2, value: 'Local' }
        , { key: 3, value: 'Nave' }
        , { key: 4, value: 'Casa aislada' }
        , { key: 5, value: 'Otro' }
    ];
    /**
     * Defined selection pattern DS_ProyInmuAnexos for Int data type
     */
    public static DS_PROYINMUANEXOS = [{ key: null, value: '' }
        , { key: 1, value: 'Alto riesgo robo' }
        , { key: 2, value: 'Bajo riesgo robo' }
    ];
    /**
     * Defined selection pattern DS_ProyAltaMediaBaja for Int data type
     */
    public static DS_PROYALTAMEDIABAJA = [{ key: null, value: '' }
        , { key: 1, value: 'Alta' }
        , { key: 2, value: 'Media' }
        , { key: 3, value: 'Baja' }
    ];
    /**
     * Defined selection pattern DS_ProyDistPolicia for Int data type
     */
    public static DS_PROYDISTPOLICIA = [{ key: null, value: '' }
        , { key: 1, value: 'Lejos' }
        , { key: 2, value: 'Distancia media' }
        , { key: 3, value: 'Cerca' }
    ];
    /**
     * Defined selection pattern DS_ProyOcupacion for Int data type
     */
    public static DS_PROYOCUPACION = [{ key: null, value: '' }
        , { key: 1, value: 'Habitual' }
        , { key: 2, value: 'Fin de semana' }
        , { key: 3, value: 'Ocasional' }
    ];
    /**
     * Defined selection pattern DS_ProyIluminacion for Int data type
     */
    public static DS_PROYILUMINACION = [{ key: null, value: '' }
        , { key: 1, value: 'Correcta' }
        , { key: 2, value: 'Escasa' }
        , { key: 3, value: 'Baja' }
    ];
    /**
     * Defined selection pattern DS_ProyGuardiaSeg for Int data type
     */
    public static DS_PROYGUARDIASEG = [{ key: null, value: '' }
        , { key: 1, value: 'Sí' }
        , { key: 2, value: 'No' }
        , { key: 3, value: 'Por horas' }
    ];
    /**
     * Defined selection pattern DS_ProyComunicaciones for Int data type
     */
    public static DS_PROYCOMUNICACIONES = [{ key: null, value: '' }
        , { key: 1, value: 'RTC' }
        , { key: 2, value: 'ADSL' }
        , { key: 3, value: 'Fibra' }
    ];
    /**
     * Defined selection pattern DS_ProyCobertura for Int data type
     */
    public static DS_PROYCOBERTURA = [{ key: null, value: '' }
        , { key: 1, value: 'Suficiente' }
        , { key: 2, value: 'Escasa' }
    ];
    /**
     * Defined selection pattern DS_ProyAltoMedioBajo for Int data type
     */
    public static DS_PROYALTOMEDIOBAJO = [{ key: null, value: '' }
        , { key: 1, value: 'Alto' }
        , { key: 2, value: 'Medio' }
        , { key: 3, value: 'Bajo' }
    ];
    /**
     * Defined selection pattern DS_Proy_Bajo_a_Critico for Int data type
     */
    public static DS_PROY_BAJO_A_CRITICO = [{ key: null, value: '' }
        , { key: 1, value: 'Bajo' }
        , { key: 2, value: 'Moderado' }
        , { key: 3, value: 'Alto' }
        , { key: 4, value: 'Muy Alto' }
        , { key: 5, value: 'Crítico' }
    ];
    /**
     * Defined selection pattern DS_ProyDispLlaves for Int data type
     */
    public static DS_PROYDISPLLAVES = [{ key: null, value: '' }
        , { key: 1, value: 'Sí' }
        , { key: 2, value: 'No' }
        , { key: 3, value: 'Acuda' }
    ];
    /**
     * Defined selection pattern DS_OpComercial_Prioridad for String data type
     */
    public static DS_OPCOMERCIAL_PRIORIDAD = [{ key: null, value: '' }
        , { key: 'B', value: 'Baja' }
        , { key: 'N', value: 'Normal' }
        , { key: 'A', value: 'Alta' }
        , { key: 'U', value: 'Urgente' }
    ];
    /**
     * Defined selection pattern DS_ClaseOrigen for Nat data type
     */
    public static DS_CLASEORIGEN = [{ key: null, value: '' }
        , { key: 1, value: 'Cliente' }
        , { key: 2, value: 'Proveedor' }
        , { key: 3, value: 'Empresa' }
        , { key: 4, value: 'FacturaVenta' }
        , { key: 5, value: 'FacturaCompra' }
        , { key: 6, value: 'Instalacion' }
        , { key: 7, value: 'Sistema' }
        , { key: 8, value: 'Presupuesto' }
        , { key: 9, value: 'Contrato' }
        , { key: 10, value: 'ParteTrabajo' }
    ];
    /**
     * Defined selection pattern DS_Cliente_SubtipoFactA3 for String data type
     */
    public static DS_CLIENTE_SUBTIPOFACTA3 = [{ key: null, value: '' }
        , { key: '01', value: 'Operaciones interiores sujetas a IVA' }
        , { key: '02', value: 'Operaciones exentas sin derecho a deducción' }
        , { key: '03', value: 'Entregas intracomunitarias' }
        , { key: '04', value: 'Entregas intracomunitarias Ops. Triangulares' }
        , { key: '05', value: 'Operaciones con Canarias, Ceuta y Melilla' }
        , { key: '06', value: 'Exportaciones' }
        , { key: '07', value: 'Otras operaciones no sujetas a IVA' }
        , { key: '08', value: 'Otras operaciones no sujetas o inversión del sujeto pasivo con derecho a devolución' }
        , { key: '09', value: 'Otras operaciones exentas con derecho a deducción' }
    ];
    /**
     * Defined selection pattern DS_Proveedor_SubtipoFactA3 for String data type
     */
    public static DS_PROVEEDOR_SUBTIPOFACTA3 = [{ key: null, value: '' }
        , { key: '01', value: 'Operaciones interiores IVA deducible' }
        , { key: '02', value: 'Compensaciones agrarias' }
        , { key: '03', value: 'Adquisiciones intracomunitarias' }
        , { key: '04', value: 'Inversión del Sujeto Pasivo' }
        , { key: '06', value: 'Importaciones' }
        , { key: '07', value: 'IVA no deducible' }
    ];
    /**
     * Defined selection pattern DS_ImpresoA3 for String data type
     */
    public static DS_IMPRESOA3 = [{ key: null, value: '' }
        , { key: '01', value: '347' }
        , { key: '02', value: '349 Bienes' }
        , { key: '03', value: '115 Dinerarias' }
        , { key: '04', value: '115 Especie' }
        , { key: '05', value: '110 Profesionales Dinerarias' }
        , { key: '06', value: '110 Profesionales en especie' }
        , { key: '07', value: '110 Agrarios Dinerarias' }
        , { key: '08', value: '110 Agrarios en especie' }
        , { key: '09', value: 'Módulos empresariales dinerarias' }
        , { key: '10', value: 'Módulos empresariales en especie' }
        , { key: '11', value: '349 Servicios' }
    ];
    /**
     * Defined selection pattern DS_EnlaceContableTipo for String data type
     */
    public static DS_ENLACECONTABLETIPO = [{ key: null, value: '' }
        , { key: 'A', value: 'Automático' }
        , { key: 'D', value: 'Bajo demanda' }
    ];
    /**
     * Defined selection pattern DS_TipoVia for String data type
     */
    public static DS_TIPOVIA = [{ key: null, value: '' }
        , { key: 'AD', value: 'Aldea' }
        , { key: 'AL', value: 'Alameda' }
        , { key: 'AP', value: 'Apartamento' }
        , { key: 'AV', value: 'Avenida' }
        , { key: 'BL', value: 'Bloque' }
        , { key: 'BO', value: 'Barrio' }
        , { key: 'CH', value: 'Chalet' }
        , { key: 'CL', value: 'Calle' }
        , { key: 'CM', value: 'Camino' }
        , { key: 'CO', value: 'Colonia' }
        , { key: 'CR', value: 'Carretera' }
        , { key: 'CS', value: 'Caserio' }
        , { key: 'CT', value: 'Cuesta' }
        , { key: 'ED', value: 'Edificio' }
        , { key: 'GL', value: 'Glorieta' }
        , { key: 'GR', value: 'Grupo' }
        , { key: 'LG', value: 'Lugar' }
        , { key: 'MC', value: 'Mercado' }
        , { key: 'MN', value: 'Municipio' }
        , { key: 'MZ', value: 'Manzana' }
        , { key: 'PB', value: 'Poblado' }
        , { key: 'PG', value: 'Polígono' }
        , { key: 'PJ', value: 'Pasaje' }
        , { key: 'PQ', value: 'Parque' }
        , { key: 'PA', value: 'Plaza' }
        , { key: 'PR', value: 'Prolongación' }
        , { key: 'PS', value: 'Paseo' }
        , { key: 'RB', value: 'Rambla' }
        , { key: 'RD', value: 'Ronda' }
        , { key: 'TR', value: 'Travesía' }
        , { key: 'UR', value: 'Urbanización' }
    ];
    /**
     * Defined selection pattern DS_CodigosRectificativa for String data type
     */
    public static DS_CODIGOSRECTIFICATIVA = [{ key: null, value: '' }
        , { key: '01', value: 'Número de la factura' }
        , { key: '02', value: 'Serie de la factura' }
        , { key: '03', value: 'Fecha expedición' }
        , { key: '04', value: 'Nombre y apellidos/Razón social - Emisor' }
        , { key: '05', value: 'Nombre y apellidos/Razón social - Receptor' }
        , { key: '06', value: 'Identificación fiscal Emisor/Obligado' }
        , { key: '07', value: 'Identificación fiscal Receptor' }
        , { key: '08', value: 'Domicilio Emisor/Obligado' }
        , { key: '09', value: 'Domicilio Receptor' }
        , { key: '10', value: 'Detalle Operación' }
        , { key: '11', value: 'Porcentaje impositivo a aplicar' }
        , { key: '12', value: 'Cuota tributaria a aplicar' }
        , { key: '13', value: 'Fecha/Periodo a aplicar' }
        , { key: '14', value: 'Clase de factura' }
        , { key: '15', value: 'Literales legales' }
        , { key: '16', value: 'Base imponible' }
        , { key: '80', value: 'Cálculo de cuotas repercutidas' }
        , { key: '81', value: 'Cálculo de cuotas retenidas' }
        , { key: '82', value: 'Base imponible modificada por devolución de envases/embalajes' }
        , { key: '83', value: 'Base imponible modificada por descuentos y bonificaciones' }
        , { key: '84', value: 'Base imponible modificada por resolución firme, judicial o administrativa' }
        , { key: '85', value: 'Base imponible modificada cuotas repercutidas no satisfechas. Auto de declaración de concurso' }
    ];
    /**
     * Defined selection pattern DS_CorrectionMethod for String data type
     */
    public static DS_CORRECTIONMETHOD = [{ key: null, value: '' }
        , { key: '01', value: 'Rectificación modelo íntegro' }
        , { key: '02', value: 'Rectificación modelo por diferencias' }
        , { key: '03', value: 'Rectificación por descuento por volumen de operaciones durante un periodo' }
        , { key: '04', value: 'Autorizadas por la Agencia Tributaria' }
    ];
    /**
     * Defined selection pattern DS_PaymentMeansType for String data type
     */
    public static DS_PAYMENTMEANSTYPE = [{ key: null, value: '' }
        , { key: '01', value: 'Al contado' }
        , { key: '02', value: 'Recibo Domiciliado' }
        , { key: '03', value: 'Recibo' }
        , { key: '04', value: 'Transferencia' }
        , { key: '05', value: 'Letra Aceptada' }
        , { key: '06', value: 'Crédito Documentario' }
        , { key: '07', value: 'Contrato Adjudicación' }
        , { key: '08', value: 'Letra de cambio' }
        , { key: '09', value: 'Pagaré a la  Orden' }
        , { key: '10', value: 'Pagaré No a la Orden' }
        , { key: '11', value: 'Cheque' }
        , { key: '12', value: 'Reposición' }
        , { key: '13', value: 'Especiales' }
        , { key: '14', value: 'Compensación' }
        , { key: '15', value: 'Giro postal' }
        , { key: '16', value: 'Cheque conformado' }
        , { key: '17', value: 'Cheque bancario' }
        , { key: '18', value: 'Pago contra reembolso' }
        , { key: '19', value: 'Pago mediante tarjeta' }
    ];
    /**
     * Defined selection pattern DS_TipoItemControlable for String data type
     */
    public static DS_TIPOITEMCONTROLABLE = [{ key: null, value: '' }
        , { key: 'L', value: 'Llave' }
        , { key: 'P', value: 'Portátil' }
        , { key: 'T', value: 'Tablet' }
        , { key: 'M', value: 'Móvil' }
        , { key: 'V', value: 'Vehículo' }
        , { key: 'H', value: 'Material para técnico' }
        , { key: 'O', value: 'Otro' }
    ];
    /**
     * Defined selection pattern DS_Activo_Inactivo for String data type
     */
    public static DS_ACTIVO_INACTIVO = [{ key: null, value: '' }
        , { key: 'A', value: 'Activo' }
        , { key: 'I', value: 'Inactivo' }
    ];
    /**
     * Defined selection pattern DS_EstadoAviso for String data type
     */
    public static DS_ESTADOAVISO = [{ key: null, value: '' }
        , { key: 'C', value: 'Creado' }
        , { key: 'P', value: 'En proceso' }
        , { key: 'A', value: 'Planificado' }
        , { key: 'F', value: 'Finalizado' }
    ];
    /**
     * Defined selection pattern DS_TipoDocPortalCli for String data type
     */
    public static DS_TIPODOCPORTALCLI = [{ key: null, value: '' }
        , { key: 'Albarán Venta', value: 'Albarán' }
        , { key: 'Contrato', value: 'Contrato' }
        , { key: 'Factura', value: 'Factura' }
        , { key: 'Factura electrónica', value: 'Factura electrónica' }
        , { key: 'ParteTrabajo', value: 'Parte de trabajo' }
        , { key: 'Presupuesto', value: 'Presupuesto' }
    ];
}
