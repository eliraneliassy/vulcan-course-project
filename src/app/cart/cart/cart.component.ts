import { Item } from './../../shared/item.interface';
import { CartService } from './../../services/cart.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  shoppingCart: Item[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe((cart: Item[]) => {
      this.shoppingCart = cart;
    });
  }

  existInCart(item: Item): boolean {
    return this.cartService.existInCart(item);
  }

  removeFromCart(item: Item) {
    return this.cartService.removeFromCart(item);
  }

}
