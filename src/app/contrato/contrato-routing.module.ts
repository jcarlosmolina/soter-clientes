import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ContratoMDIUuContratoComponent } from './mdiu_contrato.component';
import { ContratoMDIUuContratoPortalCliComponent } from './mdiu_contratoportalcli.component';
import { ContratoPIUuContratoComponent } from './piu_contrato.component';
import { ContratoPIUuContratoPortalCliComponent } from './piu_contratoportalcli.component';

const routes: Routes = [
    { path: 'mdiu_contrato' , component: ContratoMDIUuContratoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_contratoportalcli' , component: ContratoMDIUuContratoPortalCliComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_contrato' , component: ContratoPIUuContratoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_contratoportalcli' , component: ContratoPIUuContratoPortalCliComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratoRoutingModule { }
