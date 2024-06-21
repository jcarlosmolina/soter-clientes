import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { AvisoSIUuTCREARComponent } from './siu_tcrear.component';
import { AvisoPIUuAvisoPortalCliComponent } from './piu_avisoportalcli.component';

const routes: Routes = [
    { path: 'siu_tcrear' , component: AvisoSIUuTCREARComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_avisoportalcli' , component: AvisoPIUuAvisoPortalCliComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvisoRoutingModule { }
