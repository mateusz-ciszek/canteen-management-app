import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyCreateRequestComponent } from './supply-create-request.component';

describe('SupplyCreateRequestComponent', () => {
  let component: SupplyCreateRequestComponent;
  let fixture: ComponentFixture<SupplyCreateRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyCreateRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyCreateRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
