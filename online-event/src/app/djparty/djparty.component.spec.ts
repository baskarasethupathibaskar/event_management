import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjpartyComponent } from './djparty.component';

describe('DjpartyComponent', () => {
  let component: DjpartyComponent;
  let fixture: ComponentFixture<DjpartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjpartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DjpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
