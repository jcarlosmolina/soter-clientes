import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { GrupoPresupuestoRoutingModule } from './grupopresupuesto-routing.module';
import { GrupoPresupuestoMDIUuGrupoPresupuestoComponent } from './mdiu_grupopresupuesto.component';
import { GrupoPresupuestoMDIUuGrupoPresupuestoVersionesComponent } from './mdiu_grupopresupuestoversiones.component';
import { GrupoPresupuestoMDIUuGrupoPresupuestoPortalCliComponent } from './mdiu_grupopresupuestoportalcli.component';
import { GrupoPresupuestoPIUuGrupoPresupuestoComponent } from './piu_grupopresupuesto.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    GrupoPresupuestoRoutingModule
  ],
  declarations: [
    GrupoPresupuestoMDIUuGrupoPresupuestoComponent,
    GrupoPresupuestoMDIUuGrupoPresupuestoVersionesComponent,
    GrupoPresupuestoMDIUuGrupoPresupuestoPortalCliComponent,
    GrupoPresupuestoPIUuGrupoPresupuestoComponent
  ],
  exports: [
    GrupoPresupuestoMDIUuGrupoPresupuestoComponent,
    GrupoPresupuestoMDIUuGrupoPresupuestoVersionesComponent,
    GrupoPresupuestoMDIUuGrupoPresupuestoPortalCliComponent,
    GrupoPresupuestoPIUuGrupoPresupuestoComponent
  ]
})
export class GrupoPresupuestoModule { }
