import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { SucursalBancariaPuSucursalBancariaComponent } from './p_sucursalbancaria.component';

const routes: Routes = [
    { path: 'p_sucursalbancaria' , component: SucursalBancariaPuSucursalBancariaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucursalBancariaRoutingModule { }
