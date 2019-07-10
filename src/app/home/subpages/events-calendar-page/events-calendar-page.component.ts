import { Component, OnInit } from '@angular/core';
import { EventsCalendarService } from '../../../shared/services/events-calendar.service';
import EventsCalendar from '../../../shared/classes/events-calendar';
import { GeneralHelper } from '../../../shared/helpers/general.helper';
import { Router } from '@angular/router';

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

  constructor(private eventsCalendarService: EventsCalendarService,
              private route: Router) { }

  ngOnInit() {
      this.eventsCalendarService.list().subscribe((res: {data: EventsCalendar[]}) => {
          this.items = GeneralHelper.isEmpty(res) ? [] : res.data;
      });
  }

  navigate(e: EventsCalendar) {
      if (e.type === 'event') {
          this.route.navigateByUrl('/home/events/' + e.slug);
      } if (e.type === 'news') {
          this.route.navigateByUrl('/home/news-page/' + e.slug);
      }
  }

}
