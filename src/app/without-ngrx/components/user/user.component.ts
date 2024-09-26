import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";
import {User} from "../../model/user";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  user$?: Observable<User | null>;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.user$ = this.userService.user$
    this.userService.updateUser();
  }

}
