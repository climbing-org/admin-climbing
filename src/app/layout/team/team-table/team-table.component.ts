import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from '../../../shared/services/team.service';
import Team from '../../../shared/classes/team';
import { LocalDataSource } from 'ng2-smart-table';
import Club from '../../../shared/classes/club';
import { GeneralHelper } from '../../../shared/helpers/general.helper';
import { Deferred } from 'ng2-smart-table/lib/lib/helpers';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.scss']
})
export class TeamTableComponent implements OnInit {

    teams: Team[];

    settings;
    source: LocalDataSource;

  constructor(private router: Router,
              private teamService: TeamService) { }

  ngOnInit() {
      this.teamService.list().subscribe((res: {data: Team[]}) => {
          this.teams = GeneralHelper.isEmpty(res) ? [] : res.data;
          this.source = new LocalDataSource(this.teams);
      });

      this.settings = {
          actions: {
              columnTitle: '', add: false, edit: false, delete: true
          },
          delete: {
              deleteButtonContent: 'Удалить',
              confirmDelete: true,
          },
          add: {
              confirmCreate: true,
          },
          edit: {
              confirmSave: true,
          },
          columns: {
              name: {
                  title: 'Имя'
              },
              city: {
                  title: 'Город'
              },
              address: {
                  title: 'Адрес'
              }
          },
          attr: {
              class: 'table table-hover table-striped'
          }
      };
  }


    select(s: {data: Club}) {
        this.router.navigateByUrl('/admin/team-page/' + s.data.slug);
        console.log(s);
    }

    onDeleteConfirm(event: {confirm: Deferred, data: Team}) {
        this.teamService.delete(event.data.slug).subscribe((res) => {
            event.confirm.resolve();
        }, () => {
            event.confirm.reject();
        });
    }

}
