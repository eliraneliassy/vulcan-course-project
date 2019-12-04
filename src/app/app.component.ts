import { FeedService } from './services/feed.service';
import { db } from './db';
import { CartService } from './services/cart.service';
import { Item } from './item.interface';
import { Component, OnInit, OnChanges, AfterViewInit, AfterContentChecked, AfterViewChecked, AfterContentInit, DoCheck, OnDestroy, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  shoppingCart: Item[] = [];

  items: Item[] = [];

  items$: Observable<Item[]>;

  constructor(
    private cartService: CartService,
    private feedService: FeedService) {

  }

  ngOnInit(): void {
    this.feedService.getFeed(0).subscribe((items: Item[]) => {
      this.items = items;
    });

    this.cartService.getCart().subscribe((shoppingCart: Item[]) => {
      this.shoppingCart = shoppingCart;
    });

    this.items$ = this.feedService.getFeed(0);
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

