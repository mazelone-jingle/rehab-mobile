import { StorageService } from './../../services/storage.service';
import { PrescriptionService } from './../../services/prescription.service';
import { IS_REMEMBER_EMAIL, LAST_EMAIL } from 'src/constants/storage-key';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertService } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';
import { PermissionService } from '../../services/permission.service';
import { PRESCRIPTION } from 'src/constants/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  get isRememberEmail() { return this.loginForm.get('isRememberEmail'); }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertSvc: AlertService,
    private permissionSvc: PermissionService,
    private authSvc: AuthService,
    private prescriptionSvc: PrescriptionService,
    private storageSvc: StorageService
  ) {
    this.buildForm();
  }

  async ngOnInit() {
    const isRememberEmail = localStorage.getItem(IS_REMEMBER_EMAIL);
    this.isRememberEmail.patchValue(isRememberEmail);
    if (isRememberEmail) {
      const lastEmail = localStorage.getItem(LAST_EMAIL);
      this.email.patchValue(lastEmail);
    }

    await this.permissionSvc.checkNotification();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      isRememberEmail: [false]
    });
  }

  login() {
    if (this.loginForm.valid) {

      const isRememberEmail = this.isRememberEmail.value;
      localStorage.setItem(IS_REMEMBER_EMAIL, isRememberEmail);
      if (isRememberEmail) {
        localStorage.setItem(LAST_EMAIL, this.email.value);
      } else {
        localStorage.removeItem(LAST_EMAIL);
      }


      this.authSvc.login(this.loginForm.value).subscribe({
        next: () => {
          this.prescriptionSvc.getLastPrescription(this.authSvc.username)
          .subscribe(async newPrescription => {
            const msg = '새로운 처방전을 받았습니다.';
            await this.storageSvc.set(PRESCRIPTION, newPrescription);
            await this.alertSvc.presentAlert(msg, false, async () => await this.router.navigate(['/menu']));
          });
        },
        error: () => {
          this.alertSvc.presentAlert(
            '의사가 승인을 해야 가입이 완료됩니다.',
            false
          );
        }
      });
    }
  }
}
