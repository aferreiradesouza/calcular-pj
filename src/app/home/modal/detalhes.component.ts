import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'detalhes-page',
  templateUrl: 'detalhes.page.html',
  styleUrls: ['detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {

  constructor(public router: Router, public modalController: ModalController) {}

  ngOnInit() {
  }
  
  close() {
    this.modalController.dismiss({
      'result': 'fechar'
    });
  }
}
