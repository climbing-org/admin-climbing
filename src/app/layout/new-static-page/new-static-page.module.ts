import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard, PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';
import { NewStaticPageComponent } from './new-static-page.component';
import { NewStaticPageRoutingModule } from './new-static-page-routing.module';
import { MenuService } from '../../shared/services/menu.service';
import { StaticPageService } from '../../shared/services/static-page.service';

@NgModule({
    imports: [CommonModule, NewStaticPageRoutingModule, PageHeaderModule, FormsModule],
    declarations: [NewStaticPageComponent],
    providers: [MenuService, StaticPageService],
})
export class NewStaticPageModule {
}
