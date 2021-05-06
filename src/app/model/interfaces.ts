export interface ITeam {
  id: number;
  name: string;
  tasks: ITask[];
  users: number[];
}

export interface ITask {
  id: string;
  title: string;
  completedBy: number[];
}

export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}
