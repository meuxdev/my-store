import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

// Directives
import { HighlightDirective } from './directives/highlight.directive';

// Pipes
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { VocalsChangePipe } from './pipes/vocals-change.pipe';

// Components
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ErrorLoggerComponent } from './components/error-logger/error-logger.component';

@NgModule({
  declarations: [
    HighlightDirective,
    ReversePipe,
    TimeAgoPipe,
    VocalsChangePipe,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    ErrorLoggerComponent,
  ],
  imports: [CommonModule, RouterModule, SwiperModule],
  exports: [
    HighlightDirective,
    ReversePipe,
    TimeAgoPipe,
    VocalsChangePipe,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    ErrorLoggerComponent,
  ],
})
export class SharedModule {}
