import { TestBed, async, inject } from '@angular/core/testing';

import { ItemsInCartGuard } from './items-in-cart.guard';

describe('ItemsInCartGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsInCartGuard]
    });
  });

  it('should ...', inject([ItemsInCartGuard], (guard: ItemsInCartGuard) => {
    expect(guard).toBeTruthy();
  }));
});
