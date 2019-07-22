import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Team from '../../../shared/classes/team';
import { ClubService } from '../../../shared/services/club.service';
import { UsersService } from '../../../shared/services/user.service';
import { GeneralHelper } from '../../../shared/helpers/general.helper';
import User from '../../../shared/classes/user';

@Component({
  selector: 'app-trainers-block',
  templateUrl: './trainers-block.component.html',
  styleUrls: ['./trainers-block.component.scss']
})
export class TrainersBlockComponent implements OnInit, AfterViewInit {


    @Input() trainers: User[] = [];

    dropdownValue = 'Выберите команду';
    selectedTrainerId: number;
    selectedTrainer: User;
    allTrainers: User[] = [];

    constructor(private usersService: UsersService) { }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        this.usersService.list('trainer').subscribe((res: {data: User[]}) => {
            console.log(res);
            this.allTrainers = GeneralHelper.isEmpty(res) ? [] : res.data;
            this.allTrainers = this.allTrainers.filter(train => {
                if (this.trainers && this.trainers.length) {
                    for (let i = 0; i < this.trainers.length; i++) {
                        if (this.trainers[i].id === train.id) {
                            return false;
                        }
                    }
                }
                return true;
            });
        });
    }

    selectClub(a: User) {
        this.selectedTrainerId = a.id;
        this.selectedTrainer = a;
    }

    add() {
        if (this.selectedTrainerId) {
            this.trainers.push(this.selectedTrainer);
            const index = this.allTrainers.indexOf(this.selectedTrainer);
            this.allTrainers.splice(index, 1);
            this.selectedTrainerId = null;
        }
    }

    save() {
        const trainers: number[] = [];
        this.trainers.forEach(c => trainers.push(c.id));
        const body = {trainer_ids: trainers};
        this.usersService.setTrainers(body).subscribe((res) => {
            console.log(res);
        });
    }

    delete(i: number) {
        this.trainers.splice(i, 1);
    }

}
