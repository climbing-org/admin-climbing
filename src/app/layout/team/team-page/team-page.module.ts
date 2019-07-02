import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamPageRoutingModule } from './team-page-routing.module';
import { TeamPageComponent } from './team-page.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultInterceptor } from '../../../shared/interceptors/default.interceptor';
import { TeamService } from '../../../shared/services/team.service';
import { UsersService } from '../../../shared/services/user.service';
import { PageHeaderModule } from '../../../shared/modules';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { UploadService } from '../../../shared/services/upload.service';

@NgModule({
  declarations: [TeamPageComponent],
  imports: [
    CommonModule,
    TeamPageRoutingModule,
      PageHeaderModule,
      FormsModule,
      EditorModule,
      NgbModule,
      NgMultiSelectDropDownModule.forRoot()
  ],
    providers: [
        TeamService,
        UsersService,
        UploadService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: DefaultInterceptor,
            multi: true
        }
    ]
})
export class TeamPageModule { }
