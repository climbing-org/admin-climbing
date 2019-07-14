import { Component, OnInit } from '@angular/core';
import User from '../../../shared/classes/user';
import Team from '../../../shared/classes/team';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../../../shared/services/team.service';
import { GoogleService } from '../../../shared/services/google.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

    teams: Team[] = [];
    team: Team = new Team();
    id: string;

  constructor(private route: ActivatedRoute,
              private googleService: GoogleService,
              private teamService: TeamService) { }

  ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      if (this.id) {
          this.teamService.get(this.id).subscribe((res: {data: Team}) => {
              console.log(res);
              this.teams.push(res.data);
              this.team = res.data;
          });
      } else {
          this.teamService.list().subscribe((res: {data: Team[]}) => {
              console.log(res);
              this.teams = res.data;
          });
      }
  }

    teamSelected(team: Team) {
      this.id = team.slug;
        this.team = team;
    }

}
