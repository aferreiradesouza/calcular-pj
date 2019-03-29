import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, NavController, AlertController, ToastController } from '@ionic/angular';
import { StorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'detalhes-page',
  templateUrl: 'detalhes.page.html',
  styleUrls: ['detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {
  public data: any;

  constructor(public router: Router,
    public modalController: ModalController,
    public route: ActivatedRoute,
    public localStorage: StorageService,
    public navController: NavController,
    public alertController: AlertController,
    public toastController: ToastController) {
    this.route.paramMap.subscribe(params => {
      const guid = params.get('guid');
      const calculos = this.localStorage.getJson('calculos');

      this.data = calculos.filter(e => e.guid === guid)[0];
      console.log(this.data);
    });
  }

  ngOnInit() {

  }

  voltar() {
    this.navController.navigateBack('home');
  }

  editar() {
    this.navController.navigateBack(['home', 'detalhes', this.data.guid, 'editar'], {
      animationDirection: 'forward'
    });
  }

  get calcularHoraEfetivo() {
    return this.data.liquido / this.data.hora;
  }

  async excluir() {
    const alert = await this.alertController.create({
      header: 'Excluir cálculo',
      message: 'Você realmente deseja excluir esse cálculo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Excluir',
          handler: async () => {
            let lista = this.localStorage.getJson('calculos');
            lista = lista.filter(e => e.guid !== this.data.guid);

            this.localStorage.setJson('calculos', lista);

            const toast = await this.toastController.create({
              message: 'Cálculo excluído com sucesso',
              duration: 4000,
              color: 'dark'
            });
            toast.present();

            this.voltar();
          }
        }
      ]
    });
    await alert.present();
  }
}
