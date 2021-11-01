import { ICheckDuplicateResponse, IPatientSignUp, ISignUp, PatientService } from './../../services/patient.service';
import { AlertService } from './../../services/alert.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  get name() { return this.registerForm.get('name'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
  private domainName = 'RehabDev';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertSvc: AlertService,
    private patientSvc: PatientService,
    ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      checkId: [false, Validators.requiredTrue],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', Validators.required]
    });
  }

  checkIdDuplicate() {
    const email = this.getEmail();
    if (email) {
      this.patientSvc.checkIdDuplicate(email).subscribe(res => {
        const response = res as ICheckDuplicateResponse;
        if (response.isDuplicate) {
          this.alertSvc.presentAlert('아이디가 이미 존재합니다. 다른 아이디를 입력해주세요.', false);
        } else {
          this.registerForm.patchValue({checkId: true});
        }
      });
    }
  }

  signUp() {
    const data: IPatientSignUp = {
      email: this.getEmail(),
      name: this.getName(),
      password: this.getPassword(),
    };
    this.patientSvc.signUp(this.domainName, data).subscribe(async res => {
      if (res) {
        await this.alertSvc.presentAlert('가입신청 완료되었습니다. 의사의 승인을 기다려 주세요.', false, () => this.router.navigate(['/login']));
      } else {
        this.alertSvc.presentAlert('의사가 승인을 해야 가입이 완료됩니다.', false, ()=> this.router.navigate(['./login']));
      }
    });
  }

  backToLogin() {
    history.back();
  }

  getName(): string { return this.registerForm.get('name').value; }
  getEmail(): string { return this.registerForm.get('email').value; }
  getPassword(): string { return this.registerForm.get('password').value; }
  getCheckId(): boolean { return this.registerForm.get('checkId').value; }

}
