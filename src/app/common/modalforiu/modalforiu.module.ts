import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalForIUComponent } from './modalforiu.component';
import { DialogModule } from 'primeng/dialog';
import { CommonComponentsModule } from '../../commoncomponents.module';
import { ClienteModule } from '../../cliente/cliente.module';
import { DocumentoModule } from '../../documento/documento.module';
import { ContactoModule } from '../../contacto/contacto.module';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    DialogModule,
    ClienteModule,
    DocumentoModule,
    ContactoModule
  ],
  declarations: [
    ModalForIUComponent
  ],
  exports: [ModalForIUComponent]
})
export class ModalForIUModule { }
