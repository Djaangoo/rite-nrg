import { NgModule } from '@angular/core';
import { TeamsListComponent } from './teams-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [TeamsListComponent],
  imports: [SharedModule, NzTableModule],
})
export class TeamsListModule {}
