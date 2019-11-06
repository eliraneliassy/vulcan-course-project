import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  @Input() existInCart: boolean;

  @Output() addToCart: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() removeFromCart: EventEmitter<Item> = new EventEmitter<Item>();
  constructor() { }

  ngOnInit() {
  }

  addToCartClicked(item) {
    this.addToCart.emit(item);
  }

  removeFromCartClicked(item) {
    this.removeFromCart.emit(item);
  }

}
