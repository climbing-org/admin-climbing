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

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
      HomeModule,
      FormsModule,
      ReactiveFormsModule
  ],
    providers: [
        UploadService,
        UsersService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: DefaultInterceptor,
            multi: true
        }
    ]
})
export class ProfileModule { }
