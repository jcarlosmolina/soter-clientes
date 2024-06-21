import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { CuotaRoutingModule } from './cuota-routing.module';
import { CuotaMDIUuCuotaContratoComponent } from './mdiu_cuotacontrato.component';
import { CuotaPIUuCuotaContratoComponent } from './piu_cuotacontrato.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    CuotaRoutingModule
  ],
  declarations: [
    CuotaMDIUuCuotaContratoComponent,
    CuotaPIUuCuotaContratoComponent
  ],
  exports: [
    CuotaMDIUuCuotaContratoComponent,
    CuotaPIUuCuotaContratoComponent
  ]
})
export class CuotaModule { }
