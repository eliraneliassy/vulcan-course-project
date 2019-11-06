import { Item } from './item.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  shoppingCart: Item[] = [];

  items: Item[] =
    [{
      title: 'Our first item',
      price: 25.5,
      // tslint:disable-next-line
      imgUrl: 'https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/34df30b8ae434fd88ed7a827007d01ec_9366/SST_Track_Jacket_Black_CW1256_21_model.jpg'
    },
    {
      title: 'Iron from Ali Express',
      price: 30,
      // tslint:disable-next-line
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/8130-XR4zLL._SL1500_.jpg'
    }];

  addToCart(item) {
    this.shoppingCart.push(item);
  }

  removeFromCart(item) {
    // ToDO
  }
}

