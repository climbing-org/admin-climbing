import { Component, OnInit } from '@angular/core';
import Rating from '../../../shared/classes/rating';
import { RatingService } from '../../../shared/services/rating.service';
import Options from '../../../shared/classes/options';
import User from '../../../shared/classes/user';

@Component({
  selector: 'app-sportsman-rating-page',
  templateUrl: './sportsman-rating-page.component.html',
  styleUrls: ['./sportsman-rating-page.component.scss']
})
export class SportsmanRatingPageComponent implements OnInit {

    rating: Rating = new Rating();
    options: Options = new Options();
    page = 1;
    pageSize = 7;

    age: string;
    section: string;
    gender: string;



  constructor(private ratingService: RatingService) { }

  ngOnInit() {
      this.ratingService.options().subscribe((res: {data: Options}) => {
          this.options = res.data;
      });
  }

    filterAge(age: string) {
      this.age = age;
      if (this.age && this.section && this.gender) {
          this.ratingService.single({age: this.age, section: this.section, gender: this.gender}).subscribe((res: {data: Rating}) => {
              this.rating = res.data;
          });
      }
    }

    filterSection(section: string) {
        this.section = section;
        if (this.age && this.section && this.gender) {
            this.ratingService.single({age: this.age, section: this.section, gender: this.gender}).subscribe((res: {data: Rating}) => {
                this.rating = res.data;
            });
        }
    }

    filterGender(gender: string) {
        this.gender = gender;
        if (this.age && this.section && this.gender) {
            this.ratingService.single({age: this.age, section: this.section, gender: this.gender}).subscribe((res: {data: Rating}) => {
                this.rating = res.data;
            });
        }
    }

}
