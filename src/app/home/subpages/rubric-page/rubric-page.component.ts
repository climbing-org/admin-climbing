import { Component, OnInit } from '@angular/core';
import { RubricService } from '../../../shared/services/rubric.service';
import Rubric from '../../../shared/classes/rubric';
import { ActivatedRoute } from '@angular/router';
import StaticPage from '../../../shared/classes/static-page';

@Component({
  selector: 'app-rubric-page',
  templateUrl: './rubric-page.component.html',
  styleUrls: ['./rubric-page.component.scss']
})
export class RubricPageComponent implements OnInit {

    page = 1;
    pageSize = 7;
    rubric: Rubric;
    rubricId: string;

  constructor(private activeRoute: ActivatedRoute,
              private rubricService: RubricService) { }

  ngOnInit() {
      this.rubricId = this.activeRoute.snapshot.params['id'];
      this.activeRoute.params.subscribe((value) => {
          this.rubricId = value['id'];
          this.rubricService.get(this.rubricId).subscribe((res: {data: Rubric}) => {
              this.rubric = res.data;
          });
      });
  }

}
