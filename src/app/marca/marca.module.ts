import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { MarcaRoutingModule } from './marca-routing.module';
import { MarcaPuMarcaComponent } from './p_marca.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    MarcaRoutingModule
  ],
  declarations: [
    MarcaPuMarcaComponent
  ],
  exports: [
    MarcaPuMarcaComponent
  ]
})
export class MarcaModule { }
