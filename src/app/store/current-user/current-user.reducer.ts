import { createReducer, on } from '@ngrx/store';
import { IUser } from 'src/app/model/interfaces';
import { changeCurrentUser, loadCurrentUsers } from './current-user.actions';

export const currentUserFeatureKey = 'currentUser';

export interface ICurrentUserState {
  data: IUser;
}

export const initialState: ICurrentUserState = {
  data: {
    id: 1,
    email: 'Jake18@gmail.com',
    firstName: 'Florian',
    lastName: 'Kunde',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
};

export const currentUserReducer = createReducer(
  initialState,
  on(
    loadCurrentUsers,
    (state): ICurrentUserState => {
      return { ...state };
    },
  ),
  on(
    changeCurrentUser,
    (state, action): ICurrentUserState => {
      return { ...state, data: { ...action.user } };
    },
  ),
);
