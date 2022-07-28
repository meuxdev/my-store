import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { UsersService } from '@services/users.service';
import { User } from '@models/user.model';
import { TokenService } from '@services/token.service';
import { FilesService } from '@services/files.service';
import { StoreService } from '@services/store.service';
import { TStatusDetails } from './types/statusDetail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  token!: string;
  appStatus!: TStatusDetails;

  imageRoute = '';
  imgParent: string =
    'https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/Screenshot from 2022-04-05 22-42-58.png';

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private tokenService: TokenService,
    private fileService: FilesService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.getProfile();
    }

    this.storeService.appStatus$.subscribe({
      next: (newStatus) => {
        this.appStatus = newStatus;
      },
    });
  }

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
    this.authService.profile().subscribe({
      next: (user: User) => {
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

  downloadPdf() {
    this.fileService
      .download(
        'MyPdfDownloaded.pdf',
        'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf',
        'application/pdf'
      )
      .subscribe();
  }

  onUpload(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0); // just single file in the index 0
    if (file) {
      this.fileService
        .upload(file)
        .subscribe((response) => (this.imageRoute = response.location));
    }
  }
}
