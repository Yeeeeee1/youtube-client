import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authEvent: EventEmitter<string> = new EventEmitter();
  constructor(private router: Router) {}

  isLogged(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  signUp(login: string, password: string): void {
    localStorage.setItem('login', login);
    localStorage.setItem('token', 'abc');
    this.authEvent.emit('abc');
    this.router.navigate(['main']);
  }
}
