import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';
import { IUsers } from 'src/app/model/interfaces';
import { changeCurrentUser } from 'src/app/store/current-user/current-user.actions';
import { addTeam } from 'src/app/store/teams/teams.actions';
import { getStateUsers } from 'src/app/store/users/users.selectors';

@Component({
  selector: 'app-change-user',
  templateUrl: './change-user.component.html',
  styleUrls: ['./change-user.component.scss'],
})
export class ChangeUserComponent implements OnInit {
  validateForm!: FormGroup;
  users$: Observable<IUsers> = this.store.select(getStateUsers);
  constructor(private modalRef: NzModalRef, private fb: FormBuilder, private store: Store) {}

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls[i]) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    if (this.validateForm.valid) {
      const formValue = this.validateForm.getRawValue();
      this.store.dispatch(changeCurrentUser({ user: formValue.user }));
      this.modalRef.destroy();
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      user: [null, [Validators.required]],
    });
  }
}
