import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { TipoSistemaRoutingModule } from './tiposistema-routing.module';
import { TipoSistemaPuTiposSistemaComponent } from './p_tipossistema.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    TipoSistemaRoutingModule
  ],
  declarations: [
    TipoSistemaPuTiposSistemaComponent
  ],
  exports: [
    TipoSistemaPuTiposSistemaComponent
  ]
})
export class TipoSistemaModule { }
