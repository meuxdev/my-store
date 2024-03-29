import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthLoginResponse } from '@models/auth.model';
import { User } from '@models/user.model';
import { switchMap, tap } from 'rxjs/operators';
import { UsersService } from './users.service';
import { TokenService } from '@services/token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = `${environment.API_URL}/api/auth`;

  constructor(
    private http: HttpClient,
    private usersService: UsersService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  fetchLogin(email: string, password: string) {
    return this.http.post<AuthLoginResponse>(`${this.URL}/login`, {
      email,
      password,
    });
  }

  profile() {
    // const headers = new HttpHeaders();
    // headers.set('Authorization', `Bearer ${token}`); //! Other way to send the headers
    return this.http.get<User>(`${this.URL}/profile`);
  }

  login(email: string, password: string) {
    // switch map
    this.fetchLogin(email, password)
      .pipe(
        switchMap((param) => {
          this.tokenService.saveToken(param.access_token);
          return this.profile();
        })
      )
      .subscribe({
        next: (user: User) => {
          this.usersService.updateUserProfile(user);
        },
        error: () => {},
      });
  }

  logout() {
    this.tokenService.removeToken();
    this.usersService.removeUserInformation();
    this.router.navigate(['home']);
  }
}
