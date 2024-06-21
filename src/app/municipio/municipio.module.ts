import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { MunicipioRoutingModule } from './municipio-routing.module';
import { MunicipioMDuMunicipiosComponent } from './md_municipios.component';
import { MunicipioPuMunicipiosComponent } from './p_municipios.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    MunicipioRoutingModule
  ],
  declarations: [
    MunicipioMDuMunicipiosComponent,
    MunicipioPuMunicipiosComponent
  ],
  exports: [
    MunicipioMDuMunicipiosComponent,
    MunicipioPuMunicipiosComponent
  ]
})
export class MunicipioModule { }
