import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { TeamTableRoutingModule } from './team-table-routing.module';
import { TeamTableComponent } from './team-table.component';
import { TeamService } from '../../../shared/services/team.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultInterceptor } from '../../../shared/interceptors/default.interceptor';

@NgModule({
  declarations: [TeamTableComponent],
  imports: [
    CommonModule,
    TeamTableRoutingModule,
      Ng2SmartTableModule
  ], providers: [
      TeamService,
        DatePipe,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: DefaultInterceptor,
            multi: true
        },
    ]
})
export class TeamTableModule { }
