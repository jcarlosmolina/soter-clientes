import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { SucursalBancariaRoutingModule } from './sucursalbancaria-routing.module';
import { SucursalBancariaPuSucursalBancariaComponent } from './p_sucursalbancaria.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    SucursalBancariaRoutingModule
  ],
  declarations: [
    SucursalBancariaPuSucursalBancariaComponent
  ],
  exports: [
    SucursalBancariaPuSucursalBancariaComponent
  ]
})
export class SucursalBancariaModule { }
