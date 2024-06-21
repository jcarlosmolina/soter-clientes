import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { CuotaMDIUuCuotaContratoComponent } from './mdiu_cuotacontrato.component';
import { CuotaPIUuCuotaContratoComponent } from './piu_cuotacontrato.component';

const routes: Routes = [
    { path: 'mdiu_cuotacontrato' , component: CuotaMDIUuCuotaContratoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_cuotacontrato' , component: CuotaPIUuCuotaContratoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuotaRoutingModule { }
