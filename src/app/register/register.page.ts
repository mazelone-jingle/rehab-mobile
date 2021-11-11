import { LanguageService } from './../../services/language.service';
import { ICheckDuplicateResponse, IPatientSignUp, ISignUp, PatientService } from './../../services/patient.service';
import { AlertService } from './../../services/alert.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ID_DUPLICATED, NEED_DOCTOR_CONFIRM, REGISTER_SUCCESS } from 'src/constants/language-key';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  get name() { return this.registerForm.get('name'); }
  get email() { return this.registerForm.get('email'); }
  get checkId() { return this.registerForm.get('checkId'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
  private domainName = 'RehabDev';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertSvc: AlertService,
    private patientSvc: PatientService,
    private languageSvc: LanguageService
    ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      checkId: [false, Validators.requiredTrue],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]]
    }, { validator: validatorPassword});
  }

  checkIdDuplicate() {
    const email = this.email.value;
    if (email) {
      this.patientSvc.checkIdDuplicate(email).subscribe(async res => {
        const response = res as ICheckDuplicateResponse;
        if (response.isDuplicate) {
          this.alertSvc.presentAlert(
            await this.languageSvc.getI18nLang(ID_DUPLICATED)
            , false);
        } else {
          this.registerForm.patchValue({checkId: true});
        }
      });
    }
  }

  signUp() {
    const data: IPatientSignUp = {
      email: this.email.value,
      name: this.name.value,
      password: this.password.value,
    };
    this.patientSvc.signUp(this.domainName, data).subscribe(async res => {
      if (res) {
        await this.alertSvc.presentAlert(
          await this.languageSvc.getI18nLang(REGISTER_SUCCESS)
          , false, () => this.router.navigate(['/login']));
      } else {
        this.alertSvc.presentAlert(
          await this.languageSvc.getI18nLang(NEED_DOCTOR_CONFIRM)
          , false, ()=> this.router.navigate(['/login']));
      }
    });
  }

  backToLogin() {
    history.back();
  }

}

const validatorPassword = (formGroup: AbstractControl) => {
  if (formGroup.get('password').value !== formGroup.get('confirmPassword').value) {
    return { passwordMismatch: true };
  }
  return null;
};
