import { AuthGuard } from 'src/services/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full'},
  {
    path: '',
    component: HomePage,
    // canActivate: [AuthGuard]
  },
  {
    path: 'exercise-setting',
    loadChildren: () =>
      import('../exercise-setting/exercise-setting.module').then(
        (m) => m.ExerciseSettingPageModule
      ),
  },
  {
    path: 'records',
    loadChildren: () =>
      import('../exercise-records/exercise-records.module').then(
        (m) => m.ExerciseRecordsPageModule
      )
  },
  {
    path: 'real-time-exercise',
    loadChildren: () =>
      import('../real-time-exercise/real-time-exercise.module').then(
        (m) => m.RealTimeExercisePageModule
      )
  },
  {
    path: 'reservation',
    loadChildren: () =>
      import('../reservation/reservation.module').then(
        (m) => m.ReservationPageModule
      )
  },
  {
    path: 'noti-lang',
    loadChildren: () =>
      import(
        '../notification-and-language-setting/notification-and-language-setting.module'
      ).then((m) => m.NotificationAndLanguageSettingPageModule)
  },
  {
    path: 'personal-info-setting',
    loadChildren: () =>
      import('../personal-info-setting/personal-info-setting.module').then(
        (m) => m.PersonalInfoSettingPageModule
      )
  },
  {
    path: 'manual',
    loadChildren: () =>
      import('../manual/manual.module').then((m) => m.ManualPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
