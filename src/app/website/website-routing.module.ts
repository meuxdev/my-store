import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LayoutComponent } from '@website/components/layout/layout.component';

// Pages
import { ProductDetailComponent } from '@website/pages/product-detail/product-detail.component';
import { HomeComponent } from '@website/pages/home/home.component';
import { MycartComponent } from '@website/pages/mycart/mycart.component';
import { LoginComponent } from '@website/pages/login/login.component';
import { RegisterComponent } from '@website/pages/register/register.component';
import { ProfileComponent } from '@website/pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'cart', component: MycartComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      {
        path: 'category',
        loadChildren: () =>
          import('./pages/category/category.module').then(
            (m) => m.CategoryModule
          ),
        data: {
          preload: true,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
