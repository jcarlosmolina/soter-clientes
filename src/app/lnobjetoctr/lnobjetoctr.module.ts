import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { LnObjetoCtrRoutingModule } from './lnobjetoctr-routing.module';
import { LnObjetoCtrMDIUuLnObjetoCtrComponent } from './mdiu_lnobjetoctr.component';
import { LnObjetoCtrMDIUuLnObjetoCtrPortalCliComponent } from './mdiu_lnobjetoctrportalcli.component';
import { LnObjetoCtrPIUuLnObjetoCtrComponent } from './piu_lnobjetoctr.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    LnObjetoCtrRoutingModule
  ],
  declarations: [
    LnObjetoCtrMDIUuLnObjetoCtrComponent,
    LnObjetoCtrMDIUuLnObjetoCtrPortalCliComponent,
    LnObjetoCtrPIUuLnObjetoCtrComponent
  ],
  exports: [
    LnObjetoCtrMDIUuLnObjetoCtrComponent,
    LnObjetoCtrMDIUuLnObjetoCtrPortalCliComponent,
    LnObjetoCtrPIUuLnObjetoCtrComponent
  ]
})
export class LnObjetoCtrModule { }
