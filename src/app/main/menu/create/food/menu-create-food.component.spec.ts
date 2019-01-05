import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCreateFoodComponent } from './menu-create-food.component';

describe('MenuCreateFoodComponent', () => {
  let component: MenuCreateFoodComponent;
  let fixture: ComponentFixture<MenuCreateFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCreateFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCreateFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
