import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserPageComponent } from './user-page/user-page.component';
import { UsersService } from '../services/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
      UserPageComponent
  ],
  exports: [
      UserPageComponent
  ],
  providers : [
      UsersService
  ]
})
export class ComponentModule { }
