import { FeedService } from './services/feed.service';
import { db } from './db';
import { CartService } from './services/cart.service';
import { Item } from './item.interface';
import { Component, OnInit, OnChanges, AfterViewInit, AfterContentChecked, AfterViewChecked, AfterContentInit, DoCheck, OnDestroy, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


}

