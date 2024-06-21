import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { LnObjetoCtrMDIUuLnObjetoCtrComponent } from './mdiu_lnobjetoctr.component';
import { LnObjetoCtrMDIUuLnObjetoCtrPortalCliComponent } from './mdiu_lnobjetoctrportalcli.component';
import { LnObjetoCtrPIUuLnObjetoCtrComponent } from './piu_lnobjetoctr.component';

const routes: Routes = [
    { path: 'mdiu_lnobjetoctr' , component: LnObjetoCtrMDIUuLnObjetoCtrComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_lnobjetoctrportalcli' , component: LnObjetoCtrMDIUuLnObjetoCtrPortalCliComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_lnobjetoctr' , component: LnObjetoCtrPIUuLnObjetoCtrComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LnObjetoCtrRoutingModule { }
