import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { SistemaSIUuTIMPRIMIRComponent } from './siu_timprimir.component';
import { SistemaSIUuTIMPRIMIRuOutComponent } from './siu_timprimir_out.component';
import { SistemaMDIUuSistemaComponent } from './mdiu_sistema.component';
import { SistemaPIUuSistemaComponent } from './piu_sistema.component';

const routes: Routes = [
    { path: 'siu_timprimir' , component: SistemaSIUuTIMPRIMIRComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_timprimir_out' , component: SistemaSIUuTIMPRIMIRuOutComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_sistema' , component: SistemaMDIUuSistemaComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_sistema' , component: SistemaPIUuSistemaComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
