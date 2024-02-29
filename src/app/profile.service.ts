import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  loginStatus: boolean = true;

  constructor() { }
  login(): boolean {
    this.loginStatus = true;
    return this.loginStatus;
  }

  logout(): boolean {
    this.loginStatus = false;
    return this.loginStatus;
  }

  status(): boolean {
    return this.loginStatus;
  }
}
