import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { StaticPageService } from '../../../shared/services/static-page.service';
import StaticPage from '../../../shared/classes/static-page';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadService } from '../../../shared/services/upload.service';

declare const $: any;

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit, AfterViewInit {
    @ViewChild('inputFile') inputFile: ElementRef;

    slug: string;
    staticPage: StaticPage = new StaticPage();
    dataModel: any;

  constructor(private staticPageService: StaticPageService,
              private route: ActivatedRoute,
              private uploadService: UploadService,
              private router: Router) { }

  ngOnInit() {
      this.slug = this.route.snapshot.params['id'];
      if (this.slug) {
        this.staticPageService.get(this.slug).subscribe((staticPage: {data: StaticPage}) => {
            console.log(staticPage);
            this.staticPage = staticPage.data;
        });
      }
  }

  ngAfterViewInit() {
      $(this.inputFile.nativeElement).on('change', event => {
          const inputFile = event.target.files[0];
          if (!inputFile || !inputFile.name) {
              return;
          }
          console.log(inputFile);
          this.uploadService.post(inputFile).subscribe((res) => {
              console.log(res);
          });
      });
  }

  submit() {
      console.log(this.dataModel);
      if (this.slug) {
          this.staticPageService.update(this.slug, this.staticPage).subscribe((res) => {
              this.router.navigateByUrl('/admin/news-table');
              console.log(res);
          });
      } else {
          this.staticPageService.post(this.staticPage).subscribe((res) => {
              console.log(res);
          });
      }
  }

}
