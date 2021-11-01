import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rpe',
  templateUrl: './rpe.component.html',
  styleUrls: ['./rpe.component.scss'],
})
export class RpeComponent implements OnInit {
  @Input() parent: string;
  rpeValue =  0;
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss({rpeValue: this.rpeValue});
  }

  selectOption($event) {
    this.rpeValue = +$event.target.value;
  }

}
