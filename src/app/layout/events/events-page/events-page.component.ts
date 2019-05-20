import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadService } from '../../../shared/services/upload.service';
import { EventService } from '../../../shared/services/event.service';
import Event from '../../../shared/classes/event';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit, AfterViewInit {
    @ViewChild('inputFile') inputFile: ElementRef;

    slug: string;
    event: Event = new Event();
    file: File;
    loading = false;

  constructor(private eventsService: EventService,
              private route: ActivatedRoute,
              private uploadService: UploadService,
              private router: Router) { }

  ngOnInit() {
      this.slug = this.route.snapshot.params['id'];
      if (this.slug) {
          this.eventsService.get(this.slug).subscribe((res: {data: Event}) => {
              console.log(res);
              this.event = res.data;
          });
      }
  }

  ngAfterViewInit(): void {
      $(this.inputFile.nativeElement).on('change', event => {
          this.loading = true;
          const inputFile = event.target.files[0];
          if (!inputFile || !inputFile.name) {
              return;
          }
          this.uploadService.post(inputFile).subscribe((res: {location: string}) => {
              this.loading = true;
              this.file = inputFile;
              this.event.logo = res.location;
          });
      });
  }
    submit() {
        if (this.slug) {
            this.eventsService.update(this.slug, this.event).subscribe((res) => {
                this.router.navigateByUrl('/admin/events-table');
                console.log(res);
            });
        } else {
            this.eventsService.post(this.event).subscribe((res) => {
                this.router.navigateByUrl('/admin/events-table');
                console.log(res);
            });
        }
    }

}
