import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { HomeModule } from '../../home.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultInterceptor } from '../../../shared/interceptors/default.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadService } from '../../../shared/services/upload.service';
import { UsersService } from '../../../shared/services/user.service';
import { EventBlockComponent } from './event-block/event-block.component';
import { AchievementBlockComponent } from './achievement-block/achievement-block.component';
import { RouteBlockComponent } from './route-block/route-block.component';
import { ClubBlockComponent } from './club-block/club-block.component';
import { TrainersBlockComponent } from '../trainers-block/trainers-block.component';
import { PaymentBlockComponent } from './payment-block/payment-block.component';
import { NgbDatepickerModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ClubService } from '../../../shared/services/club.service';

@NgModule({
  declarations: [ProfileComponent, EventBlockComponent, AchievementBlockComponent, RouteBlockComponent, ClubBlockComponent, TrainersBlockComponent, PaymentBlockComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
      HomeModule,
      FormsModule,
      ReactiveFormsModule,
      NgbDatepickerModule,
      NgbDropdownModule,
  ],
    providers: [
        UploadService,
        UsersService,
        ClubService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: DefaultInterceptor,
            multi: true
        }
    ]
})
export class ProfileModule { }
