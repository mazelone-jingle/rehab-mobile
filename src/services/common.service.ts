import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private toastCtrl: ToastController) {}

  async presentToast(header: string, message: string, duration: number = 1000) {
    const toast = await this.toastCtrl.create({
      header: header,
      message: message,
      duration: duration,
      position: 'bottom',
    });
    return toast.present();
  }
}
