import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainerProfileComponent } from './trainer-profile.component';
import { TrainerProfileResolver } from './trainer-profile.resolvers';

const routes: Routes = [{
    path: ':id',
    component: TrainerProfileComponent,
    resolve  : {
        'data': TrainerProfileResolver
    }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
    providers: [
        TrainerProfileResolver
    ]
})
export class TrainerProfileRoutingModule { }
