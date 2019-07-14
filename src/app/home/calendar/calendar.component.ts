import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    @Input() date = new Date();

    @Output() newDate = new EventEmitter<Date>();

  constructor() { }

  ngOnInit() {
  }

  change(d: Date) {
      this.newDate.emit(d);
  }

}
