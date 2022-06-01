import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagedashComponent } from './packagedash.component';

describe('PackagedashComponent', () => {
  let component: PackagedashComponent;
  let fixture: ComponentFixture<PackagedashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagedashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
