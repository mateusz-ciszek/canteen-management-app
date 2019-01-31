import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistorySelectorComponent } from './order-history-selector.component';

describe('OrderHistorySelectorComponent', () => {
  let component: OrderHistorySelectorComponent;
  let fixture: ComponentFixture<OrderHistorySelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderHistorySelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHistorySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
