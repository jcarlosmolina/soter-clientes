import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { AvisoRoutingModule } from './aviso-routing.module';
import { AvisoSIUuTCREARComponent } from './siu_tcrear.component';
import { AvisoPIUuAvisoPortalCliComponent } from './piu_avisoportalcli.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    AvisoRoutingModule
  ],
  declarations: [
    AvisoSIUuTCREARComponent,
    AvisoPIUuAvisoPortalCliComponent
  ],
  exports: [
    AvisoSIUuTCREARComponent,
    AvisoPIUuAvisoPortalCliComponent
  ]
})
export class AvisoModule { }
