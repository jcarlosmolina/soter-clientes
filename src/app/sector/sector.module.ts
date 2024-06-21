import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { SectorRoutingModule } from './sector-routing.module';
import { SectorPuSectorComponent } from './p_sector.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    SectorRoutingModule
  ],
  declarations: [
    SectorPuSectorComponent
  ],
  exports: [
    SectorPuSectorComponent
  ]
})
export class SectorModule { }
