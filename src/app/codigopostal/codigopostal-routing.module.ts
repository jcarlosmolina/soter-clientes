import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { CodigoPostalPuCodigosPostalesComponent } from './p_codigospostales.component';

const routes: Routes = [
    { path: 'p_codigospostales' , component: CodigoPostalPuCodigosPostalesComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodigoPostalRoutingModule { }
