import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { HomeModule } from '../../home.module';
import { TeamService } from '../../../shared/services/team.service';

@NgModule({
  declarations: [TeamsComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
      HomeModule,
  ], providers: [
      TeamService
    ]
})
export class TeamsModule { }
