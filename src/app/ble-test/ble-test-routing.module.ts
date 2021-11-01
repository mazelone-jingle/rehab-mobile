import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BleTestPage } from './ble-test.page';

const routes: Routes = [
  {
    path: '',
    component: BleTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BleTestPageRoutingModule {}
