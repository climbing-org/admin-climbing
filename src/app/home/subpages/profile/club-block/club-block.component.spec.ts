import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubBlockComponent } from './club-block.component';

describe('ClubBlockComponent', () => {
  let component: ClubBlockComponent;
  let fixture: ComponentFixture<ClubBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
