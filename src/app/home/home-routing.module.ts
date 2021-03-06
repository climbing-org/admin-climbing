import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { StaticPageComponent } from './subpages/static-page/static-page.component';
import { RubricPageComponent } from './subpages/rubric-page/rubric-page.component';
import { TrainerProfileComponent } from './subpages/trainer-profile/trainer-profile.component';

const routes: Routes = [{
    path: '',
    component: HomeComponent,
    children: [{
        path: '',
        component: LandingPageComponent,
    }, {
        path: 'static-page/:id',
        component: StaticPageComponent,
    }, {
        path: 'rubric/:id',
        component: RubricPageComponent,
    }, {path: 'sportsman-rating', loadChildren: './subpages/sportsman-rating-page/sportsman-rating-page.module#SportsmanRatingPageModule'},
        {path: 'biography', loadChildren: './subpages/biography/biography.module#BiographyModule'},
        {path: 'news', loadChildren: './subpages/news-page/news-page.module#NewsPageModule'},
        {path: 'news-page/:id', loadChildren: './subpages/one-news-page/one-news-page.module#OneNewsPageModule'},
        {path: 'events', loadChildren: './subpages/events-page/events-page.module#EventsPageModule'},
        {path: 'events-calendar', loadChildren: './subpages/events-calendar-page/events-calendar-page.module#EventsCalendarPageModule'},
        {path: 'profile', loadChildren: './subpages/profile/profile.module#ProfileModule'},
        {path: 'profile/:id', loadChildren: './subpages/profile/profile.module#ProfileModule'},
        {path: 'trainer-profile', loadChildren: './subpages/trainer-profile/trainer-profile.module#TrainerProfileModule'},
        // {path: 'trainer-profile/:id', loadChildren: './subpages/trainer-profile/trainer-profile.module#TrainerProfileModule'},
        {path: 'teams', loadChildren: './subpages/teams/teams.module#TeamsModule'},
        {path: 'teams/:id', loadChildren: './subpages/teams/teams.module#TeamsModule'}
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {
}
