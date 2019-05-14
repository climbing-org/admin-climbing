import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticPageTableRoutingModule } from './static-page-table-routing.module';
import { StaticPageTableComponent } from './static-page-table.component';
import { StaticPageService } from '../../shared/services/static-page.service';

@NgModule({
    imports: [
        CommonModule,
        StaticPageTableRoutingModule
    ],
      declarations: [
          StaticPageTableComponent
      ],
    providers: [
        StaticPageService
    ],
})
export class StaticPageTableModule { }
