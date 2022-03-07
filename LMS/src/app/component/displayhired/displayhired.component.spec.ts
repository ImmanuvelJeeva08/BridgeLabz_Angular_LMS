import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayhiredComponent } from './displayhired.component';

describe('DisplayhiredComponent', () => {
  let component: DisplayhiredComponent;
  let fixture: ComponentFixture<DisplayhiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayhiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayhiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
