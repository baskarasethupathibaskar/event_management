import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Packagedash1Component } from './packagedash1.component';

describe('Packagedash1Component', () => {
  let component: Packagedash1Component;
  let fixture: ComponentFixture<Packagedash1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Packagedash1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Packagedash1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
