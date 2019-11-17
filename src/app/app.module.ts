import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { ChangeColorDirective } from './directives/change-color.directive';
import { NotIfDirective } from './directives/not-if.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { SingleComponentComponent } from './test-examples/single-component/single-component.component';
import { NestedComponentComponent } from './test-examples/nested-component/nested-component.component';
import { ButtonComponent } from './test-examples/nested-component/button/button.component';
import { NestedValueComponent } from './test-examples/nested-component/nested-value/nested-value.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    DiscountPipe,
    ChangeColorDirective,
    NotIfDirective,
    SingleComponentComponent,
    NestedComponentComponent,
    ButtonComponent,
    NestedValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
