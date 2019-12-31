import { FeedState } from './../feed/feed.reducer';
import { AuthState, reducer } from './../auth/auth.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { feedReducer } from '../feed/feed.reducer';

export interface State {
  auth: AuthState;
  feed: FeedState;
}

export const reducers: ActionReducerMap<State> = {
  auth: reducer,
  feed: feedReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
