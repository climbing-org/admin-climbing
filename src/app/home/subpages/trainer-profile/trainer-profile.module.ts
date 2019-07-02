import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerProfileRoutingModule } from './trainer-profile-routing.module';
import { HomeModule } from '../../home.module';
import { UsersService } from '../../../shared/services/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultInterceptor } from '../../../shared/interceptors/default.interceptor';
import { TrainerProfileComponent } from './trainer-profile.component';

@NgModule({
  declarations: [TrainerProfileComponent],
  imports: [
    CommonModule,
    TrainerProfileRoutingModule,
      HomeModule
  ], providers: [
        UsersService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: DefaultInterceptor,
            multi: true
        }
    ]
})
export class TrainerProfileModule { }
