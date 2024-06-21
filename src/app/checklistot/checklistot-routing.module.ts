import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { CheckListOTMDIUuCheckListOTuTREEuParteComponent } from './mdiu_checklistot_tree_parte.component';
import { CheckListOTMDIUuCheckListOTuTREEuOrdenComponent } from './mdiu_checklistot_tree_orden.component';
import { CheckListOTMDIUuCheckListOTuTREEuPortalClComponent } from './mdiu_checklistot_tree_portalcl.component';

const routes: Routes = [
    { path: 'mdiu_checklistot_tree_parte' , component: CheckListOTMDIUuCheckListOTuTREEuParteComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_checklistot_tree_orden' , component: CheckListOTMDIUuCheckListOTuTREEuOrdenComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_checklistot_tree_portalcl' , component: CheckListOTMDIUuCheckListOTuTREEuPortalClComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckListOTRoutingModule { }
