import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UsersService } from 'src/app/core/services/users/users.service';
import { ETeamsActions } from '../teams/teams.actions';
import { EUsersActions } from './users.actions';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EUsersActions.load, ETeamsActions.loadSuccess),
      mergeMap(() => {
        return this.usersService.getAll().pipe(
          map((users) => {
            return { type: EUsersActions.loadSuccess, users };
          }),
          catchError(() => {
            return of({ type: EUsersActions.loadFailure });
          }),
        );
      }),
    );
  });

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
