import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainPage } from './app.mainpage';
import { LoginComponent } from './login/login.component';
import { ConditionalNavigationComponent } from './common/conditionalNavigation.component';
import { ClassServiceLogComponent } from './common/classServiceLog.component';
import { NoAccessComponent } from './common/noAccess.component';
import { WrongVersionComponent } from './common/wrongVersion.component';
import { LoginGuard } from './common/loginGuard';
import { PopStateNavigationGuard } from './common/popStateNavigationGuard';
import { GenericSiuComponent } from './common/genericSiu.component';

const routes: Routes = [
    // full : makes sure the path is absolute path
    { path: '', component: AppMainPage, pathMatch: 'full', canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'noaccess', component : NoAccessComponent, canDeactivate: [PopStateNavigationGuard] },
    { path: 'wrongversion', component : WrongVersionComponent, canDeactivate: [PopStateNavigationGuard] },
    { path: 'main', component: AppMainPage, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'login', component: LoginComponent, canDeactivate: [PopStateNavigationGuard] },
    { path: 'genericsiu', component: GenericSiuComponent, canDeactivate: [PopStateNavigationGuard] },
    { path: 'conditionalnavigation', component: ConditionalNavigationComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'classServiceLog', component: ClassServiceLogComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'perfil',
      loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule) },
    { path: 'usuario',
      loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule) },
    { path: 'cliente',
      loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule) },
    { path: 'documento',
      loadChildren: () => import('./documento/documento.module').then(m => m.DocumentoModule) },
    { path: 'checklistot',
      loadChildren: () => import('./checklistot/checklistot.module').then(m => m.CheckListOTModule) },
    { path: 'comprobacionot',
      loadChildren: () => import('./comprobacionot/comprobacionot.module').then(m => m.ComprobacionOTModule) },
    { path: 'grupocompot',
      loadChildren: () => import('./grupocompot/grupocompot.module').then(m => m.GrupoCompOTModule) },
    { path: 'contrato',
      loadChildren: () => import('./contrato/contrato.module').then(m => m.ContratoModule) },
    { path: 'cuota',
      loadChildren: () => import('./cuota/cuota.module').then(m => m.CuotaModule) },
    { path: 'lnobjetoctr',
      loadChildren: () => import('./lnobjetoctr/lnobjetoctr.module').then(m => m.LnObjetoCtrModule) },
    { path: 'contacto',
      loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule) },
    { path: 'elementosistema',
      loadChildren: () => import('./elementosistema/elementosistema.module').then(m => m.ElementoSistemaModule) },
    { path: 'instalacion',
      loadChildren: () => import('./instalacion/instalacion.module').then(m => m.InstalacionModule) },
    { path: 'sistema',
      loadChildren: () => import('./sistema/sistema.module').then(m => m.SistemaModule) },
    { path: 'ordentrabajo',
      loadChildren: () => import('./ordentrabajo/ordentrabajo.module').then(m => m.OrdenTrabajoModule) },
    { path: 'partetrabajo',
      loadChildren: () => import('./partetrabajo/partetrabajo.module').then(m => m.ParteTrabajoModule) },
    { path: 'grupopresupuesto',
      loadChildren: () => import('./grupopresupuesto/grupopresupuesto.module').then(m => m.GrupoPresupuestoModule) },
    { path: 'lnpresupuesto',
      loadChildren: () => import('./lnpresupuesto/lnpresupuesto.module').then(m => m.LnPresupuestoModule) },
    { path: 'presupuesto',
      loadChildren: () => import('./presupuesto/presupuesto.module').then(m => m.PresupuestoModule) },
    { path: 'codigopostal',
      loadChildren: () => import('./codigopostal/codigopostal.module').then(m => m.CodigoPostalModule) },
    { path: 'entidadbancaria',
      loadChildren: () => import('./entidadbancaria/entidadbancaria.module').then(m => m.EntidadBancariaModule) },
    { path: 'marca',
      loadChildren: () => import('./marca/marca.module').then(m => m.MarcaModule) },
    { path: 'municipio',
      loadChildren: () => import('./municipio/municipio.module').then(m => m.MunicipioModule) },
    { path: 'pais',
      loadChildren: () => import('./pais/pais.module').then(m => m.PaisModule) },
    { path: 'provincia',
      loadChildren: () => import('./provincia/provincia.module').then(m => m.ProvinciaModule) },
    { path: 'sector',
      loadChildren: () => import('./sector/sector.module').then(m => m.SectorModule) },
    { path: 'sucursalbancaria',
      loadChildren: () => import('./sucursalbancaria/sucursalbancaria.module').then(m => m.SucursalBancariaModule) },
    { path: 'tipocliente',
      loadChildren: () => import('./tipocliente/tipocliente.module').then(m => m.TipoClienteModule) },
    { path: 'tiposistema',
      loadChildren: () => import('./tiposistema/tiposistema.module').then(m => m.TipoSistemaModule) },
    { path: 'zona',
      loadChildren: () => import('./zona/zona.module').then(m => m.ZonaModule) },
    { path: 'albaranventa',
      loadChildren: () => import('./albaranventa/albaranventa.module').then(m => m.AlbaranVentaModule) },
    { path: 'facturaventa',
      loadChildren: () => import('./facturaventa/facturaventa.module').then(m => m.FacturaVentaModule) },
    { path: 'aviso',
      loadChildren: () => import('./aviso/aviso.module').then(m => m.AvisoModule) },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
  })
export class AppRoutingModule { }
