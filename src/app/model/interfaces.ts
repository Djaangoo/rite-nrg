import { ITeamsState } from '../store/teams/teams.reducer';
import { IUsersState } from '../store/users/users.reducer';

export interface ITeam {
  id: number;
  name: string;
  tasks: ITask[];
  members: number[];
}

export interface ITask {
  id: string;
  title: string;
  description: string;
  completedBy: number[];
}

export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}
export interface IUsers {
  [userId: string]: IUser;
}

export interface IRootStore {
  teams: ITeamsState;
  users: IUsersState;
}
