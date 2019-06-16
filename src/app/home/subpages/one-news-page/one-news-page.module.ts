import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneNewsPageRoutingModule } from './one-news-page-routing.module';
import { OneNewsPageComponent } from './one-news-page.component';
import { HomeModule } from '../../home.module';

@NgModule({
  declarations: [OneNewsPageComponent],
  imports: [
    CommonModule,
    OneNewsPageRoutingModule,
      HomeModule,
  ]
})
export class OneNewsPageModule { }
