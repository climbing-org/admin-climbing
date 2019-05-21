import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTableRoutingModule } from './user-table-routing.module';
import { UserTableComponent } from './user-table.component';
import { UsersService } from '../../../shared/services/user.service';

@NgModule({
  declarations: [UserTableComponent],
  imports: [
    CommonModule,
    UserTableRoutingModule
  ],
    providers: [
        UsersService
    ]
})
export class UserTableModule { }
