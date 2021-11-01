import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading: HTMLIonLoadingElement;

  constructor(public loadingController: LoadingController) {}

  async create(msg: string = 'Please wait...') {
    this.loading = await this.loadingController.create({
      message: msg,
      // duration: 5 * 1000
    });

    return this.loading;
  }

  async present() {
    await this.loading.present();
  }

   async dismiss() {
    await this.loading.dismiss();
  }
}
