import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorSummaryComponent } from './selector-summary.component';

describe('SelectorSummaryComponent', () => {
  let component: SelectorSummaryComponent;
  let fixture: ComponentFixture<SelectorSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
