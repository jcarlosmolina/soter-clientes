import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { FacturaVentaRoutingModule } from './facturaventa-routing.module';
import { FacturaVentaMDIUuFacturaVentaComponent } from './mdiu_facturaventa.component';
import { FacturaVentaMDIUuFacturaVentaPortalCliComponent } from './mdiu_facturaventaportalcli.component';
import { FacturaVentaPIUuFacturaVentaObsComponent } from './piu_facturaventaobs.component';
import { FacturaVentaPIUuFacturaVentaPortalCliComponent } from './piu_facturaventaportalcli.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    FacturaVentaRoutingModule
  ],
  declarations: [
    FacturaVentaMDIUuFacturaVentaComponent,
    FacturaVentaMDIUuFacturaVentaPortalCliComponent,
    FacturaVentaPIUuFacturaVentaObsComponent,
    FacturaVentaPIUuFacturaVentaPortalCliComponent
  ],
  exports: [
    FacturaVentaMDIUuFacturaVentaComponent,
    FacturaVentaMDIUuFacturaVentaPortalCliComponent,
    FacturaVentaPIUuFacturaVentaObsComponent,
    FacturaVentaPIUuFacturaVentaPortalCliComponent
  ]
})
export class FacturaVentaModule { }
