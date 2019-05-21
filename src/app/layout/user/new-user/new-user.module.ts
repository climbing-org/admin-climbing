import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewUserRoutingModule } from './new-user-routing.module';
import { NewUserComponent } from './new-user.component';
import { UsersService } from '../../../shared/services/user.service';

@NgModule({
  declarations: [NewUserComponent],
  imports: [
    CommonModule,
    NewUserRoutingModule,
      FormsModule,
      ReactiveFormsModule
  ],
    providers: [
        UsersService
    ]
})
export class NewUserModule { }
