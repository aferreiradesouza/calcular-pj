import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './inicio/inicio.component';
import { CriarCalculoComponent } from './criar-calculo/criar-calculo.component';
import { DetalhesComponent } from './modal/detalhes.component';
import { SharedModule } from '../shared/shared.module';
import { StorageService } from '../shared/services/local-storage.service';
import {NgxMaskModule} from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';

@NgModule({
  declarations: [
    HomeComponent,
    CriarCalculoComponent,
    DetalhesComponent
  ],
  entryComponents: [
    DetalhesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SharedModule,
    NgxMaskModule,
    NgxCurrencyModule,
  ],
  providers: [
    StorageService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule {}
