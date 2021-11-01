import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices-modal',
  templateUrl: './devices-modal.component.html',
  styleUrls: ['./devices-modal.component.scss'],
})
export class DevicesModalComponent implements OnInit {
  @Input() title = '';
  @Input() devicesList = [];
  deviceId: any;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissModal(isSelected: boolean) {
    if (isSelected) {
      this.modalController.dismiss({id: this.deviceId});
    } else {
      this.modalController.dismiss();
    }
  }

  radioGroupChange(e) {
    this.deviceId = e.detail.value;
  }
}
