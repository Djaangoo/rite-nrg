import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IRootStore } from 'src/app/model/interfaces';
import { ITeamsState, teamsFeatureKey } from './teams.reducer';

export const selectTeamsFeature = createFeatureSelector<ITeamsState>(teamsFeatureKey);

const getStateTeams = createSelector(selectTeamsFeature, (state: ITeamsState) => {
  return state.data;
});

const getStateSingleTeam = createSelector(selectTeamsFeature, (state: ITeamsState, props: { id: number }) => {
  return state.data.find((team) => {
    return team.id === props.id;
  });
});

const getStateStatus = createSelector(selectTeamsFeature, (state: ITeamsState) => {
  return state.status;
});

export { getStateTeams, getStateStatus, getStateSingleTeam };
