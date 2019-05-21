import { Component, OnInit } from '@angular/core';
import User from '../../../shared/classes/user';
import { Router } from '@angular/router';
import { UsersService } from '../../../shared/services/user.service';
import { GeneralHelper } from '../../../shared/helpers/general.helper';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

    users: User[];

  constructor(private router: Router,
              private userService: UsersService) { }

  ngOnInit() {
      this.userService.list().subscribe((res: {data: User[]}) => {
          this.users = GeneralHelper.isEmpty(res) ? [] : res.data;
      });
  }

    select(s: User) {
        if (s.role) {
            this.router.navigateByUrl(`/admin/profile-${s.role}/` + s.id);
        } else {
            this.router.navigateByUrl(`/admin/profile-sportsman/` + s.id);
        }
        console.log(s);
    }

}
