import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TeamsService } from '../../core/services/teams/teams.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { ETeamsActions } from './teams.actions';
import { EGlobActions } from 'src/app/model/enums';

@Injectable()
export class TeamsEffects {
  loadTeams$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EGlobActions.loadData, ETeamsActions.load),
      mergeMap(() => {
        return this.teamsService.getAll().pipe(
          map((teams) => {
            return { type: ETeamsActions.loadSuccess, teams };
          }),
          catchError(() => {
            return of({ type: ETeamsActions.loadFailure });
          }),
        );
      }),
    );
  });

  constructor(private actions$: Actions, private teamsService: TeamsService) {}
}
