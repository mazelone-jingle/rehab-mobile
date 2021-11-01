import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'ble-test',
    loadChildren: () =>
      import('./ble-test/ble-test.module').then((m) => m.BleTestPageModule),
  },
  {
    path: 'exercise-setting',
    loadChildren: () =>
      import('./exercise-setting/exercise-setting.module').then(
        (m) => m.ExerciseSettingPageModule
      ),
      canActivate: [AuthGuard],
  },
  {
    path: 'exercise-records',
    loadChildren: () =>
      import('./exercise-records/exercise-records.module').then(
        (m) => m.ExerciseRecordsPageModule
      ),
      canActivate: [AuthGuard],
  },
  {
    path: 'real-time-exercise',
    loadChildren: () =>
      import('./real-time-exercise/real-time-exercise.module').then(
        (m) => m.RealTimeExercisePageModule
      ),
      canActivate: [AuthGuard],
  },
  {
    path: 'exercise-detail',
    loadChildren: () =>
      import('./exercise-detail/exercise-detail.module').then(
        (m) => m.ExerciseDetailPageModule
      ),
      canActivate: [AuthGuard],
  },
  {
    path: 'reservation',
    loadChildren: () =>
      import('./reservation/reservation.module').then(
        (m) => m.ReservationPageModule
      ),
      canActivate: [AuthGuard],
  },
  {
    path: 'noti-lang-setting',
    loadChildren: () =>
      import(
        './notification-and-language-setting/notification-and-language-setting.module'
      ).then((m) => m.NotificationAndLanguageSettingPageModule),
      canActivate: [AuthGuard],
  },
  {
    path: 'notification',
    loadChildren: () =>
      import('./notification/notification.module').then(
        (m) => m.NotificationPageModule
      ),
      canActivate: [AuthGuard],
  },
  {
    path: 'notification-detail/:id',
    loadChildren: () =>
      import('./notification-detail/notification-detail.module').then(
        (m) => m.NotificationDetailPageModule
      ),
      canActivate: [AuthGuard],
  },
  {
    path: 'personal-info-setting',
    loadChildren: () =>
      import('./personal-info-setting/personal-info-setting.module').then(
        (m) => m.PersonalInfoSettingPageModule
      ),
      canActivate: [AuthGuard],
  },
  {
    path: 'manual',
    loadChildren: () =>
      import('./manual/manual.module').then((m) => m.ManualPageModule),
      canActivate: [AuthGuard],
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordPageModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
