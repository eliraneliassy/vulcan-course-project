import { Injectable } from '@angular/core';
import { Item } from '../item.interface';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private shoppingCart: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  constructor() {
    this.shoppingCart.subscribe(console.log);
  }

  getCart() {
    return this.shoppingCart.asObservable();
  }


  addToCart(item) {
    // this.shoppingCart.push(item);
    const cart = this.shoppingCart.getValue();
    cart.push(item);
    this.shoppingCart.next(cart);
  }

  removeFromCart(item: Item) {
    const cart = this.shoppingCart.getValue();
    const index = cart.findIndex(x => x._id === item._id);
    cart.splice(index, 1);
    this.shoppingCart.next(cart);

  }

  existInCart(item: Item): boolean {
    const cart = this.shoppingCart.getValue();
    return cart.findIndex(x => x._id === item._id) > -1 ? true : false;
  }
}
