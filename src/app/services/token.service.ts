import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly TOKEN_NAME = 'token';

  constructor() {}

  saveToken(token: string) {
    localStorage.setItem(this.TOKEN_NAME, token);
  }

  getToken() {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  removeToken() {
    return localStorage.removeItem(this.TOKEN_NAME);
  }
}
