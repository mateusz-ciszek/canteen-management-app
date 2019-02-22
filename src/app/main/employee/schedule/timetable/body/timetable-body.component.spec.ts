import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableBodyComponent } from './timetable-body.component';

describe('TimetableBodyComponent', () => {
  let component: TimetableBodyComponent;
  let fixture: ComponentFixture<TimetableBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
