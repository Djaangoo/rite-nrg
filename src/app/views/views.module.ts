import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamModule } from './team/team.module';
import { TeamsListModule } from './teams-list/teams-list.module';
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, TeamModule, TeamsListModule, NotFoundModule],
  exports: [TeamModule, TeamsListModule, NotFoundModule],
})
export class ViewsModule {}
