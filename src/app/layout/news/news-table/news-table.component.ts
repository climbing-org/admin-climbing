import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import News from '../../../shared/classes/news';
import { NewsService } from '../../../shared/services/news.service';
import { GeneralHelper } from '../../../shared/helpers/general.helper';

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
          this.news = GeneralHelper.isEmpty(res) ? [] : res.data;
      });
  }

  select(s: News) {
      this.router.navigateByUrl('/admin/news-page/' + s.slug);
      console.log(s);
  }

}
