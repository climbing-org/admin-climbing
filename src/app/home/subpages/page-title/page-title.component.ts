import { Component, Input, OnInit } from '@angular/core';
import { JWTHelper } from '../../../shared/helpers/jwt.helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

    @Input() activeLinkTitle: string;
    @Input() title: string;
    @Input() showLogout: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

    onLoggedout() {
        JWTHelper.removeToken();
        localStorage.removeItem('user');
        const redirectURL = '/home';

        this.router.navigateByUrl(redirectURL);
        location.reload();
    }

}
