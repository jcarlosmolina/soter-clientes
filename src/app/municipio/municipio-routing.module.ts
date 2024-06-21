import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { MunicipioMDuMunicipiosComponent } from './md_municipios.component';
import { MunicipioPuMunicipiosComponent } from './p_municipios.component';

const routes: Routes = [
    { path: 'md_municipios' , component: MunicipioMDuMunicipiosComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'p_municipios' , component: MunicipioPuMunicipiosComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MunicipioRoutingModule { }
