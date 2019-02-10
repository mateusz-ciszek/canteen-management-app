import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdditionComponent } from './create-addition.component';

describe('CreateAdditionComponent', () => {
  let component: CreateAdditionComponent;
  let fixture: ComponentFixture<CreateAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
