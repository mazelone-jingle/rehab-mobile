import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationAndLanguageSettingPage } from './notification-and-language-setting.page';
import { NotificationDetailPage } from './notification/notification-detail/notification-detail.page';
import { NotificationPage } from './notification/notification.page';

const routes: Routes = [
  { path: '', redirectTo: 'noti-lang', pathMatch: 'full'},
  {
    path: '',
    component: NotificationAndLanguageSettingPage,
  },
  {
    path: 'noti',
    component: NotificationPage,
  },
  {
    path: 'noti/detail/:id',
    component: NotificationDetailPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationAndLanguageSettingPageRoutingModule {}
