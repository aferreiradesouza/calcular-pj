import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'calculo-page',
  templateUrl: 'criar-calculo.page.html',
  styleUrls: ['criar-calculo.component.scss'],
})
export class CriarCalculoComponent implements OnInit {

  public form: FormGroup;

  constructor(public router: Router, public navController: NavController, public fb: FormBuilder) {
    this.form = this.fb.group({
        nome: '',
        salario: ''
    });
  }

  ngOnInit() {
  }

  voltar() {
    this.navController.pop();
  }
}
