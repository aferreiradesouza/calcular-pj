import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { DetalhesComponent } from '../modal/detalhes.component';
import { StorageService } from 'src/app/shared/services/local-storage.service';
import * as moment from 'moment';

@Component({
  selector: 'inicio-page',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.component.scss'],
})
export class HomeComponent implements OnInit {

  public data: any;

  constructor(public router: Router,
    public modalController: ModalController,
    public storageService: StorageService,
    public navController: NavController) {}

  ngOnInit() {

    if (!this.storageService.has('calculos')) {
      this.storageService.setJson('calculos', []);
    } else {
      this.data = this.storageService.getJson('calculos');
    }
  }

  criarCalculo() {
    this.navController.navigateBack(['home', 'criar-calculo'], {
      animationDirection: 'forward'
    });
  }

  async detalhes(item) {
    const modal = await this.modalController.create({
      component: DetalhesComponent,
      componentProps: {data: item}
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
  }

  deletar(index) {
    setTimeout(() => {
      const data = this.storageService.getJson('calculos');
      data.splice(index, 1);
      this.data = data;
      this.storageService.setJson('calculos', data);
    }, 200);
  }


  pegarDia(data) {
    return moment(data).utc().format('DD/MM');
  }

  pegarHoras(data) {
    return moment(data).format('HH:mm');
  }
}
