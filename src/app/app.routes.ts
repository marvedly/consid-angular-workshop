import { Routes } from '@angular/router';
import {UserComponent} from "./without-ngrx/components/user/user.component";
import {UserComponent as NgrxUserComponent} from "./with-ngrx/features/user/user.component";

export const routes: Routes = [
  {
    component: UserComponent,
    path: 'user'
  },
  {
    component: NgrxUserComponent,
    path: 'user-ngrx'
  }
];
