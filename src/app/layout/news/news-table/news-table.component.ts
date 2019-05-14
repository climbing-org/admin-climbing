import { Component, OnInit } from '@angular/core';
import { StaticPageService } from '../../../shared/services/static-page.service';
import StaticPage from '../../../shared/classes/static-page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['./news-table.component.scss']
})
export class NewsTableComponent implements OnInit {

    staticPages: StaticPage[];

  constructor(private staticPageService: StaticPageService,
              private router: Router) { }

  ngOnInit() {
      this.staticPageService.list().subscribe((res: {data: StaticPage[]}) => {
          this.staticPages = res.data;
      });
  }

  select(s: StaticPage) {
      this.router.navigateByUrl('/admin/news/' + s.slug);
      console.log(s);
  }

}
