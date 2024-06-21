import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { EntidadBancariaRoutingModule } from './entidadbancaria-routing.module';
import { EntidadBancariaPuEntidadBancariaComponent } from './p_entidadbancaria.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    EntidadBancariaRoutingModule
  ],
  declarations: [
    EntidadBancariaPuEntidadBancariaComponent
  ],
  exports: [
    EntidadBancariaPuEntidadBancariaComponent
  ]
})
export class EntidadBancariaModule { }
