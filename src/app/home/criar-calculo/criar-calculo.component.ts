import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { StorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'calculo-page',
  templateUrl: 'criar-calculo.page.html',
  styleUrls: ['criar-calculo.component.scss'],
})
export class CriarCalculoComponent implements OnInit {

  public customCurrencyMaskConfig = {
    align: 'left',
    allowNegative: true,
    allowZero: true,
    decimal: ',',
    precision: 2,
    prefix: 'R$ ',
    suffix: '',
    thousands: '.',
    nullable: true
  };

  public customPercent = {
    align: 'left',
    allowNegative: false,
    allowZero: true,
    decimal: ',',
    precision: 2,
    prefix: '',
    suffix: '%',
    thousands: '.',
    nullable: true
  };

  public form = new FormGroup({
    descricao: new FormControl('', [Validators.required]),
    valor: new FormControl('', [Validators.required]),
    imposto: new FormControl('', [Validators.required, Validators.minLength(1)]),
    hora: new FormControl('', [Validators.required, Validators.minLength(1)]),
    ferias: new FormControl(false),
    previdencia: new FormControl(''),
    inss: new FormControl(''),
    contador: new FormControl(''),
    transporte: new FormControl(''),
    alimentacao: new FormControl(''),
    odontologico: new FormControl(''),
    saude: new FormControl(''),
    vida: new FormControl(''),
  });

  constructor(public router: Router, public navController: NavController, public fb: FormBuilder, public storageService: StorageService) {
  }

  ngOnInit() {

    if (!this.storageService.has('calculos')) {
      this.storageService.setJson('calculos', []);
    }
  }

  voltar() {
    this.navController.navigateBack('home');
  }

  get calcularSalario() {
    return this.form.value.valor * this.form.value.hora;
  }

  get calcularFerias() {
    return this.calcularSalario / 12;
  }

  get calcularImposto() {
    return (this.calcularSalario * this.form.value.imposto) / 100;
  }

  get calcularTotalGasto() {
    return parseFloat(this.form.value.previdencia ? this.form.value.previdencia : 0) +
      parseFloat(this.form.value.inss ? this.form.value.inss : 0) +
      parseFloat(this.form.value.contador ? this.form.value.contador : 0) +
      parseFloat(this.form.value.transporte ? this.form.value.transporte : 0) +
      parseFloat(this.form.value.alimentacao ? this.form.value.alimentacao : 0) +
      parseFloat(this.form.value.odontologico ? this.form.value.odontologico : 0) +
      parseFloat(this.form.value.saude ? this.form.value.saude : 0) +
      parseFloat(this.form.value.vida ? this.form.value.vida : 0) +
      parseFloat(String(this.form.value.imposto ? this.calcularImposto : 0));
  }

  get calcularSalarioLiquido() {
    return this.calcularSalario - this.calcularTotalGasto;
  }

  get criarGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
// tslint:disable-next-line: no-bitwise
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  criarCalculo() {
    const data = {
      descricao: this.form.value.descricao,
      valor: this.form.value.valor,
      hora: this.form.value.hora,
      imposto: this.form.value.imposto,
      impostoValor: this.calcularImposto,
      salario: this.calcularSalario,
      ferias: this.form.value.ferias ? this.calcularFerias : '',
      previdencia: this.form.value.previdencia ? this.form.value.previdencia : '',
      inss: this.form.value.inss ? this.form.value.inss : '',
      contador: this.form.value.contador ? this.form.value.contador : '',
      transporte: this.form.value.transporte ? this.form.value.transporte : '',
      alimentacao: this.form.value.alimentacao ? this.form.value.alimentacao : '',
      odontologico: this.form.value.odontologico ? this.form.value.odontologico : '',
      saude: this.form.value.saude ? this.form.value.saude : '',
      vida: this.form.value.vida ? this.form.value.vida : '',
      totalGasto: this.calcularTotalGasto,
      liquido: this.calcularSalarioLiquido,
      dataCriacao: new Date(),
      guid: this.criarGuid
    };
    const lista = this.storageService.getJson('calculos');
    lista.push(data);

    this.storageService.setJson('calculos', lista);
    this.voltar();
  }
}
