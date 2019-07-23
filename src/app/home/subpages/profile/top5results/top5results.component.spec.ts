import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top5resultsComponent } from './top5results.component';

describe('Top5resultsComponent', () => {
  let component: Top5resultsComponent;
  let fixture: ComponentFixture<Top5resultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top5resultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top5resultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
