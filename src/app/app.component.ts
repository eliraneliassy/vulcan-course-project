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
    // this.feedService.getFeed(0).subscribe((items: Item[]) => {
    //   this.items = items;
    // });
    this.fashionItem$ = this.feedService.getFeed(0, 'fashion');
    this.sportsItem$ = this.feedService.getFeed(0, 'sports_outdoors');
  }

  filter(category: string) {
    // fashion,books_electoronics,sports_outdoors,beauty_lifestle,home_kitchen_toys

    const index = this.filters.indexOf(category);
    if (index > -1) {
      this.filters = this.filters.replace(`${category},`, '');
    } else {
      this.filters += `${category},`;
    }

    // this.feedService.getFeed(0, this.filters.slice(0, -1)).subscribe(res => this.items = res);
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

