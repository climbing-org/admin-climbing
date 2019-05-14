import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuDetailsRoutingModule } from './menu-details-routing.module';
import { MenuDetailsComponent } from './menu-details.component';
import { FormsModule } from '@angular/forms';
import { MenuService } from '../../../shared/services/menu.service';

@NgModule({
  declarations: [MenuDetailsComponent],
  imports: [
    CommonModule,
    MenuDetailsRoutingModule,
      FormsModule
  ],
    providers: [
        MenuService
    ]
})
export class MenuDetailsModule { }
