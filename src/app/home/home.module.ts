import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingNavbarComponent } from './landing-navbar/landing-navbar.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { NbCalendarModule } from '@nebular/theme';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { AssociatesComponent } from './associates/associates.component';
import { FormsModule } from '@angular/forms';
import { MenuService } from '../shared/services/menu.service';
import { StaticPageService } from '../shared/services/static-page.service';
import { StaticPageComponent } from './static-page/static-page.component';
import { NewsService } from '../shared/services/news.service';

const ADMIN_COMPONENTS = [
  HomeComponent,
];

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    NbCalendarModule,
    NgbModule,
    FormsModule,
  ],
  declarations: [
    ...ADMIN_COMPONENTS,
    LandingPageComponent,
    LandingNavbarComponent,
    HeaderComponent,
    FooterComponent,
    AssociatesComponent,
    StaticPageComponent,
  ],
  providers   : [
      MenuService,
      StaticPageService,
      NewsService
  ],
})
export class HomeModule {
}
