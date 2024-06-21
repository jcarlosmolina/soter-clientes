import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { CodigoPostalRoutingModule } from './codigopostal-routing.module';
import { CodigoPostalPuCodigosPostalesComponent } from './p_codigospostales.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    CodigoPostalRoutingModule
  ],
  declarations: [
    CodigoPostalPuCodigosPostalesComponent
  ],
  exports: [
    CodigoPostalPuCodigosPostalesComponent
  ]
})
export class CodigoPostalModule { }
