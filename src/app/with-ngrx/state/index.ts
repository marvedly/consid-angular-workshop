import {isDevMode} from '@angular/core';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import * as fromUser from './user/user.reducer';

export interface State {
  [fromUser.userFeatureKey]: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  user: fromUser.reducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
