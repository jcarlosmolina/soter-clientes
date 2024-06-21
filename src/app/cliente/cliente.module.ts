import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteSIUuTMODIFICARDIRFISCALComponent } from './siu_tmodificardirfiscal.component';
import { ClienteSIUuTMODIFICARPERSJURIDICAComponent } from './siu_tmodificarpersjuridica.component';
import { ClienteSIUuTMODIFICARLOGOComponent } from './siu_tmodificarlogo.component';
import { ClienteSIUuTMODIFICARADMONFINCAComponent } from './siu_tmodificaradmonfinca.component';
import { ClienteSIUuMODIFICARDATOSCONTABLESCLIComponent } from './siu_modificardatoscontablescli.component';
import { ClienteSIUuTMODIFICARCLIComponent } from './siu_tmodificarcli.component';
import { ClienteMDIUuClienteComponent } from './mdiu_cliente.component';
import { ClienteMDIUuClientePortalCliComponent } from './mdiu_clienteportalcli.component';
import { ClientePuClientesComponent } from './p_clientes.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ClienteRoutingModule
  ],
  declarations: [
    ClienteSIUuTMODIFICARDIRFISCALComponent,
    ClienteSIUuTMODIFICARPERSJURIDICAComponent,
    ClienteSIUuTMODIFICARLOGOComponent,
    ClienteSIUuTMODIFICARADMONFINCAComponent,
    ClienteSIUuMODIFICARDATOSCONTABLESCLIComponent,
    ClienteSIUuTMODIFICARCLIComponent,
    ClienteMDIUuClienteComponent,
    ClienteMDIUuClientePortalCliComponent,
    ClientePuClientesComponent
  ],
  exports: [
    ClienteSIUuTMODIFICARDIRFISCALComponent,
    ClienteSIUuTMODIFICARPERSJURIDICAComponent,
    ClienteSIUuTMODIFICARLOGOComponent,
    ClienteSIUuTMODIFICARADMONFINCAComponent,
    ClienteSIUuMODIFICARDATOSCONTABLESCLIComponent,
    ClienteSIUuTMODIFICARCLIComponent,
    ClienteMDIUuClienteComponent,
    ClienteMDIUuClientePortalCliComponent,
    ClientePuClientesComponent
  ]
})
export class ClienteModule { }
