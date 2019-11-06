import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { ChangeColorDirective } from './directives/change-color.directive';
import { NotIfDirective } from './directives/not-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    DiscountPipe,
    ChangeColorDirective,
    NotIfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
