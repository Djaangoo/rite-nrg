import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { ITeam, IUser, IUsers } from 'src/app/model/interfaces';

interface IHistoryState {
  team?: ITeam;
  user?: IUser;
}

@Injectable({
  providedIn: 'root',
})
export class IsMemberResolver implements Resolve<boolean> {
  isMember = false;
  constructor(private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const historyState: IHistoryState | undefined = this.router.getCurrentNavigation()?.extras.state;
    if (historyState && historyState.team && historyState.user) {
      this.isMember = historyState.team.members.includes(historyState.user.id);
      return of(this.isMember);
    } else {
      this.router.navigate(['teams']);
      return EMPTY;
    }
  }
}
