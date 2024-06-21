import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { DocumentoSIUudescargarComponent } from './siu_descargar.component';
import { DocumentoSIUudescargaruOutComponent } from './siu_descargar_out.component';
import { DocumentoSIUuedituinstanceComponent } from './siu_edit_instance.component';
import { DocumentoSIUuabrirNuevaVentanaComponent } from './siu_abrirnuevaventana.component';
import { DocumentoSIUuabrirNuevaVentanauOutComponent } from './siu_abrirnuevaventana_out.component';
import { DocumentoSIUuTCREAR4CLIENTEComponent } from './siu_tcrear4cliente.component';
import { DocumentoPIUuDocumentosHATComponent } from './piu_documentoshat.component';
import { DocumentoPIUuDocumentoVersAntComponent } from './piu_documentoversant.component';

const routes: Routes = [
    { path: 'siu_descargar' , component: DocumentoSIUudescargarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_descargar_out' , component: DocumentoSIUudescargaruOutComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_edit_instance' , component: DocumentoSIUuedituinstanceComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_abrirnuevaventana' , component: DocumentoSIUuabrirNuevaVentanaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_abrirnuevaventana_out' , component: DocumentoSIUuabrirNuevaVentanauOutComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tcrear4cliente' , component: DocumentoSIUuTCREAR4CLIENTEComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_documentoshat' , component: DocumentoPIUuDocumentosHATComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_documentoversant' , component: DocumentoPIUuDocumentoVersAntComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentoRoutingModule { }
