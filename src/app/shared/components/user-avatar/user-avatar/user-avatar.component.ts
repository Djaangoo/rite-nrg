import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/model/interfaces';
import { getStateSingleUser } from 'src/app/store/users/users.selectors';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnChanges {
  @Input() id = 0;
  @Input() text? = '';
  user$!: Observable<IUser>;

  constructor(private store: Store) {}

  ngOnChanges() {
    this.user$ = this.store.select(getStateSingleUser, { id: this.id });
  }
}
