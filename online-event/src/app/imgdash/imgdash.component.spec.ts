import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgdashComponent } from './imgdash.component';

describe('ImgdashComponent', () => {
  let component: ImgdashComponent;
  let fixture: ComponentFixture<ImgdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
