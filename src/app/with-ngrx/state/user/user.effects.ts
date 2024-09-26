import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { UserActions } from './user.actions';
import {UserService} from "./user.service";


@Injectable()
export class UserEffects {

  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUser),
      concatMap(data =>
        this.userService.getUser(data.id)
          .pipe(
          map(user => UserActions.loadUserSuccess({ user })),
          catchError(error => of(UserActions.loadUserFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions,
              private userService: UserService) {}
}
