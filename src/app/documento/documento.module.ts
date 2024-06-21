import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { DocumentoRoutingModule } from './documento-routing.module';
import { DocumentoSIUudescargarComponent } from './siu_descargar.component';
import { DocumentoSIUudescargaruOutComponent } from './siu_descargar_out.component';
import { DocumentoSIUuedituinstanceComponent } from './siu_edit_instance.component';
import { DocumentoSIUuabrirNuevaVentanaComponent } from './siu_abrirnuevaventana.component';
import { DocumentoSIUuabrirNuevaVentanauOutComponent } from './siu_abrirnuevaventana_out.component';
import { DocumentoSIUuTCREAR4CLIENTEComponent } from './siu_tcrear4cliente.component';
import { DocumentoPIUuDocumentosHATComponent } from './piu_documentoshat.component';
import { DocumentoPIUuDocumentoVersAntComponent } from './piu_documentoversant.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    DocumentoRoutingModule
  ],
  declarations: [
    DocumentoSIUudescargarComponent,
    DocumentoSIUudescargaruOutComponent,
    DocumentoSIUuedituinstanceComponent,
    DocumentoSIUuabrirNuevaVentanaComponent,
    DocumentoSIUuabrirNuevaVentanauOutComponent,
    DocumentoSIUuTCREAR4CLIENTEComponent,
    DocumentoPIUuDocumentosHATComponent,
    DocumentoPIUuDocumentoVersAntComponent
  ],
  exports: [
    DocumentoSIUudescargarComponent,
    DocumentoSIUudescargaruOutComponent,
    DocumentoSIUuedituinstanceComponent,
    DocumentoSIUuabrirNuevaVentanaComponent,
    DocumentoSIUuabrirNuevaVentanauOutComponent,
    DocumentoSIUuTCREAR4CLIENTEComponent,
    DocumentoPIUuDocumentosHATComponent,
    DocumentoPIUuDocumentoVersAntComponent
  ]
})
export class DocumentoModule { }
