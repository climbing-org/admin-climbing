import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsTableRoutingModule } from './events-table-routing.module';
import { EventsTableComponent } from './events-table.component';
import { EventService } from '../../../shared/services/event.service';

@NgModule({
    imports: [
        CommonModule,
        EventsTableRoutingModule
    ],
    declarations: [
        EventsTableComponent
    ],
    providers: [
        EventService
    ],
})
export class EventsTableModule { }
