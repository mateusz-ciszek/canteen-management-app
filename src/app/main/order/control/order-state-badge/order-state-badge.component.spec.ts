import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStateBadgeComponent } from './order-state-badge.component';

describe('OrderStateBadgeComponent', () => {
  let component: OrderStateBadgeComponent;
  let fixture: ComponentFixture<OrderStateBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderStateBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStateBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
