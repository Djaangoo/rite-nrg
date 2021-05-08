import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IRootStore } from 'src/app/model/interfaces';
import { ITeamsState, teamsFeatureKey } from './teams.reducer';

export const selectTeamsFeature = createFeatureSelector<ITeamsState>(teamsFeatureKey);

const getStateTeams = createSelector(selectTeamsFeature, (state: ITeamsState) => {
  return state.data;
});

const getStateStatus = createSelector(selectTeamsFeature, (state: ITeamsState) => {
  return state.status;
});

export { getStateTeams, getStateStatus };
