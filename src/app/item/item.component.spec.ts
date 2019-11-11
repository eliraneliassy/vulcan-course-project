import { Item } from './../item.interface';
import { db } from './../db';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { DiscountPipe } from '../pipes/discount.pipe';
import { By } from '@angular/platform-browser';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComponent, DiscountPipe],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title price and img', () => {
    const item = db[0];
    component.item = item;

    fixture.detectChanges();

    const itemEle = fixture.debugElement.query(By.css('.item'));
    expect(itemEle).toBeTruthy();

    const el = itemEle.query(By.css('.title'));

    expect(el).toBeTruthy();
    expect(el.nativeElement.innerText).toEqual(item.description);

    const img = itemEle.query(By.css('.image'));

    expect(img.nativeElement.src).toEqual(item.imageUrl);


  });

  it('should emit add to cart event - with spys', async(() => {
    const item = db[0];
    component.item = item;

    fixture.detectChanges();

    const addToCartSpy = spyOn(component.addToCart, 'emit');
    component.addToCartClicked(item);

    expect(addToCartSpy).toHaveBeenCalledTimes(1);

  }));

  it('should emit add to cart event - with subscribe', async(() => {
    const item = db[0];
    component.item = item;

    fixture.detectChanges();

    component.addToCart.subscribe((res: Item) => {
      expect(res._id).toEqual(item._id);
    });

    component.addToCartClicked(item);

  }));
});
