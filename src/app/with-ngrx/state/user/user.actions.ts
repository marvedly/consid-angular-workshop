import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {User} from "./user.model";

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Load User': props<{id: number}>(),
    'Load User Success': props<{ user: User }>(),
    'Load User Failure': props<{ error: any }>(),
  }
});
