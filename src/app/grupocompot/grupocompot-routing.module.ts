import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { GrupoCompOTMDIUuGrupoCompOTuTREEuParteComponent } from './mdiu_grupocompot_tree_parte.component';
import { GrupoCompOTMDIUuGrupoCompOTuTREEuOrdenComponent } from './mdiu_grupocompot_tree_orden.component';
import { GrupoCompOTMDIUuGrupoCompOTuTREEuPortalClComponent } from './mdiu_grupocompot_tree_portalcl.component';

const routes: Routes = [
    { path: 'mdiu_grupocompot_tree_parte' , component: GrupoCompOTMDIUuGrupoCompOTuTREEuParteComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_grupocompot_tree_orden' , component: GrupoCompOTMDIUuGrupoCompOTuTREEuOrdenComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_grupocompot_tree_portalcl' , component: GrupoCompOTMDIUuGrupoCompOTuTREEuPortalClComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoCompOTRoutingModule { }
