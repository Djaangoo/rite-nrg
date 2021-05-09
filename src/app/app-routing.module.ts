import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { IsMemberResolver } from './views/team/resolvers/is-member/is-member.resolver';
import { TeamComponent } from './views/team/team.component';
import { TeamsListComponent } from './views/teams-list/teams-list.component';

const routes: Routes = [
  { path: 'teams', component: TeamsListComponent },
  { path: 'team/:id', component: TeamComponent, resolve: { isMember: IsMemberResolver } },
  { path: '', redirectTo: '/teams', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
