import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaEditItemComponent } from './pizza-edit-item.component';

describe('PizzaEditItemComponent', () => {
  let component: PizzaEditItemComponent;
  let fixture: ComponentFixture<PizzaEditItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaEditItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
