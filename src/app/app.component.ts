import { db } from './db';
import { CartService } from './services/cart.service';
import { Item } from './item.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  shoppingCart: Item[] = [];

  items: Item[] = db;

  constructor(private cartService: CartService) {
    this.shoppingCart = cartService.shoppingCart;
  }

  addToCart(item) {
    this.shoppingCart.push(item);
  }

  removeFromCart(item: Item) {
    const index = this.shoppingCart.findIndex(x => x._id === item._id);
    this.shoppingCart.splice(index, 1);

  }

  existInCart(item: Item): boolean {
    return this.shoppingCart.findIndex(x => x._id === item._id) > -1 ? true : false;
  }
}

