import { Component, OnInit } from '@angular/core';
import News from '../../../shared/classes/news';
import { GeneralHelper } from '../../../shared/helpers/general.helper';
import { NewsService } from '../../../shared/services/news.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

    news: News[];
    page = 1;
    pageSize = 7;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
      this.newsService.list().subscribe((res: {data: News[]}) => {
          this.news = GeneralHelper.isEmpty(res) ? [] : res.data;
      });
  }

}
