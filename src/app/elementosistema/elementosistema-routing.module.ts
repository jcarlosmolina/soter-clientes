import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ElementoSistemaMDIUuElementoSistemaComponent } from './mdiu_elementosistema.component';
import { ElementoSistemaPIUuElementoSistemaComponent } from './piu_elementosistema.component';

const routes: Routes = [
    { path: 'mdiu_elementosistema' , component: ElementoSistemaMDIUuElementoSistemaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_elementosistema' , component: ElementoSistemaPIUuElementoSistemaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementoSistemaRoutingModule { }
