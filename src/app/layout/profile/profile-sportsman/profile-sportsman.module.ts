import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileSportsmanRoutingModule } from './profile-sportsman-routing.module';
import { ProfileSportsmanComponent } from './profile-sportsman.component';
import { UserPageModule } from '../../../shared/components/user-page/user-page.module';

@NgModule({
  declarations: [ProfileSportsmanComponent],
  imports: [
    CommonModule,
    ProfileSportsmanRoutingModule,
      UserPageModule
  ]
})
export class ProfileSportsmanModule { }
