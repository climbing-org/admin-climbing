import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { TestService } from '../services/test.service';

@Component({
  selector: 'ngx-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {

  date = new Date();
  images;

  constructor(config: NgbCarouselConfig,
              private test: TestService) {
    // customize default values of carousels used by this component tree
    config.interval = 100000000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    // this.images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    // console.log(this.images);
    this.images = ['/assets/home/carousel-pic.png', '/assets/home/carousel-pic.png', '/assets/home/carousel-pic.png'];
    this.test.get().subscribe((r) => {
      console.log(r);
    });
  }

}
