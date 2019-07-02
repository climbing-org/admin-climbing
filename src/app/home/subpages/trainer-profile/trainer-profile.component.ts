import { Component, OnInit } from '@angular/core';
import User from '../../../shared/classes/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadService } from '../../../shared/services/upload.service';
import { UsersService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.scss']
})
export class TrainerProfileComponent implements OnInit {

    user: User = new User();
    id: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private usersService: UsersService) { }

  ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      if (this.id) {
          this.usersService.get(this.id).subscribe((res: {data: User}) => {
              console.log(res);
              this.user = res.data;
          });
      } else {
          this.usersService.getMyProfile().subscribe((res: {data: User}) => {
              console.log(res);
              this.user = res.data;
              this.id = this.user.id;
          });
      }
  }

}
