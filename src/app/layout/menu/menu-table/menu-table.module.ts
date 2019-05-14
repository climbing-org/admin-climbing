import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuTableRoutingModule } from './menu-table-routing.module';
import { MenuTableComponent } from './menu-table.component';

@NgModule({
  declarations: [MenuTableComponent],
  imports: [
    CommonModule,
    MenuTableRoutingModule
  ]
})
export class MenuTableModule { }
