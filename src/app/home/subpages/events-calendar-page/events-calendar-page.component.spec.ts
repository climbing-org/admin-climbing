import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCalendarPageComponent } from './events-calendar-page.component';

describe('EventsCalendarPageComponent', () => {
  let component: EventsCalendarPageComponent;
  let fixture: ComponentFixture<EventsCalendarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsCalendarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsCalendarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
