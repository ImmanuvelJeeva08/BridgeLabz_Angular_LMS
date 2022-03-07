import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardedcandidateComponent } from './onboardedcandidate.component';

describe('OnboardedcandidateComponent', () => {
  let component: OnboardedcandidateComponent;
  let fixture: ComponentFixture<OnboardedcandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardedcandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardedcandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
