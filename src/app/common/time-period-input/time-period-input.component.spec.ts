import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePeriodInputComponent } from './time-period-input.component';

describe('TimePeriodInputComponent', () => {
  let component: TimePeriodInputComponent;
  let fixture: ComponentFixture<TimePeriodInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePeriodInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePeriodInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
