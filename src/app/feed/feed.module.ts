import { SharedModule } from './../shared/shared.module';
import { FeedComponent } from './feed/feed.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { ItemPreviewComponent } from './item-preview/item-preview.component';
import { StoreModule } from '@ngrx/store';
import * as fromFeed from './feed.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FeedEffects } from './feed.effects';


@NgModule({
  declarations: [
    FeedComponent,
    ItemPreviewComponent

  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromFeed.feedFeatureKey, fromFeed.feedReducer),
    EffectsModule.forFeature([FeedEffects])
  ]
})
export class FeedModule { }
