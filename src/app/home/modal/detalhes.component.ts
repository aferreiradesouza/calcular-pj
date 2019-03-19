import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'detalhes-page',
  templateUrl: 'detalhes.page.html',
  styleUrls: ['detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {
  @Input() data: any;

  constructor(public router: Router, public modalController: ModalController) {}

  ngOnInit() {
    console.log(this.data);
  }

  close() {
    this.modalController.dismiss({
      'result': 'fechar'
    });
  }

  transformarCurrency(item) {
    return 'R$ ' + item.toFixed(2).replace('.', ',');
  }
}
