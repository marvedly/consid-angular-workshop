import {createFeature, createReducer, on} from '@ngrx/store';
import {UserActions} from './user.actions';
import {User} from "./user.model";

export const userFeatureKey = 'user';

export interface State {
    user: User | null,
    loadingUser: boolean,
    error: any | null
}

export const initialState: State = {
    user: null,
    loadingUser: false,
    error: null
};

export const reducer = createReducer(
    initialState,
    on(UserActions.loadUser, state => {
        return {
            ...state,
            user: null,
            loadingUser: true,
            error: null,
        }
    }),
    on(UserActions.loadUserSuccess, (state, action) => {
        return {
            ...state,
            user: action.user,
            loadingUser: false,
        }
    }),
    on(UserActions.loadUserFailure, (state, action) => {
        return {
            ...state,
            user: null,
            loadingUser: false,
            error: action.error,
        }
    }),
);

export const userFeature = createFeature({
    name: userFeatureKey,
    reducer,
});
