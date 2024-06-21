import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ElementoSistemaRoutingModule } from './elementosistema-routing.module';
import { ElementoSistemaMDIUuElementoSistemaComponent } from './mdiu_elementosistema.component';
import { ElementoSistemaPIUuElementoSistemaComponent } from './piu_elementosistema.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ElementoSistemaRoutingModule
  ],
  declarations: [
    ElementoSistemaMDIUuElementoSistemaComponent,
    ElementoSistemaPIUuElementoSistemaComponent
  ],
  exports: [
    ElementoSistemaMDIUuElementoSistemaComponent,
    ElementoSistemaPIUuElementoSistemaComponent
  ]
})
export class ElementoSistemaModule { }
