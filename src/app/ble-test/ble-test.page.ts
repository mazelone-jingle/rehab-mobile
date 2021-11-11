import { LoggerService } from './../../services/logger.service';
import { Component, NgZone } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { BleService } from 'src/services/ble.service';

@Component({
  selector: 'app-ble-test',
  templateUrl: './ble-test.page.html',
  styleUrls: ['./ble-test.page.scss'],
})
export class BleTestPage {
  scanning: any = null;
  commands = ['RND#@', 'BAT#@', 'RTS#@', 'DEL#@', 'RTH#@', 'RTE#@', 'RHD#@', 'ROK#@', 'REQ#@'];
  selectedCommand = 'BAT#@';
  // devices: Array<any> = [{ name: 'Rehab01', id: 'F2:A2:41:F5:C3:12', advertising: [], rssi: -70 }];
  devices: Array<any> = [];
  connectedDeviceId: string = null;
  peripheral: any;

  constructor(
    private zone: NgZone,
    private loadingController: LoadingController,
    private ble: BleService,
    private loggerSvc: LoggerService) {
  }

  async scan() {
    await this.presentScanning();
    this.ble.scan()
      .pipe(finalize(() => this.dismissScanning()))
      .subscribe(device => {
        this.devices.length = 0;
        this.zone.run(() => {
          if (this.devices.indexOf(d => d.id == device.id) < 0) {
            this.devices.push(device);
          }
        });
      })
  }

  connect(deviceId: string) {
    if (confirm('연결하시겠습니까?')) {
      this.connectedDeviceId = deviceId;
      this.ble.connect(deviceId)
        .subscribe((peripheral) => {
          this.connectedDeviceId = deviceId;
          this.peripheral = peripheral;
        });
    }
  }

  disconnect() {
    if (!!this.connectedDeviceId) {
      this.ble.disconnect()
        .then(res => {
          alert('disconnected');
          this.connectedDeviceId = null;
        }).catch(err => {
          alert(`disconnect fail, ${err}`);
        });
    }
  }

  writeCommand() {
    this.ble.writeCommand(this.selectedCommand)
      .then(res => this.loggerSvc.log(`write ${this.selectedCommand} ok`, res))
      .catch(err => this.loggerSvc.log(`write ${this.selectedCommand} err`, err));
  }

  test() {
    this.loggerSvc.log(this);
  }

  async presentScanning() {
    this.scanning = await this.loadingController.create({
      message: 'Scan...',
      duration: 5 * 1000
    });
    await this.scanning.present();
  }

  async dismissScanning() {
    await this.scanning.dismiss();
  }
}
