import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import User from '../../../shared/classes/user';
import Team from '../../../shared/classes/team';
import { Team as TeamError } from '../../../shared/classes/error/team';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../shared/services/user.service';
import { TeamService } from '../../../shared/services/team.service';
import { GeneralHelper } from '../../../shared/helpers/general.helper';
import { UploadService } from '../../../shared/services/upload.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit, AfterViewInit {
    @ViewChild('inputFile') inputFile: ElementRef;

    slug: string;
    team: Team = new Team();
    teamError: TeamError = new TeamError();
    file: File;
    loading = false;

    sportsmen: User[];
    trainers: User[];
    selectedSportsmen: User[] = [];
    selectedTrainers: User[] = [];
    dropdownSettings = {};

  constructor(private teamService: TeamService,
              private route: ActivatedRoute,
              private usersService: UsersService,
              private uploadService: UploadService,
              private router: Router) { }

    ngOnInit() {
        this.slug = this.route.snapshot.params['id'];
        if (this.slug) {
            this.teamService.get(this.slug).subscribe((res: {data: Team}) => {
                console.log(res);
                this.team = res.data;
                this.selectedSportsmen = this.team.sportsmans ? this.team.sportsmans : [];
                this.selectedSportsmen.forEach((s) => {
                    if (s['pk']) {
                        s.id = s['pk'];
                    }
                });
                this.selectedTrainers = this.team.trainers ? this.team.trainers : [];
                this.selectedTrainers.forEach((s) => {
                    if (s['pk']) {
                        s.id = s['pk'];
                    }
                });
            });
        }
        this.usersService.list('sportsman').subscribe((res: {data: User[]}) => {
            this.sportsmen = GeneralHelper.isEmpty(res) ? [] : res.data;
            console.log(this.sportsmen);
        });
        this.usersService.list('trainer').subscribe((res: {data: User[]}) => {
            this.trainers = GeneralHelper.isEmpty(res) ? [] : res.data;
            this.trainers.forEach((t) => {
            });
        });

        this.dropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'email',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
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
                this.team.logo = res.location;
            });
        });
    }

    submit() {
        this.team.sportsmans = [];
        this.selectedSportsmen.forEach((s) => {
            this.team.sportsmans.push(s.id);
        });
        this.team.trainers = [];
        this.selectedTrainers.forEach((s) => {
            this.team.trainers.push(s.id);
        });
        if (this.slug) {
            this.teamService.update(this.slug, this.team).subscribe((res) => {
                if (res['code'] === 0) {
                    this.router.navigateByUrl('/admin/team-table');
                } else if (res['data']) {
                    this.teamError = res['data'];
                }
            });
        } else {
            this.teamService.post(this.team).subscribe((res) => {
                if (res['code'] === 0) {
                    this.router.navigateByUrl('/admin/team-table');
                } else if (res['data']) {
                    this.teamError = res['data'];
                }
            });
        }
    }

    onItemSelect(item: any) {
        console.log(item);
        console.log(this.selectedSportsmen);
    }
    onSelectAll(items: any) {
        console.log(items);
    }

}
