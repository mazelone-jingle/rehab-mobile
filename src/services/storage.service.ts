import { LoggerService } from './logger.service';
import { AuthService } from './auth.service';
import { Injectable, NgZone } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage: Storage | null = null;
  private userName = '';

  constructor(private ionicStorage: Storage, private authSvc: AuthService, private loggerSvc: LoggerService, private zone: NgZone) {
    // this.init();
    this.userName = this.authSvc.username;
  }

  async init() {
    this.storage = await this.ionicStorage.create();
  }

  async set(key: string, value: any) {
    const oldData = await this.getDataOfUser();
    const newValue = {};
    newValue[key] = value;
    const newData = {...oldData, ...newValue};
    await this.storage?.set(this.userName, newData);
  }

  async get(key: string) {
    const data = await this.getDataOfUser();
    if(data) {
      console.warn('user data:', data);
      return data[key];
    }
    return false;
  }

  async remove(key: string) {
    const data = await this.getDataOfUser();
    delete data[key];
    await this.storage.set(this.userName, data);
  }

  async clearUserData() {
    await this.storage.remove(this.userName);
  }

  async getDataOfUser(): Promise<any> {
    return await new Promise(async (resolve, reject) =>
    await this.storage.get(this.userName).then((data) => resolve(data)).catch((err) => reject(false)));
  }
}
