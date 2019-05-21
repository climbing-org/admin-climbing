import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageModule } from '../../../shared/components/user-page/user-page.module';
import { MyProfileComponent } from './my-profile.component';
import { MyProfileRoutingModule } from './my-profile-routing.module';

@NgModule({
  declarations: [MyProfileComponent],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
      UserPageModule
  ]
})
export class MyProfileModule { }
