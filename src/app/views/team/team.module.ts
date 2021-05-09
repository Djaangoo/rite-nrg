import { NgModule } from '@angular/core';
import { TeamComponent } from './team.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AddTaskComponent } from './components/add-task/add-task/add-task.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzProgressModule } from 'ng-zorro-antd/progress';

@NgModule({
  declarations: [TeamComponent, AddTaskComponent],
  imports: [
    SharedModule,
    NzCardModule,
    NzIconModule,
    NzModalModule,
    NzInputModule,
    NzFormModule,
    NzStatisticModule,
    NzProgressModule,
  ],
})
export class TeamModule {}
