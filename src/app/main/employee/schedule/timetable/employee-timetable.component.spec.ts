import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTimetableComponent } from './employee-timetable.component';

describe('EmployeeTimetableComponent', () => {
  let component: EmployeeTimetableComponent;
  let fixture: ComponentFixture<EmployeeTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
