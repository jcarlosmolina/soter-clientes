import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilPuPerfilesComponent } from './p_perfiles.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    PerfilRoutingModule
  ],
  declarations: [
    PerfilPuPerfilesComponent
  ],
  exports: [
    PerfilPuPerfilesComponent
  ]
})
export class PerfilModule { }
