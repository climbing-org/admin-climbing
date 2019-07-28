import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaitingRoutingModule } from './raiting-routing.module';
import { RaitingComponent } from './raiting.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultInterceptor } from '../../shared/interceptors/default.interceptor';
import { FormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingService } from '../../shared/services/rating.service';

@NgModule({
  declarations: [RaitingComponent],
  imports: [
    CommonModule,
      FormsModule,
      NgbAlertModule,
      NgbAccordionModule,
    RaitingRoutingModule
  ], providers: [
        RatingService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: DefaultInterceptor,
            multi: true
        },
    ]
})
export class RaitingModule { }
