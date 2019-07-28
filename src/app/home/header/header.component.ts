import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../shared/services/security.service';
import User from '../../shared/classes/user';

@Component({
  selector: 'ngx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    user: User;

    isCollapsed = true;

  constructor(private ss: SecurityService) { }

  ngOnInit() {
      this.user = this.ss.getUser();
  }

}
