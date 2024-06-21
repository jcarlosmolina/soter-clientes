import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { OrdenTrabajoMDIUuOrdenTrabajoComponent } from './mdiu_ordentrabajo.component';
import { OrdenTrabajoMDIUuOrdenTrabajoEconimicosComponent } from './mdiu_ordentrabajoeconimicos.component';
import { OrdenTrabajoMDIUuOTObraModSistemaComponent } from './mdiu_otobramodsistema.component';
import { OrdenTrabajoPIUuOrdenTrabajoComponent } from './piu_ordentrabajo.component';

const routes: Routes = [
    { path: 'mdiu_ordentrabajo' , component: OrdenTrabajoMDIUuOrdenTrabajoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_ordentrabajoeconimicos' , component: OrdenTrabajoMDIUuOrdenTrabajoEconimicosComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_otobramodsistema' , component: OrdenTrabajoMDIUuOTObraModSistemaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_ordentrabajo' , component: OrdenTrabajoPIUuOrdenTrabajoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenTrabajoRoutingModule { }
