import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubPageRoutingModule } from './club-page-routing.module';
import { ClubPageComponent } from './club-page.component';
import { PageHeaderModule } from '../../../shared/modules';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { UploadService } from '../../../shared/services/upload.service';
import { ClubService } from '../../../shared/services/club.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../../../shared/services/user.service';

@NgModule({
  declarations: [ClubPageComponent],
  imports: [
    CommonModule,
    ClubPageRoutingModule,
    PageHeaderModule,
    FormsModule,
    EditorModule,
      NgbModule
  ],
  providers: [
    UploadService,
    ClubService,
    UsersService
  ]
})
export class ClubPageModule { }
