import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { InstalacionSIUuTMODIFICARCLIComponent } from './siu_tmodificarcli.component';
import { InstalacionSIUuTMODATOSCONTABLESPORTALCLIComponent } from './siu_tmodatoscontablesportalcli.component';
import { InstalacionMDIUuInstalacionComponent } from './mdiu_instalacion.component';
import { InstalacionMDIUuInstalacionPortalCliComponent } from './mdiu_instalacionportalcli.component';
import { InstalacionPIUuInstalacionComponent } from './piu_instalacion.component';
import { InstalacionPIUuInstalacionDefComponent } from './piu_instalaciondef.component';
import { InstalacionPIUuInstalacionPortalCliComponent } from './piu_instalacionportalcli.component';

const routes: Routes = [
    { path: 'siu_tmodificarcli' , component: InstalacionSIUuTMODIFICARCLIComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodatoscontablesportalcli' , component: InstalacionSIUuTMODATOSCONTABLESPORTALCLIComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_instalacion' , component: InstalacionMDIUuInstalacionComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_instalacionportalcli' , component: InstalacionMDIUuInstalacionPortalCliComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_instalacion' , component: InstalacionPIUuInstalacionComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_instalaciondef' , component: InstalacionPIUuInstalacionDefComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_instalacionportalcli' , component: InstalacionPIUuInstalacionPortalCliComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstalacionRoutingModule { }
