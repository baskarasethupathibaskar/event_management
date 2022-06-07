import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunclupComponent } from './funclup.component';

describe('FunclupComponent', () => {
  let component: FunclupComponent;
  let fixture: ComponentFixture<FunclupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunclupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunclupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
