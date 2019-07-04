import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsCalendarPageComponent } from './events-calendar-page.component';

const routes: Routes = [{
    path: '',
    component: EventsCalendarPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsCalendarPageRoutingModule { }
