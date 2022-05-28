import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrewedComponent } from './prewed.component';

describe('PrewedComponent', () => {
  let component: PrewedComponent;
  let fixture: ComponentFixture<PrewedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrewedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
