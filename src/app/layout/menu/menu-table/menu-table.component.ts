import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../shared/services/menu.service';
import Menu from '../../../shared/classes/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent implements OnInit {

    menu: Menu[];
    selectedMenu: Menu;

  constructor(private menuService: MenuService,
              private router: Router) { }

  ngOnInit() {
      this.menuService.list().subscribe((res: {data: Menu[]}) => {
          this.menu = res.data;
      });
  }

  edit(m: Menu) {
      this.router.navigateByUrl('/menu/' + m.id);
      console.log(m);
  }

}
