import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BLE } from '@ionic-native/ble/ngx';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';

import { HttpService } from 'src/services/http.service';
import { LoaderInterceptor } from 'src/interceptors/loader.interceptor';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { AppInterceptor } from 'src/interceptors/app.interceptor';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { PermissionService } from 'src/services/permission.service';
import { IonicStorageModule } from '@ionic/storage-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/File/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { map } from 'rxjs/operators';
import { LanguageService } from 'src/services/language.service';
// import { StoreModule } from '@ngrx/store';
import { loginStateReducer } from 'src/reducer/login-state.reducer';

export const httpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json');

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    LoggerModule.forRoot({ level: NgxLoggerLevel.TRACE }),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ComponentsModule,
    // StoreModule.forRoot({ isLogin: loginStateReducer })
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
    HttpService,
    BLE,
    LocalNotifications,
    AndroidPermissions,
    PermissionService,
    ScreenOrientation,
    FileChooser,
    File,
    FileOpener,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  language$ = this.languageService.language$;
    constructor(
        private translateService: TranslateService,
        private languageService: LanguageService,
    ) {
        this.language$.pipe(map(language => language.lang)).subscribe(lang => this.translateService.use(lang));
    }
}
