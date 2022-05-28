import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagedashboardComponent } from './packagedashboard.component';

describe('PackagedashboardComponent', () => {
  let component: PackagedashboardComponent;
  let fixture: ComponentFixture<PackagedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagedashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
