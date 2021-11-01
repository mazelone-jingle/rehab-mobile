import { ProgressBarComponent } from 'src/components/progress-bar/progress-bar.component';
import { RpeComponent } from 'src/components/modals/rpe/rpe.component';
import { HrDetailComponent } from './modals/hr-detail/hr-detail.component';
import { GetDataComponent } from './modals/get-data/get-data.component';
import { DevicesModalComponent } from 'src/components/modals/devices-modal/devices-modal.component';
import { DetailListModalComponent } from 'src/components/modals/detail-list-modal/detail-list-modal.component';
import { ConnectModalComponent } from 'src/components/modals/connect-modal/connect-modal.component';
import { TextComponent } from 'src/components/message/text/text.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPage } from './chat/chat.page';
import { EmergencyComponent } from './message/emergency/emergency.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const createTranslateLoader = (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/components/', '.json');

@NgModule({
  declarations: [
    ChatPage,
    EmergencyComponent,
    TextComponent,
    ConnectModalComponent,
    DetailListModalComponent,
    DevicesModalComponent,
    GetDataComponent,
    HrDetailComponent,
    RpeComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      },
      isolate: true
    }),
  ],
  exports: [
    ChatPage,
    EmergencyComponent,
    TextComponent,
    ConnectModalComponent,
    DetailListModalComponent,
    DevicesModalComponent,
    GetDataComponent,
    HrDetailComponent,
    RpeComponent,
    ProgressBarComponent
  ]
})
export class ComponentsModule { }
