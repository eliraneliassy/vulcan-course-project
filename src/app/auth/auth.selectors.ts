import { AuthState } from './auth.reducer';
import { State } from './../reducers/index';
import { createSelector } from '@ngrx/store';


export const selectAuth = (state: State) => state.auth;

export const selectUserName = createSelector(
  selectAuth,
  (authState: AuthState) => authState.userName
);
