import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersBlockComponent } from './trainers-block.component';

describe('TrainersBlockComponent', () => {
  let component: TrainersBlockComponent;
  let fixture: ComponentFixture<TrainersBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainersBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainersBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
