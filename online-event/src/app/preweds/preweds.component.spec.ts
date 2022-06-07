import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrewedsComponent } from './preweds.component';

describe('PrewedsComponent', () => {
  let component: PrewedsComponent;
  let fixture: ComponentFixture<PrewedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrewedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrewedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
