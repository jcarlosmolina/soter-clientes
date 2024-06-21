import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ParteTrabajoMDIUuParteTrabajouEconomicoComponent } from './mdiu_partetrabajo_economico.component';
import { ParteTrabajoMDIUuParteTrabajoComponent } from './mdiu_partetrabajo.component';
import { ParteTrabajoMDIUuParteTrabajoPortalCliComponent } from './mdiu_partetrabajoportalcli.component';
import { ParteTrabajoPIUuParteTrabajoComponent } from './piu_partetrabajo.component';
import { ParteTrabajoPIUuParteTrabajoPortalCliComponent } from './piu_partetrabajoportalcli.component';

const routes: Routes = [
    { path: 'mdiu_partetrabajo_economico' , component: ParteTrabajoMDIUuParteTrabajouEconomicoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_partetrabajo' , component: ParteTrabajoMDIUuParteTrabajoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_partetrabajoportalcli' , component: ParteTrabajoMDIUuParteTrabajoPortalCliComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_partetrabajo' , component: ParteTrabajoPIUuParteTrabajoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_partetrabajoportalcli' , component: ParteTrabajoPIUuParteTrabajoPortalCliComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParteTrabajoRoutingModule { }
