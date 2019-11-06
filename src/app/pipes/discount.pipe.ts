import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value > 10) {
      return value * (args[0] / 1000);
    }
    return value;
  }

}
