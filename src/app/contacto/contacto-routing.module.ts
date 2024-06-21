import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ContactoSIUuedituinstanceComponent } from './siu_edit_instance.component';
import { ContactoSIUuTCREAR4INSTALACIONComponent } from './siu_tcrear4instalacion.component';
import { ContactoSIUuTCREAR4SISTEMAComponent } from './siu_tcrear4sistema.component';
import { ContactoPIUuSistemaComponent } from './piu_sistema.component';

const routes: Routes = [
    { path: 'siu_edit_instance' , component: ContactoSIUuedituinstanceComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tcrear4instalacion' , component: ContactoSIUuTCREAR4INSTALACIONComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tcrear4sistema' , component: ContactoSIUuTCREAR4SISTEMAComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_sistema' , component: ContactoPIUuSistemaComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
