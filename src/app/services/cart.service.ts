import { Injectable } from '@angular/core';
import { Item } from '../item.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  shoppingCart: Item[] = [];

  constructor() { }


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
