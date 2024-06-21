import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ComprobacionOTRoutingModule } from './comprobacionot-routing.module';
import { ComprobacionOTMDIUuComprobacionOTuTREEuParteComponent } from './mdiu_comprobacionot_tree_parte.component';
import { ComprobacionOTMDIUuComprobacionOTuTREEuPortaComponent } from './mdiu_comprobacionot_tree_porta.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ComprobacionOTRoutingModule
  ],
  declarations: [
    ComprobacionOTMDIUuComprobacionOTuTREEuParteComponent,
    ComprobacionOTMDIUuComprobacionOTuTREEuPortaComponent
  ],
  exports: [
    ComprobacionOTMDIUuComprobacionOTuTREEuParteComponent,
    ComprobacionOTMDIUuComprobacionOTuTREEuPortaComponent
  ]
})
export class ComprobacionOTModule { }
