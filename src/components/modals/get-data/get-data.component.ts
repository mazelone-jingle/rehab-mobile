import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss'],
})
export class GetDataComponent implements OnInit {
  @Input() isGettingData: Observable<boolean>;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissModal() {
      this.modalController.dismiss();
  }

}
