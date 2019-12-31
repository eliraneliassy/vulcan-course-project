import { FeedActionTypes, FeedActionsUnion } from './feed.actions';
import { Item } from './../shared/item.interface';
import { Action, createReducer, on } from '@ngrx/store';


export const feedFeatureKey = 'feed';

export interface FeedState {
  items: Item[];
  loading: boolean;
}

export const initialState: FeedState = {
  items: [],
  loading: false
};


export function feedReducer(state: FeedState | undefined, action: FeedActionsUnion) {
  switch (action.type) {
    case (FeedActionTypes.fetchItems): {
      return { ...state, loading: true };
    }

    case (FeedActionTypes.fetchItemSuccess): {
      return { ...state, loading: false, items: action.payload };
    }

    case (FeedActionTypes.fetchItemError): {
      return { ...state };
    }
    default:
      break;
  }
}
