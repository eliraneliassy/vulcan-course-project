import { FeedService } from './services/feed.service';
import { db } from './db';
import { CartService } from './services/cart.service';
import { Item } from './item.interface';
import {
  Component, OnInit, OnChanges, AfterViewInit,
  AfterContentChecked, AfterViewChecked, AfterContentInit, DoCheck,
  OnDestroy, SimpleChanges, ChangeDetectionStrategy
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  shoppingCart: Item[] = [];

  items: Item[] = [];

  fashionItem$: Observable<Item[]>;
  sportsItem$: Observable<Item[]>;

  // items$: Observable<Item[]>;

  filters = '';

  constructor(
    private cartService: CartService,
    private feedService: FeedService) {
    this.shoppingCart = this.cartService.shoppingCart;
  }

  ngOnInit(): void {
    this.fashionItem$ = this.feedService.getFeed(0, 'fashion');
    this.sportsItem$ = this.feedService.getFeed(0, 'sports_outdoors');
  }

  addToCart(item) {
    // this.shoppingCart.push(item);
    this.cartService.addToCart(item);
  }

  removeFromCart(item: Item) {
    // const index = this.shoppingCart.findIndex(x => x._id === item._id);
    // this.shoppingCart.splice(index, 1);
    this.cartService.removeFromCart(item);

  }

  existInCart(item: Item): boolean {
    // return this.shoppingCart.findIndex(x => x._id === item._id) > -1 ? true : false;
    return this.cartService.existInCart(item);
  }
}

