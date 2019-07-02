import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamTableComponent } from './team-table.component';

const routes: Routes = [{
    path: '',
    component: TeamTableComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamTableRoutingModule { }
