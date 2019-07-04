import { Component, OnInit } from '@angular/core';
import Event from '../../../../shared/classes/event';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../../shared/services/event.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {

    slug: string;
    event: Event = new Event();

  constructor(private route: ActivatedRoute,
              private eventsService: EventService) { }

  ngOnInit() {
      this.slug = this.route.snapshot.params['id'];
      if (this.slug) {
          this.eventsService.get(this.slug).subscribe((res: {data: Event}) => {
              this.event = res.data;
          });
      }
  }

}
