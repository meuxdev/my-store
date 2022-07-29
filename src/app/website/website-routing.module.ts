import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LayoutComponent } from '@website/components/layout/layout.component';

// Pages
import { ProductDetailComponent } from '@website/pages/product-detail/product-detail.component';
import { NotFoundComponent } from '@website/pages/not-found/not-found.component';
import { CategoryComponent } from '@website/pages/category/category.component';
import { MycartComponent } from '@website/pages/mycart/mycart.component';
import { LoginComponent } from '@website/pages/login/login.component';
import { RegisterComponent } from '@website/pages/register/register.component';
import { RecoveryComponent } from '@website/pages/recovery/recovery.component';
import { ProfileComponent } from '@website/pages/profile/profile.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
