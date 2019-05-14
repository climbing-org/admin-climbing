import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuDetailsRoutingModule } from './menu-details-routing.module';
import { MenuDetailsComponent } from './menu-details.component';

@NgModule({
  declarations: [MenuDetailsComponent],
  imports: [
    CommonModule,
    MenuDetailsRoutingModule
  ]
})
export class MenuDetailsModule { }
