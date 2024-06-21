import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { GrupoPresupuestoMDIUuGrupoPresupuestoComponent } from './mdiu_grupopresupuesto.component';
import { GrupoPresupuestoMDIUuGrupoPresupuestoVersionesComponent } from './mdiu_grupopresupuestoversiones.component';
import { GrupoPresupuestoMDIUuGrupoPresupuestoPortalCliComponent } from './mdiu_grupopresupuestoportalcli.component';
import { GrupoPresupuestoPIUuGrupoPresupuestoComponent } from './piu_grupopresupuesto.component';

const routes: Routes = [
    { path: 'mdiu_grupopresupuesto' , component: GrupoPresupuestoMDIUuGrupoPresupuestoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_grupopresupuestoversiones' , component: GrupoPresupuestoMDIUuGrupoPresupuestoVersionesComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_grupopresupuestoportalcli' , component: GrupoPresupuestoMDIUuGrupoPresupuestoPortalCliComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_grupopresupuesto' , component: GrupoPresupuestoPIUuGrupoPresupuestoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoPresupuestoRoutingModule { }
