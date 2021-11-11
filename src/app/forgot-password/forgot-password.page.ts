import { LanguageService } from './../../services/language.service';
import { AlertService } from './../../services/alert.service';
import { LoggerService } from './../../services/logger.service';
import { RegisterService } from './../../services/register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CONFIRM_EMAIL_IS_SENT } from 'src/constants/language-key';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  forgotPwdForm: FormGroup;
  get email() { return this.forgotPwdForm.get('email'); }
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registerSvc: RegisterService,
    private logger: LoggerService,
    private alertSvc: AlertService,
    private languageSvc: LanguageService
    ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.forgotPwdForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  resetPassword() {
    this.registerSvc.forgotPassword(this.getEmail())
    .subscribe(async res => {
      this.logger.log('forgot password.result', res);
      this.alertSvc.presentAlert(
        await this.languageSvc.getI18nLang(CONFIRM_EMAIL_IS_SENT)
        , false, () => this.router.navigate(['/login']));
    }, err => {
      this.logger.error(err);
    }, () => {
    });
  }

  backToLogin() {
    history.back();
  }

  getEmail() { return this.forgotPwdForm.get('email').value; }

}
