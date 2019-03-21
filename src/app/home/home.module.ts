import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './inicio/inicio.component';
import { CriarCalculoComponent } from './criar-calculo/criar-calculo.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { SharedModule } from '../shared/shared.module';
import { StorageService } from '../shared/services/local-storage.service';
import {NgxMaskModule} from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    HomeComponent,
    CriarCalculoComponent,
    DetalhesComponent
  ],
  entryComponents: [
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
    StorageService,
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule {}
