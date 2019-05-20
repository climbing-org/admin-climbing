import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsPageRoutingModule } from './events-page-routing.module';
import { EventsPageComponent } from './events-page.component';
import { EventService } from '../../../shared/services/event.service';
import { UploadService } from '../../../shared/services/upload.service';
import { PageHeaderModule } from '../../../shared/modules';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [EventsPageComponent],
  imports: [
    CommonModule,
    EventsPageRoutingModule,
      PageHeaderModule, FormsModule, EditorModule
  ],
    providers: [
        EventService,
        UploadService
    ]
})
export class EventsPageModule { }
