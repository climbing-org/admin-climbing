import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageModule } from '../../../shared/components/user-page/user-page.module';
import { ProfileTrainerComponent } from './profile-trainer.component';
import { ProfileTrainerRoutingModule } from './profile-trainer-routing.module';

@NgModule({
  declarations: [ProfileTrainerComponent],
  imports: [
    CommonModule,
    ProfileTrainerRoutingModule,
      UserPageModule
  ]
})
export class ProfileTrainerModule { }
