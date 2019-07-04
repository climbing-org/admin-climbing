import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportsmanRatingPageRoutingModule } from './sportsman-rating-page-routing.module';
import { SportsmanRatingPageComponent } from './sportsman-rating-page.component';
import { UsersService } from '../../../shared/services/user.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from '../../home.module';
import { RatingService } from '../../../shared/services/rating.service';

@NgModule({
  declarations: [SportsmanRatingPageComponent],
    imports: [
        CommonModule,
        SportsmanRatingPageRoutingModule,
        NgbPaginationModule,
        HomeModule
    ],
  providers: [
      UsersService,
      RatingService
  ]
})
export class SportsmanRatingPageModule { }
