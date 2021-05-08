import { createAction, props } from '@ngrx/store';
import { IUsers } from 'src/app/model/interfaces';

export enum EUsersActions {
  load = '[Users] Load Users',
  loadSuccess = '[Users] Load Users Success',
  loadFailure = '[Users] Load Users Failure',
}

export const loadUsers = createAction(EUsersActions.load);

export const loadUsersSuccess = createAction(EUsersActions.loadSuccess, props<{ users: IUsers }>());

export const loadUsersFailure = createAction(EUsersActions.loadFailure, props<{ error: any }>());
