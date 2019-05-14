import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsTableRoutingModule } from './news-table-routing.module';
import { NewsTableComponent } from './news-table.component';
import { StaticPageService } from '../../../shared/services/static-page.service';

@NgModule({
    imports: [
        CommonModule,
        NewsTableRoutingModule
    ],
      declarations: [
          NewsTableComponent
      ],
    providers: [
        StaticPageService
    ],
})
export class NewsTableModule { }
