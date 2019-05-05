import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeResetPasswordModalComponent } from './employee-reset-password-modal.component';

describe('EmployeeResetPasswordModalComponent', () => {
  let component: EmployeeResetPasswordModalComponent;
  let fixture: ComponentFixture<EmployeeResetPasswordModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeResetPasswordModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeResetPasswordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
