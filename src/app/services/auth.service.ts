import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthLoginResponse } from '@models/auth.model';
import { User } from '@models/user.model';
import { switchMap } from 'rxjs/operators';
import { UsersService } from './users.service';
import { combineLatest, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = `${environment.API_URL}/api/auth`;

  constructor(private http: HttpClient, private usersService: UsersService) {}

  fetchLogin(email: string, password: string) {
    return this.http.post<AuthLoginResponse>(`${this.URL}/login`, {
      email,
      password,
    });
  }

  profile(token: string) {
    console.log(token);

    // const headers = new HttpHeaders();
    // headers.set('Authorization', `Bearer ${token}`); //! Other way to send the headers
    return this.http.get<User>(`${this.URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    }); // needs to send the token
  }

  login(email: string, password: string) {
    // switch map
    this.fetchLogin(email, password)
      .pipe(switchMap((param) => this.profile(param.access_token)))
      .subscribe({
        next: (user: User) => {
          this.usersService.updateUserProfile(user);
        },
        error: () => {},
      });
  }
}
