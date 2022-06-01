import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventupdate1Component } from './eventupdate1.component';

describe('Eventupdate1Component', () => {
  let component: Eventupdate1Component;
  let fixture: ComponentFixture<Eventupdate1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eventupdate1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventupdate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
