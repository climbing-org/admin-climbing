import { Component, OnInit } from '@angular/core';
import { RatingService } from '../../shared/services/rating.service';
import Options from '../../shared/classes/options';
import Rating from '../../shared/classes/rating';
import { GeneralHelper } from '../../shared/helpers/general.helper';

@Component({
  selector: 'app-raiting',
  templateUrl: './raiting.component.html',
  styleUrls: ['./raiting.component.scss']
})
export class RaitingComponent implements OnInit {

    // ratings: Rating[] = [];
    rating: Rating = new Rating();
    ratings = {};
    options: Options = new Options();

  constructor(private ratingService: RatingService) { }

  ngOnInit() {
      this.ratingService.options().subscribe((res: {data: Options}) => {
          this.options = res.data;
      });
      this.ratingService.list().subscribe((res: {data: Rating[]}) => {
           const ratings = GeneralHelper.isEmpty(res) ? [] : res.data;
           for (let i = 0; i < ratings.length; ++i) {
               this.ratings[ratings[i]['age'] + ratings[i]['section'] + ratings[i]['gender']] = ratings[i];
           }
      });
  }

    getSingle(age: string, section: string, gender: string) {
      console.log('ahfbdhsgfhsdg');
        this.ratingService.single({age: age, section: section, gender: gender}).subscribe((res: {data: Rating}) => {
            console.log(res);
            this.ratings[age + section + gender] = res.data;
        });
    }

    removeUser(key: string, i: number) {

    }

    newUser(key: string) {

    }

}
