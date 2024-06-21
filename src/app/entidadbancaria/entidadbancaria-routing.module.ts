import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { EntidadBancariaPuEntidadBancariaComponent } from './p_entidadbancaria.component';

const routes: Routes = [
    { path: 'p_entidadbancaria' , component: EntidadBancariaPuEntidadBancariaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntidadBancariaRoutingModule { }
