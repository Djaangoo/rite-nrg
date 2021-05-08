import { Action, createReducer, on } from '@ngrx/store';
import { EStatus } from 'src/app/model/enums';
import { ITeam } from 'src/app/model/interfaces';
import { loadTeams, loadTeamsFailure, loadTeamsSuccess } from './teams.actions';

export const teamsFeatureKey = 'teams';

export interface ITeamsState {
  data: ITeam[];
  status: EStatus;
}

export const initialState: ITeamsState = {
  data: [],
  status: EStatus.nonExecuted,
};
export const teamsReducer = createReducer(
  initialState,
  on(
    loadTeams,
    (state): ITeamsState => {
      return { ...state, status: EStatus.loading };
    },
  ),
  on(
    loadTeamsSuccess,
    (state, action): ITeamsState => {
      return { ...state, status: EStatus.loaded, data: action.teams };
    },
  ),
  on(
    loadTeamsFailure,
    (state): ITeamsState => {
      return { ...state, status: EStatus.error };
    },
  ),
);
