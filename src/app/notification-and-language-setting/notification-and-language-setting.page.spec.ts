import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationAndLanguageSettingPage } from './notification-and-language-setting.page';

describe('NotificationAndLanguageSettingPage', () => {
  let component: NotificationAndLanguageSettingPage;
  let fixture: ComponentFixture<NotificationAndLanguageSettingPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationAndLanguageSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationAndLanguageSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
