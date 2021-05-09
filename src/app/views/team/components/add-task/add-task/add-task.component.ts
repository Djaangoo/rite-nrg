import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTask } from 'src/app/store/teams/teams.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Input() id = 0;
  validateForm!: FormGroup;
  constructor(private modalRef: NzModalRef, private fb: FormBuilder, private store: Store) {}

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls[i]) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    if (this.validateForm.valid) {
      const formValues = this.validateForm.getRawValue();
      this.store.dispatch(addTask({ teamID: this.id, title: formValues.title, description: formValues.description }));
      this.modalRef.destroy();
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }
}
