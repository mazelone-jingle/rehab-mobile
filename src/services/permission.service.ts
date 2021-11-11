import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private androidPermissions: AndroidPermissions, private loggerSvc: LoggerService) { }

  checkNotification() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_NOTIFICATION_POLICY)
    .then(permissionResponse => {
      this.loggerSvc.log(permissionResponse);
    })
    .catch(onrejected => {
      this.loggerSvc.error(onrejected);
    });
  }
}
