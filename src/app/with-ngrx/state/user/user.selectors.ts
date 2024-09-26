import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.userFeatureKey
);

export const selectUser = createSelector(
  selectUserState,
  (state: fromUser.State) => state.user
);

export const selectUserHobbies = createSelector(
  selectUserState,
  (state: fromUser.State) => state.user?.hobbies
);

export const selectLoadingUser = createSelector(
  selectUserState,
  (state: fromUser.State) => state.loadingUser
)

export const selectLoadUserError = createSelector(
  selectUserState,
  (state: fromUser.State) => state.error?.message
)
