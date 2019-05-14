import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsTableRoutingModule } from './news-table-routing.module';
import { NewsTableComponent } from './news-table.component';
import { NewsService } from '../../../shared/services/news.service';

@NgModule({
    imports: [
        CommonModule,
        NewsTableRoutingModule
    ],
      declarations: [
          NewsTableComponent
      ],
    providers: [
        NewsService
    ],
})
export class NewsTableModule { }
