import { Action, createReducer, on } from '@ngrx/store';
import { EStatus } from 'src/app/model/enums';
import { IUsers } from 'src/app/model/interfaces';
import { loadUsers, loadUsersFailure, loadUsersSuccess } from './users.actions';

export const usersFeatureKey = 'users';

export interface IUsersState {
  data: IUsers;
  status: EStatus;
}

export const initialState: IUsersState = {
  data: {},
  status: EStatus.nonExecuted,
};

export const usersReducer = createReducer(
  initialState,
  on(
    loadUsers,
    (state): IUsersState => {
      return { ...state, status: EStatus.loading };
    },
  ),
  on(
    loadUsersSuccess,
    (state, action): IUsersState => {
      return { ...state, status: EStatus.loaded, data: action.users };
    },
  ),
  on(
    loadUsersFailure,
    (state): IUsersState => {
      return { ...state, status: EStatus.error };
    },
  ),
);
