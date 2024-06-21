import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { PresupuestoMDIUuPresupuestoComponent } from './mdiu_presupuesto.component';
import { PresupuestoMDIUuPresupuestoVersionesComponent } from './mdiu_presupuestoversiones.component';
import { PresupuestoMDIUuPresupuestoContratoComponent } from './mdiu_presupuestocontrato.component';
import { PresupuestoMDIUuPresupuestoPortalCliComponent } from './mdiu_presupuestoportalcli.component';
import { PresupuestoPIUuPresupuestoSelecComponent } from './piu_presupuestoselec.component';
import { PresupuestoPIUuPresupuestoPortalCliComponent } from './piu_presupuestoportalcli.component';

const routes: Routes = [
    { path: 'mdiu_presupuesto' , component: PresupuestoMDIUuPresupuestoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_presupuestoversiones' , component: PresupuestoMDIUuPresupuestoVersionesComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_presupuestocontrato' , component: PresupuestoMDIUuPresupuestoContratoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_presupuestoportalcli' , component: PresupuestoMDIUuPresupuestoPortalCliComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_presupuestoselec' , component: PresupuestoPIUuPresupuestoSelecComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_presupuestoportalcli' , component: PresupuestoPIUuPresupuestoPortalCliComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresupuestoRoutingModule { }
