import { HttpClient } from '@angular/common/http';

import { db } from './db';
import { CartService } from './services/cart.service';
import {
  Component, OnInit, OnChanges, AfterViewInit,
  AfterContentChecked, AfterViewChecked, AfterContentInit,
  DoCheck, OnDestroy, SimpleChanges, ChangeDetectionStrategy
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private httpClient: HttpClient){
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe();
  }


}

