import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordingPermissionViewComponent } from './recording-permission-view.component';
import { CommonTestModule } from 'src/app/common-test/common-test.module';

describe('RecordingPermissionViewComponent', () => {
  let component: RecordingPermissionViewComponent;
  let fixture: ComponentFixture<RecordingPermissionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
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
