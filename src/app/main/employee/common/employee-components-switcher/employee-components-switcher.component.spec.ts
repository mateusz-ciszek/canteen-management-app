import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponentsSwitcherComponent } from './employee-components-switcher.component';

describe('EmployeeComponentsSwitcherComponent', () => {
  let component: EmployeeComponentsSwitcherComponent;
  let fixture: ComponentFixture<EmployeeComponentsSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponentsSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponentsSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
