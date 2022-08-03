import { SharedModule } from '../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { WebsiteRoutingModule } from './website-routing.module';

// Components
// import { ImgComponent } from '@website/components/img/img.component';
// import { ProductComponent } from '@website/components/product/product.component';
// import { ProductsComponent } from 'src/app/shared/components/products/products.component';
// import { ErrorLoggerComponent } from '@website/components/error-logger/error-logger.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutComponent } from './components/layout/layout.component';

// Pages
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';

// Modules
import { CategoryModule } from './pages/category/category.module';

// Strategy Quick Link
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [
    NavComponent,
    MycartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent,
    LayoutComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SwiperModule,
    SharedModule,
    CategoryModule,
    QuicklinkModule,
  ],
})
export class WebsiteModule {}
