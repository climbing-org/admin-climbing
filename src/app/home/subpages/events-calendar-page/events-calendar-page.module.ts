import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsCalendarPageRoutingModule } from './events-calendar-page-routing.module';
import { EventsCalendarPageComponent } from './events-calendar-page.component';
import { EventsCalendarService } from '../../../shared/services/events-calendar.service';
import { HomeModule } from '../../home.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [EventsCalendarPageComponent],
  imports: [
    CommonModule,
    EventsCalendarPageRoutingModule,
      HomeModule,
      NgbPaginationModule
  ], providers: [
      EventsCalendarService
    ]
})
export class EventsCalendarPageModule { }
