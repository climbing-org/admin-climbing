import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { UserTableRoutingModule } from './user-table-routing.module';
import { UserTableComponent } from './user-table.component';
import { UsersService } from '../../../shared/services/user.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [UserTableComponent],
  imports: [
    CommonModule,
    UserTableRoutingModule,
    Ng2SmartTableModule
  ],
    providers: [
        UsersService,
        DatePipe
    ]
})
export class UserTableModule { }
