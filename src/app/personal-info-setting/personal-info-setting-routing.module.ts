import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalInfoSettingPage } from './personal-info-setting.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalInfoSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalInfoSettingPageRoutingModule {}
