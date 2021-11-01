import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseSettingPage } from './exercise-setting.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciseSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseSettingPageRoutingModule {}
