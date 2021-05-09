import { NgModule } from '@angular/core';
import { TeamsListComponent } from './teams-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AddTeamComponent } from './components/add-team/add-team/add-team.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ChangeUserComponent } from './components/change-user/change-user/change-user.component';

@NgModule({
  declarations: [TeamsListComponent, AddTeamComponent, ChangeUserComponent],
  imports: [SharedModule, NzTableModule, NzModalModule, NzInputModule, NzFormModule, NzSelectModule],
})
export class TeamsListModule {}
