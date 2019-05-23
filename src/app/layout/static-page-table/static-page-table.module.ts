import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { StaticPageTableRoutingModule } from './static-page-table-routing.module';
import { StaticPageTableComponent } from './static-page-table.component';
import { StaticPageService } from '../../shared/services/static-page.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
    imports: [
        CommonModule,
        StaticPageTableRoutingModule,
        Ng2SmartTableModule
    ],
      declarations: [
          StaticPageTableComponent
      ],
    providers: [
        StaticPageService,
        DatePipe
    ],
})
export class StaticPageTableModule { }
