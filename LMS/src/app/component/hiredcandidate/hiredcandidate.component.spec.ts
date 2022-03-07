import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredcandidateComponent } from './hiredcandidate.component';

describe('HiredcandidateComponent', () => {
  let component: HiredcandidateComponent;
  let fixture: ComponentFixture<HiredcandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiredcandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiredcandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
