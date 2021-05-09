import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserAvatarComponent } from './components/user-avatar/user-avatar/user-avatar.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

@NgModule({
  declarations: [UserAvatarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NzAvatarModule,
    NzGridModule,
    NzButtonModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    UserAvatarComponent,
    NzGridModule,
    NzPageHeaderModule,
    NzButtonModule,
    FormsModule,
    NzEmptyModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
