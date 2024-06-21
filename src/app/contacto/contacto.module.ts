import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoSIUuedituinstanceComponent } from './siu_edit_instance.component';
import { ContactoSIUuTCREAR4INSTALACIONComponent } from './siu_tcrear4instalacion.component';
import { ContactoSIUuTCREAR4SISTEMAComponent } from './siu_tcrear4sistema.component';
import { ContactoPIUuSistemaComponent } from './piu_sistema.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ContactoRoutingModule
  ],
  declarations: [
    ContactoSIUuedituinstanceComponent,
    ContactoSIUuTCREAR4INSTALACIONComponent,
    ContactoSIUuTCREAR4SISTEMAComponent,
    ContactoPIUuSistemaComponent
  ],
  exports: [
    ContactoSIUuedituinstanceComponent,
    ContactoSIUuTCREAR4INSTALACIONComponent,
    ContactoSIUuTCREAR4SISTEMAComponent,
    ContactoPIUuSistemaComponent
  ]
})
export class ContactoModule { }
