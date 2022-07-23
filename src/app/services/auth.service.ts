import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthLoginResponse } from '@models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = `${environment.API_URL}/api/auth`;

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<AuthLoginResponse>(`${this.URL}/login`, {
      email,
      password,
    });
  }

  profile(token: string) {
    return this.http.get(`${this.URL}/profile`); // needs to send the token
  }
}
