import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExerciseDetailPage } from './exercise-detail/exercise-detail.page';

import { ExerciseRecordsPage } from './exercise-records.page';

const routes: Routes = [
  { path: '', redirectTo: 'records', pathMatch: 'full'},
  {
    path: '',
    component: ExerciseRecordsPage
  },
  {
    path: 'detail',
    component: ExerciseDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseRecordsPageRoutingModule {}
