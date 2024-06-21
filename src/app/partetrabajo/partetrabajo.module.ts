import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ParteTrabajoRoutingModule } from './partetrabajo-routing.module';
import { ParteTrabajoMDIUuParteTrabajouEconomicoComponent } from './mdiu_partetrabajo_economico.component';
import { ParteTrabajoMDIUuParteTrabajoComponent } from './mdiu_partetrabajo.component';
import { ParteTrabajoMDIUuParteTrabajoPortalCliComponent } from './mdiu_partetrabajoportalcli.component';
import { ParteTrabajoPIUuParteTrabajoComponent } from './piu_partetrabajo.component';
import { ParteTrabajoPIUuParteTrabajoPortalCliComponent } from './piu_partetrabajoportalcli.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ParteTrabajoRoutingModule
  ],
  declarations: [
    ParteTrabajoMDIUuParteTrabajouEconomicoComponent,
    ParteTrabajoMDIUuParteTrabajoComponent,
    ParteTrabajoMDIUuParteTrabajoPortalCliComponent,
    ParteTrabajoPIUuParteTrabajoComponent,
    ParteTrabajoPIUuParteTrabajoPortalCliComponent
  ],
  exports: [
    ParteTrabajoMDIUuParteTrabajouEconomicoComponent,
    ParteTrabajoMDIUuParteTrabajoComponent,
    ParteTrabajoMDIUuParteTrabajoPortalCliComponent,
    ParteTrabajoPIUuParteTrabajoComponent,
    ParteTrabajoPIUuParteTrabajoPortalCliComponent
  ]
})
export class ParteTrabajoModule { }
