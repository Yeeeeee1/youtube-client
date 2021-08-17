import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private location: Location) {}
  isLogged(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  signUp(login: string, password: string): void {
    localStorage.setItem('token', 'abc');
    this.location.replaceState('main');
  }
}
