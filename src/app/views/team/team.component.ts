import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { ITask, ITeam, IUser } from 'src/app/model/interfaces';
import { getCurrentUserData } from 'src/app/store/current-user/current-user.selectors';
import {
  ETeamsActions,
  markTaskCompleted,
  removeSelectedTask,
  removeSelectedTeam,
  unmarkTaskCompleted,
} from 'src/app/store/teams/teams.actions';
import { getStateSingleTeam } from 'src/app/store/teams/teams.selectors';
import { AddTaskComponent } from './components/add-task/add-task/add-task.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit, OnDestroy {
  id = 0;
  isMember = false;
  team$!: Observable<ITeam | undefined>;
  currentUserData: IUser = {} as IUser;
  private currentUser$!: Subscription;
  private teamId$!: Subscription;
  private routeData$!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private modalService: NzModalService,
    private router: Router,
  ) {}

  markTask(_task: ITask, _team: ITeam): void {
    this.store.dispatch(markTaskCompleted({ user: this.currentUserData, task: _task, team: _team }));
  }

  unmarkTask(_task: ITask, _team: ITeam): void {
    this.store.dispatch(unmarkTaskCompleted({ user: this.currentUserData, task: _task, team: _team }));
  }

  deleteTask(_task: ITask, _team: ITeam): void {
    this.modalService.confirm({
      nzTitle: 'Do you Want to delete task?',
      nzContent: `When clicked the OK button, the "${_task.title}" will be delete.`,
      nzOkDanger: true,
      nzOnOk: () => {
        this.store.dispatch(removeSelectedTask({ task: _task, team: _team }));
      },
    });
  }

  deleteTeam(_team: ITeam): void {
    this.modalService.confirm({
      nzTitle: 'Do you Want to delete team?',
      nzContent: `When clicked the OK button, the "${_team.name}" will be delete.`,
      nzOkDanger: true,
      nzOnOk: () => {
        this.router.navigate(['../teams']);
        this.store.dispatch(removeSelectedTeam({ team: _team }));
      },
    });
  }

  back(): void {
    this.router.navigate(['..']);
  }

  getProgressValue(_team: ITeam): string {
    let completedBy = 0;
    _team.tasks.map((task: ITask) => {
      completedBy += task.completedBy.length;
    });
    return ((completedBy / (_team.members.length * _team.tasks.length)) * 100).toFixed(1);
  }

  showModal(): void {
    this.modalService.create({
      nzTitle: 'Add Task',
      nzContent: AddTaskComponent,
      nzFooter: null,
      nzComponentParams: {
        id: this.id,
      },
    });
  }

  ngOnInit(): void {
    this.routeData$ = this.route.data.subscribe((data) => {
      this.isMember = data.isMember;
    });
    this.teamId$ = this.route.params.subscribe((params) => {
      this.id = Number(params.id);
    });
    this.team$ = this.store.select(getStateSingleTeam, { id: Number(this.id) });
    this.currentUser$ = this.store.select(getCurrentUserData).subscribe((data) => {
      this.currentUserData = data;
    });
  }

  ngOnDestroy() {
    this.teamId$.unsubscribe();
    this.routeData$.unsubscribe();
    this.currentUser$.unsubscribe();
  }
}
