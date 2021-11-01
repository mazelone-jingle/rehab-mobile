import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealTimeExercisePage } from './real-time-exercise.page';

const routes: Routes = [
  {
    path: '',
    component: RealTimeExercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealTimeExercisePageRoutingModule {}
