import { LanguageService } from './language.service';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CONFIRM } from 'src/constants/language-key';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertController: AlertController,
    private languageSvc: LanguageService
    ) { }

  async presentAlert(msg: string, backdropDismiss: boolean = true, callback = () => {}) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: [{
        text: await this.languageSvc.getI18nLang(CONFIRM),
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
