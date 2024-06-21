import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { GrupoCompOTRoutingModule } from './grupocompot-routing.module';
import { GrupoCompOTMDIUuGrupoCompOTuTREEuParteComponent } from './mdiu_grupocompot_tree_parte.component';
import { GrupoCompOTMDIUuGrupoCompOTuTREEuOrdenComponent } from './mdiu_grupocompot_tree_orden.component';
import { GrupoCompOTMDIUuGrupoCompOTuTREEuPortalClComponent } from './mdiu_grupocompot_tree_portalcl.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    GrupoCompOTRoutingModule
  ],
  declarations: [
    GrupoCompOTMDIUuGrupoCompOTuTREEuParteComponent,
    GrupoCompOTMDIUuGrupoCompOTuTREEuOrdenComponent,
    GrupoCompOTMDIUuGrupoCompOTuTREEuPortalClComponent
  ],
  exports: [
    GrupoCompOTMDIUuGrupoCompOTuTREEuParteComponent,
    GrupoCompOTMDIUuGrupoCompOTuTREEuOrdenComponent,
    GrupoCompOTMDIUuGrupoCompOTuTREEuPortalClComponent
  ]
})
export class GrupoCompOTModule { }
