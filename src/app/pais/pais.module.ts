import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { PaisRoutingModule } from './pais-routing.module';
import { PaisPuPaisesComponent } from './p_paises.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    PaisRoutingModule
  ],
  declarations: [
    PaisPuPaisesComponent
  ],
  exports: [
    PaisPuPaisesComponent
  ]
})
export class PaisModule { }
