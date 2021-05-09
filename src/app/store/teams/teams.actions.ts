import { createAction, props } from '@ngrx/store';
import { ITask, ITeam, IUser } from 'src/app/model/interfaces';

export enum ETeamsActions {
  load = '[Teams] Load Teams',
  loadSuccess = '[Teams] Load Teams Success',
  loadFailure = '[Teams] Load Teams Failure',
  markTask = '[Teams] Mark Task as Completed',
  unmarkTask = '[Teams] Unmark Task as Completed',
  addNewTask = '[Teams] Add New Task',
  removeTask = '[Teams] Remove Task',
  removeTeam = '[Teams] Remove Team',
  addNewTeam = '[Teams] Add New Team',
}

export const loadTeams = createAction(ETeamsActions.load);

export const loadTeamsSuccess = createAction(ETeamsActions.loadSuccess, props<{ teams: ITeam[] }>());

export const loadTeamsFailure = createAction(ETeamsActions.loadFailure, props<{ error: any }>());

export const markTaskCompleted = createAction(
  ETeamsActions.markTask,
  props<{ user: IUser; team: ITeam; task: ITask }>(),
);

export const unmarkTaskCompleted = createAction(
  ETeamsActions.unmarkTask,
  props<{ user: IUser; team: ITeam; task: ITask }>(),
);

export const addTask = createAction(
  ETeamsActions.addNewTask,
  props<{ teamID: number; title: string; description: string }>(),
);

export const removeSelectedTask = createAction(ETeamsActions.removeTask, props<{ task: ITask; team: ITeam }>());

export const removeSelectedTeam = createAction(ETeamsActions.removeTeam, props<{ team: ITeam }>());

export const addTeam = createAction(ETeamsActions.addNewTeam, props<{ title: string; members: number[] }>());
