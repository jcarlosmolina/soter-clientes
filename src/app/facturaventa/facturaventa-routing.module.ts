import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { FacturaVentaMDIUuFacturaVentaComponent } from './mdiu_facturaventa.component';
import { FacturaVentaMDIUuFacturaVentaPortalCliComponent } from './mdiu_facturaventaportalcli.component';
import { FacturaVentaPIUuFacturaVentaObsComponent } from './piu_facturaventaobs.component';
import { FacturaVentaPIUuFacturaVentaPortalCliComponent } from './piu_facturaventaportalcli.component';

const routes: Routes = [
    { path: 'mdiu_facturaventa' , component: FacturaVentaMDIUuFacturaVentaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_facturaventaportalcli' , component: FacturaVentaMDIUuFacturaVentaPortalCliComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_facturaventaobs' , component: FacturaVentaPIUuFacturaVentaObsComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_facturaventaportalcli' , component: FacturaVentaPIUuFacturaVentaPortalCliComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturaVentaRoutingModule { }
