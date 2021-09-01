import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  login = '';
  password = '';
  constructor(private authService: AuthService) {}
  signUp() {
    this.authService.signUp(this.login, this.password);
  }
}
