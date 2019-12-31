import { createAction, props, Action } from '@ngrx/store';

export enum AuthActionTypes {
  userLogin = '[Auth] User Login'
}

export class UserLogin implements Action {
  readonly type = AuthActionTypes.userLogin;
  constructor(public payload: string) { }
}

export type AuthActionsUnion = UserLogin;
