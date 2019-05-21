import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTableRoutingModule } from './user-table-routing.module';
import { UserTableComponent } from './user-table.component';

@NgModule({
  declarations: [UserTableComponent],
  imports: [
    CommonModule,
    UserTableRoutingModule
  ]
})
export class UserTableModule { }
