import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DetalhesComponent } from '../modal/detalhes.component';

@Component({
  selector: 'inicio-page',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, public modalController: ModalController) {}

  ngOnInit() {
  }

  criarCalculo() {
    this.router.navigate(['home', 'criar-calculo']);
  }

  teste() {
    console.log('123131321');
  }

  async detalhes() {
    const modal = await this.modalController.create({
      component: DetalhesComponent,
      componentProps: {
        'prop1': '1',
        'prop2': '2'
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
  }
}
