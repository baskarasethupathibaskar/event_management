import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcersComponent } from './concers.component';

describe('ConcersComponent', () => {
  let component: ConcersComponent;
  let fixture: ComponentFixture<ConcersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
