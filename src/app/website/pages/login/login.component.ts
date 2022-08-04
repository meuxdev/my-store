import { Component } from '@angular/core';
import { of } from 'rxjs';
import { OnExit } from 'src/app/guards/exit.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnExit {
  constructor() {}

  canDeactivate() {
    const response = confirm('Want to exit?');
    return of(response);
  }
}
