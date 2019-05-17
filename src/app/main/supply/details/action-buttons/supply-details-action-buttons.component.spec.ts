import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyDetailsActionButtonsComponent } from './supply-details-action-buttons.component';

describe('SupplyDetailsActionButtonsComponent', () => {
  let component: SupplyDetailsActionButtonsComponent;
  let fixture: ComponentFixture<SupplyDetailsActionButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyDetailsActionButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyDetailsActionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
