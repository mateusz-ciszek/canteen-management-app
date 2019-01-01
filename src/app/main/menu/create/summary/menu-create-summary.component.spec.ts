import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCreateSummaryComponent } from './menu-create-summary.component';

describe('MenuCreateSummaryComponent', () => {
  let component: MenuCreateSummaryComponent;
  let fixture: ComponentFixture<MenuCreateSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCreateSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCreateSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
