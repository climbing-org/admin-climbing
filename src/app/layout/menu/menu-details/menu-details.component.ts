import { Component, OnInit } from '@angular/core';
import Menu from '../../../shared/classes/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../../../shared/services/menu.service';
import { StaticPageService } from '../../../shared/services/static-page.service';
import StaticPage from '../../../shared/classes/static-page';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.scss']
})
export class MenuDetailsComponent implements OnInit {

    menu: Menu = new Menu();
    slug: string;
    menuIds: number[] = [];
    staticPageSlugs: string[] = [];

  constructor(private activeRoute: ActivatedRoute,
              private router: Router,
              private menuService: MenuService,
              private staticPageService: StaticPageService) { }

  ngOnInit() {
      this.slug = this.activeRoute.snapshot.params['id'];
      if (this.slug) {
          this.menuService.get(this.slug).subscribe((res: {data: Menu}) => {
              console.log(res);
              this.menu = res.data;
              this.getSelectData();
          });
      } else {
          this.getSelectData();
      }
  }

  getSelectData(): void {
      this.menuService.list().subscribe( (res: {data: Menu[]}) => {
          res.data.forEach((menu) => {
              if (this.menu.id !== menu.id) this.menuIds.push(menu.id);
              console.log(this.menuIds);
              if (menu.childs  && menu.childs.length) {
                  menu.childs.forEach((m) => {
                      if (this.menu.id !== menu.id) this.menuIds.push(m.id);
                      if (m.childs && m.childs.length) {
                          m.childs.forEach((m1) => {
                              if (this.menu.id !== menu.id) this.menuIds.push(m1.id);
                              if (m1.childs && m1.childs.length) {
                                  m1.childs.forEach((m2) => {
                                      if (this.menu.id !== menu.id) this.menuIds.push(m2.id);
                                  });
                              }
                          });
                      }
                  });
              }
          });
      });
      this.staticPageService.list().subscribe((res: {data: StaticPage[]}) => {
            res.data.forEach((sp) => {
                this.staticPageSlugs.push(sp.slug);
            });
      });
  }

    submit() {
        if (this.slug) {
            this.menuService.update(this.slug, this.menu).subscribe((res) => {
                console.log(res);
                this.router.navigateByUrl('/admin/menu-table');

            });
        } else {
            this.menuService.post(this.menu).subscribe((res) => {
                console.log(res);
            });
        }
    }
}
