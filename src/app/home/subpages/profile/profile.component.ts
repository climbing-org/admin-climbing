import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import User from '../../../shared/classes/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadService } from '../../../shared/services/upload.service';
import { UsersService } from '../../../shared/services/user.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {

    @ViewChild('inputFile') inputFile: ElementRef;
    @ViewChild('inputFile1') inputFile1: ElementRef;

    form: FormGroup;
    user: User = new User();
    id: number;

    // file
    file: File;
    loading = false;
    file1: File[];
    loading1 = false;

    showerror = false;

    showNewPasswordInput = false;
    newPassword: string;
    oldPassword: string;
    showNewPasswordSuccess = false;
    showNewPasswordFailure = false;
    newPasswordFailureMessage: string;

    iSsportsman: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private uploadService: UploadService,
              private usersService: UsersService) { }

  ngOnInit() {
      this.form = new FormGroup({
          first_name: new FormControl(''),
          second_name: new FormControl(''),
          last_name: new FormControl(''),
          biography: new FormControl(''),
          level: new FormControl(''),
          avatar: new FormControl(''),
          images: new FormControl(''),
          instagram: new FormControl(''),
          facebook: new FormControl(''),
          vk: new FormControl(''),
          youtube_links: new FormArray([
              new FormControl(null)
          ]),
      });

      this.id = this.route.snapshot.params['id'];
      if (this.id) {
          this.usersService.get(this.id).subscribe((res: {data: User}) => {
              console.log(res);
              this.user = res.data;
              this.form.patchValue(this.user);
          });
      } else {
          this.usersService.getMyProfile().subscribe((res: {data: User}) => {
              console.log(res);
              this.user = res.data;
              this.id = this.user.id;
              this.form.patchValue(this.user);
              this.iSsportsman = this.user.role === 'sportsman';
          });
      }
  }

  ngAfterViewInit(): void {
      $(this.inputFile.nativeElement).on('change', event => {
          this.loading = true;
          const inputFile = event.target.files[0];
          if (!inputFile || !inputFile.name) {
              return;
          }
          this.uploadService.post(inputFile).subscribe((res: {location: string}) => {
              this.loading = false;
              this.file = inputFile;
              this.user.avatar = res.location;
              this.form.get('avatar').setValue(res.location);
          });
      });
      $(this.inputFile1.nativeElement).on('change', event => {
          this.loading1 = true;
          const inputFile = event.target.files[0];
          if (!inputFile || !inputFile.name) {
              return;
          }
          this.uploadService.post(inputFile).subscribe((res: {location: string}) => {
              this.loading1 = false;
              // this.file = inputFile;
              this.user.images.push(res.location);
              this.form.get('images').setValue(this.user.images);
          });
      });
  }

    submit({value, valid}: { value: User, valid: boolean }) {
        // localStorage.setItem('isLoggedin', 'true');
        if (!valid) {
            this.showerror = true;
            return;
        }
        this.usersService.partial_update(this.id, value).subscribe((res) => {
            console.log(res);
        });
    }

    onNewPassword() {
        this.usersService.set_password(this.id, this.newPassword).subscribe((res) => {
            if (res['code'] === 1) {
                this.showNewPasswordSuccess = false;
                this.showNewPasswordFailure = true;
                this.newPasswordFailureMessage = res['message'];
            } else {
                this.showNewPasswordSuccess = true;
                this.showNewPasswordFailure = false;
            }
            this.showNewPasswordInput = false;
            console.log(res);
        });
    }

    onChangePassword() {
        this.usersService.change_password(this.id, this.oldPassword, this.newPassword).subscribe((res) => {
            if (res['code'] === 1) {
                this.showNewPasswordSuccess = false;
                this.showNewPasswordFailure = true;
                this.newPasswordFailureMessage = res['message'];
            } else {
                this.showNewPasswordSuccess = true;
                this.showNewPasswordFailure = false;
            }
            this.showNewPasswordInput = false;
            console.log(res);
        });
    }

    deleteFile(i: number) {
        this.user.images.splice(i, 1);
    }

    newVideo() {
        const arr = this.form.get('youtube_links') as FormArray;
        arr.push(new FormControl(''));
    }

    removeVideo(i: number) {
        const arr = this.form.get('youtube_links') as FormArray;
        arr.removeAt(i);
    }

}
