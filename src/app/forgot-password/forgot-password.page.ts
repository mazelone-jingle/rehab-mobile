import { AlertService } from './../../services/alert.service';
import { LoggerService } from './../../services/logger.service';
import { RegisterService } from './../../services/register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  forgotPwdForm: FormGroup;
  get email() { return this.forgotPwdForm.get('email') }
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerSvc: RegisterService,
    private logger: LoggerService,
    private alertSvc: AlertService
    ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.forgotPwdForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  resetPassword() {
    this.registerSvc.forgotPassword(this.getEmail())
    .subscribe(res => {
      this.logger.log('forgot password.result', res);
      this.alertSvc.presentAlert('확인 메일이 발송되었습니다.', false, () => this.router.navigate(['/login']));
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
