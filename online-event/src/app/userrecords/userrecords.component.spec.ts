import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrecordsComponent } from './userrecords.component';

describe('UserrecordsComponent', () => {
  let component: UserrecordsComponent;
  let fixture: ComponentFixture<UserrecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserrecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
