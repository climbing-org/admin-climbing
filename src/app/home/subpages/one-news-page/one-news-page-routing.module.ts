import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneNewsPageComponent } from './one-news-page.component';

const routes: Routes = [{
    path: '',
    component: OneNewsPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneNewsPageRoutingModule { }
