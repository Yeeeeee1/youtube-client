import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IRegForm } from 'src/app/auth/models/IRegFormModel';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  form!: IRegForm;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: ['', [Validators.maxLength(255)]],
      image: ['', [Validators.required, Validators.pattern(/(https?:\/\/.*\.(?:png|jpg))/i)]],
      video: [
        '',
        [
          Validators.required,
          Validators.pattern(/http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/),
        ],
      ],
      creationDate: [
        '',
        [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}$/)],
      ],
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.form.controls[controlName];

    console.log(this.form.controls[controlName].errors);
    return control.invalid && control.touched;
  }

  createCard() {
    const { controls } = this.form;

    if (this.form.invalid) {
      Object.keys(controls).forEach((controlName) => controls[controlName].markAsTouched());

      return;
    }

    alert('Карточка создана!');
  }
}
