import { AuthActionsUnion, AuthActionTypes } from './auth.actions';


export const authFeatureKey = 'auth';

export interface AuthState {
  userName: string;
}

export const initialState: AuthState = {
  userName: null
};

export function reducer(
  state: AuthState = initialState,
  action: AuthActionsUnion) {
  switch (action.type) {
    case (AuthActionTypes.userLogin): {
      return { ...state, userName: action.payload };
    }
    default:
      return { ...state };
  }
}
