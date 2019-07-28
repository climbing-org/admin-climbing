import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import User from '../../../shared/classes/user';
import { Observable, of } from 'rxjs';
import { UsersService } from '../../../shared/services/user.service';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';


@Injectable()
export class TrainerProfileResolver implements Resolve<any> {
  constructor(private us: UsersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    const id = route.params['id'];
      if (id) {
          return this.us.get(id)
              .pipe(
                  catchError(err => of([])),
                  map((res: {data: User}) => res.data)
              );
      } else {
          return this.us.getMyProfile()
              .pipe(
                  catchError(err => of([])),
                  map((res: {data: User}) => res.data)
              );
      }
  }
}
