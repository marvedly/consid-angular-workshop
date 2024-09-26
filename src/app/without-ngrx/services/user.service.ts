import {DestroyRef, inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Subject, takeUntil} from "rxjs";
import {User} from "../model/user";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class UserService  {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  destroyedRef = inject(DestroyRef);

  constructor(private httpClient: HttpClient) {
  }

  updateUser() {
    this.httpClient.get<User>('https://freetestapi.com/api/v1/users/1')
      .pipe(takeUntilDestroyed(this.destroyedRef))
      .subscribe(user => {
        this.userSubject.next(user);
      });
  }
}
