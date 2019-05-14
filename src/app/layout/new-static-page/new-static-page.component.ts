import { Component, OnInit } from '@angular/core';
import { StaticPageService } from '../dashboard/services/static-page.service';

@Component({
  selector: 'app-new-static-page',
  templateUrl: './new-static-page.component.html',
  styleUrls: ['./new-static-page.component.scss']
})
export class NewStaticPageComponent implements OnInit {

    name: string;
    slug: string;
    seo_hashtag: string;
    seo_title: string;
    seo_keywords: string;
    seo_description: string;
    content: string;


  constructor(private staticPageService: StaticPageService) { }

  ngOnInit() {
  }

  submit() {
      const body = {
        name: this.name,
        slug: this.slug,
        seo_hashtag: this.seo_hashtag,
        seo_title: this.seo_title,
        seo_keywords: this.seo_keywords,
        seo_description: this.seo_description,
        content: this.content
      };
      this.staticPageService.post(body).subscribe((res) => {
console.log(res);
      });
  }

}
