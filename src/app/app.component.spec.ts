import { CartService } from './services/cart.service';
import { Item } from './item.interface';
import { sportDB } from './sportDbMock';
import { FeedService } from './services/feed.service';

import { MatTabsModule } from '@angular/material/tabs';
import { DiscountPipe } from './pipes/discount.pipe';
import { ItemComponent } from './item/item.component';
import { TestBed, async, ComponentFixture, fakeAsync, flush } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fashionDB } from './fashionDbMock';
import { of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let el: DebugElement;
  let feedService: FeedService;
  let cartService: CartService;

  beforeEach(async(() => {

    const feedServiceSpy = {
      getFeed: (page, category) => {
        return category === 'fashion' ? of(fashionDB) : of(sportDB);
      }
    };

    const cartServiceSpy = {
      addToCart: () => { },
      removeFromCart: () => { },
      existInCart: () => { }
    };

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatTabsModule,
        NoopAnimationsModule
      ],
      declarations: [
        AppComponent,
        ItemComponent,
        DiscountPipe
      ],
      providers: [
        { provide: FeedService, useValue: feedServiceSpy },
        { provide: CartService, useValue: cartServiceSpy },
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;
      el = fixture.debugElement;
      feedService = TestBed.get(FeedService);
      cartService = TestBed.get(CartService);


      fixture.detectChanges();

    });

  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render all items', () => {


    const items: DebugElement[] = el.queryAll(By.css('.item'));

    expect(items.length).toEqual(24);

    const firstItem = el.query(By.css('.item:first-child'));

    const firstItemTitle = firstItem.query(By.css('.title'));

    expect(firstItemTitle.nativeElement.innerText)
      .toEqual(fashionDB[0].description);

    const tabs = el.queryAll(By.css('.mat-tab-label'));

    expect(tabs.length).toEqual(2);

  });

  it('should show sports items when clicking on sports tab', fakeAsync(() => {
    const tabs = el.queryAll(By.css('.mat-tab-label'));

    tabs[1].nativeElement.click();

    fixture.detectChanges();

    flush();

    const firstItem = el.query(By.css('.item:first-child'));

    const firstItemTitle = firstItem.query(By.css('.title'));

    expect(firstItemTitle.nativeElement.innerText)
      .toEqual(sportDB[0].description);


  }));

  it('should add and remove to/from cart', () => {

    spyOn(cartService, 'addToCart');
    spyOn(cartService, 'removeFromCart');

    const item = fashionDB[0];
    component.addToCart(item);

    expect(cartService.addToCart).toHaveBeenCalledTimes(1);

    component.removeFromCart(item);
    expect(cartService.removeFromCart).toHaveBeenCalledTimes(1);



  });

});
