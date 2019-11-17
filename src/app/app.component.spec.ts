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

fdescribe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let el: DebugElement;
  let feedService: any;

  beforeEach(async(() => {

    const feedServiceStub = {
      getFeed: (page, category) => {
        return category === 'fashion' ? of(fashionDB) : of(sportDB);
      }
    };

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
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
        { provide: FeedService, useValue: feedServiceStub }
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;
      el = fixture.debugElement;

      feedService = TestBed.get(FeedService);
    });


  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render all items', () => {

    feedService.getFeed(0, fashionDB).subscribe(res => {
      fixture.detectChanges();
      const items = el.queryAll(By.css('.item'));

      expect(items.length).toBe(24);

      const item = el.query(By.css('.item:first-child'));

      expect(item).toBeTruthy();

      const title = item.query(By.css('.title'));
      expect(title.nativeElement.textContent.trim())
        .toBe(fashionDB[0].description);

      const image = item.query(By.css('.image'));
      expect(image.nativeElement.src).toBe(fashionDB[0].imageUrl);
    });


  });

  it('should show sports items when clicking on sports tab clicked', fakeAsync(() => {
    feedService.getFeed().subscribe(res => {

      fixture.detectChanges();

      const tabs = el.queryAll(By.css('.mat-tab-label'));

      tabs[1].nativeElement.click();

      fixture.detectChanges();

      flush();

      const item = el.query(By.css('.item:first-child'));

      expect(item).toBeTruthy();

      const title = item.query(By.css('.title'));
      expect(title.nativeElement.textContent.trim())
        .toBe(sportDB[0].description);

      const image = item.query(By.css('.image'));
      expect(image.nativeElement.src).toBe(sportDB[0].imageUrl);




    });
  }));



});
