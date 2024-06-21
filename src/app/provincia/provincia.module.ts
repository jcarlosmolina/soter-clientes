import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ProvinciaRoutingModule } from './provincia-routing.module';
import { ProvinciaPuProvinciasComponent } from './p_provincias.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ProvinciaRoutingModule
  ],
  declarations: [
    ProvinciaPuProvinciasComponent
  ],
  exports: [
    ProvinciaPuProvinciasComponent
  ]
})
export class ProvinciaModule { }
