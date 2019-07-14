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
import { StaticPageComponent } from './subpages/static-page/static-page.component';
import { NewsService } from '../shared/services/news.service';
import { EventService } from '../shared/services/event.service';
import { PageTitleComponent } from './subpages/page-title/page-title.component';
import { RubricPageComponent } from './subpages/rubric-page/rubric-page.component';
import { RubricService } from '../shared/services/rubric.service';
import { CalendarComponent } from './calendar/calendar.component';
import { GoogleMapComponent } from './subpages/google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../../environments/environment';
import { GoogleService } from '../shared/services/google.service';
import { UsersService } from '../shared/services/user.service';

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
        AgmCoreModule.forRoot({
            apiKey: environment.googleApiKey,
            libraries: [ 'places' ],
            language: 'ru'
        }),
    ],
    declarations: [
        ...ADMIN_COMPONENTS,
        LandingPageComponent,
        LandingNavbarComponent,
        HeaderComponent,
        FooterComponent,
        AssociatesComponent,
        StaticPageComponent,
        PageTitleComponent,
        RubricPageComponent,
        CalendarComponent,
        GoogleMapComponent,
    ],
    providers: [
        MenuService,
        StaticPageService,
        NewsService,
        EventService,
        RubricService,
        GoogleService,
        UsersService,
    ],
    exports: [
        PageTitleComponent,
        CalendarComponent,
        GoogleMapComponent
    ]
})
export class HomeModule {
}
