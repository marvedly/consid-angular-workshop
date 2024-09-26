import * as fromUser from './user.reducer';
import {
  selectUserState,
  selectUser,
  selectLoadingUser,
  selectLoadUserError
} from './user.selectors';
import {User} from "./user.model";

describe('User Selectors', () => {
  const initialState: fromUser.State = {
    user: { name: 'John Doe', age: 20 } as User,
    loadingUser: true,
    error: { message: 'Error loading user' }
  };

  const mockState = {
    [fromUser.userFeatureKey]: initialState
  };

  it('should select the feature state', () => {
    const result = selectUserState(mockState);
    expect(result).toEqual(initialState);
  });

  it('should select the user', () => {
    const result = selectUser(mockState);
    expect(result).toEqual(initialState.user);
  });

  it('should select loading user state', () => {
    const result = selectLoadingUser(mockState);
    expect(result).toBe(true);
  });

  it('should select load user error message', () => {
    const result = selectLoadUserError(mockState);
    expect(result).toBe('Error loading user');
  });
});
