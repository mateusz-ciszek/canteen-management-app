import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyListTableComponent } from './supply-list-table.component';

describe('SupplyListTableComponent', () => {
  let component: SupplyListTableComponent;
  let fixture: ComponentFixture<SupplyListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
