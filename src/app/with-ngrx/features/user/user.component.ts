import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {UserActions} from "../../state/user/user.actions";
import {selectLoadingUser, selectLoadUserError, selectUser} from "../../state/user/user.selectors";
import {AsyncPipe, NgIf} from "@angular/common";
import {FormatArrayPipe} from "../../shared/pipes/format-array.pipe";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {LetDirective} from "@ngrx/component";
import {FormatArrayWithDotsPipe} from "../../shared/pipes/format-array-with-dots.pipe";
import {HobbiesComponent} from "../hobbies/hobbies.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    FormatArrayPipe,
    ReactiveFormsModule,
    LetDirective,
    FormatArrayWithDotsPipe,
    HobbiesComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  user$ = this.store.select(selectUser);
  loadingUser$ = this.store.select(selectLoadingUser);
  loadUserError$ = this.store.select(selectLoadUserError);

  loadUserFormGroup: FormGroup = this.fb.group({
    id: new FormControl(2, [Validators.min(1), Validators.pattern("\\d+")]),
  });

  constructor(private store: Store,
              private fb: FormBuilder,
              private formatArrayPipe: FormatArrayPipe) {
  }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    if (this.loadUserFormGroup.valid) {
      let id = this.loadUserFormGroup.value.id;
      this.store.dispatch(UserActions.loadUser({id}));
    }
  }

  updateHobbies($event: string[]) {
    alert(this.formatArrayPipe.transform($event));
  }
}
