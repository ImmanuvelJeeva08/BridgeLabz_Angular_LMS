import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardprofileComponent } from './onboardprofile.component';

describe('OnboardprofileComponent', () => {
  let component: OnboardprofileComponent;
  let fixture: ComponentFixture<OnboardprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
