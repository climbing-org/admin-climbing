import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NewsService } from '../../shared/services/news.service';
import News from '../../shared/classes/news';
import { EventService } from '../../shared/services/event.service';
import { GeneralHelper } from '../../shared/helpers/general.helper';
import Event from '../../shared/classes/event';
import { UsersService } from '../../shared/services/user.service';
import User from '../../shared/classes/user';

@Component({
  selector: 'ngx-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {

  date = new Date();
  images;
  news: News[];
  events: Event[];
  users: User[];

  constructor(config: NgbCarouselConfig,
              private eventService: EventService,
              private newsService: NewsService,
              private usersService: UsersService) {
    // customize default values of carousels used by this component tree
    config.interval = 100000000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    this.images = ['/assets/home/carousel-new.png', '/assets/home/carousel-pic.png'];
    this.newsService.list().subscribe((res: {data: News[]}) => {
        this.news = GeneralHelper.isEmpty(res) ? [] : res.data;
        this.news.splice(3);
    });
    this.eventService.list().subscribe((res: {data: Event[]}) => {
      this.events = GeneralHelper.isEmpty(res) ? [] : res.data;
        this.events.splice(10);
    });
    this.usersService.list().subscribe((res: {data: User[]}) => {
        this.users = GeneralHelper.isEmpty(res) ? [] : res.data;
        this.users.splice(6);
    });
  }

}
