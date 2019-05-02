import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeSummaryModalComponent } from './create-employee-summary-modal.component';

describe('CreateEmployeeSummaryModalComponent', () => {
  let component: CreateEmployeeSummaryModalComponent;
  let fixture: ComponentFixture<CreateEmployeeSummaryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmployeeSummaryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeSummaryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
