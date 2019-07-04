import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsPageRoutingModule } from './events-page-routing.module';
import { EventsPageComponent } from './events-page.component';
import { HomeModule } from '../../home.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { EventPageComponent } from './event-page/event-page.component';

@NgModule({
  declarations: [EventsPageComponent, EventPageComponent],
  imports: [
    CommonModule,
    EventsPageRoutingModule,
      HomeModule,
      NgbPaginationModule
  ]
})
export class EventsPageModule { }
