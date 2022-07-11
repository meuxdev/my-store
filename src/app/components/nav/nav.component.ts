import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  activeSideMenu: boolean = false;

  constructor() {}

  sideMenuClick() {
    // alert('Close side bar');
    this.activeSideMenu = !this.activeSideMenu;
  }

  ngOnInit(): void {}
}
