import { ModelConstants } from './common/model.constants';

export class Configuration {
    public BASE_URL = '';
    public URL_LOG_ERROR = '';
    public NAVCONSTANTS: any[] = [
        {
            className: ModelConstants.Archivoenlacecontable.name,
            navKey: 'archivoenlacecontable',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Importaciondatos.name,
            navKey: 'importaciondatos',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Localizacion.name,
            navKey: 'localizacion',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Perfil.name,
            navKey: 'perfil',
            ius: [
                { name: ModelConstants.Perfil.puperfiles,
                    navKey: 'p_perfiles' }
            ]
        }
        , {
            className: ModelConstants.Usuario.name,
            navKey: 'usuario',
            ius: [
                { name: ModelConstants.Usuario.puusuariosdef,
                    navKey: 'p_usuariosdef' }
            ]
        }
        , {
            className: ModelConstants.Controlhorario.name,
            navKey: 'controlhorario',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Planificador.name,
            navKey: 'planificador',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Registroanualpermisos.name,
            navKey: 'registroanualpermisos',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Registrohorario.name,
            navKey: 'registrohorario',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Solicitudpermiso.name,
            navKey: 'solicitudpermiso',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Iu.name,
            navKey: 'iu',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Iuaction.name,
            navKey: 'iuaction',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Iuattribute.name,
            navKey: 'iuattribute',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Iudetail.name,
            navKey: 'iudetail',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Iumenuitem.name,
            navKey: 'iumenuitem',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Iunavigation.name,
            navKey: 'iunavigation',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Iurelation.name,
            navKey: 'iurelation',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Iuviewuser.name,
            navKey: 'iuviewuser',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Profile.name,
            navKey: 'profile',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Profileiu.name,
            navKey: 'profileiu',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Profileiuact.name,
            navKey: 'profileiuact',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Profileiuattr.name,
            navKey: 'profileiuattr',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Profileiudetail.name,
            navKey: 'profileiudetail',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Profileiumenuitem.name,
            navKey: 'profileiumenuitem',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Profileiunav.name,
            navKey: 'profileiunav',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Profileiurelation.name,
            navKey: 'profileiurelation',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Viewprofile.name,
            navKey: 'viewprofile',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Almacen.name,
            navKey: 'almacen',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Articuloenalmacen.name,
            navKey: 'articuloenalmacen',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Articuloservicio.name,
            navKey: 'articuloservicio',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Movimientoartenalmacen.name,
            navKey: 'movimientoartenalmacen',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Nroseriearticulo.name,
            navKey: 'nroseriearticulo',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Regularizacionartenalmacen.name,
            navKey: 'regularizacionartenalmacen',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Reservamanual.name,
            navKey: 'reservamanual',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Subarticulokit.name,
            navKey: 'subarticulokit',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Agentecliente.name,
            navKey: 'agentecliente',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Cliente.name,
            navKey: 'cliente',
            ius: [
                { name: ModelConstants.Cliente.siuutmodificardirfiscal,
                    navKey: 'siu_tmodificardirfiscal' }
                , { name: ModelConstants.Cliente.siuutmodificarpersjuridica,
                    navKey: 'siu_tmodificarpersjuridica' }
                , { name: ModelConstants.Cliente.siuutmodificarlogo,
                    navKey: 'siu_tmodificarlogo' }
                , { name: ModelConstants.Cliente.siuutmodificaradmonfinca,
                    navKey: 'siu_tmodificaradmonfinca' }
                , { name: ModelConstants.Cliente.siuumodificardatoscontablescli,
                    navKey: 'siu_modificardatoscontablescli' }
                , { name: ModelConstants.Cliente.siuutmodificarcli,
                    navKey: 'siu_tmodificarcli' }
                , { name: ModelConstants.Cliente.mdiuucliente,
                    navKey: 'mdiu_cliente' }
                , { name: ModelConstants.Cliente.mdiuuclienteportalcli,
                    navKey: 'mdiu_clienteportalcli' }
                , { name: ModelConstants.Cliente.puclientes,
                    navKey: 'p_clientes' }
            ]
        }
        , {
            className: ModelConstants.Contadoremail.name,
            navKey: 'contadoremail',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Enviomasivocliente.name,
            navKey: 'enviomasivocliente',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Enviomasivoemail.name,
            navKey: 'enviomasivoemail',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Agentoportunidad.name,
            navKey: 'agentoportunidad',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Comentariooc.name,
            navKey: 'comentariooc',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Oportunidadcomercial.name,
            navKey: 'oportunidadcomercial',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Albarancompra.name,
            navKey: 'albarancompra',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Articuloproveedor.name,
            navKey: 'articuloproveedor',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Contactoproveedor.name,
            navKey: 'contactoproveedor',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Facturacompra.name,
            navKey: 'facturacompra',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Lnalbarancompra.name,
            navKey: 'lnalbarancompra',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Lnfacturacompra.name,
            navKey: 'lnfacturacompra',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Lnpedidocompra.name,
            navKey: 'lnpedidocompra',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Pedidocompra.name,
            navKey: 'pedidocompra',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Plantillaimportacion.name,
            navKey: 'plantillaimportacion',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Proveedor.name,
            navKey: 'proveedor',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Reciboproveedor.name,
            navKey: 'reciboproveedor',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Subtotalalbarancompra.name,
            navKey: 'subtotalalbarancompra',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Subtotalfacturacompra.name,
            navKey: 'subtotalfacturacompra',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Subtotalpedidocompra.name,
            navKey: 'subtotalpedidocompra',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Vunecesidadescompra.name,
            navKey: 'v_necesidadescompra',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Vucontrolcostes.name,
            navKey: 'v_controlcostes',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Vumodelosmasvendidos.name,
            navKey: 'v_modelosmasvendidos',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Vupreciosporproveedor.name,
            navKey: 'v_preciosporproveedor',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Vuproductividadtec.name,
            navKey: 'v_productividadtec',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Vusubidaprecios.name,
            navKey: 'v_subidaprecios',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Vutiemposavisos.name,
            navKey: 'v_tiemposavisos',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Vutiemposmediosavisos.name,
            navKey: 'v_tiemposmediosavisos',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Documento.name,
            navKey: 'documento',
            ius: [
                { name: ModelConstants.Documento.siuudescargar,
                    navKey: 'siu_descargar' }
                , { name: ModelConstants.Documento.siuudescargaruout,
                    navKey: 'siu_descargar_out' }
                , { name: ModelConstants.Documento.siuuedituinstance,
                    navKey: 'siu_edit_instance' }
                , { name: ModelConstants.Documento.siuuabrirnuevaventana,
                    navKey: 'siu_abrirnuevaventana' }
                , { name: ModelConstants.Documento.siuuabrirnuevaventanauout,
                    navKey: 'siu_abrirnuevaventana_out' }
                , { name: ModelConstants.Documento.siuutcrear4cliente,
                    navKey: 'siu_tcrear4cliente' }
                , { name: ModelConstants.Documento.siuutobtenerfirmado4contrato,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Documento.siuutobtenerfirmado4presupuest,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Documento.siuutobtenerfirmado4parte,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Documento.piuudocumentoshat,
                    navKey: 'piu_documentoshat' }
                , { name: ModelConstants.Documento.piuudocumentoversant,
                    navKey: 'piu_documentoversant' }
            ]
        }
        , {
            className: ModelConstants.Firmadocumento.name,
            navKey: 'firmadocumento',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Firmanotifica.name,
            navKey: 'firmanotifica',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Firmante.name,
            navKey: 'firmante',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Imagen.name,
            navKey: 'imagen',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Elementorecom.name,
            navKey: 'elementorecom',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Elerecomendado.name,
            navKey: 'elerecomendado',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Proyectocctv.name,
            navKey: 'proyectocctv',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Proyectog2.name,
            navKey: 'proyectog2',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Proyectog3.name,
            navKey: 'proyectog3',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Anomalia.name,
            navKey: 'anomalia',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Checklist.name,
            navKey: 'checklist',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Checklistot.name,
            navKey: 'checklistot',
            ius: [
                { name: ModelConstants.Checklistot.mdiuuchecklistotutreeuparte,
                    navKey: 'mdiu_checklistot_tree_parte' }
                , { name: ModelConstants.Checklistot.mdiuuchecklistotutreeuorden,
                    navKey: 'mdiu_checklistot_tree_orden' }
                , { name: ModelConstants.Checklistot.mdiuuchecklistotutreeuportalcl,
                    navKey: 'mdiu_checklistot_tree_portalcl' }
            ]
        }
        , {
            className: ModelConstants.Comprobacion.name,
            navKey: 'comprobacion',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Comprobacionot.name,
            navKey: 'comprobacionot',
            ius: [
                { name: ModelConstants.Comprobacionot.mdiuucomprobacionotutreeuparte,
                    navKey: 'mdiu_comprobacionot_tree_parte' }
                , { name: ModelConstants.Comprobacionot.mdiuucomprobacionotutreeuporta,
                    navKey: 'mdiu_comprobacionot_tree_porta' }
            ]
        }
        , {
            className: ModelConstants.Grupocomp.name,
            navKey: 'grupocomp',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Grupocompot.name,
            navKey: 'grupocompot',
            ius: [
                { name: ModelConstants.Grupocompot.mdiuugrupocompotutreeuparte,
                    navKey: 'mdiu_grupocompot_tree_parte' }
                , { name: ModelConstants.Grupocompot.mdiuugrupocompotutreeuorden,
                    navKey: 'mdiu_grupocompot_tree_orden' }
                , { name: ModelConstants.Grupocompot.mdiuugrupocompotutreeuportalcl,
                    navKey: 'mdiu_grupocompot_tree_portalcl' }
            ]
        }
        , {
            className: ModelConstants.Contrato.name,
            navKey: 'contrato',
            ius: [
                { name: ModelConstants.Contrato.mdiuucontrato,
                    navKey: 'mdiu_contrato' }
                , { name: ModelConstants.Contrato.mdiuucontratoportalcli,
                    navKey: 'mdiu_contratoportalcli' }
                , { name: ModelConstants.Contrato.piuucontrato,
                    navKey: 'piu_contrato' }
                , { name: ModelConstants.Contrato.piuucontratoportalcli,
                    navKey: 'piu_contratoportalcli' }
            ]
        }
        , {
            className: ModelConstants.Cuota.name,
            navKey: 'cuota',
            ius: [
                { name: ModelConstants.Cuota.mdiuucuotacontrato,
                    navKey: 'mdiu_cuotacontrato' }
                , { name: ModelConstants.Cuota.piuucuotacontrato,
                    navKey: 'piu_cuotacontrato' }
            ]
        }
        , {
            className: ModelConstants.Lncontrato.name,
            navKey: 'lncontrato',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Lnobjetoctr.name,
            navKey: 'lnobjetoctr',
            ius: [
                { name: ModelConstants.Lnobjetoctr.mdiuulnobjetoctr,
                    navKey: 'mdiu_lnobjetoctr' }
                , { name: ModelConstants.Lnobjetoctr.mdiuulnobjetoctrportalcli,
                    navKey: 'mdiu_lnobjetoctrportalcli' }
                , { name: ModelConstants.Lnobjetoctr.piuulnobjetoctr,
                    navKey: 'piu_lnobjetoctr' }
            ]
        }
        , {
            className: ModelConstants.Objetocontrato.name,
            navKey: 'objetocontrato',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Subtotalcontrato.name,
            navKey: 'subtotalcontrato',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Alarmatecnica.name,
            navKey: 'alarmatecnica',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Contacto.name,
            navKey: 'contacto',
            ius: [
                { name: ModelConstants.Contacto.siuudeleteuinstance,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Contacto.siuuedituinstance,
                    navKey: 'siu_edit_instance' }
                , { name: ModelConstants.Contacto.siuutcrear4instalacion,
                    navKey: 'siu_tcrear4instalacion' }
                , { name: ModelConstants.Contacto.siuutcrear4sistema,
                    navKey: 'siu_tcrear4sistema' }
                , { name: ModelConstants.Contacto.piuusistema,
                    navKey: 'piu_sistema' }
            ]
        }
        , {
            className: ModelConstants.Direccionip.name,
            navKey: 'direccionip',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Elementosistema.name,
            navKey: 'elementosistema',
            ius: [
                { name: ModelConstants.Elementosistema.mdiuuelementosistema,
                    navKey: 'mdiu_elementosistema' }
                , { name: ModelConstants.Elementosistema.piuuelementosistema,
                    navKey: 'piu_elementosistema' }
            ]
        }
        , {
            className: ModelConstants.Instalacion.name,
            navKey: 'instalacion',
            ius: [
                { name: ModelConstants.Instalacion.siuutmodificarcli,
                    navKey: 'siu_tmodificarcli' }
                , { name: ModelConstants.Instalacion.siuutmodatoscontablesportalcli,
                    navKey: 'siu_tmodatoscontablesportalcli' }
                , { name: ModelConstants.Instalacion.mdiuuinstalacion,
                    navKey: 'mdiu_instalacion' }
                , { name: ModelConstants.Instalacion.mdiuuinstalacionportalcli,
                    navKey: 'mdiu_instalacionportalcli' }
                , { name: ModelConstants.Instalacion.piuuinstalacion,
                    navKey: 'piu_instalacion' }
                , { name: ModelConstants.Instalacion.piuuinstalaciondef,
                    navKey: 'piu_instalaciondef' }
                , { name: ModelConstants.Instalacion.piuuinstalacionportalcli,
                    navKey: 'piu_instalacionportalcli' }
            ]
        }
        , {
            className: ModelConstants.Moddiseno.name,
            navKey: 'moddiseno',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Parametrosistema.name,
            navKey: 'parametrosistema',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Servicio.name,
            navKey: 'servicio',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Sistema.name,
            navKey: 'sistema',
            ius: [
                { name: ModelConstants.Sistema.siuutimprimir,
                    navKey: 'siu_timprimir' }
                , { name: ModelConstants.Sistema.siuutimprimiruout,
                    navKey: 'siu_timprimir_out' }
                , { name: ModelConstants.Sistema.mdiuusistema,
                    navKey: 'mdiu_sistema' }
                , { name: ModelConstants.Sistema.piuusistema,
                    navKey: 'piu_sistema' }
            ]
        }
        , {
            className: ModelConstants.Usuariocra.name,
            navKey: 'usuariocra',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Vueleminstal.name,
            navKey: 'v_eleminstal',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Vugrupoelem.name,
            navKey: 'v_grupoelem',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Mantenimiento.name,
            navKey: 'mantenimiento',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Periodoinactivo.name,
            navKey: 'periodoinactivo',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Plantillamantenimiento.name,
            navKey: 'plantillamantenimiento',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Empcontratista.name,
            navKey: 'empcontratista',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Lnordentrabajo.name,
            navKey: 'lnordentrabajo',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Logreplan.name,
            navKey: 'logreplan',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Ordentrabajo.name,
            navKey: 'ordentrabajo',
            ius: [
                { name: ModelConstants.Ordentrabajo.mdiuuordentrabajo,
                    navKey: 'mdiu_ordentrabajo' }
                , { name: ModelConstants.Ordentrabajo.mdiuuordentrabajoeconimicos,
                    navKey: 'mdiu_ordentrabajoeconimicos' }
                , { name: ModelConstants.Ordentrabajo.mdiuuotobramodsistema,
                    navKey: 'mdiu_otobramodsistema' }
                , { name: ModelConstants.Ordentrabajo.piuuordentrabajo,
                    navKey: 'piu_ordentrabajo' }
            ]
        }
        , {
            className: ModelConstants.Partetrabajo.name,
            navKey: 'partetrabajo',
            ius: [
                { name: ModelConstants.Partetrabajo.mdiuupartetrabajoueconomico,
                    navKey: 'mdiu_partetrabajo_economico' }
                , { name: ModelConstants.Partetrabajo.mdiuupartetrabajo,
                    navKey: 'mdiu_partetrabajo' }
                , { name: ModelConstants.Partetrabajo.mdiuupartetrabajoportalcli,
                    navKey: 'mdiu_partetrabajoportalcli' }
                , { name: ModelConstants.Partetrabajo.piuupartetrabajo,
                    navKey: 'piu_partetrabajo' }
                , { name: ModelConstants.Partetrabajo.piuupartetrabajoportalcli,
                    navKey: 'piu_partetrabajoportalcli' }
            ]
        }
        , {
            className: ModelConstants.Subtotalordentrabajo.name,
            navKey: 'subtotalordentrabajo',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Tarea.name,
            navKey: 'tarea',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Agentepresupuesto.name,
            navKey: 'agentepresupuesto',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Comisionpresupuesto.name,
            navKey: 'comisionpresupuesto',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Grupopresupuesto.name,
            navKey: 'grupopresupuesto',
            ius: [
                { name: ModelConstants.Grupopresupuesto.mdiuugrupopresupuesto,
                    navKey: 'mdiu_grupopresupuesto' }
                , { name: ModelConstants.Grupopresupuesto.mdiuugrupopresupuestoversiones,
                    navKey: 'mdiu_grupopresupuestoversiones' }
                , { name: ModelConstants.Grupopresupuesto.mdiuugrupopresupuestoportalcli,
                    navKey: 'mdiu_grupopresupuestoportalcli' }
                , { name: ModelConstants.Grupopresupuesto.piuugrupopresupuesto,
                    navKey: 'piu_grupopresupuesto' }
            ]
        }
        , {
            className: ModelConstants.Grupopresupuestoplantilla.name,
            navKey: 'grupopresupuestoplantilla',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Lnpresupuesto.name,
            navKey: 'lnpresupuesto',
            ius: [
                { name: ModelConstants.Lnpresupuesto.mdiuulnpresupuesto,
                    navKey: 'mdiu_lnpresupuesto' }
                , { name: ModelConstants.Lnpresupuesto.mdiuulnpresupuestoversiones,
                    navKey: 'mdiu_lnpresupuestoversiones' }
                , { name: ModelConstants.Lnpresupuesto.mdiuulnpresupuestoportalcli,
                    navKey: 'mdiu_lnpresupuestoportalcli' }
            ]
        }
        , {
            className: ModelConstants.Lnpresupuestoplantilla.name,
            navKey: 'lnpresupuestoplantilla',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Plantillapresupuesto.name,
            navKey: 'plantillapresupuesto',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Presupuesto.name,
            navKey: 'presupuesto',
            ius: [
                { name: ModelConstants.Presupuesto.mdiuupresupuesto,
                    navKey: 'mdiu_presupuesto' }
                , { name: ModelConstants.Presupuesto.mdiuupresupuestoversiones,
                    navKey: 'mdiu_presupuestoversiones' }
                , { name: ModelConstants.Presupuesto.mdiuupresupuestocontrato,
                    navKey: 'mdiu_presupuestocontrato' }
                , { name: ModelConstants.Presupuesto.mdiuupresupuestoportalcli,
                    navKey: 'mdiu_presupuestoportalcli' }
                , { name: ModelConstants.Presupuesto.piuupresupuestoselec,
                    navKey: 'piu_presupuestoselec' }
                , { name: ModelConstants.Presupuesto.piuupresupuestoportalcli,
                    navKey: 'piu_presupuestoportalcli' }
            ]
        }
        , {
            className: ModelConstants.Subtotalpresupuesto.name,
            navKey: 'subtotalpresupuesto',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Anyolaboral.name,
            navKey: 'anyolaboral',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Campanyacomercial.name,
            navKey: 'campanyacomercial',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Codigopostal.name,
            navKey: 'codigopostal',
            ius: [
                { name: ModelConstants.Codigopostal.pucodigospostales,
                    navKey: 'p_codigospostales' }
            ]
        }
        , {
            className: ModelConstants.Cra.name,
            navKey: 'cra',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Ctabancaria.name,
            navKey: 'ctabancaria',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Departamento.name,
            navKey: 'departamento',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Empresa.name,
            navKey: 'empresa',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Entidadbancaria.name,
            navKey: 'entidadbancaria',
            ius: [
                { name: ModelConstants.Entidadbancaria.puentidadbancaria,
                    navKey: 'p_entidadbancaria' }
            ]
        }
        , {
            className: ModelConstants.Estadooportunidadcomercial.name,
            navKey: 'estadooportunidadcomercial',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Familia.name,
            navKey: 'familia',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Festivo.name,
            navKey: 'festivo',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Formapago.name,
            navKey: 'formapago',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Grupoempresa.name,
            navKey: 'grupoempresa',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Grupofacturacion.name,
            navKey: 'grupofacturacion',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Importeespecialcliente.name,
            navKey: 'importeespecialcliente',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Marca.name,
            navKey: 'marca',
            ius: [
                { name: ModelConstants.Marca.pumarca,
                    navKey: 'p_marca' }
            ]
        }
        , {
            className: ModelConstants.Modelodocumento.name,
            navKey: 'modelodocumento',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Modelosistema.name,
            navKey: 'modelosistema',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Motivo.name,
            navKey: 'motivo',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Municipio.name,
            navKey: 'municipio',
            ius: [
                { name: ModelConstants.Municipio.mdumunicipios,
                    navKey: 'md_municipios' }
                , { name: ModelConstants.Municipio.pumunicipios,
                    navKey: 'p_municipios' }
            ]
        }
        , {
            className: ModelConstants.Noconformidad.name,
            navKey: 'noconformidad',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Normativa.name,
            navKey: 'normativa',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Operativacctv.name,
            navKey: 'operativacctv',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Origenoportunidad.name,
            navKey: 'origenoportunidad',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Pais.name,
            navKey: 'pais',
            ius: [
                { name: ModelConstants.Pais.pupaises,
                    navKey: 'p_paises' }
            ]
        }
        , {
            className: ModelConstants.Parametro.name,
            navKey: 'parametro',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Periodicidad.name,
            navKey: 'periodicidad',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Porcentaje.name,
            navKey: 'porcentaje',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Precioventaarticulo.name,
            navKey: 'precioventaarticulo',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Provincia.name,
            navKey: 'provincia',
            ius: [
                { name: ModelConstants.Provincia.puprovincias,
                    navKey: 'p_provincias' }
            ]
        }
        , {
            className: ModelConstants.Reglaajusteh.name,
            navKey: 'reglaajusteh',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Sector.name,
            navKey: 'sector',
            ius: [
                { name: ModelConstants.Sector.pusector,
                    navKey: 'p_sector' }
            ]
        }
        , {
            className: ModelConstants.Seriealbaran.name,
            navKey: 'seriealbaran',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Seriealbarancompra.name,
            navKey: 'seriealbarancompra',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Seriefactura.name,
            navKey: 'seriefactura',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Seriefacturacompra.name,
            navKey: 'seriefacturacompra',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Seriepedidocompra.name,
            navKey: 'seriepedidocompra',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Sucursalbancaria.name,
            navKey: 'sucursalbancaria',
            ius: [
                { name: ModelConstants.Sucursalbancaria.pusucursalbancaria,
                    navKey: 'p_sucursalbancaria' }
            ]
        }
        , {
            className: ModelConstants.Tarifaventa.name,
            navKey: 'tarifaventa',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Tipoaccioncomercial.name,
            navKey: 'tipoaccioncomercial',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Tipoaviso.name,
            navKey: 'tipoaviso',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Tipocierre.name,
            navKey: 'tipocierre',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Tipocliente.name,
            navKey: 'tipocliente',
            ius: [
                { name: ModelConstants.Tipocliente.putiposclientes,
                    navKey: 'p_tiposclientes' }
            ]
        }
        , {
            className: ModelConstants.Tipocontacto.name,
            navKey: 'tipocontacto',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Tipodocumento.name,
            navKey: 'tipodocumento',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Tipoelemento.name,
            navKey: 'tipoelemento',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Tipoiva.name,
            navKey: 'tipoiva',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Tipooportunidad.name,
            navKey: 'tipooportunidad',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Tipoproveedor.name,
            navKey: 'tipoproveedor',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Tiporiesgo.name,
            navKey: 'tiporiesgo',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Tiposervicio.name,
            navKey: 'tiposervicio',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Tiposistema.name,
            navKey: 'tiposistema',
            ius: [
                { name: ModelConstants.Tiposistema.putipossistema,
                    navKey: 'p_tipossistema' }
            ]
        }
        , {
            className: ModelConstants.Tiposolicitud.name,
            navKey: 'tiposolicitud',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Zona.name,
            navKey: 'zona',
            ius: [
                { name: ModelConstants.Zona.puzonas,
                    navKey: 'p_zonas' }
            ]
        }
        , {
            className: ModelConstants.Alerta.name,
            navKey: 'alerta',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Configemailalerta.name,
            navKey: 'configemailalerta',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Claseglobal.name,
            navKey: 'claseglobal',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Albaranventa.name,
            navKey: 'albaranventa',
            ius: [
                { name: ModelConstants.Albaranventa.mdiuualbaranventa,
                    navKey: 'mdiu_albaranventa' }
                , { name: ModelConstants.Albaranventa.mdiuualbaranventalns,
                    navKey: 'mdiu_albaranventalns' }
                , { name: ModelConstants.Albaranventa.mdiuualbaranventaportalcli,
                    navKey: 'mdiu_albaranventaportalcli' }
                , { name: ModelConstants.Albaranventa.mdiuualbaranventalnsportalcli,
                    navKey: 'mdiu_albaranventalnsportalcli' }
                , { name: ModelConstants.Albaranventa.piuualbaranventa,
                    navKey: 'piu_albaranventa' }
            ]
        }
        , {
            className: ModelConstants.Cobroanticipo.name,
            navKey: 'cobroanticipo',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Facturaventa.name,
            navKey: 'facturaventa',
            ius: [
                { name: ModelConstants.Facturaventa.mdiuufacturaventa,
                    navKey: 'mdiu_facturaventa' }
                , { name: ModelConstants.Facturaventa.mdiuufacturaventaportalcli,
                    navKey: 'mdiu_facturaventaportalcli' }
                , { name: ModelConstants.Facturaventa.piuufacturaventaobs,
                    navKey: 'piu_facturaventaobs' }
                , { name: ModelConstants.Facturaventa.piuufacturaventaportalcli,
                    navKey: 'piu_facturaventaportalcli' }
            ]
        }
        , {
            className: ModelConstants.Lnalbaranventa.name,
            navKey: 'lnalbaranventa',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Remesapago.name,
            navKey: 'remesapago',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Subtotalalbaranventa.name,
            navKey: 'subtotalalbaranventa',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Subtotalfacturaventa.name,
            navKey: 'subtotalfacturaventa',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Vencimiento.name,
            navKey: 'vencimiento',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Confcomision.name,
            navKey: 'confcomision',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Itemcontrolable.name,
            navKey: 'itemcontrolable',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Movimientoic.name,
            navKey: 'movimientoic',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Aviso.name,
            navKey: 'aviso',
            ius: [
                { name: ModelConstants.Aviso.siuutcrear,
                    navKey: 'siu_tcrear' }
                , { name: ModelConstants.Aviso.piuuavisoportalcli,
                    navKey: 'piu_avisoportalcli' }
            ]
        }
        , {
            className: ModelConstants.Vucontrolactcomercial.name,
            navKey: 'v_controlactcomercial',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Viewprofilelevel1.name,
            navKey: 'viewprofilelevel1',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Viewprofilelevel2.name,
            navKey: 'viewprofilelevel2',
            ius: [
            ]
        }
    ];
}
