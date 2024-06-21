import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { AlbaranVentaMDIUuAlbaranVentaComponent } from './mdiu_albaranventa.component';
import { AlbaranVentaMDIUuAlbaranVentaLnsComponent } from './mdiu_albaranventalns.component';
import { AlbaranVentaMDIUuAlbaranVentaPortalCliComponent } from './mdiu_albaranventaportalcli.component';
import { AlbaranVentaMDIUuAlbaranVentaLnsPortalCliComponent } from './mdiu_albaranventalnsportalcli.component';
import { AlbaranVentaPIUuAlbaranVentaComponent } from './piu_albaranventa.component';

const routes: Routes = [
    { path: 'mdiu_albaranventa' , component: AlbaranVentaMDIUuAlbaranVentaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_albaranventalns' , component: AlbaranVentaMDIUuAlbaranVentaLnsComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_albaranventaportalcli' , component: AlbaranVentaMDIUuAlbaranVentaPortalCliComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_albaranventalnsportalcli' , component: AlbaranVentaMDIUuAlbaranVentaLnsPortalCliComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_albaranventa' , component: AlbaranVentaPIUuAlbaranVentaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbaranVentaRoutingModule { }
