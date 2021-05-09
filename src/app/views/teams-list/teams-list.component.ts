import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { Observable } from 'rxjs';
import { EGlobActions, EStatus } from 'src/app/model/enums';
import { IRootStore, ITask, ITeam, IUser } from 'src/app/model/interfaces';
import { getCurrentUserData } from 'src/app/store/current-user/current-user.selectors';
import { ETeamsActions, loadTeams } from 'src/app/store/teams/teams.actions';
import { getStateStatus, getStateTeams } from 'src/app/store/teams/teams.selectors';
import { EUsersActions } from 'src/app/store/users/users.actions';

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder;
  sortFn: NzTableSortFn;
  sortDirections: NzTableSortOrder[];
}

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss'],
})
export class TeamsListComponent {
  currentUser$: Observable<IUser> = this.store.select(getCurrentUserData);
  teams$: Observable<ITeam[]> = this.store.select(getStateTeams);
  status$: Observable<EStatus> = this.store.select(getStateStatus);

  listOfColumns: ColumnItem[] = [
    {
      name: 'Name',
      sortOrder: 'ascend',
      sortFn: (a: ITeam, b: ITeam) => {
        return a.name.localeCompare(b.name);
      },
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Members',
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: ITeam, b: ITeam) => {
        return a.members.length - b.members.length;
      },
      sortOrder: null,
    },
    {
      name: 'Tasks',
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: ITeam, b: ITeam) => {
        return a.members.length * a.tasks.length - b.members.length * b.tasks.length;
      },
      sortOrder: null,
    },
  ];
  constructor(private store: Store) {}

  getAllTasksStatus(team: ITeam): string {
    let completedBy = 0;
    team.tasks.map((task: ITask) => {
      completedBy += task.completedBy.length;
    });

    return `${completedBy}/${team.members.length * team.tasks.length}`;
  }
}
