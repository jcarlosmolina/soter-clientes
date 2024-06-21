import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { PresupuestoRoutingModule } from './presupuesto-routing.module';
import { PresupuestoMDIUuPresupuestoComponent } from './mdiu_presupuesto.component';
import { PresupuestoMDIUuPresupuestoVersionesComponent } from './mdiu_presupuestoversiones.component';
import { PresupuestoMDIUuPresupuestoContratoComponent } from './mdiu_presupuestocontrato.component';
import { PresupuestoMDIUuPresupuestoPortalCliComponent } from './mdiu_presupuestoportalcli.component';
import { PresupuestoPIUuPresupuestoSelecComponent } from './piu_presupuestoselec.component';
import { PresupuestoPIUuPresupuestoPortalCliComponent } from './piu_presupuestoportalcli.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    PresupuestoRoutingModule
  ],
  declarations: [
    PresupuestoMDIUuPresupuestoComponent,
    PresupuestoMDIUuPresupuestoVersionesComponent,
    PresupuestoMDIUuPresupuestoContratoComponent,
    PresupuestoMDIUuPresupuestoPortalCliComponent,
    PresupuestoPIUuPresupuestoSelecComponent,
    PresupuestoPIUuPresupuestoPortalCliComponent
  ],
  exports: [
    PresupuestoMDIUuPresupuestoComponent,
    PresupuestoMDIUuPresupuestoVersionesComponent,
    PresupuestoMDIUuPresupuestoContratoComponent,
    PresupuestoMDIUuPresupuestoPortalCliComponent,
    PresupuestoPIUuPresupuestoSelecComponent,
    PresupuestoPIUuPresupuestoPortalCliComponent
  ]
})
export class PresupuestoModule { }
