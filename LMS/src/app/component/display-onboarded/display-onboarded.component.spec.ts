import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOnboardedComponent } from './display-onboarded.component';

describe('DisplayOnboardedComponent', () => {
  let component: DisplayOnboardedComponent;
  let fixture: ComponentFixture<DisplayOnboardedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayOnboardedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayOnboardedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
