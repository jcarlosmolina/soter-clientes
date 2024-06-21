import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ZonaRoutingModule } from './zona-routing.module';
import { ZonaPuZonasComponent } from './p_zonas.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ZonaRoutingModule
  ],
  declarations: [
    ZonaPuZonasComponent
  ],
  exports: [
    ZonaPuZonasComponent
  ]
})
export class ZonaModule { }
