import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ClienteSIUuTMODIFICARDIRFISCALComponent } from './siu_tmodificardirfiscal.component';
import { ClienteSIUuTMODIFICARPERSJURIDICAComponent } from './siu_tmodificarpersjuridica.component';
import { ClienteSIUuTMODIFICARLOGOComponent } from './siu_tmodificarlogo.component';
import { ClienteSIUuTMODIFICARADMONFINCAComponent } from './siu_tmodificaradmonfinca.component';
import { ClienteSIUuMODIFICARDATOSCONTABLESCLIComponent } from './siu_modificardatoscontablescli.component';
import { ClienteSIUuTMODIFICARCLIComponent } from './siu_tmodificarcli.component';
import { ClienteMDIUuClienteComponent } from './mdiu_cliente.component';
import { ClienteMDIUuClientePortalCliComponent } from './mdiu_clienteportalcli.component';
import { ClientePuClientesComponent } from './p_clientes.component';

const routes: Routes = [
    { path: 'siu_tmodificardirfiscal' , component: ClienteSIUuTMODIFICARDIRFISCALComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodificarpersjuridica' , component: ClienteSIUuTMODIFICARPERSJURIDICAComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodificarlogo' , component: ClienteSIUuTMODIFICARLOGOComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodificaradmonfinca' , component: ClienteSIUuTMODIFICARADMONFINCAComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificardatoscontablescli' , component: ClienteSIUuMODIFICARDATOSCONTABLESCLIComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodificarcli' , component: ClienteSIUuTMODIFICARCLIComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_cliente' , component: ClienteMDIUuClienteComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_clienteportalcli' , component: ClienteMDIUuClientePortalCliComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'p_clientes' , component: ClientePuClientesComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
