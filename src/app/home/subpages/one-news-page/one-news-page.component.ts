import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../../shared/services/news.service';
import News from '../../../shared/classes/news';

@Component({
  selector: 'app-one-news-page',
  templateUrl: './one-news-page.component.html',
  styleUrls: ['./one-news-page.component.scss']
})
export class OneNewsPageComponent implements OnInit {

    slug: string;
    news: News = new News();

  constructor(private route: ActivatedRoute,
              private newsService: NewsService) { }

  ngOnInit() {
      this.slug = this.route.snapshot.params['id'];
      if (this.slug) {
          this.newsService.get(this.slug).subscribe((news: {data: News}) => {
              console.log(news);
              this.news = news.data;
          });
      }
  }

}
