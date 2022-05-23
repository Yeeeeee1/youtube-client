import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IRegForm } from '../../models/IRegFormModel';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  login = '';
  password = '';
  registrationForm!: IRegForm;
  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: [
        '',
        [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}$/)],
      ],
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.registrationForm.controls[controlName];

    return control.invalid && control.touched;
  }

  signUp() {
    const { controls } = this.registrationForm;

    if (this.registrationForm.invalid) {
      Object.keys(controls).forEach((controlName) => controls[controlName].markAsTouched());

      return;
    }

    this.authService.signUp(this.registrationForm.value.name, this.registrationForm.value.password);
  }
}
