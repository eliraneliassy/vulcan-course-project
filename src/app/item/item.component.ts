import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from '../item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() item: Item;
  @Input() existInCart: boolean;
  @Input() color: string;

  @Output() addToCart: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() removeFromCart: EventEmitter<Item> = new EventEmitter<Item>();
  constructor() {

  }
  addToCartClicked(item) {
    this.addToCart.emit(item);
  }

  removeFromCartClicked(item) {
    this.removeFromCart.emit(item);
  }

}
