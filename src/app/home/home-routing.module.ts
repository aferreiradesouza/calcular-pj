import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './inicio/inicio.component';
import { CriarCalculoComponent } from './criar-calculo/criar-calculo.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'criar-calculo', component: CriarCalculoComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class HomeRoutingModule {}
