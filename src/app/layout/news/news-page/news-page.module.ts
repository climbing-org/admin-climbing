import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard, PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';
import { NewsPageComponent } from './news-page.component';
import { NewsPageRoutingModule } from './news-page-routing.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MenuService } from '../../../shared/services/menu.service';
import { StaticPageService } from '../../../shared/services/static-page.service';
import { UploadService } from '../../../shared/services/upload.service';

@NgModule({
    imports: [CommonModule, NewsPageRoutingModule, PageHeaderModule, FormsModule, EditorModule],
    declarations: [NewsPageComponent],
    providers: [MenuService, StaticPageService, UploadService],
})
export class NewsPageModule {
}
