import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsPageComponent } from './events-page.component';
import { EventPageComponent } from './event-page/event-page.component';

const routes: Routes = [
    {
        path: '',
        component: EventsPageComponent
    }, {
        path: ':id',
        component: EventPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsPageRoutingModule { }
