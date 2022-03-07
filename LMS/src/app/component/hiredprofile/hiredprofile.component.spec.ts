import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredprofileComponent } from './hiredprofile.component';

describe('HiredprofileComponent', () => {
  let component: HiredprofileComponent;
  let fixture: ComponentFixture<HiredprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiredprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiredprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
