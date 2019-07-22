import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Roles from '../../../shared/classes/references/roles';
import { LoginForm } from '../../../shared/services/security.service';
import { UsersService } from '../../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

    form: FormGroup;

    readonly Roles = Roles;
    emailError = '';
    roleError = '';

    showerror = false;

  constructor(private usersService: UsersService,
              private router: Router) { }

  ngOnInit() {
      this.form = new FormGroup({
          email   : new FormControl('', Validators.email),
          role: new FormControl('', Validators.required)
      });
  }

    submit({value, valid}: { value: LoginForm, valid: boolean }) {
        // localStorage.setItem('isLoggedin', 'true');
        if (!valid) {
            this.showerror = true;
            return;
        }
        this.usersService.post(value).subscribe((res) => {
            if (res['code'] === 0) {
                this.router.navigateByUrl('/admin/user-table');
            } else if (res['data']) {
                if (res['data']['email']) {
                    this.emailError = res['data']['email'][0];
                }
                if (res['data']['role']) {
                    this.roleError = res['data']['role'][0];
                }
            } else {
                this.showerror = true;
            }
        });
    }

}
