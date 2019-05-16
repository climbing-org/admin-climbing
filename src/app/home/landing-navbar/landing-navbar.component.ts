import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MenuService } from '../../shared/services/menu.service';
import Menu from '../../shared/classes/menu';

declare const $;

@Component({
  selector: 'ngx-landing-navbar',
  templateUrl: './landing-navbar.component.html',
  styleUrls: ['./landing-navbar.component.scss']
})
export class LandingNavbarComponent implements OnInit, AfterViewInit {

    menu: Menu[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
      this.menuService.list().subscribe((res: {data: Menu[]}) => {
          this.menu = res.data.filter(menu => menu.header);
          console.log(this.menu);
      });
  }

  ngAfterViewInit(): void {
    //   $('.navbar-light .dmenu').hover(function () {
    //     $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
    //   }, function () {
    //     $(this).find('.sm-menu').first().stop(true, true).slideUp(105);
    //   });
  }
}
