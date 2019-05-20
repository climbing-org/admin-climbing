import { Component, OnInit } from '@angular/core';
import Event from '../../../shared/classes/event';
import { EventService } from '../../../shared/services/event.service';
import { Router } from '@angular/router';
import { GeneralHelper } from '../../../shared/helpers/general.helper';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.scss']
})
export class EventsTableComponent implements OnInit {

    events: Event[];

  constructor(private eventService: EventService,
              private router: Router) { }

  ngOnInit() {
      this.eventService.list().subscribe((res: {data: Event[]}) => {
          this.events = GeneralHelper.isEmpty(res) ? [] : res.data;
      });
  }

    select(s: Event) {
        this.router.navigateByUrl('/admin/events-page/' + s.slug);
        console.log(s);
    }

}
