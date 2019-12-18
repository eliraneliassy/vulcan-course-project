import { Item } from './../../shared/item.interface';
import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { FeedService } from '../feed.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {


  items: Item[] = [];

  constructor(
    private cartService: CartService,
    private feedService: FeedService) {

  }

  ngOnInit(): void {
    this.feedService.getFeed(0).subscribe((items: Item[]) => {
      this.items = items;
    });
  }

  addToCart(item) {
    this.cartService.addToCart(item);
  }

  removeFromCart(item: Item) {
    this.cartService.removeFromCart(item);
  }

  existInCart(item: Item): boolean {
    return this.cartService.existInCart(item);
  }

}
