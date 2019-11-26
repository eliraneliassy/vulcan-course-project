import { DiscountPipe } from './discount.pipe';

describe('DiscountPipe', () => {
  let pipe: DiscountPipe;
  beforeEach(() => {
    pipe = new DiscountPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should make a discount if value > 10', () => {
    expect(pipe.transform(100, 10)).toEqual(10);
  });
});
