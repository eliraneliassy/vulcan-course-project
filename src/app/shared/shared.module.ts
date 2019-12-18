import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { NotIfDirective } from './directives/not-if.directive';
import { ChangeColorDirective } from './directives/change-color.directive';
import { DiscountPipe } from './pipes/discount.pipe';


const declarations = [
  DiscountPipe,
  ChangeColorDirective,
  NotIfDirective,
  ItemComponent
];

@NgModule({
  declarations,
  exports: [declarations],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class SharedModule { }
