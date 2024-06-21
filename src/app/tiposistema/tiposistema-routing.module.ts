import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { TipoSistemaPuTiposSistemaComponent } from './p_tipossistema.component';

const routes: Routes = [
    { path: 'p_tipossistema' , component: TipoSistemaPuTiposSistemaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoSistemaRoutingModule { }
