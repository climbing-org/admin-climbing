import { AfterViewInit, Component, OnInit } from '@angular/core';

declare const $;

@Component({
  selector: 'ngx-landing-navbar',
  templateUrl: './landing-navbar.component.html',
  styleUrls: ['./landing-navbar.component.scss']
})
export class LandingNavbarComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //   $('.navbar-light .dmenu').hover(function () {
    //     $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
    //   }, function () {
    //     $(this).find('.sm-menu').first().stop(true, true).slideUp(105);
    //   });
  }
}
