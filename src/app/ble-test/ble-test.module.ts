import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BleTestPageRoutingModule } from './ble-test-routing.module';

import { BleTestPage } from './ble-test.page';
import { BLE } from '@ionic-native/ble';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BleTestPageRoutingModule
  ],
  declarations: [BleTestPage],
})
export class BleTestPageModule { }
