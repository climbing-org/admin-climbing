import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementBlockComponent } from './achievement-block.component';

describe('AchievementBlockComponent', () => {
  let component: AchievementBlockComponent;
  let fixture: ComponentFixture<AchievementBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
