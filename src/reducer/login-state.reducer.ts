import { Action, createFeatureSelector, createSelector } from '@ngrx/store';

export interface ILoginState {
  isLogin: boolean;
}

export enum ActionTypes {
  login = 'login',
  logout = 'logout'
}

const loginStateDefault: ILoginState = { isLogin: false };

export const loginStateReducer = (state: ILoginState = loginStateDefault, action: Action) => {
  switch (action.type) {
    case ActionTypes.login: {
      state.isLogin = true;
      return state;
    }
    case ActionTypes.logout: {
      state.isLogin = false;
      return state;
    }
    default: {
      // return { ...state };
    }
  }
};

const loginFeatureSelector = createFeatureSelector<ILoginState>('isLogin');
export const loginStateSelector = createSelector(loginFeatureSelector, state => state.isLogin);
