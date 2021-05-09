import { Action, createReducer, on } from '@ngrx/store';
import { EStatus } from 'src/app/model/enums';
import { ITask, ITeam } from 'src/app/model/interfaces';
import {
  addTask,
  addTeam,
  loadTeams,
  loadTeamsFailure,
  loadTeamsSuccess,
  markTaskCompleted,
  removeSelectedTask,
  removeSelectedTeam,
  unmarkTaskCompleted,
} from './teams.actions';

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
  on(
    markTaskCompleted,
    (state, action): ITeamsState => {
      const changedTeams = [...state.data].map((_team) => {
        if (_team.id === action.team.id) {
          return {
            ..._team,
            tasks: _team.tasks.map((_task) => {
              if (_task.id === action.task.id) {
                return { ..._task, completedBy: [..._task.completedBy, action.user.id] };
              }
              return _task;
            }),
          };
        }
        return _team;
      });

      return { ...state, data: changedTeams };
    },
  ),
  on(
    unmarkTaskCompleted,
    (state, action): ITeamsState => {
      const changedTeams = [...state.data].map((_team) => {
        if (_team.id === action.team.id) {
          return {
            ..._team,
            tasks: _team.tasks.map((_task) => {
              if (_task.id === action.task.id) {
                return {
                  ..._task,
                  completedBy: _task.completedBy.filter((_id) => {
                    return _id !== action.user.id;
                  }),
                };
              }
              return _task;
            }),
          };
        }
        return _team;
      });

      return { ...state, data: changedTeams };
    },
  ),
  on(
    addTask,
    (state, action): ITeamsState => {
      const changedTeams = [...state.data].map((_team) => {
        if (_team.id === action.teamID) {
          const newTask: ITask = {
            title: action.title,
            description: action.description,
            completedBy: [],
            id: new Date().valueOf().toString(),
          };

          return {
            ..._team,
            tasks: [..._team.tasks, newTask],
          };
        }
        return _team;
      });

      return { ...state, data: changedTeams };
    },
  ),
  on(
    removeSelectedTask,
    (state, action): ITeamsState => {
      const changedTeams = [...state.data].map((_team) => {
        if (_team.id === action.team.id) {
          return {
            ..._team,
            tasks: _team.tasks.filter((_task) => {
              return _task.id !== action.task.id;
            }),
          };
        }
        return _team;
      });

      return { ...state, data: changedTeams };
    },
  ),
  on(
    removeSelectedTeam,
    (state, action): ITeamsState => {
      const changedTeams = [...state.data].filter((_team) => {
        return _team.id !== action.team.id;
      });

      return { ...state, data: changedTeams };
    },
  ),
  on(
    addTeam,
    (state, action): ITeamsState => {
      const newTeam: ITeam = {
        tasks: [],
        name: action.title,
        id: new Date().valueOf(),
        members: action.members,
      };

      return { ...state, data: [...state.data, newTeam] };
    },
  ),
);
