import { Component, OnInit } from '@angular/core';
import Event from '../../../shared/classes/event';
import { GeneralHelper } from '../../../shared/helpers/general.helper';
import { EventService } from '../../../shared/services/event.service';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

    events: Event[];
    page = 1;
    pageSize = 7;

  constructor(private eventService: EventService) { }

  ngOnInit() {
      this.eventService.list().subscribe((res: {data: Event[]}) => {
          this.events = GeneralHelper.isEmpty(res) ? [] : res.data;
      });
  }

}
