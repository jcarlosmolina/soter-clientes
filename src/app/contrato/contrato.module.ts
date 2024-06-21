import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ContratoRoutingModule } from './contrato-routing.module';
import { ContratoMDIUuContratoComponent } from './mdiu_contrato.component';
import { ContratoMDIUuContratoPortalCliComponent } from './mdiu_contratoportalcli.component';
import { ContratoPIUuContratoComponent } from './piu_contrato.component';
import { ContratoPIUuContratoPortalCliComponent } from './piu_contratoportalcli.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ContratoRoutingModule
  ],
  declarations: [
    ContratoMDIUuContratoComponent,
    ContratoMDIUuContratoPortalCliComponent,
    ContratoPIUuContratoComponent,
    ContratoPIUuContratoPortalCliComponent
  ],
  exports: [
    ContratoMDIUuContratoComponent,
    ContratoMDIUuContratoPortalCliComponent,
    ContratoPIUuContratoComponent,
    ContratoPIUuContratoPortalCliComponent
  ]
})
export class ContratoModule { }
