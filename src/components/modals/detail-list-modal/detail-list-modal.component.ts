import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-list-modal',
  templateUrl: './detail-list-modal.component.html',
  styleUrls: ['./detail-list-modal.component.scss'],
})
export class DetailListModalComponent implements OnInit {
  @Input() title = '';
  @Input() dataList: {text: string; id: string}[] = [];
  @Input() currValue: string | [];
  @Input() isChooseMulti?: boolean = false;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  dismissModal(data?: any) {
    this.modalController.dismiss({
      chosenData: this.isChooseMulti? (this.currValue as any[])?.sort((a, b) => a.id - b.id) : data
    });
  }

  checkIsChecked(text) {
    if (this.currValue.length > 0) {
      return (this.currValue as any[]).map(data => data.text).includes(text);
    }
    return false;
  }

  checkItem(data) {
    if (this.checkIsChecked(data.text)) {
      const idx = (this.currValue as any[]).map(res => res.text).indexOf(data.text);
      (this.currValue as any[]).splice(idx, 1);
    } else {
      (this.currValue as any[]).push(data);
    }
  }

}
