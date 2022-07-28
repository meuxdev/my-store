import { Component, OnInit } from '@angular/core';
import { ICategory } from '@models/product.model';
import { User } from '@models/user.model';
import { CategoriesService } from '@services/categories.service';
import { UsersService } from '@services/users.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  activeSideMenu: boolean = false;

  // Props initialize on the constructor.
  counter!: number;
  userName!: string;
  categories!: ICategory[];

  constructor(
    // Dependency injection
    private storeService: StoreService,
    private userService: UsersService,
    private categoryService: CategoriesService
  ) {}

  ngOnInit(): void {
    // Getting the products
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    });

    // Getting the user profile
    this.userService.userProfile$.subscribe((user: User) => {
      this.userName = user.name;
    });

    // Getting the categories
    this.initAllCategories();
  }

  sideMenuClick() {
    // alert('Close side bar');
    this.activeSideMenu = !this.activeSideMenu;
    this.storeService.updateAppStatus('LOADING');

    setTimeout(() => {
      this.storeService.updateAppStatus('DEFAULT');
    }, 2000);
  }

  initAllCategories() {
    this.categoryService.getAll().subscribe({
      next: (categories) => (this.categories = categories),
    });
  }
}
