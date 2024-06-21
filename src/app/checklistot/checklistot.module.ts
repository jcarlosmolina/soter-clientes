import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { CheckListOTRoutingModule } from './checklistot-routing.module';
import { CheckListOTMDIUuCheckListOTuTREEuParteComponent } from './mdiu_checklistot_tree_parte.component';
import { CheckListOTMDIUuCheckListOTuTREEuOrdenComponent } from './mdiu_checklistot_tree_orden.component';
import { CheckListOTMDIUuCheckListOTuTREEuPortalClComponent } from './mdiu_checklistot_tree_portalcl.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    CheckListOTRoutingModule
  ],
  declarations: [
    CheckListOTMDIUuCheckListOTuTREEuParteComponent,
    CheckListOTMDIUuCheckListOTuTREEuOrdenComponent,
    CheckListOTMDIUuCheckListOTuTREEuPortalClComponent
  ],
  exports: [
    CheckListOTMDIUuCheckListOTuTREEuParteComponent,
    CheckListOTMDIUuCheckListOTuTREEuOrdenComponent,
    CheckListOTMDIUuCheckListOTuTREEuPortalClComponent
  ]
})
export class CheckListOTModule { }
