import {Component, DestroyRef, EventEmitter, inject, Input, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectUserHobbies} from "../../state/user/user.selectors";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {AsyncPipe} from "@angular/common";
import {concatMap, filter} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {

  hobbies$ = this.store.select(selectUserHobbies);
  @Input({required: true}) header!: string;
  @Output() alertHobbies = new EventEmitter<string[]>();

  constructor(private store: Store) {
  }

  destroyedRef = inject(DestroyRef);

  alertaHobbies() {
    this.hobbies$
      .pipe(takeUntilDestroyed(this.destroyedRef),
        map(hobbies => hobbies!.slice(0, 1)),
      )
      .subscribe(hobbies => {
        this.alertHobbies.emit(hobbies);
      })
  }
}
