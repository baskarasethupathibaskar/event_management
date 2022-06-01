import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgdash1Component } from './imgdash1.component';

describe('Imgdash1Component', () => {
  let component: Imgdash1Component;
  let fixture: ComponentFixture<Imgdash1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Imgdash1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Imgdash1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
