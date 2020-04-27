import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordingPermissionViewComponent } from './recording-permission-view.component';

describe('RecordingPermissionViewComponent', () => {
  let component: RecordingPermissionViewComponent;
  let fixture: ComponentFixture<RecordingPermissionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordingPermissionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordingPermissionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
