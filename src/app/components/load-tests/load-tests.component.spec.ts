import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadTestsComponent } from './load-tests.component';

describe('LoadTestsComponent', () => {
  let component: LoadTestsComponent;
  let fixture: ComponentFixture<LoadTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
