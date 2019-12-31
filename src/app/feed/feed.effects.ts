import { switchMap, map, catchError } from 'rxjs/operators';
import { FeedService } from './feed.service';
import { FeedActionTypes, FeedActionsUnion, FetchItemsSuccess, FetchItemsError } from './feed.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Item } from '../shared/item.interface';
import { of } from 'rxjs';



@Injectable()
export class FeedEffects {



  constructor(
    private actions$: Actions,
    private feedService: FeedService) { }

  @Effect()
  fetchItems$ = this.actions$.pipe(
    ofType(FeedActionTypes.fetchItems),
    switchMap(() => this.feedService.getFeed(0).pipe(
      map((items: Item[]) => new FetchItemsSuccess(items)),
      catchError(() => of(new FetchItemsError()))
    )),

  );

}
