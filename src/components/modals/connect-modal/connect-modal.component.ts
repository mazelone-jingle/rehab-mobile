import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-connect-modal',
  templateUrl: './connect-modal.component.html',
  styleUrls: ['../../../theme/modals/_connect-modal.scss'],
})
export class ConnectModalComponent implements OnInit {
  isConnect = true;
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss({ isConnect: this.isConnect });
  }

  radioGroupChange(e) {
    this.isConnect = e.detail.value === 'connect' ? true : false;
  }
}
