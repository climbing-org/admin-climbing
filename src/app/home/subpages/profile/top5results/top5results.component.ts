import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../../../../shared/services/user.service';
import Top5results from '../../../../shared/classes/top5results';

@Component({
  selector: 'app-top5results',
  templateUrl: './top5results.component.html',
  styleUrls: ['./top5results.component.scss']
})
export class Top5resultsComponent implements OnInit, AfterViewInit {


    @Input() clubs: Top5results[] = [];
    @Input() iSsportsman: boolean;

    selectedClub: Top5results = new Top5results();

    constructor(private usersService: UsersService) { }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
    }

    add() {
        console.log(this.selectedClub);
        if (this.selectedClub.date && this.selectedClub.event && this.selectedClub.place) {
            this.selectedClub.date = new Date(this.selectedClub.date['year'], this.selectedClub.date['month'], this.selectedClub.date['day']);
            this.clubs.push(this.selectedClub);
            this.selectedClub = new Top5results();
        }
    }

    save() {
        if (this.iSsportsman) {
            const body = {
                top_results: this.clubs
            };
            this.usersService.setResults(body).subscribe((res) => {
                console.log(res);
            });
        } else {
            const body = {
                top_students: this.clubs
            };
            this.usersService.setStudents(body).subscribe((res) => {
                console.log(res);
            });
        }
    }

    delete(i: number) {
        this.clubs.splice(i, 1);
    }

}
