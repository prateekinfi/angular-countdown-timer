import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownDisplayComponent } from './count-down-display.component';

describe('CountDownDisplayComponent', () => {
  let component: CountDownDisplayComponent;
  let fixture: ComponentFixture<CountDownDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDownDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
