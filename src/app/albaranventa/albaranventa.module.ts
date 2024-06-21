import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { AlbaranVentaRoutingModule } from './albaranventa-routing.module';
import { AlbaranVentaMDIUuAlbaranVentaComponent } from './mdiu_albaranventa.component';
import { AlbaranVentaMDIUuAlbaranVentaLnsComponent } from './mdiu_albaranventalns.component';
import { AlbaranVentaMDIUuAlbaranVentaPortalCliComponent } from './mdiu_albaranventaportalcli.component';
import { AlbaranVentaMDIUuAlbaranVentaLnsPortalCliComponent } from './mdiu_albaranventalnsportalcli.component';
import { AlbaranVentaPIUuAlbaranVentaComponent } from './piu_albaranventa.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    AlbaranVentaRoutingModule
  ],
  declarations: [
    AlbaranVentaMDIUuAlbaranVentaComponent,
    AlbaranVentaMDIUuAlbaranVentaLnsComponent,
    AlbaranVentaMDIUuAlbaranVentaPortalCliComponent,
    AlbaranVentaMDIUuAlbaranVentaLnsPortalCliComponent,
    AlbaranVentaPIUuAlbaranVentaComponent
  ],
  exports: [
    AlbaranVentaMDIUuAlbaranVentaComponent,
    AlbaranVentaMDIUuAlbaranVentaLnsComponent,
    AlbaranVentaMDIUuAlbaranVentaPortalCliComponent,
    AlbaranVentaMDIUuAlbaranVentaLnsPortalCliComponent,
    AlbaranVentaPIUuAlbaranVentaComponent
  ]
})
export class AlbaranVentaModule { }
