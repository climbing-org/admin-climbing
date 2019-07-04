import { Component, OnInit } from '@angular/core';
import { EventsCalendarService } from '../../../shared/services/events-calendar.service';
import EventsCalendar from '../../../shared/classes/events-calendar';
import { GeneralHelper } from '../../../shared/helpers/general.helper';

@Component({
  selector: 'app-events-calendar-page',
  templateUrl: './events-calendar-page.component.html',
  styleUrls: ['./events-calendar-page.component.scss']
})
export class EventsCalendarPageComponent implements OnInit {

    items: EventsCalendar[];
    page = 1;
    pageSize = 7;
    date = new Date();

  constructor(private eventsCalendarService: EventsCalendarService) { }

  ngOnInit() {
      this.eventsCalendarService.list().subscribe((res: {data: EventsCalendar[]}) => {
          this.items = GeneralHelper.isEmpty(res) ? [] : res.data;
      });
  }

}
