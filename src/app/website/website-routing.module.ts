import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LayoutComponent } from '@website/components/layout/layout.component';

// Pages
import { NotFoundComponent } from '../not-found/not-found.component';
import { RecoveryComponent } from '@website/pages/recovery/recovery.component';
import { ProductDetailComponent } from '@website/pages/product-detail/product-detail.component';
import { HomeComponent } from '@website/pages/home/home.component';
import { CategoryComponent } from '@website/pages/category/category.component';
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
      { path: 'category/:id', component: CategoryComponent },
      { path: 'cart', component: MycartComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'product/:id', component: ProductDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
