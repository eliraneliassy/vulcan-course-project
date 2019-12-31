import { Action } from '@ngrx/store';
import { Item } from '../shared/item.interface';

export enum FeedActionTypes {
  fetchItems = '[Feed] Fetch Items',
  fetchItemSuccess = '[Feed] Fetch Items Success',
  fetchItemError = '[Feed] Fetch Items Error'
}

export class FetchItems implements Action {
  readonly type = FeedActionTypes.fetchItems;

}

export class FetchItemsSuccess implements Action {
  readonly type = FeedActionTypes.fetchItemSuccess;
  constructor(public payload: Item[]) { }
}

export class FetchItemsError implements Action {
  readonly type = FeedActionTypes.fetchItemError;

}

export type FeedActionsUnion = FetchItems | FetchItemsSuccess | FetchItemsError;
