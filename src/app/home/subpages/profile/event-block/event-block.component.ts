import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-block',
  templateUrl: './event-block.component.html',
  styleUrls: ['./event-block.component.scss']
})
export class EventBlockComponent implements OnInit {

    form: FormGroup;

  constructor() { }

  ngOnInit() {
      this.form = new FormGroup({
          date: new FormControl(''),
      });
  }

}
