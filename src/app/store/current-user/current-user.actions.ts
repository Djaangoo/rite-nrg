import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/model/interfaces';

export enum ECurrentUserActions {
  load = '[CurrentUser] Load CurrentUsers',
  change = '[CurrentUser] Change CurrentUsers',
}

export const loadCurrentUsers = createAction(ECurrentUserActions.load);

export const changeCurrentUser = createAction(ECurrentUserActions.change, props<{ user: IUser }>());
