import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IRootStore, IUsers } from 'src/app/model/interfaces';
import { IUsersState, usersFeatureKey } from './users.reducer';

export const selectUsersFeature = createFeatureSelector<IUsersState>(usersFeatureKey);

const getStateUsers = createSelector(selectUsersFeature, (state: IUsersState) => {
  return state.data;
});

const getStateSingleUser = createSelector(selectUsersFeature, (state: IUsersState, props: { id: number }) => {
  return state.data[props.id];
});

const getStateStatus = createSelector(selectUsersFeature, (state: IUsersState) => {
  return state.status;
});

export { getStateUsers, getStateStatus, getStateSingleUser };
