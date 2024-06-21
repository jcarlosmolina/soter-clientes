import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ComprobacionOTMDIUuComprobacionOTuTREEuParteComponent } from './mdiu_comprobacionot_tree_parte.component';
import { ComprobacionOTMDIUuComprobacionOTuTREEuPortaComponent } from './mdiu_comprobacionot_tree_porta.component';

const routes: Routes = [
    { path: 'mdiu_comprobacionot_tree_parte' , component: ComprobacionOTMDIUuComprobacionOTuTREEuParteComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_comprobacionot_tree_porta' , component: ComprobacionOTMDIUuComprobacionOTuTREEuPortaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprobacionOTRoutingModule { }
