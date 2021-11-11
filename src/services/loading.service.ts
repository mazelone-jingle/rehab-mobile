import { LanguageService } from 'src/services/language.service';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { PLEASE_WAIT } from 'src/constants/language-key';
import { LANG_KO } from 'src/constants/common';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading: HTMLIonLoadingElement;
  defaultText = '';
  constructor(
    public loadingController: LoadingController,
    private languageSvc: LanguageService
  ) { }

  async create(msg: string = '') {
    this.loading = await this.loadingController.create({
      message: msg,
      duration: 10 * 1000
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
