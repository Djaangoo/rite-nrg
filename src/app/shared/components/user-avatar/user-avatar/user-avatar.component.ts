import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/model/interfaces';
import { getStateSingleUser } from 'src/app/store/users/users.selectors';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnInit {
  @Input() id? = 0;
  @Input() text? = '';
  user$!: Observable<IUser>;

  constructor(private store: Store) {}

  ngOnInit() {
    if (this.id) {
      this.user$ = this.store.select(getStateSingleUser, { id: this.id });
    }
  }
}
