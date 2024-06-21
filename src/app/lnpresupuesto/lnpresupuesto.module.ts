import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { LnPresupuestoRoutingModule } from './lnpresupuesto-routing.module';
import { LnPresupuestoMDIUuLnPresupuestoComponent } from './mdiu_lnpresupuesto.component';
import { LnPresupuestoMDIUuLnPresupuestoVersionesComponent } from './mdiu_lnpresupuestoversiones.component';
import { LnPresupuestoMDIUuLnPresupuestoPortalCliComponent } from './mdiu_lnpresupuestoportalcli.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    LnPresupuestoRoutingModule
  ],
  declarations: [
    LnPresupuestoMDIUuLnPresupuestoComponent,
    LnPresupuestoMDIUuLnPresupuestoVersionesComponent,
    LnPresupuestoMDIUuLnPresupuestoPortalCliComponent
  ],
  exports: [
    LnPresupuestoMDIUuLnPresupuestoComponent,
    LnPresupuestoMDIUuLnPresupuestoVersionesComponent,
    LnPresupuestoMDIUuLnPresupuestoPortalCliComponent
  ]
})
export class LnPresupuestoModule { }
