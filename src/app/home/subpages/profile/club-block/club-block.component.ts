import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Team from '../../../../shared/classes/team';
import { ClubService } from '../../../../shared/services/club.service';
import { GeneralHelper } from '../../../../shared/helpers/general.helper';
import News from '../../../../shared/classes/news';
import { UsersService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-club-block',
  templateUrl: './club-block.component.html',
  styleUrls: ['./club-block.component.scss']
})
export class ClubBlockComponent implements OnInit, AfterViewInit {

    @Input() clubs: Team[] = [];

    dropdownValue = 'Выберите команду';
    selectedClub: Team;
    allClubs: Team[] = [];

  constructor(private clubService: ClubService,
              private usersService: UsersService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
      this.clubService.list().subscribe((res: {data: Team[]}) => {
          this.allClubs = GeneralHelper.isEmpty(res) ? [] : res.data;
          this.allClubs = this.allClubs.filter(club => {
              for (let i = 0; i < this.clubs.length; i++) {
                  if (this.clubs[i].slug === club.slug) {
                      return false;
                  }
              }
              return true;
          });
      });
  }

    selectClub(a: Team) {
      this.dropdownValue = a.slug;
      this.selectedClub = a;
    }

    add() {
      if (this.dropdownValue !== 'Выберите команду') {
          this.clubs.push(this.selectedClub);
          const index = this.allClubs.indexOf(this.selectedClub);
          this.allClubs.splice(index, 1);
          this.dropdownValue = 'Выберите команду';
      }
    }

    save() {
      const body: string[] = [];
      this.clubs.forEach(c => body.push(c.slug));
      this.usersService.setClubs(body).subscribe((res) => {
          console.log(res);
      });
    }

    delete(i: number) {
      this.clubs.splice(i, 1);
    }

}
