import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePermissionsManagementComponent } from './employee-permissions-management.component';

describe('EmployeePermissionsManagementComponent', () => {
  let component: EmployeePermissionsManagementComponent;
  let fixture: ComponentFixture<EmployeePermissionsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeePermissionsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePermissionsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
