import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymRegistrationMainComponent } from './gym-registration-main.component';

describe('GymRegistrationMainComponent', () => {
  let component: GymRegistrationMainComponent;
  let fixture: ComponentFixture<GymRegistrationMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymRegistrationMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymRegistrationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
