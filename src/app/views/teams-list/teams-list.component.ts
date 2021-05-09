import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { Observable } from 'rxjs';
import { EStatus } from 'src/app/model/enums';
import { ITask, ITeam, IUser } from 'src/app/model/interfaces';
import { getCurrentUserData } from 'src/app/store/current-user/current-user.selectors';
import { getStateStatus, getStateTeams } from 'src/app/store/teams/teams.selectors';
import { AddTeamComponent } from './components/add-team/add-team/add-team.component';
import { ChangeUserComponent } from './components/change-user/change-user/change-user.component';

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
  constructor(private store: Store, private modalService: NzModalService) {}

  getAllTasksStatus(team: ITeam): string {
    let completedBy = 0;
    team.tasks.map((task: ITask) => {
      completedBy += task.completedBy.length;
    });

    return `${completedBy}/${team.members.length * team.tasks.length}`;
  }

  showModal(): void {
    this.modalService.create({
      nzTitle: 'Add Team',
      nzContent: AddTeamComponent,
      nzFooter: null,
    });
  }

  showChangeUserModal(): void {
    this.modalService.create({
      nzTitle: 'Add Team',
      nzContent: ChangeUserComponent,
      nzFooter: null,
    });
  }
}
