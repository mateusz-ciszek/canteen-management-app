import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistoryStateComponent } from './order-history-state.component';

describe('OrderHistoryStateComponent', () => {
  let component: OrderHistoryStateComponent;
  let fixture: ComponentFixture<OrderHistoryStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderHistoryStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHistoryStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
