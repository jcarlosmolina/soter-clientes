import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { OrdenTrabajoRoutingModule } from './ordentrabajo-routing.module';
import { OrdenTrabajoMDIUuOrdenTrabajoComponent } from './mdiu_ordentrabajo.component';
import { OrdenTrabajoMDIUuOrdenTrabajoEconimicosComponent } from './mdiu_ordentrabajoeconimicos.component';
import { OrdenTrabajoMDIUuOTObraModSistemaComponent } from './mdiu_otobramodsistema.component';
import { OrdenTrabajoPIUuOrdenTrabajoComponent } from './piu_ordentrabajo.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    OrdenTrabajoRoutingModule
  ],
  declarations: [
    OrdenTrabajoMDIUuOrdenTrabajoComponent,
    OrdenTrabajoMDIUuOrdenTrabajoEconimicosComponent,
    OrdenTrabajoMDIUuOTObraModSistemaComponent,
    OrdenTrabajoPIUuOrdenTrabajoComponent
  ],
  exports: [
    OrdenTrabajoMDIUuOrdenTrabajoComponent,
    OrdenTrabajoMDIUuOrdenTrabajoEconimicosComponent,
    OrdenTrabajoMDIUuOTObraModSistemaComponent,
    OrdenTrabajoPIUuOrdenTrabajoComponent
  ]
})
export class OrdenTrabajoModule { }
