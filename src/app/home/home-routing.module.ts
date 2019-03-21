import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './inicio/inicio.component';
import { CriarCalculoComponent } from './criar-calculo/criar-calculo.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'criar-calculo', component: CriarCalculoComponent},
  { path: 'detalhes/:guid', component: DetalhesComponent},
  { path: 'detalhes/:guid/editar', component: CriarCalculoComponent, data: {action: 'editar'}},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class HomeRoutingModule {}
