import { AuthActionsUnion, AuthActionTypes } from './auth.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';



@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private router: Router) { }

  @Effect({ dispatch: false })
  userLogin$ = this.actions$.pipe(
    ofType(AuthActionTypes.userLogin),
    tap(() => this.router.navigateByUrl('/feed'))
  );

}
