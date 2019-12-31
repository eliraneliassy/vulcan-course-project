import { FeedState } from './feed.reducer';

import { State } from './../reducers/index';
import { createSelector, createFeatureSelector } from '@ngrx/store';


export const selectFeed = createFeatureSelector('feed');

export const selectItems = createSelector(
  selectFeed,
  (feedState: FeedState) => feedState && feedState.items
);
