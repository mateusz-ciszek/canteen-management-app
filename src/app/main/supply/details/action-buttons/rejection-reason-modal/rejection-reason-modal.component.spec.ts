import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectionReasonModalComponent } from './rejection-reason-modal.component';

describe('RejectionReasonModalComponent', () => {
  let component: RejectionReasonModalComponent;
  let fixture: ComponentFixture<RejectionReasonModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectionReasonModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectionReasonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
