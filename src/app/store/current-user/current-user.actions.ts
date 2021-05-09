import { createAction, props } from '@ngrx/store';

export enum ECurrentUserActions {
  load = '[CurrentUser] Load CurrentUsers',
  loadSuccess = '[CurrentUser] Load CurrentUsers Success',
  loadFailure = '[CurrentUser] Load CurrentUsers Failure',
}

export const loadCurrentUsers = createAction(ECurrentUserActions.load);

export const loadCurrentUsersSuccess = createAction(ECurrentUserActions.loadSuccess, props<{ data: any }>());

export const loadCurrentUsersFailure = createAction(ECurrentUserActions.loadSuccess, props<{ error: any }>());
