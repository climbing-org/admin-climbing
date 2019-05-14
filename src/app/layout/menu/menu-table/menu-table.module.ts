import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuTableRoutingModule } from './menu-table-routing.module';
import { MenuTableComponent } from './menu-table.component';
import { FormsModule } from '@angular/forms';
import { MenuService } from '../../../shared/services/menu.service';

@NgModule({
  declarations: [MenuTableComponent],
  imports: [
    CommonModule,
    MenuTableRoutingModule,
      FormsModule
  ],
    providers: [
        MenuService
    ]
})
export class MenuTableModule { }
