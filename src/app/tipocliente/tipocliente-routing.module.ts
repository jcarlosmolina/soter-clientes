import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { TipoClientePuTiposClientesComponent } from './p_tiposclientes.component';

const routes: Routes = [
    { path: 'p_tiposclientes' , component: TipoClientePuTiposClientesComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoClienteRoutingModule { }
