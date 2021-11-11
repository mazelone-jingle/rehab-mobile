import { LanguageService } from './../../services/language.service';
import { LoggerService } from './../../services/logger.service';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { ITokenRequest } from './../../services/auth.service';
import { AuthService } from 'src/services/auth.service';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IPatient, PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { CANCEL, CONFIRM, ENTER_PASSWORD, WRONG_PASSWORD } from 'src/constants/language-key';

@Component({
  selector: 'app-personal-info-setting',
  templateUrl: './personal-info-setting.page.html',
  styleUrls: ['./personal-info-setting.page.scss'],
})
export class PersonalInfoSettingPage implements OnInit {
  infoForm: FormGroup;
  userInfo: IPatient;
  retryTimes = 0;
  get name() { return this.infoForm.get('name'); }
  get gender() { return this.infoForm.get('gender'); }
  get birthday() { return this.infoForm.get('birthday'); }
  get email() { return this.infoForm.get('email'); }
  get contact() { return this.infoForm.get('contact'); }
  constructor(
    private patientSvc: PatientService,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private authSvc: AuthService,
    private router: Router,
    private loggerSvc: LoggerService,
    private languageSvc: LanguageService
  ) { }

  async ngOnInit() {
    this.buildForm();
    await this.presentInputPasswordAlert();
  }

  async presentInputPasswordAlert() {
    const alert = await this.alertController.create({
      message: await this.languageSvc.getI18nLang(ENTER_PASSWORD),
      inputs: [{
        name: 'password',
        type: 'password',
      }],
      buttons: [{
        text: await this.languageSvc.getI18nLang(CONFIRM),
        role: 'confirm',
        cssClass: 'primary',
        handler: (params) => {
          this.checkPassword(params.password).subscribe(() => {
            this.getPatientInfo();
          }, async e => {
            this.retryTimes++;
            if (this.retryTimes >= 3) {
              // TODO: 다시 시도 재한 필요함?
            }
            await this.presentHandleErrorAlert();
          });
        }
      },{
        text: await this.languageSvc.getI18nLang(CANCEL),
        role: 'cancel',
        cssClass: 'medium',
        handler: () => {
          history.back();
        }
      }]
    });
    await alert.present();
  }

  async presentHandleErrorAlert() {
    const handleErrorAlert = await this.alertController.create({
      message: await this.languageSvc.getI18nLang(WRONG_PASSWORD),
      buttons: [{
        text: await this.languageSvc.getI18nLang(CONFIRM),
        role: 'confirm',
        cssClass: 'primary',
        handler: async () => {
          await this.presentInputPasswordAlert();
        }
      },{
        text: await this.languageSvc.getI18nLang(CANCEL),
        role: 'cancel',
        cssClass: 'medium',
        handler: () => {
          history.back();
        }
      }]
    });
    await handleErrorAlert.present();
  }

  checkPassword(pwd) {
    const userInfo: ITokenRequest = {
      email: this.authSvc.username,
      password: pwd,
      grantType: 'password',
      refreshToken: ''
    };
    return this.authSvc.login(userInfo);
  }

  getPatientInfo() {
    this.patientSvc.getPatientPersonalInfo(this.authSvc.username).subscribe(obs => {
      this.userInfo = obs;
      this.name.patchValue(this.userInfo.name);
      this.gender.patchValue(this.userInfo.gender);
      this.birthday.patchValue(this.userInfo.birthDate);
      this.email.patchValue(this.userInfo.email);
      this.contact.patchValue(this.userInfo.phone);
    });
  }

  buildForm() {
    this.infoForm = this.formBuilder.group({
      name: ['', Validators.required],
      gender: [true, Validators.required],
      birthday: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      contact: ['', Validators.required]
    });
  }

  saveData() {
    const reqBody = Object.assign(this.userInfo, this.infoForm.value);
    this.patientSvc.updatePatientPersonalInfo(this.authSvc.username, reqBody)
    .subscribe(()=> {
      history.back();
    });
  }

  changeDate($event) {
    const date = $event.target.value;
    this.birthday.patchValue(date);
  }

}

