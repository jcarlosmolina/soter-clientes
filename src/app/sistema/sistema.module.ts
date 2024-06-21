import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { SistemaRoutingModule } from './sistema-routing.module';
import { SistemaSIUuTIMPRIMIRComponent } from './siu_timprimir.component';
import { SistemaSIUuTIMPRIMIRuOutComponent } from './siu_timprimir_out.component';
import { SistemaMDIUuSistemaComponent } from './mdiu_sistema.component';
import { SistemaPIUuSistemaComponent } from './piu_sistema.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    SistemaRoutingModule
  ],
  declarations: [
    SistemaSIUuTIMPRIMIRComponent,
    SistemaSIUuTIMPRIMIRuOutComponent,
    SistemaMDIUuSistemaComponent,
    SistemaPIUuSistemaComponent
  ],
  exports: [
    SistemaSIUuTIMPRIMIRComponent,
    SistemaSIUuTIMPRIMIRuOutComponent,
    SistemaMDIUuSistemaComponent,
    SistemaPIUuSistemaComponent
  ]
})
export class SistemaModule { }
