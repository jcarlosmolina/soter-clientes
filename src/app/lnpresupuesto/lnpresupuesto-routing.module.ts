import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { LnPresupuestoMDIUuLnPresupuestoComponent } from './mdiu_lnpresupuesto.component';
import { LnPresupuestoMDIUuLnPresupuestoVersionesComponent } from './mdiu_lnpresupuestoversiones.component';
import { LnPresupuestoMDIUuLnPresupuestoPortalCliComponent } from './mdiu_lnpresupuestoportalcli.component';

const routes: Routes = [
    { path: 'mdiu_lnpresupuesto' , component: LnPresupuestoMDIUuLnPresupuestoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_lnpresupuestoversiones' , component: LnPresupuestoMDIUuLnPresupuestoVersionesComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_lnpresupuestoportalcli' , component: LnPresupuestoMDIUuLnPresupuestoPortalCliComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LnPresupuestoRoutingModule { }
