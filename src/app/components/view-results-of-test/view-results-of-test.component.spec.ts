import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResultsOfTestComponent } from './view-results-of-test.component';

describe('ViewResultsOfTestComponent', () => {
  let component: ViewResultsOfTestComponent;
  let fixture: ComponentFixture<ViewResultsOfTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewResultsOfTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResultsOfTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
