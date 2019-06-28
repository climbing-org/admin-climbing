import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteBlockComponent } from './route-block.component';

describe('RouteBlockComponent', () => {
  let component: RouteBlockComponent;
  let fixture: ComponentFixture<RouteBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
