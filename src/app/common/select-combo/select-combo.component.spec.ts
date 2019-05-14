import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComboComponent } from './select-combo.component';

describe('SelectComboComponent', () => {
  let component: SelectComboComponent;
  let fixture: ComponentFixture<SelectComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
