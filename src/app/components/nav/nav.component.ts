import { Component, OnInit } from '@angular/core';
import { User } from '@models/user.model';
import { UsersService } from '@services/users.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  activeSideMenu: boolean = false;
  counter!: number;
  userName!: string;

  constructor(
    private storeService: StoreService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    });

    this.userService.userProfile$.subscribe((user: User) => {
      this.userName = user.name;
    });
  }

  sideMenuClick() {
    // alert('Close side bar');
    this.activeSideMenu = !this.activeSideMenu;
  }
}
