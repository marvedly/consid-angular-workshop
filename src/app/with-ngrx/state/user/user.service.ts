import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`https://freetestapi.com/api/v1/users/${id}`)
  }
}
