import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseRecordsPage } from './exercise-records.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciseRecordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseRecordsPageRoutingModule {}
