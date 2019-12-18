import { SharedModule } from './../shared/shared.module';
import { FeedComponent } from './feed/feed.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { ItemPreviewComponent } from './item-preview/item-preview.component';


@NgModule({
  declarations: [
    FeedComponent,
    ItemPreviewComponent

  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule
  ]
})
export class FeedModule { }
