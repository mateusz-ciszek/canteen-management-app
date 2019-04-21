import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOffModalComponent } from './day-off-modal.component';

describe('DayOffModalComponent', () => {
  let component: DayOffModalComponent;
  let fixture: ComponentFixture<DayOffModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayOffModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayOffModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
