import { fashionDB } from './../fashionDbMock';
import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { Item } from '../item.interface';

describe('CartService', () => {
  let service: CartService;
  let item: Item;
  beforeEach(() => {
    TestBed.configureTestingModule({

    });
    service = TestBed.get(CartService);
    item = fashionDB[0];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add and remove to cart', () => {
    service.addToCart(item);
    expect(service.shoppingCart.length).toBe(1);
    expect(service.shoppingCart[0]).toBe(item);

    service.removeFromCart(item);

    expect(service.shoppingCart.length).toBe(0);

  });

  it('should check if exist in cart', () => {
    expect(service.existInCart(item)).toBeFalsy();
    service.addToCart(item);
    expect(service.existInCart(item)).toBeTruthy();

  });


});
