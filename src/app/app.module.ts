import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { ChangeColorDirective } from './directives/change-color.directive';
import { NotIfDirective } from './directives/not-if.directive';
import { FeedComponent } from './feed/feed.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { ItemPreviewComponent } from './item-preview/item-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    DiscountPipe,
    ChangeColorDirective,
    NotIfDirective,
    FeedComponent,
    CartComponent,
    HeaderComponent,
    ItemPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
