import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { WebsiteRoutingModule } from './website-routing.module';

// Components
import { ImgComponent } from '@website/components/img/img.component';
import { ProductComponent } from '@website/components/product/product.component';
import { ProductsComponent } from '@website/components/products/products.component';
import { ErrorLoggerComponent } from '@website/components/error-logger/error-logger.component';
import { NavComponent } from '@website/components/nav/nav.component';
import { LayoutComponent } from '@website/components/layout/layout.component';

// Pipes
import { ReversePipe } from '@website/pipes/reverse.pipe';
import { TimeAgoPipe } from '@website/pipes/time-ago.pipe';
import { VocalsChangePipe } from '@website/pipes/vocals-change.pipe';

// Directives
import { HighlightDirective } from '@website/directives/highlight.directive';

// Pages
import { ProductDetailComponent } from '@website/pages/product-detail/product-detail.component';
import { CategoryComponent } from '@website/pages/category/category.component';
import { MycartComponent } from '@website/pages/mycart/mycart.component';
import { LoginComponent } from '@website/pages/login/login.component';
import { RegisterComponent } from '@website/pages/register/register.component';
import { RecoveryComponent } from '@website/pages/recovery/recovery.component';
import { ProfileComponent } from '@website/pages/profile/profile.component';
import { HomeComponent } from '@website/pages/home/home.component';

@NgModule({
  declarations: [
    ErrorLoggerComponent,
    ImgComponent,
    ProductComponent,
    NavComponent,
    ReversePipe,
    TimeAgoPipe,
    VocalsChangePipe,
    HighlightDirective,
    CategoryComponent,
    MycartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent,
    ProductsComponent,
    LayoutComponent,
    HomeComponent,
  ],
  imports: [CommonModule, WebsiteRoutingModule, SwiperModule],
})
export class WebsiteModule {}
