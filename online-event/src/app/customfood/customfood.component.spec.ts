import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomfoodComponent } from './customfood.component';

describe('CustomfoodComponent', () => {
  let component: CustomfoodComponent;
  let fixture: ComponentFixture<CustomfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomfoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
