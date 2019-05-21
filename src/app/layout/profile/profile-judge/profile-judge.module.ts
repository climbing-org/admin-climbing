import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileJudgeComponent } from './profile-judge.component';
import { UserPageModule } from '../../../shared/components/user-page/user-page.module';
import { ProfileJudgeRoutingModule } from './profile-judge-routing.module';

@NgModule({
  declarations: [ProfileJudgeComponent],
  imports: [
    CommonModule,
    ProfileJudgeRoutingModule,
      UserPageModule
  ]
})
export class ProfileJudgeModule { }
