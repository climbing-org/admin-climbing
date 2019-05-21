import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/user.service';
import User from '../../classes/user';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

    form: FormGroup;

    showerror = false;

  constructor(private router: Router,
              private usersService: UsersService) { }

  ngOnInit() {
      this.form = new FormGroup({
          email   : new FormControl(''),
          role: new FormControl('')
      });
  }

    submit({value, valid}: { value: User, valid: boolean }) {
        // localStorage.setItem('isLoggedin', 'true');
        if (!valid) {
            this.showerror = true;
            return;
        }
        this.usersService.update(value).subscribe((res) => {
            console.log(res);
            this.router.navigateByUrl('/admin/user-table');
        });
    }

}
