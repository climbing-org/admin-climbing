import { Component, OnInit } from '@angular/core';
import Menu from '../../../shared/classes/menu';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../../shared/services/menu.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.scss']
})
export class MenuDetailsComponent implements OnInit {

    menu: Menu = new Menu();
    slug: string;

  constructor(private activeRoute: ActivatedRoute,
              private menuService: MenuService) { }

  ngOnInit() {
      this.slug = this.activeRoute.snapshot.params['id'];
      if (this.slug) {
          this.menuService.get(this.slug).subscribe((res: {data: Menu}) => {
              console.log(res);
              this.menu = res.data;
          });
      }
  }

    submit() {
        if (this.slug) {
            this.menuService.update(this.slug, this.menu).subscribe((res) => {
                console.log(res);
            });
        } else {
            this.menuService.post(this.menu).subscribe((res) => {
                console.log(res);
            });
        }
    }
}
