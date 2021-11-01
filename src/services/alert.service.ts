import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) { }

  async presentAlert(msg: string, backdropDismiss: boolean = true, callback = () => {}) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: [{
        text: '확인',
        handler: callback
      }],
      backdropDismiss,
    });

    await alert.present();
  }

  async presentCustomizeAlert(options) {
    const alert = await this.alertController.create(options);
    await alert.present();
  }

}
