import { Component, OnInit } from '@angular/core';
import StaticPage from '../../../shared/classes/static-page';
import { Router } from '@angular/router';
import News from '../../../shared/classes/news';
import { NewsService } from '../../../shared/services/news.service';

@Component({
  selector: 'app-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['./news-table.component.scss']
})
export class NewsTableComponent implements OnInit {

    news: News[];

  constructor(private newsService: NewsService,
              private router: Router) { }

  ngOnInit() {
      this.newsService.list().subscribe((res: {data: News[]}) => {
          this.news = res.data;
      });
  }

  select(s: News) {
      this.router.navigateByUrl('/admin/news-page/' + s.slug);
      console.log(s);
  }

}
