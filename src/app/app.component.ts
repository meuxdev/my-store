import { Component } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { UsersService } from '@services/users.service';
import { User } from '@models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgParent: string =
    'https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/Screenshot from 2022-04-05 22-42-58.png';

  token!: string;

  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  showImage = true;

  onLoaded(img: string) {
    console.log('Log Padre', img);
  }

  toggleChangeImg() {
    this.showImage = !this.showImage;
  }

  createUser() {
    this.usersService
      .create({
        email: 'alejandroanso@mailrandom.com',
        name: 'alejandro anso',
        password: '123456',
      })
      .subscribe((res) => {
        console.log(res);
      });
  }

  login() {
    this.authService
      .fetchLogin('alejandroanso@mailrandom.com', '123456')
      .subscribe({
        next: (response) => {
          console.log(response.access_token);
          this.token = response.access_token;
        },
        error: (error) => {
          console.log('Something went wrong - ', error);
        },
      });
  }

  getProfile() {
    this.authService.profile(this.token).subscribe({
      next: (user: User) => {
        console.log(user);
        this.usersService.updateUserProfile(user);
      },
      error: (error) => {
        console.log('Something went wrong - ', error);
      },
    });
  }

  loginAndGetProfile() {
    this.authService.login('alejandroanso@mailrandom.com', '123456');
  }
}
