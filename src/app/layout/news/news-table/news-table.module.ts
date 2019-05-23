import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { NewsTableRoutingModule } from './news-table-routing.module';
import { NewsTableComponent } from './news-table.component';
import { NewsService } from '../../../shared/services/news.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
    imports: [
        CommonModule,
        NewsTableRoutingModule,
        Ng2SmartTableModule
    ],
      declarations: [
          NewsTableComponent
      ],
    providers: [
        NewsService,
        DatePipe,
    ],
})
export class NewsTableModule { }
