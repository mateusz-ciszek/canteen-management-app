import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyStateBadgeComponent } from './supply-state-badge.component';

describe('SupplyStateBadgeComponent', () => {
  let component: SupplyStateBadgeComponent;
  let fixture: ComponentFixture<SupplyStateBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyStateBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyStateBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
