import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { InstalacionRoutingModule } from './instalacion-routing.module';
import { InstalacionSIUuTMODIFICARCLIComponent } from './siu_tmodificarcli.component';
import { InstalacionSIUuTMODATOSCONTABLESPORTALCLIComponent } from './siu_tmodatoscontablesportalcli.component';
import { InstalacionMDIUuInstalacionComponent } from './mdiu_instalacion.component';
import { InstalacionMDIUuInstalacionPortalCliComponent } from './mdiu_instalacionportalcli.component';
import { InstalacionPIUuInstalacionComponent } from './piu_instalacion.component';
import { InstalacionPIUuInstalacionDefComponent } from './piu_instalaciondef.component';
import { InstalacionPIUuInstalacionPortalCliComponent } from './piu_instalacionportalcli.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    InstalacionRoutingModule
  ],
  declarations: [
    InstalacionSIUuTMODIFICARCLIComponent,
    InstalacionSIUuTMODATOSCONTABLESPORTALCLIComponent,
    InstalacionMDIUuInstalacionComponent,
    InstalacionMDIUuInstalacionPortalCliComponent,
    InstalacionPIUuInstalacionComponent,
    InstalacionPIUuInstalacionDefComponent,
    InstalacionPIUuInstalacionPortalCliComponent
  ],
  exports: [
    InstalacionSIUuTMODIFICARCLIComponent,
    InstalacionSIUuTMODATOSCONTABLESPORTALCLIComponent,
    InstalacionMDIUuInstalacionComponent,
    InstalacionMDIUuInstalacionPortalCliComponent,
    InstalacionPIUuInstalacionComponent,
    InstalacionPIUuInstalacionDefComponent,
    InstalacionPIUuInstalacionPortalCliComponent
  ]
})
export class InstalacionModule { }
