import { createAction, props } from '@ngrx/store';
import { ITeam } from 'src/app/model/interfaces';

export enum ETeamsActions {
  load = '[Teams] Load Teams',
  loadSuccess = '[Teams] Load Teams Success',
  loadFailure = '[Teams] Load Teams Failure',
}

export const loadTeams = createAction(ETeamsActions.load);

export const loadTeamsSuccess = createAction(ETeamsActions.loadSuccess, props<{ teams: ITeam[] }>());

export const loadTeamsFailure = createAction(ETeamsActions.loadFailure, props<{ error: any }>());
