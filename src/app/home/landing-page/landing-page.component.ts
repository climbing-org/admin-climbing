import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NewsService } from '../../shared/services/news.service';
import News from '../../shared/classes/news';

@Component({
  selector: 'ngx-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {

  date = new Date();
  images;
  news: News[];

  constructor(config: NgbCarouselConfig,
              private newsService: NewsService ) {
    // customize default values of carousels used by this component tree
    config.interval = 100000000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    this.images = ['/assets/home/carousel-pic.png', '/assets/home/carousel-pic.png', '/assets/home/carousel-pic.png'];
    this.newsService.list().subscribe((res: {data: News[]}) => {
        this.news = res.data;
        console.log(res);
    });
  }

}
