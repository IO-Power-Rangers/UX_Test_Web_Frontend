import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecordingsComponent } from './view-recordings.component';

describe('ViewRecordingsComponent', () => {
  let component: ViewRecordingsComponent;
  let fixture: ComponentFixture<ViewRecordingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRecordingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRecordingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
