import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CreateUserDto, User } from '@models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private API_URL = `${environment.API_URL}/api/users`;

  constructor(private http: HttpClient) {}

  create(dto: CreateUserDto) {
    return this.http.post<User>(this.API_URL, dto);
  }

  getAll() {
    return this.http.get<User[]>(this.API_URL);
  }
}
