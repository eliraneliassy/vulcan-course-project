import { ItemsInCartGuard } from './../items-in-cart.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: '', component: CartComponent, canActivate: [ItemsInCartGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
