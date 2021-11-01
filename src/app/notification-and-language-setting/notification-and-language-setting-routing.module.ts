import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationAndLanguageSettingPage } from './notification-and-language-setting.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationAndLanguageSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationAndLanguageSettingPageRoutingModule {}
