import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioPuUsuariosDEFComponent } from './p_usuariosdef.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    UsuarioRoutingModule
  ],
  declarations: [
    UsuarioPuUsuariosDEFComponent
  ],
  exports: [
    UsuarioPuUsuariosDEFComponent
  ]
})
export class UsuarioModule { }
