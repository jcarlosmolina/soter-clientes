import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { TipoClienteRoutingModule } from './tipocliente-routing.module';
import { TipoClientePuTiposClientesComponent } from './p_tiposclientes.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    TipoClienteRoutingModule
  ],
  declarations: [
    TipoClientePuTiposClientesComponent
  ],
  exports: [
    TipoClientePuTiposClientesComponent
  ]
})
export class TipoClienteModule { }
